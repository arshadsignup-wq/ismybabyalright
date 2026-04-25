import type { TriageTree } from "./types";

export const cryingTriage: TriageTree = {
  slug: "crying",
  title: "Excessive Crying",
  description: "My baby won't stop crying  -  is something wrong?",
  icon: "😢",
  startNodeId: "duration",
  nodes: {
    duration: {
      id: "duration",
      question: "How long has the crying lasted?",
      options: [
        { label: "Screaming and inconsolable for 2+ hours", nextNodeId: "physical_check" },
        { label: "Very fussy for the past few hours", nextNodeId: "pattern" },
        { label: "Crying more than usual today", nextNodeId: "pattern" },
      ],
    },
    physical_check: {
      id: "physical_check",
      question: "Have you checked for physical causes?",
      helpText: "Check for: hair tourniquet (wrapped around finger/toe), diaper rash, tags in clothing, or anything poking them.",
      options: [
        { label: "Yes  -  and I found something (hair wrapped, injury, swelling)", nextNodeId: "outcome_call_now" },
        { label: "Yes  -  nothing visible, but baby seems in pain", nextNodeId: "pain_signs" },
        { label: "Yes  -  nothing found, baby is just very upset", nextNodeId: "other_symptoms" },
      ],
    },
    pain_signs: {
      id: "pain_signs",
      question: "What makes you think your baby is in pain?",
      options: [
        { label: "Drawing knees up, arching back, stiff body", nextNodeId: "outcome_call_now" },
        { label: "High-pitched, unusual cry  -  different from normal", nextNodeId: "outcome_call_now" },
        { label: "Just very upset but cry sounds normal", nextNodeId: "other_symptoms" },
      ],
    },
    other_symptoms: {
      id: "other_symptoms",
      question: "Any other symptoms?",
      options: [
        { label: "Fever over 100.4°F", nextNodeId: "outcome_call_now" },
        { label: "Vomiting or refusing all feeds", nextNodeId: "outcome_call_now" },
        { label: "No other symptoms  -  just crying", nextNodeId: "age_colic" },
      ],
    },
    pattern: {
      id: "pattern",
      question: "When does the crying happen?",
      options: [
        { label: "Same time every day (usually evening)", nextNodeId: "age_colic" },
        { label: "After feeding", nextNodeId: "outcome_reflux" },
        { label: "Random  -  no pattern", nextNodeId: "other_symptoms" },
      ],
    },
    age_colic: {
      id: "age_colic",
      question: "How old is your baby?",
      helpText: "Colic (unexplained crying 3+ hours/day, 3+ days/week) typically starts around 2-3 weeks and peaks at 6 weeks.",
      options: [
        { label: "2 weeks to 4 months", nextNodeId: "outcome_colic" },
        { label: "Under 2 weeks", nextNodeId: "outcome_call_office" },
        { label: "Over 4 months", nextNodeId: "outcome_call_office" },
      ],
    },
  },
  outcomes: {
    outcome_call_now: {
      id: "outcome_call_now",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "Inconsolable crying with pain signs, fever, or vomiting needs prompt evaluation.",
      actions: [
        "Call your pediatrician or after-hours line",
        "Check for hair tourniquets on fingers and toes",
        "Note how long the crying has lasted and any other symptoms",
      ],
      callScript:
        "My baby is [AGE] and has been crying inconsolably for [DURATION]. They [SYMPTOMS]. I can't console them and I'm worried. Can they be seen?",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "It's worth discussing this pattern with your pediatrician.",
      actions: [
        "Call your pediatrician at their next office hours",
        "Keep a log of when the crying happens and how long it lasts",
        "Try the 5 S's: Swaddle, Side/Stomach position (while held), Shush, Swing, Suck",
        "If crying suddenly gets much worse or you notice new symptoms, call sooner",
      ],
    },
    outcome_colic: {
      id: "outcome_colic",
      level: "green",
      title: "Likely colic  -  you're not doing anything wrong",
      description:
        "Colic affects up to 25% of babies. It is not caused by anything you did and it will end  -  usually by 3-4 months.",
      actions: [
        "Try the 5 S's: Swaddle, Side position (while held), Shush, Swing, Suck",
        "It's okay to put your baby down in a safe place and take a break",
        "Take turns with your partner or another caregiver if possible",
        "Call your pediatrician if the pattern changes or you have concerns",
        "This is one of the hardest things about being a new parent  -  you're doing great",
      ],
    },
    outcome_reflux: {
      id: "outcome_reflux",
      level: "yellow",
      title: "May be reflux  -  mention at next visit",
      description:
        "Crying after feeds, especially with spitting up or arching, can indicate reflux.",
      actions: [
        "Keep baby upright for 20-30 minutes after feeds",
        "Try smaller, more frequent feedings",
        "Mention it to your pediatrician  -  they may suggest further evaluation",
        "If your baby is losing weight or refusing feeds, call sooner",
      ],
      callScript:
        "My baby cries after most feedings and [SPITS UP A LOT / ARCHES THEIR BACK]. It's been happening for [DURATION]. Could this be reflux?",
    },
  },
};
