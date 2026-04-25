import type { TriageTree } from "./types";

export const constipationTriage: TriageTree = {
  slug: "constipation",
  title: "Constipation",
  description: "Is this constipation something to worry about?",
  icon: "😣",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 48 hours old (newborn)", nextNodeId: "meconium" },
        { label: "Under 6 months", nextNodeId: "feeding_type" },
        { label: "6 months or older", nextNodeId: "stool_appearance" },
      ],
    },
    meconium: {
      id: "meconium",
      question: "Has your newborn passed their first stool (meconium)?",
      helpText:
        "Meconium is a dark green-black, sticky first stool. Most newborns pass it within 24-48 hours of birth.",
      options: [
        { label: "No  -  no stool at all yet", nextNodeId: "outcome_er_meconium" },
        { label: "Yes  -  they have had a stool", nextNodeId: "feeding_type" },
      ],
    },
    feeding_type: {
      id: "feeding_type",
      question: "How is your baby fed?",
      helpText:
        "Breastfed babies can sometimes go several days between stools and this can be normal. Formula-fed babies tend to have more regular stools.",
      options: [
        { label: "Exclusively breastfed", nextNodeId: "breastfed_pattern" },
        { label: "Formula-fed or mixed feeding", nextNodeId: "stool_appearance" },
      ],
    },
    breastfed_pattern: {
      id: "breastfed_pattern",
      question: "Is your breastfed baby straining but passing soft stools?",
      helpText:
        "Many breastfed babies grunt, turn red, and strain before passing a perfectly soft stool. This is called infant dyschezia (grunting baby syndrome) and is normal.",
      options: [
        { label: "Yes  -  straining but stools are soft when they come", nextNodeId: "outcome_normal_straining" },
        { label: "Stools are hard, dry, or pellet-like", nextNodeId: "stool_appearance" },
        { label: "No stool in 7+ days and baby is uncomfortable", nextNodeId: "other_symptoms" },
      ],
    },
    stool_appearance: {
      id: "stool_appearance",
      question: "What do the stools look like?",
      options: [
        { label: "Hard, dry, or pellet-like", nextNodeId: "duration" },
        { label: "Has blood on the surface or in the diaper", nextNodeId: "blood_details" },
        { label: "Soft but infrequent", nextNodeId: "outcome_normal_straining" },
      ],
    },
    blood_details: {
      id: "blood_details",
      question: "Describe the blood you are seeing.",
      options: [
        { label: "Small streak of blood on a hard stool (like a small cut)", nextNodeId: "duration" },
        { label: "Blood mixed into the stool or a significant amount", nextNodeId: "outcome_er_blood" },
      ],
    },
    duration: {
      id: "duration",
      question: "How long has your baby been constipated?",
      options: [
        { label: "5 or more days with hard stools", nextNodeId: "other_symptoms" },
        { label: "2-4 days", nextNodeId: "other_symptoms" },
        { label: "Just started (1-2 stools)", nextNodeId: "feeding_behavior" },
      ],
    },
    other_symptoms: {
      id: "other_symptoms",
      question: "Is your baby showing any of these symptoms?",
      options: [
        { label: "Vomiting AND a swollen/distended belly", nextNodeId: "outcome_er_obstruction" },
        { label: "Refusing to eat or very irritable", nextNodeId: "outcome_call_now" },
        { label: "Uncomfortable but no vomiting or belly swelling", nextNodeId: "outcome_call_office" },
      ],
    },
    feeding_behavior: {
      id: "feeding_behavior",
      question: "How is your baby eating and behaving?",
      options: [
        { label: "Refusing feeds, crying in pain, or very irritable", nextNodeId: "outcome_call_office" },
        { label: "Eating well, just straining with hard stools", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_er_meconium: {
      id: "outcome_er_meconium",
      level: "red",
      title: "Tell your medical team now",
      description:
        "A newborn who has not passed meconium within 48 hours needs evaluation. This can be a sign of Hirschsprung disease or other intestinal conditions that require prompt diagnosis.",
      actions: [
        "If still in the hospital, alert your nurse or doctor immediately",
        "If already discharged, call your pediatrician right away or go to the ER",
        "Note the time of birth and confirm no stool has been passed",
        "Do not give any laxatives, suppositories, or home remedies",
      ],
      callScript:
        "Hi, my newborn is [AGE IN HOURS] hours old and has not passed meconium yet. I was told this should happen within 48 hours. They need to be evaluated.",
    },
    outcome_er_blood: {
      id: "outcome_er_blood",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "Significant blood in or mixed with stool needs prompt evaluation. While a small streak on a hard stool is usually a minor anal fissure, larger amounts can indicate an allergy, infection, or other condition.",
      actions: [
        "Call your pediatrician immediately",
        "Save the diaper or take a photo to show the doctor",
        "If your baby also has vomiting, a distended belly, or is lethargic, go to the ER",
        "Do not give any medications unless directed by a doctor",
      ],
      callScript:
        "Hi, my baby is [AGE] and has blood in their stool  -  [DESCRIBE: mixed in, significant amount]. I need them evaluated. Should I come in or go to the ER?",
    },
    outcome_er_obstruction: {
      id: "outcome_er_obstruction",
      level: "red",
      title: "Go to the ER now",
      description:
        "Vomiting combined with a swollen, hard belly and no stools can be a sign of intestinal obstruction. This is a medical emergency that needs immediate evaluation.",
      actions: [
        "Go to the emergency room now",
        "Do not give anything to eat or drink unless directed by a doctor",
        "Note when the last stool was passed",
        "Note when vomiting started and whether the vomit looks green (bile)",
      ],
      callScript:
        "My baby is [AGE] and has not had a stool in [DAYS]. Their belly is swollen and they are vomiting. We are heading to the ER now.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Your baby seems uncomfortable and is having trouble with feeding. Your pediatrician can advise whether they need to be seen and may recommend safe interventions.",
      actions: [
        "Call your pediatrician during office hours or the after-hours line",
        "Do not give laxatives, enemas, or suppositories without your doctor's guidance",
        "Tummy massage in a clockwise direction may help  -  gentle circular motions around the belly button",
        "For babies on solids, offer high-fiber foods like prunes, pears, or peas",
        "Bicycle leg movements can help stimulate a bowel movement",
      ],
      callScript:
        "Hi, my baby is [AGE] and has been constipated for [DURATION]. They are [refusing to eat / very irritable / in pain]. What should I do?",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "Persistent constipation deserves a call to your pediatrician. They may want to see your baby or can suggest safe remedies over the phone.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Track when your baby has stools and what they look like",
        "Try gentle tummy massage and bicycle leg movements",
        "For formula-fed babies, ask your doctor about switching formulas",
        "For babies on solids, increase fiber with pureed prunes, pears, or peas",
        "Do not use home remedies like honey, corn syrup, or mineral oil without asking your doctor",
      ],
      callScript:
        "Hi, my baby is [AGE] and has been constipated  -  hard stools for about [DURATION]. They are [DESCRIBE BEHAVIOR]. I wanted to ask if they should be seen or if there is something safe I can try.",
    },
    outcome_normal_straining: {
      id: "outcome_normal_straining",
      level: "green",
      title: "Likely normal  -  no action needed",
      description:
        "Many babies grunt, strain, and turn red before passing a stool, even when the stool itself is soft. This is called infant dyschezia and is a normal part of learning to coordinate their muscles. Breastfed babies can also go several days between stools and be perfectly healthy.",
      actions: [
        "This is normal and usually resolves on its own by 3-4 months",
        "No treatment is needed if stools are soft when they come",
        "Do not use rectal stimulation routinely  -  it can create dependency",
        "Call your pediatrician if stools become hard, dry, or pellet-like",
        "Call if your baby seems truly in pain (not just straining)",
      ],
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Occasional hard stools can happen, especially when starting solids or changing formula. As long as your baby is eating and growing well, you can try some simple measures at home.",
      actions: [
        "Ensure adequate fluid intake  -  extra water for babies over 6 months",
        "For babies on solids, offer high-fiber foods: prunes, pears, peas, oatmeal",
        "Tummy massage and bicycle legs can help",
        "Call your pediatrician if constipation lasts more than 5 days or if you see blood",
        "Do not give laxatives or suppositories without your doctor's guidance",
      ],
    },
  },
};
