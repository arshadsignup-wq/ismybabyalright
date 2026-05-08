/**
 * CPR & Choking first aid data for infants and toddlers.
 * Sources: American Heart Association (AHA), AAP, Red Cross.
 */

export interface FirstAidStep {
  step: number;
  title: string;
  description: string;
  important?: string;
}

export interface ChokingHazard {
  item: string;
  ageRisk: string;
}

export const INFANT_CPR_STEPS: FirstAidStep[] = [
  {
    step: 1,
    title: "Check responsiveness",
    description:
      "Tap the bottom of the baby's foot and shout. If no response, have someone call 911 immediately. If alone, perform CPR for 2 minutes first, then call 911.",
  },
  {
    step: 2,
    title: "Place baby on a firm, flat surface",
    description:
      "Lay the baby face-up on a firm, flat surface. Remove any clothing from the chest area.",
  },
  {
    step: 3,
    title: "Open the airway",
    description:
      "Tilt the head back slightly by lifting the chin with one hand and pushing down on the forehead with the other. Do not tilt too far back.",
    important: "For infants, a neutral or slightly extended head position is best. Over-tilting can block the airway.",
  },
  {
    step: 4,
    title: "Give 2 rescue breaths",
    description:
      "Cover the baby's mouth AND nose with your mouth. Give 2 small, gentle puffs of air (1 second each). Watch for the chest to rise.",
    important: "Use only enough air to make the chest rise. Baby lungs are very small.",
  },
  {
    step: 5,
    title: "Begin chest compressions",
    description:
      "Place 2 fingers on the breastbone, just below the nipple line. Push down about 1.5 inches (4 cm) at a rate of 100-120 compressions per minute.",
    important: "Push hard and fast. Let the chest fully recoil between compressions.",
  },
  {
    step: 6,
    title: "Continue CPR cycle",
    description:
      "Alternate 30 compressions with 2 rescue breaths. Continue until the baby starts breathing, an AED arrives, or emergency services take over.",
  },
];

export const TODDLER_CPR_STEPS: FirstAidStep[] = [
  {
    step: 1,
    title: "Check responsiveness",
    description:
      "Tap the child's shoulder and shout their name. If no response, have someone call 911. If alone, do CPR for 2 minutes first.",
  },
  {
    step: 2,
    title: "Place child on a firm, flat surface",
    description: "Lay the child face-up on a firm, flat surface.",
  },
  {
    step: 3,
    title: "Open the airway",
    description:
      "Tilt the head back by lifting the chin with one hand and pushing down on the forehead with the other (head-tilt/chin-lift).",
  },
  {
    step: 4,
    title: "Give 2 rescue breaths",
    description:
      "Pinch the nose closed. Cover the child's mouth with yours and give 2 breaths (1 second each). Watch for chest rise.",
  },
  {
    step: 5,
    title: "Begin chest compressions",
    description:
      "Place the heel of one hand on the center of the chest (on the breastbone). Push down about 2 inches (5 cm) at 100-120 compressions per minute.",
  },
  {
    step: 6,
    title: "Continue CPR cycle",
    description:
      "Alternate 30 compressions with 2 rescue breaths. Continue until the child responds, an AED arrives, or EMS takes over.",
  },
];

export const INFANT_CHOKING_STEPS: FirstAidStep[] = [
  {
    step: 1,
    title: "Assess the situation",
    description:
      "If the baby is coughing forcefully, let them cough. Only intervene if the baby cannot cry, cough, or breathe, or is making high-pitched sounds.",
    important: "Do NOT do blind finger sweeps — you may push the object deeper.",
  },
  {
    step: 2,
    title: "Give 5 back blows",
    description:
      "Hold the baby face-down on your forearm, supporting the head and jaw with your hand. Rest your forearm on your thigh. Give 5 firm back blows between the shoulder blades using the heel of your hand.",
  },
  {
    step: 3,
    title: "Give 5 chest thrusts",
    description:
      "Turn the baby face-up on your forearm. Place 2 fingers on the breastbone just below the nipple line. Give 5 quick downward chest thrusts (about 1.5 inches deep).",
  },
  {
    step: 4,
    title: "Repeat until object is dislodged",
    description:
      "Continue alternating 5 back blows and 5 chest thrusts until the object comes out, the baby can breathe/cry, or the baby becomes unresponsive.",
    important: "If the baby becomes unresponsive, begin infant CPR immediately and call 911.",
  },
];

export const TODDLER_CHOKING_STEPS: FirstAidStep[] = [
  {
    step: 1,
    title: "Assess the situation",
    description:
      "If the child can cough forcefully or speak, encourage them to keep coughing. Intervene only if they cannot cough, speak, or breathe.",
  },
  {
    step: 2,
    title: "Perform abdominal thrusts (Heimlich maneuver)",
    description:
      "Stand or kneel behind the child. Wrap your arms around their waist. Make a fist with one hand and place it just above the navel, below the rib cage. Grasp the fist with your other hand and give quick, upward thrusts.",
    important: "For children over 1 year old. Do NOT use abdominal thrusts on infants under 1.",
  },
  {
    step: 3,
    title: "Repeat until object is dislodged",
    description:
      "Continue abdominal thrusts until the object comes out or the child becomes unresponsive.",
    important: "If the child becomes unresponsive, lower them to the ground and begin CPR. Call 911.",
  },
];

export const WHEN_TO_CALL_911 = [
  "Baby/child is not breathing or is turning blue",
  "Baby/child is unresponsive after choking",
  "You cannot dislodge an object from the airway",
  "Baby/child has a severe allergic reaction (anaphylaxis)",
  "Seizure lasting more than 5 minutes",
  "Any loss of consciousness",
  "Significant bleeding that won't stop with pressure",
  "Suspected poisoning — also call Poison Control: 1-800-222-1222",
];

export const CHOKING_HAZARDS: ChokingHazard[] = [
  { item: "Hot dogs (whole or round slices)", ageRisk: "All ages under 4" },
  { item: "Grapes (whole)", ageRisk: "All ages under 4" },
  { item: "Popcorn", ageRisk: "Under 4 years" },
  { item: "Nuts and seeds", ageRisk: "Under 4 years" },
  { item: "Hard candy", ageRisk: "Under 4 years" },
  { item: "Raw carrots, celery, apple chunks", ageRisk: "Under 3 years" },
  { item: "Cheese cubes/sticks", ageRisk: "Under 2 years" },
  { item: "Peanut butter (large globs)", ageRisk: "All ages — spread thin" },
  { item: "Marshmallows", ageRisk: "Under 3 years" },
  { item: "Chewing gum", ageRisk: "Under 5 years" },
  { item: "Coin-sized batteries", ageRisk: "All ages" },
  { item: "Small toy parts, balloons", ageRisk: "Under 3 years" },
];
