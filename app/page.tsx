"use client";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Photo from "@/components/Photo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ backgroundColor: "#151515" }}>
      <Image
        src="/pattern-rings.svg"
        alt="background"
        width={530}
        height={129}
        style={{
          position: "absolute",
          transform: matches
            ? "translate(-420px, 133px)"
            : "translate(-100px, 133px)",
        }}
      />
      <Container maxWidth="lg">
        <Nav />
        <Photo />
        <Skills />
        <Projects />
      </Container>
      <Contact />
    </Box>
  );
};

export default Home;
