import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Lottie from 'lottie-react';
import computerLottie from '../assets/computerlottie.json';

const roles = [
  'backend developer.',
  'systems builder.',
  'software engineer.',
  'lifelong learner.',
];

const socialLinks = [
  {
    icon: <LinkedInIcon sx={{ fontSize: 26 }} />,
    url: 'https://linkedin.com/in/tristan-sze',
    label: 'LinkedIn',
    color: '#0A66C2',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 26 }} />,
    url: 'https://github.com/tristansze',
    label: 'GitHub',
    color: '#fff',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 26 }} />,
    url: 'https://leetcode.com/u/tristansze/',
    label: 'LeetCode',
    color: '#FFA116',
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '78vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 4, md: 5 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Box
        sx={{
          flex: 1.1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            color: '#b9fbc0',
            fontFamily: '"Outfit", sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Portfolio
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: { xs: '2.6rem', sm: '3.4rem' },
            fontWeight: 700,
            color: '#f5f5f5',
            letterSpacing: '-0.035em',
            mb: 1.5,
            lineHeight: 1.05,
          }}
        >
          Hi, I&apos;m Tristan
        </Typography>

        <Typography
          sx={{
            color: '#b9fbc0',
            fontWeight: 500,
            mb: 3,
            minHeight: 36,
            fontSize: { xs: '1.15rem', md: '1.35rem' },
          }}
        >
          and I am a{' '}
          <TypeAnimation
            sequence={roles.flatMap((role) => [role, 1800])}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            style={{ color: '#b9fbc0', fontWeight: 600 }}
          />
        </Typography>

        <Typography
          sx={{
            color: '#a3a3a3',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            mb: 1.5,
            maxWidth: 500,
          }}
        >
          Senior at Purdue studying Computer Science and Economics. Experience building full-stack products, designing cloud-native infrastructure, and developing scalable backend systems.
        </Typography>

        <Typography
          sx={{
            color: '#777',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            mb: 3.5,
            maxWidth: 500,
          }}
        >
          Interested in backend development, distributed systems, and agentic AI.
        </Typography>

        <Stack direction="row" spacing={1.5}>
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              sx={{
                color: link.color,
                background: 'rgba(255,255,255,0.03)',
                border: '1.5px solid',
                borderColor: link.color,
                borderRadius: 2,
                p: 1.15,
                transition: 'all 0.2s',
                '&:hover': {
                  background: link.color,
                  color: link.label === 'GitHub' ? '#000' : '#fff',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: { xs: 340, md: 480 },
        }}
      >
        <Lottie
          animationData={computerLottie}
          style={{ width: '100%', height: 'auto', background: 'transparent' }}
          loop
          autoplay
        />
      </Box>
    </Box>
  );
};

export default Home;
