export interface ParentingStyle {
  id: "responsive" | "structured" | "gentle" | "instinctive";
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  strengths: string[];
  watchFors: string[];
  tips: string[];
  relatedLinks: { label: string; href: string }[];
  color: string;
}

export const parentingStyles: Record<string, ParentingStyle> = {
  responsive: {
    id: "responsive",
    name: "The Attentive Nurturer",
    emoji: "🌱",
    tagline: "You lead by reading your baby's cues and responding with care.",
    description:
      "You're deeply in tune with your child's signals and needs. You prioritize building a secure attachment by responding promptly and thoughtfully to what your baby is communicating. Your child knows that when they reach out, you'll be there - and that's a powerful foundation.",
    strengths: [
      "Strong, secure attachment bond with your child",
      "Excellent at reading subtle cues and body language",
      "Creates deep emotional security and trust",
      "Adapts your response to what your child needs in the moment",
      "Your child feels heard, seen, and understood",
    ],
    watchFors: [
      "You may put your own needs last - remember you can't pour from an empty cup",
      "Setting boundaries can feel uncomfortable, but kids need them too",
      "Burnout is real - make sure you're getting support and breaks",
      "It's okay if you don't catch every cue perfectly. No one does.",
    ],
    tips: [
      "Schedule regular self-care time, even 15 minutes. Your responsiveness is better when you're rested.",
      "Practice saying 'I hear you, and the answer is still no' - you can be responsive AND have boundaries.",
      "Build a support network so you're not the only one meeting every need.",
      "Check out our mental health resources - responsive parents often need reminders to care for themselves too.",
    ],
    relatedLinks: [
      { label: "Mental Health Hub", href: "/mental-health" },
      { label: "Am I Okay? Check-in", href: "/mental-health/check-in" },
      { label: "Sleep Guide", href: "/sleep" },
      { label: "Milestone Tracker", href: "/milestones" },
    ],
    color: "#0D9488",
  },
  structured: {
    id: "structured",
    name: "The Steady Planner",
    emoji: "📋",
    tagline: "You create a predictable world where your child can thrive.",
    description:
      "You believe that children flourish with consistency, routine, and clear expectations. Your home runs smoothly because everyone knows what to expect. Your child gains confidence from the predictability you provide, and your boundaries are clear, kind, and firm.",
    strengths: [
      "Predictable routines help your child feel safe and secure",
      "Clear, consistent boundaries that kids can count on",
      "Great at establishing healthy sleep and feeding habits",
      "Your child learns to trust the structure of their world",
      "Strong organizational skills make daily life smoother for everyone",
    ],
    watchFors: [
      "Unexpected changes to the plan can feel stressful - flexibility is a muscle you can build",
      "Every child is different, so some routines may need adjusting as your child grows",
      "It's okay when things don't go to plan - perfection isn't the goal",
      "Leave room for spontaneous moments of joy and silliness",
    ],
    tips: [
      "Build a 'flex zone' into your daily routine - 15 to 30 minutes with no plan. See what happens!",
      "When the schedule breaks down (and it will), take a breath. One off day doesn't undo your good work.",
      "Use our tracker to monitor patterns - your data-driven approach is a real strength for spotting trends.",
      "Remember that routines should serve your family, not the other way around. Adjust as needed.",
    ],
    relatedLinks: [
      { label: "Baby Tracker", href: "/tracker" },
      { label: "Sleep Guide", href: "/sleep" },
      { label: "Vaccine Schedule", href: "/vaccines" },
      { label: "Doctor Visit Prep", href: "/doctor-visits" },
    ],
    color: "#818CF8",
  },
  gentle: {
    id: "gentle",
    name: "The Empathetic Guide",
    emoji: "💛",
    tagline: "You lead with empathy and help your child understand their world.",
    description:
      "You believe that every feeling is valid and every behavior is communication. You take time to name emotions, explain reasons, and guide your child through difficult moments with patience and respect. Your child is learning emotional intelligence from the very beginning.",
    strengths: [
      "Builds exceptional emotional intelligence in your child",
      "Strong communication skills - your child learns to express feelings with words",
      "Creates a relationship built on mutual respect and trust",
      "Your child feels safe to express all emotions, even the big messy ones",
      "Models healthy emotional regulation and conflict resolution",
    ],
    watchFors: [
      "Long explanations can lose a toddler's attention - sometimes fewer words work better",
      "It's okay to set a firm limit without a full explanation in the moment",
      "You might feel guilty when you need to be the 'bad guy' - but boundaries are an act of love",
      "Watch for decision fatigue from offering too many choices",
    ],
    tips: [
      "For toddlers, try the 'name it to tame it' approach in 5 words or fewer: 'You're mad. That's okay.'",
      "Practice the 'warm limit': acknowledge the feeling, hold the boundary. Both can be true at once.",
      "Check out our milestone guides to understand what emotional skills are typical for each age.",
      "Give yourself grace on the days when you're not as patient as you'd like. Tomorrow is a new day.",
    ],
    relatedLinks: [
      { label: "Milestone Tracker", href: "/milestones" },
      { label: "Mental Health Hub", href: "/mental-health" },
      { label: "Common Concerns", href: "/concerns" },
      { label: "Partner Support", href: "/mental-health/partner" },
    ],
    color: "#34D399",
  },
  instinctive: {
    id: "instinctive",
    name: "The Natural Navigator",
    emoji: "🧭",
    tagline: "You trust your gut and go with the flow of parenthood.",
    description:
      "You bring a relaxed, adaptable energy to parenting. You trust your instincts, don't sweat the small stuff, and meet each day as it comes. Your child benefits from your calm, low-pressure approach and learns resilience from watching you roll with whatever parenthood throws at you.",
    strengths: [
      "Naturally low-stress approach that benefits the whole family",
      "Highly adaptable - you handle surprises and changes with ease",
      "Your child learns resilience and flexibility from your example",
      "Present-focused - you enjoy the moment rather than worrying about the next stage",
      "Creates a relaxed household atmosphere where kids feel at ease",
    ],
    watchFors: [
      "Some areas (like safety, sleep, and feeding) can benefit from a bit more structure",
      "Trust your gut AND check in with reliable sources - both can work together",
      "Keep an eye on developmental milestones even if you're not tracking every detail",
      "It's worth having a go-to plan for common situations like fevers and allergic reactions",
    ],
    tips: [
      "Use our symptom checker when your gut says something might be off - it's a great backup for your instincts.",
      "Bookmark our triage guides for the moments when you want a quick, reliable second opinion.",
      "Even a loose routine for sleep and meals can make your already-chill approach even smoother.",
      "Your calm energy is a gift. Just make sure to schedule those well-child visits with the pediatrician too!",
    ],
    relatedLinks: [
      { label: "Symptom Checker", href: "/triage" },
      { label: "Common Concerns", href: "/concerns" },
      { label: "Growth Chart", href: "/tools/growth" },
      { label: "Milestone Tracker", href: "/milestones" },
    ],
    color: "#F4A261",
  },
};
