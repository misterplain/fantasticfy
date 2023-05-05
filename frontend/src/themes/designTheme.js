import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const designTheme = createTheme({
  palette: {
    primary: {
      main: "#0D1B2A",
    },
    secondary: {
      main: "#E0E1DD",
    },
    success: {
      main: "#778DA9",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto Mono, monospace",
    //   fontWeight: 600,
    //   fontSize: "40px",
    //   lineHeight: "55px",
      //   color: "#d4f2e3",
      [breakpoints.up("md")]: {
        // fontWeight: 500,
        // fontSize: "55px",
        // lineHeight: "70px",
      },
    },

    someStyle: {
      fontFamily: "Montserrat,sans-serif",
      textTransform: "capitalize",
    },
  },
  components: {
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       border: "0.5px solid #777FEB",
    //     },
    //     root: {
    //       borderRadius: "8px",
    //       color: "#d4f2e3",
    //       fontSize: "16px",
    //       lineHeight: "30px",
    //       fontWeight: 500,
    //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //         border: "2px solid #777FEB",
    //       },
    //       "&:hover .MuiOutlinedInput-notchedOutline": {
    //         border: "2px solid #777FEB",
    //       },
    //     },
    //   },
    // },
  },
});

export default designTheme;
