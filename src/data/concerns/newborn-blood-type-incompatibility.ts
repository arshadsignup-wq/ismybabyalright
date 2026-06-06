import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-blood-type-incompatibility',
  title: 'ABO Blood Type Incompatibility in Newborns',
  category: 'medical',
  searchTerms: [
    'ABO incompatibility baby',
    'blood type incompatibility newborn',
    'baby different blood type mother',
    'ABO hemolytic disease newborn',
    'baby jaundice blood type',
    'Rh incompatibility baby',
    'newborn blood type mismatch',
    'hemolytic disease of newborn',
    'baby anemia blood type',
    'mother baby blood type conflict',
  ],
  quickAnswer:
    'ABO incompatibility occurs when a mother and baby have different blood types (most commonly a type O mother with a type A or B baby), causing the mother\'s antibodies to attack the baby\'s red blood cells. This can lead to more severe jaundice and anemia in the newborn. It is manageable with monitoring and treatment, and the vast majority of babies do well.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'ABO incompatibility is the most common cause of hemolytic disease of the newborn. When a type O mother carries a baby with type A or B blood, her anti-A or anti-B antibodies can cross the placenta and destroy some of the baby\'s red blood cells. This increased red blood cell breakdown produces more bilirubin, leading to earlier and more severe jaundice. Your baby may need close bilirubin monitoring, early phototherapy, and blood tests to check for anemia. In severe cases, a blood transfusion may be needed. Rh incompatibility is another form of blood type conflict that is typically prevented with Rh immunoglobulin (RhoGAM) during pregnancy.',
    },
    {
      ageRange: '1-3 months',
      context:
        'After the initial management of jaundice and any anemia, your baby will be monitored for ongoing hemolysis. Some babies develop late-onset anemia as the effects of the antibodies continue. Your pediatrician may check blood counts periodically. Iron supplementation may be recommended if anemia develops.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The effects of ABO incompatibility typically resolve completely as the maternal antibodies are cleared from the baby\'s system. Blood counts should normalize. Your baby should be growing and developing normally.',
    },
    {
      ageRange: '6-12 months',
      context:
        'ABO incompatibility has no long-term effects once the antibodies have been cleared. Your baby\'s blood type does not change and poses no ongoing health risk. Development should proceed normally.',
    },
  ],
  whenNormal: [
    'Mild jaundice in the first few days that responds to phototherapy',
    'Baby is feeding well and gaining weight after initial management',
    'Blood counts are stable or improving with monitoring',
    'Baby is alert and active between jaundice assessments',
  ],
  whenToMention: [
    'Your baby is jaundiced within the first 24 hours of life (this is always significant)',
    'Jaundice seems to be worsening despite phototherapy',
    'Your baby appears pale or increasingly tired during feeds',
  ],
  whenToActNow: [
    'Rapidly worsening jaundice in the first 24 hours of life, which is a medical emergency',
    'Baby is lethargic, refuses to feed, has a high-pitched cry, or appears very pale, which may indicate severe anemia',
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
      org: 'NIH',
      citation: 'National Library of Medicine. ABO Incompatibility. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557795/',
    },
  ],
  relatedConcernSlugs: ['newborn-prolonged-jaundice', 'newborn-anemia-signs', 'newborn-phototherapy-concerns'],
};
