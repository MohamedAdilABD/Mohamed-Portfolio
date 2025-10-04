import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    Code,
    Storage,
    Build,
} from '@mui/icons-material';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Code />,
        skills: [
            { name: 'HTML', level: 95 },
            { name: 'CSS', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'TypeScript', level: 80 },
            { name: 'React', level: 90 },
            { name: 'React Native', level: 70 },
            { name: 'Material-UI', level: 90 },
            { name: 'Redux', level: 80 },
        ],
    },
    {
        title: 'Backend',
        icon: <Storage />,
        skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Express.js', level: 90 },
            { name: 'Nest.js', level: 70 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'MongoDB', level: 95 },
            { name: 'RestAPI', level: 85 },
        ],
    },
    {
        title: 'Tools & Others',
        icon: <Build />,
        skills: [
            { name: 'Docker', level: 80 },
            { name: 'VS-Code', level: 95 },
            { name: 'PostMan', level: 90 },
            { name: 'Git', level: 95 },
            { name: 'Git-Hub', level: 95 },
            { name: 'Jest', level: 50 },
            { name: 'Figma', level: 75 },
        ],
    },
];

const technologies = [
    'HTML', 'CSS', 'JavaScpript', 'TypeScript', 'React', 'React Native', 'Redux', 'Node.js', 'Express.js', 'Nest.js', 'PostgreSQL', 'MongoDB',
    'Docker', 'Figma', 'Material-UI', 'Tailwind CSS', 'RestAPI', 'Git', 'Git-Hub', 'Jest', 'VS-Code', 'PostMan'
];

export const Skills: React.FC = () => {
    return (
        <Box
            id="skills"
            sx={{
                py: 10,
                background: 'linear-gradient(135deg, #1a1a3a 0%, #0f0f23 100%)',
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
                        Skills & Expertise
                    </Typography>
                </motion.div>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {skillCategories.map((category, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={category.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'background.paper',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 16px 40px rgba(99, 102, 241, 0.2)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                                    color: 'white',
                                                    mr: 2,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                            >
                                                {category.icon}
                                            </Box>
                                            <Typography variant="h5" sx={{ color: 'text.primary' }}>
                                                {category.title}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ space: 2 }}>
                                            {category.skills.map((skill, skillIndex) => (
                                                <Box key={skill.name} sx={{ mb: 2 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                                            {skill.name}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                            {skill.level}%
                                                        </Typography>
                                                    </Box>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: '100%' }}
                                                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={skill.level}
                                                            sx={{
                                                                height: 6,
                                                                borderRadius: 3,
                                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                                '& .MuiLinearProgress-bar': {
                                                                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                                                    borderRadius: 3,
                                                                },
                                                            }}
                                                        />
                                                    </motion.div>
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{ mb: 4, color: 'text.primary' }}
                    >
                        Technologies I Work With
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            justifyContent: 'center',
                        }}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Chip
                                    label={tech}
                                    sx={{
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        color: 'primary.main',
                                        border: '1px solid rgba(99, 102, 241, 0.3)',
                                        '&:hover': {
                                            background: 'rgba(99, 102, 241, 0.2)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};