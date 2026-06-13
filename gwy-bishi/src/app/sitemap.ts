import type { MetadataRoute } from "next";
import { shenlunQuestions, xingceQuestions } from "@/data/questions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gwybs.com";
  const now = new Date();

  const routes = ["", "/xingce", "/shenlun", "/mock-exam"];
  const xingceRoutes = xingceQuestions.map((question) => `/question/${question.id}`);
  const shenlunRoutes = shenlunQuestions.map((question) => `/question/${question.id}`);

  return [...routes, ...xingceRoutes, ...shenlunRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/question") ? 0.9 : 0.8,
  }));
}
