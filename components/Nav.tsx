
import  Typography  from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import React from 'react'
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import NavLink from "./NavLink";
import { navLinks } from '@/data';

const Nav = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box sx = {{ display : "flex", justifyContent : "center"}}>
    <Box sx = {{display : "flex", flexDirection : matches ? "column" : "row", alignItems : "center",
        alignSelf : "center",
        maxWidth: matches ? "10.875rem" : "none",
        justifyContent: matches ? "none" : "space-between",
        width: matches ? "auto" : "100%",
        marginTop: matches ? "none" : "2.4375rem",
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