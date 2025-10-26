import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onNavigate, refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'About', ref: refs.aboutRef },
    { name: 'Experience', ref: refs.experienceRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Extracurriculars', ref: refs.extracurricularsRef },
    { name: 'Hobbies', ref: refs.hobbiesRef },
    { name: 'Contact', ref: refs.contactRef },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography 
        variant="h6" 
        onClick={() => onNavigate(refs.homeRef)}
        sx={{ 
          my: 2, 
          cursor: 'pointer',
          transition: 'color 0.2s',
          '&:hover': {
            color: '#b9fbc0',
          },
        }}
      >
        Tristan Sze
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            onClick={() => onNavigate(item.ref)}
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.08)',
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
          position="fixed"
          sx={{ 
            background: 'linear-gradient(135deg, #181024cc 0%, #2a1746cc 100%)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.18)',
            fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif',
            zIndex: 1301,
          }}
        >
          <Toolbar>
            <Typography 
              variant="h6" 
              component="div" 
              onClick={() => onNavigate(refs.homeRef)}
              sx={{ 
                flexGrow: 1,
                fontWeight: 700,
                color: '#fff',
                fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif',
                cursor: 'pointer',
                transition: 'color 0.2s',
                '&:hover': {
                  color: '#b9fbc0',
                },
              }}
            >
              Tristan Sze
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    color="inherit"
                    onClick={() => onNavigate(item.ref)}
                    sx={{
                      position: 'relative',
                      fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: 0,
                        left: '50%',
                        backgroundColor: '#b9fbc0',
                        transition: 'all 0.3s ease-in-out',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'background.paper',
            fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 