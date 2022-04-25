import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#8631A0",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: { default: "#f8f9fe" },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontSize: "30px",
    },
    h2: {
      fontSize: "22px",
    },
    h3: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "12px",
    },
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

export default theme;
