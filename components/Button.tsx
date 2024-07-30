import React from 'react'
import MUIButton from "@mui/material/Button"
import { COLOR } from '@/styles/colors';

function Button({ children , link} : { children : React.ReactElement | string,
    link  : string,
}) {
  return (
    <a href={link}>
    <MUIButton sx={{color : COLOR.white, fontWeight : 700}}>
      <u 
    style={{textDecoration: "underline", textDecorationColor : 'blueviolet',
     textUnderlineOffset : "0.7rem",
     textDecorationThickness: "0.25rem"}} >
      {children}</u></MUIButton>
    </a>
  )
}

export default Button;
