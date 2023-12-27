import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchCollections } from "../actions/collectionActions";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { setProduct } from "../actions/productActions";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Loading from "../components/Loading/Loading";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const collectionState = useSelector((state) => state?.collection);
  const { collectionData, loadingCollection, errorCollection } =
    collectionState;
  const productState = useSelector((state) => state?.product);
  const { productData, loadingProduct, errorProduct } = productState;

  useEffect(() => {
    const fetchData = async () => {
      if (!collectionData?.products) {
        await dispatch(fetchCollections());
      }
    };

    fetchData();
  }, [dispatch, collectionData?.products]);

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={12}>
        {" "}
        <Hero />
      </Grid>
      <Grid item xs={12}>
        {productData && (
          <Link
            component={NavLink}
            to={`/product/${productData.id}`}
            sx={{
              textDecoration: "none",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(setProduct(productData.id));
            }}
          >
            {" "}
            <Box
              sx={{
                width: "90%",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "20px", marginRight: "10px" }}>
                Last visited: {productData.title}
              </Typography>{" "}
              <KeyboardArrowRight sx={{ fontSize: "30px" }} />
              <KeyboardArrowRight sx={{ fontSize: "30px" }} />
            </Box>
          </Link>
        )}
      </Grid>
      <Grid item xs={12}>
        {loadingCollection && <Loading />}
        <Products />
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
