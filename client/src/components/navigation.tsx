import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import { scrollToSection } from "@/lib/smooth-scroll";
import { useLocation, useRoute } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [isHome] = useRoute("/");

  const navItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "Services", href: "/services", section: "services" },
    { name: "Products", href: "/products", section: "products" },
    { name: "About", href: "/about", section: "about" },
  ];

  const handleNavClick = (href: string, section: string) => {
    if (isHome) {
      // If on homepage, use smooth scroll
      scrollToSection(section);
    } else {
      // On other pages, navigate to the appropriate page
      if (href === "/") {
        setLocation("/");
        // Add a small delay to ensure the page loads before scrolling
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      } else {
        setLocation(href);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.section)}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/contact", "contact")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.section)}
                className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/contact", "contact")}
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-center font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
