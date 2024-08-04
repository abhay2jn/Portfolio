import Typography from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import React from 'react'
import { COLOR } from '@/styles/colors'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from './Button'
import { Container, useMediaQuery, useTheme } from '@mui/material'
import Nav from './Nav'

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="xl" sx={{backgroundColor: COLOR.darkGray, paddingBottom: "3.75rem"}}>
      <Container maxWidth="lg">
    <Box sx={{textAlign : matches ? "center" : "left",
    padding: "3.75rem 0",
    display : "flex",
    flexDirection: matches ? "column" : "row",
    justifyContent: matches ? "none" : "space-between"}}>
      <Box sx={{width : matches ? "auto" : "27.8125rem"}}>
        <Typography variant='h2' sx={{fontSize : matches ? "auto" : "5.5rem"}}>Contact</Typography>
        <Typography variant={matches ? 'body1' : "body2"} sx={{marginTop: "0.4rem"}}>Thank you for visiting my portfolio! If you have any questions, project inquiries, or just want to say hello, feel free to reach out to me through clicking the send message button.</Typography>
      </Box>
        <FormControl sx={{width: matches ? "auto"  : "27.8125rem"}}>
            <TextField variant='standard' label="Name"id='name' />
            <TextField variant='standard' label="Email"id='email' />
            <TextField variant='standard' label="Message"id='message'
            multiline rows={4} />
            <Button link='#send message' sx={{margin: "2rem 0 1rem 0"}}>SEND MESSAGE</Button>
        </FormControl>
        </Box>
        <hr style={{width: "100%", margin: "1rem auto"}}></hr>
        <Nav />
        </Container>
    </Container>
  )
}

export default Contact