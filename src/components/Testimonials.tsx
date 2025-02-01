import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                "The chatbot helped me understand my symptoms and guided me on
                when it was necessary to seek urgent medical attention."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">MA</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold text-lg">Mary A.</p>
                  <p className="text-gray-500">User</p>
                </div>
              </div>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                "An invaluable tool for communities where access to doctors is
                limited. It helps make better decisions about health."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">JR</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold text-lg">John R.</p>
                  <p className="text-gray-500">Community Leader</p>
                </div>
              </div>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};
