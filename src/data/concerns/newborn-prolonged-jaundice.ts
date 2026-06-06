import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-prolonged-jaundice',
  title: 'Prolonged Jaundice (Lasting Over 2 Weeks)',
  category: 'medical',
  searchTerms: [
    'prolonged jaundice baby',
    'jaundice lasting more than 2 weeks',
    'baby still yellow 3 weeks',
    'persistent jaundice newborn',
    'jaundice not going away',
    'extended jaundice baby',
    'baby yellow at 1 month',
    'prolonged neonatal jaundice causes',
    'jaundice beyond 14 days',
    'when should jaundice be gone',
  ],
  quickAnswer:
    'Jaundice lasting longer than 2 weeks in a full-term baby or 3 weeks in a premature baby is considered prolonged and should be evaluated. While the most common cause is breast milk jaundice (harmless), prolonged jaundice can occasionally indicate liver or thyroid problems that need prompt treatment. A simple blood test can help determine the cause.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Most newborn jaundice peaks around days 3-5 and resolves by 2 weeks. If your baby is still noticeably yellow after 2 weeks, your pediatrician should check a bilirubin level and differentiate between conjugated (direct) and unconjugated (indirect) bilirubin. Elevated unconjugated bilirubin is most often caused by breast milk jaundice, which is harmless and resolves on its own by 3 months while you continue breastfeeding. Elevated conjugated bilirubin is more concerning and could indicate biliary atresia, hepatitis, or other liver conditions requiring prompt evaluation and treatment. Your pediatrician should also check thyroid function and evaluate for other potential causes.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Breast milk jaundice may persist during this period and gradually resolves. If conjugated bilirubin was elevated, your baby may be undergoing evaluation and treatment for liver conditions. Biliary atresia, in particular, requires surgical intervention (Kasai procedure) ideally before 60 days of age for the best outcomes. Watch for pale or white stools and dark urine, which are warning signs of a liver problem.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Breast milk jaundice should be fully resolved by this age. If jaundice persists, further investigation is needed. Any baby with persistent jaundice should have liver function tests and evaluation for metabolic or genetic conditions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Jaundice should not persist at this age. Any persistent yellowing should be thoroughly evaluated.',
    },
  ],
  whenNormal: [
    'Breast milk jaundice with normal conjugated bilirubin in an otherwise thriving, breastfed baby',
    'Gradual fading of yellow color while baby feeds well and gains weight',
    'Normal colored stools (yellow or green) and pale yellow urine',
    'Baby is alert, active, and developing normally',
  ],
  whenToMention: [
    'Your baby is still visibly jaundiced after 2 weeks of age',
    'You want to confirm whether the jaundice is breast milk jaundice or something else',
    'Your baby\'s jaundice seemed to resolve but has returned',
  ],
  whenToActNow: [
    'Pale, white, or clay-colored stools in a jaundiced baby, which could indicate biliary atresia requiring urgent surgical evaluation',
    'Dark tea-colored urine, an enlarged or firm abdomen, or a baby who is increasingly lethargic and feeding poorly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Management of Hyperbilirubinemia. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/114/1/297/67050/Management-of-Hyperbilirubinemia-in-the-Newborn',
    },
    {
      org: 'NICE',
      citation: 'National Institute for Health and Care Excellence. Jaundice in Newborn Babies Under 28 Days. NICE Guideline CG98.',
      url: 'https://www.nice.org.uk/guidance/cg98',
    },
  ],
  relatedConcernSlugs: ['newborn-breast-milk-jaundice', 'newborn-phototherapy-concerns', 'white-poop'],
};
