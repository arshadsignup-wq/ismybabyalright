import type { TriageTree } from "./types";

export const earPainTriage: TriageTree = {
  slug: "ear-pain",
  title: "Ear Pain",
  description: "Is this ear pain something to worry about?",
  icon: "👂",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 6 months", nextNodeId: "symptoms_infant" },
        { label: "6-24 months", nextNodeId: "symptoms" },
        { label: "Over 24 months", nextNodeId: "symptoms" },
      ],
    },
    symptoms_infant: {
      id: "symptoms_infant",
      question: "What are you noticing?",
      helpText:
        "Babies under 6 months cannot point to their ear. Signs of ear pain include: fussiness (especially when lying down), pulling or rubbing at the ear, trouble sleeping, and difficulty feeding.",
      options: [
        { label: "Fluid or blood draining from the ear", nextNodeId: "outcome_er_drainage" },
        { label: "Fever with ear pulling and very fussy", nextNodeId: "outcome_call_now_infant" },
        { label: "Ear pulling but no fever, generally content", nextNodeId: "teething_check" },
      ],
    },
    symptoms: {
      id: "symptoms",
      question: "What symptoms is your child showing?",
      options: [
        { label: "Fluid or blood draining from the ear", nextNodeId: "outcome_er_drainage" },
        { label: "Stiff neck, severe headache, or walking unsteadily", nextNodeId: "outcome_er_serious" },
        { label: "Ear pain with fever", nextNodeId: "fever_severity" },
        { label: "Ear tugging or complaining of ear pain, no fever", nextNodeId: "pain_duration" },
      ],
    },
    teething_check: {
      id: "teething_check",
      question: "Is your baby showing signs of teething?",
      helpText:
        "Teething often causes babies to pull on their ears. Signs of teething include: drooling, chewing on things, swollen gums, and fussiness.",
      options: [
        { label: "Yes  -  drooling, chewing, swollen gums", nextNodeId: "outcome_likely_teething" },
        { label: "No teething signs  -  just pulling at the ear", nextNodeId: "pain_duration" },
      ],
    },
    fever_severity: {
      id: "fever_severity",
      question: "How high is the fever?",
      options: [
        { label: "104°F (40°C) or higher", nextNodeId: "outcome_call_now_high_fever" },
        { label: "102-104°F (38.9-40°C)", nextNodeId: "ear_history" },
        { label: "100.4-102°F (38-38.9°C)", nextNodeId: "ear_history" },
      ],
    },
    ear_history: {
      id: "ear_history",
      question: "How often does your child get ear infections?",
      helpText:
        "Recurrent ear infections (3 in 6 months or 4 in 12 months) may warrant a referral to an ENT specialist.",
      options: [
        { label: "This would be the 2nd or 3rd in the last 6 months", nextNodeId: "outcome_call_now_recurrent" },
        { label: "First time or rare", nextNodeId: "outcome_call_office" },
      ],
    },
    pain_duration: {
      id: "pain_duration",
      question: "How long has the ear bothering lasted?",
      options: [
        { label: "Waking at night crying, grabbing the ear for 2+ nights", nextNodeId: "outcome_call_office" },
        { label: "More than 3 days", nextNodeId: "outcome_call_office" },
        { label: "Just started today or yesterday", nextNodeId: "recent_illness" },
      ],
    },
    recent_illness: {
      id: "recent_illness",
      question: "Has your child had a cold or upper respiratory infection recently?",
      helpText:
        "Ear infections often develop a few days after a cold, because congestion blocks the Eustachian tubes.",
      options: [
        { label: "Yes  -  cold or runny nose in the last week", nextNodeId: "outcome_call_office" },
        { label: "No recent illness", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_er_drainage: {
      id: "outcome_er_drainage",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "Fluid or blood draining from the ear can indicate a ruptured eardrum or, more rarely, a serious infection. While a ruptured eardrum from an ear infection often heals on its own, it needs to be evaluated.",
      actions: [
        "Call your pediatrician immediately or go to urgent care",
        "Do not put anything into the ear  -  no drops, no cotton swabs",
        "Gently place a clean cotton ball at the outer ear to catch drainage",
        "Note the color and amount of drainage to report to the doctor",
        "If your child also has high fever, stiff neck, or seems very ill, go to the ER",
      ],
      callScript:
        "Hi, my child is [AGE] and has [fluid/blood] draining from their ear. It started [WHEN]. They [do/do not] have a fever. I need them seen today.",
    },
    outcome_er_serious: {
      id: "outcome_er_serious",
      level: "red",
      title: "Go to the ER now",
      description:
        "Ear pain combined with a stiff neck, severe headache, or balance problems can indicate a more serious infection such as mastoiditis or meningitis. These need immediate evaluation.",
      actions: [
        "Go to the emergency room now",
        "Note all symptoms and when they started",
        "Do not give any medications unless directed by a doctor",
        "If there is swelling or redness behind the ear, point this out to the ER team",
      ],
      callScript:
        "My child is [AGE] and has ear pain with [stiff neck / severe headache / trouble walking]. We are heading to the ER for evaluation.",
    },
    outcome_call_now_infant: {
      id: "outcome_call_now_infant",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Ear infections in babies under 6 months generally require antibiotics because their immune systems are still developing. Your pediatrician should see your baby today.",
      actions: [
        "Call your pediatrician for a same-day appointment",
        "You can give infant acetaminophen (Tylenol) for pain if your doctor agrees  -  do not give ibuprofen to babies under 6 months",
        "Hold your baby upright to help relieve pressure in the ear",
        "Continue breastfeeding or bottle-feeding frequently",
        "A warm (not hot) compress against the ear may provide comfort",
      ],
      callScript:
        "Hi, my baby is [AGE]  -  under 6 months  -  and has a fever of [TEMP] with ear pulling and fussiness. I think they may have an ear infection. Can they be seen today?",
    },
    outcome_call_now_high_fever: {
      id: "outcome_call_now_high_fever",
      level: "yellow",
      title: "Call your pediatrician now",
      description:
        "A high fever with ear pain needs prompt attention. Your pediatrician may want to see your child today or may call in antibiotics.",
      actions: [
        "Call your pediatrician's office or after-hours line",
        "Give age-appropriate acetaminophen or ibuprofen for fever and pain",
        "Keep your child hydrated",
        "If you cannot reach your pediatrician within an hour, go to urgent care",
      ],
      callScript:
        "Hi, my child is [AGE] and has a fever of [TEMP] with ear pain. The fever is quite high. Should they be seen today?",
    },
    outcome_call_now_recurrent: {
      id: "outcome_call_now_recurrent",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Recurrent ear infections may need a different treatment approach. Your pediatrician should evaluate and may consider a referral to an ENT (ear, nose, and throat) specialist to discuss options like ear tubes.",
      actions: [
        "Call your pediatrician for an appointment",
        "Keep a log of all ear infections  -  dates, treatments, and outcomes",
        "Give age-appropriate pain relief (acetaminophen or ibuprofen for 6+ months)",
        "Ask your doctor about ENT referral if this is the 3rd infection in 6 months",
      ],
      callScript:
        "Hi, my child is [AGE] and I think they have another ear infection  -  this would be the [NUMBER] one in [TIME PERIOD]. They have [SYMPTOMS]. I'd like to discuss whether we should see an ENT.",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "This likely needs evaluation for a possible ear infection. Many ear infections will improve on their own, but your pediatrician can determine if antibiotics are needed.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Give age-appropriate pain relief  -  acetaminophen for all ages, ibuprofen for 6+ months",
        "A warm (not hot) washcloth held against the ear can provide comfort",
        "Elevate the head slightly during sleep",
        "Do not put any drops in the ear unless prescribed",
        "Go to urgent care if pain becomes severe or high fever develops before the appointment",
      ],
      callScript:
        "Hi, my child is [AGE] and has [ear pain / ear tugging] for [DURATION]. They [have / do not have] a fever. They recently had [cold / no illness]. Should they be seen?",
    },
    outcome_likely_teething: {
      id: "outcome_likely_teething",
      level: "green",
      title: "Likely teething  -  monitor at home",
      description:
        "Ear pulling is very common during teething because the nerves in the jaw and ear are connected. If your baby has no fever, is feeding well, and shows teething signs, this is most likely the cause.",
      actions: [
        "Offer a cold teething ring or cold washcloth to chew on",
        "Gently rub the gums with a clean finger",
        "Infant acetaminophen can help if your baby is very uncomfortable (ask your doctor about dosing)",
        "Call your pediatrician if fever develops or the ear pulling persists beyond a few days without teething signs",
      ],
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Brief ear pulling or touching without fever or other symptoms is very common in babies. It may be habit, curiosity, or mild discomfort from pressure changes or congestion.",
      actions: [
        "Watch for fever, drainage from the ear, or increased fussiness",
        "If a cold develops in the next few days, ear pain may follow  -  watch for signs",
        "Call your pediatrician if ear pulling continues for more than 3 days or fever develops",
        "Avoid putting anything into the ear canal",
      ],
    },
  },
};
