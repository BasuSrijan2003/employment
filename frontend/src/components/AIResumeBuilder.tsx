// AIResumeBuilder.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Sparkles,
  Award,
  Cpu,
  Check,
  ArrowRight,
  ChevronRight,
  Code,
  BarChart,
  MousePointer,
  Zap,
  FileUp,
  Clock,
  Star,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface StepType {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const AIResumeBuilder: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [resumeProgress, setResumeProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fullText = "Build a professional resume in minutes with advanced AI";
  const typingSpeed = 70; // milliseconds per character

  // Highlight AI text
  const highlightAI = (text: string) => {
    return text.split(/(AI)/g).map((part, i) =>
      part === "AI" ? (
        <span
          key={i}
          className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 font-bold px-0.5"
        >
          AI
          <span className="absolute -inset-1 bg-cyan-500/10 blur-sm rounded-sm"></span>
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

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

  // Canvas animation for futuristic grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridSize = 40;
    const lineWidth = 0.2;

    function drawGrid() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(99, 102, 241, 0.1)";
      ctx.lineWidth = lineWidth;

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Add some random data points
      ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
      for (let i = 0; i < 100; i++) {
        const x =
          Math.floor((Math.random() * canvas.width) / gridSize) * gridSize;
        const y =
          Math.floor((Math.random() * canvas.height) / gridSize) * gridSize;

        if (Math.random() > 0.7) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Add some pulsing nodes
      const time = Date.now() * 0.001;
      for (let i = 0; i < 15; i++) {
        const x = Math.floor((i * 173) % (canvas.width / gridSize)) * gridSize;
        const y = Math.floor((i * 121) % (canvas.height / gridSize)) * gridSize;

        const pulseSize = (Math.sin(time + i) * 0.5 + 0.5) * 4 + 2;

        ctx.beginPath();
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${
          (Math.sin(time + i) * 0.5 + 0.5) * 0.3 + 0.1
        })`;
        ctx.fill();
      }
    }

    const animateGrid = () => {
      drawGrid();
      requestAnimationFrame(animateGrid);
    };

    animateGrid();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto increment resume progress
  useEffect(() => {
    const interval = setInterval(() => {
      setResumeProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Steps for resume creation
  const steps: StepType[] = [
    {
      id: 1,
      title: "Upload or start from scratch",
      description:
        "Our AI can analyze your existing resume or help you build one from the ground up.",
      icon: FileUp,
    },
    {
      id: 2,
      title: "Answer a few questions",
      description:
        "The AI personalizes your resume based on your experience and career goals.",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "AI generates your resume",
      description:
        "Advanced algorithms craft tailored content optimized for applicant tracking systems.",
      icon: Cpu,
    },
    {
      id: 4,
      title: "Review and customize",
      description:
        "Fine-tune your AI-generated resume with powerful editing tools.",
      icon: FileText,
    },
  ];

  // Template options
  const templates = [
    { id: "modern", name: "Modern" },
    { id: "professional", name: "Professional" },
    { id: "creative", name: "Creative" },
    { id: "technical", name: "Technical" },
    { id: "executive", name: "Executive" },
  ];

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-indigo-950 min-h-screen">
      {/* Grid background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Glowing accent elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-1 inline-flex items-center gap-2 mb-6"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-sm">
                Powered by Advanced {highlightAI("AI")}
              </span>
            </motion.div>

            {/* Main heading with typing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            >
              Don't Have a Resume? Build It Right Now Using {highlightAI("AI")}
              <span
                className={`inline-block w-1.5 h-8 ml-1 bg-indigo-500 ${
                  isTyping ? "animate-blink" : ""
                }`}
              ></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
            >
              Our cutting-edge {highlightAI("AI")} algorithm crafts tailored,
              ATS-optimized resumes in minutes, increasing your interview
              chances by 4x.
            </motion.p>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-indigo-500/20 p-1.5 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    Intelligent Content Generation
                  </h3>
                  <p className="text-gray-400">
                    {highlightAI("AI")} analyzes your background to generate
                    compelling bullet points
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-indigo-500/20 p-1.5 flex-shrink-0">
                  <BarChart className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">ATS Optimization</h3>
                  <p className="text-gray-400">
                    Our {highlightAI("AI")} ensures your resume passes applicant
                    tracking systems
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-indigo-500/20 p-1.5 flex-shrink-0">
                  <Clock className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Ready in Minutes</h3>
                  <p className="text-gray-400">
                    Create a professional resume in under 10 minutes with{" "}
                    {highlightAI("AI")} assistance
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <Button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2 group">
                <span>Build Your Resume Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm italic">
                    "The {highlightAI("AI")} resume builder completely
                    transformed my job search. I received 3 interview calls
                    within a week after struggling for months!"
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Samantha J., Software Engineer
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Interactive Resume Builder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        {highlightAI("AI")} Resume Builder
                      </h3>
                      <div className="flex items-center text-xs text-cyan-400">
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        4-step intelligent process
                      </div>
                    </div>
                  </div>

                  {/* Header action buttons */}
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Code className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Award className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="p-6">
                {/* Steps indicator */}
                <div className="flex items-center justify-between mb-8">
                  {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center">
                      <div
                        className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          activeStep >= step.id
                            ? "border-indigo-500 bg-indigo-500/20"
                            : "border-gray-700 bg-gray-800/50"
                        } mb-2`}
                      >
                        {activeStep > step.id ? (
                          <Check className="w-5 h-5 text-indigo-400" />
                        ) : (
                          <span className="text-white font-medium">
                            {step.id}
                          </span>
                        )}

                        {/* Connecting line */}
                        {step.id < steps.length && (
                          <div
                            className={`absolute top-1/2 -right-full w-full h-0.5 ${
                              activeStep > step.id
                                ? "bg-indigo-500"
                                : "bg-gray-700"
                            }`}
                          ></div>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 text-center hidden md:block">
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Current step content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step details */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        {/* <steps[activeStep - 1].icon className="w-6 h-6 text-indigo-400" /> */}
                        <h3 className="text-white text-xl font-medium">
                          {steps[activeStep - 1].title}
                        </h3>
                      </div>
                      <p className="text-gray-300 ml-9">
                        {highlightAI(steps[activeStep - 1].description)}
                      </p>
                    </div>

                    {/* Step-specific UI */}
                    {activeStep === 1 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-colors p-4 rounded-lg cursor-pointer flex flex-col items-center text-center">
                            <FileUp className="w-8 h-8 text-indigo-400 mb-3" />
                            <h4 className="text-white font-medium mb-1">
                              Upload Existing Resume
                            </h4>
                            <p className="text-gray-400 text-sm">
                              Our {highlightAI("AI")} will analyze and enhance
                              it
                            </p>
                          </div>
                          <div className="bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-colors p-4 rounded-lg cursor-pointer flex flex-col items-center text-center">
                            <FileText className="w-8 h-8 text-indigo-400 mb-3" />
                            <h4 className="text-white font-medium mb-1">
                              Start From Scratch
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {highlightAI("AI")} will guide you step-by-step
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-400">
                          Supported formats: PDF, DOCX, TXT (Max 5MB)
                        </p>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-gray-300 text-sm">
                              What job title are you targeting?
                            </label>
                            <Input
                              className="bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500"
                              placeholder="e.g., Software Engineer, Marketing Manager..."
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-gray-300 text-sm">
                              Years of relevant experience
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {["0-2", "3-5", "6+"].map((year) => (
                                <button
                                  key={year}
                                  className="bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 text-white py-2 rounded-lg"
                                >
                                  {year} years
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-gray-300 text-sm">
                              Select resume template
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                              {templates.map((template) => (
                                <button
                                  key={template.id}
                                  className="bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 text-white p-2 rounded-lg text-xs"
                                >
                                  {template.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-6">
                        <div className="text-center py-6">
                          <div className="relative w-24 h-24 mx-auto mb-4">
                            <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                            <div
                              className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin"
                              style={{ animationDuration: "2s" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Cpu className="w-10 h-10 text-indigo-400" />
                            </div>
                          </div>
                          <h3 className="text-white text-xl font-medium mb-2">
                            {highlightAI("AI")} is crafting your resume
                          </h3>
                          <p className="text-gray-300 mb-6">
                            Analyzing job market trends and optimizing content
                            for ATS systems
                          </p>

                          {/* Progress bar */}
                          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                              style={{ width: `${resumeProgress}%` }}
                            ></div>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {resumeProgress}% complete
                          </p>
                        </div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="space-y-6">
                        <div className="relative border border-gray-700 rounded-lg p-4 overflow-hidden">
                          <div className="absolute top-0 right-0 p-2 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent">
                            <div className="flex gap-2">
                              <button className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded flex items-center gap-1">
                                <Zap className="w-3 h-3" />
                                <span>{highlightAI("AI")} Improve</span>
                              </button>
                              <button className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                <span>Edit</span>
                              </button>
                            </div>
                          </div>

                          {/* Preview of the resume */}
                          <div className="text-gray-200 space-y-3">
                            <div className="border-b border-gray-700 pb-2">
                              <h3 className="text-xl font-bold text-white">
                                John Doe
                              </h3>
                              <p className="text-gray-400 text-sm">
                                Software Engineer | john.doe@example.com | (123)
                                456-7890
                              </p>
                            </div>

                            <div>
                              <h4 className="text-indigo-400 font-medium mb-1">
                                Professional Summary
                              </h4>
                              <p className="text-sm">
                                Innovative Software Engineer with 5+ years of
                                experience in full-stack development. Proficient
                                in React, Node.js, and AWS...
                              </p>
                            </div>

                            <div>
                              <h4 className="text-indigo-400 font-medium mb-1">
                                Work Experience
                              </h4>
                              <div className="text-sm">
                                <p className="font-medium">
                                  Senior Developer - Tech Solutions Inc.
                                </p>
                                <p className="text-gray-400 text-xs mb-1">
                                  January 2020 - Present
                                </p>
                                <ul className="list-disc list-inside text-xs space-y-1 text-gray-300">
                                  <li>
                                    Led development of a microservices
                                    architecture that improved system
                                    performance by 40%
                                  </li>
                                  <li>
                                    Implemented CI/CD pipelines that reduced
                                    deployment time by 65%
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="text-gray-400 text-xs text-center mt-4">
                              Preview mode • Click "Download" to get full resume
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white">
                            Download PDF
                          </Button>
                          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                            Download DOCX
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="mt-8 flex justify-between">
                      <Button
                        variant="outline"
                        disabled={activeStep === 1}
                        onClick={() =>
                          setActiveStep((prev) => Math.max(1, prev - 1))
                        }
                        className="border-gray-700 text-gray-300 hover:bg-gray-800"
                      >
                        Back
                      </Button>

                      <Button
                        onClick={handleNext}
                        disabled={activeStep === steps.length}
                        className={`${
                          activeStep === steps.length
                            ? "bg-gray-700 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700"
                        } text-white flex items-center gap-2`}
                      >
                        {activeStep === steps.length ? "Completed" : "Continue"}
                        {activeStep !== steps.length && (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* AI suggestions indicator */}
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-3 py-1">
                  <MousePointer className="w-3 h-3 text-indigo-400" />
                  <span className="text-indigo-300 text-xs">
                    {highlightAI("AI")} Suggestions Available
                  </span>
                </div>
              </div>

              {/* Futuristic glowing border effect */}
              <div
                className={`absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-30" : ""
                }`}
              >
                <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r from-indigo-600 via-transparent to-cyan-600"></div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-6 flex justify-between items-center text-gray-400 text-xs px-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>{highlightAI("AI")} Engine: GPT-4 Turbo</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>ATS Compatibility Score: 96%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIResumeBuilder;
