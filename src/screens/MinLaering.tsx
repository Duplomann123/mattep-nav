import { useNavigate } from "react-router-dom";
import { TopicTile } from "@/components/domain/TopicTile";
import { TOPICS } from "@/data/topics";

export function MinLaering() {
  const navigate = useNavigate();

  const handleTopicClick = (slug: string) => {
    navigate(`/tema/${slug}`);
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Min læring
          </h1>
          <p className="text-muted-foreground">
            Velg et tema for å starte læring
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOPICS.map((topic) => (
            <TopicTile
              key={topic.slug}
              topic={topic}
              onClick={() => handleTopicClick(topic.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}