import React from 'react';
import { Typography, Box, Tooltip } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

const hobbies = [
  {
    title: 'Fitness',
    description:
      'Lifting, rock climbing, running, and anything outdoors.',
    images: [
      { src: '/images/olentangyGame.jpg', tip: 'Soccer' },
      { src: '/images/hockingclimbing.png', tip: 'Hocking Hills State Park' },
      { src: '/images/rafting.JPG', tip: 'New River Gorge National Park' },
      { src: '/images/haileakala2.png', tip: 'Haileakala National Park' },
    ],
  },
  {
    title: 'Music',
    description:
      'R&B, rock, house — always digging for new artists.',
    images: [
      { src: '/images/currents.jpeg', tip: 'Currents - Tame Impala' },
      { src: '/images/rainbowcover.png', tip: 'In Rainbows - Radiohead' },
      { src: '/images/fred.jpg', tip: 'Actual Life 2 - Fred Again..' },
      { src: '/images/magdalena.jpg', tip: 'Imaginal Disk - Magdalena Bay' },
    ],
  },
  {
    title: 'Travel',
    description:
      'New places, good food, and a bit of adventure. Recently Japan, Vietnam, and Hawaii.',
    images: [
      { src: '/images/ninhbinh.jpg', tip: 'Ninh Binh, Vietnam' },
      { src: '/images/selfiehiroshima.JPG', tip: 'Hiroshima, Japan' },
      { src: '/images/lanikai.png', tip: 'Lanikai, Hawaii' },
      { src: '/images/skydiving.JPG', tip: 'North Shore, Hawaii' },
    ],
  },
  {
    title: 'Media',
    description:
      'Movies, TV, Anime, & Broadway. Always open to recommendations.',
    images: [
      { src: '/images/andor.jpeg', tip: 'Andor' },
      { src: '/images/perfectdays.jpeg', tip: 'Perfect Days' },
      { src: '/images/geass.jpg', tip: 'Code Geass' },
      { src: '/images/hadestown.jpeg', tip: 'Hadestown' },
    ],
  },
];

const Hobbies = () => {
  return (
    <Box>
      <SectionTitle subtitle="What I do when I'm not writing code.">
        More About Me
      </SectionTitle>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: { xs: 3, sm: 3.5 },
          alignItems: 'stretch',
        }}
      >
        {hobbies.map((hobby) => (
          <Box
            key={hobby.title}
            sx={{
              borderRadius: 2.5,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(14,14,14,0.9)',
              p: { xs: 2, sm: 2.25 },
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              transition: 'border-color 0.2s',
              '&:hover': {
                borderColor: 'rgba(185,251,192,0.32)',
                '& .hobby-title': { color: '#b9fbc0' },
              },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1.25,
                mb: 2,
              }}
            >
              {hobby.images.map((img) => (
                <Tooltip key={img.src} title={img.tip} arrow>
                  <Box
                    sx={{
                      aspectRatio: '1 / 1',
                      borderRadius: 1.75,
                      overflow: 'hidden',
                      border: '1px solid rgba(185,251,192,0.12)',
                      transition: 'transform 0.25s, border-color 0.2s',
                      cursor: 'default',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        borderColor: 'rgba(185,251,192,0.4)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={img.src}
                      alt={img.tip}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: img.objectPosition || 'center',
                        display: 'block',
                      }}
                    />
                  </Box>
                </Tooltip>
              ))}
            </Box>

            <Typography
              className="hobby-title"
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#f2f2f2',
                letterSpacing: '-0.02em',
                mb: 0.5,
                transition: 'color 0.2s',
              }}
            >
              {hobby.title}
            </Typography>
            <Typography
              sx={{
                color: '#888',
                fontSize: '0.9rem',
                lineHeight: 1.55,
              }}
            >
              {hobby.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Hobbies;
