import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="font-display text-3xl font-semibold">Pagina niet gevonden</h1>
      <p className="text-muted-foreground">Deze pagina bestaat niet (meer).</p>
      <Button asChild>
        <Link to="/">Terug naar home</Link>
      </Button>
    </div>
  );
}
