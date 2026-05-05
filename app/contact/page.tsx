"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[60vh]">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
          Contact Us
        </h1>
        <p className="text-neutral-400 text-xl md:text-2xl max-w-3xl leading-relaxed mb-12">
          Get in touch for electrical solutions, product sourcing, and manufacturing inquiries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="text-neutral-400 text-lg space-y-8">
            <p className="max-w-md">
              We are available for inquiries related to industrial electrical solutions, lighting product sourcing, and manufacturing collaborations.
            </p>
            <p className="max-w-md text-base">
              Reach out to discuss your requirements or explore business opportunities with InfyNex Electric Industries.
            </p>
            
            <div className="flex flex-col gap-6 mt-8">
              <h4 className="text-neutral-300 font-medium text-base">Business inquiries and supplier communication</h4>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Corporate Office</h3>
                  <p className="text-sm leading-relaxed">
                    2912, Flat No. 1001, Dattai Niwas, Sangarsh Colony,<br/>
                    Kedareshwar Mandir, Main Road, Shirwal,<br/>
                    Satara, Maharashtra – 412801, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-sm">contact@infynex.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <p className="text-sm">+91 73784 77700</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-neutral-400 text-sm">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-neutral-500 transition" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral-400 text-sm">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-neutral-500 transition" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral-400 text-sm">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-neutral-500 transition" 
                  placeholder="+91 73784 77700" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral-400 text-sm">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-neutral-500 transition" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              {status === "success" && (
                <p className="text-green-500 text-sm">Your message has been sent successfully.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-white text-black rounded-lg px-8 py-3 font-bold hover:bg-neutral-200 transition mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
