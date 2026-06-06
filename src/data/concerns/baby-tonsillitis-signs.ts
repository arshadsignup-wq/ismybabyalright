import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-tonsillitis-signs',
  title: 'Could My Baby Have Tonsillitis?',
  category: 'medical',
  searchTerms: [
    'baby tonsillitis',
    'baby swollen tonsils',
    'baby tonsil infection',
    'tonsillitis signs infant',
    'baby sore throat tonsils',
    'toddler tonsillitis',
    'baby tonsils red swollen',
    'tonsillitis treatment baby',
    'baby tonsillitis how long',
    'baby tonsils pus spots',
  ],
  quickAnswer:
    'Tonsillitis (inflammation of the tonsils) is usually caused by viral infections in babies and toddlers. It causes sore throat, difficulty swallowing, fever, and visibly red or swollen tonsils sometimes with white patches. Viral tonsillitis resolves on its own in 5-7 days. Bacterial tonsillitis (strep) is uncommon before age 2-3 but needs antibiotic treatment. See your pediatrician if your baby has a severe sore throat with high fever.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tonsillitis is very rare in newborns. If your very young baby has a sore throat with fever, it needs medical evaluation to rule out more serious infections. Young babies cannot tell you their throat hurts, so watch for excessive fussiness, refusal to feed, and drooling.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Tonsillitis is uncommon at this age but can occur with viral infections. Signs include difficulty swallowing, refusal to feed, fussiness, fever, and possibly swollen neck glands. Treatment is supportive: extra fluids, acetaminophen for pain and fever, and rest. Most cases resolve within a week.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Viral tonsillitis becomes more common as babies are exposed to more germs. You may be able to see red, swollen tonsils when your baby cries or opens their mouth wide. The swelling may cause temporary snoring or noisy breathing during sleep. Keep your baby hydrated and manage fever and pain as directed by your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may show throat pain by refusing food (especially solid foods), drooling more than usual, or pulling at their neck. Viral tonsillitis remains more common than strep at this age. Offer soft, cool foods that are easy to swallow. Warm or cool liquids may soothe the throat. Your pediatrician can determine if testing for strep is warranted.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Group A strep becomes more common after age 2-3, though it remains less common than viral causes. Your pediatrician may do a rapid strep test if strep is suspected. Strep requires antibiotics to prevent complications. If your child has recurrent tonsillitis (multiple episodes per year), your pediatrician may discuss referral to an ENT for evaluation.',
    },
  ],
  whenNormal: [
    'Mild sore throat during a cold that resolves as the cold improves',
    'Your baby\'s tonsils are slightly enlarged but they are eating and drinking normally',
    'Tonsillitis resolves within 5-7 days with supportive care',
  ],
  whenToMention: [
    'Your baby has a sore throat with fever lasting more than 3 days',
    'Your baby has had multiple episodes of tonsillitis in the past year',
    'You can see white patches on the tonsils',
  ],
  whenToActNow: [
    'Your baby has severe throat pain with drooling, inability to swallow, muffled voice, or difficulty breathing',
    'Your baby has a sore throat with rash (possible scarlet fever), very high fever, or significant neck swelling on one side (possible peritonsillar abscess)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-adenoid-enlargement-signs',
    'baby-peritonsillar-abscess-signs',
    'baby-strep-throat',
    'baby-pediatric-ent-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tonsillitis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Tonsillitis.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Tonsillitis in children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/tonsillitis/symptoms-causes/syc-20378479',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Tonsillitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK544342/',
    },
  ],
};
