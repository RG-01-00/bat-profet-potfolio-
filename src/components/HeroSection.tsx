import { WebThreads } from './WebThreads';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export interface HeroSectionProps {
  isVisible?: boolean;
}

export function HeroSection({ isVisible = true }: HeroSectionProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-14 px-6 sm:px-12 overflow-hidden transition-colors duration-300 ${
        isLight ? 'bg-[#f8f8fb]' : 'bg-[#08080c]'
      }`}
    >
      {/* Dynamic Singular WebThread Background - Centered Continuous Wave */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-90">
        <WebThreads
          color1={isLight ? '#7C3AED' : '#A855F7'}
          color2={isLight ? '#4F46E5' : '#6366F1'}
          color3={isLight ? '#C084FC' : '#FFFFFF'}
          speed={0.2}
          threadCount={1}
          frequency={0.8}
          spread={0.26}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={isLight ? 0.015 : 0.022}
          falloff={0.6}
          thickness={0.75}
          brightness={isLight ? 0.95 : 0.9}
          opacity={isLight ? 0.75 : 0.85}
          mirror={false}
          shimmer={false}
          grain
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.25}
          backgroundColor={isLight ? '#f8f8fb' : '#08080c'}
          lightMode={isLight}
        />
      </div>

      {/* Center Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto py-10">
        {/* Header line with Name */}
        <div className="mb-5">
          <div className="space-y-4">
            <h1
              className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display mb-4 transition-colors ${
                isLight ? 'text-[#14131f]' : 'text-white'
              }`}
            >
              AI Engineer
            </h1>
            <div
              className={`text-xl sm:text-2xl md:text-3xl font-semibold font-display transition-colors ${
                isLight ? 'text-violet-600' : 'text-violet-400'
              }`}
            >
              Gheraibia Roufaida
            </div>
          </div>
        </div>

        {/* Concise, high-impact value statement */}
        <p
          className={`text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-10 sm:mb-14 transition-colors ${
            isLight ? 'text-neutral-600' : 'text-neutral-300'
          }`}
        >
          I build AI systems end-to-end from data and model development to deployment in real applications. Focus: applied ML, computer vision, and NLP.
        </p>

        {/* Immediate Actions (View Projects, Resume, Contact) */}
        <div className="flex flex-wrap items-center gap-3.5">
          {/* 1. View Projects */}
          <a
            href="#projects"
            id="hero-primary-cta"
            className="px-5 py-2.5 rounded bg-violet-600 hover:bg-violet-700 text-white font-mono text-[11px] tracking-[2px] uppercase font-semibold transition-all duration-200 flex items-center gap-2 shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:scale-[1.02]"
          >
            <span>View Projects</span>
            <ArrowDown size={13} />
          </a>

          {/* 2. Resume */}
          <a
            href="#about"
            id="hero-cv-cta"
            className={`px-4 py-2.5 rounded border font-mono text-[11px] tracking-[2px] uppercase transition-all duration-200 flex items-center gap-2 ${
              isLight
                ? 'border-neutral-200 bg-white hover:bg-violet-50/80 hover:border-violet-300 text-neutral-800 shadow-sm'
                : 'border-white/15 bg-[#0c0c14] hover:bg-violet-950/40 hover:border-violet-600 text-neutral-200 hover:text-white'
            }`}
          >
            <FileText size={13} className={isLight ? 'text-violet-600' : 'text-violet-400'} />
            <span>Resume</span>
            <ArrowDown size={12} className={isLight ? 'text-neutral-500' : 'text-neutral-400'} />
          </a>

          {/* 3. Contact */}
          <a
            href="#contact"
            id="hero-contact-cta"
            className={`px-4 py-2.5 rounded border font-mono text-[11px] tracking-[2px] uppercase transition-all duration-200 flex items-center gap-2 ${
              isLight
                ? 'border-neutral-200 bg-white hover:border-violet-300 hover:text-violet-900 text-neutral-700 shadow-sm'
                : 'border-white/10 bg-[#0c0c14] hover:border-neutral-700 text-neutral-300 hover:text-white'
            }`}
          >
            <Mail size={13} className={isLight ? 'text-violet-600' : 'text-neutral-400'} />
            <span>Contact</span>
          </a>

          {/* 4. GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            id="hero-github-cta"
            className={`px-4 py-2.5 rounded border font-mono text-[11px] tracking-[2px] uppercase transition-all duration-200 flex items-center gap-2 ${
              isLight
                ? 'border-neutral-200 bg-white hover:border-violet-300 hover:text-violet-900 text-neutral-700 shadow-sm'
                : 'border-white/10 bg-[#0c0c14] hover:border-neutral-700 text-neutral-300 hover:text-white'
            }`}
          >
            <Github size={13} className={isLight ? 'text-violet-600' : 'text-neutral-400'} />
            <span>GitHub</span>
          </a>
          {/* 5. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gheraibia-roufaida/"
            target="_blank"
            rel="noreferrer"
            id="hero-linkedin-cta"
            className={`px-4 py-2.5 rounded border font-mono text-[11px] tracking-[2px] uppercase transition-all duration-200 flex items-center gap-2 ${
              isLight
                ? 'border-neutral-200 bg-white hover:border-violet-300 hover:text-violet-900 text-neutral-700 shadow-sm'
                : 'border-white/10 bg-[#0c0c14] hover:border-neutral-700 text-neutral-300 hover:text-white'
            }`}
          >
            <Linkedin size={13} className={isLight ? 'text-violet-600' : 'text-neutral-400'} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto pt-8 flex items-center justify-between font-mono text-[9px] tracking-[2px] uppercase transition-colors ${
          isLight ? 'text-neutral-500' : 'text-neutral-500'
        }`}
      >
        <div className="flex items-center gap-2">
          <span>ROUFAIDA GHERAIBIA</span>
        </div>
        <a
          href="#projects"
          id="hero-scroll-indicator"
          className={`flex items-center gap-1.5 transition-colors ${
            isLight ? 'text-neutral-800 hover:text-violet-700' : 'text-white hover:text-violet-300'
          }`}
        >
          <span>EXPLORE PROJECTS</span>
          <ArrowDown size={11} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

