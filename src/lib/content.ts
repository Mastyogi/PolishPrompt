export const SITE_NAME = "PolishPrompt";
export const SITE_URL = "https://polishprompt.tech";
export const AMAZON_URL = "https://amzn.in/d/00vHMnM3";

export type PromptCategory =
  | "Content Writing"
  | "Marketing"
  | "Study"
  | "Business"
  | "Career"
  | "Coding"
  | "Productivity"
  | "Daily Life"
  | "Research"
  | "Social Media";

export type PromptModel = "ChatGPT" | "Claude" | "Gemini" | "All Models";

export interface PromptRecord {
  slug: string;
  title: string;
  description: string;
  fullPrompt: string;
  category: PromptCategory;
  model: PromptModel;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  usageCount: number;
  trending: boolean;
  featured: boolean;
  updatedAt: string;
  tags: string[];
  exampleOutput: string;
  tips: string[];
  variations: string[];
  relatedPromptSlugs: string[];
  useCase: string;
}

export interface GuidePost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  updatedAt: string;
  excerpt: string;
  content: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  result: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CATEGORIES: Array<{ name: PromptCategory; description: string; count: number }> = [
  { name: "Content Writing", description: "Turn rough notes into polished pieces.", count: 8 },
  { name: "Marketing", description: "Build better campaign copy and strategy prompts.", count: 6 },
  { name: "Study", description: "Create revision plans, summaries and learning loops.", count: 7 },
  { name: "Business", description: "Draft sharper proposals, emails and plans.", count: 5 },
  { name: "Career", description: "Refine resumes, interviews and portfolio work.", count: 4 },
  {
    name: "Coding",
    description: "Structure debugging, review and implementation prompts.",
    count: 5,
  },
  { name: "Productivity", description: "Plan your week and remove decision fatigue.", count: 6 },
  { name: "Daily Life", description: "Make everyday tasks easier and clearer.", count: 4 },
  { name: "Research", description: "Summarize sources and synthesize insights.", count: 5 },
  { name: "Social Media", description: "Shape content ideas that actually feel native.", count: 6 },
];

