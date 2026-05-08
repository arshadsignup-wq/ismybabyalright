/**
 * Potty training readiness quiz data.
 * Sources: AAP potty training guidelines, pediatric developmental research.
 */

export type ReadinessLevel = "ready" | "almost" | "notYet";

export interface PottyQuestion {
  id: number;
  question: string;
  options: { text: string; points: number }[];
}

export const POTTY_QUESTIONS: PottyQuestion[] = [
  {
    id: 1,
    question: "Can your child stay dry for at least 2 hours during the day, or wake up dry from naps?",
    options: [
      { text: "Yes, regularly stays dry for 2+ hours", points: 3 },
      { text: "Sometimes, but not consistently", points: 1 },
      { text: "No, diapers are usually wet", points: 0 },
    ],
  },
  {
    id: 2,
    question: "Does your child show awareness when they are urinating or having a bowel movement (pausing, squatting, telling you)?",
    options: [
      { text: "Yes, they clearly notice and may tell me", points: 3 },
      { text: "Sometimes they seem aware", points: 1 },
      { text: "No, they don't seem to notice", points: 0 },
    ],
  },
  {
    id: 3,
    question: "Can your child follow simple instructions like 'sit down' or 'put it in the basket'?",
    options: [
      { text: "Yes, follows simple 1-2 step instructions", points: 3 },
      { text: "Sometimes, but gets distracted easily", points: 1 },
      { text: "Not yet — still learning to follow instructions", points: 0 },
    ],
  },
  {
    id: 4,
    question: "Is your child interested in the toilet or potty? Do they watch others use the bathroom?",
    options: [
      { text: "Yes, very curious — wants to sit on the potty", points: 3 },
      { text: "A little interested but not enthusiastic", points: 1 },
      { text: "No interest at all", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Can your child pull their pants up and down with minimal help?",
    options: [
      { text: "Yes, can manage pants independently", points: 3 },
      { text: "With some help", points: 1 },
      { text: "Not yet", points: 0 },
    ],
  },
  {
    id: 6,
    question: "Does your child express discomfort with a wet or dirty diaper (pulling at it, asking to be changed)?",
    options: [
      { text: "Yes, they dislike wet/dirty diapers", points: 3 },
      { text: "Sometimes they notice", points: 1 },
      { text: "Doesn't seem bothered", points: 0 },
    ],
  },
  {
    id: 7,
    question: "Can your child walk to and sit on the potty/toilet on their own?",
    options: [
      { text: "Yes, moves independently to the potty", points: 3 },
      { text: "Can walk there but needs help sitting", points: 1 },
      { text: "Not stable enough yet", points: 0 },
    ],
  },
  {
    id: 8,
    question: "Does your child have words or signs for pee and poop?",
    options: [
      { text: "Yes, can communicate about it", points: 3 },
      { text: "Has some words but doesn't use them consistently", points: 1 },
      { text: "No, not yet", points: 0 },
    ],
  },
  {
    id: 9,
    question: "Does your child have regular, predictable bowel movements?",
    options: [
      { text: "Yes, pretty predictable timing", points: 3 },
      { text: "Somewhat regular", points: 1 },
      { text: "Very irregular", points: 0 },
    ],
  },
  {
    id: 10,
    question: "Is your child going through any major life changes right now (new sibling, moving, starting daycare)?",
    options: [
      { text: "No major changes — life is stable right now", points: 3 },
      { text: "One small change, but adjusting well", points: 1 },
      { text: "Yes, big transitions happening", points: 0 },
    ],
  },
];

export interface PottyResult {
  level: ReadinessLevel;
  title: string;
  description: string;
  tips: string[];
  color: string;
}

export const POTTY_RESULTS: Record<ReadinessLevel, PottyResult> = {
  ready: {
    level: "ready",
    title: "Ready to Start!",
    description:
      "Your child is showing strong signs of readiness for potty training. This is a great time to begin — they have the physical and cognitive skills needed.",
    tips: [
      "Let your child pick out a potty or fun seat they like",
      "Establish a routine — try sitting on the potty after meals and before bath",
      "Celebrate successes with enthusiasm, but stay calm about accidents",
      "Use training pants or underwear to help them feel wetness",
      "Read potty-themed books together to normalize the process",
      "Keep the potty visible and accessible at all times",
    ],
    color: "#22c55e",
  },
  almost: {
    level: "almost",
    title: "Almost There!",
    description:
      "Your child is showing some readiness signs but may need a little more time to develop all the skills needed. Consider a relaxed, low-pressure introduction.",
    tips: [
      "Keep a potty available and let your child explore it without pressure",
      "Talk about what the potty is for during diaper changes",
      "Point out when you notice signs they're going (squatting, pausing)",
      "Read books about potty training together",
      "Reassess in 2-4 weeks — readiness can develop quickly",
      "Don't force it — pushing too early can create resistance",
    ],
    color: "#f59e0b",
  },
  notYet: {
    level: "notYet",
    title: "Not Quite Ready Yet",
    description:
      "Your child isn't showing enough readiness signs for potty training right now, and that's completely normal. Most children aren't ready until 18-30 months, and some take longer.",
    tips: [
      "Continue with diapers without pressure — there's no rush",
      "Casually mention the potty during diaper changes",
      "Let your child see family members go to the bathroom (if comfortable)",
      "Focus on related skills: pulling pants up/down, following instructions",
      "Reassess every 4-6 weeks for new readiness signs",
      "Remember: later training often means faster training",
    ],
    color: "#6b7280",
  },
};

export function getReadinessLevel(totalPoints: number): ReadinessLevel {
  if (totalPoints >= 22) return "ready";
  if (totalPoints >= 12) return "almost";
  return "notYet";
}
