import React from "react";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
const ProductTitle = ({ product }) => {
  const productState = useSelector((state) => state.product);
  const { loadingProduct, errorProduct, productData } = productState;
  const { id, image, images, options, variants, body_html, title } =
    productData;

  return <>{title && <Typography variant='h1' sx={styles.productTitle}>{title}</Typography>}</>;
};

export default ProductTitle;
