import  Typography  from '@mui/material/Typography'
import  Box from '@mui/material/Box'
import React from 'react'

const Skill = ({skill, level}: { skill: string; level :string;}) => {
    return(
    <Box sx={{ margin: "1.5rem 0"}}>
        <Typography variant='h3'>{skill}</Typography>
        <Typography variant='body1'>{level}</Typography>
    </Box>
    );
}

export default Skill;