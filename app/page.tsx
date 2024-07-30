"use client";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ backgroundColor : "#151515"}}>
      <Container maxWidth = "sm">
        <Nav  />
        <Photo />
      </Container>
    </Box>
  );
};

export default Home;
