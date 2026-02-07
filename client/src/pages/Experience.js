import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5050';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Crown Equipment',
    image: `${API_URL}/api/images/crown.png`,
    date: 'August 2025 - Present',
    description: 'At Crown, I work as a fullstack developer on our sales team, helping to maintain and improve customer facing applications on our sales platform. I primarily use Spring Boot, Typescript, and Angular to address bugs, design new features, and update existing systems.'
  },
  {
    title: 'Software Engineering Intern',
    company: 'Battelle',
    image: `${API_URL}/api/images/battelle.png`,
    date: 'May 2025 - August 2025',
    description: `At Battelle, I developed a Laboratory Information Management System (LIMS) that improved efficiency across several national defense labs. My work revolved around building microservices using C# and ASP.NET and designing a scalable pipeline for automating file processing and storage with Amazon S3.`
  },
  {
    title: 'Undergraduate Research Assistant',
    company: "FACAI Lab @ Purdue",
    image: `${API_URL}/api/images/facai.png`,
    date: 'January 2024 - August 2024',
    description: `As a research assistant in Purdue's FACAI lab, I utilized Python and R to analyze global forestry data. I contributed to the development of a KNN model used to impute data in remote areas and a linear regression model used to estimate forest biomass, supporting research on forest health worldwide.`
  },
  {
    title: 'Software Engineering Intern',
    company: 'HUMN Capital',
    image: `${API_URL}/api/images/humncapital.png`,
    date: 'January 2024 - May 2024',
    description: `At HUMN Capital, I deployed a sentiment analysis model with the goal of improving manager efficiency in their 1-1 meetings with employees. Using Tensorflow, OpenCV, and Keras we extracted various emotions that contributed to a score used to evaluate manager effectiveness.`,
  }
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
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                alignItems: { xs: 'center', md: 'center' }, 
                gap: { xs: 3, md: 4 }, 
                mb: 2 
              }}>
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
                    width: '320px',
                    minHeight: 160,
                    flexShrink: 0,
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Avatar src={exp.image} alt={exp.company} sx={{ width: 56, height: 56, borderRadius: 3, background: '#fff', objectFit: 'contain', p: 1, mb: 1 }} variant="rounded" imgProps={{ style: { objectFit: 'contain', width: '100%', height: '100%' } }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>{exp.company}</Typography>
                  </Box>
                </motion.div>
                <Box sx={{ 
                  flex: 1, 
                  minWidth: 0, 
                  minHeight: { xs: 'auto', md: 160 }, 
                  display: 'flex', 
                  alignItems: 'center',
                  width: { xs: '100%', md: 'auto' }
                }}>
                  <Typography variant="body1" sx={{ 
                    color: '#fff', 
                    fontSize: 16, 
                    lineHeight: 1.5, 
                    textAlign: { xs: 'center', md: 'left' }, 
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif', 
                    letterSpacing: 0.5, 
                    px: { xs: 1, md: 2 }, 
                    py: 1 
                  }}>
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