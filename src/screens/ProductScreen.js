import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections } from "../actions/collectionActions";
import { setProduct } from "../actions/productActions";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductTitle from "../components/ProductTitle/ProductTitle";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ProductDetails from "../components/ProductDetails/ProductDetails.js";
import Loading from "../components/Loading/Loading";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductScreen = ({ match }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const collectionState = useSelector((state) => state.collection);
  const { collectionData, loadingCollection, errorCollection } =
    collectionState;
  const { productData, loadingProduct, errorProduct } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const fetchCollectionData = async () => {
      if (!collectionData?.products && !loadingCollection) {
        await dispatch(fetchCollections());
      }
    };

    fetchCollectionData();
  }, [dispatch, collectionData, loadingCollection]);

  useEffect(() => {
    const setProductData = async () => {
      if (collectionData?.products && !productData && !loadingProduct) {
        await dispatch(setProduct(Number(productId)));
      }
    };

    setProductData();
  }, [dispatch, productId, collectionData, productData, loadingProduct]);

  if (loadingCollection || loadingProduct) {
    return <Loading/>;
  }

  if (errorCollection || errorProduct) {
    return <Typography>Error: {errorCollection || errorProduct}</Typography>;
  }

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {collectionData && productData && (
          <>
            <Grid item xs={10} >
              <ProductTitle />
            </Grid>
            <Grid item xs={10}>
              <ProductCarousel />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default ProductScreen;
