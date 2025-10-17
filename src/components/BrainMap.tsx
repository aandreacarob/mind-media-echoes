import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Activity, Zap, Ear } from "lucide-react";
import cerebellumImg from "@/assets/brain-cerebellum.jpg";
import occipitalImg from "@/assets/brain-occipital.jpg";
import brainstemImg from "@/assets/brain-brainstem.jpg";
import frontalImg from "@/assets/brain-frontal.jpg";
import temporalImg from "@/assets/brain-temporal.jpg";

interface BrainArea {
  icon: React.ReactNode;
  title: string;
  helps: string[];
  hinders: string[];
  image: string;
}

const brainAreas: BrainArea[] = [
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Cerebelo (hábitos, coordinación)",
    helps: [
      "Prácticas interactivas con repetición",
      "Videojuegos/simuladores",
      "Feedback háptico"
    ],
    hinders: [
      "Consumo pasivo (solo ver/leer)",
      "Sin práctica física para habilidades motrices"
    ],
    image: cerebellumImg
  },
  {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: "Lóbulo occipital (visual)",
    helps: [
      "Composiciones limpias",
      "Jerarquía visual clara",
      "Infografías bien diseñadas"
    ],
    hinders: [
      "Sobrecarga visual",
      "Muros de texto densos",
      "Cortes caóticos en video"
    ],
    image: occipitalImg
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Bulbo raquídeo / sistema de alerta",
    helps: [
      "Notificaciones estratégicas",
      "Sonidos/banners que capturan alerta",
      "Variación en estímulos"
    ],
    hinders: [
      "Notificaciones constantes → fatiga",
      "Contenidos monótonos → somnolencia"
    ],
    image: brainstemImg
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Lóbulo frontal (funciones ejecutivas)",
    helps: [
      "Lecturas largas y profundas",
      "Juegos de estrategia",
      "Rompecabezas (atención sostenida)"
    ],
    hinders: [
      "Feeds de scroll infinito",
      "Fragmentación constante",
      "Contenido que fomenta impulsividad"
    ],
    image: frontalImg
  },
  {
    icon: <Ear className="w-8 h-8 text-primary" />,
    title: "Lóbulo temporal (audición/lenguaje/memoria)",
    helps: [
      "Podcasts/audiolibros",
      "Narrativas claras",
      "Combinar texto + audio"
    ],
    hinders: [
      "Audio de baja calidad",
      "Ruido de fondo excesivo",
      "Jerga técnica innecesaria"
    ],
    image: temporalImg
  }
];

export const BrainMap = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-gradient">Mapa: Cerebro ↔ Formatos de medios</h2>
          <p className="text-lg text-muted-foreground">
            Cómo diferentes formatos mediáticos interactúan con áreas específicas del cerebro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {brainAreas.map((area, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 card-frosted overflow-hidden"
            >
              <div className="relative h-48 mb-4 -mx-6 -mt-6">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {area.icon}
                </div>
                <h3 className="text-xl font-display font-semibold flex-1">
                  {area.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Badge className="mb-3 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                    Lo que ayuda
                  </Badge>
                  <ul className="space-y-2">
                    {area.helps.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Badge className="mb-3 bg-accent/20 text-accent-foreground hover:bg-accent/30">
                    Lo que complica
                  </Badge>
                  <ul className="space-y-2">
                    {area.hinders.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
