import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import { setProduct } from "../../actions/productActions";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  const inventory = product.variants.reduce((acc, variant) => {
    return acc + variant.inventory_quantity;
  }, 0); 

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
        sx={{ textDecoration: "none", width: "100%" }}
        onClick={() => {
          window.scrollTo(0, 0);
          dispatch(setProduct(product.id));
        }}
      >
        {" "}
        <Box sx={styles.productCard(theme)} key={product.id}>
          <Box sx={styles.productCardImageWrapper}>
            {product.image ? (
              <Box
                component='img'
                src={product.image.src}
                sx={styles.productCardImage}
                alt={product.image.alt}
              />
            ) : (
              <Box sx={styles.missingPhoto}>
                <Typography sx={{ fontSize: "3rem" }}>
                  {product.title}
                </Typography>
              </Box>
            )}
          </Box>{" "}
          <Box sx={styles.productDetailsWrapper}>
            <Box sx={styles.title}>{product.title}</Box>
            <Box sx={styles.inventory}>
              {" "}
              {product?.variants[0].inventory_management === "shopify" ? (
                <>
                  {inventory === 0 && (
                    <Typography sx={styles.outOfStock}>Out of Stock</Typography>
                  )}
                  {inventory > 0 && inventory < 20 && (
                    <Typography sx={styles.lowStock}>
                      Only {inventory} left in stock
                    </Typography>
                  )}
                  {inventory >= 20 && (
                    <Typography sx={styles.inStock}>In Stock</Typography>
                  )}
                </>
              ) : null}
            </Box>
            <Box sx={styles.price}>${lowestPrice(product)}</Box>
          </Box>{" "}
        </Box>
      </Link>
    </Grid>
  );
};

export default ProductCard;
