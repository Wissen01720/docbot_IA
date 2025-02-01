import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Shield,
  Zap,
  Heart,
  Users,
} from "lucide-react";
import { FadeInWhenVisible } from "../components/FadeInWhenVisible";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqItems: FAQItem[] = [
  {
    question: "How does the chatbot work?",
    answer:
      "The chatbot uses artificial intelligence to analyze your symptoms and provide preliminary medical recommendations. Simply describe your symptoms in natural language, and the bot will guide you.",
    icon: MessageCircle,
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is encrypted and protected. We follow strict privacy policies to ensure your information is safe and confidential.",
    icon: Shield,
  },
  {
    question: "How fast can I get a response?",
    answer:
      "The chatbot provides instant responses 24/7. You don't have to wait in line or schedule an appointment.",
    icon: Zap,
  },
  {
    question: "Can I trust the recommendations?",
    answer:
      "The chatbot is designed to provide preliminary guidance based on your symptoms. However, always consult a healthcare professional for a definitive diagnosis.",
    icon: Heart,
  },
  {
    question: "Is this service free?",
    answer:
      "Yes, the chatbot is completely free to use. Our goal is to make healthcare accessible to everyone.",
    icon: Users,
  },
];

const FAQComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <FadeInWhenVisible>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our AI-assisted medical
            diagnosis platform.
          </p>
        </FadeInWhenVisible>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 text-left">
                      {item.question}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  </motion.div>
                </button>

                {/* Answer */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
