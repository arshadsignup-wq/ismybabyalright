import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'jaundice',
  title: 'Newborn Jaundice (Yellow Skin)',
  category: 'medical',
  searchTerms: [
    'baby looks yellow',
    'newborn jaundice when to worry',
    'baby skin turning yellow',
    'jaundice in newborns',
    'baby yellow eyes',
    'bilirubin levels in newborn',
    'how long does newborn jaundice last',
    'jaundice going away or getting worse',
    'breastfeeding jaundice',
    'baby jaundice phototherapy',
    'baby yellowing after leaving hospital',
  ],
  quickAnswer:
    'Newborn jaundice is extremely common, affecting about 60% of full-term and 80% of premature babies. In most cases it is mild and resolves on its own within 1-2 weeks. However, very high bilirubin levels can be dangerous, so it is important to have your baby checked if the yellowing deepens or spreads.',
  byAge: [
    {
      ageRange: '0-3 days',
      context:
        'Physiological jaundice typically appears on day 2-3 of life as the baby\'s immature liver begins processing bilirubin from the normal breakdown of red blood cells. Hospitals routinely check bilirubin levels before discharge. Early-onset jaundice appearing within the first 24 hours may indicate a blood group incompatibility and requires prompt evaluation.',
    },
    {
      ageRange: '3-7 days',
      context:
        'Bilirubin levels usually peak around day 3-5 in full-term babies and day 5-7 in preterm babies. This is the most critical window for monitoring. Frequent feeding (8-12 times per day) helps the baby pass bilirubin through stool. If your baby was discharged early, a follow-up bilirubin check within 1-2 days is recommended.',
    },
    {
      ageRange: '1-2 weeks',
      context:
        'Most physiological jaundice resolves by 2 weeks of age. Breast milk jaundice, which is benign, can persist longer and may last up to 3 months in some breastfed babies. If jaundice is still visible at 2 weeks, your pediatrician may check a bilirubin level and evaluate for other causes.',
    },
    {
      ageRange: '2 weeks+',
      context:
        'Jaundice persisting beyond 2-3 weeks warrants evaluation to rule out conditions such as biliary atresia, hypothyroidism, or other liver issues. Your doctor will likely check both direct (conjugated) and indirect (unconjugated) bilirubin levels. Prolonged jaundice with pale or white stools and dark urine needs urgent investigation.',
    },
  ],
  whenNormal: [
    'Mild yellowing of the skin appearing after 24 hours of age, peaking around day 3-5, and gradually improving',
    'Your baby is feeding well (8-12 times per day), making plenty of wet and dirty diapers, and gaining weight',
    'The yellow color is mostly on the face and chest and has not spread to the legs and feet',
    'Bilirubin levels have been checked and are within safe range for your baby\'s age in hours',
    'Your breastfed baby has mild persistent jaundice but is otherwise thriving (breast milk jaundice)',
  ],
  whenToMention: [
    'The yellow color seems to be getting darker rather than fading after day 5',
    'Your baby is difficult to wake for feedings or seems more sleepy than usual',
    'You are unsure whether the jaundice is improving or worsening',
    'Jaundice is still visible at 2 weeks of age',
  ],
  whenToActNow: [
    'Yellowing appears within the first 24 hours of life, which may indicate a serious blood incompatibility requiring immediate treatment',
    'The yellow color has spread to your baby\'s arms, legs, palms, or soles, or your baby\'s eyes look deeply yellow, as this can indicate dangerously high bilirubin levels',
    'Your baby is very difficult to wake, feeding poorly, making a high-pitched cry, arching their back, or seems limp, as these can be signs of severe hyperbilirubinemia (kernicterus risk) requiring emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics, 2004 (reaffirmed 2022).',
      url: 'https://publications.aap.org/pediatrics/article/114/1/297/67057/Management-of-Hyperbilirubinemia-in-the-Newborn',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Jaundice in Newborns: Parent FAQs.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Jaundice.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts About Jaundice and Kernicterus.',
      url: 'https://www.cdc.gov/jaundice/index.html',
    },
  ],
};
