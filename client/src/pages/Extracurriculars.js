import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Department Ambassador',
    org: 'Purdue Computer Science',
    image: '/images/purduecs.png',
    date: 'March 2025 - Present',
    description: `As an ambassador for the department, I host drop-in hours to help students find research opportunities, academic support resources, and review resumes. I also speak at information sessions for prospective students and families, sharing my insights from my time as a student.`
  },
  {
    title: 'Treasurer & Initiative Lead',
    org: 'Undergraduate Student Board (USB)',
    image: '/images/usb.png',
    date: 'March 2024 - Present',
    description: `The Computer Science Undergraduate Student Board serves as a liaison between students and the department, organizing student forums, social events, and drop-in office hours. As Treasurer, I manage club spending and work with the department to receive proper funding.`,
  },
  {
    title: 'Developer & Event Organizer',
    org: 'BoilerMake',
    image: '/images/boilermake.png',
    date: 'March 2025 - Present',
    description: 'As an organizer for BoilerMake, Purdue\'s premier hackathon, I work on the development team responsible for maintaining and designing web and mobile apps. These apps provide resources for students before and during the hackathon, including application info, company workshops, and the event schedule.',
  },
  {
    title: 'Undergraduate Teaching Assistant',
    org: 'Purdue University',
    image: '/images/purduelogo.png',
    date: 'January 2024 - Present',
    description: `I served as a teaching assistant for CS 180, CS 182, and CS 240 as well as ECON 370 and ECON 210. I proctored exams and quizzes, hosted office hours, and provided additional tutoring to help students understand key concepts and prepare for exams.`,
  }
];

const Extracurriculars = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8, position: 'relative', borderRadius: 6, p: { xs: 2, md: 6 }, background: 'linear-gradient(135deg, #181024 0%, #2a1746 100%)', boxShadow: 6, overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4, color: '#fff', fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif' }}>
          Extracurricular
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {activities.map((act, idx) => (
            <Grid item xs={12} key={idx}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#b9fbc0', mb: 0.5, letterSpacing: 1, fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif' }}>{act.title}</Typography>
                <Typography variant="subtitle2" sx={{ color: '#b9fbc0', mb: 1, fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif' }}>{act.date}</Typography>
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
                    maxWidth: { xs: '100%', md: 320 },
                    width: { xs: '100%', md: '320px' },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Avatar src={act.image} alt={act.org} sx={{ width: 56, height: 56, borderRadius: 3, background: '#fff', objectFit: 'contain', p: 1, mb: 1 }} variant="rounded" imgProps={{ style: { objectFit: 'contain', width: '100%', height: '100%' } }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', textAlign: 'center', fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif' }}>{act.org}</Typography>
                  </Box>
                </motion.div>
                <Box sx={{ 
                  flex: 1, 
                  minWidth: 0,
                  width: { xs: '100%', md: 'auto' }
                }}>
                  <Typography variant="body1" sx={{ 
                    color: '#fff', 
                    fontSize: 17, 
                    lineHeight: 1.7, 
                    textAlign: { xs: 'center', md: 'left' }, 
                    fontFamily: 'Inter, IBM Plex Sans, Montserrat, Roboto, Arial, sans-serif',
                    px: { xs: 1, md: 0 }
                  }}>
                    {act.description}
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

export default Extracurriculars; 