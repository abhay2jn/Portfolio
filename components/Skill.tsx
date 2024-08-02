import  Typography  from '@mui/material/Typography'
import  Box from '@mui/material/Box'
import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material';

const Skill = ({skill, level}: { skill: string; level :string;}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return(
    <Box sx={{ margin: matches ? "1.5rem 0" : "3.625rem 0",
        marginRight : matches ? "0" : "6.25rem", width : matches ? "auto" : "17.5rem"
    }}>
        <Typography variant='h3' sx={{fontSize : matches ? "auto" : "3rem"}}>{skill}</Typography>
        <Typography variant={matches ? 'body1' : "body2"}>{level}</Typography>
    </Box>
    );
}

export default Skill;