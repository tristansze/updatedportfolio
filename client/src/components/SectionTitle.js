import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      component="h2"
      sx={{
        fontFamily: '"Syne", sans-serif',
        fontSize: { xs: '1.75rem', sm: '2rem' },
        fontWeight: 700,
        color: '#f2f2f2',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        mb: subtitle ? 1 : 0,
      }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography sx={{ color: '#7a7a7a', fontSize: '0.95rem', lineHeight: 1.5 }}>
        {subtitle}
      </Typography>
    )}
    <Box
      sx={{
        mt: 1.5,
        width: 48,
        height: 3,
        borderRadius: 1,
        background: 'linear-gradient(90deg, #b9fbc0 0%, transparent 100%)',
      }}
    />
  </Box>
);

export default SectionTitle;
