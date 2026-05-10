/**
 * Pumping schedule and breast milk supply data.
 * Sources: La Leche League, KellyMom, AAP, ACOG.
 */

export interface PumpingSchedule {
  situation: string;
  description: string;
  sessionsPerDay: number;
  minutesPerSession: number;
  intervalHours: number;
  tips: string[];
}

export const PUMPING_SCHEDULES: PumpingSchedule[] = [
  {
    situation: "Exclusively Pumping (Newborn, 0-6 weeks)",
    description:
      "To establish supply, mimic a newborn's feeding pattern. Pump 8-12 times per day, including at least once at night. Supply is being established during this period.",
    sessionsPerDay: 10,
    minutesPerSession: 20,
    intervalHours: 2.5,
    tips: [
      "Pump every 2-3 hours around the clock, including at night",
      "Don't go longer than 4-5 hours without pumping at night",
      "Each session should be 15-20 minutes or 2 minutes after milk stops flowing",
      "Power pump once daily (20 min on, 10 min off, 10 min on, 10 min off, 10 min on) to boost supply",
      "Stay hydrated — drink at least 80-100 oz of water daily",
      "Supply regulates around 6-12 weeks — frequency matters more than duration right now",
    ],
  },
  {
    situation: "Exclusively Pumping (Established, 6-12 weeks)",
    description:
      "Once supply is established (around 6-12 weeks), you may be able to reduce sessions while maintaining output. Most EP moms settle at 6-8 sessions per day.",
    sessionsPerDay: 7,
    minutesPerSession: 20,
    intervalHours: 3.5,
    tips: [
      "Gradually drop sessions — no more than one per week",
      "Watch total daily output, not per-session output",
      "Target is 25-35 oz per day for most babies",
      "One overnight pump (around 3-5 AM) is usually highest output",
      "Replace hands-free — a pumping bra lets you multitask",
      "Massage breasts before and during pumping to maximize output",
    ],
  },
  {
    situation: "Exclusively Pumping (3-6 months)",
    description:
      "Supply is well-established. Many moms maintain supply on 5-6 sessions per day. Some can reduce further without losing output.",
    sessionsPerDay: 5,
    minutesPerSession: 20,
    intervalHours: 4.5,
    tips: [
      "You can try dropping to 5 sessions if output stays stable",
      "Pump at consistent times to maintain supply",
      "Consider dropping the overnight pump if supply is strong",
      "Lecithin supplements may help with recurrent clogs",
      "Total daily output of 25-35 oz is typical and sufficient",
    ],
  },
  {
    situation: "Exclusively Pumping (6-12 months)",
    description:
      "Baby is starting solids and milk needs slowly decrease. Many EP moms pump 4-5 times per day. Some begin weaning from the pump during this period.",
    sessionsPerDay: 4,
    minutesPerSession: 20,
    intervalHours: 5,
    tips: [
      "As baby eats more solids, milk intake naturally decreases",
      "4 pumps per day is common and sustainable for many",
      "Drop sessions gradually if you want to wean — one per week",
      "Replace dropped sessions with hand expression if you feel full",
      "If weaning, cabbage leaves and peppermint tea may help reduce supply",
    ],
  },
  {
    situation: "Pumping at Work (Nursing at Home)",
    description:
      "If you nurse when with baby and pump at work, plan for 2-3 pumping sessions during an 8-hour workday. Nurse before leaving and as soon as you're home.",
    sessionsPerDay: 3,
    minutesPerSession: 20,
    intervalHours: 3,
    tips: [
      "Pump every 3 hours at work (e.g., 10 AM, 1 PM, 4 PM)",
      "Nurse right before you leave and as soon as you get home",
      "Store pumped milk in the office fridge or an insulated cooler bag",
      "Keep extra pump parts at work to save time",
      "Use a hands-free pumping bra for multitasking during sessions",
      "Federal law requires employers to provide break time and a private space",
    ],
  },
  {
    situation: "Combo Feeding (Breastfeeding + Pumping)",
    description:
      "Pumping once or twice a day to build a freezer stash or for occasional bottle feeds. Nurse on demand and add pumping sessions as needed.",
    sessionsPerDay: 2,
    minutesPerSession: 15,
    intervalHours: 0,
    tips: [
      "Pump right after a morning nursing session — supply is usually highest in the morning",
      "Pump one side while baby nurses on the other (if using a single pump)",
      "Even 2-3 oz per session adds up to a meaningful stash over time",
      "Don't stress about per-session output — every drop counts",
      "Store milk in 2-4 oz portions to minimize waste",
    ],
  },
];

export interface PumpingMilestone {
  week: string;
  milestone: string;
  tip: string;
}

export const PUMPING_MILESTONES: PumpingMilestone[] = [
  { week: "Week 1", milestone: "Colostrum production (small amounts are normal!)", tip: "Hand expression often works better than a pump for colostrum" },
  { week: "Weeks 2-3", milestone: "Milk 'comes in' — volume increases significantly", tip: "Engorgement is normal. Pump for comfort and to establish supply" },
  { week: "Weeks 4-6", milestone: "Supply building phase — frequency matters most", tip: "Pump 8-12 times/day. Don't skip sessions even if output is low" },
  { week: "Weeks 6-12", milestone: "Supply regulation — body learns how much to make", tip: "Output may feel like it drops. This is regulation, not loss" },
  { week: "3-4 months", milestone: "Established supply — can begin carefully reducing sessions", tip: "Drop sessions slowly. Watch output over 3-4 days before dropping again" },
  { week: "6+ months", milestone: "Maintenance phase — supply stable on fewer sessions", tip: "4-5 sessions often enough. Baby starting solids reduces milk needs" },
];

export const PUMPING_SUPPLY_TIPS = [
  "Supply is driven by demand — the more you remove, the more you make",
  "Hydration matters: aim for 80-100 oz of water daily",
  "Calories matter: breastfeeding burns 300-500 extra calories per day",
  "Stress can temporarily reduce output — try relaxation techniques while pumping",
  "Look at a photo of your baby or smell their clothes to trigger letdown",
  "Ensure pump flanges are the right size — wrong fit reduces output and causes pain",
  "Replace pump parts (valves, membranes) regularly — worn parts reduce suction",
  "Oatmeal, brewer's yeast, and fenugreek are traditional galactagogues (evidence is mixed)",
  "Sleep deprivation affects supply — rest when you can",
  "Alcohol, pseudoephedrine, and some birth control can reduce supply",
];

export function getRecommendedSchedule(
  situation: string
): PumpingSchedule | null {
  return PUMPING_SCHEDULES.find((s) =>
    s.situation.toLowerCase().includes(situation.toLowerCase())
  ) ?? null;
}

export function calculateDailyPumpingTime(schedule: PumpingSchedule): number {
  return schedule.sessionsPerDay * schedule.minutesPerSession;
}
