import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import designTheme from "./themes/designTheme";
//material ui
import { Box, Typography } from "@mui/material";
//screens
import Layout from "./components/Layout/Layout";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

export const ThemeContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const [viewport, setViewport] = useState("");

  const theme = designTheme;

  useEffect(() => {

    //resize window
    function handleResize() {
      const keys = Object.keys(theme.breakpoints.values);
      let currentViewport = "";
      for (let i = keys.length - 1; i >= 0; i--) {
        const breakpoint = theme.breakpoints.values[keys[i]];
        if (window.innerWidth >= breakpoint) {
          currentViewport = keys[i];
          break;
        }
      }
      setViewport(currentViewport);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ theme.breakpoints]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ designTheme }}>
        {" "}
        <ThemeProvider theme={designTheme}>
          {" "}
          <Layout>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:productId' element={<ProductScreen />} />
            </Routes>
          </Layout>
          <Box
            position='fixed'
            bottom={0}
            left={0}
            bgcolor='rgba(255, 255, 255, 0.5)'
            padding={1}
            borderRadius={5}
          >
            <Typography>{viewport}</Typography>
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
