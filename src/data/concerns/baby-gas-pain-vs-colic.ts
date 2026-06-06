import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-gas-pain-vs-colic',
  title: 'Gas Pain vs Colic in Baby',
  category: 'digestive',
  searchTerms: [
    'baby gas vs colic',
    'gas pain or colic baby',
    'difference between gas and colic',
    'is baby colic or gas',
    'baby colic vs gas symptoms',
    'how to tell gas from colic',
    'baby crying gas or colic',
    'infant gas versus colic',
    'baby colicky or gassy',
    'colic and gas connection baby',
  ],
  quickAnswer:
    'Gas pain causes intermittent crying and discomfort that resolves when gas is passed. Colic is defined as crying for more than 3 hours per day, more than 3 days per week, for more than 3 weeks, in an otherwise healthy baby. While trapped gas may contribute to some colic episodes, colic is a broader condition with multiple suspected causes including gut immaturity, overstimulation, and developing nervous system regulation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the peak age for both gas discomfort and colic. Gas pain tends to cause intermittent discomfort with relief after passing gas. Colic involves prolonged, inconsolable crying episodes, often in the late afternoon/evening, that do not clearly resolve with gas passage. Both conditions peak around 6 weeks and improve by 3 to 4 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Both gas pain and colic typically resolve by 3 to 4 months. If excessive crying continues beyond 4 months, it is unlikely to be colic and other causes should be investigated, including reflux, food allergies, or other medical conditions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'True colic does not occur at this age. If your baby is excessively fussy, look for specific triggers like teething, illness, hunger, or overtiredness. Gas from new foods is possible but should not cause prolonged inconsolable episodes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Neither gas pain nor colic should be an ongoing issue at this age. Recurrent abdominal pain in toddlers has other causes that should be investigated, such as constipation, food intolerances, or functional abdominal pain.',
    },
  ],
  whenNormal: [
    'Gas-related fussiness that resolves after passing gas or a bowel movement',
    'Colic-like crying in the evening in a baby under 3 months who is otherwise healthy and growing well',
  ],
  whenToMention: [
    'You cannot tell if your baby\'s crying is from gas or colic and want guidance',
    'Your baby\'s crying fits the colic criteria and you need support and management strategies',
    'Excessive crying is affecting your mental health or family well-being',
  ],
  whenToActNow: [
    'Inconsolable crying with fever, vomiting, blood in stool, or a distended abdomen',
    'Excessive crying in a baby who is not gaining weight or is feeding poorly',
    'You feel overwhelmed and unable to cope with the crying safely',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Colic. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infantile Colic: Recognition and Treatment. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26280141/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Babies Cry. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-to-Your-Babys-Cries.aspx',
    },
  ],
  relatedConcernSlugs: ['excessive-gas-baby', 'baby-trapped-gas-signs', 'baby-colic-drops-effectiveness'],
};
