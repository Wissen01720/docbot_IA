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

  const features = [
    {
      icon: Star,
      title: "Precisión",
      description: "Análisis detallado de síntomas",
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Datos protegidos y encriptados",
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Respuestas instantáneas 24/7",
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
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar <ChevronRight className="ml-1 w-4 h-4" />
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
            Diagnóstico Médico
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              {" "}
              Asistido por IA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Acceso a soporte médico inteligente a través de un chatbot de
            Telegram, llevando atención médica a comunidades desatendidas.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar ahora <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
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
              ¿Cómo Funciona?
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
                <h3 className="text-2xl font-bold mb-4">
                  Interactúa con el Chatbot
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Describe tus síntomas al chatbot de Telegram de manera natural
                  y sencilla.
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
                <h3 className="text-2xl font-bold mb-4">Análisis IA</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro sistema analiza la información y genera
                  recomendaciones personalizadas.
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
                <h3 className="text-2xl font-bold mb-4">Recibe Orientación</h3>
                <p className="text-gray-600 leading-relaxed">
                  Obtén recomendaciones médicas preliminares y siguientes pasos
                  a seguir.
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
                Impacto Social
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
                          Acceso Universal
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Llevamos atención médica preliminar a comunidades con
                          acceso limitado a servicios de salud.
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
                          Mejora Continua
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          El sistema aprende y mejora constantemente gracias al
                          feedback de los usuarios y profesionales médicos.
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-16">
              Testimonios
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
                  "El chatbot me ayudó a entender mis síntomas y me guió sobre
                  cuándo era necesario buscar atención médica urgente."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">MA</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">María A.</p>
                    <p className="text-gray-500">Usuario</p>
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
                  "Una herramienta invaluable para comunidades donde el acceso a
                  médicos es limitado. Ayuda a tomar mejores decisiones sobre la
                  salud."
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">JR</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">Juan R.</p>
                    <p className="text-gray-500">Líder Comunitario</p>
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
              © 2024 Plataforma de Diagnóstico Médico Asistido por IA. Todos los
              derechos reservados.
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Términos
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacidad
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Contacto
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
