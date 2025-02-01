import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, Zap } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const features = [
  {
    icon: Star,
    title: "Precision",
    description: "Detailed symptom analysis",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Protected and encrypted data",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "24/7 instant responses",
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
