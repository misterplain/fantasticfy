import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import styles from "./styles";

const Products = () => {
  const collectionState = useSelector((state) => state.collection);
  const { loadingCollection, errorCollection, collectionData } = collectionState;
  const productsCollection = collectionData?.products;

  return (
    <Box sx={styles.wrapper}>
      {/* individual product */}
      <Grid container spacing={1} marginLeft marginRight sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {loadingCollection ? (
          <Typography>Loading...</Typography>
        ) : errorCollection ? (
          <Typography>{errorCollection}</Typography>
        ) : (
          productsCollection?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Products;
