import Navigation from "@/components/navigation";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import SeoHead from "@/components/ui/seo-head";
import { useEffect, useState } from "react";

export default function Home() {
  const [autoOpenChatbot, setAutoOpenChatbot] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoOpenChatbot(true);
    }, 35000); // 35 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Algonimation | Web Development, Mobile Apps & AI Solutions"
        description="Algonimation provides cutting-edge web development, mobile app development, AI solutions, PLM customizations, and KPO/BPO services. Transform your business with our technology expertise."
        keywords="web development, mobile app development, AI solutions, PLM customization, KPO BPO services, Udaipur tech company, software development"
        canonicalUrl="https://algonimation.in"
        ogTitle="Algonimation - Transform Your Business with Technology"
        ogDescription="Web, Mobile & AI Development Solutions"
        ogImage="https://algonimation.in/og-image.png"
      />
  {/* No stray closing brace here */}
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot autoOpen={autoOpenChatbot} />
    </div>
  );
}
