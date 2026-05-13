import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-feeding-guilt',
  title: 'Formula Feeding Guilt',
  category: 'feeding',
  searchTerms: [
    'formula feeding guilt',
    'feel bad about formula feeding',
    'mom guilt formula',
    'not breastfeeding guilt',
    'ashamed of formula feeding',
    'is formula feeding okay',
    'formula vs breastfeeding guilt',
    'judged for formula feeding',
  ],
  quickAnswer:
    'Feeling guilty about formula feeding is extremely common, but formula is a safe, nutritious, and completely valid way to feed your baby. Millions of healthy babies thrive on formula. Whether you chose formula from the start, transitioned due to medical reasons, or simply decided it was the best option for your family, you are making a responsible choice to ensure your baby is well fed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Guilt often peaks in the early weeks, especially if breastfeeding did not go as planned. Societal pressure, hospital messaging, and well-meaning family and friends can intensify these feelings. Remember that the most important thing is that your baby is fed, growing, and loved. If guilt is interfering with your ability to bond with or enjoy your baby, talk to your healthcare provider about emotional support.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, you may find that guilt eases as you see your baby thriving. However, comments from others or social media comparisons can reignite these feelings. It helps to remember that formula feeding has real advantages, including allowing other caregivers to participate in feeding, providing predictable nutrition, and giving you more flexibility with your schedule and health needs.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solids and formula becomes one of several nutrition sources, the feeding method often feels less central. Focus on the positive feeding relationship you are building with your baby. Responsive bottle feeding, where you hold your baby close, make eye contact, and follow their hunger and fullness cues, provides the same bonding benefits as breastfeeding.',
    },
  ],
  whenNormal: [
    'You occasionally feel a pang of guilt but are able to remind yourself that formula is a healthy choice',
    'You feel defensive when others ask about your feeding choice but recover quickly',
    'You experience some sadness about breastfeeding not working out while also recognizing that formula feeding is going well',
    'You sometimes compare yourself to other parents but can refocus on what is working for your family',
  ],
  whenToMention: [
    'Guilt about formula feeding is persistent and affecting your mood, bonding, or enjoyment of parenting',
    'You are experiencing symptoms of postpartum depression or anxiety that may be connected to feeding struggles',
    'You feel isolated because of judgment from family, friends, or your community about your feeding choice',
    'You want reassurance from your pediatrician that your baby is growing and developing well on formula',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby related to overwhelming guilt or depression',
    'You are unable to feed your baby because guilt or anxiety is paralyzing your ability to function',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Formula Instead of Cow\'s Milk? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Why-Formula-Instead-of-Cows-Milk.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Postpartum Depression and Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Postpartum-Depression-and-Breastfeeding.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Feeding Practices and Maternal Mental Health. NCBI.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7589083/',
    },
  ],
};
