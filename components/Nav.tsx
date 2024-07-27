
import  Typography  from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import React from 'react'
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import NavLink from "./NavLink";

const Nav = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const navLinks = [{ src : "/githublight.png", link : "https://github.com/abhay2jn" },
      {src : "/mail.png", link : "mailto:abhayforwork02@gmail.com" },
      {src : "/linkedin.png", link : "https://www.linkedin.com/in/abhay2jain" },
      {src: "/x.png", link : "https://twitter.com/abhay2jn" },
    ];


  return (
    <Box sx = {{ display : "flex", justifyContent : "center"}}>
    <Box sx = {{display : "flex", flexDirection : matches ? "column" : "row", alignItems : "center",
        alignSelf : "center",
        maxWidth: matches ? "10.875rem" : "none"
    }} >
        <Typography sx = {{margin : matches ? "1.25rem" : 0}} variant="h1">Abhay Jain</Typography>
        <Box sx={{ display  :"flex", justifyContent : "space-between", width : matches ? "10.875rem" : "12.5rem" }}>
            {navLinks.map((navLink) => {
              return(
                <NavLink
                src={navLink.src} link = {navLink.link}
                key={navLink.src} />
              );
            })}
        </Box>
    </Box>
    </Box>
  )
}

export default Nav;