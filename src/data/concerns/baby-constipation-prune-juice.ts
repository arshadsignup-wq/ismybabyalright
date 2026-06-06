import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-constipation-prune-juice',
  title: 'Prune Juice for Baby Constipation',
  category: 'digestive',
  searchTerms: [
    'prune juice baby constipation',
    'how much prune juice baby',
    'prune juice infant constipation',
    'baby prune juice age',
    'when can baby have prune juice',
    'prune juice for constipated baby',
    'dilute prune juice baby',
    'prune puree vs juice baby',
    'prune juice dose infant',
    'baby constipation prune remedy',
  ],
  quickAnswer:
    'Prune juice is one of the most effective natural remedies for baby constipation. For babies 4 months and older, offer 1 to 2 ounces of 100% prune juice (no added sugar) once or twice daily. You can dilute it with an equal amount of water. For babies 6 months and older, pureed prunes are equally effective and provide additional fiber. Always choose 100% juice without added sugars.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Prune juice is generally not recommended before 4 months of age. If your young infant is constipated, discuss with your pediatrician before offering any juice. Breastfed babies rarely need prune juice as breast milk acts as a natural laxative.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Starting around 4 months (with pediatrician approval), you can offer 1 ounce of 100% prune juice mixed with 1 ounce of water once or twice daily for constipation. Offer it in a bottle or small cup. If constipation resolves, you can stop the juice.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Pureed prunes can be offered as a solid food, which provides both the natural laxative effect and fiber. Two to four tablespoons of prune puree daily can help keep stools soft. You can mix prunes into cereal or other foods. Continue offering prune juice as needed.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can eat whole soft prunes, drink prune juice (up to 4 ounces daily), or have prune puree mixed into foods. Making prunes a regular part of the diet helps prevent constipation. Limit total juice intake to 4 ounces per day as recommended by the AAP.',
    },
  ],
  whenNormal: [
    'Softer stools within 12 to 24 hours of starting prune juice',
    'Regular bowel movements maintained with small daily amounts of prune juice or puree',
  ],
  whenToMention: [
    'Prune juice is not helping with constipation after several days',
    'You are unsure about the right amount of prune juice for your baby\'s age',
    'Constipation is severe enough that dietary remedies alone are not sufficient',
  ],
  whenToActNow: [
    'Severe abdominal distension with vomiting in a constipated baby despite trying prune juice',
    'Blood in stool from constipation-related anal fissures that are worsening',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fruit Juice Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2017-0967/27250/',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
  relatedConcernSlugs: ['constipation', 'baby-constipation-remedies-safe', 'baby-constipation-after-starting-solids'],
};
