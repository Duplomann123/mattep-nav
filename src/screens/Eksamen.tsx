import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/base/Card";
import { Button } from "@/components/base/Button";
import { ProgressBar } from "@/components/base/ProgressBar";
import { GraduationCap, Clock, FileText } from "lucide-react";

type ExamPart = "Del 1" | "Del 2" | "Begge";

export function Eksamen() {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState<ExamPart>("Del 1");

  const examParts: ExamPart[] = ["Del 1", "Del 2", "Begge"];

  return (
    <div className="container mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-primary" size={32} />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Eksamen
            </h1>
            <p className="text-muted-foreground">
              Øv deg til eksamen og sjekk din progresjon
            </p>
          </div>
        </div>

        {/* Expected Grade Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Antatt karakter</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="flex-1">
              <ProgressBar progress={70} variant="primary" size="lg" />
              <p className="text-sm text-muted-foreground mt-1">
                Basert på dine øvelser og resultater
              </p>
            </div>
          </div>
        </Card>

        {/* Part Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Del 1 - Uten hjelpemidler</h3>
            <ProgressBar progress={65} variant="primary" showLabel className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Grunnleggende ferdigheter
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Del 2 - Med hjelpemidler</h3>
            <ProgressBar progress={75} variant="success" showLabel className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Problemløsning og modellering
            </p>
          </Card>
        </div>

        {/* Exam Light Card */}
        <Card variant="primary" className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-primary-foreground mb-2">
                Eksamen light
              </h2>
              <p className="text-primary-foreground/80 mb-3">
                Rask gjennomgang av eksamensstoff - 15 minutter
              </p>
            </div>
            <Button 
              variant="secondary"
              onClick={() => navigate('/quiz')}
              className="bg-white/20 text-white hover:bg-white/30"
            >
              <Clock size={16} className="mr-2" />
              Start
            </Button>
          </div>
        </Card>

        {/* Mini Exam Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Mini-prøve</h2>
          <p className="text-muted-foreground mb-4">
            Velg hvilken del du vil øve på
          </p>
          
          {/* Part Selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            {examParts.map((part) => (
              <Button
                key={part}
                variant={selectedPart === part ? "primary" : "outline"}
                onClick={() => setSelectedPart(part)}
                size="sm"
              >
                {part}
              </Button>
            ))}
          </div>

          <Button onClick={() => navigate('/quiz')}>
            <FileText size={16} className="mr-2" />
            Start mini-prøve ({selectedPart})
          </Button>
        </Card>

        {/* History Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Historikk</h2>
          <div className="text-muted-foreground text-center py-8">
            <p>Ingen gjennomførte prøver ennå</p>
            <p className="text-sm mt-1">
              Resultater fra dine prøver vil vises her
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}