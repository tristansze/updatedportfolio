import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Crown',
    image: '/images/crown.png',
    date: 'August 2025 - Present',
    description: 'At Crown, I am a fullstack developer for the sales team, helping maintain applications used by customers on their sales platform. I utilize Spring, Angular.js, and TypeScript to develop new features, resolve bugs, and work with senior engineers to architect ways to improve the company\'s existing systems.'
  },
  {
    title: 'Software Engineering Intern',
    company: 'Battelle',
    image: '/images/battelle.png',
    date: 'May 2025 - August 2026',
    description: `At Battelle, I developed a scientific workflow web application that improved efficiency across defense labs. My work included building a REST API with C# and ASP.NET. I also designed a scalable data pipeline for automating lab file processing and storage using Amazon S3.`
  },
  {
    title: 'Undergraduate Research Assistant',
    company: "FACAI Lab @ Purdue",
    image: '/images/facai.png',
    date: 'January 2024 - August 2024',
    description: `As a research assistant in Purdue's FACAI lab, I worked on projects using machine learning to analyze global forestry data. I developed a KNN model to predict missing data in remote areas and a linear regression model to estimate forest biomass, supporting research on forest health worldwide.`
  },
  {
    title: 'Software Engineering Intern',
    company: 'HUMN Capital',
    image: '/images/humncapital.png',
    date: 'January 2024 - May 2024',
    description: `At HUMN Capital, I constructed a sentiment analysis system that processed thousands of minutes of manager-employee meetings. I used OpenCV, TensorFlow, and Keras to recognize emotions and track engagement. I also helped build a React dashboard for managers to visualize performance trends and improve meeting effectiveness.`
  },
  {
    title: 'Information Technology Intern',
    company: 'Olentangy Local School District',
    image: '/images/olentangy.png',
    date: 'May 2023 - August 2024',
    description: `During my internship at Olentangy Local School District, I provided IT support by troubleshooting hardware and software issues, setting up new devices, and managing repair tickets. This experience gave me valuable insight into supporting technology in an educational environment.`
  },
];

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8, borderRadius: 6, p: { xs: 2, md: 6 }, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', boxShadow: 6, overflow: 'hidden' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4, color: '#fff' }}>
        Experience
      </Typography>
      <Box sx={{ mt: 3, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} justifyContent="center">
          {experiences.map((exp, idx) => (
            <Grid item xs={12} key={idx}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#b9fbc0', mb: 0.5, letterSpacing: 1, fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>{exp.title}</Typography>
                <Typography variant="subtitle2" sx={{ color: '#b9fbc0', mb: 1, fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>{exp.date}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, mb: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(108, 63, 197, 0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    background: 'rgba(40, 20, 60, 0.98)',
                    borderRadius: 20,
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: 0,
                    boxShadow: '0 2px 12px 0 rgba(108, 63, 197, 0.06)',
                    border: '1.5px solid #4b2e83',
                    maxWidth: 320,
                    width: '100%',
                    minHeight: 160,
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Avatar src={exp.image} alt={exp.company} sx={{ width: 56, height: 56, borderRadius: 3, background: '#fff', objectFit: 'contain', p: 1, mb: 1 }} variant="rounded" imgProps={{ style: { objectFit: 'contain', width: '100%', height: '100%' } }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>{exp.company}</Typography>
                  </Box>
                </motion.div>
                <Box sx={{ flex: 1, minWidth: 0, minHeight: 160, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ color: '#fff', fontSize: 16, lineHeight: 1.5, textAlign: { xs: 'center', md: 'left' }, fontFamily: 'Roboto, Helvetica, Arial, sans-serif', letterSpacing: 0.5, px: 2, py: 1 }}>
                    {exp.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience; 