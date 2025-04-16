import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import srijanPhoto from "../assets/images/how-it-works/me photo 500kb.jpg";
import souvikPhoto from "../assets/images/how-it-works/souvik.jpg";
import shubhaPhoto from "../assets/images/how-it-works/shubha.jpg";
import simpliaPhoto from "../assets/images/how-it-works/simplia.png";
import LTPhoto from "../assets/images/how-it-works/lti.png";
// Sample testimonial data - replace with your actual data
const testimonials = [
  {
    id: 1,
    name: "Shubhapriya Ghosh",
    avatar: shubhaPhoto,
    content:
      "The IIT-IIM Resume Builder transformed my job search. The AI suggestions perfectly highlighted my achievements, and I received 3 interview calls within a week!",
    role: "IIM Kharagpur, Product Manager at Simplia",
    company: "Google",
    companyLogo: simpliaPhoto,
  },
  {
    id: 2,
    name: "Srijan Basu",
    avatar: srijanPhoto,
    content:
      "As an IIT graduate, I had strong technical skills but struggled to present them effectively. This platform helped me create a resume that truly represented my abilities.",
    role: "Techno India University, Software Engineer at LTImndtree",
    company: "LTImindtree",
    companyLogo: LTPhoto,
  },
  {
    id: 3,
    name: "Souvik Ghosh",
    avatar: souvikPhoto,
    content:
      "The ATS optimization feature ensured my resume got past the initial screening. The personalized feedback was invaluable during my job search.",
    role: "IIM Patna, Developer at simplia",
    company: "Simplia",
    companyLogo: simpliaPhoto,
  },
  {
    id: 4,
    name: "Anuj",
    avatar: "/avatars/arjun-kapoor.jpg",
    content:
      "The templates are not just visually appealing but strategically designed for different industries. Perfect for showcasing both technical and leadership skills!",
    role: "IIM Ranchi, Lead of Marketing",
    company: "Simplia",
    companyLogo: simpliaPhoto,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Handle image error by providing fallback avatar
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = "/avatars/default-avatar.jpg";
  };

  const nextTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from students and professionals who secured their dream
            positions using our resume templates.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative min-h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

            {/* Main content */}
            <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row items-center">
              {/* Avatar section */}
              <motion.div
                key={`avatar-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center"
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-2">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial content */}
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-2/3 md:pl-10"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </p>

                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden mr-3">
                      <img
                        src={testimonials[activeIndex].companyLogo}
                        alt={testimonials[activeIndex].company}
                        className="max-w-full max-h-full p-1"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-gray-800 font-medium">
                      {testimonials[activeIndex].company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-6 gap-3">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50 active:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-50 active:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-gray-700 text-lg">
            Our templates and guidance have helped thousands of IIT and IIM
            students and alumni land positions at top companies globally.
          </p>

          {/* Company logos */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            {["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"].map(
              (company) => (
                <div
                  key={company}
                  className="grayscale hover:grayscale-0 transition-all duration-300 h-12 flex items-center"
                >
                  <img
                    src={`/logos/${company
                      .toLowerCase()
                      .replace(" ", "-")}.png`}
                    alt={company}
                    className="max-h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.parentElement!.textContent = company;
                    }}
                  />
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
