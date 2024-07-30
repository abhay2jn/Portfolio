import React from 'react'
import MUIButton from "@mui/material/Button"

function Button({ text , link} : { text : string,
    link  : string,
}) {
  return (
    <MUIButton>{text}</MUIButton>
  )
}

export default Button;
