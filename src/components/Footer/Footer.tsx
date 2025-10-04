import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {

    return (
        <Box
            sx={{
                py: 4,
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            © 2025 Mohamed Adil.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};