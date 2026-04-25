import type { TriageTree } from "./types";
import { feverTriage } from "./fever";
import { vomitingTriage } from "./vomiting";
import { rashTriage } from "./rash";
import { breathingTriage } from "./breathing";
import { cryingTriage } from "./crying";
import { diarrheaTriage } from "./diarrhea";
import { constipationTriage } from "./constipation";
import { congestionTriage } from "./congestion";
import { earPainTriage } from "./ear-pain";
import { eyeDischargeTriage } from "./eye-discharge";
import { jaundiceTriage } from "./jaundice";

export const allTriageTrees: TriageTree[] = [
  feverTriage,
  vomitingTriage,
  rashTriage,
  breathingTriage,
  cryingTriage,
  diarrheaTriage,
  constipationTriage,
  congestionTriage,
  earPainTriage,
  eyeDischargeTriage,
  jaundiceTriage,
];

export function getTriageTree(slug: string): TriageTree | undefined {
  return allTriageTrees.find((t) => t.slug === slug);
}

export {
  feverTriage,
  vomitingTriage,
  rashTriage,
  breathingTriage,
  cryingTriage,
  diarrheaTriage,
  constipationTriage,
  congestionTriage,
  earPainTriage,
  eyeDischargeTriage,
  jaundiceTriage,
};
