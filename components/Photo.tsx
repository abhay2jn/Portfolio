import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useMediaQuery, useTheme } from "@mui/material";
import { COLOR } from "@/styles/colors";

function Photo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matches ? "column" : "row-reverse",
        alignItems: "center",
        justifyContent: matches ? "none" : "space-around",
      }}
    >
      {matches ? (
        <Image
          src="/manInSpace.png"
          alt="img"
          width={174}
          height={383}
          style={{ marginBottom: "2.5rem", marginTop: "2.5rem" }}
        />
      ) : (
        <Image
          src="/manInSpace.png"
          alt="img"
          width={400}
          height={720}
          style={{ marginBottom: "2.5rem", marginTop: "2.5rem" }}
        />
      )}
      <Box
        sx={{
          textAlign: matches ? "center" : "left",
          maxWidth: matches ? "none" : "44.3125rem",
          marginTop: matches ? "none" : "8.0625rem",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: matches ? "auto" : "5.5rem" }}>
          Nice to meet you! I’m{" "}
          <u
            style={{
              textDecoration: "underline",
              textDecorationColor: COLOR.blueVoilet,
              textUnderlineOffset: "0.4rem",
            }}
          >
            Abhay Jain
          </u>
          .
        </Typography>
        <Typography
          variant={matches ? "body1" : "body2"}
          sx={{ margin: "1.5rem 0" }}
        >
          Based in India, I’m a full-stack developer passionate about building
          accessiable websites.
        </Typography>
        <Button link="mailto:abhay2jn@gmail.com">CONTACT ME</Button>
      </Box>
    </Box>
  );
}

export default Photo;
