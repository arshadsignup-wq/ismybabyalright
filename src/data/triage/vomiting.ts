import type { TriageTree } from "./types";

export const vomitingTriage: TriageTree = {
  slug: "vomiting",
  title: "Vomiting & Diarrhea",
  description: "Should I worry about vomiting or diarrhea?",
  icon: "🤢",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 3 months", nextNodeId: "newborn_severity" },
        { label: "3-12 months", nextNodeId: "severity" },
        { label: "Over 12 months", nextNodeId: "severity" },
      ],
    },
    newborn_severity: {
      id: "newborn_severity",
      question: "What are you seeing?",
      helpText: "Spit-up after feeds is normal. Projectile vomiting is different.",
      options: [
        { label: "Projectile vomiting after every feed", nextNodeId: "outcome_emergency" },
        { label: "Green or yellow vomit", nextNodeId: "outcome_emergency" },
        { label: "Vomiting with fever", nextNodeId: "outcome_call_now" },
        { label: "Occasional spit-up, keeping most feeds down", nextNodeId: "outcome_monitor" },
      ],
    },
    severity: {
      id: "severity",
      question: "What best describes the situation?",
      options: [
        { label: "Blood in vomit or stool", nextNodeId: "outcome_emergency" },
        { label: "Vomiting everything for 8+ hours, no wet diapers", nextNodeId: "outcome_call_now" },
        { label: "Vomiting with high fever (102°F+)", nextNodeId: "outcome_call_now" },
        { label: "A few episodes, still having wet diapers", nextNodeId: "dehydration" },
      ],
    },
    dehydration: {
      id: "dehydration",
      question: "Any signs of dehydration?",
      helpText: "Dry mouth, sunken soft spot, no tears when crying, fewer than 3 wet diapers in 24 hours.",
      options: [
        { label: "Yes, I see dehydration signs", nextNodeId: "outcome_call_now" },
        { label: "Not sure", nextNodeId: "outcome_call_office" },
        { label: "No, still having wet diapers and tears", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_emergency: {
      id: "outcome_emergency",
      level: "red",
      title: "Go to the ER now",
      description:
        "Projectile vomiting in newborns, green vomit, or blood in vomit/stool needs immediate evaluation.",
      actions: [
        "Go to the emergency room",
        "Do not give any food or fluids until evaluated",
        "Note the color, frequency, and any blood",
      ],
      callScript:
        "My baby is [AGE] and is having [SYMPTOM]. This started [WHEN]. I need them seen immediately.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "Persistent vomiting with signs of dehydration or fever needs prompt attention.",
      actions: [
        "Call your pediatrician or after-hours line",
        "Try small sips of Pedialyte or breast milk every 5-10 minutes",
        "Track wet diapers carefully",
      ],
      callScript:
        "My baby is [AGE] and has been vomiting for [DURATION]. They have had [NUMBER] wet diapers today. They [DO/DO NOT] have a fever. I'm concerned about dehydration.",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "Worth checking in with your pediatrician if you're unsure about dehydration.",
      actions: [
        "Call your pediatrician at their next office hours",
        "Keep offering small, frequent feeds",
        "Track wet diapers  -  aim for at least 4-6 in 24 hours",
        "If symptoms worsen before the office opens, call the after-hours line",
      ],
      callScript:
        "My baby is [AGE] and has had some vomiting/diarrhea for [DURATION]. I'm not sure if they're getting dehydrated. Can they be seen?",
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Mild vomiting or diarrhea is common with stomach bugs and usually resolves in 1-3 days.",
      actions: [
        "Keep offering breast/bottle or Pedialyte frequently in small amounts",
        "Avoid juice or sugary drinks",
        "Track wet diapers  -  call if fewer than 4 in 24 hours",
        "Call if vomiting lasts more than 24 hours or diarrhea lasts more than 5 days",
      ],
    },
  },
};
