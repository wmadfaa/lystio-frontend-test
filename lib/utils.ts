import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const MIN_PRICE = 100;
export const MAX_PRICE = 10000;

export function parsePriceRangeParam(
  price?: string | null,
  defaultValue?: [number, number],
) {
  const match = price?.match(/^(\d+)-(\d+)$/);
  if (!match) return defaultValue;
  return [Number(match[1]), Number(match[2])];
}
