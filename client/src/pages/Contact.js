import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Stack,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Lottie from 'lottie-react';
import phoneLottie from '../assets/phonelottie.json';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5050';

const fieldSx = {
  mb: 2.5,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(185, 251, 192, 0.4)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#b9fbc0',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,0.55)',
    '&.Mui-focused': {
      color: '#b9fbc0',
    },
  },
  '& .MuiInputBase-input': {
    color: '#e8e8e8',
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: 'info',
      message: 'Sending message...',
    });

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({
        type: 'success',
        message: "Message sent! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          fontFamily: '"Syne", sans-serif',
          fontSize: { xs: '1.75rem', sm: '2rem' },
          fontWeight: 700,
          color: '#f2f2f2',
          letterSpacing: '-0.03em',
          mb: 1,
        }}
      >
        Contact
      </Typography>
      <Box
        sx={{
          mb: 1.5,
          width: 48,
          height: 3,
          borderRadius: 1,
          background: 'linear-gradient(90deg, #b9fbc0 0%, transparent 100%)',
        }}
      />
      <Typography
        sx={{
          color: '#888',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          mb: 4,
          maxWidth: 420,
        }}
      >
        Drop a note below — I&apos;ll get back to you as soon as I can.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 5, md: 6 },
          alignItems: { xs: 'stretch', md: 'flex-start' },
        }}
      >
        <Box sx={{ flex: 1.4, minWidth: 0 }}>
          {status.message && (
            <Alert
              severity={status.type === 'info' ? 'info' : status.type}
              sx={{
                mb: 3,
                background:
                  status.type === 'success'
                    ? 'rgba(185, 251, 192, 0.08)'
                    : 'rgba(244, 67, 54, 0.08)',
                border: `1px solid ${status.type === 'success' ? '#b9fbc0' : '#f44336'}`,
                color: status.type === 'success' ? '#b9fbc0' : '#f44336',
              }}
            >
              {status.message}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={fieldSx}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={fieldSx}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              sx={fieldSx}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                background: '#b9fbc0',
                color: '#000',
                fontWeight: 600,
                px: 3.5,
                py: 1.25,
                borderRadius: 2,
                border: '1.5px solid #b9fbc0',
                '&:hover': {
                  background: 'transparent',
                  color: '#b9fbc0',
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Lottie
            animationData={phoneLottie}
            style={{ width: 200, maxWidth: '100%', height: 'auto', background: 'transparent' }}
            loop
            autoplay
          />
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://linkedin.com/in/tristan-sze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                color: '#0A66C2',
                background: 'rgba(255,255,255,0.04)',
                border: '1.5px solid #0A66C2',
                borderRadius: 2,
                p: 1.75,
                '&:hover': {
                  background: '#0A66C2',
                  color: '#fff',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              href="mailto:tsze@purdue.edu"
              aria-label="Email"
              sx={{
                color: '#b9fbc0',
                background: 'rgba(255,255,255,0.04)',
                border: '1.5px solid #b9fbc0',
                borderRadius: 2,
                p: 1.75,
                '&:hover': {
                  background: '#b9fbc0',
                  color: '#000',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
