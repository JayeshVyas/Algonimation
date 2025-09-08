import Navigation from "@/components/navigation";
import Services from "@/components/sections/services";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import SeoHead from "@/components/ui/seo-head";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Services | Algonimation - Web, Mobile & AI Development"
        description="Explore Algonimation's services including web development, mobile app development, AI solutions, PLM customization, and KPO/BPO services."
        keywords="web development services, mobile app development, AI solutions, PLM customization, KPO BPO services, Udaipur software development"
        canonicalUrl="https://algonimation.in/services"
        ogImage="https://algonimation.in/services-og-image.png"
      />
      <Navigation />
      <main>
        <Services />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}