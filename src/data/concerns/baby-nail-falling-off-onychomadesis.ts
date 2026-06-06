import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nail-falling-off-onychomadesis',
  title: 'Nail Shedding After Illness in Baby',
  category: 'skin',
  searchTerms: [
    'baby nail falling off',
    'baby nail shedding',
    'baby nail lifting off',
    'onychomadesis baby',
    'baby nail peeling off after illness',
    'baby toenail falling off',
    'baby fingernail falling off',
    'baby nail loss after hand foot mouth',
    'baby nail coming off no injury',
    'baby nail separation',
  ],
  quickAnswer:
    'Nail shedding (onychomadesis) after an illness, especially hand-foot-and-mouth disease, is a well-known and harmless phenomenon. The nail loosens and eventually falls off weeks after the illness because the infection temporarily stopped nail growth. A new nail is already growing underneath, and the affected nails return to normal within a few months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nail shedding is very rare at this age. If a newborn\'s nail is separating, it may be from injury or a congenital condition. Have your pediatrician evaluate any nail loss in a very young infant.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby had a viral illness a few weeks ago and nails are now loosening, this is likely onychomadesis. The nails were affected during the illness but the change only becomes visible weeks later as the affected portion grows out. No treatment is needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for hand-foot-and-mouth disease, which is the most frequent cause of post-viral nail shedding. Multiple fingernails and toenails may be affected. The process can look alarming but is painless and the new nails grow in normally. Keep the nail bed clean and protected.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may shed nails after HFM disease or other viral infections. The nail typically lifts from the base rather than the tip. It may take 3 to 6 months for a full new nail to grow in. Avoid pulling off loose nails; let them separate naturally and keep the area clean.',
    },
  ],
  whenNormal: [
    'Nail loosening and shedding 4 to 8 weeks after a viral illness, especially hand-foot-and-mouth disease',
    'A new nail growing underneath the old one',
    'Multiple nails affected in a painless manner',
  ],
  whenToMention: [
    'Nail shedding without any preceding illness or injury',
    'The exposed nail bed becomes red, swollen, or painful',
    'Nails are not regrowing as expected after several months',
  ],
  whenToActNow: [
    'An exposed nail bed that becomes infected with redness, swelling, and pus',
    'Nail loss accompanied by widespread rash, fever, or systemic symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Onychomadesis After Hand-Foot-and-Mouth Disease. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26032609/',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Nail Conditions.',
      url: 'https://www.aad.org/public/diseases/nail-diseases',
    },
  ],
  relatedConcernSlugs: ['hand-foot-mouth', 'baby-nail-peeling', 'baby-nail-ridges-lines'],
};
