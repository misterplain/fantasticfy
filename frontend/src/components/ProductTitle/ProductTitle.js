import React from "react";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";

const ProductTitle = ({ product }) => {
  const productState = useSelector((state) => state.product);
  const { loadingProduct, errorProduct, productData } = productState;
  const { id, image, images, options, variants, body_html, title } =
    productData;

  console.log(productData);

  return <>{title && <Typography variant='h1'>{title}</Typography>}</>;
};

export default ProductTitle;
