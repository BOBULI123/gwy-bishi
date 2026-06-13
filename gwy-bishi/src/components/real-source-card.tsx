import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { RealQuestionSource } from "@/data/real-question-sources";

export function RealSourceCard({ source }: { source: RealQuestionSource }) {
  return (
    <a href={source.sourceUrl} target="_blank" rel="noreferrer">
      <Card className="transition hover:-translate-y-0.5 hover:border-mint/35 hover:shadow-xl">
        <CardContent className="p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge tone={source.examType === "xingce" ? "mint" : "gold"}>
              {source.year} · {source.province}
            </Badge>
            <Badge>{source.category}</Badge>
            <Badge tone="ink">{source.sourceName}</Badge>
          </div>
          <h3 className="flex items-start gap-2 text-base font-bold leading-7 text-ink">
            <span>{source.title}</span>
            <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-ink/45" />
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/58">{source.sourceNote}</p>
        </CardContent>
      </Card>
    </a>
  );
}
