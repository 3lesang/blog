import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const routeTranslations = {
  vi: {
    posts: "bai-viet",
    topic: "chu-de",
    author: "tac-gia",
  },
  en: {
    posts: "post",
    topic: "topic",
    author: "author",
  },
};
