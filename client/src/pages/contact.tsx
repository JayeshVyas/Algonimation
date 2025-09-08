import Navigation from "@/components/navigation";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import SeoHead from "@/components/ui/seo-head";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Contact Us | Algonimation - Get in Touch"
        description="Contact Algonimation for your web development, mobile app, or AI solution needs. We're ready to help transform your business with technology."
        keywords="contact Algonimation, hire web developers, software development services, AI consultation, get a quote"
        canonicalUrl="https://algonimation.in/contact"
        ogImage="https://algonimation.in/contact-og-image.png"
      />
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}