import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Your Name
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/projects"
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/contact"
          >
            Contact Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 