import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, IconButton, Snackbar, Alert, } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Instagram, Send, } from '@mui/icons-material';
import { toast } from 'react-toastify';


interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const Contact: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyUxHHPE8-_Ac1gNMwRzqFhw_2FinsThS3MTqlrQ-Fnra46VuunpZAIdsBl5zk_5FT57w/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    }).toString(),
                }
            );

            const data = await response.json();
            console.log("form", data)
            if (data.result === "success") {
                toast.success("Form Submitted Successfully ✅");
                setFormData({ name: '', email: '', message: '' });
                setShowSuccess(true);
            } else {
                toast.error("Failed to submit ❌ " + (data.error || ""));
            }

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
        }
    };

    const contactInfo = [
        {
            icon: <Email />,
            title: 'Email',
            value: 'mohamedadiljobs@gmail.com',
            href: 'mailto:mohamedadiljobs@gmail.com',
        },
        {
            icon: <Phone />,
            title: 'Phone',
            value: '+91 8870977965',
            href: 'tel:+91 8870977965',
        },
        {
            icon: <LocationOn />,
            title: 'Location',
            value: 'Cuddalore, TamilNadu, India',
            href: '#',
        },
    ];

    const socialLinks = [
        { icon: <GitHub />, href: 'https://github.com/MohamedAdilABD', label: 'GitHub' },
        { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/mohamed-adil-abd/', label: 'LinkedIn' },
        { icon: <Instagram />, href: 'https://www.instagram.com/_x_adxil_._/?igsh=MTBmZGZicjVqYnI0MA%3D%3D#', label: 'Instagram' },
    ];

    return (
        <Box
            id="contact"
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
                        Get In Touch
                    </Typography>
                </motion.div>

                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ mb: 3, color: 'text.primary' }}
                            >
                                Let's Work Together
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}
                            >
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Box
                                            component="a"
                                            href={info.href}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 2,
                                                textDecoration: 'none',
                                                color: 'text.secondary',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                                transition: 'color 0.3s ease',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    borderRadius: '50%',
                                                    background: 'rgba(99, 102, 241, 0.1)',
                                                    color: 'primary.main',
                                                    mr: 2,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                            >
                                                {info.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                                                    {info.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {info.value}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, color: 'text.primary' }}
                                >
                                    Follow Me
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {socialLinks.map((social) => (
                                        <motion.div
                                            key={social.label}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <IconButton
                                                href={social.href}
                                                target="_blank"
                                                sx={{
                                                    background: 'rgba(99, 102, 241, 0.1)',
                                                    color: 'primary.main',
                                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                                    '&:hover': {
                                                        background: 'rgba(99, 102, 241, 0.2)',
                                                        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                                                    },
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                sx={{
                                    background: 'background.paper',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}
                                    >
                                        Send Message
                                    </Typography>
                                    <Box component="form" onSubmit={handleSubmit}>
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            value={formData.name}
                                            onChange={handleChange('name')}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                            sx={{ mb: 3 }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange('email')}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                            sx={{ mb: 3 }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            multiline
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange('message')}
                                            error={!!errors.message}
                                            helperText={errors.message}
                                            sx={{ mb: 3 }}
                                        />
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                size="large"
                                                disabled={loading}
                                                endIcon={<Send />}
                                                sx={{
                                                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                                                        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
                                                    },
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </motion.div>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>

                <Snackbar
                    open={showSuccess}
                    autoHideDuration={6000}
                    onClose={() => setShowSuccess(false)}
                >
                    <Alert
                        onClose={() => setShowSuccess(false)}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        Message sent successfully! I'll get back to you soon.
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
};