export const PROMPTS: PromptRecord[] = [
  {
    slug: "clear-briefs-for-better-ai-output",
    title: "Clear Briefs for Better AI Output",
    description:
      "Turn fuzzy requests into focused prompts that produce useful answers on the first try.",
    fullPrompt:
      "You are an expert communication coach. I will give you a rough idea. Rewrite it into a clear brief with: goal, audience, context, constraints, output format, and success criteria. Ask up to three clarifying questions if needed, then produce the best version of the prompt.",
    category: "Content Writing",
    model: "ChatGPT",
    difficulty: "Beginner",
    usageCount: 1840,
    trending: true,
    featured: true,
    updatedAt: "2026-06-28",
    tags: ["writing", "clarity", "framework"],
    exampleOutput:
      "A polished brief for writing a newsletter intro that speaks to students and includes a CTA.",
    tips: ["Always define the outcome first.", "Mention the target audience clearly."],
    variations: ["Short version", "Long version", "Multi-step version"],
    relatedPromptSlugs: ["study-plan-from-notes", "research-summary-in-plain-english"],
    useCase: "Best for turning vague requests into ready-to-use prompts.",
  },
  {
    slug: "study-plan-from-notes",
    title: "Study Plan from Notes",
    description: "Turn scattered study notes into a focused plan that improves retention.",
    fullPrompt:
      "Act as a calm study coach. I will paste my notes. Create a 7-day revision plan with daily goals, priority topics, active recall tasks, and a short review routine. Keep the tone motivating and practical.",
    category: "Study",
    model: "Gemini",
    difficulty: "Beginner",
    usageCount: 1520,
    trending: true,
    featured: true,
    updatedAt: "2026-06-24",
    tags: ["study", "revision", "productivity"],
    exampleOutput: "A 7-day plan with focused goals and revision checkpoints.",
    tips: ["Paste the most important topics only."],
    variations: ["Exam prep version", "Semester plan version"],
    relatedPromptSlugs: ["clear-briefs-for-better-ai-output", "research-summary-in-plain-english"],
    useCase: "Ideal for students who need structure without overwhelm.",
  },
  {
    slug: "research-summary-in-plain-english",
    title: "Research Summary in Plain English",
    description: "Summarize dense material into clear takeaways for work or study.",
    fullPrompt:
      "You are a careful research assistant. Read the material I give you and turn it into: 1) a 5-bullet summary, 2) the main argument, 3) three key takeaways, and 4) a one-sentence conclusion. Use plain language.",
    category: "Research",
    model: "Claude",
    difficulty: "Intermediate",
    usageCount: 1290,
    trending: false,
    featured: true,
    updatedAt: "2026-06-20",
    tags: ["research", "summaries", "clarity"],
    exampleOutput: "A concise summary that reads like a human explanation instead of a textbook.",
    tips: ["Add the source type if you want a tailored summary."],
    variations: ["Executive summary", "Student-friendly summary"],
    relatedPromptSlugs: ["clear-briefs-for-better-ai-output", "study-plan-from-notes"],
    useCase: "Useful for making heavy information usable fast.",
  },
  {
    slug: "linkedin-post-pack-from-one-idea",
    title: "LinkedIn Post Pack from One Idea",
    description: "Expand one insight into a week of social content with a consistent voice.",
    fullPrompt:
      "You are a social strategist. I will give you one idea. Turn it into 5 LinkedIn post options, each with a hook, body, CTA and a post tone. Keep the structure simple and useful.",
    category: "Social Media",
    model: "All Models",
    difficulty: "Intermediate",
    usageCount: 1180,
    trending: true,
    featured: false,
    updatedAt: "2026-06-18",
    tags: ["social", "content", "marketing"],
    exampleOutput: "Five post drafts built around one core idea.",
    tips: ["Share your audience and tone to improve relevance."],
    variations: ["Short post version", "Carousel idea version"],
    relatedPromptSlugs: ["clear-briefs-for-better-ai-output", "smart-email-reply"],
    useCase: "Great for creators and founders who want more output from less effort.",
  },
  {
    slug: "smart-email-reply",
    title: "Smart Email Reply",
    description: "Draft a professional reply that sounds clear, warm and efficient.",
    fullPrompt:
      "You are a polished communication assistant. Rewrite the incoming message I provide into a professional response. Keep it concise, helpful and natural. Include a subject line if needed.",
    category: "Business",
    model: "ChatGPT",
    difficulty: "Beginner",
    usageCount: 1110,
    trending: false,
    featured: false,
    updatedAt: "2026-06-16",
    tags: ["email", "business", "communication"],
    exampleOutput: "A clear, well-structured response for a client or teammate.",
    tips: ["Mention the desired tone if you want it more formal or softer."],
    variations: ["Friendly version", "Executive version"],
    relatedPromptSlugs: ["clear-briefs-for-better-ai-output", "linkedin-post-pack-from-one-idea"],
    useCase: "Helpful for client communications and follow-ups.",
  },
  {
    slug: "career-story-for-resume",
    title: "Career Story for Resume",
    description: "Pull your experience into a stronger narrative for CVs and portfolios.",
    fullPrompt:
      "Act as a hiring strategist. I will give you my work history. Turn it into a concise career story with three strengths, one core impact, and a short resume summary. Keep the language clear and confident.",
    category: "Career",
    model: "Claude",
    difficulty: "Intermediate",
    usageCount: 980,
    trending: false,
    featured: false,
    updatedAt: "2026-06-12",
    tags: ["career", "resume", "storytelling"],
    exampleOutput: "A résumé summary that highlights impact rather than just job titles.",
    tips: ["Add metrics if you have them."],
    variations: ["Portfolio version", "Interview version"],
    relatedPromptSlugs: ["smart-email-reply", "productivity-weekly-planner"],
    useCase: "Useful when your résumé feels flat or generic.",
  },
  {
    slug: "productivity-weekly-planner",
    title: "Weekly Planner with Energy Levels",
    description: "Build a realistic weekly plan that respects your energy and commitments.",
    fullPrompt:
      "You are a practical productivity coach. Help me plan my week using my tasks, deadlines and energy levels. Organize the week into high-focus work blocks, admin time, and recovery time. Keep it realistic.",
    category: "Productivity",
    model: "ChatGPT",
    difficulty: "Beginner",
    usageCount: 940,
    trending: false,
    featured: false,
    updatedAt: "2026-06-10",
    tags: ["planning", "energy", "weekly"],
    exampleOutput: "A practical weekly schedule with intentional focus blocks.",
    tips: ["Mention your most energy-heavy hours."],
    variations: ["Student version", "Freelancer version"],
    relatedPromptSlugs: ["study-plan-from-notes", "smart-email-reply"],
    useCase: "Best for reducing overwhelm and creating a calmer week.",
  },
  {
    slug: "daily-life-assistant",
    title: "Daily Life Assistant",
    description: "Turn a busy day into a calmer action plan.",
    fullPrompt:
      "You are a thoughtful daily-life assistant. I will share my schedule and responsibilities. Create a realistic plan for the day, including priorities, quick wins, and a simple evening reset.",
    category: "Daily Life",
    model: "All Models",
    difficulty: "Beginner",
    usageCount: 760,
    trending: false,
    featured: false,
    updatedAt: "2026-06-08",
    tags: ["daily", "routine", "life"],
    exampleOutput: "A sensible day plan that leaves room for real life.",
    tips: ["Add your must-do tasks to make it practical."],
    variations: ["Weekend version", "Busy-parent version"],
    relatedPromptSlugs: ["productivity-weekly-planner", "study-plan-from-notes"],
    useCase: "Perfect for everyday planning with less friction.",
  },
  {
    slug: "code-review-checklist",
    title: "Code Review Checklist",
    description: "Turn messy code context into a clear review prompt for better debugging.",
    fullPrompt:
      "You are a senior engineer. Review the code I share and provide: 1) main risks, 2) improvements, 3) test ideas, and 4) a short summary of what to change first. Use a practical and supportive tone.",
    category: "Coding",
    model: "Claude",
    difficulty: "Advanced",
    usageCount: 840,
    trending: true,
    featured: false,
    updatedAt: "2026-06-06",
    tags: ["coding", "review", "debugging"],
    exampleOutput: "A concise review with actionable next steps.",
    tips: ["Include the stack and current issue for stronger feedback."],
    variations: ["Security review", "Performance review"],
    relatedPromptSlugs: ["clear-briefs-for-better-ai-output", "productivity-weekly-planner"],
    useCase: "Useful for developers who want better review output from AI.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aarav S.",
    role: "Student",
    result: "Finished assignments faster and with less confusion.",
    quote:
      "The prompts helped me stop guessing and start writing with structure. My assignments feel cleaner and more confident now.",
  },
  {
    name: "Meera P.",
    role: "Freelancer",
    result: "Used it to write better client proposals in half the time.",
    quote:
      "I used to waste hours rewriting the same briefs. Now I have a repeatable prompt system for content and outreach.",
  },
  {
    name: "Rajat V.",
    role: "Small business owner",
    result: "Created better marketing copy without sounding generic.",
    quote:
      "The library gives me prompts I can actually trust. I reach for it when I need writing that feels clear and useful.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is prompt engineering?",
    answer:
      "Prompt engineering is the skill of giving AI clearer instructions, context and structure so the output is more useful.",
  },
  {
    question: "How do smart prompts improve AI results?",
    answer:
      "They reduce guesswork, define the goal, and make the AI follow a format that fits your real need.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. The library is designed for people who are new to prompting and want simple, reliable patterns to start with.",
  },
  {
    question: "Do I need ChatGPT Plus?",
    answer: "No. The prompts are model-agnostic and work with the free versions of major AI tools.",
  },
  {
    question: "How is this different from random prompt lists?",
    answer:
      "This is a learning system with curated prompts, explanations and repeatable patterns instead of one-off hacks.",
  },
  {
    question: "Is the ebook worth it?",
    answer:
      "If you want a deeper system for writing better prompts and getting more consistent results, it is the natural next step.",
  },
  {
    question: "How do I copy and save prompts?",
    answer:
      "Every prompt card includes copy and save actions, and the library keeps your saved prompts organized in one place.",
  },
  {
    question: "Is the content verified?",
    answer:
      "Yes. The library is manually curated and designed to avoid hallucinated claims or unsupported shortcuts.",
  },
];

