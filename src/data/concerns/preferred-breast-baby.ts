import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preferred-breast-baby',
  title: 'Baby Prefers One Breast Over the Other',
  category: 'feeding',
  searchTerms: [
    'baby prefers one breast',
    'baby refuses one side',
    'baby only nurses on one breast',
    'one sided breastfeeding',
    'baby cries at one breast',
    'breast preference baby',
    'baby fusses at left breast',
    'baby fusses at right breast',
    'baby turns away from one breast',
  ],
  quickAnswer:
    'It is surprisingly common for babies to develop a preference for one breast over the other. This can happen due to differences in milk flow, letdown speed, the baby\'s physical comfort in certain positions, or even an underlying issue like an ear infection or torticollis that makes turning one direction uncomfortable. While you can nurse from just one breast if needed, there are strategies to encourage your baby to accept both sides.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A very young baby who consistently refuses one breast may have a physical reason for the preference, such as birth-related soreness on one side, torticollis (tight neck muscles), or an ear infection that makes lying on that side painful. Try different nursing positions such as the football hold, which allows your baby to face the same direction at both breasts. If the preference is persistent, ask your pediatrician to check for physical causes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, breast preference often relates to milk flow differences. Babies may favor the breast with faster letdown or higher supply. You can try breast compressions on the less preferred side to increase flow, or start feeds on that side when your baby is hungriest. Some babies also develop a positional preference and nursing in a laid-back position can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'An established breast preference at this age can be more difficult to change but is usually not a problem nutritionally. Many mothers continue to nurse primarily from one breast without issues. If you want to maintain supply on both sides, offer the less preferred breast when your baby is sleepy or use it for comfort nursing between meals.',
    },
  ],
  whenNormal: [
    'Your baby slightly favors one breast but will still nurse from both with some encouragement',
    'The preference is mild and does not affect your baby\'s overall intake or weight gain',
    'Your baby nurses from one breast during the day but accepts both at nighttime feeds',
    'The preference comes and goes and is not constant',
  ],
  whenToMention: [
    'Your baby suddenly and completely refuses one breast after previously nursing from both',
    'You suspect torticollis or physical discomfort is causing the preference, such as your baby holding their head tilted to one side',
    'The asymmetry in supply is causing recurrent plugged ducts or discomfort on the refused side',
    'You are concerned about maintaining adequate milk production on the less-used breast',
  ],
  whenToActNow: [
    'Your baby suddenly refuses one breast and you notice a change in your breast such as a lump, skin dimpling, or discharge',
    'Your baby seems to be in pain when positioned on one side and also has a fever or ear drainage',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Lopsided! What Can I Do?',
      url: 'https://llli.org/breastfeeding-info/lopsided/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Breastfeeding and human lactation. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK148955/',
    },
  ],
};
