import { useNavigate } from "react-router-dom";
import { Card } from "@/components/base/Card";
import { Button } from "@/components/base/Button";
import { ProgressBar } from "@/components/base/ProgressBar";
import { TrendingUp, Play, AlertTriangle } from "lucide-react";

export function Oversikt() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Velkommen til Matematikk 2P
          </h1>
          <p className="text-muted-foreground">
            Din personlige læringsassistent for matematikk
          </p>
        </div>

        {/* Progress Card */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-primary" size={24} />
            <h2 className="text-lg font-semibold">Din progresjon</h2>
          </div>
          <ProgressBar progress={45} showLabel className="mb-2" />
          <p className="text-sm text-muted-foreground">
            45% fullført av alle temaer
          </p>
        </Card>

        {/* Recommendation Card */}
        <Card variant="primary" className="p-6">
          <h2 className="text-lg font-semibold text-primary-foreground mb-3">
            Anbefaling for deg
          </h2>
          <p className="text-primary-foreground/80 mb-4">
            Basert på din progresjon anbefaler vi å fokusere på prosent og algebra.
          </p>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/quiz')}
            className="bg-white/20 text-white hover:bg-white/30"
          >
            <Play size={16} className="mr-2" />
            Start øvingsøkt
          </Button>
        </Card>

        {/* Quick Quiz Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Ta en kort quiz</h2>
              <p className="text-muted-foreground">3 spørsmål - 2 minutter</p>
            </div>
            <Button onClick={() => navigate('/quiz')}>
              Start quiz
            </Button>
          </div>
        </Card>

        {/* Common Mistakes Card */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-warning" size={24} />
            <h2 className="text-lg font-semibold">Typiske feil</h2>
          </div>
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground">
              <p>• Glemmer å sette opp riktig ligninger</p>
              <p>• Regner feil med negative tall</p>
              <p>• Blander sammen prosent og prosentpoeng</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}