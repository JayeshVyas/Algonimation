import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import { scrollToSection } from "@/lib/smooth-scroll";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Products", href: "products" },
    { name: "About", href: "about" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
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
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
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
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
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
