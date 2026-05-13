const encouragementByAge: { minMonths: number; maxMonths: number; messages: [string, string] }[] = [
  {
    minMonths: 0,
    maxMonths: 3,
    messages: [
      "The newborn phase is intense. You are learning each other, and that takes time. You are doing beautifully.",
      "These early weeks are a marathon, not a sprint. Every feed, every diaper, every soothing attempt matters more than you know.",
    ],
  },
  {
    minMonths: 3,
    maxMonths: 6,
    messages: [
      "Your baby is starting to show you who they are. Those smiles and coos? That is your bond growing stronger every day.",
      "You have made it through the hardest part of the newborn phase. The rhythm you are finding together is real progress.",
    ],
  },
  {
    minMonths: 6,
    maxMonths: 9,
    messages: [
      "Your baby is exploring the world because they feel safe with you. That security is something you built together.",
      "Watching your baby discover new things is one of the rewards of all those sleepless nights. You earned this.",
    ],
  },
  {
    minMonths: 9,
    maxMonths: 12,
    messages: [
      "Almost a year of keeping a tiny human alive and thriving. That is no small thing. Be proud of yourself.",
      "Your baby's personality is shining through. Every milestone they hit started with the foundation you gave them.",
    ],
  },
  {
    minMonths: 12,
    maxMonths: 18,
    messages: [
      "Toddlerhood is a whole new adventure. The curiosity and determination your child shows? They learned that from feeling safe enough to try.",
      "The first year is behind you. You know your child better than anyone. Trust that knowledge.",
    ],
  },
  {
    minMonths: 18,
    maxMonths: 24,
    messages: [
      "Your toddler is becoming their own person, with opinions and everything. That independence is healthy, even when it is exhausting.",
      "The big feelings your toddler has are a sign of healthy development. You are their safe place to feel it all.",
    ],
  },
  {
    minMonths: 24,
    maxMonths: 36,
    messages: [
      "Two years of love, patience, and showing up. Your child's growing vocabulary and imagination are built on everything you have given them.",
      "Parenting a two-year-old requires superhuman patience. On the days it feels impossible, remember how far you have both come.",
    ],
  },
];

export function getEncouragement(ageMonths: number): string {
  const bracket = encouragementByAge.find(
    (b) => ageMonths >= b.minMonths && ageMonths < b.maxMonths
  ) ?? encouragementByAge[encouragementByAge.length - 1];

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % 2;

  return bracket.messages[index];
}
