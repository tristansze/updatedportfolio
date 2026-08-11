import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    title: 'Harmoniq',
    dates: '2026',
    description:
      'A social platform for music lovers. Writing reviews, playlists, and discovering what to play next.',
    image: '/images/harmoniq2.png',
    link: 'https://github.com/NoiceBroice/Harmoniq',
  },
  {
    title: 'Infrastructure Monitoring',
    dates: '2026',
    description:
      'Prometheus monitoring across a VM cluster with a Grafana dashboard for CPU, memory, disk, and network.',
    image: '/images/infraproject.png',
    link: 'https://github.com/tristansze/inframonitoring',
  },
  {
    title: 'Motion',
    dates: '2025',
    description:
      'A social web app for sharing experiences and competing with friends. Next.js, Supabase, Prisma, and MongoDB.',
    image: '/images/motion2.png',
    link: 'https://www.motion.lat',
  },
  {
    title: 'Shell',
    dates: '2025',
    description:
      'A custom Unix shell with piping, subshells, process substitution, and signal handling.',
    image: '/images/vim.png',
    link: null,
  },
  {
    title: 'Compiler',
    dates: '2024',
    description:
      'A compiler targeting x86-64 assembly. Supporting lexing, parsing, semantic analysis, and code generation.',
    image: '/images/profiler.png',
    link: null,
  },
];

const Projects = () => {
  return (
    <Box>
      <SectionTitle subtitle="Selected work — click through repos">
        Projects
      </SectionTitle>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: { xs: 3, sm: 3.5 },
        }}
      >
        {projects.map((project) => {
          const TitleTag = project.link ? Link : Typography;
          const titleProps = project.link
            ? {
                href: project.link,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {};

          return (
            <Box
              key={project.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  '& .project-title': { color: '#b9fbc0' },
                  '& .project-media': { borderColor: 'rgba(185,251,192,0.35)' },
                },
              }}
            >
              <Box
                className="project-media"
                sx={{
                  width: '100%',
                  maxWidth: 320,
                  aspectRatio: '16 / 10',
                  maxHeight: 150,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: '#0e0e0e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: project.imageFit === 'contain' ? 1.5 : 0,
                  transition: 'border-color 0.2s',
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    objectFit: project.imageFit || 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </Box>

              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <TitleTag
                    {...titleProps}
                    className="project-title"
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '1.2rem',
                      color: '#f2f2f2',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      transition: 'color 0.2s',
                    }}
                  >
                    {project.title}
                    {project.link && <OpenInNewIcon sx={{ fontSize: 15, opacity: 0.65 }} />}
                  </TitleTag>
                  <Typography sx={{ color: '#666', fontSize: '0.8rem', flexShrink: 0 }}>
                    {project.dates}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: '#888',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
