import React from 'react';
import { Box, Typography, Avatar, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionTitle from '../components/SectionTitle';

const activities = [
  {
    title: 'CS Department Ambassador',
    org: 'Purdue Computer Science',
    image: '/images/purduecs.png',
    date: '2025 — Present',
    link: 'https://www.cs.purdue.edu/student-experience/meet-team.html',
    description:
      'Connect students with academic resources and research opportunities. Speak at information sessions for prospective students and families.',
  },
  {
    title: 'Executive Board',
    org: 'BoilerMake',
    image: '/images/boilermake.png',
    date: '2025 — Present',
    link: 'https://boilermake.org/',
    description:
      'Build and maintain our website and mobile app for Purdue\'s largest annual hackathon.',
  },
  {
    title: 'Treasurer & Initiative Lead',
    org: 'Undergraduate Student Board',
    image: '/images/usb.png',
    date: '2024 — Present',
    link: 'https://www.purdueusb.com/',
    description:
      'Manage club funding and budget. Dedicated to improving the student experience through a variety of social and academic initiatives.',
  },
  {
    title: 'Undergraduate Teaching Assistant',
    org: 'Purdue University',
    image: '/images/purduelogo.png',
    date: '2024 — 2026',
    description:
      'TA for CS 180, 182, 240 and ECON 210, 370 — office hours, exam proctoring, ygrading.',
  },
];

const Extracurriculars = () => {
  return (
    <Box>
      <SectionTitle subtitle="Campus involvements - what I'm involved in outside the classroom">
        Leadership
      </SectionTitle>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {activities.map((act) => {
          const OrgTag = act.link ? Link : Typography;
          const orgProps = act.link
            ? {
                href: act.link,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {};

          return (
          <Box
            component="li"
            key={`${act.org}-${act.title}`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '52px 1fr', md: '52px 1fr 140px' },
              gap: { xs: 1.75, md: 2.5 },
              alignItems: 'flex-start',
              py: 2.5,
              px: { xs: 0, sm: 1 },
              borderTop: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 2,
              transition: 'background 0.2s, border-color 0.2s',
              '&:hover': {
                background: 'rgba(185,251,192,0.03)',
                borderTopColor: 'rgba(185,251,192,0.22)',
                '& .lead-org': { color: '#b9fbc0' },
              },
              '&:last-child': {
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              },
            }}
          >
            <Avatar
              src={act.image}
              alt={act.org}
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
              <OrgTag
                {...orgProps}
                className="lead-org"
                sx={{
                  color: '#f2f2f2',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  fontFamily: '"Syne", sans-serif',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                  mb: 0.25,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  textDecoration: 'none',
                }}
              >
                {act.org}
                {act.link && <OpenInNewIcon sx={{ fontSize: 15, opacity: 0.65 }} />}
              </OrgTag>
              <Typography sx={{ color: '#9a9a9a', fontSize: '0.9rem', mb: 0.85 }}>
                {act.title}
              </Typography>
              <Typography
                sx={{
                  color: '#7d7d7d',
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  maxWidth: 560,
                }}
              >
                {act.description}
              </Typography>
              <Typography
                sx={{
                  color: '#666',
                  fontSize: '0.8rem',
                  mt: 0.75,
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {act.date}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: '#666',
                fontSize: '0.85rem',
                textAlign: 'right',
                pt: 0.4,
                display: { xs: 'none', md: 'block' },
              }}
            >
              {act.date}
            </Typography>
          </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Extracurriculars;
