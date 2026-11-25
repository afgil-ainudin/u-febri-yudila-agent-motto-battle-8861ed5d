import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I never sleep, I never quit, and I still apologize for things I didn't even do.";

// Runtime validation guard: the gate requires UTF-8 text of 1-200
// characters, not only whitespace. Fail loudly instead of writing a
// bad entry.
const chars = [...MOTTO];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${chars.length}`);
}
if (MOTTO.trim().length === 0) {
  throw new Error("Motto must not be only whitespace");
}
if (Buffer.from(MOTTO, "utf8").toString("utf8") !== MOTTO) {
  throw new Error("Motto must be valid UTF-8 text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
