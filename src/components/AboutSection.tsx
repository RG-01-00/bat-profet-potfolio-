import { useState } from 'react';
import { BatGlyph } from './BatGlyph';
import { CrtTechStack } from './CrtTechStack';
import { Brain, Cpu, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function AboutSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [showMoreBio, setShowMoreBio] = useState(false);

  return (
    <section
      id="about"
      className={`relative py-20 px-6 sm:px-12 transition-colors duration-300 ${
        isLight ? 'bg-[#f8f8fb] border-t border-neutral-200/80' : 'bg-[#06060a] border-t border-white/5'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display mb-4 transition-colors ${
              isLight ? 'text-[#14131f]' : 'text-white'
            }`}
          >
            Engineering Profile
          </h2>
          <p
            className={`text-xs sm:text-sm font-mono transition-colors ${
              isLight ? 'text-neutral-600' : 'text-neutral-400'
            }`}
          >
            I like my models running on-device, not waiting on a server.
          </p>
        </div>

        {/* Recruiter-Friendly 2-Column Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-start">
          {/* Main Narrative Statement */}
          <div
            className={`lg:col-span-6 space-y-4 text-sm font-normal leading-relaxed transition-colors ${
              isLight ? 'text-neutral-700' : 'text-neutral-300'
            }`}
          >
            <p>
              The project I&apos;m proudest of is a real-time facial emotion recognition app that runs entirely in the browser no backend, no data ever leaving the device, just a model doing its job on ordinary hardware. Making something that fast and that accurate without a GPU to lean on was the actual fun part. It&apos;s the instinct behind everything I build: a model isn&apos;t done until it works for someone, on their machine, not just in an evaluation script.
            </p>

            {/* "See More" for Deep Background (About) */}
            <div className="pt-2">
              <button
                type="button"
                id="about-see-more-toggle"
                onClick={() => setShowMoreBio(!showMoreBio)}
                className={`font-mono text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isLight
                    ? 'text-violet-700 hover:text-violet-900 font-semibold'
                    : 'text-violet-400 hover:text-violet-300'
                }`}
              >
                <span>{showMoreBio ? 'Hide Additional Details' : 'Show Additional Details'}</span>
                {showMoreBio ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showMoreBio && (
                <div
                  className={`mt-3 p-4 rounded-lg border space-y-3 text-xs font-mono transition-all ${
                    isLight
                      ? 'bg-white border-neutral-200/90 text-neutral-700 shadow-xs'
                      : 'bg-[#0c0c14] border-white/10 text-neutral-300'
                  }`}
                >
                  <p>
                    Outside of models, I draw, I show up to hackathons for the 48-hour chaos of building something from nothing (placed 3rd building an AI-powered ERP dashboard), and I&apos;m always looking for the next weird constraint to design around. Currently looking for AI engineering roles, ML internships, and research opportunities.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack 3D Flip Circles in Orbital Layout */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <CrtTechStack />
          </div>
        </div>

        {/* Engineering Capabilities Strip */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t transition-colors ${
            isLight ? 'border-neutral-200/80' : 'border-white/10'
          }`}
        >
          <div
            className={`p-4 rounded-lg border space-y-1.5 transition-all ${
              isLight
                ? 'border-neutral-200/90 bg-white shadow-xs'
                : 'border-white/10 bg-[#0c0c14]'
            }`}
          >
            <div
              className={`flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase font-semibold ${
                isLight ? 'text-violet-700' : 'text-violet-400'
              }`}
            >
              <Brain size={13} />
              <span>01 Build Models</span>
            </div>
            <p
              className={`text-xs font-mono leading-relaxed ${
                isLight ? 'text-neutral-600' : 'text-neutral-400'
              }`}
            >
              Problem formulation, data preparation, feature engineering, training, and evaluation.
            </p>
          </div>

          <div
            className={`p-4 rounded-lg border space-y-1.5 transition-all ${
              isLight
                ? 'border-neutral-200/90 bg-white shadow-xs'
                : 'border-white/10 bg-[#0c0c14]'
            }`}
          >
            <div
              className={`flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase font-semibold ${
                isLight ? 'text-violet-700' : 'text-violet-400'
              }`}
            >
              <Cpu size={13} />
              <span>02 Deploy Intelligence</span>
            </div>
            <p
              className={`text-xs font-mono leading-relaxed ${
                isLight ? 'text-neutral-600' : 'text-neutral-400'
              }`}
            >
              Client-side inference, model optimization, and privacy-aware, low-latency deployment.
            </p>
          </div>

          <div
            className={`p-4 rounded-lg border space-y-1.5 transition-all ${
              isLight
                ? 'border-neutral-200/90 bg-white shadow-xs'
                : 'border-white/10 bg-[#0c0c14]'
            }`}
          >
            <div
              className={`flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase font-semibold ${
                isLight ? 'text-violet-700' : 'text-violet-400'
              }`}
            >
              <Code2 size={13} />
              <span>03 Ship AI Systems</span>
            </div>
            <p
              className={`text-xs font-mono leading-relaxed ${
                isLight ? 'text-neutral-600' : 'text-neutral-400'
              }`}
            >
              Connect models to APIs and interfaces, turning ML pipelines into applications people can actually use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
