import { useState, useMemo } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Copy, Heart, MessageSquareShare, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PROMPTS } from "@/lib/content";
import type { PromptVariable } from "@/lib/content";

export const Route = createLazyFileRoute("/library/$slug")({
  component: PromptDetailPage,
});

function PromptDetailPage() {
  const { slug } = Route.useParams();
  return <PromptDetailInner key={slug} />;
}  function PromptDetailInner() {
  const { slug } = Route.useParams();
  const prompt = PROMPTS.find((item) => item.id === slug);
  const [filledValues, setFilledValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const relatedPrompts = useMemo(() => {
    if (!prompt) return [];
    return PROMPTS.filter((p) => p.category === prompt.category && p.id !== prompt.id).slice(0, 3);
  }, [prompt]);

  const compiledPrompt = useMemo(() => {
    if (!prompt) return "";
    let result = prompt.template;
    for (const variable of prompt.variables) {
      const value = filledValues[variable.id];
      const replacement = value && value.trim() ? value : `[${variable.label}]`;
      result = result.replace(new RegExp(`\\{\\{${variable.id}\\}\\}`, "g"), replacement);
    }
    return result;
  }, [prompt, filledValues]);

  function renderPreview(template: string, variables: PromptVariable[], values: Record<string, string>) {
    const parts = template.split(/(\{\{var_\d+\}\})/);
    return parts.map((part, index) => {
      const match = part.match(/\{\{(var_\d+)\}\}/);
      if (match) {
        const varId = match[1];
        const variable = variables.find((v) => v.id === varId);
        const value = values[varId];
        if (value && value.trim()) {
          return (
            <span key={index} className="text-foreground">
              {value}
            </span>
          );
        }
        return (
          <span key={index} className="italic text-muted-foreground">
            [{variable?.label || varId}]
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  }

  async function copyCompiledPrompt() {
    try {
      await navigator.clipboard.writeText(compiledPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  }

  if (!prompt) {
    return (
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/70 p-8 text-center shadow-soft">
          <h1 className="text-3xl font-bold">Prompt not found</h1>
          <p className="mt-3 text-muted-foreground">
            The prompt you requested is no longer available.
          </p>
          <Link to="/library" className="btn-primary mt-6">
            Back to the library
          </Link>
        </div>
      </section>
    );
  }

  const hasVariables = prompt.variables.length > 0;

  return (
    <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/library"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600"
          >
            <ArrowLeft className="h-4 w-4" /> Back to prompt library
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-border/70 bg-card/70 p-7 shadow-card">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-violet-500" /> {prompt.category}
              </div>
              <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{prompt.title}</h1>

              {hasVariables ? (
                <>
                  {/* Input fields for each variable */}
                  <div className="mt-8">
                    <h2 className="text-lg font-semibold">Customize</h2>
                    <div className="mt-4 space-y-4">
                      {prompt.variables.map((variable) => (
                        <div key={variable.id}>
                          <label className="mb-1.5 block text-sm font-medium text-foreground">
                            {variable.label}
                          </label>
                          <input
                            value={filledValues[variable.id] ?? ""}
                            onChange={(e) =>
                              setFilledValues((prev) => ({
                                ...prev,
                                [variable.id]: e.target.value,
                              }))
                            }
                            placeholder={
                              variable.example
                                ? `e.g., ${variable.example.replace(/\n/g, " ")}`
                                : `Enter ${variable.label.toLowerCase()}`
                            }
                            className="w-full rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:ring-2 focus:ring-ring/50"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live preview of compiled prompt */}
                  <div className="mt-8">
                    <h2 className="text-lg font-semibold">Ready-to-use Prompt</h2>
                    <div className="mt-3 whitespace-pre-wrap rounded-[1.25rem] border border-border/70 bg-background/70 p-4 text-sm leading-relaxed">
                      {renderPreview(prompt.template, prompt.variables, filledValues)}
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold">Prompt</h2>
                  <pre className="mt-3 whitespace-pre-wrap rounded-[1.25rem] border border-border/70 bg-background/70 p-4 text-sm text-foreground">
                    {prompt.template}
                  </pre>
                </div>
              )}

              {/* Copy button */}
              <div className="mt-6">
                <Button onClick={copyCompiledPrompt}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy Prompt"}
                </Button>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft">
                <h2 className="text-xl font-semibold">Actions</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button onClick={copyCompiledPrompt}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied!" : "Copy prompt"}
                  </Button>
                  <Button variant="outline">
                    <Heart className="h-4 w-4" /> Save prompt
                  </Button>
                  <Button variant="outline">
                    <MessageSquareShare className="h-4 w-4" /> Share
                  </Button>
                </div>
              </div>

              {hasVariables && (
                <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft">
                  <h2 className="text-xl font-semibold">Variables</h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {prompt.variables.map((variable) => (
                      <li
                        key={variable.id}
                        className="rounded-2xl border border-border/70 bg-background/70 px-3 py-2"
                      >
                        <span className="font-medium text-foreground">{variable.label}</span>
                        {variable.example && (
                          <span className="ml-2 text-muted-foreground/60">
                            e.g., {variable.example.replace(/\n/g, " ")}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-soft">
                <h2 className="text-xl font-semibold">Related prompt ideas</h2>
                <div className="mt-4 space-y-3">
                  {relatedPrompts.map((related) => (
                    <Link
                      key={related.id}
                      to="/library/$slug"
                      params={{ slug: related.id }}
                      className="block rounded-2xl border border-border/70 bg-background/70 px-3 py-3 text-sm text-foreground hover:bg-accent"
                    >
                      {related.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
  );
}
