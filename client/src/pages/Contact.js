import React, { useState } from 'react';
import {
  Container,
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

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

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
        message: 'Message sent successfully! I\'ll get back to you soon.',
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
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8, borderRadius: 6, p: { xs: 2, md: 6 }, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', boxShadow: 6, overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          gap: 6,
          alignItems: 'flex-start',
          justifyContent: 'center',
          mt: 6,
        }}>
          {/* Contact Form - Left Side */}
          <Box sx={{ flex: 2, minWidth: 0, px: { xs: 1, sm: 4, md: 8 }, py: 4 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#b9fbc0', 
                mb: 4, 
                fontWeight: 600,
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              Contact Me
            </Typography>
            {status.message && (
              <Alert 
                severity={status.type} 
                sx={{ 
                  mb: 3,
                  background: status.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                  border: `1px solid ${status.type === 'success' ? '#4caf50' : '#f44336'}`,
                  color: status.type === 'success' ? '#4caf50' : '#f44336',
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
                margin="normal"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.7)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#b9fbc0',
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.8)',
                    '&.Mui-focused': {
                      color: '#b9fbc0',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.7)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#b9fbc0',
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.8)',
                    '&.Mui-focused': {
                      color: '#b9fbc0',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff',
                  },
                }}
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
                margin="normal"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.7)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#b9fbc0',
                      borderWidth: 2,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.8)',
                    '&.Mui-focused': {
                      color: '#b9fbc0',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#fff',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ 
                  mt: 2,
                  background: '#b9fbc0',
                  color: '#181024',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  border: '2px solid #b9fbc0',
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'transparent',
                    color: '#b9fbc0',
                    borderColor: '#b9fbc0',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>

          {/* Contact Info - Right Side */}
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: { xs: 'center', lg: 'flex-start' },
            justifyContent: 'center',
            minHeight: { xs: 'auto', lg: '400px' },
            px: { xs: 1, sm: 4, md: 6 },
            py: 4,
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Lottie
                animationData={phoneLottie}
                style={{ width: '200px', height: 'auto', background: 'transparent' }}
                loop={true}
                autoplay={true}
              />
            </Box>
            <Stack 
              direction="row" 
              spacing={3} 
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              justifyContent="center"
            >
              <IconButton
                href="https://linkedin.com/in/tristan-sze"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: '#0A66C2',
                  background: 'rgba(255,255,255,0.08)',
                  border: '2px solid #0A66C2',
                  borderRadius: 2,
                  p: 2.5,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: '#0A66C2',
                    color: '#fff',
                    borderColor: '#0A66C2',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 36 }} />
              </IconButton>
              <IconButton
                href="mailto:tsze@purdue.edu"
                aria-label="Email"
                sx={{
                  color: '#b9fbc0',
                  background: 'rgba(255,255,255,0.08)',
                  border: '2px solid #b9fbc0',
                  borderRadius: 2,
                  p: 2.5,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: '#b9fbc0',
                    color: '#181024',
                    borderColor: '#b9fbc0',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 36 }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact; 