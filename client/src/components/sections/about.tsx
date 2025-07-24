import { motion } from "framer-motion";

const values = [
  { title: "Innovation", subtitle: "Cutting-edge solutions", gradient: "from-indigo-50 to-purple-50", color: "text-indigo-600" },
  { title: "Quality", subtitle: "Excellence in delivery", gradient: "from-purple-50 to-pink-50", color: "text-purple-600" },
  { title: "Support", subtitle: "24/7 assistance", gradient: "from-cyan-50 to-emerald-50", color: "text-cyan-600" },
  { title: "Growth", subtitle: "Scalable solutions", gradient: "from-emerald-50 to-teal-50", color: "text-emerald-600" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About <span className="gradient-text">Algonimation</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a forward-thinking technology company dedicated to creating innovative solutions 
              that transform businesses and drive digital transformation across industries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between cutting-edge technology and practical 
              business applications, Algonimation has grown to become a trusted partner for companies 
              seeking excellence in digital solutions. Our team of experienced professionals combines 
              technical expertise with creative thinking to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 py-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className={`text-center p-4 bg-gradient-to-br ${value.gradient} rounded-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-3xl font-bold ${value.color} mb-2`}>{value.title}</div>
                  <div className="text-gray-600">{value.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Team illustration */}
            <div className="bg-gradient-to-br from-gray-100 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {[
                  { height: "h-20", gradient: "from-indigo-400 to-purple-500", delay: 0 },
                  { height: "h-16", gradient: "from-cyan-400 to-emerald-500", delay: 0.1 },
                  { height: "h-18", gradient: "from-emerald-400 to-teal-500", delay: 0.2 },
                  { height: "h-16", gradient: "from-amber-400 to-orange-500", delay: 0.3 },
                  { height: "h-20", gradient: "from-red-400 to-pink-500", delay: 0.4 },
                  { height: "h-14", gradient: "from-purple-400 to-indigo-500", delay: 0.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`w-full ${item.height} bg-gradient-to-br ${item.gradient} rounded-xl ${index < 2 ? '' : index < 4 ? 'mt-8' : ''}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 bg-indigo-600 rounded-full"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-purple-600 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-cyan-600 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-600 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
