import type { TriageTree } from "./types";

export const congestionTriage: TriageTree = {
  slug: "congestion",
  title: "Congestion",
  description: "Is this congestion something to worry about?",
  icon: "🤧",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 3 months", nextNodeId: "breathing_difficulty_newborn" },
        { label: "3-12 months", nextNodeId: "breathing_difficulty" },
        { label: "Over 12 months", nextNodeId: "breathing_difficulty" },
      ],
    },
    breathing_difficulty_newborn: {
      id: "breathing_difficulty_newborn",
      question: "Is your baby having any trouble breathing?",
      helpText:
        "Newborns are obligate nose breathers  -  they cannot easily breathe through their mouths. Even mild congestion can affect their breathing and feeding.",
      options: [
        { label: "Fast breathing, flaring nostrils, or retractions (ribs showing with each breath)", nextNodeId: "outcome_er" },
        { label: "Noisy/snuffly breathing but no distress", nextNodeId: "feeding_newborn" },
      ],
    },
    feeding_newborn: {
      id: "feeding_newborn",
      question: "How is feeding going?",
      options: [
        { label: "Refusing to feed or pulling off breast/bottle repeatedly", nextNodeId: "outcome_call_now" },
        { label: "Feeding is a bit slower but still eating adequately", nextNodeId: "fever_check" },
        { label: "Feeding normally", nextNodeId: "outcome_monitor_newborn" },
      ],
    },
    breathing_difficulty: {
      id: "breathing_difficulty",
      question: "Is your baby showing any of these signs?",
      helpText:
        "Watch for: breathing fast (more than 50-60 breaths per minute), ribs showing with each breath (retractions), flaring nostrils, grunting, or blue/gray color around lips or face.",
      options: [
        { label: "Blue or gray lips/face", nextNodeId: "outcome_911" },
        { label: "Fast breathing, retractions, flaring nostrils, or grunting", nextNodeId: "outcome_er" },
        { label: "Wheezing or persistent cough with breathing effort", nextNodeId: "outcome_call_now" },
        { label: "Snuffly/stuffy but no breathing difficulty", nextNodeId: "feeding_impact" },
      ],
    },
    feeding_impact: {
      id: "feeding_impact",
      question: "How is the congestion affecting feeding?",
      options: [
        { label: "Cannot eat  -  refuses breast/bottle or chokes during feeds", nextNodeId: "outcome_call_now" },
        { label: "Eating less than usual or fussy during feeds", nextNodeId: "fever_check" },
        { label: "Feeding fine despite the congestion", nextNodeId: "duration" },
      ],
    },
    fever_check: {
      id: "fever_check",
      question: "Does your baby have a fever?",
      helpText: "A fever is 100.4°F (38°C) or higher measured rectally.",
      options: [
        { label: "Yes  -  fever of 100.4°F (38°C) or higher", nextNodeId: "outcome_call_now" },
        { label: "No fever", nextNodeId: "duration" },
      ],
    },
    duration: {
      id: "duration",
      question: "How long has the congestion lasted?",
      options: [
        { label: "More than 10 days without improvement", nextNodeId: "discharge_color" },
        { label: "10 days or less", nextNodeId: "discharge_color" },
      ],
    },
    discharge_color: {
      id: "discharge_color",
      question: "What does the nasal discharge look like?",
      helpText:
        "Yellow or green mucus is common during a cold and does not automatically mean a bacterial infection. What matters more is the duration and whether it is getting worse.",
      options: [
        { label: "Thick yellow/green for 10+ days OR got better then suddenly worse", nextNodeId: "outcome_call_office" },
        { label: "Clear or white discharge", nextNodeId: "outcome_monitor" },
        { label: "Yellow/green but less than 10 days", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_911: {
      id: "outcome_911",
      level: "red",
      title: "Call 911 now",
      description:
        "Blue or gray color around the lips or face means your baby is not getting enough oxygen. This is a medical emergency.",
      actions: [
        "Call 911 immediately",
        "Keep your baby upright if possible",
        "Do not put anything in your baby's nose or mouth",
        "Stay calm and stay with your baby until help arrives",
      ],
      callScript:
        "My baby is [AGE] and their lips/face are turning blue/gray. They are having trouble breathing. I need an ambulance immediately.",
    },
    outcome_er: {
      id: "outcome_er",
      level: "red",
      title: "Go to the ER now",
      description:
        "Signs of respiratory distress  -  fast breathing, retractions, nostril flaring, or grunting  -  mean your baby is working hard to breathe and needs immediate evaluation.",
      actions: [
        "Go to the emergency room now",
        "Keep your baby upright in their car seat on the way",
        "Use a bulb syringe or NoseFrida to gently clear the nose if possible",
        "Do not give any cold medications  -  they are not safe for infants",
      ],
      callScript:
        "My baby is [AGE] and is having difficulty breathing  -  [DESCRIBE: fast breathing, nostrils flaring, ribs pulling in]. They are also congested. We are heading to the ER.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Congestion that is significantly affecting feeding, combined with fever, or causing wheezing needs medical guidance today. Your baby may need to be examined.",
      actions: [
        "Call your pediatrician's office or after-hours line",
        "Use saline drops and a bulb syringe before feeds to help clear the nose",
        "Run a cool-mist humidifier in the baby's room",
        "Keep your baby hydrated  -  offer breast/bottle frequently in smaller amounts",
        "Elevate the head of the crib slightly (place a rolled towel under the mattress, not loose items in the crib)",
        "Do not give over-the-counter cold or cough medications to infants",
      ],
      callScript:
        "Hi, my baby is [AGE] and has congestion that is [affecting feeding / accompanied by fever / causing wheezing]. This started [WHEN]. Should they be seen today?",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "Congestion lasting more than 10 days or that improves then suddenly worsens may suggest a sinus infection or secondary bacterial infection. Your pediatrician should evaluate.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Continue saline drops and gentle suctioning",
        "Note the color and consistency of discharge to report",
        "Use a cool-mist humidifier",
        "Watch for new fever, which could suggest a secondary infection",
      ],
      callScript:
        "Hi, my baby is [AGE] and has had congestion for [DURATION]. The discharge is [DESCRIBE]. It has [not improved / gotten worse after improving]. Should they be seen?",
    },
    outcome_monitor_newborn: {
      id: "outcome_monitor_newborn",
      level: "green",
      title: "Monitor at home  -  but watch closely",
      description:
        "Mild congestion is very common in newborns. Their tiny nasal passages get stuffy easily. Since your baby is feeding well and breathing comfortably, you can manage at home, but watch closely because newborns can change quickly.",
      actions: [
        "Use saline drops (1-2 drops per nostril) before feeds",
        "Gently suction with a bulb syringe or NoseFrida after saline",
        "Run a cool-mist humidifier in the baby's room",
        "Call your pediatrician if feeding worsens, breathing becomes labored, or fever develops",
        "Do not use menthol rubs, essential oils, or cold medications on newborns",
      ],
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "This sounds like a typical cold. Most colds in babies last 7-10 days and resolve on their own. The congestion is often worse at night and during the first few days.",
      actions: [
        "Use saline drops and gentle suctioning as needed  -  especially before feeds and sleep",
        "Run a cool-mist humidifier in the baby's room",
        "Keep your baby hydrated with regular breast/bottle feeds",
        "Sit in a steamy bathroom for 10-15 minutes to help loosen mucus",
        "Call your pediatrician if symptoms last more than 10 days, fever develops, or breathing becomes difficult",
        "Do not give over-the-counter cold medications to children under 4 years old",
      ],
    },
  },
};
