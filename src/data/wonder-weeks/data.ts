/**
 * Wonder Weeks / Developmental Leaps data.
 * Based on the research of Hetty van de Rijt and Frans Plooij.
 * Sources: "The Wonder Weeks" research, developmental psychology.
 */

export interface DevelopmentalLeap {
  leapNumber: number;
  weekStart: number;
  weekPeak: number;
  weekEnd: number;
  name: string;
  mentalSkill: string;
  description: string;
  signs: string[];
  newAbilities: string[];
}

export const LEAPS: DevelopmentalLeap[] = [
  {
    leapNumber: 1,
    weekStart: 4.5,
    weekPeak: 5,
    weekEnd: 5.5,
    name: "Changing Sensations",
    mentalSkill: "Awareness of sensory input changes",
    description: "Baby becomes more aware of the world around them. Internal sensations and external stimuli feel new and different. Everything seems sharper.",
    signs: ["More clingy than usual", "Crying more", "Sleeping less or more", "Appetite changes", "Needs more comfort"],
    newAbilities: ["More alert and attentive", "Starts to show a social smile", "Better at tracking objects", "More aware of surroundings"],
  },
  {
    leapNumber: 2,
    weekStart: 7.5,
    weekPeak: 8,
    weekEnd: 8.5,
    name: "Patterns",
    mentalSkill: "Recognizing simple patterns",
    description: "Baby starts recognizing recurring patterns — in what they see, hear, feel, and taste. They can recognize their own hands and feet.",
    signs: ["Clingier", "Crankier", "Wants more attention", "May suck thumb more", "Fussy during feeds"],
    newAbilities: ["Discovers hands and feet", "Holds head up better", "Turns toward sounds", "Begins to bat at objects", "More deliberate body movements"],
  },
  {
    leapNumber: 3,
    weekStart: 11.5,
    weekPeak: 12,
    weekEnd: 12.5,
    name: "Smooth Transitions",
    mentalSkill: "Perceiving smooth transitions in movement and sound",
    description: "Baby can now perceive smooth transitions rather than jerky changes. Movements become more fluid and deliberate.",
    signs: ["Cries more easily", "Wants to be held constantly", "Sleeps poorly", "Loses appetite", "Quiet or withdrawn"],
    newAbilities: ["Smoother body movements", "Follows moving objects smoothly", "Reaches for and grabs objects", "Squeals and babbles", "Rolls from tummy to back"],
  },
  {
    leapNumber: 4,
    weekStart: 14.5,
    weekPeak: 15,
    weekEnd: 19.5,
    name: "Events",
    mentalSkill: "Understanding short sequences of events",
    description: "Baby begins to understand that things happen in sequences — a ball rolls, bounces, and stops. This is a major cognitive leap.",
    signs: ["Very clingy", "Cries more", "Sleeps poorly", "May seem bored or frustrated", "Appetite changes"],
    newAbilities: ["Shakes a rattle to make noise", "Understands cause and effect", "Anticipates events", "Reaches for partially hidden objects", "Shows interest in details"],
  },
  {
    leapNumber: 5,
    weekStart: 22.5,
    weekPeak: 23,
    weekEnd: 26.5,
    name: "Relationships",
    mentalSkill: "Understanding spatial relationships",
    description: "Baby begins to understand relationships between objects and between themselves and objects. Distance, position, inside/outside become meaningful.",
    signs: ["Extra fussy", "Demands attention", "Sleeps less", "Mood swings", "Clings to familiar people"],
    newAbilities: ["Understands distance between objects", "Starts to crawl or scoot", "Explores how things fit together", "Stranger anxiety develops", "Separation anxiety increases"],
  },
  {
    leapNumber: 6,
    weekStart: 33.5,
    weekPeak: 34,
    weekEnd: 37.5,
    name: "Categories",
    mentalSkill: "Categorizing and grouping",
    description: "Baby starts to group things by category — dogs are different from cats, blocks are different from balls. They recognize types of things.",
    signs: ["Very clingy", "Doesn't want to be put down", "Trouble sleeping", "Acts shy", "May be unusually sweet"],
    newAbilities: ["Categorizes objects (animals, food, toys)", "Understands words for categories", "Points at things", "Imitates others", "Shows preferences"],
  },
  {
    leapNumber: 7,
    weekStart: 41.5,
    weekPeak: 42,
    weekEnd: 46.5,
    name: "Sequences",
    mentalSkill: "Understanding and performing sequences",
    description: "Baby understands that things must be done in a certain order. They can start to construct sequences — stack blocks, fit shapes, follow routines.",
    signs: ["Nightmares or night waking", "Temper tantrums", "Extreme clinginess", "Acts babyish", "Jealous"],
    newAbilities: ["Builds towers and knocks them down", "Tries to dress/undress", "Attempts sequences (spoon to bowl to mouth)", "Starts pretend play", "Follows simple instructions"],
  },
  {
    leapNumber: 8,
    weekStart: 50.5,
    weekPeak: 51,
    weekEnd: 54.5,
    name: "Programs",
    mentalSkill: "Applying programs — flexible problem solving",
    description: "Toddler can now apply what they've learned flexibly. They can approach a goal in different ways and adjust their behavior based on results.",
    signs: ["Clingy", "Moody", "Tantrums", "Acts sweet then difficult", "Sleep regression"],
    newAbilities: ["Plans actions ahead", "Tries different strategies", "Role-plays", "Shows empathy", "Uses tools to reach goals"],
  },
  {
    leapNumber: 9,
    weekStart: 59.5,
    weekPeak: 60,
    weekEnd: 64.5,
    name: "Principles",
    mentalSkill: "Understanding principles and values",
    description: "Toddler begins to understand abstract concepts like mine/yours, fair/unfair, and adjusting behavior based on context.",
    signs: ["Defiant", "Tests boundaries", "Extreme emotions", "Clingy then independent", "Nightmares"],
    newAbilities: ["Understands negotiation", "Shows conscience", "Plans and strategizes", "Uses language more fluently", "Develops sense of self"],
  },
  {
    leapNumber: 10,
    weekStart: 71.5,
    weekPeak: 72,
    weekEnd: 75.5,
    name: "Systems",
    mentalSkill: "Understanding systems and adapting to them",
    description: "Toddler can now understand and operate within systems — family, rules, social groups. They grasp that rules can change based on context.",
    signs: ["Power struggles", "Extreme emotions", "Regression in behavior", "Clinginess returns", "Tests all limits"],
    newAbilities: ["Understands family roles", "Grasps social rules", "Creative problem-solving", "Abstract thinking begins", "Complex pretend play"],
  },
];

/** Get current or upcoming leap from baby's age in weeks */
export function getCurrentLeap(ageWeeks: number): {
  currentLeap: DevelopmentalLeap | null;
  nextLeap: DevelopmentalLeap | null;
  isInLeap: boolean;
} {
  const current = LEAPS.find(
    (l) => ageWeeks >= l.weekStart && ageWeeks <= l.weekEnd
  );
  const next = LEAPS.find((l) => l.weekStart > ageWeeks) || null;

  return {
    currentLeap: current || null,
    nextLeap: current ? LEAPS.find((l) => l.weekStart > current.weekEnd) || null : next,
    isInLeap: !!current,
  };
}

/** Convert months to weeks (approximate) */
export function monthsToWeeks(months: number): number {
  return Math.round(months * 4.345);
}

/** Convert a birth date to age in weeks */
export function getAgeInWeeks(birthDate: Date): number {
  const now = new Date();
  const diffMs = now.getTime() - birthDate.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
}
