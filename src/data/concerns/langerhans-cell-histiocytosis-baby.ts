import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'langerhans-cell-histiocytosis-baby',
  title: 'Langerhans Cell Histiocytosis (LCH) in Babies',
  category: 'medical',
  searchTerms: [
    'langerhans cell histiocytosis baby',
    'LCH baby',
    'severe cradle cap not improving',
    'baby scaly rash not eczema',
    'histiocytosis X baby',
    'baby scalp rash bleeding',
    'baby rash with bone lesion',
    'baby diabetes insipidus rash',
    'baby persistent scaly rash',
    'baby rash behind ears not healing',
  ],
  quickAnswer:
    'Langerhans cell histiocytosis (LCH) is a rare condition in which abnormal immune cells (Langerhans cells) accumulate in various organs, most commonly the skin, bones, and pituitary gland. In infants, LCH often presents as a stubborn, scaly, sometimes crusted rash that looks like severe cradle cap or eczema but does not respond to usual treatments. It can also cause bone lesions that appear as painful bumps, and in some cases leads to diabetes insipidus (excessive thirst and urination). LCH ranges from a mild single-site disease to a serious multi-system condition. Early diagnosis and treatment by a pediatric oncologist leads to the best outcomes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In young infants, LCH most commonly presents as a skin rash that resembles severe seborrheic dermatitis (cradle cap) or eczema but is unusually persistent and does not improve with standard treatments. The rash may appear as scaly, red-brown, or purplish papules on the scalp, behind the ears, in skin folds, or in the diaper area. Unlike typical cradle cap, the rash may bleed, crust, or ulcerate. Some infants develop a form called congenital self-healing reticulohistiocytosis (Hashimoto-Pritzker disease), which affects only the skin and resolves on its own, though monitoring is important.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As LCH progresses or involves multiple systems, additional symptoms may develop. Bone lesions can appear as painful, tender bumps, most commonly on the skull, and may be discovered on imaging. Ear involvement can cause chronic, recurrent ear drainage that does not respond to antibiotics. Liver and spleen enlargement, persistent fevers, and poor weight gain may indicate multi-system disease. If your baby has a persistent rash that is not responding to treatment plus any of these additional symptoms, your pediatrician should consider LCH and refer to a specialist.',
    },
    {
      ageRange: '1-3 years',
      context:
        'In toddlers, LCH may present as bone pain or limp (from bone lesions), loose teeth from jaw involvement, chronic ear discharge, a persistent rash, or unexplained excessive thirst and urination (diabetes insipidus from pituitary involvement). Diagnosis typically involves a skin or bone biopsy showing characteristic CD1a-positive Langerhans cells. Treatment depends on the extent of disease: single-system, single-site LCH (such as one bone lesion) may be treated with observation or curettage, while multi-system disease requires chemotherapy.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with LCH may present with bone pain, pathological fractures, skin rash, diabetes insipidus, or chronic otitis. Treatment for multi-system LCH typically involves vinblastine and prednisone chemotherapy, with treatment duration of 6-12 months. The prognosis for single-system LCH is excellent, with most cases resolving with minimal treatment. Multi-system LCH involving the liver, spleen, or bone marrow (risk organs) has a more guarded prognosis and requires aggressive treatment. Long-term follow-up is essential because LCH can reactivate and late effects such as diabetes insipidus or growth hormone deficiency may develop.',
    },
  ],
  whenNormal: [
    'Your baby has typical cradle cap (seborrheic dermatitis) that is mild, not bleeding, and improving with regular shampooing and gentle brushing',
    'Your baby has eczema that responds to moisturizers and prescribed treatments',
    'Scalp flaking is mild and not associated with any rash in other areas or other concerning symptoms',
    'Your child had a mild rash that resolved with standard treatment',
  ],
  whenToMention: [
    'Your baby has a persistent scaly or crusted rash on the scalp, behind the ears, or in skin folds that is not responding to standard cradle cap or eczema treatments after 2-4 weeks',
    'The rash has an unusual appearance (red-brown papules, ulceration, or bleeding) that looks different from typical cradle cap or eczema',
    'Your child has chronic, recurrent ear drainage that is not resolving with antibiotics',
    'Your child has a bony bump on the skull or elsewhere that is tender to touch',
  ],
  whenToActNow: [
    'Your child has a persistent, treatment-resistant rash combined with unexplained fevers, weight loss, or a palpable lump on the skull or bone -- seek prompt medical evaluation',
    'Your child develops sudden excessive thirst and very frequent urination (signs of diabetes insipidus), which could indicate pituitary involvement requiring urgent endocrine evaluation',
    'Your baby appears very ill with a rapidly worsening rash, enlarged liver or spleen, or persistent high fevers not explained by common infections',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['impetigo-baby', 'cellulitis-baby', 'baby-skin-infection-staph'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Cancer Institute. Langerhans Cell Histiocytosis Treatment (PDQ) -- Health Professional Version. NIH.',
      url: 'https://www.cancer.gov/types/langerhans/hp/langerhans-treatment-pdq',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Histiocytosis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/cancer/Pages/Histiocytosis.aspx',
    },
    {
      org: 'Histiocytosis Association',
      citation:
        'Histiocytosis Association. Understanding Langerhans Cell Histiocytosis.',
      url: 'https://histio.org/langerhans-cell-histiocytosis',
    },
  ],
};
