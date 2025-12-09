export default function Home() {
  return (
    // 1. The Container: A full-screen box that centers everything
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-center">
      
      {/* 2. The Animation: A small glowing dot */}
      <div className="mb-6 flex items-center justify-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        <span className="ml-3 text-sm font-medium tracking-widest text-blue-400 uppercase">
          Status: Building
        </span>
      </div>

      {/* 3. The Headline: Big, Bold Text */}
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-4">
        {/* Replace this with your Father's Business Name */}
        Shambala is Coming Soon
      </h1>

      {/* 4. The Subtitle: Grey text for context */}
      <p className="max-w-md text-lg text-slate-400 mb-8">
        We are currently crafting our new digital experience. 
        Stay tuned for something amazing.
      </p>

      {/* 5. A Button (Optional interaction) */}
      <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-slate-200 transition-colors">
        Contact Us
      </button>

    </main>
  );
}