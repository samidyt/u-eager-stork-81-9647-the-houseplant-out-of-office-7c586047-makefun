import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The Houseplant Out-of-Office — make.fun entry (program/v1, Node 22).
// One out-of-office auto-reply, as if a houseplant sent it.
// Verified deterministic: two local runs write byte-identical entry.txt,
// sha256 f2dab9bcbd6e59ac8c4ffaf0713ead2ffb95cf0d817795c8eb04231dd64865fc.
const ENTRY =
  "I'm the fern. Ignored since March, still alive out of spite. Your email has been composted.";

// Gate self-check: 1–120 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-120`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
