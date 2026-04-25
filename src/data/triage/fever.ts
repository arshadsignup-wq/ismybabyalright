import type { TriageTree } from "./types";

export const feverTriage: TriageTree = {
  slug: "fever",
  title: "Fever",
  description: "Is this fever something to worry about?",
  icon: "🌡️",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 3 months", nextNodeId: "outcome_emergency" },
        { label: "3-6 months", nextNodeId: "temp_3_6" },
        { label: "6-24 months", nextNodeId: "temp_6_24" },
        { label: "Over 24 months", nextNodeId: "temp_over_24" },
      ],
    },
    temp_3_6: {
      id: "temp_3_6",
      question: "What is the temperature?",
      helpText: "Rectal temperature is most accurate for babies under 6 months.",
      options: [
        { label: "102°F (38.9°C) or higher", nextNodeId: "outcome_call_now" },
        { label: "100.4-102°F (38-38.9°C)", nextNodeId: "behavior_3_6" },
        { label: "Below 100.4°F (38°C)", nextNodeId: "outcome_monitor" },
      ],
    },
    behavior_3_6: {
      id: "behavior_3_6",
      question: "How is your baby behaving?",
      options: [
        { label: "Unusually sleepy, won't eat, or inconsolable", nextNodeId: "outcome_call_now" },
        { label: "Fussy but consolable, still eating some", nextNodeId: "outcome_call_office" },
        { label: "Acting mostly normal", nextNodeId: "outcome_monitor" },
      ],
    },
    temp_6_24: {
      id: "temp_6_24",
      question: "What is the temperature?",
      options: [
        { label: "104°F (40°C) or higher", nextNodeId: "outcome_call_now" },
        { label: "102-104°F (38.9-40°C)", nextNodeId: "duration_6_24" },
        { label: "100.4-102°F (38-38.9°C)", nextNodeId: "behavior_6_24" },
        { label: "Below 100.4°F (38°C)", nextNodeId: "outcome_monitor" },
      ],
    },
    duration_6_24: {
      id: "duration_6_24",
      question: "How long has the fever lasted?",
      options: [
        { label: "More than 24 hours", nextNodeId: "outcome_call_office" },
        { label: "Less than 24 hours", nextNodeId: "behavior_6_24" },
      ],
    },
    behavior_6_24: {
      id: "behavior_6_24",
      question: "How is your baby behaving?",
      options: [
        { label: "Unusually sleepy, won't drink, or inconsolable", nextNodeId: "outcome_call_now" },
        { label: "Fussy but consolable", nextNodeId: "outcome_monitor" },
        { label: "Acting mostly normal", nextNodeId: "outcome_monitor" },
      ],
    },
    temp_over_24: {
      id: "temp_over_24",
      question: "What is the temperature?",
      options: [
        { label: "104°F (40°C) or higher", nextNodeId: "outcome_call_now" },
        { label: "102-104°F (38.9-40°C)", nextNodeId: "duration_over_24" },
        { label: "Below 102°F (38.9°C)", nextNodeId: "behavior_over_24" },
      ],
    },
    duration_over_24: {
      id: "duration_over_24",
      question: "How long has the fever lasted?",
      options: [
        { label: "More than 3 days", nextNodeId: "outcome_call_office" },
        { label: "Less than 3 days", nextNodeId: "behavior_over_24" },
      ],
    },
    behavior_over_24: {
      id: "behavior_over_24",
      question: "Any other symptoms?",
      options: [
        { label: "Stiff neck, bad headache, or rash that doesn't blanch", nextNodeId: "outcome_emergency" },
        { label: "Won't drink, no wet diapers in 8+ hours", nextNodeId: "outcome_call_now" },
        { label: "Mild cold symptoms, still drinking", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_emergency: {
      id: "outcome_emergency",
      level: "red",
      title: "Go to the ER now",
      description:
        "Any fever in a baby under 3 months is a medical emergency. Babies this young cannot fight infections the way older children can.",
      actions: [
        "Go to the emergency room immediately",
        "Do not give any medication unless directed by a doctor",
        "Bring a record of the temperature and when it started",
      ],
      callScript:
        "My baby is [AGE] and has a fever of [TEMP]. I was told any fever under 3 months needs immediate evaluation. We are heading to the ER now.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "This fever combined with your baby's symptoms warrants prompt medical attention.",
      actions: [
        "Call your pediatrician's office or after-hours line now",
        "If you cannot reach them within 30 minutes, go to urgent care or the ER",
        "Write down the temperature, when it started, and any other symptoms",
      ],
      callScript:
        "Hi, my baby is [AGE] and has had a fever of [TEMP] for [DURATION]. They are also [SYMPTOMS]. I'd like to have them evaluated today.",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "This fever deserves a call to your pediatrician, but it's not an emergency.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Monitor the fever and keep notes on temperature and behavior",
        "Keep your baby hydrated  -  offer breast/bottle frequently",
        "Infant acetaminophen (Tylenol) is okay for babies 3+ months if your doctor agrees",
      ],
      callScript:
        "Hi, my baby is [AGE] and has had a fever of [TEMP] for about [DURATION]. They seem [BEHAVIOR]. I wanted to check whether they should be seen.",
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Low-grade fevers are common and usually mean the immune system is working. Keep an eye on things.",
      actions: [
        "Recheck temperature every 4 hours",
        "Keep your baby hydrated",
        "Dress them comfortably  -  don't over-bundle",
        "Call your pediatrician if the fever rises above 102°F or lasts more than 2-3 days",
        "Watch for changes in behavior  -  if they become inconsolable or stop eating, call sooner",
      ],
    },
  },
};
