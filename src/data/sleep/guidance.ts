import type { SleepGuidanceEntry, RegressionInfo } from "./types";

export const sleepGuidance: SleepGuidanceEntry[] = [
  {
    ageRange: "Newborn (0-2 months)",
    minMonths: 0,
    maxMonths: 2,
    totalSleepHours: "14-17 hours",
    nightSleepHours: "8-9 hours (with frequent waking)",
    napInfo: "4-8 naps, no real pattern yet",
    tips: [
      "Sleep when the baby sleeps (if you can  -  we know it's hard)",
      "No sleep training at this age  -  respond to your baby's cues",
      "Day/night confusion is normal and resolves by 6-8 weeks",
      "Keep daytime bright and active, nighttime dark and calm",
      "Safe sleep: alone, on back, in crib/bassinet, no blankets or toys",
    ],
  },
  {
    ageRange: "2-4 months",
    minMonths: 2,
    maxMonths: 4,
    totalSleepHours: "14-16 hours",
    nightSleepHours: "9-10 hours (with 1-3 wake-ups)",
    napInfo: "3-5 naps",
    tips: [
      "A bedtime routine helps  -  keep it simple (bath, book, feed, sleep)",
      "Start putting baby down drowsy but awake to practice self-soothing",
      "The 4-month regression may disrupt any pattern  -  it's temporary",
      "Swaddling is still fine if baby isn't rolling yet",
    ],
  },
  {
    ageRange: "4-6 months",
    minMonths: 4,
    maxMonths: 6,
    totalSleepHours: "12-15 hours",
    nightSleepHours: "10-11 hours (0-2 feeds)",
    napInfo: "3-4 naps",
    tips: [
      "Sleep training is an option if you choose (no method is 'right'  -  find what works)",
      "Stop swaddling once baby starts rolling",
      "Blackout curtains and white noise can help significantly",
      "Aim for an early bedtime (6:30-7:30 PM)  -  sounds early, but it helps",
    ],
  },
  {
    ageRange: "6-9 months",
    minMonths: 6,
    maxMonths: 9,
    totalSleepHours: "12-14 hours",
    nightSleepHours: "10-11 hours (0-1 feeds)",
    napInfo: "2-3 naps",
    tips: [
      "Many babies can sleep through the night by this age (not all  -  that's also normal)",
      "The third nap often gets dropped around 7-8 months",
      "Separation anxiety may cause night waking  -  it's developmental, not a sleep problem",
      "Consistency with bedtime routine is key",
    ],
  },
  {
    ageRange: "9-12 months",
    minMonths: 9,
    maxMonths: 12,
    totalSleepHours: "12-14 hours",
    nightSleepHours: "10-12 hours",
    napInfo: "2 naps",
    tips: [
      "Most babies are on a solid 2-nap schedule",
      "Standing in the crib is fun for them, frustrating for you  -  they'll figure out how to sit back down",
      "Night feeds may no longer be nutritionally necessary (discuss with your pediatrician)",
      "Teething can disrupt sleep temporarily",
    ],
  },
  {
    ageRange: "12-18 months",
    minMonths: 12,
    maxMonths: 18,
    totalSleepHours: "12-14 hours",
    nightSleepHours: "10-12 hours",
    napInfo: "1-2 naps (most transition to 1 nap around 14-18 months)",
    tips: [
      "The 2-to-1 nap transition can be rocky  -  it takes 2-4 weeks",
      "If your toddler resists one nap, try a shorter morning nap",
      "A consistent sleep schedule becomes more important than ever",
      "Loveys/comfort objects are now safe and can help with sleep",
    ],
  },
  {
    ageRange: "18-24 months",
    minMonths: 18,
    maxMonths: 24,
    totalSleepHours: "11-14 hours",
    nightSleepHours: "10-12 hours",
    napInfo: "1 nap (1.5-3 hours)",
    tips: [
      "The 18-month regression is a thing  -  it involves newfound independence and separation anxiety",
      "Stalling at bedtime ('more water!' 'one more book!') is normal  -  set clear boundaries",
      "Keep the crib as long as possible  -  most toddlers aren't ready for a big bed until 3",
      "Nightmares may start but are rare before age 2",
    ],
  },
  {
    ageRange: "2-3 years",
    minMonths: 24,
    maxMonths: 36,
    totalSleepHours: "11-13 hours",
    nightSleepHours: "10-12 hours",
    napInfo: "0-1 nap (some drop the nap entirely by 2.5-3)",
    tips: [
      "If your toddler takes too long to fall asleep at bedtime, the nap may need to shorten or end",
      "Use a toddler clock (light turns green when it's okay to get up)",
      "Nightmares and night terrors may start  -  they're different things",
      "Big transitions (new sibling, potty training, moving) can disrupt sleep temporarily",
    ],
  },
];

