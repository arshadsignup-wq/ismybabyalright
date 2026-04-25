/* ==========================================================================
   Pumping Guide  -  Evidence-Based Guidance
   Sources: AAP, CDC, Academy of Breastfeeding Medicine (ABM),
   La Leche League International, Stanford School of Medicine
   ========================================================================== */

export interface PumpingSchedule {
  scenario: string;
  frequency: string;
  duration: string;
  tips: string[];
}

export interface MilkStorage {
  location: string;
  temperature: string;
  duration: string;
  notes: string;
}

export const pumpingSchedules: PumpingSchedule[] = [
  {
    scenario: "Exclusively Pumping",
    frequency: "8-12 times per day in the early weeks, gradually reducing to 6-8 times per day once supply is established (typically around 12 weeks)",
    duration: "15-20 minutes per session (or 2-5 minutes after last drops of milk), including one session during the night",
    tips: [
      "Maintain at least one pumping session between midnight and 6 AM  -  prolactin levels are highest at night, which helps establish and maintain supply",
      "Aim for at least 120 minutes of total pumping time per day",
      "Use hands-on pumping: massage and compress the breast during pumping to increase output by up to 48% (Stanford research)",
      "Consider a hospital-grade double electric pump for efficiency  -  it can cut session time significantly",
      "Replace pump membranes/valves every 4-8 weeks (or when you notice decreased suction)",
      "Don't judge supply by a single session  -  output varies throughout the day (mornings are typically highest)",
      "Power pumping once daily can help boost supply: pump 20 min, rest 10, pump 10, rest 10, pump 10",
      "Track your daily total output rather than individual session amounts  -  25-35 oz per day is typical for an exclusively pumping mother of a full-term infant",
    ],
  },
  {
    scenario: "Returning to Work / Pumping while Away",
    frequency: "Pump every 3 hours while away from baby (typically 2-3 sessions during an 8-hour workday), plus direct nursing when with baby",
    duration: "15-20 minutes per session, ideally with a double electric pump",
    tips: [
      "Start building a small freezer stash 2-3 weeks before your return  -  you only need 1-3 days' worth (12-36 oz), not a massive freezer supply",
      "Practice with a bottle 2-3 weeks before returning to work so baby can adjust",
      "Know your rights: in the US, federal law (PUMP Act) requires employers to provide reasonable break time and a private space (not a bathroom) for pumping",
      "A hands-free pumping bra lets you multitask during sessions",
      "Keep a photo or video of your baby on your phone  -  looking at it can help trigger letdown",
      "Pump at roughly the same times baby would normally feed to maintain your supply",
      "Bring a cooler bag with ice packs to store pumped milk if you don't have access to a refrigerator",
      "Don't stress about the 'pitcher method' vs. individual bags  -  both work; choose what fits your routine",
    ],
  },
  {
    scenario: "Building a Stash / Occasional Pumping",
    frequency: "1-2 extra pumping sessions per day, ideally in the morning when supply is naturally highest",
    duration: "10-15 minutes after nursing, or during baby's longest sleep stretch",
    tips: [
      "The best time to pump for a stash is in the morning, 30-60 minutes after your first nursing session",
      "Even 1-3 oz per session adds up quickly  -  that's 7-21 oz per week",
      "Use a Haakaa or silicone milk collector on the non-nursing side to passively catch letdown milk (this alone can yield 1-4 oz per feeding)",
      "Freeze milk in 2-4 oz portions to reduce waste  -  you can always thaw more, but can't refreeze",
      "Label every bag with the date and amount before freezing",
      "You don't need a massive stash  -  for most situations, 30-60 oz in the freezer is more than enough",
      "Milk from different pumping sessions on the same day can be combined once cooled to the same temperature",
      "Rotate your stash: use oldest milk first (first in, first out)",
    ],
  },
];

export const milkStorage: MilkStorage[] = [
  {
    location: "Room Temperature",
    temperature: "Up to 77F (25C)",
    duration: "Up to 4 hours",
    notes:
      "Ideal for milk that will be used soon. Cover and keep as cool as possible. If the room is warmer than 77F, use within 1-2 hours.",
  },
  {
    location: "Insulated Cooler Bag",
    temperature: "With ice packs, 59F (15C)",
    duration: "Up to 24 hours",
    notes:
      "Good for transport. Keep ice packs in direct contact with milk containers. Limit opening the cooler. Refrigerate or freeze as soon as possible upon arrival.",
  },
  {
    location: "Refrigerator",
    temperature: "40F (4C) or colder",
    duration: "Up to 4 days (optimal), safe up to 5 days",
    notes:
      "Store in the back of the refrigerator, not in the door (temperature fluctuates less). Fresh refrigerated milk is nutritionally superior to frozen, so use refrigerated milk first when possible.",
  },
  {
    location: "Freezer (standard)",
    temperature: "0F (-18C) or colder",
    duration: "6 months (optimal), safe up to 12 months",
    notes:
      "Store in the back of the freezer away from the walls of self-defrosting freezers. Use within 6 months for best quality. Freezing destroys some (but not all) immune properties  -  fresh or refrigerated milk is preferable when available.",
  },
  {
    location: "Thawed (previously frozen)",
    temperature: "Refrigerator temperature",
    duration: "Use within 24 hours of fully thawing",
    notes:
      "Thaw in the refrigerator overnight, under warm running water, or in a bowl of warm water. Never refreeze thawed milk. Never microwave breast milk  -  it destroys nutrients and creates hot spots that can burn baby.",
  },
];

export const pumpingTips: string[] = [
  "Correct flange size matters more than pump brand. Your nipple should move freely in the tunnel without rubbing the sides, and you shouldn't see excess areola being pulled in. Most women need to try 2-3 sizes to find the right fit.",
  "Pump suction should be the highest comfortable setting, not the highest possible. More suction does not mean more milk  -  it means more pain and potential tissue damage.",
  "Hands-on pumping (massaging and compressing during pumping) can increase output by up to 48% and improve milk fat content. This is one of the most effective things you can do.",
  "Clean pump parts after every use: wash with hot soapy water and air dry on a clean surface. You can also store used pump parts in a sealed bag in the refrigerator between sessions (for up to 24 hours) to reduce washing, though this is not an official CDC recommendation.",
  "Sterilize pump parts once daily (especially in the first 3 months, or if baby is premature or immunocompromised) by boiling for 5 minutes, using a microwave steam bag, or running through a dishwasher sanitize cycle.",
  "Replace pump valves and membranes every 1-2 months, or immediately when you notice decreased suction or visible wear  -  this is the most common cause of declining pump output.",
  "Output naturally varies throughout the day. Morning sessions typically produce more than evening sessions. Don't compare your 5 PM output to your 7 AM output.",
  "Relaxation helps letdown: try slow breathing, looking at baby photos, listening to a recording of baby's sounds, or using a warm compress on your breasts before pumping.",
  "If you're pumping at work, communicate your needs clearly. A supportive workplace makes a significant difference in long-term breastfeeding success.",
  "The 'pitcher method' (combining all same-day pumped milk into one container) can simplify your routine and reduce the number of bottles and bags you handle.",
  "Breast milk is not 'ruined' if left out a bit too long  -  use the storage guidelines as a framework, not rigid rules. When in doubt, smell and taste it. Spoiled milk has a distinctly sour smell and taste.",
  "It's okay if you don't enjoy pumping. Many mothers find it tedious or uncomfortable. That doesn't make you a bad mother  -  it makes you a human.",
];
