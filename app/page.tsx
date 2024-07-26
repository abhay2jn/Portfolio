"use client";
import Nav from "@/components/Nav";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Container maxWidth = "sm">
        <Nav  />
      </Container>
    </Box>
  );
};

export default Home;
