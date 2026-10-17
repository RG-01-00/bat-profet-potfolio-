import { BatGlyph } from './BatGlyph';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`py-14 px-6 sm:px-12 font-mono text-[9px] tracking-[3px] uppercase transition-colors duration-300 ${
        isLight
          ? 'bg-white border-t border-neutral-200/90 text-neutral-500'
          : 'bg-[#060609] border-t border-white/10 text-neutral-500'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span
            className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
              isLight
                ? 'bg-violet-50 border-violet-200 text-violet-700'
                : 'bg-violet-950/30 border-white/10 text-violet-400'
            }`}
          >
            <BatGlyph size={12} />
          </span>
          <span className={`transition-colors ${isLight ? 'text-neutral-700 font-medium' : 'text-[#a1a1aa]'}`}>
            Roufaida Gheraibia &bull; AI Engineering Portfolio
          </span>
        </div>

        <div className="flex items-center gap-8">
          <span className="hidden md:inline">NOCTURNAL UI &bull; APPLIED MACHINE LEARNING</span>
          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top"
            className={`flex items-center gap-1.5 transition-colors uppercase cursor-pointer ${
              isLight ? 'text-neutral-800 hover:text-violet-700 font-semibold' : 'text-white hover:text-violet-300'
            }`}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
