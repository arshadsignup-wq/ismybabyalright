import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-polycythemia',
  title: 'Polycythemia in Newborns (Too Many Red Blood Cells)',
  category: 'medical',
  searchTerms: [
    'newborn polycythemia',
    'baby too many red blood cells',
    'high hematocrit newborn',
    'newborn blood too thick',
    'polycythemia symptoms baby',
    'neonatal polycythemia treatment',
    'baby ruddy color',
    'newborn hyperviscosity',
    'high hemoglobin newborn',
    'newborn plethoric appearance',
  ],
  quickAnswer:
    'Polycythemia occurs when a newborn has too many red blood cells, making the blood thicker than normal. It can cause a ruddy or deep red skin color and, in significant cases, can affect blood flow to organs. Risk factors include delayed cord clamping, maternal diabetes, and being small or large for gestational age. Most cases are mild and resolve without treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Neonatal polycythemia is defined as a venous hematocrit above 65%. Risk factors include delayed cord clamping, twin-to-twin transfusion, maternal diabetes, growth restriction, and post-maturity. Your baby may appear deeply red or ruddy-colored (plethoric). Mild polycythemia usually requires only monitoring and adequate hydration through frequent feeding. Symptoms of significant polycythemia can include jitteriness, poor feeding, lethargy, rapid breathing, and in rare cases, low blood sugar or jaundice. Severe cases may require a partial exchange transfusion to reduce blood thickness.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Polycythemia typically resolves in the first few days to weeks as red blood cell levels normalize. As excess red blood cells are broken down, jaundice may develop. Your pediatrician will monitor bilirubin levels if needed. After resolution, there are generally no ongoing effects.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Polycythemia should be fully resolved. There are no lasting effects from mild to moderate neonatal polycythemia in most cases. Development should proceed normally.',
    },
    {
      ageRange: '6-12 months',
      context:
        'No ongoing concerns related to neonatal polycythemia. Your baby should be developing normally.',
    },
  ],
  whenNormal: [
    'Mild elevations in hematocrit without symptoms in a baby who is feeding and behaving normally',
    'A ruddy or red appearance in the first day or two that gradually normalizes',
    'Polycythemia that resolves with adequate feeding and hydration',
  ],
  whenToMention: [
    'Your baby appears very red or deeply flushed',
    'You notice jitteriness, poor feeding, or unusual sleepiness in a baby with known polycythemia',
    'Your baby had risk factors for polycythemia and you want to ensure appropriate monitoring',
  ],
  whenToActNow: [
    'Baby with polycythemia develops respiratory distress, seizures, or significant lethargy',
    'Signs of low blood sugar (jitteriness, tremors, poor feeding) in a baby with known or suspected polycythemia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Neonatal Polycythemia. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Neonatal Polycythemia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542255/',
    },
  ],
  relatedConcernSlugs: ['newborn-anemia-signs', 'newborn-blood-type-incompatibility', 'newborn-blood-sugar-low'],
};
