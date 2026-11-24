import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My apartment's smart lock updated overnight and now it only opens for my cat, so I'm stuck inside until IT support admits a cat isn't a valid admin.";

if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} chars written to /output/entry.txt`);
