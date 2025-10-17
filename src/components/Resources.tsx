import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";
import { useState } from "react";

interface Reading {
  author: string;
  title: string;
  why: string;
  expanded?: string;
}

const readings: Reading[] = [
  {
    author: "Walter Ong",
    title: "Oralidad y escritura",
    why: "Explora cómo la escritura transformó la conciencia humana",
    expanded: "Fundamental para entender la transición de culturas orales a escritas y su impacto en el pensamiento."
  },
  {
    author: "Elizabeth Eisenstein",
    title: "La imprenta como agente de cambio",
    why: "Analiza el impacto revolucionario de la imprenta en la ciencia",
    expanded: "Documenta cómo la estandarización visual cambió la práctica científica."
  },
  {
    author: "Santiago Ramón y Cajal",
    title: "Textura del sistema nervioso",
    why: "Obra maestra de la neuroanatomía con ilustraciones decisivas",
    expanded: "Sus dibujos fueron argumentos visuales que transformaron nuestra comprensión del cerebro."
  },
  {
    author: "Marshall McLuhan",
    title: "Comprender los medios de comunicación",
    why: "El medio es el mensaje: cómo los medios moldean percepción",
    expanded: "Teoría fundamental sobre cómo los medios afectan la sociedad y la cognición."
  },
  {
    author: "Donald Hebb",
    title: "The Organization of Behavior",
    why: "Plasticidad sináptica: 'las células que se activan juntas, se conectan'",
    expanded: "Base teórica de la neuroplasticidad y el aprendizaje."
  },
  {
    author: "Brenda Milner & H.M.",
    title: "Estudios sobre memoria",
    why: "Caso paradigmático que reveló sistemas de memoria diferenciados",
    expanded: "Mostró la disociación entre memoria declarativa y procedimental."
  },
  {
    author: "Stanislas Dehaene",
    title: "Reading in the Brain",
    why: "Cómo el cerebro se recicla para leer: plasticidad cultural",
    expanded: "Explica la neurociencia de la lectura y su base evolutiva."
  },
  {
    author: "Maryanne Wolf",
    title: "Proust and the Squid",
    why: "Historia de la lectura y preocupaciones sobre la era digital",
    expanded: "Reflexión sobre cómo los medios digitales afectan la lectura profunda."
  },
  {
    author: "Manuel Castells",
    title: "La era de la información",
    why: "Sociedad red y transformación de estructuras cognitivas",
    expanded: "Análisis sociológico del impacto de las redes digitales."
  },
  {
    author: "Henry Jenkins",
    title: "Convergence Culture",
    why: "Cultura participativa y nuevas formas de aprendizaje mediático",
    expanded: "Estudia cómo la convergencia de medios cambia la cultura y el aprendizaje."
  }
];

export const Resources = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gradient">Lecturas esenciales</h2>
            <p className="text-lg text-muted-foreground">
              Para profundizar en la intersección entre cerebro, medios y aprendizaje
            </p>
          </div>

          <Card className="p-8 mb-12 card-frosted">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <ol className="space-y-4 flex-1 list-decimal list-inside">
                {readings.map((reading, index) => (
                  <li 
                    key={index}
                    className="cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors"
                    onClick={() => setExpandedId(expandedId === index ? null : index)}
                  >
                    <span className="font-semibold">{reading.author}</span>
                    <span className="text-muted-foreground"> — </span>
                    <span className="italic">{reading.title}</span>
                    <p className="text-sm text-muted-foreground mt-1 ml-6">
                      {reading.why}
                    </p>
                    {expandedId === index && reading.expanded && (
                      <p className="text-sm mt-2 ml-6 text-foreground/80 border-l-2 border-primary pl-3">
                        {reading.expanded}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-display font-semibold mb-6">Descargas y créditos</h3>
            <Card className="p-8 card-frosted max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <Download className="w-12 h-12 text-primary" />
                <div>
                  <h4 className="font-display font-semibold text-xl mb-2">
                    Cartografía Personal (PDF)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ensayo completo sobre la mediación entre cerebro y medios
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 border-t pt-4 w-full">
                  Este material se basa en investigación académica sobre la historia de la neurociencia 
                  y su relación con los medios de comunicación. Para uso educativo y de divulgación.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
