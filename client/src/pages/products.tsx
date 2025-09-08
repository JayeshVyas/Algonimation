import Navigation from "@/components/navigation";
import Products from "@/components/sections/products";
import Footer from "@/components/sections/footer";
import Chatbot from "@/components/chatbot";
import SeoHead from "@/components/ui/seo-head";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Products | Algonimation - Innovative Software Solutions"
        description="Discover Algonimation's innovative software products and solutions designed to transform businesses and improve efficiency."
        keywords="software products, business solutions, enterprise software, custom applications, Algonimation products"
        canonicalUrl="https://algonimation.in/products"
        ogImage="https://algonimation.in/products-og-image.png"
      />
      <Navigation />
      <main>
        <Products />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}