import InsightCard from "./InsightCard";

type Insight = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: string;
  borderColor?: string;
};

export default function Insights({ insights = [] }: { insights?: Insight[] }) {
  return (
    <div className="min-h-screen py-20 space-y-20">
      {insights.map((insight, index) => (
        <InsightCard
          key={index}
          title={insight.title}
          description={insight.description}
          imageSrc={insight.imageSrc}
          imageAlt={insight.imageAlt}
          imagePosition={insight.imagePosition}
          borderColor={insight.borderColor}
        />
      ))}
    </div>
  );
}
