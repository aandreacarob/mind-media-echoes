import { Card } from "@/components/ui/card";
import communicationImage from "@/assets/mediation-communication.jpg";
import knowledgeImage from "@/assets/mediation-knowledge.jpg";
import tvLongImage from "@/assets/mediation-tv-long.jpg";
import clipsShortImage from "@/assets/mediation-clips-short.jpg";
import learningDoingImage from "@/assets/mediation-learning-doing.jpg";
import inspirationPassiveImage from "@/assets/mediation-inspiration-passive.jpg";

interface MediationPair {
  before: string;
  after: string;
  beforeImage?: string;
  afterImage?: string;
  insight: string;
}

const mediationPairs: MediationPair[] = [
  {
    before: "Carta manuscrita",
    after: "Mensaje instantáneo",
    beforeImage: communicationImage,
    afterImage: communicationImage,
    insight: "Cambio en intimidad, ritmo y reflexión en la comunicación personal"
  },
  {
    before: "Enciclopedia en papel",
    after: "Búsqueda web",
    beforeImage: knowledgeImage,
    afterImage: knowledgeImage,
    insight: "De la autoridad centralizada a la información distribuida y verificable"
  },
  {
    before: "Programa TV largo",
    after: "Clips de 1 minuto",
    beforeImage: tvLongImage,
    afterImage: clipsShortImage,
    insight: "Atención profunda y sostenida vs. consumo fragmentado y rápido"
  },
  {
    before: "Aprender haciendo",
    after: "Inspiración sin práctica",
    beforeImage: learningDoingImage,
    afterImage: inspirationPassiveImage,
    insight: "Conocimiento procedimental vs. contemplación pasiva"
  }
];

export const Mediations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background constellation-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-gradient">Mediaciones cotidianas</h2>
          <p className="text-lg text-muted-foreground">
            Cómo han cambiado nuestras prácticas mediáticas y su impacto cognitivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mediationPairs.map((pair, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 card-frosted"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <span className="text-sm font-semibold text-muted-foreground">Antes</span>
                    {pair.beforeImage && (
                      <div className="relative h-32 overflow-hidden rounded-lg mt-2 mb-2">
                        <img 
                          src={pair.beforeImage} 
                          alt={pair.before}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className="font-display font-semibold text-lg">{pair.before}</p>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm font-semibold text-muted-foreground">Ahora</span>
                    {pair.afterImage && (
                      <div className="relative h-32 overflow-hidden rounded-lg mt-2 mb-2">
                        <img 
                          src={pair.afterImage} 
                          alt={pair.after}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className="font-display font-semibold text-lg">{pair.after}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  <div className="text-2xl text-primary">→</div>
                </div>
                
                <p className="text-sm text-muted-foreground border-t pt-4 border-border/50">
                  {pair.insight}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
