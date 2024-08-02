import Typography from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import React from 'react'
import { COLOR } from '@/styles/colors'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from './Button'
import { Container } from '@mui/material'
import Nav from './Nav'

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{backgroundColor: COLOR.darkGray, paddingBottom: "3.75rem"}}>
    <Box sx={{textAlign : "center",
    padding: "3.5rem 0"}}>
        <Typography variant='h2'>Contact</Typography>
        <Typography variant='body1' sx={{marginTop: "0.4rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nisi laborum rerum doloribus sapiente quas optio q</Typography>
        <FormControl sx={{width: "90%"}}>
            <TextField variant='standard' label="Name"id='name' />
            <TextField variant='standard' label="Email"id='email' />
            <TextField variant='standard' label="Message"id='message'
            multiline rows={4} />
            <Button link='#send message' sx={{margin: "2rem 0 1rem 0", paddingLeft: "11.75rem"}}>SEND MESSAGE</Button>
        </FormControl>
        </Box>
        <hr style={{width: "100%", margin: "1rem auto"}}></hr>
        <Nav />
    </Container>
  )
}

export default Contact