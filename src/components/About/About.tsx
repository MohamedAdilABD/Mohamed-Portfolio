import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import picture from '../../assets/Adil_pic.jpg'

export const About: React.FC = () => {
    return (
        <Box
            id="about"
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
                        About Me
                    </Typography>
                </motion.div>

                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Box textAlign="center">
                                <Avatar
                                    src={picture}
                                    sx={{
                                        width: 250,
                                        height: 250,
                                        mx: 'auto',
                                        mb: 3,
                                        border: '4px solid',
                                        borderColor: 'primary.main',
                                        boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 3,
                                    fontSize: '1.2rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                I’m a passionate Full Stack Web and Mobile Developer with 1 year of professional experience building dynamic, user-friendly, and scalable applications. Skilled in MERN stack (MongoDB, Express, React, Node.js) and mobile app development (React Native), I enjoy turning complex problems into simple, elegant solutions.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 3,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                With hands-on experience in UI development, API integration, and responsive design, I specialize in creating seamless user experiences across web and mobile platforms. I’m also familiar with state management (Redux, Context API), RESTful APIs, authentication, and deployment on cloud platforms.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 3,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                Beyond coding, I’m enthusiastic about learning new technologies, contributing to team success, and continuously improving my problem-solving and debugging skills. My goal is to craft applications that not only function well but also deliver value to users.
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};