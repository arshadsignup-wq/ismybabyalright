import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mast-cell-activation-baby',
  title: 'Mast Cell Activation in Babies',
  category: 'medical',
  searchTerms: [
    'mast cell activation baby',
    'mastocytosis baby',
    'mast cell disorder infant',
    'baby flushing and hives',
    'cutaneous mastocytosis baby',
    'mast cell activation syndrome infant',
    'baby skin lesions mast cells',
    'urticaria pigmentosa baby',
  ],
  quickAnswer:
    'Mast cell disorders in babies include cutaneous mastocytosis (skin-only involvement, most common in children) and rarely, systemic mastocytosis or mast cell activation syndrome (MCAS). Cutaneous mastocytosis appears as tan or brown spots that become raised and red when rubbed (Darier sign). Most cases in children are limited to the skin and resolve by puberty. Treatment focuses on avoiding triggers that cause mast cell degranulation and managing symptoms with antihistamines.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cutaneous mastocytosis (urticaria pigmentosa) often appears in the first few months of life as tan, brown, or reddish-brown spots or patches on the skin. When these spots are rubbed or irritated, they may become raised, red, and itchy (positive Darier sign). Solitary mastocytomas can also occur as a single nodule. Most cases in infancy involve only the skin and have an excellent prognosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'More spots may appear during the first year. Skin lesions may blister when irritated, especially in young infants. Triggers that cause mast cell activation include friction on the skin, temperature changes, hot baths, vigorous activity, and certain medications (NSAIDs, some anesthetics). Your pediatrician may refer you to a pediatric dermatologist or allergist for evaluation and to establish a trigger avoidance plan.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, the extent of skin involvement is usually apparent. Babies with extensive skin lesions or symptoms beyond the skin (flushing, diarrhea, low blood pressure episodes) may need further evaluation with blood tests including a serum tryptase level. Oral antihistamines (H1 and sometimes H2 blockers) are the mainstay of treatment to reduce itching and flushing. Always inform medical providers about the diagnosis before any procedures or anesthesia.',
    },
    {
      ageRange: '12 months+',
      context:
        'The prognosis for childhood-onset cutaneous mastocytosis is generally excellent, with most cases resolving by puberty. New lesions typically stop appearing by age 2. The spots gradually fade over years. Systemic involvement is very rare in children. Continue avoiding known triggers, carry an epinephrine auto-injector if prescribed (for rare severe reactions), and ensure all caregivers know about the condition.',
    },
  ],
  whenNormal: [
    'Baby has one or two small brown spots that only occasionally become raised when rubbed',
    'Baby has cutaneous mastocytosis confirmed by a dermatologist with no systemic symptoms',
    'Spots are stable in number and not causing significant discomfort',
    'Baby is growing and developing normally with no episodes of flushing, vomiting, or lethargy',
  ],
  whenToMention: [
    'Baby has brown or tan spots that become raised, red, and itchy when rubbed or irritated',
    'Baby has frequent episodes of skin flushing, unexplained diarrhea, or abdominal pain',
    'New spots continue to appear rapidly or existing spots are blistering frequently',
  ],
  whenToActNow: [
    'Baby has a severe flushing episode with low blood pressure, rapid heart rate, or difficulty breathing -- call 911',
    'Baby develops extensive blistering of skin lesions with signs of systemic illness (fever, lethargy, poor feeding)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Mastocytosis. NIH Genetic and Rare Diseases Information Center.',
      url: 'https://rarediseases.info.nih.gov/diseases/6987/mastocytosis',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Mastocytosis. Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/mastocytosis/symptoms-causes/syc-20375737',
    },
  ],
};
