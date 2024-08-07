import  Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'
import Button from './Button';
import { useMediaQuery, useTheme } from '@mui/material';

const Project = ({viewProject,code,image,title,skills}: {
  viewProject: string; code: string; image: string; title: string; skills: string[];
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{margin: "2.5rem 0"}}>
      {matches ? (
      <Image src={image} alt={title} width={343} height={253} /> 
      ) : (
        <Image src={image} alt={title} width={545} height={400} />
      )}
      <Typography variant='h4' sx={{margin: "1.25rem 0 0.5rem"}}>{title}</Typography>
      <Box sx={{ display: "flex"}}>
      {skills.map((skill) => {
        return <Typography variant='body2' key={skill} sx={{margin: "0 1.125rem 1.25rem 0"}}>{skill}</Typography>
      })}
      </Box>
      <Button link={viewProject} sx={{marginRight : "1.875rem"}}>VIEW PROJECT</Button>
      <Button link={code}>VIEW CODE</Button>
    </Box>
  )
}

export default Project