"use client";
import { createTheme } from "@mui/material";
import { COLOR } from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      fontSize: "1.42rem",
      fontWeight: 800,
    },
    h2 : {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1 : {
      fontSize : "1rem",
      fontWeight : 500,
      color: COLOR.gray,
    }
  },
});

export default theme;
