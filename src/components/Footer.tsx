import React from "react";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">
            © 2025 AI-Assisted Medical Diagnosis Platform. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};