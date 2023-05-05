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
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>

      <Grid item>
        {" "}
        <AutoPlaySwipeableViews
          // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          axis='x-reverse'
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5000}
          //   sx={{ boxShadow: "none" }}
        >
          {product &&
            product?.images.map((step, index) => (
              <Grid container item xs={12} key={step.id}>
                {Math.abs(activeStep - index) <= 1 ? (
                  <>
                    <Grid item xs={12}>
                      <Box
                        component='img'
                        sx={styles.image}
                        src={step.src}
                        alt={step.alt}
                      />
                    </Grid>
                    {/* <Grid item xs={12} md={4}>
                      <Card sx={{}}>
                        <CardContent>
                          <Typography variant='h5' color='purple'>
                            {step.title}
                          </Typography>
                          <Typography
                            variant='body'
                            component='div'
                          >
                            {step.alt}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid> */}
                  </>
                ) : null}
              </Grid>
            ))}
        </AutoPlaySwipeableViews>
      </Grid>
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
    </>
  );
};

export default ProductCarousel;
