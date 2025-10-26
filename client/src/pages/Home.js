import React from 'react';
import { Container, Typography, Box, IconButton, Stack } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Lottie from 'lottie-react';
import computerLottie from '../assets/computerlottie.json';

// Illustration variable removed - using Lottie animation instead

const roles = [
  'software engineer.',
  'product builder.',
  'problem solver.',
  'tech enthusiast.',
  'lifelong learner.',
];

const socialLinks = [
  {
    icon: <LinkedInIcon sx={{ fontSize: 36 }} />, url: 'https://linkedin.com/in/tristan-sze', label: 'LinkedIn', color: '#0A66C2'
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 36 }} />, url: 'https://github.com/tristansze', label: 'GitHub', color: '#fff'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 36 }} />, url: 'https://leetcode.com/u/tristansze/', label: 'LeetCode', color: '#FFA116'
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', justifyContent: 'center', minHeight: { xs: '80vh', md: '70vh' }, py: { xs: 6, md: 10 } }}>
        {/* Dynamic Intro */}
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', textAlign: { xs: 'center', md: 'left' }, minWidth: 0, minHeight: 0, pr: { md: 8 }, pl: { md: 4 } }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', mb: 2, letterSpacing: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
            Hi, I'm Tristan
          </Typography>
          <Typography variant="h4" sx={{ color: '#b9fbc0', fontWeight: 600, mb: 4, minHeight: 60, fontSize: { xs: '1.2rem', md: '2rem' } }}>
            and I am a{' '}
            <TypeAnimation
              sequence={roles.flatMap(role => [role, 1800])}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              style={{ color: '#b9fbc0', fontWeight: 600 }}
            />
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
            {socialLinks.map((link, idx) => (
              <IconButton
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  color: link.color,
                  background: 'rgba(255,255,255,0.06)',
                  border: '2px solid',
                  borderColor: link.color,
                  borderRadius: 2,
                  p: 1.5,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: link.color,
                    color: link.label === 'GitHub' ? '#181024' : '#fff',
                    borderColor: link.color,
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
        {/* Illustration */}
        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0, minHeight: 0, mt: { xs: 6, md: 0 } }}>
          <Lottie
            animationData={computerLottie}
            style={{ width: '700px', maxWidth: '100%', height: 'auto', background: 'transparent' }}
            loop={true}
            autoplay={true}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 