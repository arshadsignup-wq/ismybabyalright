import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'epidermal-nevus',
  title: 'My Baby Has a Streaky or Velvety Raised Birthmark (Epidermal Nevus)',
  category: 'skin',
  searchTerms: [
    'epidermal nevus baby',
    'linear nevus baby',
    'raised streaky birthmark baby',
    'verrucous nevus infant',
    'epidermal nevus syndrome',
    'ILVEN baby',
    'wart-like birthmark baby',
    'linear raised skin patch baby',
    'bumpy streak on baby skin',
    'epidermal nevus treatment',
  ],
  quickAnswer:
    'An epidermal nevus is a benign (non-cancerous) overgrowth of skin cells that is present at birth or appears in early childhood. It typically looks like a slightly raised, skin-colored to brownish, velvety or wart-like patch that often follows a linear or streaky pattern along the body\'s natural skin lines (Blaschko lines). Epidermal nevi are usually isolated and purely cosmetic. However, when they are large or extensive, they can sometimes be associated with abnormalities in other organ systems (epidermal nevus syndrome), so a thorough evaluation is recommended for larger lesions.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Epidermal nevi may be present at birth or become apparent in the first few months as they darken or thicken slightly. In infancy, they may appear as faint, smooth, slightly raised streaks on the skin. They are painless and do not itch at this age. Your pediatrician may refer you to a pediatric dermatologist for evaluation and to distinguish it from other birthmarks.',
    },
    {
      ageRange: '6 months - 2 years',
      context:
        'During this period, the nevus may become more noticeable — slightly thicker, more textured, and possibly darker. Small, isolated epidermal nevi require no treatment but should be monitored. If the nevus is large, extensive, or located on the head or face, your dermatologist may recommend evaluation for epidermal nevus syndrome, which can involve the brain, eyes, and skeleton.',
    },
    {
      ageRange: '2-5 years',
      context:
        'The epidermal nevus reaches its final appearance during childhood. It does not continue to spread. If it is causing cosmetic concern or is in a location that causes irritation, treatment options include laser therapy, surgical removal, or topical treatments, though recurrence after treatment is possible. Most small nevi are simply monitored.',
    },
    {
      ageRange: '5 years+',
      context:
        'Epidermal nevi are benign and the risk of malignant transformation is extremely low. They persist throughout life. If the nevus is cosmetically bothersome, discuss treatment options with your dermatologist. For children with epidermal nevus syndrome, ongoing monitoring of the brain, eyes, and skeleton is coordinated by the relevant specialists.',
    },
  ],
  whenNormal: [
    'Your baby has a small, linear, slightly raised patch that has been evaluated and identified as an epidermal nevus',
    'The nevus is stable in appearance and not causing any symptoms',
    'Your child has an isolated epidermal nevus with no other health concerns',
  ],
  whenToMention: [
    'The epidermal nevus is large, extensive, or covers a large portion of the body',
    'The nevus is located on the head or face — this may warrant evaluation for associated conditions',
    'The nevus becomes itchy, painful, or inflamed',
    'You notice other developmental or health concerns in addition to the skin finding',
  ],
  whenToActNow: [
    'A rapidly growing or changing nodule develops within the epidermal nevus — seek dermatologic evaluation',
    'Your child has seizures or neurological symptoms along with an extensive epidermal nevus — this needs urgent medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nevus-sebaceous',
    'vascular-malformations-baby',
    'dermoid-cyst-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Epidermal Nevus. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551626/',
    },
    {
      org: 'DermNet',
      citation:
        'DermNet NZ. Epidermal Naevus.',
      url: 'https://dermnetnz.org/topics/epidermal-naevus',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Birthmarks.',
      url: 'https://www.aad.org/public/diseases/birthmarks',
    },
  ],
};
