import { motion } from "framer-motion";
import { Rocket, Phone, Code } from "lucide-react";
import { scrollToSection } from "@/lib/smooth-scroll";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Innovation in
                <span className="block gradient-text-animated">
                  Technology
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We create cutting-edge products and provide world-class services in web development, 
                app development, PLM customizations, KPO, BPO, and AI solutions.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
              >
                <Rocket size={20} />
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Get in Touch
              </button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Floating elements */}
              <motion.div 
                className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl opacity-80"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-32 right-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full opacity-80"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <motion.div 
                className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg opacity-80"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              />
              
              {/* Central illustration */}
              <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 relative z-10">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code size={32} className="text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-700">Building the Future</div>
                </div>
                
                {/* Tech-themed background elements */}
                <div className="absolute inset-0 opacity-20">
                  {/* Code brackets */}
                  <div className="absolute top-8 left-8 text-4xl font-bold text-indigo-600">{"{"}</div>
                  <div className="absolute bottom-8 right-8 text-4xl font-bold text-purple-600">{"}"}</div>
                  
                  {/* Tech icons representation */}
                  <div className="absolute top-16 right-16 w-8 h-8 border-2 border-cyan-400 rounded-full"></div>
                  <div className="absolute bottom-16 left-16 w-6 h-6 bg-emerald-400 rotate-45"></div>
                  <div className="absolute top-1/3 left-12 w-4 h-12 bg-amber-400 rounded-full"></div>
                  <div className="absolute bottom-1/3 right-12 w-12 h-4 bg-rose-400 rounded-full"></div>
                  
                  {/* Binary pattern */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-xs text-indigo-400 font-mono">
                    01010101
                  </div>
                  <div className="absolute bottom-24 left-1/3 text-xs text-purple-400 font-mono">
                    11010110
                  </div>
                  
                  {/* Circuit lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path d="M50 50 L100 50 L100 100" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M350 350 L300 350 L300 300" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="100" cy="100" r="3" fill="#06b6d4"/>
                    <circle cx="300" cy="300" r="3" fill="#10b981"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
