import type { TriageTree } from "./types";

export const rashTriage: TriageTree = {
  slug: "rash",
  title: "Rash",
  description: "Is this rash something to worry about?",
  icon: "🔴",
  startNodeId: "blanch_test",
  nodes: {
    blanch_test: {
      id: "blanch_test",
      question: "Press on the rash with a glass or your finger. Does it temporarily go white (blanch)?",
      helpText: "A rash that does NOT blanch (stays red/purple when pressed) can be a sign of a serious condition.",
      options: [
        { label: "It does NOT blanch  -  stays red/purple", nextNodeId: "outcome_emergency" },
        { label: "It blanches (goes white then returns)", nextNodeId: "fever_check" },
        { label: "I'm not sure", nextNodeId: "fever_check" },
      ],
    },
    fever_check: {
      id: "fever_check",
      question: "Does your baby have a fever with the rash?",
      options: [
        { label: "Yes, fever over 100.4°F (38°C)", nextNodeId: "fever_behavior" },
        { label: "No fever", nextNodeId: "rash_type" },
      ],
    },
    fever_behavior: {
      id: "fever_behavior",
      question: "How is your baby acting?",
      options: [
        { label: "Very irritable, lethargic, or won't eat", nextNodeId: "outcome_call_now" },
        { label: "Fussy but consolable", nextNodeId: "outcome_call_office" },
        { label: "Acting normal despite the rash", nextNodeId: "outcome_call_office" },
      ],
    },
    rash_type: {
      id: "rash_type",
      question: "What does the rash look like?",
      options: [
        { label: "Hives (raised, itchy welts)  -  appeared suddenly", nextNodeId: "hives_breathing" },
        { label: "Blistering or oozing", nextNodeId: "outcome_call_now" },
        { label: "Dry, rough, or flaky patches", nextNodeId: "outcome_monitor" },
        { label: "Small bumps or general redness", nextNodeId: "outcome_monitor" },
      ],
    },
    hives_breathing: {
      id: "hives_breathing",
      question: "Is your baby having any trouble breathing, swelling of lips/tongue, or vomiting?",
      helpText: "These could be signs of a serious allergic reaction (anaphylaxis).",
      options: [
        { label: "Yes  -  difficulty breathing, swelling, or vomiting", nextNodeId: "outcome_911" },
        { label: "No  -  just the hives", nextNodeId: "outcome_call_now" },
      ],
    },
  },
  outcomes: {
    outcome_911: {
      id: "outcome_911",
      level: "red",
      title: "Call 911  -  possible anaphylaxis",
      description:
        "Hives with breathing difficulty, swelling, or vomiting could be a severe allergic reaction.",
      actions: [
        "Call 911 immediately",
        "If you have an EpiPen prescribed, use it now",
        "Lay your baby flat (or upright if having trouble breathing)",
        "Do not give any food or drink",
      ],
      callScript:
        "My baby is having a severe allergic reaction. They have hives and [BREATHING DIFFICULTY/SWELLING/VOMITING]. We need an ambulance.",
    },
    outcome_emergency: {
      id: "outcome_emergency",
      level: "red",
      title: "Go to the ER now",
      description:
        "A non-blanching rash (petechiae/purpura) can indicate a serious infection like meningitis. This needs immediate evaluation.",
      actions: [
        "Go to the emergency room immediately",
        "Note when the rash first appeared",
        "Take a photo if possible to show the doctor",
      ],
      callScript:
        "My baby has a rash that does not blanch when I press on it. It appeared [WHEN]. I'm heading to the ER for evaluation.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "This rash needs a same-day evaluation by your pediatrician.",
      actions: [
        "Call your pediatrician or after-hours line",
        "Take a photo of the rash to show the doctor",
        "Note any new foods, products, or medications in the last 48 hours",
      ],
      callScript:
        "My baby is [AGE] and has developed [RASH DESCRIPTION]. It started [WHEN]. They [DO/DO NOT] have a fever. I'd like to have them seen today.",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "This is worth a call to your pediatrician, but likely not urgent.",
      actions: [
        "Call your pediatrician at their next office hours",
        "Take a photo of the rash",
        "Note any new foods, soaps, or detergents",
        "If the rash spreads rapidly or your baby develops a high fever, call sooner",
      ],
      callScript:
        "My baby has a rash with a mild fever. It started [WHEN]. They are acting [BEHAVIOR]. Should they be seen?",
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Many rashes in babies are harmless  -  eczema, baby acne, heat rash, and drool rash are very common.",
      actions: [
        "Keep the area clean and dry",
        "Use fragrance-free moisturizer for dry patches",
        "Avoid new soaps or detergents",
        "Call your pediatrician if it spreads, blisters, or doesn't improve in a week",
      ],
    },
  },
};
