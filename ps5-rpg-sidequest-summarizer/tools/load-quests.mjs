// Loads the browser data file (data/quests.js) in Node without a bundler.
// quests.js declares `const gameImages = {...}` and `const quests = [...]`
// with no exports (it's meant for a <script> tag). We read the source and
// evaluate it in a function scope, returning the two bindings.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

export function loadData(dataPath = resolve(here, "..", "data", "quests.js")) {
  const src = readFileSync(dataPath, "utf8");
  // `const` is block-scoped, so it is visible to the return line inside the
  // same function body. No globals (window/document) are referenced by the
  // data file, so a bare Function scope is sufficient and side-effect free.
  const factory = new Function(`${src}\n;return { quests, gameImages };`);
  return factory();
}
