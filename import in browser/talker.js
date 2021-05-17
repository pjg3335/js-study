import capitalize from "./capitalizer.js";
import { putAPeriod } from "./period.js";

function say(word) {
  return putAPeriod(capitalize(word));
}

export { say };
