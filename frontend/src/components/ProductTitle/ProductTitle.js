import React from "react";
import Typography from "@mui/material/Typography";

const ProductTitle = ({ product }) => {
  return (
    <>
      <Typography variant='h1'>{product.title}</Typography>
    </>
  );
};

export default ProductTitle;
