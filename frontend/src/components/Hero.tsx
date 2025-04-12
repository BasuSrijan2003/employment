import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCreateResume = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewTemplates = () => {
    document
      .getElementById("templates")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Modern grid lines for background
  const gridLines = Array.from({ length: 10 });

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Modern dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0"></div>

      {/* Modern grid lines animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Horizontal lines */}
        {gridLines.map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute h-px w-full bg-blue-400"
            style={{ top: `${(i + 1) * 10}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: [0, 0.5, 0],
              x: [(i % 2 === 0 ? -20 : 20) * mousePosition.x, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Vertical lines */}
        {gridLines.map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute w-px h-full bg-indigo-400"
            style={{ left: `${(i + 1) * 10}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: 1,
              opacity: [0, 0.5, 0],
              y: [(i % 2 === 0 ? -20 : 20) * mousePosition.y, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Modern floating geometric shapes */}
      <div className="absolute inset-0 z-0">
        {/* Circle */}
        <motion.div
          className="absolute w-96 h-96 rounded-full border-4 border-blue-500/30 top-0 right-0"
          animate={{
            x: [50, -50],
            y: [-50, 50],
            rotate: [0, 180],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Square */}
        <motion.div
          className="absolute w-64 h-64 border-4 border-indigo-500/30 bottom-20 left-20"
          animate={{
            x: [-30, 30],
            y: [30, -30],
            rotate: [0, 90],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Triangle */}
        <svg
          className="absolute bottom-40 right-40 z-0"
          width="200"
          height="200"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M50 15 L15 85 L85 85 Z"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="2"
            animate={{
              rotate: [0, 180, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </div>

      {/* Modern glow effects */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl z-0"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          filter: "blur(60px)",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl z-0"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2,
        }}
        style={{
          filter: "blur(70px)",
        }}
      />

      {/* Digital particle wave effect */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 rounded-full bg-blue-400"
            style={{
              left: `${index * 5}%`,
              bottom: "0",
            }}
            animate={{
              y: [-40, -60 - Math.random() * 100, -40],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Fixed text reveal animation with improved font rendering */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <span className="inline-block">Land Your Dream Job with</span>
              </motion.div>
              <div>
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 inline-block mt-2"
                  style={{
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  IIT-IIM Formatted Resumes
                </motion.span>
              </div>
            </div>

            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 font-normal antialiased"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Create professional resumes tailored specifically for IIT and IIM
              standards. Stand out from the crowd and increase your chances of
              getting noticed by top recruiters.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA button with modern hover effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 rounded-md text-lg font-medium shadow-lg group overflow-hidden"
                  onClick={handleCreateResume}
                >
                  <span className="relative z-10 flex items-center">
                    Create Your Resume
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </motion.div>

              {/* Secondary CTA with modern design */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  className="relative bg-transparent text-white px-8 py-6 rounded-md text-lg font-medium group overflow-hidden"
                  onClick={handleViewTemplates}
                >
                  <span className="relative z-10 flex items-center">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Templates
                  </span>
                  <span className="absolute inset-0 border-2 border-blue-500/30 rounded-md"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Modern card design with 3D effect */}
              <motion.div
                className="w-[400px] h-[550px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(-5deg) rotateX(5deg)`,
                }}
                animate={{
                  rotateY: [-5, 0, -5],
                  rotateX: [5, 0, 5],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <motion.div
                  className="absolute inset-1 bg-white rounded-lg p-8"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(10px)",
                  }}
                >
                  <div className="h-6 w-20 bg-blue-500 rounded-md mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3 space-y-1">
                        <div className="h-3 w-40 bg-gray-200 rounded"></div>
                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3 space-y-1">
                        <div className="h-3 w-36 bg-gray-200 rounded"></div>
                        <div className="h-3 w-28 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3 space-y-1">
                        <div className="h-3 w-44 bg-gray-200 rounded"></div>
                        <div className="h-3 w-24 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Modern shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ transform: "skewX(45deg)" }}
                    animate={{ x: [-200, 600] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3">
                <svg width="120" height="120" viewBox="0 0 100 100">
                  <pattern
                    id="pattern-circles"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1" fill="#60A5FA" />
                  </pattern>
                  <motion.rect
                    width="100%"
                    height="100%"
                    fill="url(#pattern-circles)"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 100,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-100 mb-4 font-medium tracking-wide antialiased">
            Trusted by 10,000+ students and professionals from top institutions
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Modern animated logos */}
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={`logo-${index}`}
                className="h-8 w-20 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-md border border-blue-500/20"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Modern scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="30" height="50" viewBox="0 0 30 50">
            <motion.rect
              x="10"
              y="5"
              width="10"
              height="20"
              rx="5"
              stroke="rgba(96, 165, 250, 0.5)"
              strokeWidth="2"
              fill="none"
            />
            <motion.circle
              cx="15"
              cy="15"
              r="3"
              fill="#60A5FA"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
