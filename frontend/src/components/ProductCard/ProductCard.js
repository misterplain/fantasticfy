import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { setProduct } from "../../actions/productActions";

import styles from "./styles";

function lowestPrice(prod) {
  let lowestPrice = parseFloat(prod.variants[0].price);
  prod.variants.forEach((variant) => {
    const variantPrice = parseFloat(variant.price);
    if (variantPrice < lowestPrice) {
      lowestPrice = variantPrice;
    }
  });
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(lowestPrice);
}

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={4}
      lg={3}
      key={product.id}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Link
        component={NavLink}
        to={`/product/${product.id}`}
        sx={{ textDecoration: "none" }}
        onClick={() => {
          window.scrollTo(0, 0);
          dispatch(setProduct(product.id));
        }}
      >
        {" "}
        <Box sx={styles.productCard} key={product.id}>
          <Box sx={styles.productCardImageWrapper}>
            <Box
              component='img'
              src={
                product.image
                  ? product.image.src
                  : "https://via.placeholder.com/150"
              }
              sx={styles.productCardImage}
              alt={product.image ? product.image.alt : "placeholder text"}
            />
          </Box>
          <Box sx={styles.productDetailsWrapper}>
            <Box sx={styles.title}>{product.title}</Box>
            <Box sx={styles.price}>${lowestPrice(product)}</Box>
            <Box sx={styles.description}>{product.description}</Box>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
};

export default ProductCard;
