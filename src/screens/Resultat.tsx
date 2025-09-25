import { useNavigate } from "react-router-dom";
import { Card } from "@/components/base/Card";
import { Button } from "@/components/base/Button";
import { CheckCircle, RotateCcw, Home } from "lucide-react";

export function Resultat() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-success" size={64} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Resultat (demo)
          </h1>
          <p className="text-muted-foreground">
            Du har fullført øvingsøkten
          </p>
        </div>

        {/* Result Summary Card */}
        <Card className="p-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              3/3
            </div>
            <p className="text-muted-foreground mb-4">
              oppgaver besvart
            </p>
            <p className="text-sm text-muted-dark">
              Dette er en demo - detaljert analyse og poeng vil vises når appen er fullstendig implementert.
            </p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate('/')}
            className="w-full"
            size="lg"
          >
            <Home size={20} className="mr-2" />
            Til oversikt
          </Button>
          
          <Button
            onClick={() => navigate('/tema/prosent')}
            variant="outline"
            className="w-full"
            size="lg"
          >
            <RotateCcw size={20} className="mr-2" />
            Ny økt
          </Button>
        </div>

        {/* Info Card */}
        <Card variant="muted" className="p-4 mt-6">
          <p className="text-sm text-muted-foreground text-center">
            Resultater og progresjonssporing kommer i neste versjon av appen.
          </p>
        </Card>
      </div>
    </div>
  );
}