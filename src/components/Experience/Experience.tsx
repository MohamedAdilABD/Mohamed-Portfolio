import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, useTheme, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Work, School, EmojiEvents } from '@mui/icons-material';


export const Experience: React.FC = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const experiences = [
        {
            year: '2025 - Present',
            title: 'Junior Full Stack Developer',
            company: 'Assist 360 Singapore',
            description: 'Collaborating with a team of 8 developers to build scalable web applications. Implemented a microservices architecture that improved system performance by 40% and established coding standards to enhance code quality and maintainability.',
            achievements: ['Improved performance by 40%', 'Established coding standards'],
            technologies: ['React', 'TypeScript', 'Node.js', 'Nest.js', 'Docker', 'PostgreSQL'],
            icon: <Work />,
            color: '#6366f1',
        },
        {
            year: '2024 - Present',
            title: 'Full Stack Developer',
            company: 'Freelancer',
            description: 'Developed and maintained 5+ client projects using React, TypeScript, and Node.js. Partnered with design teams to deliver pixel-perfect UIs, reduced deployment time by 60%, and significantly improved client satisfaction.',
            achievements: ['Delivered 5+ projects', 'Reduced deployment time by 60%', 'Improved user satisfaction'],
            technologies: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
            icon: <Work />,
            color: '#8b5cf6',
        },
        {
            year: '2025 - 2027',
            title: 'MCA',
            company: 'B.S. Abdur Rahman Crescent Institute of Science & Technology',
            description: 'Gained advanced expertise in full-stack development and mobile applications. Built responsive web apps with React and TypeScript, achieving 50% faster load times through optimization. Worked closely with UX designers to implement intuitive user interfaces.',
            achievements: ['50% faster load times', 'Responsive design expert', 'UX collaboration'],
            technologies: ['Full Stack', 'Mobile Development', 'AI'],
            icon: <School />,
            color: '#ec4899',
        },
        {
            year: '2021 - 2024',
            title: 'B.Sc. in Computer Science',
            company: 'The New College',
            description: 'Actively involved in both academics and extracurricular activities. Elected as Department Secretary and later as Student Union Chairman, where I organized events and represented student interests. Contributed to several social service initiatives during college. Gained strong foundations in full-stack development and successfully completed an E-Commerce project as a final-year capstone.',
            achievements: ['Elected Department Secretary', 'Served as Student Union Chairman', 'Led social service initiatives', 'Completed E-Commerce final-year project'],
            technologies: ['C++', 'Java', 'Python', 'JavaScript', 'SQL', 'IoT', 'Cloud'],
            icon: <School />,
            color: '#10b981',
        },
    ];


    return (
        <Box
            id="experience"
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
                        Experience
                    </Typography>
                </motion.div>

                {!isMobile ? (
                    <Timeline position="alternate">
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <TimelineDot
                                            sx={{
                                                background: experience.color,
                                                color: 'white',
                                                width: 60,
                                                height: 60,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {experience.icon}
                                        </TimelineDot>
                                    </motion.div>
                                    {index < experiences.length - 1 && (
                                        <TimelineConnector
                                            sx={{
                                                background: 'linear-gradient(180deg, #6366f1, #8b5cf6)',
                                                width: 3,
                                            }}
                                        />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        style={{ width: '100%', maxWidth: 500 }}
                                    >
                                        <Card
                                            sx={{
                                                background: 'background.paper',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                                                },
                                                transition: 'all 0.3s ease',
                                                mb: 2,
                                                width: '100%',
                                            }}
                                        >
                                            <CardContent sx={{ p: 3, textAlign: 'left', }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ color: 'primary.main', mb: 1, fontWeight: 600 }}
                                                >
                                                    {experience.year}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}
                                                >
                                                    {experience.title}
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ color: 'secondary.main', mb: 2, fontWeight: 500 }}
                                                >
                                                    {experience.company}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}
                                                >
                                                    {experience.description}
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        mb: 3,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'flex-start',
                                                    }}
                                                >
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}
                                                    >
                                                        Key Achievements:
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start', }}>
                                                        {experience.achievements.map((achievement, achIndex) => (
                                                            <Box key={achIndex} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', }}>
                                                                <EmojiEvents sx={{ color: 'primary.main', mr: 1, fontSize: 16 }} />
                                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                    {achievement}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>

                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'flex-start', }}>
                                                    {experience.technologies.map((tech) => (
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
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                ) : (
                    <Box>
                        {experiences.map((experience, index) => (
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    style={{ width: '100%', maxWidth: 500 }}
                                >
                                    <Card
                                        sx={{
                                            background: 'background.paper',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
                                            },
                                            transition: 'all 0.3s ease',
                                            mb: 2,
                                            width: '100%',
                                        }}
                                    >
                                        <CardContent sx={{ p: 3, textAlign: 'left', }}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ color: 'primary.main', mb: 1, fontWeight: 600 }}
                                            >
                                                {experience.year}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}
                                            >
                                                {experience.title}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: 'secondary.main', mb: 2, fontWeight: 500 }}
                                            >
                                                {experience.company}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}
                                            >
                                                {experience.description}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    mb: 3,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}
                                                >
                                                    Key Achievements:
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start', }}>
                                                    {experience.achievements.map((achievement, achIndex) => (
                                                        <Box key={achIndex} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', }}>
                                                            <EmojiEvents sx={{ color: 'primary.main', mr: 1, fontSize: 16 }} />
                                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                {achievement}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'flex-start', }}>
                                                {experience.technologies.map((tech) => (
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
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Box>
                        ))}
                    </Box>
                )}
            </Container>
        </Box>
    );
};
