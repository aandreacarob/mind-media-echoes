export const Footer = () => {
  return (
    <footer className="py-12 constellation-pattern border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Cerebro & Medios: una historia compartida
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Material educativo basado en investigación académica
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Para consultas: <a href="mailto:contacto@cerebroymedios.edu" className="text-primary hover:underline">
              contacto@cerebroymedios.edu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
