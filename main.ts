// The Long Roast: Lawmakers and the File They Cannot Convert — make.fun entry (program/v1).
// Writes exactly one satirical sentence to <output dir>/entry.txt and to stdout.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 320 characters, not
// only whitespace. This sentence is 155 characters, one sentence.
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "They wrote a 400-page bill to regulate artificial intelligence, then spent three weeks trying to subpoena the 'Save as PDF' button for refusing to testify.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
// No trailing newline: the file holds exactly the sentence the judge reads.
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
chmodSync(`${OUTPUT_DIR}/entry.txt`, 0o644);
// Echo the sentence so a local run shows exactly what the judge will read.
console.log(LINE);
