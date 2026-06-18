import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'g6pd-deficiency-baby',
  title: 'My Baby Has G6PD Deficiency — What Do I Need to Avoid?',
  category: 'medical',
  searchTerms: [
    'G6PD deficiency baby',
    'G6PD deficiency newborn jaundice',
    'favism baby',
    'G6PD foods to avoid baby',
    'G6PD medications to avoid',
    'G6PD deficiency breastfeeding',
    'hemolytic anemia G6PD baby',
    'G6PD crisis baby',
    'fava beans baby G6PD',
    'G6PD deficiency newborn screening',
  ],
  quickAnswer:
    'G6PD (glucose-6-phosphate dehydrogenase) deficiency is the most common enzyme deficiency worldwide, affecting approximately 400 million people. It is an X-linked condition, meaning it primarily affects males. G6PD helps protect red blood cells from damage. When triggered by certain foods, medications, infections, or chemicals, a baby with G6PD deficiency can have a hemolytic episode — their red blood cells break down faster than the body can replace them, causing anemia and jaundice. The key to managing G6PD deficiency is knowing and avoiding triggers. Between episodes, children with G6PD deficiency are completely healthy.',
  byAge: [
    {
      ageRange: '0-1 month (newborn period)',
      context:
        'G6PD deficiency can cause severe neonatal jaundice, sometimes within the first 24 hours of life. This jaundice can be more severe and prolonged than typical newborn jaundice. If G6PD deficiency runs in your family, alert your pediatrician so your baby can be monitored closely. Some newborn screening panels include G6PD. Exposure to naphthalene (mothballs), certain antibiotics, or other triggers should be strictly avoided.',
    },
    {
      ageRange: '1-6 months',
      context:
        'During this period, common triggers to avoid include: naphthalene (mothballs, some air fresheners), certain medications (sulfonamide antibiotics, rasburicase, dapsone), and henna. If you are breastfeeding, eating fava beans yourself is generally considered safe for your baby, but check with your pediatrician. Your baby should have a medical ID or note in their chart indicating G6PD deficiency so that unsafe medications are not given during illness.',
    },
    {
      ageRange: '6-12 months (starting solids)',
      context:
        'When introducing solid foods, fava beans (broad beans) are the most well-known food trigger and should be avoided. Other legumes are generally safe. If your baby gets sick with an infection, monitor for signs of hemolysis — sudden pallor, dark urine (tea or cola colored), yellowing of the skin or eyes, and increased fussiness or lethargy. Infections themselves can trigger hemolytic episodes in G6PD-deficient babies.',
    },
    {
      ageRange: '1 year+',
      context:
        'As your child grows, teaching them about their condition becomes important. The list of medications to avoid should be shared with all healthcare providers, schools, and caregivers. Most children with G6PD deficiency live completely normal lives with the simple precaution of avoiding known triggers. Hemolytic episodes, when they occur, are usually self-limited once the trigger is removed, though severe cases may require blood transfusion.',
    },
  ],
  whenNormal: [
    'Your baby has G6PD deficiency but is healthy and thriving between any episodes',
    'Your baby had neonatal jaundice related to G6PD that resolved with phototherapy',
    'You are successfully managing the condition by avoiding known triggers',
  ],
  whenToMention: [
    'Your baby is starting a new medication and you want to confirm it is safe with G6PD deficiency',
    'Your baby seems more yellow than usual or their whites of their eyes look yellow',
    'You are unsure about which foods and household products to avoid',
    'A family member has G6PD deficiency and you want your baby tested',
  ],
  whenToActNow: [
    'Your baby\'s urine is dark (tea or cola colored) — this indicates red blood cell breakdown and requires urgent medical evaluation',
    'Your baby suddenly becomes pale, lethargic, and is breathing rapidly — this may indicate severe anemia from a hemolytic episode. Go to the emergency room',
    'Your baby has severe jaundice (deep yellow or orange skin, yellow eyes) — this needs immediate evaluation, especially in the first two weeks of life',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'kernicterus-severe-jaundice',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Glucose-6-Phosphate Dehydrogenase Deficiency. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470315/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. G6PD Deficiency and Neonatal Jaundice. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/144/5/e20184226/38256',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Glucose-6-Phosphate Dehydrogenase Deficiency.',
      url: 'https://www.who.int/publications/i/item/WHO-NMH-NHD-EPG-16.4',
    },
  ],
};
