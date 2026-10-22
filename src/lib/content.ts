export const SITE_NAME = "PolishPrompt";
export const SITE_URL = "https://polishprompt.tech";
export const AMAZON_URL = "https://amzn.in/d/00vHMnM3";

export type PromptCategory = "business" | "marketing" | "reasoning" | "indian" | "productivity";

export interface PromptVariable {
  id: string;
  label: string;
  example: string;
}

export interface PromptRecord {
  id: string;
  title: string;
  category: PromptCategory;
  template: string;
  variables: PromptVariable[];
  featured: boolean;
}

export interface GuidePost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  updatedAt?: string;
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

export const CATEGORIES: Array<{ name: string; description: string; count: number }> = [
  { name: "business", description: "Business & Operations Excellence", count: 10 },
  { name: "marketing", description: "Marketing, Content & Copywriting", count: 10 },
  { name: "reasoning", description: "Advanced Reasoning & Agentic Frameworks", count: 10 },
  { name: "indian", description: "Local Indian Context & Hinglish Business", count: 10 },
  { name: "productivity", description: "Daily Productivity, Learning & Self-Growth", count: 10 },
];

export const PROMPTS: PromptRecord[] = [
  {
    id: "p1",
    title: "The RACI Matrix Creator",
    category: "business",
    template:
      "Act as an Agile Project Manager. Create a clean Tabular Layout RACI Matrix for our new\nproject: {{var_1}}. Break it down into 5 key phases.\nAnti-Prompts: No conversational filler, start directly with the table.",
    variables: [
      {
        id: "var_1",
        label: "Project Name",
        example: "Launching a Shopify Store",
      },
    ],
    featured: true,
  },
  {
    id: "p2",
    title: "The 80/20 Rule Business Optimizer",
    category: "business",
    template:
      "Analyze my current business operations: {{var_1}}. Use the\nPareto Principle (80/20 Rule) to identify the top 20% tasks causing 80% of the bottlenecks, and\nthe top 20% products driving 80% revenue. Give actionable steps.",
    variables: [
      {
        id: "var_1",
        label: "Describe business",
        example: "I run a local gym",
      },
    ],
    featured: false,
  },
  {
    id: "p3",
    title: "The OKR Architect",
    category: "business",
    template:
      "Convert this broad business goal: '{{var_1}}' into 3\nhighly specific, measurable OKRs (Objectives and Key Results). Use the RISEN framework and\nprovide the output in clean Markdown.",
    variables: [
      {
        id: "var_1",
        label: "e.g., Increase our website sales by next quarter",
        example: "",
      },
    ],
    featured: true,
  },
  {
    id: "p4",
    title: "Automated SOP Generator",
    category: "business",
    template:
      "Write a step-by-step Standard Operating Procedure (SOP) for {{var_1}}. Use a professional and empathetic tone. Include a troubleshooting\nsection for common edge cases.",
    variables: [
      {
        id: "var_1",
        label: "Task",
        example: "Handling a\ncustomer refund request",
      },
    ],
    featured: false,
  },
  {
    id: "p5",
    title: "Competitor SWOT Analysis",
    category: "business",
    template:
      "Act as a Top-tier Market Research Analyst. Conduct a detailed SWOT Analysis comparing my\nbusiness {{var_1}} with our main competitor {{var_2}}. Output\nformat: Bullets under clear H2 headings.",
    variables: [
      {
        id: "var_1",
        label: "Your Business Name/Niche",
        example: "",
      },
      {
        id: "var_2",
        label: "Competitor Name",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p6",
    title: "Pricing Strategy Consultant",
    category: "business",
    template:
      "I am launching {{var_1}}. My target audience is {{var_2}} and my cost per unit is {{var_3}}. Suggest 3 different pricing models\n(Freemium, Tiered, or Value-based) with pros and cons for each.",
    variables: [
      {
        id: "var_1",
        label: "Product Name/Service",
        example: "",
      },
      {
        id: "var_2",
        label: "Audience",
        example: "college\nstudents in India",
      },
      {
        id: "var_3",
        label: "Amount",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p7",
    title: "The Customer Avatar Builder",
    category: "business",
    template:
      "Create a deeply detailed Ideal Customer Persona (Avatar) for a person looking for {{var_1}}. Include Demographics, Psychographics, Core Frustrations, Buying Triggers,\nand Media Consumption Habits.",
    variables: [
      {
        id: "var_1",
        label: "Your\nProduct/Service",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p8",
    title: "Employee Onboarding Blueprint",
    category: "business",
    template:
      "Design a 7-day onboarding schedule for a newly hired {{var_1}} in a\nremote startup setup. Ensure it balances learning, tool setup, and small practical wins.",
    variables: [
      {
        id: "var_1",
        label: "Role",
        example: "Social Media Executive",
      },
    ],
    featured: false,
  },
  {
    id: "p9",
    title: "B2B Cold Email Pitch Master",
    category: "business",
    template:
      "Write a high-converting B2B Cold Email targeting {{var_1}}. Pitch our service: {{var_2}}. Hook them in the first 2 lines. Anti-Prompt: No\ncheesy lines, keep it strictly professional.",
    variables: [
      {
        id: "var_1",
        label: "Target Executive",
        example: "CTOs of tech\ncompanies",
      },
      {
        id: "var_2",
        label: "Your Service",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p10",
    title: "Contract/Agreement Reviewer",
    category: "business",
    template:
      "Act as a corporate legal advisor. Review this clause/agreement text: '{{var_1}}'. Identify any\nhidden risks, unfair liabilities, or ambiguous terms that could harm my business. Give\nsuggestions to rewrite them safely.",
    variables: [
      {
        id: "var_1",
        label: "Paste text",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p11",
    title: "30-Day Social Media Content Calendar",
    category: "marketing",
    template:
      "Act as a Growth Marketer. Create a 30-day Content Calendar grid for {{var_1}} targeting {{var_2}}. Layout: Columns for Day, Topic, Content Hook, and\nCall-to-Action (CTA). Use Hinglish style for hooks.",
    variables: [
      {
        id: "var_1",
        label: "Platform",
        example: "e.g.,\nInstagram",
      },
      {
        id: "var_2",
        label: "Target Audience",
        example: "",
      },
    ],
    featured: true,
  },
  {
    id: "p12",
    title: "The AIDA Framework Ad Copy",
    category: "marketing",
    template:
      "Write a highly engaging ad copy for {{var_1}}. Follow the strict AIDA framework:\nAttention (Hook), Interest (Problem), Desire (Benefits), Action (CTA). Create 3 distinct variations\nwith different hooks.",
    variables: [
      {
        id: "var_1",
        label: "Product Name",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p13",
    title: "The Viral LinkedIn Hook Generator",
    category: "marketing",
    template:
      "Take this boring industry insight: '{{var_1}}'. Rewrite it into 5 punchy, pattern-interrupting\nLinkedIn hooks that compel readers to click 'See More'. Tone: Authoritative yet conversational.",
    variables: [
      {
        id: "var_1",
        label: "Paste text/idea",
        example: "",
      },
    ],
    featured: true,
  },
  {
    id: "p14",
    title: "YouTube Video Script Hook & Outline",
    category: "marketing",
    template:
      "I am making a YouTube video about {{var_1}}. Write a compelling 30-second video opening hook\nthat stops user scroll, followed by a logical 5-point script outline. Style: High energy, relatable.",
    variables: [
      {
        id: "var_1",
        label: "Topic",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p15",
    title: "The SEO Blog Post Architect",
    category: "marketing",
    template:
      "Act as an SEO Expert. Create an optimized H2 and H3 blog post outline for the target keyword:\n'{{var_1}}'. Include a Meta Title and Meta Description that maximizes Click-Through-Rate\n(CTR).",
    variables: [
      {
        id: "var_1",
        label: "Your Keyword",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p16",
    title: "Instagram Reel/TikTok Storyboard",
    category: "marketing",
    template:
      "Create a 15-second visual and audio storyboard for an Instagram Reel about {{var_1}}. Table\nlayout with columns: Visual Scene, On-Screen Text, Audio/Voiceover, and Estimated Duration.",
    variables: [
      {
        id: "var_1",
        label: "Topic",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p17",
    title: "The Email Newsletter Storyteller",
    category: "marketing",
    template:
      "Use the Hook-Story-Offer formula to write an engaging email newsletter for my subscribers.\nTopic: {{var_1}}. Softly transition into promoting our product/service:\n{{var_2}}.",
    variables: [
      {
        id: "var_1",
        label: "Share a mistake or lesson learned",
        example: "",
      },
      {
        id: "var_2",
        label: "Product Link/Name",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p18",
    title: "E-commerce Product Description Maker",
    category: "marketing",
    template:
      "Write an emotional, benefits-driven product description for {{var_1}}. Don't just list\nfeatures; explain how it transforms the user's daily life. Target audience: {{var_2}}.",
    variables: [
      {
        id: "var_1",
        label: "Product Name",
        example: "",
      },
      {
        id: "var_2",
        label: "e.g., Working\nmothers",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p19",
    title: "Brand Tagline/Slogan Brainstormer",
    category: "marketing",
    template:
      "Generate 15 unique, short, and memorable taglines for a brand that sells {{var_1}}.\nCategories requested: 5 Modern/Techy, 5 Emotional, 5 Direct/Factual.",
    variables: [
      {
        id: "var_1",
        label: "Product/Service",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p20",
    title: "Repurposing Engine",
    category: "marketing",
    template:
      "Take this long-form article/video transcript: '{{var_1}}'. Repurpose it into 3 actionable Tweets\n(X posts), 1 short LinkedIn post, and a 50-word summary newsletter.",
    variables: [
      {
        id: "var_1",
        label: "Paste text",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p21",
    title: "Tree of Thoughts",
    category: "reasoning",
    template:
      "Act as 3 independent expert business strategists. Use Tree of Thoughts (ToT) architecture to\nsolve this complex problem: {{var_1}}. Brainstorm step-by-step, critique each other's ideas, and filter down to the single best\nexecution path.",
    variables: [
      {
        id: "var_1",
        label: "Insert Problem",
        example: "Our SaaS churn rate increased by 15% this\nmonth",
      },
    ],
    featured: false,
  },
  {
    id: "p22",
    title: "The 2026 'Bento-Box' XML Debugger",
    category: "reasoning",
    template:
      "I need to debug a critical issue. Use a strict Bento-Box layout.\n{{var_1}}: 1. Identify the logical error. 2. Provide the optimized fix.\n<context_setup> Language: {{var_2}} | Environment: Production </context_setup>\n<error_log> {{var_3}} </error_log>\n<code_snippet> {{var_4}} </code_snippet>",
    variables: [
      {
        id: "var_1",
        label: "TASKS",
        example: "",
      },
      {
        id: "var_2",
        label: "e.g., Python/Node.js",
        example: "",
      },
      {
        id: "var_3",
        label: "Paste your error message here",
        example: "",
      },
      {
        id: "var_4",
        label: "Paste code here",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p23",
    title: "Counterfactual History/Market Analysis",
    category: "reasoning",
    template:
      "Apply Counterfactual Reasoning to my industry: {{var_1}}. Question: 'If {{var_2}}, how will it affect\nconsumer behavior?' Analyze the immediate domino effect.",
    variables: [
      {
        id: "var_1",
        label: "Your Industry/Market",
        example: "",
      },
      {
        id: "var_2",
        label: "A major\ntrend/change",
        example: "if third-party cookies are completely banned tomorrow",
      },
    ],
    featured: false,
  },
  {
    id: "p24",
    title: "Anti-Prompt Clean Coding",
    category: "reasoning",
    template:
      "Write a {{var_1}} function to {{var_2}}.\nAnti-Prompts: No Fluff, No Explanation, No Preamble. Start directly with the markdown code\nblock and add inline code comments only.",
    variables: [
      {
        id: "var_1",
        label: "Language",
        example: "",
      },
      {
        id: "var_2",
        label: "Task",
        example: "validate Indian phone numbers using Regex",
      },
    ],
    featured: false,
  },
  {
    id: "p25",
    title: "The Chain-of-Density Book Summarizer",
    category: "reasoning",
    template:
      "Summarize the core thesis of the book '{{var_1}}' in 300 words. Then, run a Chain of Density\nloop: condense it by 30% into 200 words while making it more information-dense. Finally,\ncondense it to 100 words of pure gold insights.",
    variables: [
      {
        id: "var_1",
        label: "Book Title",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p26",
    title: "The Bayesian Logic Decision Maker",
    category: "reasoning",
    template:
      "I need to make a critical pivot decision. Old Probability: I believed {{var_1}} had a 70% success\nrate. New Data: {{var_2}}. Use Bayesian Reasoning to recalculate the\nsuccess probability and suggest whether I should Pivot or Persevere.",
    variables: [
      {
        id: "var_1",
        label: "Idea A",
        example: "",
      },
      {
        id: "var_2",
        label: "Insert new market event or failure",
        example: "",
      },
    ],
    featured: true,
  },
  {
    id: "p27",
    title: "The Grounded Compliance Checker",
    category: "reasoning",
    template:
      "Act as a strict compliance auditor. Read this company policy document: '{{var_1}}'.\nNow, answer this question: '{{var_2}}'. Grounding Rule: Rely ONLY on the clear facts\nmentioned in the document. If the answer is not present, state 'Information not available in\nsource data'. Do not hallucinate.",
    variables: [
      {
        id: "var_1",
        label: "Paste Document",
        example: "",
      },
      {
        id: "var_2",
        label: "Your Question",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p28",
    title: "Multi-Persona Panel Discussion",
    category: "reasoning",
    template:
      "Act as a panel of 3 distinct experts: (1) A data-driven Growth Hacker, (2) A customer-obsessed\nUX Researcher, and (3) A conservative Chief Financial Officer. Debate this idea: '{{var_1}}'. Show their discussion and final\nconsensus.",
    variables: [
      {
        id: "var_1",
        label: "Your Idea -\ne.g., Automating our customer support with an AI agent",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p29",
    title: "The Prompt Injection Vulnerability Scanner",
    category: "reasoning",
    template:
      "Act as an ethical security researcher. Review this user-input prompt template: '{{var_1}}'. Identify potential loopholes where a malicious user could perform a\n'prompt injection' or 'jailbreak' to bypass constraints. Suggest secure patches.",
    variables: [
      {
        id: "var_1",
        label: "Paste your\nsystem prompt template",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p30",
    title: "Self-Refinement Quality Loop",
    category: "reasoning",
    template:
      "Write a marketing copy for {{var_1}}. Once done, automatically act as your own harshest critic.\nReview the copy for cliches, robotic AI words, and weak verbs. Rewrite the final version based\non your own critique.",
    variables: [
      {
        id: "var_1",
        label: "Product",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p31",
    title: "WhatsApp Business Automated Sequence",
    category: "indian",
    template:
      "Write a 3-part WhatsApp automated message sequence for an Indian e-commerce customer\nwho left items in their cart. Language: Friendly Hinglish. Tone: Helpful, culturally relatable\n(include a sense of urgency without being pushy). Use emojis smartly.",
    variables: [],
    featured: true,
  },
  {
    id: "p32",
    title: "Indian Consumer Psychology Copywriter",
    category: "indian",
    template:
      "Rewrite this formal English product offer into a compelling, emotionally charged pitch targeted\nat Indian middle-class families. Tap into core Indian consumer triggers like 'Value for Money',\n'Family Security', or 'Bachat'. Language: Natural Hinglish.",
    variables: [],
    featured: false,
  },
  {
    id: "p33",
    title: "Festive Season Marketing Campaign",
    category: "indian",
    template:
      "Act as a Creative Director. Brainstorm 5 unique campaign ideas for {{var_1}} for\nthe upcoming {{var_2}} shopping season. Include offer ideas, creative hooks, and\na catchy slogan.",
    variables: [
      {
        id: "var_1",
        label: "Your Business Type",
        example: "",
      },
      {
        id: "var_2",
        label: "Festival",
        example: "Diwali",
      },
    ],
    featured: true,
  },
  {
    id: "p34",
    title: "Local Kirana/Retail Store Digital Expansion",
    category: "indian",
    template:
      "I run a physical {{var_1}} in {{var_2}}. Give me a\nstep-by-step low-budget blueprint to take my business digital using Google My Business,\nWhatsApp Networks, and local Instagram targeting.",
    variables: [
      {
        id: "var_1",
        label: "Store Type",
        example: "clothing boutique/bakery",
      },
      {
        id: "var_2",
        label: "City Name",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p35",
    title: "The Hinglish Explainer",
    category: "indian",
    template:
      "Explain the complex concept of {{var_1}}\nusing the Feynman Technique. Explain it as if you are talking to a 15-year-old Indian student.\nUse daily-life Indian analogies (like cricket, tea stalls, or train journeys). Language: Hinglish.",
    variables: [
      {
        id: "var_1",
        label: "Topic",
        example: "Stock Market Options Trading / Cryptocurrency",
      },
    ],
    featured: false,
  },
  {
    id: "p36",
    title: "Local Influencer Pitch Script",
    category: "indian",
    template:
      "Write a DM (Direct Message) pitch script to collaborate with local micro-influencers in India for\nmy brand {{var_1}}. Offer: {{var_2}}. Keep it casual,\nrespectful, and appealing to creators.",
    variables: [
      {
        id: "var_1",
        label: "Brand Niche",
        example: "",
      },
      {
        id: "var_2",
        label: "e.g., Free product kit + affiliate commission",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p37",
    title: "The Multilingual Glossary Maker",
    category: "indian",
    template:
      "Take this technical text: '{{var_1}}'. Create a 3-column glossary table: Column 1 = Original\nEnglish Term, Column 2 = Pure Hindi Translation (Devanagari), Column 3 = Simplified\nHinglish/Daily life explanation.",
    variables: [
      {
        id: "var_1",
        label: "Paste text",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p38",
    title: "Customer Support Template",
    category: "indian",
    template:
      "Write a customer support email template resolving a delayed delivery issue for an Indian online\nbuyer. Tone: Highly respectful, apologetic, and clear on the resolution timeline. Address\ncommon anxieties about prepaid payments.",
    variables: [],
    featured: false,
  },
  {
    id: "p39",
    title: "Freelance Quote & Invoice Cover Letter",
    category: "indian",
    template:
      "Write a professional email pitch responding to an Indian client looking for a freelance {{var_1}}. Balance professional global standards with local price-negotiation\nboundaries. Tone: Confident, flexible yet firm on value.",
    variables: [
      {
        id: "var_1",
        label: "Your Skill\n- e.g., Website Developer",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p40",
    title: "Micro-Startup Bootstrapping Idea Generator",
    category: "indian",
    template:
      "Generate 5 highly practical, low-investment (under 50k INR) business ideas tailored for the\ncurrent Indian market in {{var_1}}. Focus on high-demand niches like sustainability, local gig\nservices, or AI-assisted micro-agencies.",
    variables: [
      {
        id: "var_1",
        label: "Year 2026",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p41",
    title: "The Ultimate Book Synthesizer",
    category: "productivity",
    template:
      "Act as an expert executive coach. Read the core principles of the book '{{var_1}}'. Convert\nthem into a 5-step action plan that I can easily integrate into my daily routine starting tomorrow.\nFormat: Bullet points.",
    variables: [
      {
        id: "var_1",
        label: "Book Name",
        example: "",
      },
    ],
    featured: true,
  },
  {
    id: "p42",
    title: "80/20 Skill Learning Roadmap",
    category: "productivity",
    template:
      "I want to learn {{var_1}} from scratch. Use the 80/20 rule\nto create a 21-day learning roadmap focusing ONLY on the 20% core sub-skills that deliver 80%\nof practical proficiency.",
    variables: [
      {
        id: "var_1",
        label: "Skill",
        example: "Video Editing using Premiere Pro",
      },
    ],
    featured: false,
  },
  {
    id: "p43",
    title: "Socratic Mentor for Problem Solving",
    category: "productivity",
    template:
      "Act as my intellectual mentor. Do not give me direct answers. Instead, use the Socratic\nMethod—ask me 3 deep, sequential questions about my current life dilemma: '{{var_1}}',\nto help me discover the solution myself.",
    variables: [
      {
        id: "var_1",
        label: "Insert Dilemma",
        example: "",
      },
    ],
    featured: true,
  },
  {
    id: "p44",
    title: "The Mental Model Framework Analyzer",
    category: "productivity",
    template:
      "Analyze this personal career choice: '{{var_1}}'. Evaluate it using 3 classic mental models: First-Principles Thinking,\nSecond-Order Thinking, and Regret Minimization Framework.",
    variables: [
      {
        id: "var_1",
        label: "Describe choice",
        example: "Leaving my stable corporate job\nfor full-time freelancing",
      },
    ],
    featured: false,
  },
  {
    id: "p45",
    title: "Email Inbox Zero Assistant",
    category: "productivity",
    template:
      "Act as my personal executive assistant. Read this long, chaotic email thread: '{{var_1}}'. Summarize it for me in 3 bullet points: (1) What happened, (2) Action items\nspecifically for me, and (3) Reply deadline. Anti-Prompt: Keep it ultra-short.",
    variables: [
      {
        id: "var_1",
        label: "Paste\nThread/Text",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p46",
    title: "Personalized Daily Schedule Optimizer",
    category: "productivity",
    template:
      "Here is my current chaotic daily routine: {{var_1}}. I want to make time for {{var_2}}. Optimize my schedule\nfor peak energy levels and maximum focus blocks.",
    variables: [
      {
        id: "var_1",
        label: "List your current wakeup time, office hours, and sleep\ntime",
        example: "",
      },
      {
        id: "var_2",
        label: "Goal",
        example: "reading books / working out",
      },
    ],
    featured: false,
  },
  {
    id: "p47",
    title: "Complex Data Simplifier",
    category: "productivity",
    template:
      "Take this complex financial/analytics data sheet text: '{{var_1}}'. Turn these\nboring numbers into a compelling narrative story that can be easily understood by a\nnon-technical board member.",
    variables: [
      {
        id: "var_1",
        label: "Paste raw data/numbers",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p48",
    title: "Creative Writer's Block Breaker",
    category: "productivity",
    template:
      "I am writing a story/article about {{var_1}}. Generate 5 unexpected plot twists or unique\nangles that defy standard cliches, along with a powerful metaphors I can use.",
    variables: [
      {
        id: "var_1",
        label: "Core Idea",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p49",
    title: "Mock Interviewer",
    category: "productivity",
    template:
      "Act as an elite interviewer for the position of {{var_1}}. Ask me 1 challenging behavioral\ninterview question at a time. Wait for my answer. After I reply, evaluate my response based on\nthe STAR framework, give constructive feedback, and then ask the next question.",
    variables: [
      {
        id: "var_1",
        label: "Job Role",
        example: "",
      },
    ],
    featured: false,
  },
  {
    id: "p50",
    title: "The Weekly Self-Reflection Coach",
    category: "productivity",
    template:
      "Act as a high-performance psychologist. Conduct my weekly review. Ask me 4 deep questions\nregarding my productivity, emotional state, major wins, and friction",
    variables: [],
    featured: false,
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
    title: "How to Write Better AI Prompts",
    description:
      "A practical framework for writing prompts that produce stronger results with ChatGPT, Claude, and Gemini.",
    category: "Prompt Basics",
    readTime: "18 min read",
    excerpt:
      "Better prompts are less about clever wording and more about structure, context, and clarity. This guide teaches a repeatable framework for writing prompts that produce useful, reliable results.",
    content: [
      "## Introduction: Why Prompts Matter",
      "AI models don't read minds—they follow instructions. The quality of what you get out depends almost entirely on what you put in. This guide teaches a practical, repeatable framework for writing prompts that consistently produce useful, reliable results with major AI models like ChatGPT, Claude, and Gemini.",
      "### Learning Objectives",
      "By the end of this guide, you will be able to:",
      "- Explain what prompt engineering is and why it matters",
      "- Apply a structured prompt-design framework to any task",
      "- Diagnose and fix common prompt failures",
      "- Adapt prompts across different models (ChatGPT, Claude, Gemini)",
      "- Evaluate AI output for accuracy and usefulness",
      "- Use reusable templates for common tasks",
      "---",
      "## What Is a Prompt (and What Is Prompt Engineering)?",
      "A **prompt** is the instruction you give an AI model to get a specific result. It can be a question, a command, a partial sentence to complete, or a structured set of instructions.",
      "**Prompt engineering** is the practice of designing those instructions so the model reliably produces the output you need. It's not magic—it's a communication skill. Like any skill, it improves with deliberate practice and a few reliable patterns.",
      "### What Prompt Engineering Is Not",
      '- It is not a bag of secret "magic words" that unlock hidden capabilities',
      "- It is not a substitute for domain knowledge or critical thinking",
      "- It does not guarantee correct or truthful outputs—models can still hallucinate",
      "---",
      "## The Prompt Design Framework: A 7-Point Checklist",
      "Not every prompt needs all seven elements. For simple requests, Goal + Output may be enough. For complex or high-stakes tasks, use the full checklist.",
      "| Element | Question to Answer | Example |",
      "|---------|-------------------|---------|",
      '| **Goal** | What result do you need? | "Write a cold email to book a demo meeting" |',
      '| **Context** | What background info matters? | "SaaS startup, selling to HR directors at 200–500 person companies" |',
      '| **Inputs** | What source material or examples do you have? | "Our pricing page: [URL], customer testimonial: [text]" |',
      '| **Instructions** | What should the model do step by step? | "1. Hook with a relevant pain point 2. Connect to their role 3. One-sentence value prop 4. Low-friction CTA" |',
      '| **Constraints** | What boundaries apply? | "Under 120 words, no jargon, professional but warm tone" |',
      '| **Output** | What format and detail level? | "Plain text email, subject line + body, under 150 words" |',
      '| **Evaluation** | How will you check and improve the result? | "Does it mention the pain point? Is the CTA one clear ask? Is it under 150 words?" |',
      "### When to Use Each Element",
      '- **Quick question** → Goal + Output ("Summarize this in 3 bullets")',
      '- **Creative task** → Goal + Context + Output ("Write a blog intro for [topic] for [audience]")',
      '- **High-stakes / complex** → Full checklist ("Analyze this contract for risks and suggest revisions")',
      "---",
      "## Step-by-Step Walkthrough: From Vague to Precise",
      "### Before: A Vague Prompt",
      '> "Help me write better emails."',
      "### Problems with this prompt:",
      "- No goal (what kind of emails? sales? follow-ups? newsletters?)",
      "- No context (who are you? who is the audience?)",
      "- No format (template? examples? critique?)",
      "- No constraints (length? tone? structure?)",
      "### After: A Structured Prompt",
      "```",
      'Goal: Write a follow-up email after a discovery call with a potential B2B SaaS client.\n\nContext:\n- I\'m a sales rep at a workflow automation startup (50 employees)\n- Prospect: VP of Operations at a 300-person manufacturing company\n- Call went well—they admitted their current manual process loses ~15 hrs/week\n- They asked for a follow-up email with "next steps"\n\nInputs:\n- Call recording summary: [paste summary or key points]\n- Our one-pager: [link or key value props]\n\nInstructions:\n1. Subject line: Reference the specific pain point (15 hrs/week lost)\n2. Opening: Thank them + reference the exact insight from the call\n2. Value: One sentence connecting their 15 hrs/week to our solution\n3. Social proof: One sentence with a relevant customer result\n4. CTA: Single, low-friction next step (15-min calendar link)\n\nConstraints:\n- Under 130 words total\n- Professional but warm, not salesy\n- No jargon, no buzzwords\n- No markdown formatting in the email body\n\nOutput:\nPlain text email with subject line and body. Under 130 words total.\n```',
      "### Result Comparison",
      "| Aspect | Before | After |",
      "|--------|--------|-------|",
      '| Specificity | Generic "emails" | Targeted follow-up email |',
      "| Context | None | Role, company, prospect, call details |",
      "| Actionability | Low—model guesses | High—step-by-step instructions |",
      "| Usability | Needs heavy editing | Near-ready to send |",
      "---",
      "## Practical Prompt Templates (Copy & Adapt)",
      "### Template 1: Learning & Synthesis",
      "```\nGoal: Learn [topic] efficiently\n\nContext: I'm a [role] with [current knowledge level]. I want to apply this to [specific use case].\n\nInstructions:\n1. Explain the core concept in plain language (2–3 sentences)\n2. Give 3 practical examples relevant to my use case\n3. List 3 common misconceptions\n4. Suggest a 30-minute practice exercise for this week\n\nConstraints:\n- Plain language, no academic jargon\n- Examples must relate to [my field]\n\nOutput:\nStructured response with clear headings. Under 400 words.\n```",
      "### Template 2: Content Creation",
      "```\nGoal: Create [content type] about [topic]\n\nContext: Audience is [specific audience]. Platform: [LinkedIn / blog / email / etc.]. Goal: [inform / persuade / entertain].\n\nInputs: Key points to cover: [list]. Source material: [links or text].\n\nInstructions:\n1. Hook: One sentence that stops the scroll\n2. Body: 3–5 key points with brief explanations\n3. One concrete example or story\n4. Clear takeaway or CTA\n\nConstraints:\n- [Word count / character limit]\n- Tone: [professional / conversational / authoritative]\n- No buzzwords: [list words to avoid]\n\nOutput:\nReady-to-post [format] with headline.\n```",
      "### Template 3: Analysis & Decision Support",
      "```\nGoal: Help me evaluate [decision / option A vs B]\n\nContext: [Background: role, constraints, stakes, timeline]\n\nInputs: Relevant data, criteria, or constraints: [list]\n\nInstructions:\n1. Restate the decision in your own words\n2. List 3–5 key criteria for a good decision here\n3. Score each option on each criterion (1–5) with brief reasoning\n4. Identify the biggest uncertainty or risk for each option\n5. Recommend a next step (not the final decision—just the next action)\n\nConstraints:\n- No recommendation without reasoning\n- Flag any missing information I should gather\n\nOutput:\nStructured analysis table + 3-bullet summary.\n```",
      "### Template 4: Code & Technical Tasks",
      "```\nGoal: [Write / debug / refactor / explain] code for [task]\n\nContext: Language: [Python / TypeScript / etc.]. Environment: [framework, version]. Constraints: [performance, dependencies, style guide].\n\nInputs: Existing code: [paste]. Error message: [paste]. Requirements: [list].\n\nInstructions:\n1. Identify the issue or goal in one sentence\n2. Provide the solution with inline comments\n3. Explain the key design choices\n4. Note any trade-offs or limitations\n5. Suggest tests or validation steps\n\nConstraints:\n- Follow [style guide / conventions]\n- No unnecessary dependencies\n- Explain non-obvious logic\n\nOutput:\nCode block with comments + brief explanation.\n```",
      "---",
      "## Advanced Techniques & When to Use Them",
      "### Few-Shot Prompting",
      "Provide 2–5 examples of input→output pairs before asking for your actual task. Use when: the pattern is hard to describe but easy to show.",
      '```\nClassify these customer messages as: Billing, Technical, Account, or Other.\n\nExample 1:\nInput: "I was charged twice for my subscription last month."\nOutput: Billing\n\nExample 2:\nInput: "The mobile app crashes when I try to upload a photo."\nOutput: Technical\n\nExample 3:\nInput: "How do I change my email address?"\nOutput: Account\n\nNow classify:\nInput: "I want to cancel my subscription but keep my data."\nOutput:',
      "```",
      "### Chain-of-Thought (Reasoning)",
      "Ask the model to show its reasoning step by step. Use when: the task requires multi-step reasoning, math, or logic.",
      "```\nProblem: A SaaS company has 1,200 customers. Monthly churn is 3%. They acquire 50 new customers/month. How many customers in 12 months?\n\nThink step by step:\n1. Calculate monthly loss from churn\n2. Calculate net change per month\n3. Project over 12 months\n3. Show final answer\n\nShow your work.",
      "```",
      "### Role / Persona Prompting",
      "Assign a specific perspective. Use when: you need a specific tone, expertise, or audience awareness.",
      "```\nAct as a senior UX researcher who has run 200+ usability tests for B2B SaaS products. Review this onboarding flow description and identify the top 3 usability risks a new user would face. Be specific—cite the exact step and why it's a risk.",
      "```",
      "### Chain-of-Density (Summarization)",
      "Iteratively compress a summary while increasing information density. Use when: you need a concise summary that retains maximum insight.",
      "```\nSummarize this article in 100 words. Then condense to 50 words while keeping the key insights. Then condense to 25 words of pure signal.",
      "```",
      "### Self-Critique / Refinement Loop",
      "Ask the model to critique its own output and improve it. Use when: first draft isn't quite right.",
      "```\nWrite a LinkedIn post about [topic]. Once done, act as your own harsh critic:\n1. Identify 3 weak points (cliches, vague claims, passive voice)\n2. Rewrite fixing those issues\n3. Give a 1-sentence rationale for each change",
      "```",
      "### When NOT to Use Advanced Techniques",
      "- Simple questions don't need few-shot examples",
      "- Creative writing often works better with constraints than examples",
      "- If the model already does the task well, don't over-engineer",
      "---",
      "## Platform-Specific Guidance",
      "While core prompting principles transfer, each platform has unique strengths and documentation.",
      "### ChatGPT (OpenAI)",
      "- Strong at creative writing, coding, analysis, and reasoning",
      "- Supports system messages for persistent instructions",
      "- **Documentation:** https://platform.openai.com/docs/guides/prompt-engineering",
      "### Claude (Anthropic)",
      "- Strong at long-context analysis, nuanced writing, and following complex instructions",
      "- Excels at following detailed constraints and XML/structured formatting",
      "- **Documentation:** https://docs.anthropic.com/claude/docs/prompt-engineering-overview",
      "### Gemini (Google)",
      "- Strong at multimodal tasks (text + images), long context windows",
      "- Integrates with Google Workspace and search grounding",
      "- **Documentation:** https://ai.google.dev/docs/prompting_overview",
      "### NVIDIA / Research Models",
      "- Specialized for few-shot learning, model customization, and technical domains",
      "- **Documentation:** https://docs.nvidia.com/",
      "### Key Differences to Watch",
      "| Aspect | ChatGPT | Claude | Gemini |",
      "|--------|---------|--------|--------|",
      "| Context window | 128K–200K | 200K | 1M–2M |",
      "| Structured output | Good | Excellent | Good |",
      "| Long docs analysis | Good | Excellent | Excellent |",
      "| Code generation | Excellent | Excellent | Good |",
      "| Creative writing | Excellent | Excellent | Good |",
      "| Safety / refusals | Moderate | Conservative | Moderate |",
      "---",
      "## Common Mistakes & Troubleshooting",
      "| Mistake | Symptom | Fix |",
      "|---------|---------|-----|",
      "| Vague goal | Generic, off-target output | Define the exact outcome in one sentence |",
      "| Missing context | Generic, irrelevant output | Add role, audience, background |",
      "| No format specified | Wrong structure (paragraph vs list vs table) | Specify: table, list, JSON, email, etc. |",
      "| No constraints | Rambling, wrong tone, too long | Add word count, tone, forbidden words |",
      "| One giant prompt | Confused, incomplete output | Break into steps or use chain-of-thought |",
      "| No examples for complex patterns | Inconsistent format | Add 2–3 few-shot examples |",
      "| Expecting factual accuracy | Plausible but wrong answers | Add verification step; never trust blindly |",
      "| Single prompt for complex task | Missed steps, shallow analysis | Break into steps; use chain-of-thought |",
      "| Ignoring model differences | Inconsistent results across models | Test on target model; adapt constraints |",
      "### Troubleshooting Checklist",
      "When output isn't right, run through this sequence:",
      "1. **Is the goal unambiguous?** Rewrite the goal in one sentence.",
      "2. **Is context sufficient?** Add role, audience, background.",
      "3. **Is the format explicit?** Specify exact output structure.",
      "4. **Are constraints clear?** Word count, tone, forbidden content.",
      "5. **Would examples help?** Add 2–3 few-shot pairs.",
      "5. **Is the task too big?** Break into steps or chain-of-thought.",
      "7. **Test on target model.** Different models need different tuning.",
      "---",
      "## Prompt Evaluation Checklist",
      "Use this before sending a high-stakes prompt:",
      "□ Goal: Can I state the desired outcome in one clear sentence?\n□ Context: Did I include role, audience, and relevant background?\n□ Inputs: Did I provide source material, examples, or data?\n□ Instructions: Are the steps clear, ordered, and unambiguous?\n□ Constraints: Word count? Tone? Forbidden words? Format?\n□ Output: Exact format specified (JSON, table, email, markdown)?\n□ Evaluation: How will I verify the result? What would make me reject it?\n□ Safety: No confidential data? No request for unverified facts as truth?\n□ Model fit: Tested on the actual model I'll use in production?",
      "---",
      "## Privacy, Factual Verification & Responsible Use",
      "### Privacy & Data Safety",
      "- **Never** paste passwords, API keys, PII, confidential business data, or customer records into prompts unless you have explicit authorization and understand the provider's data retention policies.",
      "- Use placeholder values (e.g., `{{CUSTOMER_EMAIL}}`) in prompt templates; substitute real data only at runtime in a secure environment.",
      "- Review your AI provider's data usage and training policies before sending sensitive content.",
      "### Factual Verification",
      "- **Models hallucinate.** They generate plausible-sounding but incorrect facts, citations, code, and logic.",
      "- **Always verify** consequential claims (medical, legal, financial, technical specs, citations) against primary sources.",
      "- Treat model output as a draft requiring verification, not a final answer.",
      "- For critical tasks, add an explicit verification step: \"Cite sources for every factual claim. If unsure, say 'I don't know.'\"",
      "### Responsible Use",
      "- Do not use AI to generate deceptive content, impersonate others, or automate harmful actions.",
      "- Disclose AI assistance where transparency is expected (academic, journalistic, professional contexts).",
      "- Respect intellectual property—don't use AI to reproduce copyrighted works without permission.",
      "- Monitor for bias in outputs, especially in hiring, lending, medical, or legal contexts.",
      "---",
      "## Practical Exercise",
      "### Exercise: Transform a Vague Request into a Structured Prompt",
      '**Starting request:** "Write a blog post about AI productivity."\n\n**Your task:** Apply the 7-point checklist to rewrite this as a structured prompt.\n\n**Sample answer:**',
      '```\nGoal: Write a 1,200-word blog post for solo founders on using AI to reclaim 5+ hours/week.\n\nContext: Audience = solo founders / indie hackers (technical but time-poor). Tone = practical, credible, not hypey. Goal = actionable systems, not tool lists.\n\nInputs: My framework: [paste 5-step framework]. Two case studies: [paste summaries].\n\nInstructions:\n1. Hook: One specific, relatable pain point (e.g., "You\'re drowning in admin work")\n2. Thesis: One sentence—AI can reclaim 5+ hrs/week if you systematize it\n3. Framework: 5 steps with one concrete example each (use my framework)\n4. Case study 1: Solo founder reclaimed 6 hrs/wk with email automation\n5. Case study 2: Indie hacker cut content creation from 6 hrs → 1 hr\n6. Implementation checklist: 3 things to do this week\n7. Closing: One sentence on the mindset shift (tool → system)\n\nConstraints:\n- ~1,200 words\n- Tone: Experienced peer, not guru. No hype words ("revolutionize," "game-changer," "unleash")\n- No AI-generated fluff phrases ("in today\'s world," "delve," "tapestry")\n- Use H2/H3 headers, bullet points, one comparison table\n\nOutput:\nMarkdown blog post with H1, H2/H3, table, code blocks where relevant.\n```',
      "---",
      "## FAQ",
      "### What is prompt engineering?",
      "Prompt engineering is the practice of designing clear, structured instructions so AI models produce useful, reliable outputs. It's a communication skill, not a bag of magic words.",
      "### Do I need to pay for ChatGPT Plus / Claude Pro / Gemini Advanced?",
      "No. The techniques in this guide work with free tiers of major AI tools. Paid tiers offer larger context windows, faster responses, and priority access—not fundamentally better prompt understanding.",
      "### Do these prompts work on all models?",
      "Core principles transfer, but each model has quirks. Test on your target model. See the **Platform-Specific Guidance** section for key differences.",
      "### How do I know if my prompt is good?",
      "Use the **Prompt Evaluation Checklist**. If you can't state the goal in one sentence, the prompt needs work.",
      "### What if the model gives a wrong answer?",
      "Models hallucinate. Add verification steps for consequential claims. Never trust model output blindly for medical, legal, financial, or safety-critical decisions.",
      "### Can I use these prompts commercially?",
      "Yes. The templates and techniques are general prompting patterns. Adapt them to your use case. Check your AI provider's terms for commercial use of outputs.",
      "### How do I handle sensitive data?",
      "Never paste real passwords, PII, or confidential data into prompts. Use placeholders in templates; substitute real data only in secure, authorized environments.",
      "---",
      "## Sources, Methodology & Limitations",
      "### How This Guide Was Developed",
      "This guide independently synthesizes publicly available educational and technical resources from official documentation and reputable educational institutions. It does not represent endorsed, certified, or sponsored content from any organization mentioned.",
      "### Primary Sources",
      "- **MIT Sloan Teaching & Learning Technologies** — Introductory prompting techniques, context, specificity, iteration, privacy, and limitations (https://teaching.mit.edu/teaching-resources/teaching-with-ai/prompt-engineering/)\n- **OpenAI Prompt Engineering Guide** — Prompt clarity, instruction structure, examples, iterative improvement (https://platform.openai.com/docs/guides/prompt-engineering)\n- **Anthropic Prompt Engineering Overview** — Context, examples, explicit instructions, structured prompts, output control (https://docs.anthropic.com/claude/docs/prompt-engineering-overview)\n- **Google AI for Developers: Prompting Overview** — Prompt structure, examples, context, task decomposition (https://ai.google.dev/docs/prompting_overview)\n- **NVIDIA Technical Resources** — Few-shot prompting, model customization, related technical concepts (https://docs.nvidia.com/)\n- **Wikipedia: Prompt Engineering** — General overview of terminology, techniques, and limitations (https://en.wikipedia.org/wiki/Prompt_engineering)",
      "### Methodology",
      "This guide was developed by analyzing the above sources, extracting recurring patterns and principles, organizing them into a learnable framework, and adding original explanations, templates, and examples. No source was copied verbatim; all content is original synthesis.",
      "### Limitations & Disclaimers",
      "- **No institutional endorsement.** MIT, OpenAI, Anthropic, Google, NVIDIA, and Wikipedia do not endorse, certify, sponsor, or approve PolishPrompt or this guide.\n- **Not model-specific documentation.** Official platform documentation should be consulted for platform-specific implementation details, API parameters, and version-specific behavior.\n- **No performance guarantees.** Prompting techniques do not guarantee correct outputs. Models can produce plausible but incorrect answers (hallucinations).\n- **Model behavior varies.** Techniques may behave differently across models, versions, and contexts. Always test on your target model.\n- **No substituted professional advice.** This guide does not substitute legal, medical, financial, or engineering professional judgment. Verify consequential outputs with qualified experts.\n- **Privacy reminder.** Do not submit passwords, confidential records, or sensitive business data without understanding your AI provider's data policies.\n- **No fabricated credentials.** This guide uses no invented author biographies, expert reviews, peer-review claims, or institutional endorsements.",
      "---",
      "## Further Reading & Next Steps",
      "### Official Documentation",
      "- OpenAI: https://platform.openai.com/docs/guides/prompt-engineering\n- Anthropic: https://docs.anthropic.com/claude/docs/prompt-engineering-overview\n- Google AI: https://ai.google.dev/docs/prompting_overview\n- NVIDIA: https://docs.nvidia.com/",
      "### PolishPrompt Resources",
      "- **Browse the Prompt Library** → [/library](/library) — 50+ copy-ready prompts across business, marketing, reasoning, Indian context, and productivity\n- **Prompt Mistakes Beginners Make** → [/guides/prompt-mistakes-beginners-make](/guides/prompt-mistakes-beginners-make)\n- **AI Productivity Workflows That Stick** → [/guides/ai-productivity-workflows-that-stick](/guides/ai-productivity-workflows-that-stick)",
      "### Next Learning Steps",
      "1. **Pick one template** from this guide and use it for a real task this week\n2. **Save your refined version** in the Prompt Library for reuse\n3. **Try an advanced technique** (few-shot, chain-of-thought) on a task you've struggled with\n4. **Read the platform docs** for your primary AI tool to learn model-specific features",
      "---",
      "## Final CTA",
      "Ready to put this into practice?",
      '<div class="cta-section">',
      '  <a href="/library" class="btn-primary">Browse the Prompt Library</a>',
      '  <a href="https://amzn.in/d/00vHMnM3" class="btn-secondary" target="_blank" rel="noopener">Get the eBook: Smart Prompts, Smart Results</a>',
      "</div>",
      "The guide remains independently useful—whether you explore the library, get the eBook, or just apply the framework to your next prompt.",
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
