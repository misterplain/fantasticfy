import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import MobileStepper from "@mui/material/MobileStepper";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles";

const ProductCarousel = ({ product }) => {
  const theme = useTheme();
  const [selectedImageStep, setSelectedImageStep] = useState(0);

  const { id, image, images, options, variants, body_html, title } =
    useSelector((state) => state?.product);

  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleCarouselNext = () => {
    setSelectedImageStep((prevActiveImageStep) => prevActiveImageStep + 1);
    const matchingVariant = variants.find(
      (variant) => variant.image_id === images[selectedImageStep + 1].id
    );
    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  };

  const handleCarouselBack = () => {
    setSelectedImageStep((prevActiveImageStep) => prevActiveImageStep - 1);
    const matchingVariant = variants.find(
      (variant) => variant.image_id === images[selectedImageStep - 1].id
    );
    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  };

  const handleVariantChange = (event) => {
    const newSelectedVariant = variants.find(
      (variant) => variant.option1 === event.target.value
    );
    setSelectedVariant(newSelectedVariant);

    const imageIndex = images.findIndex(
      (image) => image.id === newSelectedVariant.image_id
    );

    if (imageIndex !== -1) {
      setSelectedImageStep(imageIndex);
    }
  };

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={6}>
        {" "}
        {images &&
          images.map((step, index) => (
            <Grid container item xs={12} key={step.id}>
              {selectedImageStep === index ? (
                <>
                  <Grid item xs={12}>
                    <Box
                      component='img'
                      sx={styles.image}
                      src={step.src}
                      alt={step.alt}
                    />
                  </Grid>
                </>
              ) : null}
            </Grid>
          ))}
        {/* testing mobile stepper */}
        {images.length > 1 ? (
          <Grid item xs={12}>
            {" "}
            <MobileStepper
              steps={images.length}
              position='static'
              activeStep={selectedImageStep}
              sx={{ width: "80%", margin: "0 auto" }}
              nextButton={
                <Button
                  size='small'
                  onClick={handleCarouselNext}
                  disabled={selectedImageStep === images.length - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size='small'
                  onClick={handleCarouselBack}
                  disabled={selectedImageStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Grid>
        ) : null}
      </Grid>
      <Grid item xs={6}>
        {" "}
        {variants?.length > 1 ? (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Variant</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectedVariant.title}
                label='Variant'
                onChange={handleVariantChange}
              >
                {variants.map((variant, index) => (
                  <MenuItem key={index} value={variant.title}>
                    {variant.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : null}
        {selectedVariant && (
          <>
            {" "}
            <Typography>{selectedVariant?.price}</Typography>
            <Typography>
              {title}{" "}
              {variants?.length > 1 ? `: ${selectedVariant?.title}` : null}
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductCarousel;
