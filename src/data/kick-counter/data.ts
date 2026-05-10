/**
 * Kick counter / fetal movement data.
 * Sources: ACOG, Count the Kicks organization, APA.
 */

export interface KickSession {
  startTime: number; // timestamp
  endTime: number | null;
  kicks: number[];   // array of timestamps
}

export const KICK_COUNTING_GUIDELINES = {
  startWeek: 28,
  targetKicks: 10,
  targetMinutes: 120,
  description:
    "Starting at 28 weeks, count how long it takes to feel 10 movements. Most babies will reach 10 movements within 30 minutes to 2 hours. Do this daily, ideally at the same time when your baby is usually active.",
};

export const WHEN_TO_COUNT = [
  "Start daily kick counting at 28 weeks (third trimester)",
  "Choose a time when your baby is usually active (often after meals or in the evening)",
  "Count at roughly the same time each day to establish a pattern",
  "Lie on your side or sit comfortably with your hand on your belly",
  "Count any movement — kicks, rolls, swishes, jabs all count",
  "Hiccups do NOT count as movements",
];

export const WHAT_COUNTS_AS_MOVEMENT = [
  { type: "Kick", description: "A distinct push or thrust felt against the uterine wall", counts: true },
  { type: "Roll", description: "A slow, sweeping movement — baby changing positions", counts: true },
  { type: "Jab", description: "A quick, sharp poke from an elbow or knee", counts: true },
  { type: "Swish", description: "A flutter or swooshing sensation", counts: true },
  { type: "Stretch", description: "A sustained pressure as baby extends a limb", counts: true },
  { type: "Hiccup", description: "Rhythmic, repetitive pulsing — involuntary spasm", counts: false },
];

export const WHEN_TO_CALL_PROVIDER = [
  "You don't feel 10 movements within 2 hours",
  "You notice a significant change in your baby's usual pattern of movement",
  "Your baby's movements suddenly stop or dramatically decrease",
  "Movements feel weaker than usual for several counting sessions",
  "You have any gut feeling that something is different — trust your instincts",
];

export const KICK_COUNTING_TIPS = [
  "Eat a snack or drink cold water before counting to encourage movement",
  "Lie on your left side — this increases blood flow to baby",
  "Try gently pressing or jiggling your belly if baby is quiet",
  "Keep a log of your daily counts to spot patterns",
  "Many babies are most active between 9 PM and 1 AM",
  "Don't panic if one session takes longer — but do call if you're concerned",
];

export const MOVEMENT_BY_TRIMESTER = [
  {
    trimester: "First Trimester (Weeks 1-12)",
    description: "Baby is too small for you to feel movement yet, but is already moving by week 8.",
    whatToExpect: "Nothing felt — this is normal",
  },
  {
    trimester: "Second Trimester (Weeks 13-27)",
    description: "Most moms feel first movements (\"quickening\") between weeks 16-25. First-time moms may not feel movement until week 25.",
    whatToExpect: "Light flutters, bubbles, or 'butterflies' that become more distinct over time",
  },
  {
    trimester: "Third Trimester (Weeks 28-40)",
    description: "Movements should be strong and regular. Begin daily kick counts at week 28. Baby may move less in the final weeks as space gets tight, but movements should still be present.",
    whatToExpect: "Strong kicks, rolls, and jabs. 10 movements in under 2 hours is the goal.",
  },
];

export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds}s`;
  return `${minutes}m ${seconds}s`;
}
