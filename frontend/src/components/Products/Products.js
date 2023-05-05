import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Product from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import styles from "./styles";

const Products = () => {
  const collectionState = useSelector((state) => state.collection);
  const { loading, error, collection } = collectionState;
  const productsCollection = collection?.products;

  return (
    <Box sx={styles.wrapper}>
      {/* individual product */}
      <Grid container spacing={1}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography>{error}</Typography>
        ) : (
          productsCollection?.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Products;
