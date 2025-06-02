import React from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

const AnimatedBox = styled(motion.div)({
  width: '100%',
  height: '100%',
});

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(144, 202, 249, 0.1) 0%, rgba(19, 47, 76, 0) 70%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4,
          }}
        >
          <AnimatedBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText variant="h1" gutterBottom>
              Your Name
            </GradientText>
          </AnimatedBox>

          <AnimatedBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </Typography>
          </AnimatedBox>

          <AnimatedBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(45deg, #90caf9 30%, #42a5f5 90%)',
                  boxShadow: '0 3px 5px 2px rgba(66, 165, 245, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #42a5f5 30%, #90caf9 90%)',
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(144, 202, 249, 0.08)',
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </AnimatedBox>

          <AnimatedBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Box
              sx={{
                mt: 8,
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(144, 202, 249, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(144, 202, 249, 0.2)',
                  }}
                >
                  <Typography variant="body1" color="primary">
                    {skill}
                  </Typography>
                </Box>
              ))}
            </Box>
          </AnimatedBox>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 