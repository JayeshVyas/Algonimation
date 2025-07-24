import { motion } from "framer-motion";
import { TrendingUp, MessageCircle, Check } from "lucide-react";

const products = [
  {
    icon: TrendingUp,
    title: "AI Analytics Suite",
    description: "Comprehensive analytics platform powered by AI to provide actionable insights from your business data.",
    features: ["Real-time data processing", "Predictive analytics", "Custom dashboards"],
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: MessageCircle,
    title: "Smart ChatBot Platform",
    description: "AI-powered chatbot solution with natural language processing for enhanced customer interactions.",
    features: ["24/7 customer support", "Multi-language support", "Easy integration"],
    gradient: "from-cyan-600 to-emerald-600",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI-powered products designed to transform your business operations
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center`}>
                    <product.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`bg-gradient-to-r ${product.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Product showcase visualization */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { color: "bg-purple-500", delay: 0 },
                    { color: "bg-cyan-500", delay: 0.1 },
                    { color: "bg-emerald-500", delay: 0.2 },
                    { color: "bg-amber-500", delay: 0.3 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-8 h-8 ${item.color} rounded-lg mb-4`}></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-20">
                <motion.div 
                  className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 4 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
