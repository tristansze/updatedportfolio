import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  useScrollTrigger,
  Slide,
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

  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'About', ref: refs.aboutRef },
    { name: 'Projects', ref: refs.projectsRef },
    { name: 'Contact', ref: refs.contactRef },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Your Name
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
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: 'rgba(19, 47, 76, 0.8)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your Name
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
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
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: 0,
                        left: '50%',
                        backgroundColor: 'primary.main',
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
      </Slide>
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
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 