import React, { useRef, useEffect } from 'react';
import { Container, Typography, Box, Button, Chip, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './Projects.css';

const projects = [
  {
    title: 'Motion',
    dates: 'January 2025 - April 2025',
    description: 'A social web app designed to connect people and inspire new adventures by sharing experiences and exploring together.',
    image: '/images/motion.png',
    link: 'https://www.motion.lat',
    tags: ['Typescript', 'Next.js', 'Tailwind', 'Prisma', 'MongoDB'],
  },
  {
    title: 'Shell',
    dates: 'February 2025 - May 2025',
    description: 'A custom command line shell supporting advanced features like piping, subshells, and process substitution.',
    image: '/images/vim.png',
    link: 'https://www.cs.purdue.edu/academic-programs/courses/canonical/cs252.html',
    tags: ['C', 'C++', 'Unix'],
  },
  {
    title: 'Dynamic Memory Allocator',
    dates: 'January 2025 - February 2025',
    description: 'A personalized dynamic memory allocator written in C, inspired by malloc.',
    image: '/images/malloc.png',
    link: 'https://www.cs.purdue.edu/academic-programs/courses/canonical/cs252.html',
    tags: ['C', 'Malloc'],
  },
  {
    title: 'Compiler',
    dates: 'October 2024 - December 2025',
    description: 'A custom compiler in x86-64 assembly language, with performance optimization through a C profiler',
    image: '/images/profiler.png',
    link: 'https://www.cs.purdue.edu/academic-programs/courses/canonical/cs250.html',
    tags: ['x86-64 Assembly', 'C'],
  },
  {
    title: 'PremierZone',
    dates: 'May 2024 - August 2024',
    description: 'A fantasy sports web app for the English Premier League, gathering real-time data for dynamic team management.',
    image: '/images/epl.png',
    link: 'https://github.com/tristansze/epl',
    tags: ['SpringBoot', 'Java', 'React.js'],
  },
  {
    title: 'Bumper',
    dates: 'January 2024 - May 2024',
    description: 'A personalized study assistant robot and web app, offering synchronized study rooms and AI-powered help.',
    image: '/images/robot.png',
    link: 'https://github.com/tristansze/chatbot',
    tags: ['Node.js', 'Express.js', 'React.js'],
  },
  {
    title: 'Concurrent Marketplace',
    dates: 'October 2023 - December 2023',
    description: 'A marketplace application empowering users to buy and sell items, built for concurrency and high volume loads.',
    image: '/images/shoppingcart.png',
    link: '#',
    tags: ['Java', 'Swing'],
  },
];

const Projects = () => {
  const swiperRef = useRef(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && !userInteracted.current) {
        const swiper = swiperRef.current.swiper;
        if (swiper && swiper.slideNext) {
          swiper.slideNext();
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', borderRadius: 6, boxShadow: 6, p: { xs: 2, md: 6 }, overflow: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4, color: '#fff' }}>
        My Projects
      </Typography>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation
        effect="coverflow"
        centeredSlides
        slidesPerView={3}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2.5,
          slideShadows: false,
        }}
        style={{ paddingBottom: 60 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          900: { slidesPerView: 3 },
        }}
        ref={swiperRef}
        onSlideChange={() => { userInteracted.current = true; }}
        onTouchStart={() => { userInteracted.current = true; }}
        onClick={() => { userInteracted.current = true; }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Box
              className="project-card"
              sx={{
                p: 0,
                borderRadius: 3,
                borderRadius: 18,
                boxShadow: 3,
                background: 'rgba(40, 20, 60, 0.98)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                transition: 'box-shadow 0.3s, transform 0.3s',
                height: 600,
                maxWidth: 680,
                mx: 'auto',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'scale(1.04) translateY(-6px)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#2a1746',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderTopLeftRadius: 18, borderTopRightRadius: 18 }}
                />
              </Box>
              <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center', color: '#fff', letterSpacing: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 1, textAlign: 'center', color: '#b9fbc0', fontWeight: 700, letterSpacing: 0.5 }}>
                  {project.dates}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, textAlign: 'center', color: '#fff', fontSize: 18, lineHeight: 1.6, px: 2, fontWeight: 500 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3, flexWrap: 'wrap', rowGap: 1.5 }}>
                  {project.tags.map((tag, i) => (
                    <Chip key={i} label={tag} sx={{ background: '#b9fbc0', color: '#2a1746', fontWeight: 600, fontSize: 15, mb: 0.5 }} />
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  sx={{ mt: 'auto', px: 4, fontWeight: 600, background: '#6c3fc5', color: '#fff', alignSelf: 'center', '&:hover': { background: '#b9fbc0', color: '#2a1746' } }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Projects; 