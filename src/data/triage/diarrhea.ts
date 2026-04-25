import type { TriageTree } from "./types";

export const diarrheaTriage: TriageTree = {
  slug: "diarrhea",
  title: "Diarrhea",
  description: "Is this diarrhea something to worry about?",
  icon: "💧",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 3 months", nextNodeId: "newborn_frequency" },
        { label: "3-12 months", nextNodeId: "frequency" },
        { label: "Over 12 months", nextNodeId: "frequency" },
      ],
    },
    newborn_frequency: {
      id: "newborn_frequency",
      question: "How many loose/watery stools in the last 24 hours?",
      helpText:
        "Breastfed newborns normally have frequent, loose stools. Diarrhea in a newborn means watery stools that are more frequent than their usual pattern.",
      options: [
        { label: "Noticeably more frequent and watery than usual", nextNodeId: "outcome_er_newborn" },
        { label: "Seems about normal for my baby", nextNodeId: "outcome_monitor" },
      ],
    },
    frequency: {
      id: "frequency",
      question: "How many loose/watery stools in the last 24 hours?",
      helpText:
        "Diarrhea means stools that are looser and more frequent than your baby's normal pattern.",
      options: [
        { label: "8 or more", nextNodeId: "dehydration" },
        { label: "4-7", nextNodeId: "duration" },
        { label: "1-3", nextNodeId: "stool_appearance" },
      ],
    },
    duration: {
      id: "duration",
      question: "How long has the diarrhea lasted?",
      options: [
        { label: "More than 2 days", nextNodeId: "dehydration" },
        { label: "1-2 days", nextNodeId: "stool_appearance" },
        { label: "Just started today", nextNodeId: "stool_appearance" },
      ],
    },
    stool_appearance: {
      id: "stool_appearance",
      question: "What do the stools look like?",
      options: [
        { label: "Bloody or black/tarry", nextNodeId: "outcome_er_bloody" },
        { label: "Mucus-filled or very foul-smelling", nextNodeId: "dehydration" },
        { label: "Watery but no blood or mucus", nextNodeId: "feeding" },
      ],
    },
    dehydration: {
      id: "dehydration",
      question: "Is your baby showing any of these dehydration signs?",
      helpText:
        "Check for: no wet diaper in 6+ hours, no tears when crying, sunken soft spot (fontanelle), dry mouth/lips, sunken eyes, or unusual sleepiness.",
      options: [
        { label: "Yes  -  sunken fontanelle, no tears, or no wet diaper in 6+ hours", nextNodeId: "outcome_er_dehydration" },
        { label: "Mild signs  -  fewer wet diapers, slightly dry mouth", nextNodeId: "outcome_call_now" },
        { label: "No  -  wet diapers and tears are normal", nextNodeId: "outcome_call_office" },
      ],
    },
    feeding: {
      id: "feeding",
      question: "How is your baby feeding and behaving?",
      options: [
        { label: "Refusing to drink, lethargic, or inconsolable", nextNodeId: "dehydration" },
        { label: "Drinking less than usual but still taking some", nextNodeId: "outcome_call_office" },
        { label: "Drinking well and acting mostly normal", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_er_newborn: {
      id: "outcome_er_newborn",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "Diarrhea in a baby under 3 months can lead to dehydration very quickly. Young infants have limited fluid reserves and need prompt evaluation.",
      actions: [
        "Call your pediatrician's office or after-hours line immediately",
        "If you cannot reach them within 30 minutes, go to the ER",
        "Continue offering breast milk or formula in small, frequent amounts",
        "Do not give water, juice, or anti-diarrheal medications",
        "Count wet diapers and note the time of each stool",
      ],
      callScript:
        "Hi, my baby is [AGE] and under 3 months old. They have diarrhea  -  watery stools that are more frequent than usual. I need to have them evaluated for dehydration.",
    },
    outcome_er_bloody: {
      id: "outcome_er_bloody",
      level: "red",
      title: "Seek immediate medical care",
      description:
        "Blood in diarrhea can indicate a bacterial infection, intussusception, or other condition that needs urgent evaluation.",
      actions: [
        "Call your pediatrician immediately or go to the ER",
        "Save a soiled diaper or take a photo to show the doctor",
        "Do not give any medications unless directed by a doctor",
        "Note when the bloody stools started and how many there have been",
      ],
      callScript:
        "Hi, my baby is [AGE] and has bloody diarrhea. The stools look [DESCRIBE  -  red blood, black/tarry, mucus with blood]. This started [WHEN]. I need them seen right away.",
    },
    outcome_er_dehydration: {
      id: "outcome_er_dehydration",
      level: "red",
      title: "Go to the ER now",
      description:
        "Your baby is showing signs of significant dehydration. Babies can become dangerously dehydrated much faster than adults. They may need IV fluids.",
      actions: [
        "Go to the emergency room now",
        "Try to offer small sips of breast milk, formula, or Pedialyte on the way",
        "Do not give plain water to infants under 12 months",
        "Bring a list of how many wet diapers and stools in the last 24 hours",
      ],
      callScript:
        "My baby is [AGE] and has diarrhea with signs of dehydration  -  [DESCRIBE: no wet diapers, no tears, sunken soft spot]. We are heading to the ER now.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Your baby is showing early signs of dehydration or has persistent diarrhea that needs medical guidance. Mild dehydration can be managed at home with the right approach, but your doctor should advise.",
      actions: [
        "Call your pediatrician during office hours or the after-hours line",
        "Offer frequent small amounts of breast milk, formula, or Pedialyte",
        "For babies over 6 months, your doctor may recommend an oral rehydration solution",
        "Avoid fruit juice and sugary drinks  -  they can worsen diarrhea",
        "Track wet diapers closely  -  aim for at least 4-6 in 24 hours",
      ],
      callScript:
        "Hi, my baby is [AGE] and has had diarrhea for [DURATION]. They are showing some mild dehydration signs  -  [DESCRIBE]. I want to check if they should be seen or if I can manage at home.",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "The diarrhea deserves a call to your pediatrician to discuss whether your baby should be seen, but it is not an emergency right now.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Continue breastfeeding or formula feeding as normal",
        "For babies on solids, offer bland foods like bananas, rice cereal, and toast",
        "Avoid dairy products other than breast milk or formula",
        "Monitor for signs of dehydration: fewer wet diapers, dry mouth, no tears",
      ],
      callScript:
        "Hi, my baby is [AGE] and has had diarrhea  -  about [NUMBER] loose stools per day for [DURATION]. They are still drinking and have wet diapers. Should they be seen?",
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Mild diarrhea is common in babies, especially with teething, new foods, or mild viral infections. As long as your baby is drinking well and producing wet diapers, you can monitor at home.",
      actions: [
        "Continue offering breast milk or formula frequently",
        "Watch for signs of dehydration: fewer wet diapers, dry lips, fussiness",
        "If your baby is eating solids, stick to bland foods and avoid juice",
        "Apply barrier cream (zinc oxide) to prevent diaper rash from frequent stools",
        "Call your pediatrician if diarrhea lasts more than 2 days or worsens",
      ],
    },
  },
};
