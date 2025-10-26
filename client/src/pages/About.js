import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const aboutText = `My name is Tristan Sze and I am a junior at Purdue University where I am pursuing a double major in computer science and economics. I enjoy building software that solves problems and helps others. I am always looking for new opportunities so feel free to connect!`;

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8, borderRadius: 6, p: { xs: 2, md: 6 }, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', boxShadow: 6, overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* About Text */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#fff', mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', fontSize: 20, lineHeight: 1.7, textAlign: { xs: 'center', md: 'left' }, fontFamily: 'Roboto, Helvetica, Arial, sans-serif', letterSpacing: 0.5, whiteSpace: 'pre-line' }}>
            {aboutText}
          </Typography>
        </Box>
        {/* Floating Image */}
        <Box sx={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 4, md: 0 } }}>
          <motion.img
            src={'/images/proheadshot.jpg'}
            alt="Tristan Sze"
            style={{ 
              width: '320px', 
              height: 'auto', 
              maxWidth: '100%', 
              boxShadow: '0 8px 32px 0 rgba(108, 63, 197, 0.18)', 
              background: '#fff', 
              objectFit: 'cover', 
              border: '4px solid #b9fbc0',
              borderRadius: '8px'
            }}
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default About; 