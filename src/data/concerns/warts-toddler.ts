import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'warts-toddler',
  title: 'My Toddler Has Warts',
  category: 'skin',
  searchTerms: [
    'toddler warts',
    'warts on baby hands',
    'child has warts',
    'toddler plantar wart',
    'warts on toddler fingers',
    'how to get rid of toddler warts',
    'are warts contagious kids',
    'baby flat warts',
    'toddler wart treatment safe',
    'warts on child feet',
  ],
  quickAnswer:
    'Warts are caused by the human papillomavirus (HPV) and are extremely common in young children whose immune systems are still developing. They are harmless, not a sign of poor hygiene, and the vast majority go away on their own within one to two years without any treatment.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Warts are very rare in babies under one year old. If you notice a rough, raised bump on your infant\'s skin, it is more likely to be a different type of skin growth such as a molluscum contagiosum lesion, a skin tag, or a benign mole. Have your pediatrician take a look to confirm what it is before attempting any home treatment.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers begin to encounter HPV as they explore the world with their hands and feet. Common warts typically appear on the fingers, backs of the hands, and around the nails as small, rough, skin-colored bumps with tiny black dots (these are actually small blood vessels). They are spread through direct skin contact or touching contaminated surfaces. Keeping the wart covered with a bandage can reduce spreading.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the age when warts become more common, especially among children in daycare or group play settings. Plantar warts may appear on the soles of the feet and can cause mild discomfort when walking. Flat warts can appear in clusters on the face or legs. Most pediatric dermatologists recommend a watch-and-wait approach at this age, since warts resolve on their own as the child\'s immune system learns to fight the virus.',
    },
    {
      ageRange: '3+ years',
      context:
        'Warts may persist or spread to new areas. If they are bothersome, painful, or your child is self-conscious about them, your pediatrician may suggest gentle over-the-counter salicylic acid treatments or cryotherapy (freezing). Home remedies like duct tape occlusion have some evidence of effectiveness and are painless. Picking at warts or biting nails can cause them to spread, so gently discourage these habits.',
    },
  ],
  whenNormal: [
    'One or a few small, rough, painless bumps on the fingers, hands, or feet',
    'Warts that have been present for several months but are not growing rapidly',
    'A flat, smooth wart on the face or legs that is not red or inflamed',
    'Warts that your child does not seem bothered by',
  ],
  whenToMention: [
    'Warts are spreading rapidly, appearing in new areas frequently, or growing in large clusters',
    'A wart on the bottom of the foot is causing your child pain when walking',
    'Warts are appearing on the face or genital area',
  ],
  whenToActNow: [
    'A wart-like growth is bleeding, changing color, or looks very different from a typical wart, which warrants evaluation to rule out other skin conditions',
    'Your child has widespread warts along with signs of immune system problems such as frequent infections or poor wound healing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Warts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Warts.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Warts: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/warts-overview',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Common Warts. Symptoms & Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-warts/symptoms-causes/syc-20371125',
    },
  ],
};