export const regressions: RegressionInfo[] = [
  {
    ageLabel: "4 months",
    ageMonths: 4,
    title: "The 4-Month Sleep Regression",
    duration: "2-6 weeks",
    whyItHappens: "This is actually a permanent change in sleep architecture. Your baby's sleep cycles are maturing from newborn-style to adult-style. It's a good thing  -  it just doesn't feel like it at 3am.",
    whatToExpect: [
      "Waking every 1-2 hours at night",
      "Short naps (30-45 minutes)",
      "Difficulty falling asleep",
      "More fussiness overall",
    ],
    whatToDo: [
      "This is the most common time parents consider sleep training",
      "Ensure baby's sleep environment is dark, cool, and has white noise",
      "Offer extra feeds if needed  -  growth spurt may overlap",
      "Share night duties with your partner if possible",
      "It WILL pass. You will sleep again.",
    ],
  },
  {
    ageLabel: "8-10 months",
    ageMonths: 9,
    title: "The 8-10 Month Sleep Regression",
    duration: "2-4 weeks",
    whyItHappens: "Separation anxiety, crawling, pulling up, and massive brain development all converge around this age.",
    whatToExpect: [
      "Night waking after previously sleeping through",
      "Resistance to bedtime",
      "Standing up in the crib and crying",
      "Nap refusal",
    ],
    whatToDo: [
      "Practice new skills (standing, crawling) during the day",
      "Extra reassurance at bedtime  -  but try to avoid creating new habits you don't want long-term",
      "Stick to your routine as much as possible",
      "Separation anxiety is a sign of healthy attachment",
    ],
  },
  {
    ageLabel: "12 months",
    ageMonths: 12,
    title: "The 12-Month Sleep Regression",
    duration: "1-3 weeks",
    whyItHappens: "Walking, first words, and the independence surge. Some babies also try to drop to one nap early (resist this  -  most aren't ready until 14-18 months).",
    whatToExpect: [
      "Nap refusal (especially the second nap)",
      "Bedtime resistance",
      "Increased night waking",
    ],
    whatToDo: [
      "Don't drop the second nap yet  -  it's usually too early",
      "Keep offering the nap even if they resist",
      "Stay consistent with your bedtime routine",
      "This one is usually shorter than the 4-month regression",
    ],
  },
  {
    ageLabel: "18 months",
    ageMonths: 18,
    title: "The 18-Month Sleep Regression",
    duration: "2-4 weeks",
    whyItHappens: "Toddler independence, separation anxiety (again), teething (molars), and possible nap transition.",
    whatToExpect: [
      "Strong bedtime resistance ('No!')",
      "Night waking with difficulty going back to sleep",
      "Nap refusal",
      "Possible tantrums at sleep time",
    ],
    whatToDo: [
      "Set firm, loving boundaries  -  toddlers need limits to feel safe",
      "Give choices where possible: 'Do you want the blue pajamas or the red ones?'",
      "Extra comfort for teething (molars are painful)",
      "This is the hardest regression for many parents  -  hang in there",
    ],
  },
  {
    ageLabel: "2 years",
    ageMonths: 24,
    title: "The 2-Year Sleep Regression",
    duration: "2-4 weeks",
    whyItHappens: "Language explosion, potty training readiness, growing imagination (hello, monsters under the bed), and possible new sibling arrival.",
    whatToExpect: [
      "Stalling at bedtime (endless requests)",
      "Nightmares",
      "Climbing out of the crib",
      "Nap resistance",
    ],
    whatToDo: [
      "Keep the crib if possible  -  most toddlers do better in a crib until closer to 3",
      "Address fears matter-of-factly ('I checked, no monsters. You're safe.')",
      "Use a consistent bedtime routine with a clear ending",
      "A nightlight is totally fine and can help with fear of the dark",
    ],
  },
];

export function getGuidanceForAge(ageMonths: number): SleepGuidanceEntry | undefined {
  return sleepGuidance.find(
    (g) => ageMonths >= g.minMonths && ageMonths < g.maxMonths
  ) ?? sleepGuidance[sleepGuidance.length - 1];
}
