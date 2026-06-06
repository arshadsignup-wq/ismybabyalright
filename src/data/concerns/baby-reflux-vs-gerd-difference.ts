import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-reflux-vs-gerd-difference',
  title: 'Reflux vs GERD: Understanding the Difference',
  category: 'digestive',
  searchTerms: [
    'baby reflux vs gerd',
    'difference reflux gerd baby',
    'is it reflux or gerd baby',
    'when is reflux gerd baby',
    'normal reflux vs gerd infant',
    'baby gerd diagnosis',
    'baby reflux when to worry',
    'baby spitting up vs gerd',
    'infant ger vs gerd',
    'when does reflux become gerd baby',
  ],
  quickAnswer:
    'GER (gastroesophageal reflux) is normal spitting up that occurs in most babies and does not cause problems. GERD (gastroesophageal reflux disease) is when reflux causes complications like poor weight gain, feeding refusal, esophagitis, or significant discomfort. The key difference is whether the reflux is causing harm, not how much the baby spits up.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Almost all newborns have some degree of reflux. Normal GER means the baby spits up but gains weight well and is generally content, often called a "happy spitter." GERD is suspected when reflux causes feeding problems, poor weight gain, persistent crying, or respiratory symptoms like recurrent wheezing or aspiration.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Reflux typically peaks around 4 months. If your baby is gaining weight on their growth curve and is not in distress, the spitting up is normal GER regardless of volume. GERD is considered when there is weight loss or poor gain, arching and crying during feeds, or feeding refusal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Normal GER improves significantly as solids are introduced and babies spend more time upright. If symptoms worsen or persist beyond 6 to 8 months, GERD evaluation may be warranted. Your pediatrician may consider a trial of acid-suppressing medication to help distinguish between the two.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most normal GER has resolved by 12 months. If reflux symptoms persist into toddlerhood, it is more likely to represent true GERD and may need investigation. Conditions like cow\'s milk protein allergy and eosinophilic esophagitis can mimic GERD and should be considered.',
    },
  ],
  whenNormal: [
    'Your baby spits up frequently but is gaining weight well, eating comfortably, and seems happy overall',
    'Reflux that is gradually improving over the first 6 months',
    'A "happy spitter" who does not seem bothered by the spit-up',
  ],
  whenToMention: [
    'You are unsure whether your baby has normal reflux or GERD',
    'Your baby is fussy during feeds, arching, or occasionally refusing to eat',
    'You want to discuss whether investigation or treatment is needed',
  ],
  whenToActNow: [
    'Your baby is not gaining weight or is losing weight',
    'Green or bloody vomit occurs at any point',
    'Your baby has recurrent choking, gagging, or breathing difficulties with feeds',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastroesophageal Reflux in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. GER & GERD in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pediatric Gastroesophageal Reflux Clinical Practice Guidelines. JPGN.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-1061/37422/',
    },
  ],
  relatedConcernSlugs: ['reflux', 'spitting-up', 'baby-acid-reflux-silent', 'baby-reflux-medication-concerns'],
};
