import { FaGithub, FaLinkedin } from "react-icons/fa"
import  Typography  from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const Nav = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box sx = {{ display : "flex", justifyContent : "center"}}>
    <Box sx = {{display : "flex", flexDirection : matches ? "column" : "row", alignItems : "center",
        alignSelf : "center",
        maxWidth: matches ? "10.875rem" : "none"
    }} >
        <Typography sx = {{margin : matches ? "1.25rem" : 0}} variant="h1">Abhay Jain</Typography>
        <Box>
            <FaGithub width={20} height={20} />
            <CiMail width={20} height={20} />
            <FaLinkedin width={20} height={20} />
            <FaXTwitter width={20} height={20} />
        </Box>
    </Box>
    </Box>
  )
}

export default Nav;