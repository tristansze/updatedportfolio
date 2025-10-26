import React, { useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Extracurriculars from './pages/Extracurriculars';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
// Router imports removed - using scroll navigation instead

// Enhanced theme with more modern styling
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c3fc5',
      light: '#b9fbc0',
      dark: '#2a1746',
    },
    secondary: {
      main: '#b9fbc0',
      light: '#e0c3fc',
      dark: '#3a225d',
    },
    background: {
      default: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)',
      paper: 'rgba(40, 20, 60, 0.98)',
    },
  },
  typography: {
    fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif',
    fontSize: 15,
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: 0.1,
    },
    body2: {
      fontSize: '0.95rem',
      fontWeight: 400,
      letterSpacing: 0.1,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(24, 16, 36, 0.98)',
          borderRadius: 18,
          border: '1.5px solid #2a1746',
          boxShadow: '0 2px 24px 0 rgba(108, 63, 197, 0.10)',
        },
      },
    },
  },
});

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const extracurricularsRef = useRef(null);
  const contactRef = useRef(null);
  const hobbiesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        body: {
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fontSize: '15px',
          background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)',
          color: '#f5f5f5',
        },
        '.MuiContainer-root': {
          background: 'rgba(24, 16, 36, 0.98)',
          borderRadius: '18px',
          border: '1.5px solid #2a1746',
          boxShadow: '0 2px 24px 0 rgba(108, 63, 197, 0.10)',
        },
        '.MuiTypography-body1, .MuiTypography-body2': {
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fontSize: '0.98rem',
          fontWeight: 400,
          letterSpacing: '0.1px',
        },
        'img, .MuiAvatar-root, .MuiAvatar-img, .MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6': {
          position: 'relative',
          zIndex: 2,
        },
        // Custom Swiper navigation arrow styling
        '.swiper-button-next, .swiper-button-prev': {
          color: '#b9fbc0 !important',
          '&:after': {
            fontSize: '20px !important',
            fontWeight: 'bold !important',
          },
          '&:hover': {
            color: '#6c3fc5 !important',
          },
        },
        '.swiper-button-next:after, .swiper-button-prev:after': {
          background: 'rgba(24, 16, 36, 0.8) !important',
          borderRadius: '50% !important',
          width: '40px !important',
          height: '40px !important',
          display: 'flex !important',
          alignItems: 'center !important',
          justifyContent: 'center !important',
          border: '2px solid #b9fbc0 !important',
          boxShadow: '0 4px 12px rgba(108, 63, 197, 0.3) !important',
        },
      }} />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)',
        pt: { xs: 7, sm: 8 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(58, 34, 93, 0.1) 40px, rgba(58, 34, 93, 0.1) 41px), repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(58, 34, 93, 0.1) 40px, rgba(58, 34, 93, 0.1) 41px)',
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(108, 63, 197, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none',
          animation: 'float 6s ease-in-out infinite',
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      }}>
        <Navbar 
          onNavigate={scrollToSection}
          refs={{ homeRef, aboutRef, experienceRef, projectsRef, extracurricularsRef, hobbiesRef, contactRef }}
        />
        <Box sx={{ 
          maxWidth: '100%',
          overflowX: 'hidden',
          position: 'relative',
        }}>
          {/* Left side decorative elements */}
          <Box sx={{
            position: 'fixed',
            left: '2%',
            top: '20%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, rgba(185, 251, 192, 0.1), rgba(108, 63, 197, 0.1))',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'pulse 4s ease-in-out infinite',
          }} />
          
          <Box sx={{
            position: 'fixed',
            left: '1%',
            top: '60%',
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(108, 63, 197, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'float 8s ease-in-out infinite reverse',
          }} />

          {/* Right side decorative elements */}
          <Box sx={{
            position: 'fixed',
            right: '3%',
            top: '40%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(185, 251, 192, 0.08), rgba(108, 63, 197, 0.08))',
            borderRadius: '20px',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'rotate 10s linear infinite',
          }} />

          <Box sx={{
            position: 'fixed',
            right: '1%',
            top: '80%',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(185, 251, 192, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none',
            animation: 'float 12s ease-in-out infinite',
          }} />

          {/* Additional keyframes */}
          <Box sx={{
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
              '50%': { transform: 'scale(1.2)', opacity: 0.3 },
            },
            '@keyframes rotate': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }} />

          <Box ref={homeRef}>
            <Home />
          </Box>
          <Box ref={aboutRef}>
            <About />
          </Box>
          <Box ref={experienceRef}>
            <Experience />
          </Box>
          <Box ref={projectsRef}>
            <Projects />
          </Box>
          <Box ref={extracurricularsRef}>
            <Extracurriculars />
          </Box>
          <Box ref={hobbiesRef}>
            <Hobbies />
          </Box>
          <Box ref={contactRef}>
            <Contact />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
