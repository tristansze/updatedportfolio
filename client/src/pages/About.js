import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" paragraph>
          [Your introduction and background]
        </Typography>
        <Typography variant="body1" paragraph>
          [Your skills and expertise]
        </Typography>
        <Typography variant="body1" paragraph>
          [Your interests and hobbies]
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 