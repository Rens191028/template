import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combineert class names en lost Tailwind-conflicten op (laatste wint). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
