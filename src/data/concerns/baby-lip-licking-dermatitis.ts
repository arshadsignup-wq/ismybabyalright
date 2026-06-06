import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lip-licking-dermatitis',
  title: 'Lip Licking Rash (Lip Licker\'s Dermatitis) in Baby',
  category: 'skin',
  searchTerms: [
    'baby lip licking rash',
    'baby red ring around mouth licking',
    'baby lip licker dermatitis',
    'baby chapped lips licking',
    'toddler lip licking rash',
    'baby mouth rash from licking',
    'baby irritation around lips',
    'lip licker dermatitis child',
    'baby habitual lip licking rash',
    'baby dry red ring around lips',
  ],
  quickAnswer:
    'Lip licker\'s dermatitis causes a red, dry, irritated ring around the mouth from repeated lip licking. Saliva enzymes break down the skin barrier, creating a cycle of licking, drying, and more licking. The key to treatment is breaking the cycle by applying a thick barrier like petroleum jelly frequently and helping older children become aware of the habit.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Lip licking dermatitis is not common at this age since young infants do not habitually lick their lips. Redness around a newborn\'s mouth is more likely from drool irritation, feeding contact, or perioral eczema. Apply petroleum jelly as a barrier to protect the skin.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As teething begins and drooling increases, some babies may start mouthing and licking their lips more. The constant moisture and drying cycle can create a red, chapped ring around the mouth. Frequent application of petroleum jelly or a thick lip balm creates a protective barrier.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age may develop a pattern of lip licking, especially during teething or when starting new foods. The rash extends beyond the lip border in a distinct pattern. Keep a small container of petroleum jelly handy and apply frequently, especially before meals and sleep.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop habitual lip licking as a self-soothing behavior. The rash can become quite pronounced and uncomfortable. Apply thick barrier cream liberally and frequently. If the rash is severe, your pediatrician may prescribe a mild topical steroid for short-term use to heal the skin before transitioning back to barrier-only maintenance.',
    },
  ],
  whenNormal: [
    'Mild chapping around the lips that improves with regular petroleum jelly application',
    'Temporary redness during teething that resolves with barrier cream',
  ],
  whenToMention: [
    'The rash around the mouth is persistent, worsening, or causing pain',
    'The skin is cracking or bleeding despite barrier cream use',
    'You suspect the habit is related to anxiety or a behavioral pattern you want to address',
  ],
  whenToActNow: [
    'The perioral rash becomes infected with yellow crusting or pus',
    'A blistering rash around the mouth that could indicate herpes simplex rather than lip licking dermatitis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Lip Care Tips.',
      url: 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/lip-care',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dry Skin. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Dry-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Perioral Dermatitis in Children. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23679316/',
    },
  ],
  relatedConcernSlugs: ['baby-rash-around-mouth', 'baby-chin-rash-from-drool', 'baby-drool-rash-severe', 'perioral-dermatitis-baby'],
};
