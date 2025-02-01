import React from "react";
import { Brain, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  isScrolled: boolean;
  handleStart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled, handleStart }) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">MediAI</span>
          </motion.div>
          <motion.button
            onClick={handleStart}
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start <ChevronRight className="ml-1 w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
