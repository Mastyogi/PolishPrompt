import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { QUESTIONS, type Question, type Difficulty, type Category } from "./questions";
import {
  Brain,
  Clock,
  Trophy,
  Sparkles,
  RefreshCw,
  Download,
  Share2,
  ChevronRight,
  Check,
  X,
  Timer,
} from "lucide-react";
import jsPDF from "jspdf";

const ROUND_SIZE = 10;
const TIMER_OPTIONS = [10, 20, 30] as const;
const STORAGE_KEY = "pp_quiz_state_v1";

type Phase = "intro" | "playing" | "done";

interface Answer {
  qid: string;
  category: Category;
  difficulty: Difficulty;
  correct: boolean;
  timeMs: number;
}

interface SavedState {
  phase: Phase;
  usedIds: string[];
  answers: Answer[];
  currentDifficulty: Difficulty;
  timer: number;
  startedAt: number;
}

function loadState(): SavedState | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}
function saveState(s: SavedState | null) {
  if (typeof window === "undefined") return;
  if (!s) localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function pickNext(
  usedIds: string[],
  difficulty: Difficulty,
  lastCategory?: Category,
): Question | null {
  const pool = QUESTIONS.filter((q) => !usedIds.includes(q.id));
  if (pool.length === 0) return null;
  // prefer matching difficulty, then any difficulty
  let candidates = pool.filter((q) => q.difficulty === difficulty);
  if (candidates.length === 0) candidates = pool;
  // rotate category if possible
  if (lastCategory) {
    const diff = candidates.filter((q) => q.category !== lastCategory);
    if (diff.length > 0) candidates = diff;
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function bumpDifficulty(d: Difficulty, correct: boolean, quickAnswer: boolean): Difficulty {
  const order: Difficulty[] = ["easy", "medium", "hard"];
  let i = order.indexOf(d);
  if (correct && quickAnswer) i = Math.min(order.length - 1, i + 1);
  else if (!correct) i = Math.max(0, i - 1);
  return order[i];
}

function scoreLevel(pct: number) {
  if (pct >= 85)
    return { label: "Prompt Architect", tag: "Advanced", color: "oklch(0.62 0.22 145)" };
  if (pct >= 65)
    return { label: "Prompt Strategist", tag: "Intermediate", color: "oklch(0.62 0.22 255)" };
  if (pct >= 40)
    return { label: "Prompt Apprentice", tag: "Beginner+", color: "oklch(0.72 0.18 85)" };
  return { label: "Prompt Novice", tag: "Beginner", color: "oklch(0.65 0.22 25)" };
}

function recommendation(level: string) {
  switch (level) {
    case "Advanced":
      return "You're ready for advanced prompt systems, multi-agent chains and workflow automation. The ebook's 'Secret Arsenal' and 'Advanced Techniques' chapters are built for you.";
    case "Intermediate":
      return "You've got the basics. Focus on context-engineering, output formatting and refinement loops — Chapters 5–9 of the ebook will close your gap fast.";
    case "Beginner+":
      return "Good instincts, weak structure. Start with the RTCO framework and prompt formulas — Chapters 1–4 will compound your output quality immediately.";
    default:
      return "Start at zero, win at AI. The 21-day system inside the ebook walks you from 'vague questions' to 'prompts that ship work'.";
  }
}

const CATEGORIES: Category[] = [
  "clarity",
  "context",
  "structure",
  "audience",
  "reasoning",
  "refinement",
];

export function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [timer, setTimer] = useState<number>(20);
  const [usedIds, setUsedIds] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [current, setCurrent] = useState<Question | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(timer);
  const startTimeRef = useRef<number>(0);

  // hydrate
  useEffect(() => {
    const s = loadState();
    if (s && s.phase !== "intro") {
      setPhase(s.phase);
      setUsedIds(s.usedIds);
      setAnswers(s.answers);
      setDifficulty(s.currentDifficulty);
      setTimer(s.timer);
      if (s.phase === "playing") {
        const q = pickNext(s.usedIds, s.currentDifficulty);
        setCurrent(q);
        setSecondsLeft(s.timer);
        startTimeRef.current = Date.now();
      }
    }
  }, []);

  // persist
  useEffect(() => {
    if (phase === "intro") return;
    saveState({
      phase,
      usedIds,
      answers,
      currentDifficulty: difficulty,
      timer,
      startedAt: Date.now(),
    });
  }, [phase, usedIds, answers, difficulty, timer]);

  const handleAnswer = useCallback(
    (idx: number) => {
      if (!current || revealed) return;
      setSelected(idx);
      setRevealed(true);
      const timeMs = Date.now() - startTimeRef.current;
      const isCorrect = idx === current.correct;
      const quick = timeMs < (timer * 1000) / 2;
      const ans: Answer = {
        qid: current.id,
        category: current.category,
        difficulty: current.difficulty,
        correct: isCorrect,
        timeMs,
      };
      const nextAnswers = [...answers, ans];
      setAnswers(nextAnswers);

      setTimeout(() => {
        const nextUsed = [...usedIds, current.id];
        setUsedIds(nextUsed);
        if (nextAnswers.length >= ROUND_SIZE) {
          setPhase("done");
          setCurrent(null);
          return;
        }
        const nextDiff = bumpDifficulty(difficulty, isCorrect, quick);
        setDifficulty(nextDiff);
        const next = pickNext(nextUsed, nextDiff, current.category);
        setCurrent(next);
        setSelected(null);
        setRevealed(false);
        setSecondsLeft(timer);
        startTimeRef.current = Date.now();
      }, 1400);
    },
    [answers, current, difficulty, revealed, timer, usedIds],
  );

  // countdown
  useEffect(() => {
    if (phase !== "playing" || revealed || !current) return;
    if (secondsLeft <= 0) {
      handleAnswer(-1);
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [secondsLeft, phase, revealed, current, handleAnswer]);

  function start(t: number) {
    setTimer(t);
    setPhase("playing");
    setUsedIds([]);
    setAnswers([]);
    setDifficulty("easy");
    const q = pickNext([], "easy");
    setCurrent(q);
    setSelected(null);
    setRevealed(false);
    setSecondsLeft(t);
    startTimeRef.current = Date.now();
  }

  function reset() {
    saveState(null);
    setPhase("intro");
    setUsedIds([]);
    setAnswers([]);
    setCurrent(null);
    setSelected(null);
    setRevealed(false);
    setDifficulty("easy");
  }

  const breakdown = useMemo(() => {
    const map: Record<Category, { correct: number; total: number }> = {
      clarity: { correct: 0, total: 0 },
      context: { correct: 0, total: 0 },
      structure: { correct: 0, total: 0 },
      audience: { correct: 0, total: 0 },
      reasoning: { correct: 0, total: 0 },
      refinement: { correct: 0, total: 0 },
    };
    for (const a of answers) {
      map[a.category].total += 1;
      if (a.correct) map[a.category].correct += 1;
    }
    return map;
  }, [answers]);

  // scoring: difficulty-weighted, can't be edited from DOM since computed from sealed answers
  const score = useMemo(() => {
    const weight = { easy: 1, medium: 2, hard: 3 } as const;
    let earned = 0,
      max = 0;
    for (const a of answers) {
      max += weight[a.difficulty];
      if (a.correct) earned += weight[a.difficulty];
    }
    const pct = max === 0 ? 0 : Math.round((earned / max) * 100);
    return { earned, max, pct };
  }, [answers]);

  const level = scoreLevel(score.pct);
  const strengths = CATEGORIES.filter(
    (c) => breakdown[c].total > 0 && breakdown[c].correct / breakdown[c].total >= 0.66,
  );
  const weaknesses = CATEGORIES.filter(
    (c) => breakdown[c].total > 0 && breakdown[c].correct / breakdown[c].total < 0.5,
  );

  function downloadPDF() {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const w = doc.internal.pageSize.getWidth();
    // header
    doc.setFillColor(95, 60, 220);
    doc.rect(0, 0, w, 90, "F");
    doc.setTextColor(255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("PolishPrompt — AI Prompt-Skill Scorecard", 40, 55);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(new Date().toLocaleString(), 40, 75);

    doc.setTextColor(20);
    doc.setFontSize(48);
    doc.setFont("helvetica", "bold");
    doc.text(`${score.pct}%`, 40, 160);
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(`Level: ${level.label} (${level.tag})`, 40, 190);
    doc.text(`Score: ${score.earned} / ${score.max} (difficulty-weighted)`, 40, 210);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Skill breakdown", 40, 250);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    let y = 270;
    for (const c of CATEGORIES) {
      const b = breakdown[c];
      const pct = b.total ? Math.round((b.correct / b.total) * 100) : 0;
      doc.text(`• ${c.padEnd(12)} ${b.correct}/${b.total}  (${pct}%)`, 50, y);
      y += 18;
    }
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text("Strengths", 40, y);
    y += 16;
    doc.setFont("helvetica", "normal");
    doc.text(
      strengths.length ? strengths.join(", ") : "Build your first strength by practicing daily.",
      50,
      y,
    );
    y += 24;
    doc.setFont("helvetica", "bold");
    doc.text("Focus areas", 40, y);
    y += 16;
    doc.setFont("helvetica", "normal");
    doc.text(
      weaknesses.length ? weaknesses.join(", ") : "Solid all-rounder — push to advanced systems.",
      50,
      y,
    );
    y += 30;
    doc.setFont("helvetica", "bold");
    doc.text("Recommendation", 40, y);
    y += 16;
    doc.setFont("helvetica", "normal");
    const rec = doc.splitTextToSize(recommendation(level.tag), w - 80);
    doc.text(rec, 40, y);

    doc.setTextColor(120);
    doc.setFontSize(9);
    doc.text(
      "PolishPrompt.tech · Smart Prompts = Smart Results",
      40,
      doc.internal.pageSize.getHeight() - 30,
    );
    doc.save("PolishPrompt-Scorecard.pdf");
  }

  async function share() {
    const text = `I scored ${score.pct}% (${level.label}) on the PolishPrompt AI Prompt-Skill Test. Test yourself:`;
    const url = "https://polishprompt.tech";
    if (typeof navigator !== "undefined") {
      const shareApi = navigator.share;
      if (typeof shareApi === "function") {
        try {
          await shareApi({ title: "PolishPrompt AI Test", text, url });
          return;
        } catch (error) {
          console.error(error);
        }
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(`${text} ${url}`);
      alert("Copied result to clipboard!");
    }
  }

  // === RENDER ===
  return (
    <section id="quiz" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
            <Brain className="h-3.5 w-3.5 text-[oklch(0.58_0.24_295)]" /> AI Prompt-Skill Engine ·
            v1
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            What's Your <span className="text-gradient-primary">Real AI IQ</span>?
          </h2>
          <p className="mt-3 text-muted-foreground">
            10 adaptive questions. Honest score. PDF certificate. No fluff.
          </p>
        </div>

        <div className="mt-10">
          {phase === "intro" && (
            <div className="glass-strong rounded-[2rem] p-6 sm:p-10 shadow-glow">
              <div className="grid gap-6 sm:grid-cols-2">
                <Feature
                  icon={<Brain className="h-5 w-5" />}
                  title="Adaptive difficulty"
                  text="Engine ramps up if you're sharp, drops if you struggle."
                />
                <Feature
                  icon={<Sparkles className="h-5 w-5" />}
                  title="6 skill categories"
                  text="Clarity · Context · Structure · Audience · Reasoning · Refinement."
                />
                <Feature
                  icon={<Trophy className="h-5 w-5" />}
                  title="Honest score"
                  text="Difficulty-weighted, sealed from manual edits."
                />
                <Feature
                  icon={<Download className="h-5 w-5" />}
                  title="PDF scorecard"
                  text="Downloadable, shareable, personalized recommendation."
                />
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Clock className="h-4 w-4" /> Choose your timer
                </div>
                <div className="mt-3 flex gap-3">
                  {TIMER_OPTIONS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimer(t)}
                      className={`flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        timer === t
                          ? "border-transparent bg-gradient-primary text-white shadow-glow"
                          : "bg-card/60 hover:bg-card text-foreground border-border"
                      }`}
                    >
                      {t}s per question
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button onClick={() => start(timer)} className="btn-primary text-base">
                  Start AI Test <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {phase === "playing" && current && (
            <div className="glass-strong rounded-[2rem] p-6 sm:p-8 shadow-glow">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="rounded-full bg-card/70 px-3 py-1 text-foreground">
                  Question {answers.length + 1} / {ROUND_SIZE}
                </span>
                <span className="rounded-full bg-gradient-cyan px-3 py-1 capitalize text-white">
                  {current.category} · {current.difficulty}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-card/70 px-3 py-1 text-foreground">
                  <Timer className="h-3.5 w-3.5" /> {secondsLeft}s
                </span>
              </div>

              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-gradient-primary transition-all"
                  style={{ width: `${(answers.length / ROUND_SIZE) * 100}%` }}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">{current.prompt}</h3>
              <div className="mt-5 grid gap-3">
                {current.options.map((opt, i) => {
                  const isCorrect = revealed && i === current.correct;
                  const isWrong = revealed && i === selected && selected !== current.correct;
                  return (
                    <button
                      key={i}
                      disabled={revealed}
                      onClick={() => handleAnswer(i)}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        isCorrect
                          ? "border-transparent bg-[oklch(0.92_0.12_150)] text-[oklch(0.3_0.12_150)]"
                          : isWrong
                            ? "border-transparent bg-[oklch(0.93_0.1_25)] text-[oklch(0.4_0.18_25)]"
                            : "bg-card/70 text-foreground border-border hover:-translate-y-0.5 hover:bg-card"
                      }`}
                    >
                      <span>{opt}</span>
                      {isCorrect && <Check className="h-4 w-4" />}
                      {isWrong && <X className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
              {revealed && (
                <div className="mt-4 rounded-2xl bg-card/70 p-3 text-sm text-muted-foreground border border-border">
                  <span className="font-semibold text-foreground">Why:</span> {current.explain}
                </div>
              )}
            </div>
          )}

          {phase === "done" && (
            <div className="glass-strong overflow-hidden rounded-[2rem] shadow-glow">
              <div
                className="relative p-8 text-center text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-widest opacity-80">
                    Your AI Prompt-Skill Score
                  </div>
                  <div className="mt-2 text-6xl font-bold sm:text-7xl">
                    {score.pct}
                    <span className="text-3xl opacity-80">%</span>
                  </div>
                  <div className="mt-2 text-lg">
                    {level.label} <span className="opacity-70">· {level.tag}</span>
                  </div>
                  <div className="mt-1 text-xs opacity-70">
                    Weighted score: {score.earned} / {score.max}
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase text-muted-foreground">
                    Skill breakdown
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {CATEGORIES.map((c) => {
                      const b = breakdown[c];
                      const pct = b.total ? Math.round((b.correct / b.total) * 100) : 0;
                      return (
                        <div key={c} className="rounded-2xl bg-card/70 border border-border p-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="capitalize font-semibold">{c}</span>
                            <span className="text-muted-foreground">
                              {b.correct}/{b.total} · {pct}%
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/5">
                            <div
                              className="h-full bg-gradient-primary"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[oklch(0.62_0.22_145)]/30 bg-[oklch(0.62_0.22_145)]/10 p-4">
                    <div className="text-xs font-semibold uppercase text-[oklch(0.5_0.18_150)] dark:text-[oklch(0.78_0.18_150)]">
                      Strengths
                    </div>
                    <div className="mt-1 text-sm capitalize text-foreground">
                      {strengths.length
                        ? strengths.join(" · ")
                        : "Build your first one — practice daily."}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[oklch(0.72_0.18_60)]/30 bg-[oklch(0.72_0.18_60)]/10 p-4">
                    <div className="text-xs font-semibold uppercase text-[oklch(0.5_0.18_60)] dark:text-[oklch(0.82_0.16_70)]">
                      Focus areas
                    </div>
                    <div className="mt-1 text-sm capitalize text-foreground">
                      {weaknesses.length ? weaknesses.join(" · ") : "Solid all-rounder."}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-cyan p-5 text-white">
                  <div className="text-xs uppercase opacity-80">Personalized recommendation</div>
                  <div className="mt-1 text-base">{recommendation(level.tag)}</div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#cta" className="btn-primary">
                    Unlock the Ebook
                  </a>
                  <button onClick={downloadPDF} className="btn-ghost">
                    <Download className="h-4 w-4" /> Download PDF
                  </button>
                  <button onClick={share} className="btn-ghost">
                    <Share2 className="h-4 w-4" /> Share result
                  </button>
                  <button onClick={reset} className="btn-ghost">
                    <RefreshCw className="h-4 w-4" /> Retake test
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-card/60 border border-border p-4">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}
