import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
