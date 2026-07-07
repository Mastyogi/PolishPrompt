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


export const CATEGORIES: Array<{ name: string; description: string; count: number }> = [
  { name: "business", description: "Business & Operations Excellence", count: 10 },
  { name: "marketing", description: "Marketing, Content & Copywriting", count: 10 },
  { name: "reasoning", description: "Advanced Reasoning & Agentic Frameworks", count: 10 },
  { name: "indian", description: "Local Indian Context & Hinglish Business", count: 10 },
  { name: "productivity", description: "Daily Productivity, Learning & Self-Growth", count: 10 },
];

export const PROMPTS: PromptRecord[] = [
  {
    "id": "p1",
    "title": "The RACI Matrix Creator",
    "category": "business",
    "template": "Act as an Agile Project Manager. Create a clean Tabular Layout RACI Matrix for our new\nproject: {{var_1}}. Break it down into 5 key phases.\nAnti-Prompts: No conversational filler, start directly with the table.",
    "variables": [
      {
        "id": "var_1",
        "label": "Project Name",
        "example": "Launching a Shopify Store"
      }
    ],
    "featured": true
  },
  {
    "id": "p2",
    "title": "The 80/20 Rule Business Optimizer",
    "category": "business",
    "template": "Analyze my current business operations: {{var_1}}. Use the\nPareto Principle (80/20 Rule) to identify the top 20% tasks causing 80% of the bottlenecks, and\nthe top 20% products driving 80% revenue. Give actionable steps.",
    "variables": [
      {
        "id": "var_1",
        "label": "Describe business",
        "example": "I run a local gym"
      }
    ],
    "featured": false
  },
  {
    "id": "p3",
    "title": "The OKR Architect",
    "category": "business",
    "template": "Convert this broad business goal: '{{var_1}}' into 3\nhighly specific, measurable OKRs (Objectives and Key Results). Use the RISEN framework and\nprovide the output in clean Markdown.",
    "variables": [
      {
        "id": "var_1",
        "label": "e.g., Increase our website sales by next quarter",
        "example": ""
      }
    ],
    "featured": true
  },
  {
    "id": "p4",
    "title": "Automated SOP Generator",
    "category": "business",
    "template": "Write a step-by-step Standard Operating Procedure (SOP) for {{var_1}}. Use a professional and empathetic tone. Include a troubleshooting\nsection for common edge cases.",
    "variables": [
      {
        "id": "var_1",
        "label": "Task",
        "example": "Handling a\ncustomer refund request"
      }
    ],
    "featured": false
  },
  {
    "id": "p5",
    "title": "Competitor SWOT Analysis",
    "category": "business",
    "template": "Act as a Top-tier Market Research Analyst. Conduct a detailed SWOT Analysis comparing my\nbusiness {{var_1}} with our main competitor {{var_2}}. Output\nformat: Bullets under clear H2 headings.",
    "variables": [
      {
        "id": "var_1",
        "label": "Your Business Name/Niche",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Competitor Name",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p6",
    "title": "Pricing Strategy Consultant",
    "category": "business",
    "template": "I am launching {{var_1}}. My target audience is {{var_2}} and my cost per unit is {{var_3}}. Suggest 3 different pricing models\n(Freemium, Tiered, or Value-based) with pros and cons for each.",
    "variables": [
      {
        "id": "var_1",
        "label": "Product Name/Service",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Audience",
        "example": "college\nstudents in India"
      },
      {
        "id": "var_3",
        "label": "Amount",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p7",
    "title": "The Customer Avatar Builder",
    "category": "business",
    "template": "Create a deeply detailed Ideal Customer Persona (Avatar) for a person looking for {{var_1}}. Include Demographics, Psychographics, Core Frustrations, Buying Triggers,\nand Media Consumption Habits.",
    "variables": [
      {
        "id": "var_1",
        "label": "Your\nProduct/Service",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p8",
    "title": "Employee Onboarding Blueprint",
    "category": "business",
    "template": "Design a 7-day onboarding schedule for a newly hired {{var_1}} in a\nremote startup setup. Ensure it balances learning, tool setup, and small practical wins.",
    "variables": [
      {
        "id": "var_1",
        "label": "Role",
        "example": "Social Media Executive"
      }
    ],
    "featured": false
  },
  {
    "id": "p9",
    "title": "B2B Cold Email Pitch Master",
    "category": "business",
    "template": "Write a high-converting B2B Cold Email targeting {{var_1}}. Pitch our service: {{var_2}}. Hook them in the first 2 lines. Anti-Prompt: No\ncheesy lines, keep it strictly professional.",
    "variables": [
      {
        "id": "var_1",
        "label": "Target Executive",
        "example": "CTOs of tech\ncompanies"
      },
      {
        "id": "var_2",
        "label": "Your Service",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p10",
    "title": "Contract/Agreement Reviewer",
    "category": "business",
    "template": "Act as a corporate legal advisor. Review this clause/agreement text: '{{var_1}}'. Identify any\nhidden risks, unfair liabilities, or ambiguous terms that could harm my business. Give\nsuggestions to rewrite them safely.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste text",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p11",
    "title": "30-Day Social Media Content Calendar",
    "category": "marketing",
    "template": "Act as a Growth Marketer. Create a 30-day Content Calendar grid for {{var_1}} targeting {{var_2}}. Layout: Columns for Day, Topic, Content Hook, and\nCall-to-Action (CTA). Use Hinglish style for hooks.",
    "variables": [
      {
        "id": "var_1",
        "label": "Platform",
        "example": "e.g.,\nInstagram"
      },
      {
        "id": "var_2",
        "label": "Target Audience",
        "example": ""
      }
    ],
    "featured": true
  },
  {
    "id": "p12",
    "title": "The AIDA Framework Ad Copy",
    "category": "marketing",
    "template": "Write a highly engaging ad copy for {{var_1}}. Follow the strict AIDA framework:\nAttention (Hook), Interest (Problem), Desire (Benefits), Action (CTA). Create 3 distinct variations\nwith different hooks.",
    "variables": [
      {
        "id": "var_1",
        "label": "Product Name",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p13",
    "title": "The Viral LinkedIn Hook Generator",
    "category": "marketing",
    "template": "Take this boring industry insight: '{{var_1}}'. Rewrite it into 5 punchy, pattern-interrupting\nLinkedIn hooks that compel readers to click 'See More'. Tone: Authoritative yet conversational.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste text/idea",
        "example": ""
      }
    ],
    "featured": true
  },
  {
    "id": "p14",
    "title": "YouTube Video Script Hook & Outline",
    "category": "marketing",
    "template": "I am making a YouTube video about {{var_1}}. Write a compelling 30-second video opening hook\nthat stops user scroll, followed by a logical 5-point script outline. Style: High energy, relatable.",
    "variables": [
      {
        "id": "var_1",
        "label": "Topic",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p15",
    "title": "The SEO Blog Post Architect",
    "category": "marketing",
    "template": "Act as an SEO Expert. Create an optimized H2 and H3 blog post outline for the target keyword:\n'{{var_1}}'. Include a Meta Title and Meta Description that maximizes Click-Through-Rate\n(CTR).",
    "variables": [
      {
        "id": "var_1",
        "label": "Your Keyword",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p16",
    "title": "Instagram Reel/TikTok Storyboard",
    "category": "marketing",
    "template": "Create a 15-second visual and audio storyboard for an Instagram Reel about {{var_1}}. Table\nlayout with columns: Visual Scene, On-Screen Text, Audio/Voiceover, and Estimated Duration.",
    "variables": [
      {
        "id": "var_1",
        "label": "Topic",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p17",
    "title": "The Email Newsletter Storyteller",
    "category": "marketing",
    "template": "Use the Hook-Story-Offer formula to write an engaging email newsletter for my subscribers.\nTopic: {{var_1}}. Softly transition into promoting our product/service:\n{{var_2}}.",
    "variables": [
      {
        "id": "var_1",
        "label": "Share a mistake or lesson learned",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Product Link/Name",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p18",
    "title": "E-commerce Product Description Maker",
    "category": "marketing",
    "template": "Write an emotional, benefits-driven product description for {{var_1}}. Don't just list\nfeatures; explain how it transforms the user's daily life. Target audience: {{var_2}}.",
    "variables": [
      {
        "id": "var_1",
        "label": "Product Name",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "e.g., Working\nmothers",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p19",
    "title": "Brand Tagline/Slogan Brainstormer",
    "category": "marketing",
    "template": "Generate 15 unique, short, and memorable taglines for a brand that sells {{var_1}}.\nCategories requested: 5 Modern/Techy, 5 Emotional, 5 Direct/Factual.",
    "variables": [
      {
        "id": "var_1",
        "label": "Product/Service",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p20",
    "title": "Repurposing Engine",
    "category": "marketing",
    "template": "Take this long-form article/video transcript: '{{var_1}}'. Repurpose it into 3 actionable Tweets\n(X posts), 1 short LinkedIn post, and a 50-word summary newsletter.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste text",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p21",
    "title": "Tree of Thoughts",
    "category": "reasoning",
    "template": "Act as 3 independent expert business strategists. Use Tree of Thoughts (ToT) architecture to\nsolve this complex problem: {{var_1}}. Brainstorm step-by-step, critique each other's ideas, and filter down to the single best\nexecution path.",
    "variables": [
      {
        "id": "var_1",
        "label": "Insert Problem",
        "example": "Our SaaS churn rate increased by 15% this\nmonth"
      }
    ],
    "featured": false
  },
  {
    "id": "p22",
    "title": "The 2026 'Bento-Box' XML Debugger",
    "category": "reasoning",
    "template": "I need to debug a critical issue. Use a strict Bento-Box layout.\n{{var_1}}: 1. Identify the logical error. 2. Provide the optimized fix.\n<context_setup> Language: {{var_2}} | Environment: Production </context_setup>\n<error_log> {{var_3}} </error_log>\n<code_snippet> {{var_4}} </code_snippet>",
    "variables": [
      {
        "id": "var_1",
        "label": "TASKS",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "e.g., Python/Node.js",
        "example": ""
      },
      {
        "id": "var_3",
        "label": "Paste your error message here",
        "example": ""
      },
      {
        "id": "var_4",
        "label": "Paste code here",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p23",
    "title": "Counterfactual History/Market Analysis",
    "category": "reasoning",
    "template": "Apply Counterfactual Reasoning to my industry: {{var_1}}. Question: 'If {{var_2}}, how will it affect\nconsumer behavior?' Analyze the immediate domino effect.",
    "variables": [
      {
        "id": "var_1",
        "label": "Your Industry/Market",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "A major\ntrend/change",
        "example": "if third-party cookies are completely banned tomorrow"
      }
    ],
    "featured": false
  },
  {
    "id": "p24",
    "title": "Anti-Prompt Clean Coding",
    "category": "reasoning",
    "template": "Write a {{var_1}} function to {{var_2}}.\nAnti-Prompts: No Fluff, No Explanation, No Preamble. Start directly with the markdown code\nblock and add inline code comments only.",
    "variables": [
      {
        "id": "var_1",
        "label": "Language",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Task",
        "example": "validate Indian phone numbers using Regex"
      }
    ],
    "featured": false
  },
  {
    "id": "p25",
    "title": "The Chain-of-Density Book Summarizer",
    "category": "reasoning",
    "template": "Summarize the core thesis of the book '{{var_1}}' in 300 words. Then, run a Chain of Density\nloop: condense it by 30% into 200 words while making it more information-dense. Finally,\ncondense it to 100 words of pure gold insights.",
    "variables": [
      {
        "id": "var_1",
        "label": "Book Title",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p26",
    "title": "The Bayesian Logic Decision Maker",
    "category": "reasoning",
    "template": "I need to make a critical pivot decision. Old Probability: I believed {{var_1}} had a 70% success\nrate. New Data: {{var_2}}. Use Bayesian Reasoning to recalculate the\nsuccess probability and suggest whether I should Pivot or Persevere.",
    "variables": [
      {
        "id": "var_1",
        "label": "Idea A",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Insert new market event or failure",
        "example": ""
      }
    ],
    "featured": true
  },
  {
    "id": "p27",
    "title": "The Grounded Compliance Checker",
    "category": "reasoning",
    "template": "Act as a strict compliance auditor. Read this company policy document: '{{var_1}}'.\nNow, answer this question: '{{var_2}}'. Grounding Rule: Rely ONLY on the clear facts\nmentioned in the document. If the answer is not present, state 'Information not available in\nsource data'. Do not hallucinate.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste Document",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Your Question",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p28",
    "title": "Multi-Persona Panel Discussion",
    "category": "reasoning",
    "template": "Act as a panel of 3 distinct experts: (1) A data-driven Growth Hacker, (2) A customer-obsessed\nUX Researcher, and (3) A conservative Chief Financial Officer. Debate this idea: '{{var_1}}'. Show their discussion and final\nconsensus.",
    "variables": [
      {
        "id": "var_1",
        "label": "Your Idea -\ne.g., Automating our customer support with an AI agent",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p29",
    "title": "The Prompt Injection Vulnerability Scanner",
    "category": "reasoning",
    "template": "Act as an ethical security researcher. Review this user-input prompt template: '{{var_1}}'. Identify potential loopholes where a malicious user could perform a\n'prompt injection' or 'jailbreak' to bypass constraints. Suggest secure patches.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste your\nsystem prompt template",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p30",
    "title": "Self-Refinement Quality Loop",
    "category": "reasoning",
    "template": "Write a marketing copy for {{var_1}}. Once done, automatically act as your own harshest critic.\nReview the copy for cliches, robotic AI words, and weak verbs. Rewrite the final version based\non your own critique.",
    "variables": [
      {
        "id": "var_1",
        "label": "Product",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p31",
    "title": "WhatsApp Business Automated Sequence",
    "category": "indian",
    "template": "Write a 3-part WhatsApp automated message sequence for an Indian e-commerce customer\nwho left items in their cart. Language: Friendly Hinglish. Tone: Helpful, culturally relatable\n(include a sense of urgency without being pushy). Use emojis smartly.",
    "variables": [],
    "featured": true
  },
  {
    "id": "p32",
    "title": "Indian Consumer Psychology Copywriter",
    "category": "indian",
    "template": "Rewrite this formal English product offer into a compelling, emotionally charged pitch targeted\nat Indian middle-class families. Tap into core Indian consumer triggers like 'Value for Money',\n'Family Security', or 'Bachat'. Language: Natural Hinglish.",
    "variables": [],
    "featured": false
  },
  {
    "id": "p33",
    "title": "Festive Season Marketing Campaign",
    "category": "indian",
    "template": "Act as a Creative Director. Brainstorm 5 unique campaign ideas for {{var_1}} for\nthe upcoming {{var_2}} shopping season. Include offer ideas, creative hooks, and\na catchy slogan.",
    "variables": [
      {
        "id": "var_1",
        "label": "Your Business Type",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Festival",
        "example": "Diwali"
      }
    ],
    "featured": true
  },
  {
    "id": "p34",
    "title": "Local Kirana/Retail Store Digital Expansion",
    "category": "indian",
    "template": "I run a physical {{var_1}} in {{var_2}}. Give me a\nstep-by-step low-budget blueprint to take my business digital using Google My Business,\nWhatsApp Networks, and local Instagram targeting.",
    "variables": [
      {
        "id": "var_1",
        "label": "Store Type",
        "example": "clothing boutique/bakery"
      },
      {
        "id": "var_2",
        "label": "City Name",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p35",
    "title": "The Hinglish Explainer",
    "category": "indian",
    "template": "Explain the complex concept of {{var_1}}\nusing the Feynman Technique. Explain it as if you are talking to a 15-year-old Indian student.\nUse daily-life Indian analogies (like cricket, tea stalls, or train journeys). Language: Hinglish.",
    "variables": [
      {
        "id": "var_1",
        "label": "Topic",
        "example": "Stock Market Options Trading / Cryptocurrency"
      }
    ],
    "featured": false
  },
  {
    "id": "p36",
    "title": "Local Influencer Pitch Script",
    "category": "indian",
    "template": "Write a DM (Direct Message) pitch script to collaborate with local micro-influencers in India for\nmy brand {{var_1}}. Offer: {{var_2}}. Keep it casual,\nrespectful, and appealing to creators.",
    "variables": [
      {
        "id": "var_1",
        "label": "Brand Niche",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "e.g., Free product kit + affiliate commission",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p37",
    "title": "The Multilingual Glossary Maker",
    "category": "indian",
    "template": "Take this technical text: '{{var_1}}'. Create a 3-column glossary table: Column 1 = Original\nEnglish Term, Column 2 = Pure Hindi Translation (Devanagari), Column 3 = Simplified\nHinglish/Daily life explanation.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste text",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p38",
    "title": "Customer Support Template",
    "category": "indian",
    "template": "Write a customer support email template resolving a delayed delivery issue for an Indian online\nbuyer. Tone: Highly respectful, apologetic, and clear on the resolution timeline. Address\ncommon anxieties about prepaid payments.",
    "variables": [],
    "featured": false
  },
  {
    "id": "p39",
    "title": "Freelance Quote & Invoice Cover Letter",
    "category": "indian",
    "template": "Write a professional email pitch responding to an Indian client looking for a freelance {{var_1}}. Balance professional global standards with local price-negotiation\nboundaries. Tone: Confident, flexible yet firm on value.",
    "variables": [
      {
        "id": "var_1",
        "label": "Your Skill\n- e.g., Website Developer",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p40",
    "title": "Micro-Startup Bootstrapping Idea Generator",
    "category": "indian",
    "template": "Generate 5 highly practical, low-investment (under 50k INR) business ideas tailored for the\ncurrent Indian market in {{var_1}}. Focus on high-demand niches like sustainability, local gig\nservices, or AI-assisted micro-agencies.",
    "variables": [
      {
        "id": "var_1",
        "label": "Year 2026",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p41",
    "title": "The Ultimate Book Synthesizer",
    "category": "productivity",
    "template": "Act as an expert executive coach. Read the core principles of the book '{{var_1}}'. Convert\nthem into a 5-step action plan that I can easily integrate into my daily routine starting tomorrow.\nFormat: Bullet points.",
    "variables": [
      {
        "id": "var_1",
        "label": "Book Name",
        "example": ""
      }
    ],
    "featured": true
  },
  {
    "id": "p42",
    "title": "80/20 Skill Learning Roadmap",
    "category": "productivity",
    "template": "I want to learn {{var_1}} from scratch. Use the 80/20 rule\nto create a 21-day learning roadmap focusing ONLY on the 20% core sub-skills that deliver 80%\nof practical proficiency.",
    "variables": [
      {
        "id": "var_1",
        "label": "Skill",
        "example": "Video Editing using Premiere Pro"
      }
    ],
    "featured": false
  },
  {
    "id": "p43",
    "title": "Socratic Mentor for Problem Solving",
    "category": "productivity",
    "template": "Act as my intellectual mentor. Do not give me direct answers. Instead, use the Socratic\nMethod—ask me 3 deep, sequential questions about my current life dilemma: '{{var_1}}',\nto help me discover the solution myself.",
    "variables": [
      {
        "id": "var_1",
        "label": "Insert Dilemma",
        "example": ""
      }
    ],
    "featured": true
  },
  {
    "id": "p44",
    "title": "The Mental Model Framework Analyzer",
    "category": "productivity",
    "template": "Analyze this personal career choice: '{{var_1}}'. Evaluate it using 3 classic mental models: First-Principles Thinking,\nSecond-Order Thinking, and Regret Minimization Framework.",
    "variables": [
      {
        "id": "var_1",
        "label": "Describe choice",
        "example": "Leaving my stable corporate job\nfor full-time freelancing"
      }
    ],
    "featured": false
  },
  {
    "id": "p45",
    "title": "Email Inbox Zero Assistant",
    "category": "productivity",
    "template": "Act as my personal executive assistant. Read this long, chaotic email thread: '{{var_1}}'. Summarize it for me in 3 bullet points: (1) What happened, (2) Action items\nspecifically for me, and (3) Reply deadline. Anti-Prompt: Keep it ultra-short.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste\nThread/Text",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p46",
    "title": "Personalized Daily Schedule Optimizer",
    "category": "productivity",
    "template": "Here is my current chaotic daily routine: {{var_1}}. I want to make time for {{var_2}}. Optimize my schedule\nfor peak energy levels and maximum focus blocks.",
    "variables": [
      {
        "id": "var_1",
        "label": "List your current wakeup time, office hours, and sleep\ntime",
        "example": ""
      },
      {
        "id": "var_2",
        "label": "Goal",
        "example": "reading books / working out"
      }
    ],
    "featured": false
  },
  {
    "id": "p47",
    "title": "Complex Data Simplifier",
    "category": "productivity",
    "template": "Take this complex financial/analytics data sheet text: '{{var_1}}'. Turn these\nboring numbers into a compelling narrative story that can be easily understood by a\nnon-technical board member.",
    "variables": [
      {
        "id": "var_1",
        "label": "Paste raw data/numbers",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p48",
    "title": "Creative Writer's Block Breaker",
    "category": "productivity",
    "template": "I am writing a story/article about {{var_1}}. Generate 5 unexpected plot twists or unique\nangles that defy standard cliches, along with a powerful metaphors I can use.",
    "variables": [
      {
        "id": "var_1",
        "label": "Core Idea",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p49",
    "title": "Mock Interviewer",
    "category": "productivity",
    "template": "Act as an elite interviewer for the position of {{var_1}}. Ask me 1 challenging behavioral\ninterview question at a time. Wait for my answer. After I reply, evaluate my response based on\nthe STAR framework, give constructive feedback, and then ask the next question.",
    "variables": [
      {
        "id": "var_1",
        "label": "Job Role",
        "example": ""
      }
    ],
    "featured": false
  },
  {
    "id": "p50",
    "title": "The Weekly Self-Reflection Coach",
    "category": "productivity",
    "template": "Act as a high-performance psychologist. Conduct my weekly review. Ask me 4 deep questions\nregarding my productivity, emotional state, major wins, and friction",
    "variables": [],
    "featured": false
  }
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
