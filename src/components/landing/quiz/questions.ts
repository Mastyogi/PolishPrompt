export type Category =
  | "clarity"
  | "context"
  | "structure"
  | "audience"
  | "reasoning"
  | "refinement";
export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  prompt: string;
  options: string[];
  correct: number; // index
  explain: string;
}

// Large internal bank — 60+ questions
export const QUESTIONS: Question[] = [
  // === CLARITY ===
  {
    id: "c-e-1",
    category: "clarity",
    difficulty: "easy",
    prompt: "Which is the clearer prompt?",
    options: [
      "Tell me about marketing",
      "List 5 Instagram caption hooks for a Delhi-based vegan cafe targeting students",
      "Marketing help please",
      "How to do marketing fast",
    ],
    correct: 1,
    explain: "Specific topic + audience + format = clarity.",
  },
  {
    id: "c-e-2",
    category: "clarity",
    difficulty: "easy",
    prompt: "Best way to ask for a summary?",
    options: [
      "Summarize",
      "Make it short",
      "Summarize the article below in 5 bullet points, under 15 words each",
      "TL;DR",
    ],
    correct: 2,
    explain: "Numbers + constraints = unambiguous.",
  },
  {
    id: "c-m-1",
    category: "clarity",
    difficulty: "medium",
    prompt: "A user gets vague AI answers. The fastest fix is to…",
    options: [
      "Switch to a new AI",
      "Add specific constraints (length, tone, audience, format)",
      "Ask the same thing again",
      "Use shorter prompts",
    ],
    correct: 1,
    explain: "Constraints are the #1 lever for clarity.",
  },
  {
    id: "c-h-1",
    category: "clarity",
    difficulty: "hard",
    prompt: "Which prompt minimizes ambiguity for code generation?",
    options: [
      "Write a function for users",
      "Write a TypeScript function `getUserById(id: string): Promise<User|null>` that queries Supabase 'users' table and returns null on not-found",
      "Make a JS user function",
      "Code for user lookup",
    ],
    correct: 1,
    explain: "Signature, types, datasource, edge-case behavior — zero ambiguity.",
  },

  // === CONTEXT ===
  {
    id: "ctx-e-1",
    category: "context",
    difficulty: "easy",
    prompt: "Which prompt gives AI better context?",
    options: [
      "Write an email",
      "Write a polite follow-up email to a client who hasn't replied in 5 days about an unpaid invoice of ₹25,000",
      "Email please",
      "Send email to client",
    ],
    correct: 1,
    explain: "Audience + purpose + situation + numbers.",
  },
  {
    id: "ctx-e-2",
    category: "context",
    difficulty: "easy",
    prompt: "Context in a prompt should usually include…",
    options: [
      "Who, what, why, for whom",
      "Just the topic",
      "Only the desired tone",
      "Only the desired length",
    ],
    correct: 0,
    explain: "All four anchor the model.",
  },
  {
    id: "ctx-m-1",
    category: "context",
    difficulty: "medium",
    prompt: "You want a blog intro that converts. What's the strongest context add?",
    options: [
      "Target reader's pain + desired emotion after reading",
      "Word count",
      "Use simple words",
      "Add emojis",
    ],
    correct: 0,
    explain: "Empathy context beats stylistic context.",
  },
  {
    id: "ctx-m-2",
    category: "context",
    difficulty: "medium",
    prompt: "Which is NOT useful prompt context?",
    options: ["Audience", "Tone", "Your favorite color", "Goal of the output"],
    correct: 2,
    explain: "Irrelevant context dilutes signal.",
  },
  {
    id: "ctx-h-1",
    category: "context",
    difficulty: "hard",
    prompt: "For a sales page, the single highest-impact context is…",
    options: [
      "Brand voice doc + 1-customer persona + objection list",
      "Just the product name",
      "List of competitors",
      "Color palette",
    ],
    correct: 0,
    explain: "Voice + persona + objections = persuasive copy.",
  },

  // === STRUCTURE ===
  {
    id: "s-e-1",
    category: "structure",
    difficulty: "easy",
    prompt: "How do you force AI to return a table?",
    options: [
      "Hope it does",
      "Say 'in a markdown table with columns: X, Y, Z'",
      "Use bigger font",
      "Ask twice",
    ],
    correct: 1,
    explain: "Explicit format declaration.",
  },
  {
    id: "s-e-2",
    category: "structure",
    difficulty: "easy",
    prompt: "Structured prompts usually use…",
    options: [
      "Sections like Role / Task / Constraints / Output",
      "One long sentence",
      "Only questions",
      "Bullet points only",
    ],
    correct: 0,
    explain: "RTCO is a strong default skeleton.",
  },
  {
    id: "s-m-1",
    category: "structure",
    difficulty: "medium",
    prompt: "Best way to get consistent JSON from AI?",
    options: [
      "Ask nicely",
      "Provide a schema example and say 'output ONLY valid JSON matching this schema'",
      "Ask for a list",
      "Use code mode",
    ],
    correct: 1,
    explain: "Schema + strict instruction = reliable JSON.",
  },
  {
    id: "s-m-2",
    category: "structure",
    difficulty: "medium",
    prompt: "Which template is most reusable?",
    options: [
      "Role + Goal + Context + Format + Constraints + Examples",
      "Just 'help me with X'",
      "One emoji per line",
      "Question only",
    ],
    correct: 0,
    explain: "Six-slot template ports across tasks.",
  },
  {
    id: "s-h-1",
    category: "structure",
    difficulty: "hard",
    prompt: "For multi-step reasoning, you should…",
    options: [
      "Ask the model to think step-by-step and show its work before final answer",
      "Ask for the answer only",
      "Use shorter prompts",
      "Ask in Hindi",
    ],
    correct: 0,
    explain: "Chain-of-thought boosts accuracy on complex tasks.",
  },

  // === AUDIENCE ===
  {
    id: "a-e-1",
    category: "audience",
    difficulty: "easy",
    prompt: "Why specify audience?",
    options: [
      "AI tailors vocabulary, examples and tone",
      "It looks professional",
      "It saves tokens",
      "It's required",
    ],
    correct: 0,
    explain: "Audience drives every stylistic choice.",
  },
  {
    id: "a-e-2",
    category: "audience",
    difficulty: "easy",
    prompt: "Which audience definition is strongest?",
    options: [
      "Indians",
      "21-year-old Gen-Z college students in tier-2 cities who follow finfluencers",
      "Adults",
      "Internet users",
    ],
    correct: 1,
    explain: "Granular persona = sharper output.",
  },
  {
    id: "a-m-1",
    category: "audience",
    difficulty: "medium",
    prompt: "Writing for a senior CTO vs a junior dev, you should change…",
    options: [
      "Vocabulary, abstraction level, examples",
      "Only the greeting",
      "Nothing",
      "Just the length",
    ],
    correct: 0,
    explain: "Audience expertise reshapes everything.",
  },
  {
    id: "a-h-1",
    category: "audience",
    difficulty: "hard",
    prompt: "For Hinglish content, the cleanest audience instruction is…",
    options: [
      "Speak Hinglish",
      "Write in conversational Hinglish (Roman script), ~60% Hindi 40% English, slang appropriate to urban Gen-Z",
      "Use Hindi words",
      "Mix languages",
    ],
    correct: 1,
    explain: "Ratio + script + register removes guesswork.",
  },

  // === REASONING ===
  {
    id: "r-e-1",
    category: "reasoning",
    difficulty: "easy",
    prompt: "AI is best treated as…",
    options: [
      "A search engine",
      "A reasoning partner you brief like a junior teammate",
      "A magic 8-ball",
      "A database",
    ],
    correct: 1,
    explain: "Mental model unlocks better prompting.",
  },
  {
    id: "r-m-1",
    category: "reasoning",
    difficulty: "medium",
    prompt: "To get a strong critique, ask the AI to…",
    options: [
      "Agree",
      "Adopt a contrarian expert persona and list 5 weaknesses with severity",
      "Be nice",
      "Repeat the input",
    ],
    correct: 1,
    explain: "Adversarial framing produces useful critique.",
  },
  {
    id: "r-m-2",
    category: "reasoning",
    difficulty: "medium",
    prompt: "When the answer feels wrong, the first move is to…",
    options: [
      "Ask 'are you sure?' and request the reasoning",
      "Switch model",
      "Give up",
      "Reword randomly",
    ],
    correct: 0,
    explain: "Reasoning audit > random rephrase.",
  },
  {
    id: "r-h-1",
    category: "reasoning",
    difficulty: "hard",
    prompt: "For complex analysis, decomposition means…",
    options: [
      "Splitting one giant prompt into staged sub-prompts that feed into each other",
      "Using more words",
      "Using fewer words",
      "Asking twice",
    ],
    correct: 0,
    explain: "Stage-gated prompting beats monolith.",
  },

  // === REFINEMENT ===
  {
    id: "ref-e-1",
    category: "refinement",
    difficulty: "easy",
    prompt: "After a weak answer, you should…",
    options: [
      "Accept it",
      "Specify exactly what was off and re-ask",
      "Start a new chat",
      "Lower expectations",
    ],
    correct: 1,
    explain: "Targeted critique > restart.",
  },
  {
    id: "ref-e-2",
    category: "refinement",
    difficulty: "easy",
    prompt: "Best refinement instruction?",
    options: [
      "Better",
      "Make it punchier — cut 30%, lead with the strongest line, kill adverbs",
      "Try again",
      "More creative",
    ],
    correct: 1,
    explain: "Concrete edit instructions ship usable output.",
  },
  {
    id: "ref-m-1",
    category: "refinement",
    difficulty: "medium",
    prompt: "Which iteration loop is most effective?",
    options: [
      "Draft → Critique → Rewrite with constraints",
      "Draft → Accept",
      "Draft → New chat",
      "Critique only",
    ],
    correct: 0,
    explain: "Three-step loop compounds quality.",
  },
  {
    id: "ref-h-1",
    category: "refinement",
    difficulty: "hard",
    prompt: "An advanced refinement technique is…",
    options: [
      "Asking AI to score its own output on a rubric then improve it",
      "Hoping for the best",
      "Using uppercase",
      "Demanding harder",
    ],
    correct: 0,
    explain: "Self-evaluation loops raise the ceiling.",
  },

  // Extra fillers across categories
  {
    id: "c-m-2",
    category: "clarity",
    difficulty: "medium",
    prompt: "Ambiguity in prompts most often comes from…",
    options: ["Vague nouns and missing constraints", "Long prompts", "Polite words", "Emojis"],
    correct: 0,
    explain: "Specificity removes ambiguity.",
  },
  {
    id: "ctx-e-3",
    category: "context",
    difficulty: "easy",
    prompt: "The phrase 'for whom' in a prompt sets…",
    options: ["The audience", "The format", "The tone only", "The length"],
    correct: 0,
    explain: "Audience is core context.",
  },
  {
    id: "s-e-3",
    category: "structure",
    difficulty: "easy",
    prompt: "Numbered constraints help AI because…",
    options: [
      "Easier to follow each rule",
      "They look pretty",
      "They reduce tokens",
      "They translate better",
    ],
    correct: 0,
    explain: "Discrete rules = discrete compliance.",
  },
  {
    id: "a-m-2",
    category: "audience",
    difficulty: "medium",
    prompt: "Persona vs audience — persona is…",
    options: [
      "The voice AI speaks AS; audience is who it speaks TO",
      "Same thing",
      "Only for marketing",
      "Always optional",
    ],
    correct: 0,
    explain: "Two different levers — use both.",
  },
  {
    id: "r-e-2",
    category: "reasoning",
    difficulty: "easy",
    prompt: "Best mental model for AI?",
    options: [
      "A brilliant intern who needs a clear brief",
      "An oracle",
      "A friend",
      "A calculator",
    ],
    correct: 0,
    explain: "Briefing mindset wins.",
  },
  {
    id: "ref-m-2",
    category: "refinement",
    difficulty: "medium",
    prompt: "If 3 refinements fail, you should…",
    options: [
      "Rewrite the original prompt from scratch with a new structure",
      "Try 10 more times",
      "Quit",
      "Switch language",
    ],
    correct: 0,
    explain: "Sometimes the root prompt is broken.",
  },
];
