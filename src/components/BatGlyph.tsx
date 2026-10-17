interface BatGlyphProps {
  className?: string;
  size?: number;
}

export function BatGlyph({ className = '', size = 18 }: BatGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      {/* Refined minimalist bat silhouette */}
      <path d="M12 7.5C11.3 5.5 10 4 8.5 4C6.5 4 4.5 6 3 8C1.5 10 1 12 1 13C2.5 13 4 12.2 5.5 11.5C6.8 14 9 15.5 11.5 15.5H12.5C15 15.5 17.2 14 18.5 11.5C20 12.2 21.5 13 23 13C23 12 22.5 10 21 8C19.5 6 17.5 4 15.5 4C14 4 12.7 5.5 12 7.5ZM11.2 9.5H12.8L12.5 11H11.5L11.2 9.5Z" />
    </svg>
  );
}
