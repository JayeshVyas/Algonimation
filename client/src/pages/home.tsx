import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import SeoHead from "@/components/ui/seo-head";

export default function Home() {
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
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
