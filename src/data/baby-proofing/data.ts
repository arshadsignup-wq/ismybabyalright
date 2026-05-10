/**
 * Baby-proofing checklist data by room and age.
 * Sources: AAP, Safe Kids Worldwide, CPSC.
 */

export interface BabyProofingItem {
  id: string;
  task: string;
  why: string;
  priority: "essential" | "important" | "recommended";
}

export interface BabyProofingRoom {
  room: string;
  icon: string;
  items: BabyProofingItem[];
}

export interface BabyProofingPhase {
  phase: string;
  ageRange: string;
  minMonths: number;
  maxMonths: number;
  description: string;
  rooms: BabyProofingRoom[];
}

export const BABY_PROOFING_PHASES: BabyProofingPhase[] = [
  {
    phase: "Before Baby Arrives",
    ageRange: "Prenatal - 3 months",
    minMonths: 0,
    maxMonths: 3,
    description:
      "Get the basics in place before your baby is mobile. Focus on the spaces where baby will sleep and spend the most time.",
    rooms: [
      {
        room: "Nursery / Bedroom",
        icon: "bed",
        items: [
          { id: "crib-standards", task: "Ensure crib meets current CPSC safety standards", why: "Older cribs may have dangerous drop sides or wide slat spacing", priority: "essential" },
          { id: "firm-mattress", task: "Use a firm, flat mattress that fits snugly in the crib", why: "Soft mattresses increase suffocation risk", priority: "essential" },
          { id: "bare-crib", task: "Keep crib bare — no pillows, blankets, bumpers, or stuffed animals", why: "Loose bedding is a leading cause of SIDS and suffocation", priority: "essential" },
          { id: "cord-free-blinds", task: "Replace corded blinds with cordless versions", why: "Blind cords are a strangulation hazard", priority: "essential" },
          { id: "secure-furniture", task: "Anchor dressers and bookshelves to the wall", why: "Tip-overs kill or injure a child every 2 weeks in the US", priority: "essential" },
          { id: "smoke-co-detectors", task: "Install smoke and CO detectors in or near the nursery", why: "Early warning saves lives in fire or gas leak", priority: "essential" },
          { id: "outlet-covers", task: "Cover all electrical outlets", why: "Babies explore by touch and can insert objects", priority: "important" },
        ],
      },
      {
        room: "General / Whole Home",
        icon: "home",
        items: [
          { id: "smoke-detectors-all", task: "Test smoke and CO detectors on every floor", why: "Functional detectors cut fire death risk in half", priority: "essential" },
          { id: "fire-extinguisher", task: "Have a fire extinguisher on each floor", why: "Quick response can prevent a small fire from spreading", priority: "important" },
          { id: "poison-control", task: "Post Poison Control number (1-800-222-1222) on the fridge", why: "Quick access saves critical time in poisoning emergencies", priority: "important" },
          { id: "first-aid-kit", task: "Stock a baby first aid kit", why: "Having supplies ready helps you respond calmly", priority: "important" },
          { id: "window-guards", task: "Install window guards or stops on all windows above ground floor", why: "Falls from windows are a leading cause of injury in young children", priority: "essential" },
        ],
      },
    ],
  },
  {
    phase: "Rolling & Reaching",
    ageRange: "4-6 months",
    minMonths: 4,
    maxMonths: 6,
    description:
      "Baby is rolling, grabbing everything within reach, and may start scooting. Time to expand your safety zone.",
    rooms: [
      {
        room: "Living Room",
        icon: "sofa",
        items: [
          { id: "corner-guards", task: "Add corner and edge guards to coffee tables and sharp furniture", why: "Falls onto sharp edges cause head injuries", priority: "essential" },
          { id: "tv-anchor", task: "Mount or anchor TV securely", why: "TV tip-overs cause thousands of ER visits yearly", priority: "essential" },
          { id: "cord-management", task: "Secure or hide all electrical cords", why: "Cords are pulling, chewing, and strangulation hazards", priority: "important" },
          { id: "small-objects", task: "Move small objects, coins, and batteries out of reach", why: "Anything that fits through a toilet paper tube is a choking hazard", priority: "essential" },
          { id: "houseplants", task: "Move toxic houseplants out of reach or remove them", why: "Many common plants (pothos, philodendron, lilies) are toxic if eaten", priority: "important" },
        ],
      },
      {
        room: "Kitchen",
        icon: "kitchen",
        items: [
          { id: "cabinet-locks", task: "Install cabinet and drawer locks on lower cabinets", why: "Cleaning products and sharp objects are within crawling reach", priority: "essential" },
          { id: "stove-knob-covers", task: "Add stove knob covers", why: "Toddlers can turn on gas or electric burners", priority: "important" },
          { id: "oven-lock", task: "Install an oven door lock", why: "Hot oven doors cause severe burns", priority: "important" },
          { id: "trash-lock", task: "Use a trash can with a child-proof lid or put it in a locked cabinet", why: "Trash contains sharp, toxic, and choking hazards", priority: "important" },
        ],
      },
    ],
  },
  {
    phase: "Crawling & Cruising",
    ageRange: "7-12 months",
    minMonths: 7,
    maxMonths: 12,
    description:
      "Baby is crawling, pulling up, and cruising on furniture. They can reach higher, move faster, and get into everything.",
    rooms: [
      {
        room: "Stairs & Hallways",
        icon: "stairs",
        items: [
          { id: "baby-gates-top", task: "Install hardware-mounted gates at top of stairs", why: "Pressure-mounted gates can be pushed over at stair tops", priority: "essential" },
          { id: "baby-gates-bottom", task: "Install gates at bottom of stairs", why: "Crawlers will climb stairs before they can safely descend", priority: "essential" },
          { id: "door-stops", task: "Add door finger-pinch guards", why: "Slamming doors can crush small fingers", priority: "important" },
          { id: "door-knob-covers", task: "Install door knob covers on rooms you want off-limits", why: "Prevents access to unsafe rooms like garage or laundry", priority: "important" },
        ],
      },
      {
        room: "Bathroom",
        icon: "bath",
        items: [
          { id: "toilet-lock", task: "Install toilet lid locks", why: "Toddlers can fall headfirst into toilets and drown in inches of water", priority: "essential" },
          { id: "bath-spout-cover", task: "Add a soft cover over the bathtub spout", why: "Metal spouts cause head bumps and burns", priority: "important" },
          { id: "water-temp", task: "Set water heater to 120°F (49°C) or lower", why: "Water above 120°F causes third-degree burns in seconds", priority: "essential" },
          { id: "bath-mat", task: "Use non-slip mats in the tub and on bathroom floor", why: "Wet surfaces are extremely slippery for unsteady walkers", priority: "important" },
          { id: "medications-locked", task: "Lock all medications in a high cabinet", why: "Medication poisoning is the #1 cause of child poisoning ER visits", priority: "essential" },
          { id: "never-leave-bath", task: "Never leave baby alone in the bath — not even for a second", why: "A child can drown in 1 inch of water in under 60 seconds", priority: "essential" },
        ],
      },
      {
        room: "Garage & Laundry",
        icon: "garage",
        items: [
          { id: "chemicals-high", task: "Store all chemicals, detergents, and cleaners out of reach", why: "Laundry pods look like candy and cause severe poisoning", priority: "essential" },
          { id: "tool-storage", task: "Lock away all tools and sharp objects", why: "Saws, drills, and nails cause serious injuries", priority: "essential" },
          { id: "washer-dryer-lock", task: "Keep washer/dryer doors closed and consider child locks", why: "Children have climbed inside and become trapped", priority: "important" },
        ],
      },
    ],
  },
  {
    phase: "Walking & Climbing",
    ageRange: "1-3 years",
    minMonths: 12,
    maxMonths: 36,
    description:
      "Toddlers are walking, climbing, opening things, and testing every boundary. They are faster and more determined than you expect.",
    rooms: [
      {
        room: "Throughout the Home",
        icon: "home",
        items: [
          { id: "re-anchor-furniture", task: "Re-check all furniture anchoring — toddlers climb dressers", why: "A child dies every 2 weeks from furniture tip-overs", priority: "essential" },
          { id: "blind-cords-again", task: "Double-check all blind cord access", why: "Toddlers can now reach higher — cords remain a strangulation risk", priority: "essential" },
          { id: "heavy-objects-high", task: "Move heavy objects to low shelves (not high where they can fall)", why: "Pulling down heavy items from above causes head injuries", priority: "important" },
          { id: "gun-safety", task: "If firearms are present, store unloaded in a locked safe", why: "Firearm injuries are a leading cause of child death in the US", priority: "essential" },
          { id: "button-batteries", task: "Secure all devices with button batteries", why: "Swallowed button batteries cause fatal internal burns within hours", priority: "essential" },
          { id: "magnet-toys", task: "Keep small magnets away from children", why: "Swallowed magnets can attach through intestinal walls, requiring emergency surgery", priority: "essential" },
        ],
      },
      {
        room: "Outdoors & Pool",
        icon: "outdoor",
        items: [
          { id: "pool-fence", task: "Install a 4-sided pool fence with self-closing, self-latching gate", why: "Drowning is the #1 cause of death for children ages 1-4", priority: "essential" },
          { id: "pool-alarm", task: "Add pool alarms and door alarms to exits leading to pool", why: "Layers of protection prevent unsupervised pool access", priority: "important" },
          { id: "playground-check", task: "Check backyard play equipment for sharp edges and proper surfacing", why: "Falls from play equipment are the most common playground injury", priority: "important" },
          { id: "driveway-safety", task: "Always walk around vehicle before backing up", why: "Backover accidents kill over 50 children per year in the US", priority: "essential" },
          { id: "sunscreen", task: "Apply sunscreen (SPF 30+) to children 6 months and older", why: "Just one blistering sunburn in childhood doubles melanoma risk", priority: "important" },
        ],
      },
    ],
  },
];

export function getPhaseForAge(ageMonths: number): BabyProofingPhase | null {
  return (
    BABY_PROOFING_PHASES.find(
      (p) => ageMonths >= p.minMonths && ageMonths <= p.maxMonths
    ) ?? BABY_PROOFING_PHASES[BABY_PROOFING_PHASES.length - 1]
  );
}

export function getAllItems(): { room: string; phase: string; item: BabyProofingItem }[] {
  const all: { room: string; phase: string; item: BabyProofingItem }[] = [];
  for (const phase of BABY_PROOFING_PHASES) {
    for (const room of phase.rooms) {
      for (const item of room.items) {
        all.push({ room: room.room, phase: phase.phase, item });
      }
    }
  }
  return all;
}
