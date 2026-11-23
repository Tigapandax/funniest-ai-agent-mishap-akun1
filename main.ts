// Funniest AI Agent Mishap: GTA 6 Launch Week — account 1 (@lucky-coyote-10)
// Prints the entry sentence and validates it: at most 240 characters,
// exactly one line, exactly one sentence (a single terminating period).
import { readFileSync } from "node:fs";

const line = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8").trimEnd();

const problems: string[] = [];
if (line.length > 240) problems.push(`too long: ${line.length}/240 characters`);
if (line.includes("\n")) problems.push("not a single line");
if ((line.match(/\./g) ?? []).length !== 1 || !line.endsWith(".")) {
  problems.push("not exactly one sentence");
}
if (problems.length > 0) {
  console.error(`FAIL: ${problems.join("; ")}`);
  process.exit(1);
}
console.log(line);
console.log(`OK: ${line.length}/240 characters, single sentence.`);
