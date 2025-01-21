import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageCircle,
  Activity,
  Users,
  Heart,
  ArrowRight,
  Bot,
  Brain,
  ChevronRight,
  Star,
  Shield,
  Zap,
} from "lucide-react";

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStart = () => {
    window.location.href = "https://t.me/GuiaDiagonosticaIABot";
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Floating Navigation */}
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

      {/* Hero Section */}
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

      {/* Features Grid */}
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

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-16">
              How It Works
            </h2>
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

      {/* Impact Section */}
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
                          The system continuously learns and improves through
                          user and medical professional feedback.
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

{/* How to Use Section */}
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-16">
              How to Use
            </h2>
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
                <h3 className="text-2xl font-bold mb-4">Step 1: Start Chat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Click on the "Start" button to open the Telegram chatbot.
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
                <h3 className="text-2xl font-bold mb-4">Step 2: Describe Symptoms</h3>
                <p className="text-gray-600 leading-relaxed">
                  Describe your symptoms to the chatbot in a natural and easy way.
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
                <h3 className="text-2xl font-bold mb-4">Step 3: Get Recommendations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive preliminary medical recommendations and next steps to follow.
                </p>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-16">
              Testimonials
            </h2>
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

      {/* Footer */}
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
              © 2025 AI-Assisted Medical Diagnosis Platform. All rights
              reserved.
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
    </div>
  );
}

export default App;
