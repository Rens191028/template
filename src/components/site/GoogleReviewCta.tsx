import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/content";

/** Kleine kaart die bezoekers naar je Google Reviews stuurt. Vul company.googleReviewUrl in. */
export function GoogleReviewCta() {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Bekijk wat klanten over {company.name} zeggen op Google.
        </p>
      </div>
      <Button asChild variant="outline">
        <a href={company.googleReviewUrl} target="_blank" rel="noreferrer">
          Lees reviews
        </a>
      </Button>
    </div>
  );
}
