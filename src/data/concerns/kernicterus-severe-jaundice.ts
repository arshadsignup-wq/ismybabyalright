import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'kernicterus-severe-jaundice',
  title: 'How Dangerous Is My Baby\'s Jaundice? (Kernicterus Prevention)',
  category: 'medical',
  searchTerms: [
    'kernicterus baby',
    'severe jaundice newborn',
    'bilirubin levels dangerous',
    'jaundice brain damage baby',
    'high bilirubin newborn',
    'jaundice exchange transfusion',
    'jaundice phototherapy not working',
    'when is jaundice dangerous',
    'acute bilirubin encephalopathy',
    'newborn jaundice when to worry',
  ],
  quickAnswer:
    'Jaundice (yellowing of the skin from bilirubin) is extremely common in newborns — about 60% of term and 80% of preterm babies develop it. Most jaundice is harmless and resolves with or without phototherapy. However, very high bilirubin levels can cross into the brain and cause permanent damage (kernicterus), including cerebral palsy, hearing loss, and intellectual disability. Kernicterus is almost entirely preventable with appropriate monitoring and treatment. The key is ensuring bilirubin levels are checked per guidelines and treated promptly when elevated.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'Jaundice appearing in the first 24 hours of life is always considered pathological and requires immediate evaluation. This early jaundice is often caused by blood group incompatibility (ABO or Rh), G6PD deficiency, or other hemolytic conditions. Bilirubin levels should be measured promptly, and phototherapy should begin immediately if levels are elevated. Do not wait to see if it gets worse — early intervention is critical.',
    },
    {
      ageRange: '24 hours - 5 days',
      context:
        'This is when physiological jaundice typically peaks (usually day 3-5 for term babies, later for preemies). All newborns should have a bilirubin check before hospital discharge. The level is plotted on a nomogram (Bhutani chart) that accounts for the baby\'s age in hours. If the level is in the high-risk or high-intermediate zone, phototherapy is indicated. Risk factors for severe jaundice include: prematurity, blood group incompatibility, G6PD deficiency, exclusive breastfeeding with poor intake, sibling who needed phototherapy, and East Asian heritage.',
    },
    {
      ageRange: '5-14 days',
      context:
        'Jaundice that persists beyond day 5 or continues to rise may need further investigation. Breastfeeding jaundice (from inadequate intake) and breast milk jaundice (a benign prolongation related to breast milk components) are common causes of persistent jaundice. However, conjugated (direct) hyperbilirubinemia at any age is not normal and must be evaluated for conditions like biliary atresia. Your pediatrician should check a direct bilirubin level if jaundice persists beyond 2 weeks.',
    },
    {
      ageRange: '2-8 weeks',
      context:
        'If jaundice is still visible at 2 weeks in a term baby or 3 weeks in a preterm baby, a fractionated bilirubin (checking direct vs. indirect) should be obtained. Elevated direct bilirubin can indicate biliary atresia, which requires urgent surgical intervention (Kasai procedure) before 60 days of age for best outcomes. Persistent indirect jaundice in an otherwise well, breastfed baby with normal direct bilirubin is usually breast milk jaundice and resolves by 12 weeks.',
    },
  ],
  whenNormal: [
    'Your baby has mild jaundice that appeared after 24 hours, peaked around day 3-5, and is improving',
    'Your baby needed phototherapy, bilirubin levels are now in a safe range, and the yellow color is fading',
    'Your baby has breast milk jaundice with normal direct bilirubin and is feeding and growing well',
  ],
  whenToMention: [
    'Your baby looks increasingly yellow, particularly in the belly, arms, and legs (jaundice progresses head to toe as it worsens)',
    'Your baby is not feeding well — poor intake worsens jaundice by reducing bilirubin elimination',
    'Jaundice has not resolved by 2 weeks of age in a term baby',
    'Your baby\'s stools are persistently pale or white — this is an urgent sign of possible biliary atresia',
  ],
  whenToActNow: [
    'Your baby is deeply yellow or orange and is difficult to wake or refusing to feed — this may indicate dangerously high bilirubin. Go to the emergency room immediately',
    'Your baby has a high-pitched cry, arching of the back, or abnormal eye movements along with jaundice — these may be signs of acute bilirubin encephalopathy and require emergency treatment',
    'Your baby developed jaundice in the first 24 hours of life — this is always urgent',
    'Your baby\'s stools are white, grey, or pale clay-colored — seek immediate medical evaluation for possible biliary atresia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'g6pd-deficiency-baby',
    'congenital-cmv-hearing-loss',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn Infant. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/3/e2022058859/188443',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Jaundice and Kernicterus.',
      url: 'https://www.cdc.gov/ncbddd/jaundice/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Jaundice. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532930/',
    },
  ],
};
