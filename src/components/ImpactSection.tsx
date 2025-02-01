import React from "react";
import { motion } from "framer-motion";
import { Users, Heart } from "lucide-react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-16">
              Social Impact
            </h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible>
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                  alt="Medical Care"
                  className="relative rounded-2xl shadow-2xl"
                />
              </motion.div>
            </FadeInWhenVisible>
            <div className="space-y-8">
              <FadeInWhenVisible>
                <motion.div
                  className="bg-blue-50 p-6 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        Universal Access
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We bring preliminary medical care to communities with
                        limited access to healthcare services.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <motion.div
                  className="bg-blue-50 p-6 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <Heart className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        Continuous Improvement
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        The system continuously learns and improves through user
                        and medical professional feedback.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
