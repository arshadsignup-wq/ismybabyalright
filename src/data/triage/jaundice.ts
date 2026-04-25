import type { TriageTree } from "./types";

export const jaundiceTriage: TriageTree = {
  slug: "jaundice",
  title: "Jaundice",
  description: "Is this jaundice something to worry about?",
  icon: "🟡",
  startNodeId: "age",
  nodes: {
    age: {
      id: "age",
      question: "How old is your baby?",
      helpText:
        "Your baby's age is very important for evaluating jaundice. Jaundice appearing within the first 24 hours of life is always an emergency.",
      options: [
        { label: "Under 24 hours old", nextNodeId: "outcome_er_early" },
        { label: "1-3 days old", nextNodeId: "extent" },
        { label: "4-14 days old", nextNodeId: "extent" },
        { label: "Over 2 weeks old", nextNodeId: "late_jaundice" },
      ],
    },
    extent: {
      id: "extent",
      question: "Where do you see the yellow color?",
      helpText:
        "Check in natural light, not under fluorescent lights. Gently press on the skin and look at the color underneath. Check the whites of the eyes too. Jaundice typically progresses from face → chest → belly → legs → palms/soles.",
      options: [
        { label: "Palms of hands or soles of feet are yellow", nextNodeId: "outcome_er_severe" },
        { label: "Yellow below the belly button (legs, arms)", nextNodeId: "feeding_check" },
        { label: "Face and chest only", nextNodeId: "feeding_check" },
        { label: "Just the face", nextNodeId: "feeding_well" },
      ],
    },
    late_jaundice: {
      id: "late_jaundice",
      question: "Is your baby still visibly yellow after 2 weeks of age?",
      helpText:
        "Most normal newborn jaundice resolves by 2 weeks. Jaundice persisting beyond 2 weeks needs evaluation to rule out conditions like biliary atresia, especially if stools are pale or white.",
      options: [
        { label: "Yes  -  still yellow, and stools are pale/white/clay-colored", nextNodeId: "outcome_er_biliary" },
        { label: "Yes  -  still yellow, but stools are normal yellow/green/brown", nextNodeId: "outcome_call_now_prolonged" },
        { label: "The yellow is fading and baby seems well", nextNodeId: "feeding_well" },
      ],
    },
    feeding_check: {
      id: "feeding_check",
      question: "How is your baby feeding?",
      options: [
        { label: "Not feeding well  -  sleepy, hard to wake for feeds, or refusing", nextNodeId: "behavior_check" },
        { label: "Feeding less than usual but still taking some", nextNodeId: "output_check" },
        { label: "Feeding well  -  at least 8-12 times per day", nextNodeId: "output_check" },
      ],
    },
    behavior_check: {
      id: "behavior_check",
      question: "How is your baby behaving?",
      helpText:
        "Very high bilirubin levels can affect the brain. Warning signs include: extreme sleepiness, high-pitched cry, arching of the back, and poor muscle tone (floppy).",
      options: [
        { label: "Very sleepy, high-pitched cry, arching back, or floppy", nextNodeId: "outcome_er_severe" },
        { label: "Sleepy and not feeding well, but no arching or high-pitched cry", nextNodeId: "outcome_er_feeding" },
      ],
    },
    output_check: {
      id: "output_check",
      question: "How are the wet diapers and stools?",
      helpText:
        "By day 4-5 of life, your baby should have at least 4-6 wet diapers and 3-4 yellow stools per day. Adequate output helps eliminate bilirubin.",
      options: [
        { label: "Fewer than expected wet diapers or very few stools", nextNodeId: "outcome_call_now_output" },
        { label: "Good output  -  plenty of wet diapers and regular stools", nextNodeId: "feeding_well" },
      ],
    },
    feeding_well: {
      id: "feeding_well",
      question: "Is the yellow color getting worse or better?",
      options: [
        { label: "Getting worse  -  spreading or deeper color", nextNodeId: "outcome_call_office" },
        { label: "Staying about the same", nextNodeId: "outcome_call_office" },
        { label: "Getting better  -  fading", nextNodeId: "outcome_monitor" },
      ],
    },
  },
  outcomes: {
    outcome_er_early: {
      id: "outcome_er_early",
      level: "red",
      title: "Seek immediate medical care",
      description:
        "Jaundice appearing within the first 24 hours of life is always pathological  -  it is never normal. This can indicate blood type incompatibility (Rh or ABO), infection, or other serious conditions that require urgent treatment.",
      actions: [
        "If still in the hospital, alert your nurse immediately",
        "If already discharged, go to the ER now",
        "Your baby will need a bilirubin blood test urgently",
        "Do not wait to see if it improves  -  early jaundice can rise very quickly",
      ],
      callScript:
        "My baby is less than 24 hours old and is turning yellow. I know jaundice this early is not normal. They need a bilirubin test right away.",
    },
    outcome_er_severe: {
      id: "outcome_er_severe",
      level: "red",
      title: "Go to the ER now",
      description:
        "Your baby is showing signs of severe jaundice. Very high bilirubin levels can be toxic to the brain (kernicterus). Your baby may need phototherapy or an exchange transfusion. This is time-sensitive.",
      actions: [
        "Go to the emergency room immediately",
        "If your baby is arching their back, has a high-pitched cry, or is extremely floppy, tell the ER team right away  -  these are signs of acute bilirubin encephalopathy",
        "Undress your baby to their diaper in natural light on the way if safe to do so",
        "Continue trying to feed (breast or bottle) to help eliminate bilirubin",
      ],
      callScript:
        "My baby is [AGE IN DAYS] days old and has severe jaundice  -  [yellow to palms/soles / arching back / high-pitched cry / very sleepy]. We are heading to the ER now. They need an urgent bilirubin level.",
    },
    outcome_er_feeding: {
      id: "outcome_er_feeding",
      level: "red",
      title: "Call your pediatrician now  -  or go to the ER",
      description:
        "A jaundiced baby who is not feeding well is at risk for worsening jaundice and dehydration. Poor feeding means less bilirubin is being eliminated. Your baby needs evaluation today.",
      actions: [
        "Call your pediatrician immediately  -  if not reachable within 30 minutes, go to the ER",
        "Try to wake and feed your baby every 2 hours  -  tickle feet, undress, use a cool cloth",
        "If breastfeeding, ensure a proper latch  -  consider supplementing with expressed milk or formula if baby will not latch",
        "Your baby will need a bilirubin level checked",
      ],
      callScript:
        "Hi, my baby is [AGE IN DAYS] days old, is jaundiced, and is not feeding well. They are very sleepy and hard to wake for feeds. They need a bilirubin check and feeding evaluation today.",
    },
    outcome_er_biliary: {
      id: "outcome_er_biliary",
      level: "red",
      title: "Call your pediatrician now",
      description:
        "Jaundice beyond 2 weeks combined with pale, white, or clay-colored stools is a warning sign for biliary atresia  -  a serious liver condition where the bile ducts are blocked. Early diagnosis is critical for the best outcomes. This is time-sensitive.",
      actions: [
        "Call your pediatrician immediately for urgent evaluation",
        "Your baby will need blood tests including a direct (conjugated) bilirubin level",
        "Save a diaper with the pale stool or take a photo to show the doctor",
        "Do not delay  -  biliary atresia outcomes are much better when caught early (before 60 days)",
      ],
      callScript:
        "Hi, my baby is [AGE] and is still jaundiced. Their stools are [pale/white/clay-colored]. I am concerned about biliary atresia and need them evaluated urgently.",
    },
    outcome_call_now_prolonged: {
      id: "outcome_call_now_prolonged",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Jaundice lasting beyond 2 weeks needs evaluation even if your baby seems well. In breastfed babies, breast milk jaundice can be benign and last several weeks, but your doctor should confirm with a blood test to rule out other causes.",
      actions: [
        "Call your pediatrician for an appointment this week",
        "Your baby will need a bilirubin blood test (including direct bilirubin)",
        "Continue feeding well  -  at least 8-12 times per day",
        "Note the stool color at each diaper change  -  alert your doctor immediately if stools become pale or white",
        "Do not stop breastfeeding unless specifically directed by your doctor",
      ],
      callScript:
        "Hi, my baby is [AGE]  -  over 2 weeks old  -  and is still visibly jaundiced. Stools are [normal color]. They are feeding well. I need a bilirubin check to make sure this is just breast milk jaundice.",
    },
    outcome_call_now_output: {
      id: "outcome_call_now_output",
      level: "yellow",
      title: "Call your pediatrician today",
      description:
        "Low diaper output in a jaundiced baby suggests they may not be getting enough milk, which means less bilirubin is being eliminated. Your pediatrician needs to check both the bilirubin level and feeding adequacy.",
      actions: [
        "Call your pediatrician for a same-day appointment if possible",
        "Feed your baby every 2 hours  -  wake them if needed",
        "If breastfeeding, consider supplementing with expressed breast milk or formula until the appointment",
        "Track wet diapers and stools closely  -  write down the time of each",
        "Your baby will likely need a weight check and bilirubin test",
      ],
      callScript:
        "Hi, my baby is [AGE IN DAYS] days old, is jaundiced, and is not having enough wet diapers or stools. I am concerned about both dehydration and rising bilirubin. Can they be seen today?",
    },
    outcome_call_office: {
      id: "outcome_call_office",
      level: "yellow",
      title: "Call during office hours",
      description:
        "Your baby's jaundice is worth discussing with your pediatrician. Even though your baby is feeding well, jaundice that is worsening or not improving should be checked with a bilirubin test.",
      actions: [
        "Call your pediatrician during their next office hours",
        "Continue feeding frequently  -  at least 8-12 times per day",
        "Place your baby near a window in indirect sunlight (not direct sun) for short periods  -  this can help mildly",
        "Check the skin color in natural light daily  -  press gently on the forehead or chest and look at the color underneath",
        "Watch for spreading to legs, palms, or soles  -  call sooner if this happens",
      ],
      callScript:
        "Hi, my baby is [AGE IN DAYS] days old and has jaundice  -  yellow on their [face/chest/belly]. They are feeding well with good output. The yellow seems [stable / getting worse]. Should we get a bilirubin check?",
    },
    outcome_monitor: {
      id: "outcome_monitor",
      level: "green",
      title: "Monitor at home",
      description:
        "Mild jaundice in the first week of life is very common  -  about 60% of full-term newborns develop visible jaundice. If your baby is feeding well, has good output, and the yellow color is fading, this is following a normal course.",
      actions: [
        "Continue feeding your baby frequently  -  at least 8-12 times per 24 hours",
        "Adequate feeding is the best treatment for mild jaundice  -  it helps the body eliminate bilirubin through stool",
        "Check the skin color in natural light once or twice a day",
        "Call your pediatrician if the yellow color spreads, deepens, or if feeding worsens",
        "Keep all scheduled newborn follow-up appointments  -  your baby's bilirubin will be checked",
        "Mention the jaundice at your next visit even if it seems to be improving",
      ],
    },
  },
};
