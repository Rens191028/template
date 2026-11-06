import { Link } from "react-router-dom";
import { company } from "@/lib/content";

export function Logo() {
  return (
    <Link to="/" className="font-display text-xl font-semibold tracking-tight">
      {company.name}
    </Link>
  );
}
