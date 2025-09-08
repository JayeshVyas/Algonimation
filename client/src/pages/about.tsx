import Navigation from "@/components/navigation";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import SeoHead from "@/components/ui/seo-head";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="About Algonimation | Web, Mobile & AI Development Company"
        description="Learn about Algonimation, a cutting-edge technology company specializing in web development, mobile apps, and AI solutions. Discover our journey and expertise."
        keywords="about Algonimation, tech company, Udaipur web development, AI solutions company, software development team"
        canonicalUrl="https://algonimation.in/about"
        ogImage="https://algonimation.in/about-og-image.png"
      />
      <Navigation />
      <main>
        <About />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}