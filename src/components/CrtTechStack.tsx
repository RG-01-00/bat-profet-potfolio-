import React from 'react';
import { useTheme } from '../ThemeContext';

interface TechItem {
  id: string;
  name: string;
  category: string;
  content: React.ReactNode;
}

export function CrtTechStack() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Center Core
  const centerItem: TechItem = {
    id: 'python',
    name: 'Python',
    category: 'Core',
    content: (
      <svg viewBox="0 0 110 110" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_0_6px_rgba(255,212,59,0.6)]">
        <path
          d="M54.5 10C35.2 10 36.4 18.3 36.4 18.3l.02 8.6h18.3v2.6H27.4s-12.2 1.4-12.2 18.2c0 16.8 10.7 17.5 10.7 17.5h6.4v-8.9s-.3-10.7 10.5-10.7h18.1s10.2-.2 10.2-9.9V19.9s1.4-9.9-16.6-9.9zm-9.8 5.6a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2z"
          fill="#3776AB"
        />
        <path
          d="M55.5 100c19.3 0 18.1-8.3 18.1-8.3l-.02-8.6H55.3v-2.6h27.3s12.2-1.4 12.2-18.2c0-16.8-10.7-17.5-10.7-17.5h-6.4v8.9s.3 10.7-10.5 10.7H49.1s-10.2.2-10.2 9.9v13.8s-1.4 9.9 16.6 9.9zm9.8-5.6a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"
          fill="#FFD43B"
        />
      </svg>
    ),
  };

  // Inner Orbit Ring (5 core ML & Dev frameworks)
  const innerRingItems: TechItem[] = [
    {
      id: 'pytorch',
      name: 'PyTorch',
      category: 'ML / DL',
      content: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#EE4C2C] drop-shadow-[0_0_6px_rgba(238,76,44,0.5)]" fill="currentColor">
          <path d="M12.9 2.2a9.6 9.6 0 0 0-5.8 2.1l1.5 1.5a7.5 7.5 0 0 1 4.3-1.6 7.7 7.7 0 1 1-7.7 7.7c0-2 .8-3.9 2.1-5.3L5.9 5.1A9.7 9.7 0 0 0 3.2 12a9.8 9.8 0 1 0 9.7-9.8zm2.4 2.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      ),
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn',
      category: 'ML / DL',
      content: (
        <div className="flex items-center gap-0.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3499cd] shadow-[0_0_5px_#3499cd]" />
          <span className="w-3 h-3 rounded-full bg-[#F7931E] shadow-[0_0_5px_#F7931E]" />
        </div>
      ),
    },
    {
      id: 'huggingface',
      name: 'Hugging Face',
      category: 'NLP / LLM',
      content: <span className="text-base sm:text-lg select-none">🤗</span>,
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'Backend',
      content: (
        <div className="text-[8px] sm:text-[9px] font-mono text-emerald-300 font-bold px-1 py-0.5 bg-emerald-950/50 rounded border border-emerald-500/40 shadow-[0_0_5px_rgba(16,185,129,0.3)]">
          ⚡ API
        </div>
      ),
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      content: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-[spin_14s_linear_infinite] drop-shadow-[0_0_5px_rgba(97,218,251,0.5)]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  // Outer Orbit Ring (10 specialized libraries, CV, data, and tools)
  const outerRingItems: TechItem[] = [
    {
      id: 'xgboost',
      name: 'XGBoost',
      category: 'ML / DL',
      content: (
        <div className="flex flex-col items-center justify-center">
          <span className="font-mono font-black text-[10px] sm:text-xs text-sky-400 tracking-tight">XGB</span>
          <div className="w-4 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500 rounded mt-0.5" />
        </div>
      ),
    },
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      category: 'CV / NLP',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 font-mono font-black text-amber-400 border border-amber-500/50 rounded flex items-center justify-center text-[9px] sm:text-[10px] shadow-[0_0_5px_rgba(251,191,36,0.3)] bg-amber-950/20">
          TF
        </div>
      ),
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      category: 'CV / NLP',
      content: (
        <div className="flex items-center gap-0.5">
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_3px_#ef4444]" />
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_3px_#22c55e]" />
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_3px_#3b82f6]" />
        </div>
      ),
    },
    {
      id: 'mediapipe',
      name: 'MediaPipe',
      category: 'CV / NLP',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 border border-cyan-400/60 rounded-full flex flex-col items-center justify-around py-0.5 shadow-[0_0_5px_rgba(34,211,238,0.3)]">
          <div className="flex gap-1">
            <span className="w-0.5 h-0.5 rounded-full bg-cyan-300" />
            <span className="w-0.5 h-0.5 rounded-full bg-cyan-300" />
          </div>
          <span className="w-1.5 h-0.5 bg-cyan-300 rounded" />
        </div>
      ),
    },
    {
      id: 'transformers',
      name: 'Transformers',
      category: 'NLP / LLM',
      content: (
        <div className="flex items-center justify-center gap-0.5">
          <span className="w-1 h-3.5 bg-violet-400 rounded-full shadow-[0_0_4px_#a855f7]" />
          <span className="w-1 h-2.5 bg-pink-400 rounded-full shadow-[0_0_4px_#ec4899]" />
          <span className="w-1 h-3.5 bg-indigo-400 rounded-full shadow-[0_0_4px_#6366f1]" />
        </div>
      ),
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Frontend',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#3178C6] rounded flex items-center justify-center font-mono font-bold text-white text-[9px] sm:text-[10px] shadow-[0_0_5px_rgba(49,120,198,0.5)]">
          TS
        </div>
      ),
    },
    {
      id: 'pandas',
      name: 'Pandas',
      category: 'Data',
      content: (
        <div className="flex flex-col items-center justify-center">
          <span className="font-mono text-[8px] sm:text-[9px] text-cyan-300 font-bold tracking-tight">pd</span>
          <div className="flex gap-0.5 mt-0.5">
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
          </div>
        </div>
      ),
    },
    {
      id: 'numpy',
      name: 'NumPy',
      category: 'Data',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#4dabf7]/20 border border-[#4dabf7]/60 flex items-center justify-center font-mono font-bold text-[9px] sm:text-[10px] text-[#4dabf7] shadow-[0_0_5px_rgba(77,171,247,0.3)]">
          NP
        </div>
      ),
    },
    {
      id: 'sql',
      name: 'SQL',
      category: 'Data',
      content: (
        <div className="w-5 h-4 border border-cyan-400/70 rounded flex flex-col justify-between p-0.5 shadow-[0_0_5px_rgba(0,186,218,0.3)]">
          <div className="w-full h-0.5 bg-cyan-400 rounded-full" />
          <div className="w-full h-0.5 bg-cyan-400 rounded-full" />
        </div>
      ),
    },
    {
      id: 'git',
      name: 'Git',
      category: 'Tools',
      content: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#F05032] drop-shadow-[0_0_5px_rgba(240,80,50,0.4)]" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a1.7 1.7 0 0 1 2.4 0l1.37 1.37-3.05 3.05a1.9 1.9 0 0 0-.5 1.78l-2.07 2.08a1.9 1.9 0 0 0-1.78-.5L2.6 10.59zm18.8 2.82L15.62 19.2a1.7 1.7 0 0 1-2.4 0l-5.63-5.63a1.7 1.7 0 0 1 0-2.4l5.63-5.63a1.7 1.7 0 0 1 2.4 0l5.78 5.78a1.7 1.7 0 0 1 0 2.4v-.32z" />
        </svg>
      ),
    },
  ];

  const INNER_DURATION = 55; // 55s per rotation: smooth, slow, elegant
  const OUTER_DURATION = 80; // 80s per rotation: independent velocity

  return (
    <div className="w-full flex justify-center lg:justify-end select-none">
      {/* 3D Circular Flip Card & Orbital Animation CSS */}
      <style>{`
        .orbital-stage {
          --r-inner: 80px;
          --r-outer: 130px;
        }
        @media (min-width: 640px) {
          .orbital-stage {
            --r-inner: 95px;
            --r-outer: 152.5px;
          }
        }
        @media (min-width: 768px) {
          .orbital-stage {
            --r-inner: 105px;
            --r-outer: 167.5px;
          }
        }

        @keyframes orbit-rotate-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-rotate-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .flp-circle-scene {
          perspective: 800px;
        }
        .flp-circle-card {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 600ms cubic-bezier(.22, .61, .36, 1);
          cursor: pointer;
        }
        .flp-circle-scene:hover .flp-circle-card,
        .flp-circle-scene:focus-within .flp-circle-card {
          transform: rotateY(180deg);
        }
        .flp-circle-front, .flp-circle-back {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
          transform-style: preserve-3d;
        }
        .flp-circle-front {
          background: ${
            isLight
              ? 'radial-gradient(circle at 30% 30%, #ffffff, #f4f3fa)'
              : 'radial-gradient(circle at 30% 30%, #1c182c, #0c0a16)'
          };
          border: 1px solid ${isLight ? 'rgba(139, 92, 246, 0.28)' : 'rgba(255, 255, 255, 0.12)'};
          box-shadow: ${
            isLight
              ? '0 4px 12px rgba(124, 58, 237, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.9)'
              : '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
          };
          transform: rotateY(0deg) translateZ(1px);
        }
        .flp-circle-front * {
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
        }
        .flp-circle-back {
          background: ${
            isLight
              ? 'radial-gradient(circle at 30% 30%, #7c3aed, #5b21b6)'
              : 'radial-gradient(circle at 30% 30%, #29154f, #110724)'
          };
          border: 1px solid ${isLight ? 'rgba(124, 58, 237, 0.7)' : 'rgba(168, 85, 247, 0.5)'};
          box-shadow: ${
            isLight
              ? '0 4px 14px rgba(124, 58, 237, 0.35)'
              : '0 0 14px rgba(139, 92, 246, 0.45)'
          };
          transform: rotateY(180deg) translateZ(1px);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4px;
          color: #ffffff;
        }
      `}</style>

      {/* Circular Orbital Layout Stage */}
      <div className="orbital-stage relative w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] md:w-[390px] md:h-[390px] flex items-center justify-center">
        {/* Ambient Purple Center Glow */}
        <div
          className={`absolute inset-1/4 rounded-full blur-2xl pointer-events-none transition-colors duration-300 ${
            isLight ? 'bg-violet-400/20' : 'bg-violet-600/15'
          }`}
        />

        {/* Faint Orbital Ring Guides */}
        <div
          className={`absolute w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] md:w-[210px] md:h-[210px] rounded-full border pointer-events-none transition-colors duration-300 ${
            isLight ? 'border-violet-400/30' : 'border-violet-500/15'
          }`}
        />
        <div
          className={`absolute w-[260px] h-[260px] sm:w-[305px] sm:h-[305px] md:w-[335px] md:h-[335px] rounded-full border border-dashed pointer-events-none transition-colors duration-300 ${
            isLight ? 'border-violet-400/25' : 'border-violet-500/10'
          }`}
        />

        {/* 1. CENTER CORE (Python - Stationary) */}
        <div className="absolute z-20" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <FlipCircle
            item={centerItem}
            sizeClass="w-13 h-13 sm:w-15 sm:h-15 md:w-16 md:h-16"
            isCenter
            isLight={isLight}
          />
        </div>

        {/* 2. INNER ORBIT RING (5 items - Clockwise orbital movement) */}
        {innerRingItems.map((item, index) => {
          // Exact initial angle matching static design
          const rawDeg = index * (360 / 5) - 90;
          const startDeg = ((rawDeg % 360) + 360) % 360;
          // Negative delay starts animation precisely at initial angle with zero jump
          const delay = (startDeg / 360) * INNER_DURATION;

          return (
            <div
              key={item.id}
              className="absolute pointer-events-none z-10"
              style={{
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                animation: `orbit-rotate-cw ${INNER_DURATION}s linear infinite`,
                animationDelay: `-${delay}s`,
              }}
            >
              <div
                className="absolute pointer-events-auto"
                style={{
                  transform: 'translateX(var(--r-inner)) translate(-50%, -50%)',
                }}
              >
                <div
                  style={{
                    animation: `orbit-rotate-ccw ${INNER_DURATION}s linear infinite`,
                    animationDelay: `-${delay}s`,
                  }}
                >
                  <FlipCircle
                    item={item}
                    sizeClass="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13"
                    isLight={isLight}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* 3. OUTER ORBIT RING (10 items - Counter-clockwise independent orbital movement) */}
        {outerRingItems.map((item, index) => {
          // Exact initial angle matching static design
          const rawDeg = index * (360 / 10) - 72;
          const startDeg = ((rawDeg % 360) + 360) % 360;
          // Negative delay for counter-clockwise rotation starts precisely at initial angle
          const delay = (((360 - startDeg) % 360) / 360) * OUTER_DURATION;

          return (
            <div
              key={item.id}
              className="absolute pointer-events-none z-10"
              style={{
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                animation: `orbit-rotate-ccw ${OUTER_DURATION}s linear infinite`,
                animationDelay: `-${delay}s`,
              }}
            >
              <div
                className="absolute pointer-events-auto"
                style={{
                  transform: 'translateX(var(--r-outer)) translate(-50%, -50%)',
                }}
              >
                <div
                  style={{
                    animation: `orbit-rotate-cw ${OUTER_DURATION}s linear infinite`,
                    animationDelay: `-${delay}s`,
                  }}
                >
                  <FlipCircle
                    item={item}
                    sizeClass="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
                    isLight={isLight}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface FlipCircleProps {
  item: TechItem;
  sizeClass: string;
  isCenter?: boolean;
  isLight?: boolean;
}

function FlipCircle({ item, sizeClass, isCenter = false, isLight = false }: FlipCircleProps) {
  return (
    <div className="flp-circle-scene">
      {/* Circle Flip Card */}
      <div
        className={`flp-circle-card ${sizeClass} rounded-full group ${
          isCenter
            ? isLight
              ? 'ring-2 ring-violet-400 shadow-[0_4px_16px_rgba(124,58,237,0.25)]'
              : 'ring-2 ring-violet-500/40 shadow-[0_0_16px_rgba(139,92,246,0.35)]'
            : ''
        }`}
        tabIndex={0}
        aria-label={item.name}
      >
        {/* FRONT FACE: Circle with Icon */}
        <div
          className={`flp-circle-front flex items-center justify-center transition-colors ${
            isLight ? 'group-hover:border-violet-400' : 'group-hover:border-violet-500/50'
          }`}
        >
          {/* Ambient sheen */}
          <div
            className={`absolute inset-1 rounded-full pointer-events-none ${
              isLight
                ? 'bg-gradient-to-tr from-transparent via-violet-400/[0.06] to-white/40'
                : 'bg-gradient-to-tr from-transparent via-violet-500/[0.04] to-white/[0.06]'
            }`}
          />

          {/* Icon Content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full p-1.5">
            {item.content}
          </div>
        </div>

        {/* BACK FACE: Circle with Name Only */}
        <div className="flp-circle-back">
          <div className="font-bold text-[9px] sm:text-[10px] md:text-[10.5px] leading-tight text-white tracking-tight text-center px-0.5">
            {item.name}
          </div>
        </div>
      </div>
    </div>
  );
}
