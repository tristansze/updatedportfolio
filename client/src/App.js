import React, { useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Enhanced theme with more modern styling
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#f48fb1',
      light: '#fce4ec',
      dark: '#f06292',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
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
  },
});

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a1929 0%, #132f4c 100%)',
      }}>
        <Navbar 
          onNavigate={scrollToSection}
          refs={{ homeRef, aboutRef, projectsRef, contactRef }}
        />
        <Box sx={{ 
          maxWidth: '100%',
          overflowX: 'hidden',
        }}>
          <Box ref={homeRef} sx={{ minHeight: '100vh', pt: 8 }}>
            <Home />
          </Box>
          <Box ref={aboutRef} sx={{ minHeight: '100vh', pt: 8 }}>
            <About />
          </Box>
          <Box ref={projectsRef} sx={{ minHeight: '100vh', pt: 8 }}>
            <Projects />
          </Box>
          <Box ref={contactRef} sx={{ minHeight: '100vh', pt: 8 }}>
            <Contact />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
