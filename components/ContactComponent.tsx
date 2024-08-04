import React, { useState } from 'react';
import { TextField, FormControl, FormHelperText, useTheme, useMediaQuery, SxProps, Box } from '@mui/material';
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
      await axios.post('http://localhost:5000/send-email', formValues);
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
      </FormControl>
      <MUIButton sx={{margin:"2rem 0 1rem 0"}} type='submit' variant='contained' >SEND MESSAGE</MUIButton>
    </form>
    </Box>
  );
};

export default ContactComponent;
