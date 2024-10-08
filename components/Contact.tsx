import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLOR } from "@/styles/colors";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import Nav from "./Nav";
import ContactComponent from "./ContactComponent";
import Image from "next/image";

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: COLOR.darkGray, paddingBottom: "3.75rem" }}
    >
      <Image
        src="/pattern-rings.svg"
        alt="background"
        width={530}
        height={129}
        style={{
          position: "absolute",
          transform: matches
            ? "translate(-350px, 350px)"
            : "translate(-250px, 280px)",
        }}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: matches ? "center" : "left",
            padding: "3.75rem 0",
            display: "flex",
            flexDirection: matches ? "column" : "row",
            justifyContent: matches ? "none" : "space-between",
          }}
        >
          <Box sx={{ width: matches ? "auto" : "27.8125rem" }}>
            <Typography
              variant="h2"
              sx={{ fontSize: matches ? "auto" : "5.5rem" }}
            >
              Contact
            </Typography>
            <Typography
              variant={matches ? "body1" : "body2"}
              sx={{ marginTop: "0.4rem" }}
            >
              Thank you for visiting my portfolio! If you have any questions,
              project inquiries, or just want to say hello, feel free to reach
              out to me through clicking the send message button.
            </Typography>
          </Box>
          <ContactComponent />
        </Box>
        <hr style={{ width: "100%", margin: "1rem auto" }}></hr>
        <Nav />
      </Container>
    </Container>
  );
};

export default Contact;
