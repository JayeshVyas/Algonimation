import { motion } from "framer-motion";
import { Globe, Smartphone, Settings, Brain, Headphones, Bot, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "React & Next.js", "E-commerce Solutions"],
    gradient: "from-blue-50 to-indigo-50",
    iconGradient: "from-blue-500 to-indigo-600",
    border: "border-blue-100",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: ["iOS & Android", "React Native", "Flutter Development"],
    gradient: "from-purple-50 to-pink-50",
    iconGradient: "from-purple-500 to-pink-600",
    border: "border-purple-100",
  },
  {
    icon: Settings,
    title: "PLM Customizations",
    description: "Product Lifecycle Management solutions customized to streamline your product development processes.",
    features: ["Custom Workflows", "Integration Services", "Training & Support"],
    gradient: "from-emerald-50 to-teal-50",
    iconGradient: "from-emerald-500 to-teal-600",
    border: "border-emerald-100",
  },
  {
    icon: Brain,
    title: "KPO Services",
    description: "Knowledge Process Outsourcing services including research, analytics, and specialized knowledge work.",
    features: ["Data Analytics", "Research Services", "Content Creation"],
    gradient: "from-amber-50 to-orange-50",
    iconGradient: "from-amber-500 to-orange-600",
    border: "border-amber-100",
  },
  {
    icon: Headphones,
    title: "BPO Services",
    description: "Business Process Outsourcing solutions to streamline your operations and reduce costs effectively.",
    features: ["Customer Support", "Data Entry", "Process Automation"],
    gradient: "from-red-50 to-rose-50",
    iconGradient: "from-red-500 to-rose-600",
    border: "border-red-100",
  },
  {
    icon: Bot,
    title: "AI Services",
    description: "Artificial Intelligence and Machine Learning solutions to automate processes and gain insights from data.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
    gradient: "from-cyan-50 to-blue-50",
    iconGradient: "from-cyan-500 to-blue-600",
    border: "border-cyan-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group bg-gradient-to-br ${service.gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${service.border}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                <service.icon size={24} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}