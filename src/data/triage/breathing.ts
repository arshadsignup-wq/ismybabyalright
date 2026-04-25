import type { TriageTree } from "./types";

export const breathingTriage: TriageTree = {
  slug: "breathing",
  title: "Breathing Concerns",
  description: "Is my baby's breathing normal?",
  icon: "💨",
  startNodeId: "severity",
  nodes: {
    severity: {
      id: "severity",
      question: "What are you noticing?",
      options: [
        { label: "Blue lips, face, or tongue", nextNodeId: "outcome_911" },
        { label: "Struggling to breathe  -  ribs pulling in, flaring nostrils", nextNodeId: "outcome_911" },
        { label: "Breathing very fast or grunting", nextNodeId: "age_check" },
        { label: "Wheezing or whistling sound", nextNodeId: "wheezing" },
        { label: "Noisy breathing but seems comfortable", nextNodeId: "noisy_type" },
      ],
    },
    age_check: {
      id: "age_check",
      question: "How old is your baby?",
      options: [
        { label: "Under 3 months", nextNodeId: "outcome_emergency" },
        { label: "3-12 months", nextNodeId: "fast_breathing_behavior" },
        { label: "Over 12 months", nextNodeId: "fast_breathing_behavior" },
      ],
    },
    fast_breathing_behavior: {
      id: "fast_breathing_behavior",
      question: "Can your baby still eat and drink?",
      options: [
        { label: "No  -  too winded or refusing feeds", nextNodeId: "outcome_emergency" },
        { label: "Eating less than usual but still taking some", nextNodeId: "outcome_call_now" },
        { label: "Eating normally", nextNodeId: "outcome_call_office" },
      ],
    },
    wheezing: {
      id: "wheezing",
      question: "Is this the first time your baby has wheezed?",
      options: [
        { label: "Yes, first time  -  and they're struggling", nextNodeId: "outcome_call_now" },
        { label: "Yes, first time  -  but mild", nextNodeId: "outcome_call_office" },
        { label: "They have a known condition (asthma, RSV history)", nextNodeId: "outcome_call_office" },
      ],
    },
    noisy_type: {
      id: "noisy_type",
      question: "What kind of noise?",
      helpText: "Many babies have noisy breathing that is completely normal, especially when congested.",
      options: [
        { label: "Barky cough (croup-like)", nextNodeId: "outcome_call_now" },
        { label: "Snoring or rattling (congestion)", nextNodeId: "outcome_monitor" },
        { label: "High-pitched squeaking when breathing in", nextNodeId: "outcome_call_office" },
      ],
    },
  },
  outcomes: {
    outcome_911: {
      id: "outcome_911",
      level: "red",
      title: "Call 911 now",
      description:
        "Blue coloring or severe breathing difficulty is a medical emergency.",
      actions: [
        "Call 911 immediately",
        "Keep your baby upright if possible",
        "Do not put anything in their mouth",
        "Stay calm  -  help is on the way",
      ],
      callScript:
        "My baby is [AGE] and is having severe difficulty breathing. Their [LIPS ARE BLUE / RIBS ARE PULLING IN / THEY CAN'T BREATHE]. Please send help immediately.",
    },
    outcome_emergency: {
      id: "outcome_emergency",
      level: "red",
      title: "Go to the ER now",
      description:
        "Fast breathing or grunting in a very young baby needs immediate evaluation.",
      actions: [
        "Go to the emergency room",
        "Keep your baby upright",
        "Count breaths per minute to report to the doctor",
      ],
      callScript:
        "My baby is [AGE] and is breathing very fast  -  about [NUMBER] breaths per minute. They seem [BEHAVIOR]. We are heading to the ER.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "This breathing pattern needs same-day evaluation.",
      actions: [
        "Call your pediatrician or after-hours line",
        "Keep your baby upright and calm",
        "For croup: cool night air or a steamy bathroom can help while you wait",
        "Count breaths per minute to report to the doctor",
      ],
      callScript:
        "My baby is [AGE] and is [WHEEZING / HAS A BARKY COUGH / BREATHING FAST]. They are [EATING/NOT EATING]. This started [WHEN]. I'd like to have them evaluated today.",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "This is worth mentioning to your pediatrician but likely not urgent.",
      actions: [
        "Call your pediatrician at their next office hours",
        "Monitor for worsening  -  if breathing gets harder, call sooner",
        "Use a cool-mist humidifier and saline drops for congestion",
      ],
      callScript:
        "My baby has been [WHEEZING / MAKING NOISY BREATHING SOUNDS] for [DURATION]. They are eating and acting [BEHAVIOR]. Should they be seen?",
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Congestion and snoring-type breathing is very common in babies, especially with colds.",
      actions: [
        "Use saline drops and a bulb syringe to clear the nose",
        "Run a cool-mist humidifier in the room",
        "Keep baby's head slightly elevated during sleep",
        "Call your pediatrician if it worsens or your baby develops a fever",
      ],
    },
  },
};
