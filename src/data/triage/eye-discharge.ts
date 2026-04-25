import type { TriageTree } from "./types";

export const eyeDischargeTriage: TriageTree = {
  slug: "eye-discharge",
  title: "Eye Discharge",
  description: "Is this eye discharge something to worry about?",
  icon: "👁️",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      options: [
        { label: "Under 28 days (newborn)", nextNodeId: "newborn_discharge" },
        { label: "1-6 months", nextNodeId: "discharge_type" },
        { label: "Over 6 months", nextNodeId: "discharge_type" },
      ],
    },
    newborn_discharge: {
      id: "newborn_discharge",
      question: "What does the eye discharge look like?",
      helpText:
        "Eye discharge in a newborn under 28 days can be a sign of a serious infection (ophthalmia neonatorum) that needs urgent treatment to protect vision.",
      options: [
        { label: "Thick yellow, green, or pus-like discharge", nextNodeId: "outcome_er_newborn" },
        { label: "Watery or mildly sticky, eye not very red", nextNodeId: "newborn_swelling" },
      ],
    },
    newborn_swelling: {
      id: "newborn_swelling",
      question: "Is there any swelling of the eyelid?",
      options: [
        { label: "Yes  -  eyelid is swollen or very red", nextNodeId: "outcome_er_newborn" },
        { label: "No swelling  -  just watery or mildly sticky", nextNodeId: "outcome_call_office_newborn" },
      ],
    },
    discharge_type: {
      id: "discharge_type",
      question: "What does the eye discharge look like?",
      options: [
        { label: "Thick yellow or green pus", nextNodeId: "eyelid_swelling" },
        { label: "Watery with tearing, eye may be red", nextNodeId: "injury_check" },
        { label: "Mild crusting in the morning only, clears during the day", nextNodeId: "crusting_pattern" },
      ],
    },
    eyelid_swelling: {
      id: "eyelid_swelling",
      question: "Is the eyelid swollen?",
      options: [
        { label: "Yes  -  eyelid swollen AND fever", nextNodeId: "outcome_er_cellulitis" },
        { label: "Yes  -  eyelid swollen but no fever", nextNodeId: "outcome_call_now" },
        { label: "No eyelid swelling  -  just discharge", nextNodeId: "duration_discharge" },
      ],
    },
    injury_check: {
      id: "injury_check",
      question: "Could there have been an eye injury?",
      helpText:
        "Think about: scratches, pokes, something getting into the eye, chemical exposure, or any recent trauma to the face.",
      options: [
        { label: "Yes  -  possible scratch, poke, or something in the eye", nextNodeId: "outcome_er_injury" },
        { label: "No injury  -  just started on its own", nextNodeId: "redness_check" },
      ],
    },
    redness_check: {
      id: "redness_check",
      question: "Is the white of the eye red or pink?",
      options: [
        { label: "Very red with thick discharge", nextNodeId: "outcome_call_now" },
        { label: "Mildly pink with watery discharge", nextNodeId: "duration_discharge" },
        { label: "Not red  -  just watery/teary", nextNodeId: "crusting_pattern" },
      ],
    },
    duration_discharge: {
      id: "duration_discharge",
      question: "How long has the discharge been present?",
      options: [
        { label: "More than 3 days or getting worse", nextNodeId: "outcome_call_office" },
        { label: "1-3 days, not getting worse", nextNodeId: "outcome_monitor_conjunctivitis" },
        { label: "Just started today", nextNodeId: "outcome_monitor_conjunctivitis" },
      ],
    },
    crusting_pattern: {
      id: "crusting_pattern",
      question: "How would you describe the pattern?",
      helpText:
        "A blocked tear duct (dacryostenosis) is very common in babies under 12 months. The eye tears up and gets crusty but is not red or painful.",
      options: [
        { label: "One eye only, watery/crusty but not red  -  been going on for weeks", nextNodeId: "outcome_blocked_duct" },
        { label: "Both eyes crusty, some redness", nextNodeId: "outcome_call_office" },
        { label: "One eye, just started, mild crusting", nextNodeId: "outcome_monitor_mild" },
      ],
    },
  },
  outcomes: {
    outcome_er_newborn: {
      id: "outcome_er_newborn",
      level: "red",
      title: "Seek immediate medical care",
      description:
        "Eye discharge with swelling or thick pus in a newborn under 28 days can be caused by gonorrhea or chlamydia (ophthalmia neonatorum). This is a medical emergency that can cause permanent vision damage if not treated promptly with antibiotics.",
      actions: [
        "Go to the ER or call your pediatrician immediately",
        "Do not try to treat at home with breast milk or other home remedies",
        "Gently clean discharge from the eye with a clean, damp cloth  -  wipe from inner corner outward",
        "Do not share washcloths or towels",
        "Both parents may need STI testing  -  this is routine and important for the baby's treatment",
      ],
      callScript:
        "Hi, my newborn is [AGE IN DAYS] days old and has [thick discharge / pus / swelling] in their eye. I know eye infections in newborns can be serious. They need to be seen right away.",
    },
    outcome_er_cellulitis: {
      id: "outcome_er_cellulitis",
      level: "red",
      title: "Go to the ER now",
      description:
        "A swollen eyelid with fever can be periorbital or orbital cellulitis  -  a bacterial infection around the eye that can spread. This needs urgent evaluation and treatment.",
      actions: [
        "Go to the emergency room now",
        "Note when the swelling started and whether it is getting worse",
        "Check if your child can move the eye in all directions  -  report this to the doctor",
        "Do not apply warm compresses until evaluated  -  this needs antibiotics",
      ],
      callScript:
        "My child is [AGE] and has a swollen eyelid with a fever of [TEMP]. The swelling started [WHEN] and is [getting worse / stable]. We are heading to the ER.",
    },
    outcome_er_injury: {
      id: "outcome_er_injury",
      level: "red",
      title: "Seek medical care now",
      description:
        "Eye injuries in babies and children need prompt evaluation to protect vision. Even if the injury seems minor, a doctor should examine the eye.",
      actions: [
        "Call your pediatrician or go to the ER or urgent care",
        "Do not rub the eye or try to remove anything stuck in it",
        "If a chemical got in the eye, rinse gently with clean water for 15 minutes before going",
        "Do not put any drops or ointments in the eye unless directed by a doctor",
        "Try to prevent your child from rubbing the eye",
      ],
      callScript:
        "My child is [AGE] and may have an eye injury  -  [DESCRIBE what happened]. Their eye is [watery / red / swollen]. I need them examined today.",
    },
    outcome_call_now: {
      id: "outcome_call_now",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Thick discharge with eyelid swelling or significant redness likely needs prescription antibiotic drops or ointment. Your pediatrician should evaluate today.",
      actions: [
        "Call your pediatrician for a same-day appointment",
        "Gently clean discharge with a warm, damp cloth  -  wipe from inner corner outward",
        "Use a fresh cloth or cotton ball for each wipe and each eye",
        "Wash your hands thoroughly before and after cleaning the eye",
        "Do not use over-the-counter eye drops without your doctor's guidance",
      ],
      callScript:
        "Hi, my child is [AGE] and has [thick yellow/green discharge / eyelid swelling] in their [left/right/both] eye(s). It started [WHEN]. Can they be seen today?",
    },
    outcome_call_office_newborn: {
      id: "outcome_call_office_newborn",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Even mild eye discharge in a newborn should be evaluated, since newborns are more vulnerable to eye infections. It may be a blocked tear duct, but your doctor should confirm.",
      actions: [
        "Call your pediatrician during office hours for guidance",
        "Gently clean the eye with a warm, damp cloth",
        "Watch for worsening  -  more discharge, swelling, or redness",
        "If thick pus or swelling develops before the appointment, go to the ER instead",
      ],
      callScript:
        "Hi, my newborn is [AGE IN DAYS] days old and has mild watery/sticky discharge from their eye. There is no swelling. Should they be seen?",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "Persistent or worsening eye discharge should be evaluated by your pediatrician. They can determine if antibiotic drops are needed or if it is a blocked tear duct that needs monitoring.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Keep the eye clean with gentle warm compresses",
        "Wash your hands before and after touching the eye area",
        "If your child is in daycare, they may need to stay home until evaluated",
        "Watch for increased swelling, pain, or fever  -  call sooner if these develop",
      ],
      callScript:
        "Hi, my child is [AGE] and has had eye discharge for [DURATION]. It is [DESCRIBE: thick, green, crusty, both eyes]. Should they be seen?",
    },
    outcome_blocked_duct: {
      id: "outcome_blocked_duct",
      level: "green",
      title: "Likely a blocked tear duct  -  monitor at home",
      description:
        "A blocked tear duct (dacryostenosis) is very common in babies  -  up to 20% are born with one. The eye tears up and gets crusty because tears cannot drain properly through the small duct into the nose. Most resolve on their own by 12 months.",
      actions: [
        "Gently massage the inner corner of the eye (near the nose) 2-3 times per day  -  use a clean finger with gentle downward strokes",
        "Clean crusting with a warm, damp cloth as needed",
        "Mention it at your next well-baby visit",
        "Call your pediatrician if the eye becomes very red, swollen, or develops thick green/yellow pus  -  this could mean the duct is infected",
        "If not resolved by 12 months, your pediatrician may refer to an ophthalmologist",
      ],
    },
    outcome_monitor_conjunctivitis: {
      id: "outcome_monitor_conjunctivitis",
      level: "green",
      title: "Monitor at home for now",
      description:
        "This may be viral conjunctivitis (pink eye), which typically resolves on its own in 5-7 days. It is very contagious, so good hygiene is important.",
      actions: [
        "Clean the eye gently with a warm, damp cloth several times a day",
        "Use a fresh cloth or cotton ball for each eye",
        "Wash your hands thoroughly after touching the eye area",
        "Do not share towels, washcloths, or pillows",
        "Call your pediatrician if discharge becomes thick and green, the eye becomes very red, or swelling develops",
        "Most daycares require a doctor's note before returning  -  call your pediatrician if needed",
      ],
    },
    outcome_monitor_mild: {
      id: "outcome_monitor_mild",
      level: "green",
      title: "Monitor at home",
      description:
        "Mild crusting in one eye that just started is common and may be from a minor irritation or the beginning of a blocked tear duct. Watch for worsening.",
      actions: [
        "Clean gently with a warm, damp cloth",
        "Watch for changes  -  increased discharge, redness, or swelling",
        "Call your pediatrician if it does not improve in 2-3 days or worsens",
        "Wash your hands before and after cleaning the eye",
      ],
    },
  },
};