export const GUIDE_POSTS: GuidePost[] = [
  {
    slug: "how-to-write-better-prompts",
    title: "How to Write Better Prompts",
    description: "A practical framework for writing prompts that produce stronger results.",
    category: "Prompt Basics",
    readTime: "6 min read",
    updatedAt: "2026-06-26",
    excerpt:
      "Better prompts are less about clever wording and more about structure, context and clarity.",
    content: [
      "Start with the outcome you want. A good prompt usually begins with the job you want the AI to do.",
      "Add the context and audience. This is what stops the reply from feeling generic.",
      "Set the format. Tell the model whether you want a summary, list, email, plan or table.",
      "Refine the result. Ask for a version that is shorter, more practical or more persuasive.",
    ],
  },
  {
    slug: "prompt-mistakes-beginners-make",
    title: "Prompt Mistakes Beginners Make",
    description: "The common patterns that lead to weak or generic AI output.",
    category: "Beginner Tips",
    readTime: "5 min read",
    updatedAt: "2026-06-22",
    excerpt: "Most weak prompt results come from missing context, unclear audiences or no format.",
    content: [
      "Vague goals create vague answers. Replace 'help me write better' with a clear outcome.",
      "No audience means no real relevance. Tell the model who the answer is for.",
      "No constraints means no discipline. Ask for length, tone and structure.",
    ],
  },
  {
    slug: "ai-productivity-workflows-that-stick",
    title: "AI Productivity Workflows That Stick",
    description: "A lightweight system for using AI daily without turning it into noise.",
    category: "Workflows",
    readTime: "7 min read",
    updatedAt: "2026-06-19",
    excerpt: "A small routine beats a big pile of random prompts every single time.",
    content: [
      "Choose one repeated task that costs time each week.",
      "Create or reuse one prompt for that task.",
      "Review the first output and refine it once.",
      "Save the prompt so it becomes a repeatable habit.",
    ],
  },
];

export const TRUST_BADGES = [
  "Verified prompt content",
  "Manually curated",
  "No hallucination policy",
  "No API dependency",
];
