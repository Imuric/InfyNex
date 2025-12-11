import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSectionDemo from "@/components/FeaturesSectionDemo"; 
import Footer from "@/components/Footer"; // <--- This now contains everything

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FeaturesSectionDemo />
      <Footer />
      
    </main>
  );
}