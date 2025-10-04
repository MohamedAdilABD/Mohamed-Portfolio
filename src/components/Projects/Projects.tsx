import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, IconButton, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, Close } from '@mui/icons-material';
import PortfolioPic from "../../assets/Portfoilo-pic.png";
import EcommercePic from "../../assets/ecommerce-pic.jpg";
import EmployeeManagementPic from "../../assets/Employee-Management-pic.jpg";


export const Projects: React.FC = () => {

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A scalable full-stack e-commerce web application with secure payments and admin management.',
            longDescription: 'A complete e-commerce platform featuring product catalog, user authentication, shopping cart, secure payments using Stripe, order management, and an admin dashboard. Built with React for the frontend, Node.js/Express for the backend, and MongoDB for data storage. Designed for scalability and real-world business use.',
            image: EcommercePic,
            technologies: ['TypeScprit', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI'],
            githubUrl: 'https://github.com/MohamedAdilABD',
            liveUrl: 'https://example.com',
        },
        {
            id: 2,
            title: 'Portfolio Project',
            description: 'A modern personal portfolio website to showcase projects and skills.',
            longDescription: 'A fully responsive portfolio website built with React and Material-UI, featuring smooth animations using Framer Motion. The site highlights projects, technical skills, and professional experience. It includes project cards, GitHub/live links, and a clean dark-themed UI for an engaging user experience.',
            image: PortfolioPic,
            technologies: ['React', 'TypeScprit', 'Material-UI', 'Motion-Dev'],
            githubUrl: 'https://github.com/MohamedAdilABD',
            liveUrl: 'https://example.com',
        },
        {
            id: 3,
            title: 'Employee Management Project',
            description: 'A full-featured employee and staff management system with role-based access.',
            longDescription: 'An employee management system that allows organizations to manage staff details, roles, and permissions. Features include dashboards, recruitment tracking, attendance, shift scheduling, leave requests, and organizational hierarchy management. Built with React and Node.js for a seamless full-stack experience.',
            image: EmployeeManagementPic,
            technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
            githubUrl: 'https://github.com/MohamedAdilABD',
            liveUrl: 'https://example.com',
        },
        {
            id: 4,
            title: 'FITA Academy Recurment Project',
            description: 'A recruitment management application for handling student and job applicant data.',
            longDescription: 'A recruitment management system built for FITA Academy to streamline the hiring and student placement process. Includes candidate application forms, resume uploads, job postings, admin dashboard, applicant tracking, and interview scheduling. The system is responsive, user-friendly, and supports data-driven decision making.',
            image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
            technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
            githubUrl: 'https://github.com/MohamedAdilABD',
            liveUrl: 'https://example.com',
        },
    ];

    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const handleOpenModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <Box
            id="projects"
            sx={{
                py: 10,
                background: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        textAlign="center"
                        sx={{
                            mb: 6,
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Featured Projects
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                style={{ height: "100%" }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'background.paper',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 16px 40px rgba(99, 102, 241, 0.2)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                    onClick={() => handleOpenModal(project)}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            filter: 'brightness(0.8)',
                                            '&:hover': {
                                                filter: 'brightness(1)',
                                            },
                                            transition: 'filter 0.3s ease',
                                        }}
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 3, color: 'text.secondary' }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                            {project.technologies.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        background: 'rgba(99, 102, 241, 0.1)',
                                                        color: 'primary.main',
                                                        border: '1px solid rgba(99, 102, 241, 0.3)',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <IconButton
                                                href={project.githubUrl}
                                                target="_blank"
                                                size="small"
                                                sx={{
                                                    color: 'text.secondary',
                                                    '&:hover': { color: 'primary.main' },
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <GitHub />
                                            </IconButton>
                                            <IconButton
                                                href={project.liveUrl}
                                                target="_blank"
                                                size="small"
                                                sx={{
                                                    color: 'text.secondary',
                                                    '&:hover': { color: 'primary.main' },
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Launch />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<GitHub />}
                            href='https://github.com/MohamedAdilABD'
                            sx={{
                                background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Get More
                        </Button>
                    </Box>
                </motion.div>

                <Dialog
                    open={!!selectedProject}
                    onClose={handleCloseModal}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                        sx: {
                            background: 'background.paper',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        },
                    }}
                >
                    {selectedProject && (
                        <>
                            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h4" sx={{ color: 'text.primary' }}>
                                    {selectedProject.title}
                                </Typography>
                                <IconButton onClick={handleCloseModal}>
                                    <Close />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent>
                                <Box sx={{ mb: 3 }}>
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                </Box>
                                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                                    {selectedProject.longDescription}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                    {selectedProject.technologies.map((tech) => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            sx={{
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                color: 'primary.main',
                                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </DialogContent>
                            <DialogActions sx={{ p: 3 }}>
                                <Button
                                    href={selectedProject.githubUrl}
                                    target="_blank"
                                    startIcon={<GitHub />}
                                    variant="outlined"
                                >
                                    View Code
                                </Button>
                                <Button
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    startIcon={<Launch />}
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                    }}
                                >
                                    Live Demo
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>
            </Container>
        </Box>
    );
};