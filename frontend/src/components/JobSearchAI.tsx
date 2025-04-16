// JobSearchAI.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Search,
  Briefcase,
  Award,
  Users,
  PieChart,
  Compass,
  Filter,
  Cpu,
  Zap,
  CheckCircle,
  Clock,
  TrendingUp,
  ArrowRight,
  BarChart,
  User,
  Building,
  MapPin,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import styles from "./JobSearchAI.module.scss";

interface JobMatch {
  id: number;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  salary: string;
  skills: string[];
  posted: string;
}

const JobSearchAI: React.FC = () => {
  const controls = useAnimation();
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("recommendations");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [activeJobIndex, setActiveJobIndex] = useState<number>(0);

  // Particles animation setup
  useEffect(() => {
    const createParticles = () => {
      if (!particleContainerRef.current) return;

      const container = particleContainerRef.current;
      container.innerHTML = "";

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      const particleCount = Math.floor((width * height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = styles.particle;

        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        // Random size (small particles)
        const size = Math.random() * 4 + 1;

        // Random color variations (blues and purples)
        const hue = Math.random() > 0.7 ? 240 : 270; // blue or purple
        const lightness = 50 + Math.random() * 20;
        const alpha = 0.1 + Math.random() * 0.4;

        // Set styles
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsla(${hue}, 70%, ${lightness}%, ${alpha})`;

        // Random animation duration and delay
        const duration = 15 + Math.random() * 45;
        const delay = Math.random() * 5;

        particle.style.animation = `${styles.float} ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(particle);
      }

      // Create connection lines
      const connectionCount = Math.floor(particleCount / 3);

      for (let i = 0; i < connectionCount; i++) {
        const line = document.createElement("div");
        line.className = styles.connection;

        // Random position and size
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const width = 50 + Math.random() * 100;

        // Random rotation
        const rotation = Math.random() * 360;

        // Random animation duration and delay
        const duration = 20 + Math.random() * 30;
        const delay = Math.random() * 5;

        line.style.left = `${left}%`;
        line.style.top = `${top}%`;
        line.style.width = `${width}px`;
        line.style.transform = `rotate(${rotation}deg)`;
        line.style.animation = `${styles.pulse} ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(line);
      }
    };

    createParticles();

    // Recreate particles on window resize
    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      setIsAnalyzing(true);

      // Simulate AI analysis process
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnimationComplete(true);
      }, 3500);
    };

    sequence();
  }, [controls]);

  // Sample job matches
  const jobMatches: JobMatch[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      location: "Bangalore, India",
      matchScore: 95,
      salary: "₹25-32 LPA",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "GrowthPath Solutions",
      location: "Delhi NCR (Remote)",
      matchScore: 92,
      salary: "₹28-35 LPA",
      skills: ["Product Strategy", "Agile", "UX Research", "Data Analysis"],
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "ML Engineer",
      company: "DataSphere Analytics",
      location: "Mumbai, India",
      matchScore: 89,
      salary: "₹22-30 LPA",
      skills: ["Python", "TensorFlow", "Computer Vision", "NLP"],
      posted: "1 week ago",
    },
  ];

  // Statistics
  const statistics = [
    {
      title: "Success Rate",
      value: "78%",
      icon: TrendingUp,
      description: "Of our users find jobs within 90 days",
    },
    {
      title: "AI Matches",
      value: "500+",
      icon: Cpu,
      description: "New job matches processed daily",
    },
    {
      title: "Interview Rate",
      value: "3.4×",
      icon: Users,
      description: "Higher than traditional applications",
    },
    {
      title: "Time Saved",
      value: "85%",
      icon: Clock,
      description: "Less time spent on job hunting",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 min-h-screen">
      {/* Particle animation container */}
      <div
        ref={particleContainerRef}
        className={styles.particleContainer}
      ></div>

      {/* Glowing orb accent */}
      <div className={styles.glowingOrb}></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="w-full lg:w-1/2"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-4 py-1 inline-flex items-center gap-2 mb-6"
            >
              <Cpu className="w-4 h-4 text-violet-400" />
              <span className="text-violet-300 font-medium text-sm">
                AI-Powered Job Matching
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Struggling to Find the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                Perfect Job?
              </span>{" "}
              Our AI is Your Career Companion
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-300 text-lg mb-8"
            >
              Stop applying to dozens of jobs with no response. Our advanced AI
              analyzes your skills, experience, and preferences to match you
              with positions where you'll truly excel.
            </motion.p>

            {/* Feature boxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-violet-500/40 transition-colors">
                <div className="rounded-full w-10 h-10 bg-violet-500/20 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">
                  Smart Job Matching
                </h3>
                <p className="text-gray-400 text-sm">
                  Our AI finds positions matching your unique combination of
                  skills and experience
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-blue-500/40 transition-colors">
                <div className="rounded-full w-10 h-10 bg-blue-500/20 flex items-center justify-center mb-3">
                  <PieChart className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">
                  Application Analysis
                </h3>
                <p className="text-gray-400 text-sm">
                  Get insights on why your applications may be getting
                  overlooked
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-blue-500/40 transition-colors">
                <div className="rounded-full w-10 h-10 bg-blue-500/20 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">
                  Interview Preparation
                </h3>
                <p className="text-gray-400 text-sm">
                  AI-powered interview coaching with company-specific question
                  predictions
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-violet-500/40 transition-colors">
                <div className="rounded-full w-10 h-10 bg-violet-500/20 flex items-center justify-center mb-3">
                  <Filter className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">
                  Salary Negotiation
                </h3>
                <p className="text-gray-400 text-sm">
                  Get data-driven insights to maximize your compensation package
                </p>
              </div>
            </motion.div>

            {/* Statistics row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            >
              {statistics.map((stat, index) => (
                <div key={stat.title} className="text-center">
                  <stat.icon className="mx-auto h-6 w-6 text-blue-400 mb-2" />
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 flex items-center gap-2 group"
              >
                <span>Start Your Job Search</span>
                <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Interactive AI Job Matcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/10">
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        AI Career Matchmaker
                      </h3>
                      <p className="text-xs text-blue-400">
                        Powered by advanced matching algorithms
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white">
                      <Filter className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <BarChart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Search input */}
                <div className="mt-4 relative">
                  <Input
                    type="text"
                    placeholder="Enter job title, skills, or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-800 border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                {/* Tabs */}
                <div className="mt-4 flex border-b border-gray-800">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "recommendations"
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("recommendations")}
                  >
                    Recommendations
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "applied"
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("applied")}
                  >
                    Applied
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "saved"
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("saved")}
                  >
                    Saved
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="p-4 h-[420px] overflow-hidden">
                {/* Loading state */}
                {isAnalyzing && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className={styles.analysisLoader}>
                      <div className={styles.analysisInner}></div>
                    </div>
                    <p className="text-white mt-6 mb-2">
                      Analyzing your profile...
                    </p>
                    <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className={styles.loadingBar}></div>
                    </div>
                    <div className="mt-4 text-xs text-gray-400 max-w-sm text-center">
                      Our AI is scanning thousands of job postings to find your
                      perfect match
                    </div>
                  </div>
                )}

                {/* Results */}
                {!isAnalyzing && animationComplete && (
                  <>
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-white">
                        <span className="text-blue-400 font-medium">
                          87 matches
                        </span>{" "}
                        found based on your profile
                      </p>
                      <p className="text-xs text-gray-400">
                        Updated 2 hours ago
                      </p>
                    </div>

                    {/* Job Cards */}
                    <div className="space-y-4">
                      <AnimatePresence>
                        {jobMatches.map((job, index) => (
                          <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`bg-gray-800/60 border ${
                              index === activeJobIndex
                                ? "border-blue-500/50"
                                : "border-gray-800"
                            } rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-blue-500/50`}
                            onClick={() => setActiveJobIndex(index)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-white font-medium">
                                  {job.title}
                                </h4>
                                <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                                  <Building className="w-3 h-3" />
                                  <span>{job.company}</span>
                                  <span className="mx-1">•</span>
                                  <MapPin className="w-3 h-3" />
                                  <span>{job.location}</span>
                                </div>
                              </div>
                              <div
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  job.matchScore >= 90
                                    ? "bg-green-500/20 text-green-400"
                                    : job.matchScore >= 80
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-amber-500/20 text-amber-400"
                                }`}
                              >
                                {job.matchScore}% Match
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                              {job.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-700">
                              <span className="text-gray-400 text-xs">
                                {job.posted} • {job.salary}
                              </span>
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 h-auto"
                              >
                                Apply
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              {!isAnalyzing && animationComplete && (
                <div className="p-4 border-t border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400">
                      Profile Strength:{" "}
                      <span className="text-blue-400">87%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Linkedin className="w-4 h-4" />
                      <span>Import from LinkedIn</span>
                    </button>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 h-auto flex items-center gap-1"
                    >
                      <span>View All Matches</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute -inset-1 rounded-2xl opacity-30 blur-xl bg-gradient-to-r from-violet-600 via-transparent to-blue-600"></div>
              </div>
            </div>

            {/* Why our AI works */}
            <div className="mt-6 px-4">
              <p className="text-gray-300 text-sm font-medium mb-3">
                Why our AI finds better jobs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">
                    Analyzes beyond keywords to match your actual capabilities
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">
                    Considers company culture and work environment compatibility
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm">
                    Tailors applications to specific ATS requirements
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <p className="text-gray-400 text-sm mb-2">Continue exploring</p>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default JobSearchAI;
