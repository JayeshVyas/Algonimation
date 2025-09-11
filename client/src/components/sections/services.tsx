import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Settings, Brain, Headphones, Bot, Check } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";

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
    title: "Quality & AI Engineering",
    description:
      "We ensure your software and systems are built to the highest standards of quality and innovation. Our engineering team delivers robust, reliable, and future-ready solutions, leveraging advanced AI methodologies and rigorous testing practices.",
    features: [
      "Quality Assurance & Testing",
      "AI-driven Automation",
      "System Reliability & Scalability"
    ],
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
  {
    icon: Settings,
    title: "IT Business Consultation",
    description: "Expert IT consulting to help you strategize, plan, and implement technology solutions for business growth and efficiency.",
    features: ["Technology Strategy", "Process Optimization", "Digital Transformation"],
    gradient: "from-green-50 to-lime-50",
    iconGradient: "from-green-500 to-lime-600",
    border: "border-green-100",
  },
  {
    icon: Bot,
    title: "Desktop Application Development",
    description: "Custom desktop software for Windows, macOS, and Linux, designed to streamline your business operations.",
    features: ["Cross-platform Apps", "UI/UX Design", "Performance Optimization"],
    gradient: "from-gray-50 to-slate-50",
    iconGradient: "from-gray-500 to-slate-600",
    border: "border-gray-100",
  },
  {
    icon: Brain,
    title: "Game Development",
    description: "Engaging and interactive game development for desktop and mobile platforms, from concept to launch.",
    features: ["Unity & Unreal Engine", "2D/3D Games", "Multiplatform Deployment"],
    gradient: "from-pink-50 to-purple-50",
    iconGradient: "from-pink-500 to-purple-600",
    border: "border-pink-100",
  },
  {
    icon: Settings,
    title: "Business Procedure Development",
    description: "Design and implementation of efficient business procedures to optimize workflow and productivity.",
    features: ["Workflow Automation", "Process Mapping", "Efficiency Consulting"],
    gradient: "from-yellow-50 to-amber-50",
    iconGradient: "from-yellow-500 to-amber-600",
    border: "border-yellow-100",
  },
  {
    icon: Bot,
    title: "SaaS Product Development",
    description: "End-to-end SaaS product design, development, and deployment for scalable cloud-based solutions.",
    features: ["Multi-tenant Architecture", "Subscription Management", "Cloud Hosting"],
    gradient: "from-indigo-50 to-blue-50",
    iconGradient: "from-indigo-500 to-blue-600",
    border: "border-indigo-100",
  },
  {
    icon: Headphones,
    title: "Voice Assistant & Chatbot Development",
    description: "Custom voice assistants and chatbots for web, mobile, and smart devices, powered by AI.",
    features: ["Natural Language Processing", "Multi-platform Integration", "Conversational UI"],
    gradient: "from-purple-50 to-violet-50",
    iconGradient: "from-purple-500 to-violet-600",
    border: "border-purple-100",
  },
  {
    icon: Brain,
    title: "Digital Marketing & SEO Services",
    description: "Comprehensive digital marketing strategies and SEO optimization to boost your online presence.",
    features: ["SEO Audits", "Content Marketing", "Social Media Campaigns"],
    gradient: "from-pink-50 to-red-50",
    iconGradient: "from-pink-500 to-red-600",
    border: "border-pink-100",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD Automation",
    description: "Automate your software delivery pipeline with DevOps best practices and CI/CD tools.",
    features: ["Continuous Integration", "Automated Testing", "Deployment Automation"],
    gradient: "from-gray-50 to-zinc-50",
    iconGradient: "from-gray-500 to-zinc-600",
    border: "border-gray-100",
  },
  {
    icon: Globe,
    title: "Cloud Migration & Management (AWS, Azure, GCP)",
    description: "Seamless migration and management of your infrastructure to leading cloud platforms.",
    features: ["AWS, Azure, GCP", "Cloud Security", "Cost Optimization"],
    gradient: "from-blue-50 to-cyan-50",
    iconGradient: "from-blue-500 to-cyan-600",
    border: "border-blue-100",
  },
  
];

export default function Services() {
  type ServiceType = typeof services[number];
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  // Just close modal, do not scroll
  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedService(null);
      // Prevent scroll jump by blurring the active element
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  };

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

  <Dialog open={!!selectedService} onOpenChange={handleDialogOpenChange}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <DialogTrigger asChild key={service.title + '-' + index}>
                <motion.div
                  className={`group relative bg-gradient-to-br ${service.gradient} p-8 rounded-2xl border-2 border-transparent hover:border-indigo-400 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedService(service)}
                  role="button"
                  tabIndex={0}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-indigo-400 group-hover:scale-110 transition-transform duration-300 border-4 border-white group-hover:border-indigo-400`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                  >
                    <service.icon size={32} className="text-white drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight group-hover:text-indigo-700 transition-colors duration-200">{service.title}</h3>
                  <p className="text-gray-600 mb-5 text-base leading-relaxed group-hover:text-indigo-600 transition-colors duration-200">{service.description}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2 group-hover:text-indigo-500 transition-colors duration-200" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_0_rgba(99,102,241,0.15)] transition-all duration-300" />
                </motion.div>
              </DialogTrigger>
            ))}
          </div>
          {selectedService && (
            <DialogContent className="max-w-3xl p-0 sm:p-0 bg-gradient-to-br from-white via-gray-50 to-indigo-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 p-8 md:p-12 w-full md:w-1/3">
                  {/* Service logo or icon */}
                  <selectedService.icon size={64} className="text-white p-4 rounded-xl shadow-lg bg-indigo-500" />
                  <h3 className="text-2xl font-bold text-white text-center mt-2 mb-2">{selectedService.title}</h3>
                </div>
                <div className="flex-1 p-8 md:p-12">
                  <DialogHeader>
                    <div className="mb-6 text-lg text-gray-700 text-left leading-relaxed">
                      {selectedService.description}
                    </div>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-indigo-700 mb-2">Key Features</h4>
                      <ul className="space-y-2 text-base text-gray-800">
                        {selectedService.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check size={18} className="text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Add more detail here for demo purposes */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-700 mb-2">Why Choose This Service?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">
                        We deliver tailored solutions with a focus on innovation, reliability, and business impact. Our team combines deep technical expertise with a consultative approach to ensure your project’s success from start to finish.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-indigo-700 mb-2">Get Started</h4>
                      <p className="text-gray-700 text-base leading-relaxed">
                        Contact us for a free consultation and discover how this service can transform your business. We’re here to answer your questions and guide you every step of the way.
                      </p>
                    </div>
                  </DialogHeader>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}