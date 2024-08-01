import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import React from 'react'
import Button from './Button'
import { projects } from '@/data'
import Project from './Project'

const Projects = () => {
  return (
    <Box sx={{margin: "5rem 0"}}>
        <Box sx={{ display : 'flex', justifyContent: "space-between"}}>
        <Typography variant='h2'>Projects</Typography>
        <Button link='mailto:abhayforwork02@gmail.com'>CONTACT ME</Button>
        </Box>
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
  )
}

export default Projects