import { useState, useMemo } from 'react';
import { BatGlyph } from './BatGlyph';
import Hyperspeed from './Hyperspeed';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, FileText } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function ContactSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [copied, setCopied] = useState(false);
  const emailAddress = 'gheraibiaroufaida0@gmail.com';

  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5] as [number, number],
    lightStickHeight: [1.3, 1.7] as [number, number],
    movingAwaySpeed: [60, 80] as [number, number],
    movingCloserSpeed: [-120, -160] as [number, number],
    carLightsLength: [12, 80] as [number, number],
    carLightsRadius: [0.05, 0.14] as [number, number],
    carWidthPercentage: [0.3, 0.5] as [number, number],
    carShiftX: [-0.8, 0.8] as [number, number],
    carFloorSeparation: [0, 5] as [number, number],
    colors: isLight
      ? {
          roadColor: 0xeeeeee,
          islandColor: 0xe2e2e8,
          background: 0xf8f8fb,
          shoulderLines: 0xd8d8e2,
          brokenLines: 0xd8d8e2,
          leftCars: [0xd946ef, 0x8b5cf6, 0xa855f7],
          rightCars: [0x0ea5e9, 0x3b82f6, 0x6366f1],
          sticks: 0x8b5cf6,
        }
      : {
          roadColor: 0x080808,
          islandColor: 0x0a0a0a,
          background: 0x000000,
          shoulderLines: 0x131318,
          brokenLines: 0x131318,
          leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
          rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
          sticks: 0x03b3c3,
        },
  }), [isLight]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`relative py-24 px-6 sm:px-12 transition-colors duration-300 overflow-hidden ${
        isLight
          ? 'bg-[#f8f8fb] border-t border-neutral-200/80'
          : 'bg-[#08080c] border-t border-white/10'
      }`}
    >
      {/* Background Hyperspeed Canvas */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-300 ${
          isLight ? 'opacity-25' : 'opacity-40'
        }`}
      >
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Ambient shadow / glow brought up to the top boundary so only the bottom half appears - locked to center */}
      <div
        className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] md:w-[500px] h-[240px] sm:h-[300px] md:h-[340px] rounded-full blur-[70px] sm:blur-[95px] z-0 transition-colors duration-300 ${
          isLight ? 'bg-violet-300/30' : 'bg-violet-950/45'
        }`}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 font-display transition-colors ${
            isLight ? 'text-[#14131f]' : 'text-white'
          }`}
        >
          Contact
        </h2>

        <p
          className={`max-w-lg mx-auto font-normal text-sm sm:text-base mb-8 leading-relaxed transition-colors ${
            isLight ? 'text-neutral-600' : 'text-neutral-400'
          }`}
        >
          Open to AI engineering roles, ML internships, and research opportunities. The fastest way to reach me is by email.
        </p>

        {/* Direct Email Card */}
        <div
          className={`p-6 sm:p-8 rounded-xl border backdrop-blur-md max-w-lg mx-auto mb-8 space-y-4 transition-all ${
            isLight
              ? 'border-neutral-200/90 bg-white/95 shadow-[0_8px_30px_rgba(124,58,237,0.06)]'
              : 'border-white/10 bg-[#0c0c14]/90 shadow-[0_8px_30px_rgba(0,0,0,0.7)]'
          }`}
        >
          <span
            className={`font-mono text-[9px] tracking-[2px] uppercase block transition-colors ${
              isLight ? 'text-neutral-500 font-semibold' : 'text-neutral-400'
            }`}
          >
            Direct Email
          </span>
          <div className="flex items-center justify-center gap-2.5">
            <span
              className={`font-mono text-sm sm:text-lg font-medium break-all transition-colors ${
                isLight ? 'text-violet-900 font-semibold' : 'text-violet-200'
              }`}
            >
              {emailAddress}
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              id="contact-copy-email-button"
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                isLight
                  ? 'border-neutral-200 bg-violet-50 text-neutral-700 hover:text-violet-900 hover:border-violet-300 hover:bg-violet-100'
                  : 'border-white/10 bg-violet-950/30 text-neutral-300 hover:text-white hover:border-violet-500'
              }`}
              title="Copy Email Address"
              aria-label="Copy Email Address"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            </button>
          </div>

          <div className="pt-2">
            <a
              href={`mailto:${emailAddress}`}
              id="contact-mail-cta"
              className={`inline-flex items-center gap-2 px-5 py-2 rounded font-mono text-[10px] tracking-[2px] uppercase font-semibold transition-all text-white ${
                isLight
                  ? 'bg-violet-600 hover:bg-violet-700 shadow-[0_4px_16px_rgba(124,58,237,0.25)]'
                  : 'bg-violet-600 hover:bg-violet-500 shadow-[0_0_16px_rgba(139,92,246,0.3)]'
              }`}
            >
              <Mail size={13} />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Social, CV & Profile Channels */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            id="social-link-github"
            className={`px-4 py-2.5 rounded border transition-all flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase group ${
              isLight
                ? 'border-neutral-200/90 bg-white hover:border-violet-300 hover:bg-violet-50/70 text-neutral-700 hover:text-neutral-900 shadow-xs'
                : 'border-white/10 bg-[#0c0c14] hover:border-violet-800 hover:bg-violet-950/20 text-neutral-300 hover:text-white'
            }`}
          >
            <Github
              size={13}
              className={`transition-colors ${
                isLight ? 'text-neutral-500 group-hover:text-violet-700' : 'text-neutral-400 group-hover:text-violet-400'
              }`}
            />
            <span>GitHub</span>
            <ArrowUpRight
              size={11}
              className={`transition-colors ${
                isLight ? 'text-neutral-400 group-hover:text-violet-700' : 'text-neutral-500 group-hover:text-violet-400'
              }`}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            id="social-link-linkedin"
            className={`px-4 py-2.5 rounded border transition-all flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase group ${
              isLight
                ? 'border-neutral-200/90 bg-white hover:border-violet-300 hover:bg-violet-50/70 text-neutral-700 hover:text-neutral-900 shadow-xs'
                : 'border-white/10 bg-[#0c0c14] hover:border-violet-800 hover:bg-violet-950/20 text-neutral-300 hover:text-white'
            }`}
          >
            <Linkedin
              size={13}
              className={`transition-colors ${
                isLight ? 'text-neutral-500 group-hover:text-violet-700' : 'text-neutral-400 group-hover:text-violet-400'
              }`}
            />
            <span>LinkedIn</span>
            <ArrowUpRight
              size={11}
              className={`transition-colors ${
                isLight ? 'text-neutral-400 group-hover:text-violet-700' : 'text-neutral-500 group-hover:text-violet-400'
              }`}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
