export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center bg-slate-950 px-4 text-center">
      {/* Background Pattern (Optional) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Building Trust Through <br />
          <span className="text-blue-500">Excellence & Quality</span>
        </h1>
        
        <p className="text-lg text-slate-400">
          Your trusted partner for Organic Fertillizers. Serving the community with integrity and dedication since 2001.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="h-11 rounded-md bg-blue-600 px-8 text-sm font-medium text-white hover:bg-blue-700">
            View Products
          </button>
          <button className="h-11 rounded-md border border-slate-700 bg-transparent px-8 text-sm font-medium text-white hover:bg-slate-800">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}