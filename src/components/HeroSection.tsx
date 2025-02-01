import React from "react";
import { Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  handleStart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ handleStart }) => {
  return (
    <header className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <Brain className="w-20 h-20 text-blue-600" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Assisted
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            {" "}
            Medical Diagnosis
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Access intelligent medical support through a Telegram chatbot,
          bringing healthcare to underserved communities.
        </p>
        <motion.button
          onClick={handleStart}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Now <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </motion.div>
    </header>
  );
};
