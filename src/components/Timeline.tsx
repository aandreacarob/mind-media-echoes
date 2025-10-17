import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import aristotleImg from "@/assets/timeline-aristotle.jpg";
import galenImg from "@/assets/timeline-galen.jpg";
import vesaliusImg from "@/assets/timeline-vesalius.jpg";
import willisImg from "@/assets/timeline-willis.jpg";
import brocaWernickeImg from "@/assets/timeline-broca-wernicke.jpg";
import golgiCajalImg from "@/assets/timeline-golgi-cajal.jpg";
import pavlovImg from "@/assets/timeline-pavlov-penfield-hebb.jpg";
import sperryImg from "@/assets/timeline-sperry-gazzaniga.jpg";
import mirrorNeuronsImg from "@/assets/timeline-mirror-neurons.jpg";
import brainInitiativeImg from "@/assets/timeline-brain-initiative.jpg";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  summary: string;
  details: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "Antigüedad",
    title: "Aristóteles - Cardiocentrismo",
    summary: "El corazón como sede del pensamiento; el cerebro enfría la sangre.",
    details: "Propuso que el corazón —no el cerebro— era la sede del pensamiento y la sensación. Creyó que el cerebro enfriaba la sangre. Su influencia perduró en un mundo de tradición oral y manuscrito, donde la autoridad y la memoria guiaban el conocimiento.",
    image: aristotleImg
  },
  {
    id: 2,
    date: "S. II",
    title: "Galeno - Teoría Ventricular",
    summary: "Espíritus animales en ventrículos; dominio milenario por manuscrito.",
    details: "Ubicó facultades mentales en los ventrículos; 'espíritus animales' viajaban por nervios huecos. La copia manuscrita preservó su modelo por más de un milenio.",
    image: galenImg
  },
  {
    id: 3,
    date: "1543",
    title: "Vesalio y la Imprenta",
    summary: "Disecciones humanas + libro ilustrado estandarizan la evidencia visual.",
    details: "Disecciones humanas + libro ilustrado ('Fabrica') corrigieron errores de Galeno y convirtieron la imagen impresa en nueva autoridad científica.",
    image: vesaliusImg
  },
  {
    id: 4,
    date: "1664",
    title: "Thomas Willis - Neurología",
    summary: "Consolida 'neurología', correlación clínica-anatomía.",
    details: "Acuñó 'neurología'; correlación clínica–anatomía, nomenclatura duradera; la monografía impresa consolidó la disciplina.",
    image: willisImg
  },
  {
    id: 5,
    date: "1861/1874",
    title: "Broca & Wernicke",
    summary: "Localización del lenguaje; revistas científicas aceleran debate.",
    details: "Casos de afasia revelan áreas específicas del lenguaje; las revistas permiten debate rápido y acumulativo.",
    image: brocaWernickeImg
  },
  {
    id: 6,
    date: "1873-1906",
    title: "Golgi vs. Cajal",
    summary: "Retícula vs. neurona; dibujos de Cajal como argumento visual decisivo.",
    details: "De la 'red continua' a la 'neurona' discreta. Los dibujos de Cajal fueron argumentos visuales decisivos; ganó el Nobel junto a Golgi.",
    image: golgiCajalImg
  },
  {
    id: 7,
    date: "1904-1950s",
    title: "Pavlov / Penfield / Hebb",
    summary: "Aprendizaje asociativo; homúnculo cortical; plasticidad sináptica.",
    details: "Del condicionamiento clásico al homúnculo cortical y la plasticidad sináptica ('cells that fire together, wire together').",
    image: pavlovImg
  },
  {
    id: 8,
    date: "1960s",
    title: "Sperry & Gazzaniga - Lateralización",
    summary: "Izquierda lógica / derecha creativa moldeado por medios masivos.",
    details: "Lateralización compleja convertida en dicotomía popular por medios masivos (izquierdo lógico / derecho creativo).",
    image: sperryImg
  },
  {
    id: 9,
    date: "1990s-hoy",
    title: "Neuronas Espejo / Conectoma",
    summary: "Empatía, redes cerebrales y diálogo científico en web abierta.",
    details: "Neuronas espejo, conectoma y neurociencia social. Empatía, redes cerebrales y diálogo científico en la web abierta.",
    image: mirrorNeuronsImg
  },
  {
    id: 10,
    date: "2013-hoy",
    title: "BRAIN & Neuroderechos",
    summary: "Ciencia a gran escala + debate ético público constante.",
    details: "Iniciativas a gran escala y neuroderechos: ciencia en diálogo público continuo.",
    image: brainInitiativeImg
  }
];

export const Timeline = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-gradient">Línea del tiempo: Cerebro × Medios</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div 
                key={item.id}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 && (
                    <Card 
                      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 card-frosted"
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-primary">{item.date}</span>
                          <h3 className="text-xl font-display font-semibold mt-1 mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.summary}</p>
                          {expandedId === item.id && (
                            <div className="mt-4 border-t pt-4 border-border/50 space-y-4">
                              <div className="flex gap-4 items-start">
                                <p className="text-sm leading-relaxed flex-1">
                                  {item.details}
                                </p>
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-300 ${
                            expandedId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </Card>
                  )}
                </div>

                {/* Center dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                </div>

                <div className="flex-1 md:text-left">
                  {index % 2 !== 0 && (
                    <Card 
                      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 card-frosted"
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-primary">{item.date}</span>
                          <h3 className="text-xl font-display font-semibold mt-1 mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.summary}</p>
                          {expandedId === item.id && (
                            <div className="mt-4 border-t pt-4 border-border/50 space-y-4">
                              <div className="flex gap-4 items-start">
                                <p className="text-sm leading-relaxed flex-1">
                                  {item.details}
                                </p>
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-300 ${
                            expandedId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
