import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/base/Card";
import { Button } from "@/components/base/Button";
import { DEMO_TASKS } from "@/data/demoTasks";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Quiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentTask = DEMO_TASKS[currentIndex];
  const isLastTask = currentIndex === DEMO_TASKS.length - 1;
  const taskNumber = currentIndex + 1;
  const totalTasks = DEMO_TASKS.length;

  const handleAnswerSelect = (choice: string) => {
    setSelectedAnswer(choice);
  };

  const handleNext = () => {
    if (isLastTask) {
      navigate('/resultat');
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-sm text-muted-foreground">
                Oppgave {taskNumber} av {totalTasks}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-info-light text-info text-xs font-medium rounded">
                  DEL 1
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={handleCancel}
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={20} className="mr-1" />
            Avbryt økt
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((taskNumber) / totalTasks) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {currentTask.prompt}
          </h2>
        </Card>

        {/* Answer Choices */}
        <div className="space-y-3 mb-8">
          {currentTask.choices.map((choice, index) => (
            <Card
              key={index}
              clickable
              onClick={() => handleAnswerSelect(choice)}
              className={cn(
                "p-4 transition-all duration-200",
                selectedAnswer === choice
                  ? "bg-primary-light border-primary"
                  : "hover:bg-card-hover"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium",
                  selectedAnswer === choice
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted-foreground text-muted-foreground"
                )}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-foreground font-medium">
                  {choice}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            size="lg"
            className="px-8"
          >
            {isLastTask ? "Se resultat" : "Neste"}
          </Button>
        </div>
      </div>
    </div>
  );
}