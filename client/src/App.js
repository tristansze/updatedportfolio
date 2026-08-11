import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Extracurriculars from './pages/Extracurriculars';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#b9fbc0' },
    background: { default: '#050505', paper: '#0c0c0c' },
    text: { primary: '#f2f2f2', secondary: '#8a8a8a' },
  },
  typography: {
    fontFamily: '"Outfit", "Helvetica Neue", sans-serif',
    h1: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, textTransform: 'none' },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#050505', color: '#f2f2f2' },
      },
    },
  },
});

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const extracurricularsRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrollY(window.scrollY);
      setMaxScroll(Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  const progress = Math.min(scrollY / maxScroll, 1);

  const scrollToSection = (ref) => {
    const element = ref.current;
    if (!element) return;
    const navbarHeight = 72;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: '#050505',
            color: '#f2f2f2',
            margin: 0,
          },
          a: { color: 'inherit', textDecoration: 'none' },
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-18px) rotate(160deg)' },
          },
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.55 },
            '50%': { transform: 'scale(1.12)', opacity: 0.25 },
          },
          '@keyframes rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          '@keyframes drift': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(12px, -10px)' },
          },
        }}
      />
      <Box
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(ellipse 80% 50% at 10% -10%, rgba(185,251,192,0.07), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 20%, rgba(185,251,192,0.04), transparent 50%), #050505',
          color: '#f2f2f2',
          position: 'relative',
          overflowX: 'hidden',
          '&::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            background:
              'repeating-linear-gradient(0deg, transparent 0px, transparent 47px, rgba(185,251,192,0.035) 48px), repeating-linear-gradient(90deg, transparent 0px, transparent 47px, rgba(185,251,192,0.035) 48px)',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.85 - progress * 0.35,
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%)',
          },
        }}
      >
        {/* Soft fades / blends */}
        <Box
          sx={{
            position: 'fixed',
            top: '-10%',
            left: '-8%',
            width: '50%',
            height: '45%',
            background:
              'radial-gradient(ellipse at center, rgba(185,251,192,0.12) 0%, transparent 70%)',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.9 - progress * 0.45,
            transform: `translateY(${progress * 40}px)`,
            transition: 'opacity 0.15s linear',
          }}
        />
        <Box
          sx={{
            position: 'fixed',
            top: '25%',
            right: '-10%',
            width: '42%',
            height: '40%',
            background:
              'radial-gradient(ellipse at center, rgba(120,200,180,0.08) 0%, transparent 65%)',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.35 + progress * 0.45,
            transform: `translateY(${progress * -30}px)`,
            transition: 'opacity 0.15s linear',
          }}
        />
        <Box
          sx={{
            position: 'fixed',
            bottom: '-5%',
            left: '20%',
            width: '50%',
            height: '35%',
            background:
              'radial-gradient(ellipse at center, rgba(185,251,192,0.07) 0%, transparent 70%)',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.25 + progress * 0.55,
            transition: 'opacity 0.15s linear',
          }}
        />

        {/* A few floating bubbles / shapes */}
        <Box
          sx={{
            position: 'fixed',
            top: '14%',
            right: '5%',
            width: 180,
            height: 180,
            background: 'radial-gradient(circle, rgba(185,251,192,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'float 8s ease-in-out infinite',
            opacity: 0.85 - progress * 0.5,
          }}
        />
        <Box
          sx={{
            position: 'fixed',
            left: '2.5%',
            top: '32%',
            width: 84,
            height: 84,
            border: '1px solid rgba(185,251,192,0.14)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'pulse 5.5s ease-in-out infinite',
            opacity: 0.7 - progress * 0.25,
          }}
        />
        <Box
          sx={{
            position: 'fixed',
            right: '3%',
            top: '52%',
            width: 64,
            height: 64,
            border: '1px solid rgba(185,251,192,0.12)',
            borderRadius: 14,
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'rotate 20s linear infinite',
            opacity: 0.4 + progress * 0.4,
          }}
        />
        <Box
          sx={{
            position: 'fixed',
            left: '4%',
            bottom: '18%',
            width: 110,
            height: 110,
            background: 'radial-gradient(circle, rgba(185,251,192,0.07) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'drift 10s ease-in-out infinite',
            opacity: 0.3 + progress * 0.5,
          }}
        />

        <Navbar
          onNavigate={scrollToSection}
          refs={{ homeRef, experienceRef, projectsRef, extracurricularsRef, hobbiesRef, contactRef }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1080,
            mx: 'auto',
            px: { xs: 3, sm: 4 },
            pt: { xs: 10, sm: 12 },
            pb: 12,
          }}
        >
          <Box ref={homeRef}>
            <Home />
          </Box>
          <Box ref={experienceRef} sx={{ mt: { xs: 10, md: 14 } }}>
            <Experience />
          </Box>
          <Box ref={projectsRef} sx={{ mt: { xs: 10, md: 14 } }}>
            <Projects />
          </Box>
          <Box ref={extracurricularsRef} sx={{ mt: { xs: 10, md: 14 } }}>
            <Extracurriculars />
          </Box>
          <Box ref={hobbiesRef} sx={{ mt: { xs: 10, md: 14 } }}>
            <Hobbies />
          </Box>
          <Box ref={contactRef} sx={{ mt: { xs: 10, md: 14 } }}>
            <Contact />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
