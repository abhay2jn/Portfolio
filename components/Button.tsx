import React from "react";
import MUIButton from "@mui/material/Button";
import { COLOR } from "@/styles/colors";
import { SxProps } from "@mui/material";

function Button({
  children,
  link,
  sx,
}: {
  children: React.ReactElement | string;
  link: string;
  sx?: SxProps;
}) {
  return (
    <a href={link}>
      <MUIButton
        sx={{
          color: COLOR.white,
          fontWeight: 700,
          fontSize: "1rem",
          padding: 0,
          ...sx,
        }}
      >
        <u
          style={{
            textDecoration: "underline",
            textDecorationColor: COLOR.blueVoilet,
            textUnderlineOffset: "1rem",
            textDecorationThickness: "0.25rem",
          }}
        >
          {children}
        </u>
      </MUIButton>
    </a>
  );
}

export default Button;
