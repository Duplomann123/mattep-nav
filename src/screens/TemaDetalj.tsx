import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/base/Card";
import { Button } from "@/components/base/Button";
import { ProgressBar } from "@/components/base/ProgressBar";
import { getTopicBySlug } from "@/data/topics";
import { useState } from "react";
import { ArrowLeft, TrendingUp, AlertTriangle } from "lucide-react";

type DifficultyLevel = "Enkel" | "Middels" | "Avansert";

export function TemaDetalj() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>("Middels");

  const topic = slug ? getTopicBySlug(slug) : null;

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Tema ikke funnet
          </h1>
          <Button onClick={() => navigate('/min-laering')}>
            Tilbake til Min læring
          </Button>
        </div>
      </div>
    );
  }

  const getLevelProgress = (level: DifficultyLevel) => {
    switch (level) {
      case "Enkel": return 30;
      case "Middels": return 60;
      case "Avansert": return 85;
      default: return 0;
    }
  };

  const levels: DifficultyLevel[] = ["Enkel", "Middels", "Avansert"];

  return (
    <div className="container mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="p-2"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {topic.title}
            </h1>
            <p className="text-muted-foreground">
              Velg vanskeighetsgrad og start øvelse
            </p>
          </div>
        </div>

        {/* Start Session Card */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Start en økt</h2>
          
          {/* Level Selection */}
          <div className="flex flex-wrap gap-2 mb-4">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "primary" : "outline"}
                onClick={() => setSelectedLevel(level)}
                size="sm"
              >
                {level}
              </Button>
            ))}
          </div>

          {/* Progress Bar for Selected Level */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Progresjon - {selectedLevel}
              </span>
            </div>
            <ProgressBar 
              progress={getLevelProgress(selectedLevel)} 
              showLabel 
              variant="success"
            />
          </div>

          {/* Start Button */}
          <Button 
            onClick={() => navigate('/quiz')}
            className="w-full md:w-auto"
          >
            Start øvingsøkt
          </Button>
        </Card>

        {/* Analysis Card */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-primary" size={24} />
            <h2 className="text-lg font-semibold">Analyse</h2>
          </div>
          <p className="text-muted-foreground">
            Detaljert analyse av din læring i dette temaet vil vises her etter du har fullført noen øvelser.
          </p>
        </Card>

        {/* Common Mistakes Card */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-warning" size={24} />
            <h2 className="text-lg font-semibold">Typiske feil</h2>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p>• Vanlige feilsteg i dette temaet vil vises her</p>
            <p>• Tips og råd basert på din læring</p>
            <p>• Personaliserte anbefalinger</p>
          </div>
        </Card>
      </div>
    </div>
  );
}