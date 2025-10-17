import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { BrainMap } from "@/components/BrainMap";
import { Mediations } from "@/components/Mediations";
import { Resources } from "@/components/Resources";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <BrainMap />
      <Mediations />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
