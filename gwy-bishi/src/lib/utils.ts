import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, length = 80) {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}
