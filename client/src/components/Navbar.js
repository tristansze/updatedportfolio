import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onNavigate, refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const navItems = [
    { name: 'Experience', ref: refs.experienceRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Leadership', ref: refs.extracurricularsRef },
    { name: 'Hobbies', ref: refs.hobbiesRef },
    { name: 'Contact', ref: refs.contactRef },
  ];

  const handleNav = (ref) => {
    onNavigate(ref);
    setMobileOpen(false);
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1100,
            mx: 'auto',
            px: { xs: 3, sm: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="button"
            type="button"
            onClick={() => onNavigate(refs.homeRef)}
            sx={{
              all: 'unset',
              cursor: 'pointer',
              fontFamily: '"Syne", sans-serif',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#f2f2f2',
              letterSpacing: '-0.02em',
              '&:hover': { color: '#b9fbc0' },
            }}
          >
            Tristan Sze
          </Box>

          {isMobile ? (
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              sx={{ color: '#e8e8e8', p: 1 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
              {navItems.map((item) => (
                <Box
                  key={item.name}
                  component="button"
                  type="button"
                  onClick={() => onNavigate(item.ref)}
                  sx={{
                    all: 'unset',
                    cursor: 'pointer',
                    color: '#8a8a8a',
                    fontSize: '0.9rem',
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 500,
                    transition: 'color 0.15s',
                    '&:hover': { color: '#b9fbc0' },
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: '#000',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
            pt: 2,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItemButton key={item.name} onClick={() => handleNav(item.ref)}>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontFamily: '"Outfit", sans-serif',
                  color: '#e8e8e8',
                  fontSize: '1rem',
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
