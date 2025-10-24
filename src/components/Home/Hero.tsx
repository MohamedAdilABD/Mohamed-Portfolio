import React from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyboardArrowDown, GitHub, LinkedIn, Download } from '@mui/icons-material';


export const Hero: React.FC = () => {

    const scrollToAbout = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Mohamed Adil CV.pdf';
        link.download = 'Mohamed Adil CV.pdf';
        link.click();
    };

    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #2d1b69 100%)',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
          `,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 500,
                                    mb: 2,
                                    letterSpacing: '0.1em',
                                }}
                            >
                                Hello, I'm
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    mb: 2,
                                    fontWeight: 800,
                                }}
                            >
                                Mohamed Adil
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 3,
                                    fontWeight: 400,
                                }}
                            >
                                Full Stack Web & Mobile Developer
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 4,
                                    maxWidth: '600px',
                                    mx: 'auto',
                                }}
                            >
                                Blending design and logic into meaningful code.
                                I create applications that connect people and possibilities.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<Download />}
                                    onClick={handleDownloadResume}
                                    sx={{
                                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Download Resume
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="#contact"
                                    sx={{
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        '&:hover': {
                                            borderColor: 'primary.light',
                                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Get In Touch
                                </Button>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <IconButton
                                        href="https://github.com/MohamedAdilABD"
                                        target="_blank"
                                        sx={{
                                            color: 'text.secondary',
                                            '&:hover': {
                                                color: 'primary.main',
                                                transform: 'translateY(-2px)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <GitHub />
                                    </IconButton>

                                    <IconButton
                                        href="https://www.linkedin.com/in/mohamed-adil-abd/"
                                        target="_blank"
                                        sx={{
                                            color: 'text.secondary',
                                            '&:hover': {
                                                color: 'primary.main',
                                                transform: 'translateY(-2px)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <LinkedIn />
                                    </IconButton>
                                </Box>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <IconButton
                                        onClick={scrollToAbout}
                                        sx={{
                                            color: 'text.secondary',
                                            '&:hover': { color: 'primary.main' },
                                        }}
                                    >
                                        <KeyboardArrowDown fontSize="large" />
                                    </IconButton>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );

};
