import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import VisionSection from "../../components//pages/home/VisionSection";
import OfferingsSection from "../../components//pages/home/OfferingsSection";
import HeroSection from "../../components/pages/home/HeroSection";
import OmegaSection from "../../components/pages/home/OmegaSection";
// import FirstPrinciplesSection from "../../components/pages/home/FirstPrinciplesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Omega Section */}
      <OmegaSection />

      {/* First Principles Section */}
      {/* <FirstPrinciplesSection /> */}

      {/* Vision Section */}
      <VisionSection />

      {/* Offerings Section */}
      <OfferingsSection />
      <Footer />
    </div>
  );
}
