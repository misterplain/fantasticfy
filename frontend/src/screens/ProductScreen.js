import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductTitle from "../components/ProductTitle/ProductTitle";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ProductDetails from "../components/ProductDetails/ProductDetails.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductScreen = ({ match }) => {
  const { productId } = useParams();
  console.log(productId);

  const productData = useSelector((state) => state.product.product);
  console.log(productData);

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12}>
          <ProductTitle product={productData} />
        </Grid>
        <Grid item xs={6}>
          {" "}
          <ProductCarousel product={productData} />
        </Grid>
        <Grid item xs={6} >
          <ProductDetails product={productData} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductScreen;
