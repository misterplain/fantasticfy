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
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from "./styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ProductCarousel = ({ product }) => {
  //theme for carousel
  const theme = useTheme();
  //swipable
  const [activeStep, setActiveStep] = useState(0);
  console.log(activeStep);

  function getImageAndVariantInfo(product) {
    if (product) {
      const image = product.images[activeStep].src;
      const variant = product.images[activeStep].alt;
      return { image, variant };
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // console.log(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // console.log(activeStep);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    // console.log(step)
  };

  return (
    <>
      <Grid item>
        {" "}
        {/* <AutoPlaySwipeableViews
          // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          axis='x-reverse'
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={10000}
          //   sx={{ boxShadow: "none" }}
        > */}

        {product &&
          product?.images.map((step, index) => (
            <Grid container item xs={12} key={step.id}>
              {activeStep === index ? (
                <>
                  <Grid item xs={12}>
                    <Box
                      component='img'
                      sx={styles.image}
                      src={step.src}
                      alt={step.alt}
                    />
                  </Grid>
                  {product?.variants && (
                    <Grid item xs={12}>
                      {(() => {
                        const matchingVariant = product.variants.find(
                          (variant) => variant.image_id === step.id
                        );
                        if (matchingVariant) {
                          return (
                            <Typography variant="body1" key={matchingVariant.id}>
                              <Typography variant="body2">{matchingVariant.title}</Typography>
                              <Typography variant="body2">{matchingVariant.price}</Typography>
                            </Typography>
                          );
                        }
                        return null;
                      })()}
                    </Grid>
                  )}
                </>
              ) : null}
            </Grid>
          ))}
        {/* </AutoPlaySwipeableViews> */}
      </Grid>
      {product?.images.length > 1 ? (
        <Grid item xs={12}>
          {" "}
          <MobileStepper
            steps={product.images.length}
            position='static'
            activeStep={activeStep}
            sx={{ width: "80%", margin: "0 auto" }}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === product.images.length - 1}
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
                onClick={handleBack}
                disabled={activeStep === 0}
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
    </>
  );
};

export default ProductCarousel;
