"use client"; // <--- THIS FIXES THE ERROR

import Link from "next/link";
import { GeistSans } from "geist/font/sans";

export default function ComingSoon() {
  return (
    <main
      className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white ${GeistSans.className}`}
    >
      {/* -------------------------------------------
        1. LOCAL STYLES FOR ANIMATION
        (Now works because of "use client" at the top)
        -------------------------------------------
      */}
      <style jsx>{`
        @keyframes industrial-load {
          0% { left: -30%; width: 30%; }
          50% { left: 30%; width: 40%; }
          100% { left: 100%; width: 10%; }
        }
        .animate-industrial-load {
          animation: industrial-load 2s infinite ease-in-out;
        }
      `}</style>

      {/* -------------------------------------------
        2. BACKGROUND (Dot Grid + Vignette)
        -------------------------------------------
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
      </div>

      {/* -------------------------------------------
        3. MAIN CONTENT
        -------------------------------------------
      */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
          InfyNex
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          System Upgrading
        </h2>

        <p className="text-neutral-400 max-w-lg text-sm md:text-base leading-relaxed mb-8">
          InfyNex Industrial Solutions is upgrading its digital infrastructure.
          We are building a robust platform to serve you better. Full access
          will be restored shortly.
        </p>

        {/* PROGRESS BAR COMPONENT */}
        <div className="w-full max-w-md h-[2px] bg-neutral-800 relative overflow-hidden mb-10">
          <div className="absolute top-0 bottom-0 bg-neutral-50 animate-industrial-load"></div>
        </div>

        <Link
          href="mailto:contact@infynex.org"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-neutral-200"
        >
          Contact Support
        </Link>
      </div>

      {/* -------------------------------------------
        4. WATERMARK
        -------------------------------------------
      */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 flex justify-center overflow-hidden">
        <span className="translate-y-[35%] whitespace-nowrap text-[18vw] font-bold leading-none tracking-tighter text-neutral-900 opacity-60 select-none">
          InfyNex
        </span>
      </div>

      {/* -------------------------------------------
        5. FOOTER
        -------------------------------------------
      */}
      <footer className="absolute bottom-6 left-0 right-0 z-20 flex w-full justify-between px-6 text-xs text-neutral-500 md:px-12">
        <span>© 2025 InfyNex Inc. All rights reserved.</span>
        <span className="hidden md:inline">Designed for the future.</span>
      </footer>
    </main>
  );
}