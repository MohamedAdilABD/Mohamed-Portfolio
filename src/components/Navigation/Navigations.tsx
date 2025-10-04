import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme as useMuiTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';


const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {

    const { isDarkMode, toggleTheme } = useTheme();
    const muiTheme = useMuiTheme();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: isDarkMode
                    ? 'rgba(15, 15, 35, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(1px)',
                borderBottom: `1px solid ${muiTheme.palette.divider}`,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Mohamed
                    </Typography>
                </motion.div>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Button
                                onClick={() => scrollToSection(item.href)}
                                sx={{
                                    color: activeSection === item.href.substring(1)
                                        ? muiTheme.palette.primary.main
                                        : muiTheme.palette.text.primary,
                                    fontWeight: activeSection === item.href.substring(1) ? 600 : 400,
                                    '&:hover': {
                                        color: muiTheme.palette.primary.main,
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        </motion.div>
                    ))}
                </Box>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <IconButton onClick={toggleTheme} color="inherit">
                        {isDarkMode ? <LightMode /> : <DarkMode sx={{ color: muiTheme.palette.primary.main }} />}
                    </IconButton>
                </motion.div>
            </Toolbar>
        </AppBar>
    );
};