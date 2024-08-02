import Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { useMediaQuery, useTheme } from '@mui/material'


function Photo() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display : "flex",
     flexDirection : matches ? "column" : 'row-reverse'
     , alignItems : 'center',
     transform: "translateY(-22px)"}}>
        <Image src="/pankaj_swag.png" 
        alt='swag' 
        width={174}
        height={383}
        style={{ marginBottom : "2.5rem"}}
         />
         <Box sx={{ textAlign : 'center'}}>
            <Typography variant='h2'>Nice to meet you! I’m <u style={{textDecoration: "underline", textDecorationColor : "blueviolet",
                textUnderlineOffset: "0.4rem"
            }}>Abhay Jain</u>.</Typography>
            <Typography variant='body1' sx={{margin : "1.5rem"}}>Based in India, I’m a full-stack developer passionate about building accessiable website that are nice.
            </Typography>
            <Button link='mailto:abhayforwork02@gmail.com'>CONTACT ME</Button>
         </Box>
    </Box>
  )
}

export default Photo
