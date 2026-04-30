import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-allergic-reaction-medicine',
  title: 'Baby Had an Allergic Reaction to Medicine',
  category: 'medical',
  searchTerms: ['baby allergic to medicine', 'baby drug reaction', 'baby rash from antibiotic', 'toddler allergic to amoxicillin', 'baby hives from medicine', 'toddler medicine allergy', 'baby allergic to penicillin', 'baby drug allergy', 'baby reaction to medication', 'toddler medicine rash'],
  quickAnswer: 'Drug allergies in children are less common than many parents think - most "reactions" to medication are actually viral rashes that coincidentally appear while a child is taking antibiotics for an illness. True drug allergy symptoms include hives (raised, itchy welts) that appear within hours of taking the medication, facial or lip swelling, and in rare cases, difficulty breathing. A rash that appears several days into an antibiotic course and is flat, non-itchy, and widespread is more likely a viral exanthem than a true drug allergy. Regardless, stop the medication and contact your pediatrician to help determine if it is a true allergy.',
  byAge: [
    { ageRange: '0-12 months', context: 'Drug reactions in babies most commonly occur with antibiotics like amoxicillin. A widespread, flat, pink rash appearing on day 5-7 of amoxicillin is very commonly a viral rash rather than a true drug allergy, especially if the baby does not seem itchy. However, because it can be difficult to distinguish between a drug rash and a viral rash in a baby, always call your pediatrician. True allergic reactions (hives within hours of a dose, facial swelling) require immediate medical attention. Do not give another dose of the medication until speaking with your doctor.' },
    { ageRange: '1-3 years', context: 'The most commonly reported "drug allergy" in toddlers is to amoxicillin. Studies show that up to 90% of children labeled with a penicillin allergy are not truly allergic - they had a viral rash while taking the antibiotic. True drug allergy signs include: hives (raised welts) appearing within minutes to hours of taking the medication, swelling of the face, lips, or tongue, and difficulty breathing. If your child has been labeled as drug-allergic, discuss allergy testing with your pediatrician, as unnecessary antibiotic restrictions can limit treatment options in the future.' },
  ],
  whenNormal: ['A flat, non-itchy rash appearing on day 5+ of antibiotics (likely a viral exanthem, not a drug allergy - but still contact your doctor)', 'Mild stomach upset or loose stools from antibiotics (a side effect, not an allergy)'],
  whenToMention: ['Any rash that appears while your child is taking a medication', 'You want to clarify whether your child\'s previous reaction was a true drug allergy', 'Your child has been labeled as drug-allergic and you want to discuss allergy testing', 'Mild hives that resolve quickly after stopping the medication'],
  whenToActNow: ['Hives with facial, lip, or tongue swelling (possible anaphylaxis - call 911)', 'Difficulty breathing or wheezing after taking a medication', 'Widespread blistering or peeling skin after taking a medication (possible Stevens-Johnson syndrome - emergency)', 'Hives appearing within minutes to hours of a medication dose', 'Your child is swelling, drooling, or unable to swallow after taking a medication'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hives-baby', 'baby-rash-wont-go-away', 'stevens-johnson-syndrome-signs', 'baby-ibuprofen-dosing-safety'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Drug Allergies in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Drug-Allergies.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Drug Allergy.', url: 'https://www.niaid.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Amoxicillin Rash. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
  ],
};
