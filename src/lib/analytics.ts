/**
 * Lightweight GA4 analytics helper — safe to call even when GA4 isn't loaded.
 *
 * Usage:
 *   trackCtaClick("Compact ebook CTA")
 *   trackPageView(window.location.pathname)
 */

function gtag(...args: unknown[]) {
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag(...args);
  }
}

/**
 * Track a CTA click event.
 */
export function trackCtaClick(label: string) {
  gtag("event", "click", {
    event_category: "CTA",
    event_label: label,
  });
}

/**
 * Track a CTA hover / intent event (mouse enters CTA area).
 */
export function trackCtaHover(label: string) {
  gtag("event", "hover", {
    event_category: "CTA",
    event_label: label,
    non_interaction: true,
  });
}

/**
 * Track a page view.
 */
export function trackPageView(path: string) {
  gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
  });
}

/**
 * Track a scroll depth milestone on a page.
 */
export function trackScrollDepth(depth: number) {
  gtag("event", "scroll_depth", {
    event_category: "Engagement",
    event_label: `${depth}%`,
    value: depth,
    percent_scrolled: depth,
  });
}

/**
 * Track time spent on a page.
 */
export function trackTimeOnPage(seconds: number, milestone?: string) {
  gtag("event", "time_on_page", {
    event_category: "Engagement",
    event_label: milestone ? `${milestone} (${seconds}s)` : `${seconds}s`,
    value: seconds,
    seconds_on_page: seconds,
    ...(milestone ? { time_milestone: milestone } : {}),
  });
}

/**
 * Track a custom event with arbitrary parameters.
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
  });
}
