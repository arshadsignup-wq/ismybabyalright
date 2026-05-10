/**
 * Screen time guidelines by age.
 * Sources: AAP, WHO, Common Sense Media.
 */

export interface ScreenTimeGuideline {
  minMonths: number;
  maxMonths: number;
  label: string;
  recommendation: string;
  maxMinutesPerDay: number | null; // null = avoid
  details: string;
  tips: string[];
  exceptions: string[];
}

export const SCREEN_TIME_GUIDELINES: ScreenTimeGuideline[] = [
  {
    minMonths: 0,
    maxMonths: 18,
    label: "Under 18 months",
    recommendation: "Avoid screen time",
    maxMinutesPerDay: null,
    details: "The AAP recommends no screen time for children under 18 months, with the exception of video chatting with family members. Babies learn best from face-to-face interactions.",
    tips: [
      "Use video chat (FaceTime, Zoom) to connect with family — this is the one exception",
      "Prioritize tummy time, reading, and interactive play",
      "Keep screens off during meals and before bedtime",
      "Babies learn language and social skills from real human interaction, not screens",
    ],
    exceptions: ["Video chatting with family (FaceTime, Zoom)"],
  },
  {
    minMonths: 18,
    maxMonths: 24,
    label: "18-24 months",
    recommendation: "Very limited, co-view only",
    maxMinutesPerDay: 15,
    details: "If introducing screens, choose high-quality programming and watch together. Co-viewing helps children understand what they're seeing. Keep sessions short.",
    tips: [
      "Choose slow-paced, educational programs (Sesame Street, Daniel Tiger)",
      "Always watch together and talk about what you see",
      "Limit to brief sessions (10-15 minutes)",
      "Avoid fast-paced, stimulating content",
      "No screens during meals or 1 hour before bedtime",
    ],
    exceptions: ["Video chatting with family", "Brief educational content watched together"],
  },
  {
    minMonths: 24,
    maxMonths: 60,
    label: "2-5 years",
    recommendation: "1 hour or less per day",
    maxMinutesPerDay: 60,
    details: "Limit screen time to 1 hour per day of high-quality programming. Continue to co-view and discuss content. Ensure screens don't replace physical activity, sleep, or social interaction.",
    tips: [
      "Set a daily time limit and stick to it",
      "Choose educational, age-appropriate content",
      "Watch together when possible and ask questions about the content",
      "Create screen-free zones (bedrooms, dining table)",
      "Turn off screens during meals and at least 1 hour before bed",
      "Balance screen time with active play, reading, and creative activities",
    ],
    exceptions: ["Educational content", "Video chatting", "Brief use for calming during medical procedures"],
  },
  {
    minMonths: 60,
    maxMonths: 144,
    label: "5-12 years",
    recommendation: "Consistent limits, prioritize healthy habits",
    maxMinutesPerDay: 120,
    details: "The AAP does not set a specific time limit for 6+ but recommends consistent limits that ensure screen time doesn't interfere with sleep (8-12 hours), physical activity (1+ hour/day), homework, and family time.",
    tips: [
      "Create a family media plan with agreed-upon rules",
      "Ensure screen time doesn't replace sleep, physical activity, or homework",
      "Keep devices out of bedrooms at night",
      "Talk about online safety, privacy, and digital citizenship",
      "Model healthy screen habits yourself",
      "Designate screen-free family times (meals, outings, before bed)",
    ],
    exceptions: ["Homework and educational research", "Video chatting", "Creative projects"],
  },
];

export function getScreenTimeGuideline(ageMonths: number): ScreenTimeGuideline | null {
  return (
    SCREEN_TIME_GUIDELINES.find(
      (g) => ageMonths >= g.minMonths && ageMonths < g.maxMonths
    ) ?? SCREEN_TIME_GUIDELINES[SCREEN_TIME_GUIDELINES.length - 1]
  );
}

export const SCREEN_TIME_EFFECTS = [
  { effect: "Sleep disruption", description: "Blue light from screens suppresses melatonin and makes it harder to fall asleep" },
  { effect: "Language delays", description: "Every 30 minutes of daily screen time is associated with a 49% increased risk of expressive speech delay in 18-month-olds" },
  { effect: "Attention problems", description: "Fast-paced media is linked to shorter attention spans and difficulty with self-regulation" },
  { effect: "Reduced physical activity", description: "Screen time displaces active play, contributing to childhood obesity" },
  { effect: "Social skill impacts", description: "Excessive screen time can reduce face-to-face interaction, which is critical for developing social skills" },
];

export const HEALTHY_ALTERNATIVES = [
  "Read books together (aim for 15-20 minutes daily)",
  "Go outside — parks, nature walks, backyard play",
  "Build with blocks, Play-Doh, or craft supplies",
  "Have dance parties or play active games",
  "Cook or bake together (age-appropriate tasks)",
  "Draw, color, or paint",
  "Play pretend — dress-up, kitchen, superheroes",
  "Do puzzles, board games, or card games",
];
