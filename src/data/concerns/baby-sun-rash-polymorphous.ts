import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sun-rash-polymorphous',
  title: 'Sun-Related Rash on Baby',
  category: 'skin',
  searchTerms: [
    'baby sun rash',
    'baby rash after sun exposure',
    'polymorphous light eruption baby',
    'baby sun allergy rash',
    'baby sun sensitive rash',
    'toddler sun rash bumps',
    'baby rash from sun',
    'sun rash infant',
    'baby photosensitive rash',
    'toddler rash after being outside',
  ],
  quickAnswer:
    'Sun-related rashes in babies can include heat rash, sunburn, or polymorphous light eruption (PMLE), which is a sun sensitivity reaction. PMLE appears as itchy bumps or patches on sun-exposed skin, usually within hours of sun exposure. Prevention with sun-protective clothing, shade, and sunscreen (for babies over 6 months) is the best approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies under 6 months should be kept out of direct sunlight as much as possible. Their skin is very sensitive and burns easily. If a rash develops after sun exposure, it may be heat rash or mild sunburn. Use lightweight, long-sleeved clothing and wide-brimmed hats for sun protection rather than sunscreen at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue to prioritize shade and protective clothing. The AAP recommends avoiding sunscreen in babies under 6 months when possible, though a small amount of sunscreen can be applied to exposed areas when shade and clothing are insufficient. A sun rash at this age should be evaluated by your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Sunscreen (SPF 30 or higher, broad-spectrum) can now be used. If your baby develops a bumpy, itchy rash on sun-exposed areas like the arms and face within hours of sun exposure, it may be PMLE. This reaction may recur with subsequent exposures. Limiting sun exposure during peak hours (10 AM to 4 PM) helps prevent it.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers spending more time outdoors may develop sun-related rashes more frequently. Some children with PMLE find that gradual, short sun exposures in spring help build tolerance. If your child has recurring sun rashes, discuss a sun protection plan with your pediatrician.',
    },
  ],
  whenNormal: [
    'Mild heat rash on sun-exposed areas that resolves with cooling',
    'A minor rash after first sun exposure of the season that clears within days',
  ],
  whenToMention: [
    'Recurring rashes after sun exposure that are itchy or uncomfortable',
    'You suspect your child is unusually sun-sensitive',
    'A rash develops after sun exposure and you are unsure of the cause',
  ],
  whenToActNow: [
    'Severe blistering sunburn on a baby',
    'A widespread rash after sun exposure with fever or swelling',
    'Signs of heat stroke: hot dry skin, confusion, or lethargy after sun exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sun Safety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/default.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Polymorphous Light Eruption.',
      url: 'https://www.aad.org/public/diseases/a-z/polymorphous-light-eruption',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Polymorphous Light Eruption. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430886/',
    },
  ],
  relatedConcernSlugs: ['baby-sunburn-prevention', 'heat-rash', 'baby-sunscreen-reaction-rash'],
};
