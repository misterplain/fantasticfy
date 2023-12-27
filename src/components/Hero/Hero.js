import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import styles from "./styles";
import { ThemeContext } from "../../App.js";
import snowboardHero from "../../assets/snowboardHero.jpg";

const Hero = () => {
  return (
    <Box sx={styles.wrapper}>
      {" "}
      <Box
        component='img'
        src={snowboardHero}
        sx={styles.image}
        alt='computer'
      />
      <Box sx={styles.businessName}>
        <Typography variant='h1' sx={styles.title}>
          FANTASTIC SNOWBOARDS
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
