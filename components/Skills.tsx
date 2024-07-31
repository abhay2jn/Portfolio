import { skills } from '@/data';
import  Box  from '@mui/material/Box';
import React from 'react'
import Skill from './Skill';


const Divider = () => {
  return <hr style={{ width: "100%", margin : "1rem 0"}}></hr>
}

const Skills = () => {
  return (
    <Box sx={{ display : "flex", 
      flexDirection : "column",
      alignItems : "center",
      textAlign: "center"}}>
        <Divider />
        {skills.map((skill) => {
            return <Skill skill={skill.skill} level={skill.level} key={skill.level} />
        })}
        <Divider />
    </Box>
  )
}

export default Skills