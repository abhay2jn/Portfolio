"use client";
import { createTheme } from "@mui/material";
import { COLOR } from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: "1.42rem",
      fontWeight: 800,
      color: COLOR.gray,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: COLOR.gray,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      color: COLOR.gray,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: COLOR.gray,
      lineHeight: "2rem",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      color: COLOR.gray,
      lineHeight: "1.62rem",
    },
    body2: {
      fontSize: "1.125rem",
      fontWeight: 500,
      color: COLOR.gray,
    },
  },
});

export default theme;
