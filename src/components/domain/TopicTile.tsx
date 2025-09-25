import { Card } from "@/components/base/Card";
import { Topic } from "@/data/topics";
import { ChevronRight } from "lucide-react";

interface TopicTileProps {
  topic: Topic;
  onClick: () => void;
}

export function TopicTile({ topic, onClick }: TopicTileProps) {
  return (
    <Card clickable onClick={onClick} className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{topic.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Klikk for å starte læring
          </p>
        </div>
        <ChevronRight className="text-muted-foreground" size={20} />
      </div>
    </Card>
  );
}