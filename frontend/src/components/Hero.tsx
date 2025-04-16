import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Brain,
  Target,
  Cpu,
  Network,
  Code,
  LineChart,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Supercharge Your Career with AI-Powered Resume Crafting";
  const typingSpeed = 75; // milliseconds per character
  const canvasRef = useRef(null);

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const connections = [];
    const numNodes = 50;

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    // Create connections
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (Math.random() > 0.98) {
          connections.push({
            from: i,
            to: j,
          });
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      ctx.strokeStyle = "rgba(245, 230, 18, 0.15)";
      ctx.lineWidth = 0.6;
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];

        const dx = mousePosition.x * canvas.width - fromNode.x;
        const dy = mousePosition.y * canvas.height - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();

        // Draw data packet traveling along line
        if (Math.random() > 0.995) {
          const packetPosition = Math.random();
          const packetX = fromNode.x + (toNode.x - fromNode.x) * packetPosition;
          const packetY = fromNode.y + (toNode.y - fromNode.y) * packetPosition;

          ctx.fillStyle = "rgba(0, 235, 255, 0.8)";
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        const mouseDx = mousePosition.x * canvas.width - node.x;
        const mouseDy = mousePosition.y * canvas.height - node.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        // Glow based on mouse proximity
        const glow = mouseDistance < 200 ? (1 - mouseDistance / 200) * 0.8 : 0;

        ctx.fillStyle = `rgba(64, 149, 255, ${0.2 + glow})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        if (glow > 0) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(0, 235, 255, 0.5)";
          ctx.fillStyle = "rgba(0, 235, 255, 0.8)";
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * (1 + glow), 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mousePosition]);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [typedText, isTyping, fullText]);

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

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-blue-950 min-h-screen">
      {/* Neural network background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-950 opacity-60 z-10"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(64, 149, 255, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Binary code background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`binary-${i}`}
              className="text-blue-400 opacity-20 whitespace-nowrap animate-marquee font-mono text-xs"
              style={{
                animationDuration: `${20 + i * 5}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {Array.from({ length: 100 })
                .map((_, j) => (Math.random() > 0.5 ? "1" : "0"))
                .join(" ")}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Hero text */}
          <div className="w-full lg:w-1/2">
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-1 inline-flex items-center space-x-2 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-300 font-medium text-sm">
                Powered by Advanced AI
              </span>
            </motion.div>

            {/* Main heading with typing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            >
              {typedText}
              <span
                className={`inline-block w-1.5 h-8 ml-1 bg-blue-500 ${
                  isTyping ? "animate-blink" : ""
                }`}
              ></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
            >
              Our intelligent algorithms analyze millions of successful resumes
              to craft perfectly optimized documents that bypass ATS systems and
              impress recruiters.
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-start space-x-3">
                <Sparkles className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-white">
                    Smart Content Generation
                  </h3>
                  <p className="text-gray-400">
                    AI analyzes your experience and suggests optimal phrasing
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-white">
                    ATS-Optimized Templates
                  </h3>
                  <p className="text-gray-400">
                    Engineered to pass Applicant Tracking Systems
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-white">
                    Personalized Recommendations
                  </h3>
                  <p className="text-gray-400">
                    Get tailored advice to strengthen your application
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleCreateResume}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center gap-2 group"
              >
                <span>Create Resume Now</span>
                <Zap className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={handleViewTemplates}
                variant="outline"
                className="bg-transparent border border-blue-500/30 text-white px-8 py-6 rounded-lg text-lg font-medium hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <span>View Templates</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 pt-6 border-t border-gray-800"
            >
              <p className="text-gray-400 text-sm mb-3">
                Trusted by professionals from:
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {["IIT", "IIM", "Harvard", "MIT", "Stanford"].map(
                  (name, index) => (
                    <div key={name} className="text-gray-500 font-medium">
                      {name}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Right column - Interactive AI Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              {/* AI Interface Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      ResumeAI Assistant
                    </h3>
                    <div className="flex items-center text-xs text-green-400">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Online now
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-white">
                    <Cpu className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <LineChart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* AI Chat Interface */}
              <div className="p-4 h-[400px] overflow-y-auto flex flex-col gap-4">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex justify-end"
                >
                  <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                    <p className="text-white">
                      I need help creating a resume for a software engineering
                      position.
                    </p>
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="flex"
                >
                  <div className="bg-gray-800/80 border border-gray-700 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <p className="text-white">
                      I'll help you create a standout resume! Let's start by
                      analyzing your skills and experience to highlight your
                      strengths.
                    </p>
                  </div>
                </motion.div>

                {/* AI thinking animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="flex"
                >
                  <div className="bg-gray-800/80 border border-gray-700 rounded-lg rounded-tl-none p-4 max-w-[80%]">
                    <div className="flex gap-1 mb-2">
                      <span
                        className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                        style={{ animationDelay: "200ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                        style={{ animationDelay: "400ms" }}
                      ></span>
                    </div>
                    <p className="text-white">
                      Analyzing your profile and industry requirements...
                    </p>
                  </div>
                </motion.div>

                {/* AI recommendations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3 }}
                  className="flex"
                >
                  <div className="bg-gray-800/80 border border-gray-700 rounded-lg rounded-tl-none p-4 max-w-[90%]">
                    <p className="text-white mb-3">
                      Based on your profile, I recommend focusing on these key
                      areas:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white bg-blue-900/30 border border-blue-800/30 rounded-md px-3 py-2">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        <span>
                          Highlight your React & Node.js projects with specific
                          metrics
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white bg-blue-900/30 border border-blue-800/30 rounded-md px-3 py-2">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        <span>
                          Emphasize your experience with cloud platforms
                          (AWS/GCP)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white bg-purple-900/30 border border-purple-800/30 rounded-md px-3 py-2">
                        <Network className="w-5 h-5 text-purple-400" />
                        <span>
                          Add keywords: microservices, CI/CD pipelines, Docker
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* AI Input Field */}
              <div className="p-4 border-t border-gray-800 bg-gray-900/70">
                <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg p-2">
                  <input
                    type="text"
                    placeholder="Ask AI for specific resume advice..."
                    className="flex-grow bg-transparent border-none outline-none text-white px-2"
                  />
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Futuristic glowing border effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute -inset-1 rounded-2xl opacity-30 blur-xl bg-gradient-to-r from-blue-600 via-transparent to-purple-600"></div>
              </div>
            </div>

            {/* AI Processing indicators */}
            <div className="mt-4 flex justify-between items-center px-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Code className="w-4 h-4" />
                <span>LLM Model: GPT-4 Turbo</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Cpu className="w-4 h-4" />
                <span>Processing: ATS Compatibility</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
        <div className="w-7 h-10 border-2 border-purple-500 rounded-full p-1">
          <div className="w-1.5 h-2 bg-green-500 rounded-full animate-bounce mx-auto"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
