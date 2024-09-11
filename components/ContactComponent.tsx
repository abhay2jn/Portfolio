import React, { useState } from "react";
import {
  TextField,
  FormControl,
  useTheme,
  useMediaQuery,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import MUIButton from "@mui/material/Button";
import { COLOR } from "@/styles/colors";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactComponent: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/send-email", formValues);
      alert("Message successfully sent!");
      setFormValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: matches ? "auto" : "27.8125rem" }}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            variant="standard"
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <TextField
            variant="standard"
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <TextField
            variant="standard"
            label="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <Box sx={{ margin: "2rem 0 1rem 0", position: "relative" }}>
            <MUIButton
              sx={{
                color: COLOR.white,
                fontWeight: 700,
                fontSize: "1rem",
                padding: 0,
                ...(loading && {
                  color: "transparent",
                }),
              }}
              type="submit"
              disabled={loading}
            >
              <u
                style={{
                  textDecoration: "underline",
                  textDecorationColor: COLOR.blueVoilet,
                  textUnderlineOffset: "1rem",
                  textDecorationThickness: "0.25rem",
                }}
              >
                SEND MESSAGE
              </u>
            </MUIButton>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: COLOR.white,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
          {loading && (
            <Typography variant="body2" color="white" sx={{ marginTop: 2 }}>
              Sending...
            </Typography>
          )}
        </FormControl>
      </form>
    </Box>
  );
};

export default ContactComponent;
