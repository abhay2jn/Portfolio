import React, { useState } from 'react';
import { TextField, FormControl, useTheme, useMediaQuery, Box } from '@mui/material';
import axios from 'axios';
import MUIButton from "@mui/material/Button"
import { COLOR } from '@/styles/colors';

interface FormValues {
  name: string;
  email: string;
  message: string,
}

const ContactComponent: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-email', formValues);
      alert('Message successfully sent!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <Box sx = {{width: matches ? "auto"  : "27.8125rem"}}>
    <form onSubmit={handleSubmit}>
      <FormControl>
        <TextField
        variant='standard'
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <TextField
        variant='standard'
          label="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <TextField 
        variant='standard'
        label = "Message"
        name="message"
        value={formValues.message}
        onChange={handleChange}
        multiline rows={4}
        required
        />
      <MUIButton sx={{margin:"2rem 0 1rem 0",color : COLOR.white, fontWeight : 700, fontSize: "1rem", padding: 0}} type='submit'> <u 
    style={{textDecoration: "underline", textDecorationColor : COLOR.blueVoilet,
     textUnderlineOffset : "1rem",
     textDecorationThickness: "0.25rem"}} >
      SEND MESSAGE</u></MUIButton>
      </FormControl>
    </form>
    </Box>
  );
};

export default ContactComponent;
