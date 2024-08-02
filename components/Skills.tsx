import { skills } from '@/data';
import  Box  from '@mui/material/Box';
import React from 'react'
import Skill from './Skill';
import { useMediaQuery, useTheme } from '@mui/material';


const Divider = () => {
  return <hr style={{ width: "100%", margin : "1rem 0"}}></hr>
}

const Skills = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display : "flex", 
      flexDirection : matches ? "column" : "row",
      alignItems : "center",
      textAlign: matches ? "center" : "left",
      flexWrap : matches ? "nowrap" : "wrap",
      justifyContent : matches ? "auto" : "space-evenly"}}>
        <Divider />
        {skills.map((skill) => {
            return <Skill skill={skill.skill} level={skill.level} key={skill.level} />
        })}
        {matches ? <Divider /> : null}
    </Box>
  )
}

export default Skills