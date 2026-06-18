import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nevus-sebaceous',
  title: 'My Baby Has a Waxy Yellowish Patch on Their Scalp (Nevus Sebaceous)',
  category: 'skin',
  searchTerms: [
    'nevus sebaceous baby',
    'yellow waxy patch scalp baby',
    'nevus sebaceous of Jadassohn',
    'hairless patch baby scalp',
    'orange yellow scalp patch newborn',
    'nevus sebaceous removal',
    'nevus sebaceous cancer risk',
    'sebaceous nevus treatment',
    'bald patch on baby head birthmark',
    'waxy birthmark baby scalp',
  ],
  quickAnswer:
    'A nevus sebaceous (also called nevus sebaceous of Jadassohn) is a benign birthmark that typically appears on the scalp as a flat or slightly raised, yellowish-orange, waxy or velvety patch where hair does not grow. It is present at birth and occurs in about 0.3% of newborns. During childhood, it remains relatively flat and inconspicuous. At puberty, it becomes thicker and more noticeable due to hormonal stimulation. There is a small risk (historically overstated) of developing benign or rarely malignant tumors within the nevus later in life, so monitoring and potential removal are discussed with your dermatologist.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In newborns and young infants, a nevus sebaceous typically appears as a flat or slightly raised, smooth, hairless patch on the scalp. It may be yellow, orange, or tan in color. It is painless and does not itch. Your pediatrician may recognize it on examination. A referral to a pediatric dermatologist can confirm the diagnosis. No treatment is needed in infancy.',
    },
    {
      ageRange: '6 months - 5 years',
      context:
        'During childhood, the nevus sebaceous remains relatively stable and flat. It does not grow hair, which may become more noticeable as surrounding hair grows in. The patch itself is benign and does not cause any symptoms. Your dermatologist may recommend periodic monitoring. Some families choose early removal for cosmetic reasons, particularly if the patch is on a visible area of the scalp.',
    },
    {
      ageRange: '5-12 years (pre-puberty)',
      context:
        'Before puberty, the nevus sebaceous remains stable. This is a common time for families to discuss elective removal with a dermatologist or plastic surgeon. Removal is a straightforward excision with good cosmetic outcomes. Some dermatologists recommend removal before puberty when the lesion becomes more prominent.',
    },
    {
      ageRange: 'Puberty and beyond',
      context:
        'At puberty, hormonal changes cause the nevus sebaceous to thicken, become raised, and develop a more pebbly or warty texture. The risk of secondary tumors developing within the nevus is estimated at 10-30%, but the vast majority of these are benign (most commonly trichoblastoma). The risk of malignant transformation (basal cell carcinoma) is much lower than previously believed — estimated at 1-2%. Most dermatologists recommend either prophylactic excision or close monitoring.',
    },
  ],
  whenNormal: [
    'Your baby has a flat, yellowish, hairless patch on the scalp that is not growing or changing — this is typical for nevus sebaceous in childhood',
    'Your child\'s nevus sebaceous has been evaluated by a dermatologist and monitoring has been recommended',
    'The patch is stable and asymptomatic',
  ],
  whenToMention: [
    'The nevus sebaceous changes in texture, color, or size before puberty',
    'A new nodule or bump develops within the patch',
    'The patch becomes painful, bleeds, or develops an ulcer',
    'You want to discuss the pros and cons of elective removal',
  ],
  whenToActNow: [
    'A rapidly growing nodule develops within the nevus sebaceous — this needs prompt dermatologic evaluation to rule out a secondary tumor',
    'The lesion bleeds persistently or develops an ulcer that does not heal',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'dermoid-cyst-baby',
    'epidermal-nevus',
    'vascular-malformations-baby',
  ],
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Birthmarks: Types and Treatments.',
      url: 'https://www.aad.org/public/diseases/birthmarks',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nevus Sebaceous. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK482493/',
    },
    {
      org: 'DermNet',
      citation:
        'DermNet NZ. Nevus Sebaceous.',
      url: 'https://dermnetnz.org/topics/naevus-sebaceus',
    },
  ],
};
