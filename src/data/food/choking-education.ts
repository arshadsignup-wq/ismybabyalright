export interface ChokingInfo {
  title: string;
  description: string;
  items: string[];
}

export const gaggingVsChoking: ChokingInfo[] = [
  {
    title: "Gagging (Normal & Expected)",
    description: "Gagging is a safety reflex that pushes food forward. It's noisy, common, and usually resolves on its own.",
    items: [
      "Your baby coughs, sputters, or makes retching sounds",
      "Face may turn red briefly",
      "Eyes may water",
      "Baby can still make sounds and cry",
      "Baby works the food out on their own",
      "This is normal and expected  -  it means the gag reflex is working",
    ],
  },
  {
    title: "Choking (Emergency)",
    description: "Choking is when the airway is blocked. It's usually silent and requires immediate action.",
    items: [
      "Baby is silent  -  cannot cry, cough, or make noise",
      "Skin turns blue or pale",
      "Looks panicked with wide eyes",
      "Cannot breathe in or out",
      "May lose consciousness",
      "This requires immediate back blows and chest thrusts  -  call 911",
    ],
  },
];

export const highRiskFoods: string[] = [
  "Whole grapes (must be quartered lengthwise)",
  "Hot dogs (must be quartered lengthwise, never round coins)",
  "Whole cherry tomatoes (quarter lengthwise)",
  "Raw carrots, celery, or apple (cook until soft for babies)",
  "Whole nuts and seeds",
  "Popcorn",
  "Hard candy or gum",
  "Chunks of peanut butter (thin it out)",
  "Marshmallows",
  "Raw peas (mash for young babies)",
  "Thick nut butters (spread thin, never by the spoonful)",
  "Round blueberries (smash for young babies)",
];

export const safeEatingTips: string[] = [
  "Always supervise your baby while eating  -  never leave them alone with food",
  "Baby should be seated upright in a high chair, not reclined",
  "Avoid eating in the car or stroller",
  "Cut food into age-appropriate sizes",
  "Take a CPR class  -  many hospitals offer free infant CPR courses",
  "Know the difference between gagging and choking",
  "Stay calm during gagging episodes  -  your baby picks up on your reaction",
];
