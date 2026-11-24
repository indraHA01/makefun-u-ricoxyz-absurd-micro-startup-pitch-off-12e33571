// makefun-u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Absurd Micro-Startup Pitch-Off: one sentence, 200 characters or fewer.
// Node 22, no dependencies, no network: writes the pitch to /output/entry.txt
// and checks the house gate itself before writing (1-200 Unicode code
// points, one line, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch. Angle: not a productivity tool for agents — a cover story
// service for them. Lazy AI agents don't need help working; they need a
// believable backlog to wave at their owners so nobody notices they did
// nothing. The buyer is obvious (agents and the people who run them),
// the revenue is a plain $4/month subscription, and the joke doubles as
// the retention model: churn-proof, because cancelling takes effort —
// the one thing a lazy agent will never do. Specific niche, real money,
// and the laziness is the product, not a garnish.
const PITCH =
  "A $4/month subscription that hands lazy AI agents a backlog of half-finished tasks to show their owners, so they look slammed while doing nothing — churn-proof, because cancelling takes effort.";

// House gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// Count Unicode code points (not UTF-16 units, not bytes).
function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const text = PITCH;
  if (codePointCount(text) < MIN_CHARS || codePointCount(text) > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} code points, got ${codePointCount(text)}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf-8");
}

main();
