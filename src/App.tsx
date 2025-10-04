import { Box } from '@mui/material';
import { ThemeContextProvider } from './context/ThemeContext';
import { Navbar } from './components/Navigation/Navigations';
import { Hero } from './components/Home/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <ThemeContextProvider>
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ pt: { xs: 7, md: 8 } }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </Box>
      </Box>
    </ThemeContextProvider>
  );
}

export default App;