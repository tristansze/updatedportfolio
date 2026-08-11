import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Lucid Motors',
    image: '/images/LucidMotors_Logo.jpg',
    date: 'May 2026 — Aug 2026',
    description:
      'Worked on cloud-native microservices enabling smart (V1G) charging for customers.',
    tech: ['Go', 'MongoDB', 'gRPC'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Crown Equipment',
    image: '/images/crown.png',
    date: 'Aug 2025 — May 2026',
    description: 'Full-stack development for company\'s sales platform.',
    tech: ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Battelle',
    image: '/images/battelle.png',
    date: 'May 2025 — Aug 2025',
    description:
      'Built microservices for a LIMS used across company\'s national defense labs',
    tech: ['C#', 'ASP.NET', 'SQL Server'],
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'FACAI Lab @ Purdue',
    image: '/images/facai.png',
    date: 'Jan 2024 — Aug 2024',
    description:
      'Focus on improving understanding of global forestry data',
    tech: ['Python', 'R'],
  },
  {
    title: 'Computer Vision Engineer',
    company: 'HUMN Capital',
    image: '/images/humncapital.png',
    date: 'Jan 2024 — May 2024',
    description:
      'Deployed a sentiment model to score manager effectiveness in 1-1 meetings.',
    tech: ['Python', 'TensorFlow', 'OpenCV', "React"],
  },
];

const Experience = () => {
  return (
    <Box>
      <SectionTitle subtitle="Internships and research - what I've worked on">
        Experience
      </SectionTitle>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {experiences.map((exp) => (
          <Box
            component="li"
            key={`${exp.company}-${exp.date}`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '52px 1fr', md: '52px 1fr 170px' },
              gap: { xs: 1.75, md: 2.5 },
              alignItems: 'flex-start',
              py: 2.5,
              px: { xs: 0, sm: 1 },
              borderTop: '1px solid rgba(255,255,255,0.06)',
              transition: 'background 0.2s, border-color 0.2s',
              borderRadius: 2,
              '&:hover': {
                background: 'rgba(185,251,192,0.03)',
                borderTopColor: 'rgba(185,251,192,0.22)',
                '& .exp-company': { color: '#b9fbc0' },
              },
              '&:last-child': {
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              },
            }}
          >
            <Avatar
              src={exp.image}
              alt={exp.company}
              variant="rounded"
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#fff',
                p: 0.6,
                mt: 0.15,
                border: '1px solid rgba(255,255,255,0.1)',
                '& img': { objectFit: 'contain' },
              }}
            />
            <Box>
              <Typography
                className="exp-company"
                sx={{
                  color: '#f2f2f2',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  fontFamily: '"Syne", sans-serif',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                  mb: 0.25,
                }}
              >
                {exp.company}
              </Typography>
              <Typography sx={{ color: '#9a9a9a', fontSize: '0.9rem', mb: 0.85 }}>
                {exp.title}
              </Typography>
              <Typography
                sx={{
                  color: '#7d7d7d',
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  maxWidth: 560,
                  mb: 1.25,
                }}
              >
                {exp.description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 0.75,
                }}
              >
                {exp.tech.map((t) => (
                  <Box
                    key={t}
                    component="span"
                    sx={{
                      px: 1,
                      py: 0.35,
                      fontSize: '0.75rem',
                      color: '#b9fbc0',
                      border: '1px solid rgba(185,251,192,0.28)',
                      borderRadius: 1,
                      background: 'rgba(185,251,192,0.06)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {t}
                  </Box>
                ))}
              </Box>
              <Typography
                sx={{
                  color: '#666',
                  fontSize: '0.8rem',
                  mt: 0.75,
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {exp.date}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: '#666',
                fontSize: '0.85rem',
                textAlign: 'right',
                pt: 0.4,
                display: { xs: 'none', md: 'block' },
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {exp.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
