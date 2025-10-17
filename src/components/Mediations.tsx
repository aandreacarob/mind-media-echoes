import { Card } from "@/components/ui/card";
import communicationImage from "@/assets/mediation-communication.jpg";
import knowledgeImage from "@/assets/mediation-knowledge.jpg";

interface MediationPair {
  before: string;
  after: string;
  image?: string;
  insight: string;
}

const mediationPairs: MediationPair[] = [
  {
    before: "Carta manuscrita",
    after: "Mensaje instantáneo",
    image: communicationImage,
    insight: "Cambio en intimidad, ritmo y reflexión en la comunicación personal"
  },
  {
    before: "Enciclopedia en papel",
    after: "Búsqueda web",
    image: knowledgeImage,
    insight: "De la autoridad centralizada a la información distribuida y verificable"
  },
  {
    before: "Programa TV largo",
    after: "Clips de 1 minuto",
    insight: "Atención profunda y sostenida vs. consumo fragmentado y rápido"
  },
  {
    before: "Aprender haciendo",
    after: "Inspiración sin práctica",
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
              {pair.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pair.image} 
                    alt={`${pair.before} vs ${pair.after}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 gap-4">
                  <div className="flex-1 text-center">
                    <span className="text-sm font-semibold text-muted-foreground">Antes</span>
                    <p className="font-display font-semibold text-lg mt-1">{pair.before}</p>
                  </div>
                  <div className="text-2xl text-primary">→</div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-semibold text-muted-foreground">Ahora</span>
                    <p className="font-display font-semibold text-lg mt-1">{pair.after}</p>
                  </div>
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
