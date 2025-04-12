import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

// import Dashboard from "@/components/dashboard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <Dashboard /> */}
      <Hero />
      <Features />
      <Templates />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
