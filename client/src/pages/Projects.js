import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 