import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";

export default function Sourcing() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4">
            Global Sourcing
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our extensive global network for procuring high-quality electrical components and lighting solutions tailored for your industry.
          </p>
        </div>
        
        {/* We reuse the GlowingEffectDemo for the sourcing page */}
        <GlowingEffectDemo />
      </div>

      <Footer />
    </main>
  );
}
