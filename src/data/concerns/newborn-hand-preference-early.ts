import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-hand-preference-early',
  title: 'Early Hand Preference in Newborns (Using One Hand Only)',
  category: 'physical',
  searchTerms: [
    'baby using one hand only',
    'newborn hand preference',
    'baby favoring one hand',
    'early hand dominance infant',
    'baby not using both hands equally',
    'newborn one arm weaker',
    'baby using right hand only',
    'baby ignoring one hand',
    'asymmetric hand use baby',
    'baby hand preference before 12 months',
  ],
  quickAnswer:
    'Babies should not show a strong hand preference before 12-18 months of age. If your newborn or young infant consistently uses one hand much more than the other, or seems to ignore one hand, it could indicate a neurological concern or birth injury that should be evaluated by your pediatrician. True handedness normally develops between 2-4 years of age.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'At this age, hand movements are largely reflexive, and babies should move both arms and hands roughly equally. If you notice that your newborn consistently does not move one arm or hand, or holds one arm differently, this could be a sign of a birth injury such as brachial plexus injury (Erb\'s palsy) or clavicle fracture. Report any asymmetry in arm or hand movement to your pediatrician promptly.',
    },
    {
      ageRange: '1-3 months',
      context:
        'As your baby begins to have more purposeful hand movements, both hands should be used similarly. Babies at this age should be opening and closing both hands and bringing them to the mouth. If one hand remains fisted while the other opens freely, or if your baby consistently reaches with only one hand, mention this to your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies should be reaching for and grasping objects with both hands. They should transfer toys from one hand to the other by about 6 months. Persistent preference for one hand at this age could indicate hemiplegia (weakness on one side) or another neurological condition that benefits from early intervention.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Both hands should be actively used for exploring, banging, and manipulating objects. While some babies may show a slight preference, strong one-handed dominance before 12 months is atypical and should be evaluated. Early identification of one-sided weakness allows for therapy that can significantly improve outcomes.',
    },
  ],
  whenNormal: [
    'Baby uses both hands roughly equally for reaching and grasping',
    'Slight preference that varies from day to day',
    'Both hands open and close freely and have similar movement range',
    'Baby transfers objects between hands by 6-7 months',
  ],
  whenToMention: [
    'Consistent use of one hand while ignoring the other',
    'One hand remains fisted while the other opens freely',
    'Baby does not reach with both hands by 4-5 months',
  ],
  whenToActNow: [
    'Your newborn does not move one arm at all, which could indicate a birth injury requiring prompt evaluation',
    'Strong early hand preference combined with stiffness or floppiness on one side of the body, which could indicate a neurological condition',
  ],
  relatedMilestones: ['reaching', 'grasping'],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones for Your Baby.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
  relatedConcernSlugs: ['early-hand-preference', 'newborn-brachial-plexus-injury', 'asymmetric-movement'],
};
