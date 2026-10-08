import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names and de-conflict Tailwind utilities — the
 *  helper every shadcn/ui component and generated UX component imports. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
