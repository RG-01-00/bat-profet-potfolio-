import { ThemeProvider, useTheme } from './ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-[#f8f8fb] text-[#14131f] selection:bg-violet-200 selection:text-violet-900'
          : 'bg-[#08080c] text-neutral-100 selection:bg-violet-950 selection:text-violet-200'
      }`}
    >
      {/* Top Fixed Navigation with Theme Switcher */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Projects Section */}
        <ProjectsSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}


