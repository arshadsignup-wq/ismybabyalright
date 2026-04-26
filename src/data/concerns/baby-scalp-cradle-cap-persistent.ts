import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-scalp-cradle-cap-persistent',
  title: 'Persistent Cradle Cap Beyond 6 Months',
  category: 'skin',
  searchTerms: [
    'persistent cradle cap',
    'cradle cap not going away',
    'cradle cap after 6 months',
    'baby scalp flaking won\'t stop',
    'cradle cap older baby',
    'toddler cradle cap',
    'cradle cap treatment stubborn',
    'seborrheic dermatitis baby older',
    'baby scalp still crusty',
    'cradle cap won\'t clear',
  ],
  quickAnswer:
    'While most cradle cap clears by 6 months, some babies have persistent or recurring scalp flaking beyond this age. This is not harmful and is still manageable, but it is worth mentioning to your pediatrician. Persistent cases may benefit from a medicated shampoo or may indicate overlap with eczema that needs a different approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cradle cap is extremely common in this age range and usually does not require medical treatment. Gentle daily washing with a mild baby shampoo and soft-bristled brush to loosen scales is usually sufficient. Applying mineral oil or coconut oil before bath time can help soften thick patches.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most cases of cradle cap begin improving by now. If the scalp flaking is still significant, try applying a small amount of oil to the scalp 15-20 minutes before bath, then gently loosening scales with a fine-toothed comb or soft brush during the bath. Do not pick at scales forcefully, as this can irritate the scalp.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Cradle cap persisting beyond 6 months is less common and worth discussing with your pediatrician. They may recommend a mild dandruff shampoo (like one containing ketoconazole or selenium sulfide) used once or twice a week. The condition may overlap with eczema (atopic dermatitis) at this point, and the treatment approach may differ.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Scalp flaking in toddlers may represent ongoing seborrheic dermatitis or the beginning of scalp eczema or psoriasis. Your pediatrician or a dermatologist can help distinguish between these. Treatment options include medicated shampoos, gentle topical treatments, and moisturizing the scalp. The condition is manageable and not a sign of a serious health concern.',
    },
  ],
  whenNormal: [
    'Mild flaking that comes and goes and is easily managed with gentle brushing',
    'Yellowish, greasy scales that improve gradually over weeks to months',
    'Cradle cap that has improved significantly even if not completely resolved',
    'Scalp flaking that does not seem to bother your baby at all',
  ],
  whenToMention: [
    'Cradle cap persists beyond 6-8 months without improvement despite regular home care',
    'The scalp becomes red, inflamed, or itchy underneath the scales',
    'Flaking spreads to the face, eyebrows, or body',
  ],
  whenToActNow: [
    'The scalp is weeping, cracked, or has areas of pus or spreading redness suggesting infection',
    'Your baby seems distressed by scalp itching or the condition is accompanied by poor growth or other unusual symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Seborrheic Dermatitis. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000963.htm',
    },
  ],
};
