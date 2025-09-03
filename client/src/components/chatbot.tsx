import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const suggestedQuestions = [
  "What services do you offer?",
  "Tell me about web development",
  "What is PLM customization?", 
  "How much do your services cost?",
  "Tell me about AI solutions",
  "What is the difference between KPO and BPO?",
  "How can I contact you?",
  "Tell me about mobile app development",
  "What technologies do you use?",
  "How long does a project take?"
];

const chatbotResponses = {
  greetings: [
    "Hello! I'm here to help you learn about Algonimation's services. How can I assist you today?",
    "Hi there! Welcome to Algonimation. I can answer questions about our web development, app development, and AI solutions. What would you like to know?",
    "Welcome! I'm the Algonimation assistant. Feel free to ask me about our services, pricing, or how we can help your business grow."
  ],
  
  services: {
    web: "We provide comprehensive web development services including modern React applications, responsive designs, e-commerce platforms, and custom web solutions. Our team specializes in creating fast, secure, and user-friendly websites.",
    app: "Our app development services cover both iOS and Android platforms. We build native and cross-platform mobile applications with modern UI/UX design, seamless performance, and integration with backend systems.",
    plm: "We offer PLM (Product Lifecycle Management) customizations to help businesses optimize their product development processes. Our solutions include custom workflows, integrations, and data management systems.",
    ai: "Our AI solutions include chatbots, machine learning models, data analysis, automation systems, and AI-powered business intelligence tools. We help businesses leverage AI to improve efficiency and decision-making.",
    kpo: "Our KPO (Knowledge Process Outsourcing) services include research and analytics, data processing, content creation, technical writing, and business intelligence support.",
    bpo: "We provide BPO (Business Process Outsourcing) services including customer support, data entry, virtual assistance, accounting support, and administrative tasks."
  },
  
  pricing: "Our pricing is project-based and depends on your specific requirements. We offer competitive rates and can provide a detailed quote after understanding your needs. For pricing inquiries, you can reach out to us at jayeshvyascs@gmail.com or use our contact form for a free consultation.",
  
  contact: "You can reach us through our contact form on this website, email us at jayeshvyascs@gmail.com, or feel free to call us directly. We typically respond to inquiries within 24 hours and offer free initial consultations.",
  
  company: "Algonimation is a technology company specializing in innovative solutions for businesses. We combine expertise in web development, mobile apps, AI, and business process optimization to help companies grow and succeed in the digital age.",
  
  fallback: [
    "I'd be happy to help you with that! For specific questions about our services, pricing, or how we can help your business, please use our contact form or speak with our team directly.",
    "That's a great question! Our team would be the best to give you detailed information about that. Feel free to reach out through our contact form.",
    "I can help you with general information about our services. For more specific details, our experts would love to discuss your needs personally through our contact form."
  ]
};

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Greetings
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)];
  }
  
  // Services
  if (lowerMessage.includes('web') || lowerMessage.includes('website')) {
    return chatbotResponses.services.web;
  }
  if (lowerMessage.includes('app') || lowerMessage.includes('mobile')) {
    return chatbotResponses.services.app;
  }
  if (lowerMessage.includes('plm')) {
    return chatbotResponses.services.plm;
  }
  if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
    return chatbotResponses.services.ai;
  }
  if (lowerMessage.includes('kpo')) {
    return chatbotResponses.services.kpo;
  }
  if (lowerMessage.includes('bpo')) {
    return chatbotResponses.services.bpo;
  }
  
  // Pricing
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return chatbotResponses.pricing;
  }
  
  // Contact
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('call')) {
    return chatbotResponses.contact;
  }
  
  // Company info
  if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('algonimation')) {
    return chatbotResponses.company;
  }
  
  // Services list
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('help')) {
    return "We offer six main services: Web Development, App Development, PLM Customizations, AI Solutions, KPO Services, and BPO Services. Which one would you like to know more about?";
  }

  // KPO vs BPO comparison
  if (lowerMessage.includes('difference') && (lowerMessage.includes('kpo') || lowerMessage.includes('bpo'))) {
    return "Great question! KPO (Knowledge Process Outsourcing) involves specialized knowledge work like research, analytics, and technical writing. BPO (Business Process Outsourcing) covers routine business tasks like customer support, data entry, and administrative work. We offer both depending on your needs.";
  }

  // Technology/tools questions
  if (lowerMessage.includes('technology') || lowerMessage.includes('tools') || lowerMessage.includes('framework')) {
    return "We use modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms, and the latest development tools. Our tech stack is chosen based on your project requirements for optimal performance and scalability.";
  }

  // Timeline questions
  if (lowerMessage.includes('time') || lowerMessage.includes('duration') || lowerMessage.includes('how long')) {
    return "Project timelines vary based on complexity and requirements. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline after understanding your specific needs.";
  }
  
  // Fallback
  return chatbotResponses.fallback[Math.floor(Math.random() * chatbotResponses.fallback.length)];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you learn about Algonimation's services. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(textToSend);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={24} />
        <span className="hidden sm:block">Chat with us</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/algonimation-logo.png"
                  alt="Algonimation Logo"
                  className="w-8 h-8 rounded shadow object-contain bg-white"
                  style={{ minWidth: 32, minHeight: 32 }}
                />
                <h3 className="font-semibold">Algonimation Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-1"
              >
                <X size={18} />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${
                      message.isBot ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[250px] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-indigo-600 text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Suggested Questions */}
                {showSuggestions && messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 px-2">Try asking:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => sendMessage(question)}
                          className="text-left text-xs p-2 bg-gray-50 hover:bg-gray-100 rounded-lg border transition-colors"
                          disabled={isTyping}
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => sendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}