import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bot, Activity } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <MessageCircle className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Chat with the Bot</h3>
              <p className="text-gray-600 leading-relaxed">
                Describe your symptoms to the Telegram chatbot naturally and
                easily.
              </p>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Bot className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system analyzes the information and generates personalized
                recommendations.
              </p>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Activity className="w-10 h-10 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Get Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive preliminary medical recommendations and next steps to
                follow.
              </p>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};
