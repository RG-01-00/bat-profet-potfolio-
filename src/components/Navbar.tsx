import { useState, useEffect } from 'react';
import { BatGlyph } from './BatGlyph';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'light'
            ? 'bg-[#f8f8fb]/92 backdrop-blur-md border-b border-neutral-200/80 py-4 shadow-[0_4px_25px_rgba(0,0,0,0.04)]'
            : 'bg-[#08080c]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand identity: Bats motif + Roufaida */}
        <a
          href="#hero"
          id="nav-brand-link"
          className={`group flex items-center gap-3.5 transition-colors ${
            theme === 'light' ? 'text-neutral-900 hover:text-violet-700' : 'text-[#e0e0e6] hover:text-white'
          }`}
        >
          <span
            className={`w-7 h-7 rounded border flex items-center justify-center transition-all duration-300 ${
              theme === 'light'
                ? 'border-neutral-200 bg-violet-50/80 text-violet-700 group-hover:border-violet-400 shadow-sm'
                : 'border-white/10 bg-violet-950/20 text-violet-400 group-hover:border-violet-500/60 group-hover:text-violet-300'
            }`}
          >
            <BatGlyph size={14} className="group-hover:scale-110 transition-transform" />
          </span>
          <div className="flex flex-col">
            <span
              className={`font-mono text-[10px] tracking-[3px] uppercase font-semibold transition-colors ${
                theme === 'light' ? 'text-neutral-900 group-hover:text-violet-800' : 'text-neutral-300 group-hover:text-white'
              }`}
            >
              Roufaida Gheraibia
            </span>
            <span
              className={`font-mono text-[8px] tracking-[3px] uppercase ${
                theme === 'light' ? 'text-neutral-500' : 'text-neutral-500'
              }`}
            >
              AI Engineer // Applied ML
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              id={`nav-link-${item.label.toLowerCase()}`}
              href={item.href}
              className={`font-mono text-[10px] tracking-[3px] uppercase transition-colors py-1 ${
                theme === 'light'
                  ? 'text-neutral-600 hover:text-violet-700'
                  : 'text-neutral-400 hover:text-violet-400'
              }`}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Nav Right CTA + Circle Theme Button right behind contact */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-contact-cta"
            className={`font-mono text-[10px] tracking-[3px] uppercase px-4 py-2 rounded border transition-all duration-200 flex items-center gap-1.5 group ${
              theme === 'light'
                ? 'border-violet-300/80 bg-violet-50 text-violet-800 hover:bg-violet-100 hover:border-violet-400 hover:text-violet-900 shadow-sm'
                : 'border-violet-900/80 bg-violet-950/30 text-violet-300 hover:bg-violet-900/50 hover:border-violet-500 hover:text-white'
            }`}
          >
            <span>CONTACT</span>
            <ArrowUpRight
              size={12}
              className="text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Circular Theme Toggle Button - right behind contact */}
          <button
            id="nav-theme-toggle-desktop"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to soft light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to soft light theme' : 'Switch to dark theme'}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer shrink-0 ${
              theme === 'light'
                ? 'border-neutral-200/90 bg-white text-violet-700 hover:text-violet-900 hover:border-violet-300 hover:bg-violet-50/80 shadow-[0_2px_10px_rgba(124,58,237,0.1)]'
                : 'border-white/10 bg-[#0c0c14] text-amber-300 hover:text-amber-200 hover:border-amber-400/40 hover:bg-amber-950/20 shadow-[0_0_12px_rgba(251,191,36,0.18)]'
            }`}
          >
            {theme === 'dark' ? (
              <Sun size={15} className="transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon size={15} className="transition-transform duration-300 -rotate-12 hover:rotate-0 text-violet-600" />
            )}
          </button>
        </div>

        {/* Mobile menu trigger & mobile theme button */}
        <div className="md:hidden flex items-center gap-2.5">
          <button
            id="nav-theme-toggle-mobile"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to soft light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to soft light theme' : 'Switch to dark theme'}
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
              theme === 'light'
                ? 'border-neutral-200 bg-white text-violet-700 shadow-sm'
                : 'border-white/10 bg-[#0c0c14] text-amber-300 shadow-sm'
            }`}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} className="text-violet-600" />}
          </button>

          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded border transition-colors ${
              theme === 'light'
                ? 'border-neutral-200 bg-white text-neutral-700 hover:text-black shadow-sm'
                : 'border-white/10 bg-violet-950/20 text-neutral-300 hover:text-white'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-dropdown"
          className={`md:hidden border-b px-6 py-6 space-y-4 backdrop-blur-xl ${
            theme === 'light'
              ? 'border-neutral-200 bg-white/95 text-neutral-900 shadow-lg'
              : 'border-white/10 bg-[#08080c]/98 text-white'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center font-mono text-xs tracking-[2.5px] uppercase py-2 border-b transition-colors ${
                theme === 'light'
                  ? 'border-neutral-100 text-neutral-700 hover:text-violet-700'
                  : 'border-white/5 text-neutral-300 hover:text-violet-400'
              }`}
            >
              <span>{item.label}</span>
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono text-[10px] tracking-[2.5px] uppercase text-center py-2.5 rounded border transition-colors ${
                theme === 'light'
                  ? 'border-violet-300 bg-violet-50 text-violet-800'
                  : 'border-violet-800 bg-violet-950/60 text-violet-200'
              }`}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

