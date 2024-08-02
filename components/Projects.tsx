import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import React from 'react'
import Button from './Button'
import { projects } from '@/data'
import Project from './Project'
import { useMediaQuery, useTheme } from '@mui/material'

const Projects = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{margin: "5rem 0"}}>
        <Box sx={{ display : 'flex', justifyContent: "space-between", alignItems : "center",
        }}>
        <Typography variant='h2'sx={{fontSize: matches ? "auto" : "5.5rem"}}>Projects</Typography>
        <Button link='mailto:abhayforwork02@gmail.com'>CONTACT ME</Button>
        </Box>
        <Box sx={{display: "flex" ,flexDirection : matches ? "column" : "row",
          flexWrap : matches ? "nowrap" : "wrap",
          justifyContent : matches ? "none" : "space-between"
        }}>
        {projects.map((project) => {
          return <Project 
          viewProject={project.viewProject}
          code={project.code}
          title={project.title}
          image={project.image}
          skills={project.skills}
          key={project.title}
          />
        })}
        </Box>
    </Box>
  )
}

export default Projects