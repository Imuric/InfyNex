import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSectionDemo from "@/components/FeaturesSectionDemo"; 
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";
import Footer from "@/components/Footer"; 


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FeaturesSectionDemo />
      <GlowingEffectDemo />
      <Footer />
      
    </main>
  );
}