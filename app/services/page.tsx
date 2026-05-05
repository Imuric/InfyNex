import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSectionDemo from "@/components/FeaturesSectionDemo";

export default function Services() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-10">
        {/* We reuse the FeaturesSectionDemo for the services page */}
        <FeaturesSectionDemo />
      </div>

      <Footer />
    </main>
  );
}
