import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import { useParams } from "wouter";
import SeoHead from "@/components/ui/seo-head";

export default function ServiceDetailPage() {
  const { service } = useParams();
  
  // Format the service name for display
  const formattedServiceName = service ? service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "";
  
  // Define SEO metadata based on the service
  const getServiceMeta = (serviceName: string) => {
    const serviceMeta: Record<string, { title: string, description: string, keywords: string, image: string }> = {
      "web-development": {
        title: "Web Development Services | Algonimation",
        description: "Custom web development services including modern React applications, responsive designs, e-commerce platforms, and custom web solutions.",
        keywords: "web development, React development, responsive design, e-commerce websites, custom web applications, Udaipur web developers",
        image: "/services/web-development-og.png"
      },
      "mobile-app-development": {
        title: "Mobile App Development | Algonimation",
        description: "Expert mobile app development services for iOS and Android. Native and cross-platform solutions for businesses of all sizes.",
        keywords: "mobile app development, iOS apps, Android apps, React Native, Flutter, mobile application developers",
        image: "/services/mobile-app-development-og.png"
      },
      "ai-solutions": {
        title: "AI Solutions | Algonimation",
        description: "Cutting-edge artificial intelligence solutions to transform your business. ML models, data analysis, and intelligent automation.",
        keywords: "AI solutions, machine learning, data analysis, business intelligence, artificial intelligence consulting",
        image: "/services/ai-solutions-og.png"
      },
      "plm-customization": {
        title: "PLM Customization | Algonimation",
        description: "Product Lifecycle Management customization services to optimize your business processes and improve efficiency.",
        keywords: "PLM customization, product lifecycle management, business process optimization, PLM consulting",
        image: "/services/plm-customization-og.png"
      },
      "kpo-bpo-services": {
        title: "KPO/BPO Services | Algonimation",
        description: "Knowledge Process Outsourcing and Business Process Outsourcing services to help your business scale efficiently.",
        keywords: "KPO services, BPO services, knowledge process outsourcing, business process outsourcing, outsourcing Udaipur",
        image: "/services/kpo-bpo-services-og.png"
      }
    };
    
    // Return default if service not found in our map
    return serviceMeta[serviceName] || {
      title: `${formattedServiceName} | Algonimation Services`,
      description: `Professional ${formattedServiceName.toLowerCase()} services from Algonimation. Contact us to learn more about how we can help your business.`,
      keywords: `${formattedServiceName.toLowerCase()}, Algonimation services, technology solutions, software development`,
      image: "/services-og-image.png"
    };
  };
  
  const meta = service ? getServiceMeta(service) : { title: "", description: "", keywords: "", image: "" };
  
  return (
    <div className="min-h-screen">
      <SeoHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonicalUrl={`https://algonimation.in/services/${service}`}
        ogImage={`https://algonimation.in${meta.image}`}
      />
      <Navigation />
      <main className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{formattedServiceName}</h1>
        <div className="prose max-w-none">
          {/* Service specific content would go here */}
          <p className="text-lg">Detailed information about our {service?.split("-").join(" ")} services.</p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}