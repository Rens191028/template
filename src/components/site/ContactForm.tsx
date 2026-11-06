import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "ok" | "error";

/**
 * Contactformulier met status-feedback (verzenden / gelukt / fout).
 *
 * TODO per project: koppel handleSubmit aan een echte backend —
 * bv. een Formspree/Resend endpoint, of (als het project een database/edge
 * function heeft) een eigen API-route. Nu simuleert het alleen de flow.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      // VUL HIER DE ECHTE VERZEND-LOGICA IN
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <p className="font-medium">Bedankt voor je aanvraag!</p>
        <p className="text-sm text-muted-foreground">We nemen zo snel mogelijk contact op.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Naam" required />
        <Input name="phone" type="tel" placeholder="Telefoonnummer" required />
      </div>
      <Input name="email" type="email" placeholder="E-mailadres" required />
      <Textarea name="message" placeholder="Je bericht" required />

      {status === "error" && (
        <p className="text-sm text-destructive">
          Er ging iets mis. Probeer het opnieuw of bel ons direct.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Versturen...
          </>
        ) : (
          "Versturen"
        )}
      </Button>
    </form>
  );
}
