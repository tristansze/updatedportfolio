import React from 'react';
import { Container, Typography, Box, Chip, Stack, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5050';

const projects = [
  {
    title: 'Harmoniq',
    dates: 'January 2026 - Present',
    description: 'A platform built for music lovers. Harmoniq has it all. Whether it\'s reviewing songs, compiling the perfect playlist, or finding the next song to play on repeat, Harmoniq brings the social aspects of music as close a couple of clicks.',
    image: `${API_URL}/api/images/construction.jpg`,
    link: '#',
    tags: ['React.js', 'Node.js', 'Express.js', 'Supabase'],
    inProgress: true,
  },
  {
    title: 'Infrastructure Monitoring',
    dates: 'January 2026 - Present',
    description: 'A server monitoring system using Prometheus to track individual health and performance metrics across a cluster of virtual machines. Metrics are aggregated through a centralized Grafana dashboard, providing real-time insights into CPU, memory, disk, and network usage.',
    image: `${API_URL}/api/images/construction.jpg`,
    link: '#',
    tags: ['Prometheus', 'Grafana', 'Linux', 'Docker'],
    inProgress: true,
  },
  {
    title: 'Motion',
    dates: 'January 2025 - April 2025',
    description: 'A social web app designed for the daring. Whether it\'s skydiving, exploring a new city, or eating at a new restraunt, Motion makes sharing your experiences with the world easy and accessible. Compete with friends to see who can acquire the most motion',
    image: `${API_URL}/api/images/motion.png`,
    link: 'https://www.motion.lat',
    tags: ['Typescript', 'Next.js', 'Supabase', 'MongoDB', 'Tailwind', 'Google API'],
  },
  {
    title: 'Shell',
    dates: 'February 2025 - May 2025',
    description: 'A custom command line shell supporting advanced features like piping, subshells, process substitution, and signal handling. Built from scratch to deepen understanding of Unix internals, process management, and systems-level programming.',
    image: `${API_URL}/api/images/vim.png`,
    tags: ['C', 'C++', 'Unix', 'Lex', 'Yacc'],
  },
  {
    title: 'Dynamic Memory Allocator',
    dates: 'January 2025 - February 2025',
    description: 'A personalized dynamic memory allocator written in C, inspired by malloc. Implements free-list management, coalescing, and splitting strategies to efficiently allocate and reclaim heap memory with minimal fragmentation.',
    image: `${API_URL}/api/images/malloc.png`,
    tags: ['C', 'Python'],
  },
  {
    title: 'Compiler',
    dates: 'October 2024 - December 2025',
    description: 'A custom compiler targeting x86-64 assembly language, featuring lexical analysis, parsing, semantic analysis, and code generation. Performance was benchmarked and optimized through a custom C profiler to identify and resolve bottlenecks in the compilation pipeline.',
    image: `${API_URL}/api/images/profiler.png`,
    tags: ['x86-64 Assembly', 'C', 'Lex', 'Yacc'],
  },
  {
    title: 'PremierZone',
    dates: 'May 2024 - August 2024',
    description: 'A fantasy sports web app for the English Premier League, gathering real-time data for dynamic team management. Users draft players, track live match stats, and compete on leaderboards throughout the season.',
    image: `${API_URL}/api/images/epl.png`,
    link: 'https://github.com/tristansze/epl',
    tags: ['SpringBoot', 'Java', 'React.js'],
  },
  {
    title: 'Bumper',
    dates: 'January 2024 - May 2024',
    description: 'A personalized study assistant robot and web app, offering synchronized study rooms and AI-powered help. Students can join collaborative rooms, ask questions to an integrated chatbot, and stay on track with built-in productivity tools.',
    image: `${API_URL}/api/images/robot.png`,
    link: 'https://github.com/tristansze/chatbot',
    tags: ['Node.js', 'Express.js', 'React.js', 'OpenAI API'],
  }
];

const ProjectCard = ({ project, index }) => (
  <Box key={index} sx={{ width: '100%' }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      style={{ height: '100%' }}
    >
      <Box
        sx={{
          borderRadius: 4,
          background: 'rgba(40, 20, 60, 0.98)',
          border: '1.5px solid #4b2e83',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(108, 63, 197, 0.25)',
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: '100%',
            height: 180,
            background: '#2a1746',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          {project.inProgress && (
            <Chip
              label="In Progress"
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: '#6c3fc5',
                color: '#fff',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: 0.5,
              }}
            />
          )}
        </Box>

        {/* Content */}
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Title row with link */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: '#fff', letterSpacing: 0.5, fontSize: 18 }}
            >
              {project.title}
            </Typography>
            {project.link && project.link !== '#' && (
              <IconButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: '#b9fbc0',
                  ml: 1,
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: '#fff',
                    background: 'rgba(185, 251, 192, 0.15)',
                  },
                }}
              >
                <OpenInNewIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}
          </Box>

          <Typography
            variant="subtitle2"
            sx={{ mb: 1.5, color: '#b9fbc0', fontWeight: 600, fontSize: 13 }}
          >
            {project.dates}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: 'rgba(255,255,255,0.85)',
              fontSize: 14,
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            {project.description}
          </Typography>

          {/* Tags */}
          <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
            {project.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  background: '#b9fbc0',
                  color: '#2a1746',
                  fontWeight: 600,
                  fontSize: 11,
                  height: 24,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </motion.div>
  </Box>
);

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', borderRadius: 6, boxShadow: 6, p: { xs: 2, md: 6 } }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 5, color: '#fff' }}>
        Projects
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 3,
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
