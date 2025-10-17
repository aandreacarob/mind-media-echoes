import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-brain-constellation.jpg";

export const Hero = () => {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center constellation-pattern overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-4xl">
        <h1 className="mb-6 text-gradient">
          Cerebro & Medios: una historia compartida
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Cómo los medios cambiaron la manera de mirar el cerebro — y cómo esa mirada transformó lo que aprendemos y comunicamos.
        </p>
        <Button 
          onClick={scrollToTimeline}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explorar la línea del tiempo
        </Button>
      </div>
    </section>
  );
};
