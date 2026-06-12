"use client";

import { todayKey } from "@/lib/utils";

const ANALYSIS_KEY = "gwy-analysis-usage";
const FAVORITES_KEY = "gwy-favorite-question-ids";
const MOCK_KEY = "gwy-mock-exam-state";
const LIMIT = 5;

type AnalysisUsage = {
  date: string;
  ids: string[];
};

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getAnalysisUsage(): AnalysisUsage {
  const usage = readJson<AnalysisUsage>(ANALYSIS_KEY, {
    date: todayKey(),
    ids: [],
  });
  if (usage.date !== todayKey()) {
    return { date: todayKey(), ids: [] };
  }
  return usage;
}

export function canViewAnalysis(questionId: string) {
  const usage = getAnalysisUsage();
  return usage.ids.includes(questionId) || usage.ids.length < LIMIT;
}

export function markAnalysisViewed(questionId: string) {
  const usage = getAnalysisUsage();
  if (!usage.ids.includes(questionId)) {
    usage.ids.push(questionId);
  }
  writeJson(ANALYSIS_KEY, usage);
  return usage;
}

export function getFavoriteIds() {
  return readJson<string[]>(FAVORITES_KEY, []);
}

export function toggleFavorite(questionId: string) {
  const ids = getFavoriteIds();
  const next = ids.includes(questionId)
    ? ids.filter((id) => id !== questionId)
    : [...ids, questionId];
  writeJson(FAVORITES_KEY, next);
  return next;
}

export function saveMockState<T>(state: T) {
  writeJson(MOCK_KEY, state);
}

export function readMockState<T>(fallback: T) {
  return readJson<T>(MOCK_KEY, fallback);
}

export function clearMockState() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(MOCK_KEY);
  }
}
