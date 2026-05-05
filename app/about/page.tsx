import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string; }) => {
    return (
        <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className={cn("text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-500 font-normal dark:text-neutral-300 max-w-sm mx-0 md:text-sm my-2")}>
            {children}
        </p>
    );
};

export default function About() {
  const whatWeDoFeatures = [
    {
      title: "Industrial Electrical Solutions",
      description: "Real-world execution support aligned with infrastructure needs",
      className: "col-span-1 lg:col-span-2 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Lighting Product Sourcing",
      description: "Sourcing chandeliers and decorative lighting from global suppliers",
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800 lg:border-r-0",
    },
    {
      title: "Supplier Development",
      description: "Building long-term relationships with manufacturers",
      className: "col-span-1 lg:col-span-2 border-b lg:border-b-0 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Manufacturing Initiative",
      description: "Planning production of electrical insulators using modern machinery",
      className: "col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* 1. HERO / INTRO */}
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
          About InfyNex Electric Industries
        </h1>
        <p className="text-neutral-400 text-xl md:text-2xl max-w-3xl leading-relaxed">
          Building a bridge between electrical solutions, global sourcing, and future manufacturing.
        </p>
      </div>

      {/* 2. COMPANY OVERVIEW */}
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Company Overview</h2>
        <div className="text-neutral-400 text-lg md:text-xl max-w-4xl leading-relaxed space-y-6">
          <p>
            InfyNex Electric Industries is an India-based company focused on electrical and industrial solutions, with a growing emphasis on global sourcing and manufacturing. Built on practical field experience, the company is now expanding into structured business operations including supplier development and product sourcing.
          </p>
        </div>
      </div>

      {/* 3. OUR JOURNEY */}
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Our Journey</h2>
        <div className="text-neutral-400 text-lg md:text-xl max-w-4xl leading-relaxed space-y-6">
          <p>
            The company originates from hands-on experience in electrical projects and real-world execution. This foundation is now being extended into sourcing decorative lighting products and planning a manufacturing setup for electrical components such as insulators. The goal is to evolve from service-based operations into a scalable industrial business.
          </p>
        </div>
      </div>

      {/* 4. WHAT WE DO (GRID / CARD SECTION) */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 text-center">What We Do</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-12 border rounded-md dark:border-neutral-800">
            {whatWeDoFeatures.map((feature) => (
                <FeatureCard key={feature.title} className={feature.className}>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
            ))}
        </div>
      </div>

      {/* 5. OUR APPROACH */}
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Our Approach</h2>
        <ul className="text-neutral-400 text-lg md:text-xl max-w-4xl leading-relaxed space-y-4 list-disc pl-6">
          <li>Practical execution-driven decisions</li>
          <li>Focus on quality and reliability</li>
          <li>Long-term supplier partnerships</li>
          <li>Step-by-step expansion strategy</li>
        </ul>
      </div>

      {/* 6. GLOBAL OUTLOOK */}
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Global Outlook</h2>
        <div className="text-neutral-400 text-lg md:text-xl max-w-4xl leading-relaxed space-y-6">
          <p>
            InfyNex is actively exploring international markets, especially China, to build supplier networks and evaluate advanced manufacturing technologies. Participation in global exhibitions supports this expansion.
          </p>
        </div>
      </div>

      {/* 7. TEAM SECTION */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 border rounded-xl dark:border-neutral-800 bg-neutral-900/50">
            <h3 className="text-xl font-bold text-white mb-2">Vaibhav Nevase</h3>
            <p className="text-neutral-400 font-medium mb-4">Proprietor</p>
            <p className="text-neutral-500 text-sm">Leads electrical operations, execution, and supplier network</p>
          </div>
          <div className="p-8 border rounded-xl dark:border-neutral-800 bg-neutral-900/50">
            <h3 className="text-xl font-bold text-white mb-2">Prathamesh Patil</h3>
            <p className="text-neutral-400 font-medium mb-4">Investor & Project Lead – Manufacturing Initiative</p>
            <p className="text-neutral-500 text-sm">Handles product evaluation, supplier coordination, and manufacturing planning</p>
          </div>
        </div>
      </div>

      {/* 8. CLOSING SECTION */}
      <div className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          <p>
            InfyNex Electric Industries is focused on building a strong and scalable business in electrical solutions, sourcing, and manufacturing with long-term industry relevance.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
