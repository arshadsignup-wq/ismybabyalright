import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stomach-virus-duration',
  title: 'Stomach Bug Timeline in Baby',
  category: 'digestive',
  searchTerms: [
    'baby stomach bug how long',
    'baby stomach virus duration',
    'how long does stomach flu last baby',
    'baby gastroenteritis timeline',
    'baby stomach bug days',
    'baby vomiting bug how long',
    'infant stomach virus recovery',
    'baby norovirus duration',
    'how long baby stomach bug contagious',
    'baby gastro how many days',
  ],
  quickAnswer:
    'A typical stomach virus (gastroenteritis) in babies lasts 1 to 3 days for vomiting and 5 to 7 days for diarrhea, though some viruses can cause diarrhea lasting up to 2 weeks. The most important thing is to maintain hydration during this time. Your baby is usually most contagious in the first few days of symptoms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Stomach viruses are less common in exclusively breastfed young infants due to protective antibodies in breast milk. However, if a newborn develops vomiting and diarrhea, dehydration can occur quickly. Contact your pediatrician promptly for any infant under 3 months with gastroenteritis symptoms.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Rotavirus and norovirus are common causes of gastroenteritis. The rotavirus vaccine significantly reduces severity if your baby has been vaccinated. Expect vomiting for 1 to 3 days and diarrhea for 5 to 7 days. Continue breastfeeding or formula and offer oral rehydration solution if needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies are more socially active, stomach bugs from daycare are common. Most resolve within a week. You can continue to offer solid foods as tolerated alongside breast milk or formula. Your baby may eat less during the illness, which is normal. Focus on fluids.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler stomach bugs typically follow the same timeline: 1 to 3 days of vomiting, up to a week of looser stools. Some toddlers develop temporary lactose intolerance after a stomach bug, causing ongoing loose stools with dairy for 1 to 2 weeks. This resolves on its own.',
    },
  ],
  whenNormal: [
    'Vomiting that resolves within 1 to 3 days',
    'Diarrhea lasting up to 7 days that is gradually improving',
    'Decreased appetite during the illness that returns to normal as the child recovers',
  ],
  whenToMention: [
    'Diarrhea lasting more than 2 weeks',
    'Your baby seems to recover but then worsens again',
    'You are having difficulty keeping your baby hydrated',
  ],
  whenToActNow: [
    'Signs of dehydration: no wet diaper for 6+ hours, dry mouth, sunken fontanelle, lethargy',
    'Bloody diarrhea or bilious (green) vomiting',
    'Symptoms in a baby under 3 months',
    'High fever lasting more than 3 days alongside stomach symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastroenteritis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Gastroenteritis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Norovirus.',
      url: 'https://www.cdc.gov/norovirus/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Viral Gastroenteritis.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/viral-gastroenteritis',
    },
  ],
  relatedConcernSlugs: ['baby-vomiting-repeatedly-dehydration', 'baby-stomach-virus-prevention', 'diarrhea'],
};
