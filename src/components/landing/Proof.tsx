const quotes = [
  { name: "Aisha · Student", text: "My assignments now take 1 hour instead of 5. The Hinglish prompts are gold." },
  { name: "Ravi · Freelancer", text: "Doubled my output. Clients think I hired a team. Real ROI in week one." },
  { name: "Meera · Home-maker", text: "I plan meals, kids' study schedule, even my Etsy listings using these prompts." },
  { name: "Karan · Founder", text: "Replaced 3 tools with sharper prompts. Saved ₹40k/month in subscriptions." },
];

export function Proof() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Real People. <span className="text-gradient-primary">Real Results.</span></h2>
          <p className="mt-3 text-muted-foreground">Indian creators, students and founders mastering ChatGPT faster.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.name} className="glass rounded-3xl p-6">
              <blockquote className="text-foreground/85">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gradient-primary">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
