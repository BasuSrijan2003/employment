import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Dashboard from "@/components/dashboard";
import JobSearch from "@/components/JobSearchAI";
import AIResumeBuilder from "@/components/AIResumeBuilder";

// import Dashboard from "@/components/dashboard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <Dashboard setShowDashboard={undefined} studentSkillsData={undefined} /> */}
      <Features />
      <JobSearch />
      <AIResumeBuilder />
      {/* <Templates /> */}
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
