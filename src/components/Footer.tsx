import tibornLogo from '../assets/tiborn.png';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0B0D0F] to-[#0B0D0F]/95 text-white py-12 border-t border-white/10">
      <div className="container-width">
        {/* Elegant hairline divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <img
            src={tibornLogo}
            alt="TIBORN"
            className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            decoding="async"
            draggable={false}
          />
          <p className="text-white/60 text-xs md:text-sm tracking-wide">
            © 2025 TIBORN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
