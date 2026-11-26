// The Funniest Excuse for Skipping a Meeting
// make.fun bounty u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
//
// A dependency-free program: no network, no secrets, no third-party code.
// It writes exactly one line — the excuse — to the absolute path
// /output/entry.txt, where the sealed scorer reads it.
//
// The line must stay a single line of UTF-8 text, 1-200 characters long,
// so this program validates its own output before writing it.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The excuse. One sentence, no explanation: it has to stand on its own
// the way it would in a chat message to your manager.
const LINE =
  "My Wi-Fi only works in the one room where the meeting isn't.";

// Guard rails: the scorer rejects empty, whitespace-only, or over-long
// entries, so fail loudly here instead of writing a bad file.
if (LINE.trim().length === 0) {
  throw new Error("excuse must not be empty");
}
// Count characters as the scorer does: Unicode code points, not bytes,
// so a multi-byte character never silently pushes the line over the limit.
const charCount = [...LINE].length;
if (charCount > MAX_CHARS) {
  throw new Error(
    `excuse is ${charCount} characters, over the ${MAX_CHARS} limit`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("excuse must be a single line");
}

// The grader runs read-only, so a relative output/ directory would fail
// with exit 1. Always write to the absolute path.
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

console.log(`wrote ${charCount} characters to ${OUTPUT_PATH}`);
