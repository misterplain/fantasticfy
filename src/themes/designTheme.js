import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const designTheme = createTheme({
  palette: {
    primary: {
      main: "#063970",
    },
    secondary: {
      main: "#E0E1DD",
    },
    success: {
      main: "#778DA9",
    },
    inStock: {
      main: "#009900",
    }
  },
  typography: {
    h1: {
      fontFamily: "Roboto Mono, monospace",
    },

    someStyle: {
      fontFamily: "Montserrat,sans-serif",
      textTransform: "capitalize",
    },
  },
  components: {

  },
});

export default designTheme;
