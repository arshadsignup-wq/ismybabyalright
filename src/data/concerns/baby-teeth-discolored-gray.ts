import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-discolored-gray',
  title: 'Baby Tooth Turning Gray or Dark',
  category: 'physical',
  searchTerms: [
    'baby tooth turning gray',
    'baby tooth turning dark',
    'toddler tooth discolored',
    'baby tooth brown',
    'baby tooth yellow brown',
    'baby tooth changing color after fall',
    'dead tooth baby',
    'baby tooth dark after bump',
    'toddler front tooth gray',
    'baby tooth black',
  ],
  quickAnswer:
    'A baby tooth turning gray or dark usually happens after a bump or fall that damages the blood supply inside the tooth. This can happen within days of the injury or weeks later. A darkened tooth does not always mean it is "dead" or infected - many gray teeth remain healthy and eventually fall out normally when the permanent tooth is ready. However, a darkened tooth should be evaluated by a dentist to check for signs of infection.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Early dental trauma can damage the blood vessels inside a new tooth. You may notice a front tooth gradually changing color from white to pink, gray, or brown over days to weeks after a bump. The tooth may darken and then lighten again as the blood is reabsorbed. Have it evaluated by a dentist, but in many cases, the tooth remains stable and no treatment is needed.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Falls during the toddler years frequently affect the front teeth. A tooth may turn gray or dark after trauma, sometimes appearing weeks after you have forgotten about the initial fall. Colors can range from yellowish to gray to almost black. A gray tooth that is firm, not painful, and has no swelling at the gumline can usually just be monitored. Signs of concern include a bump or pimple on the gum above the tooth (abscess), increasing darkness, or swelling.',
    },
  ],
  whenNormal: [
    'A tooth that gradually darkens over weeks after a known bump or fall',
    'A gray tooth that remains firm, pain-free, and has no gum swelling',
    'A tooth that turns gray and then gradually lightens back toward normal',
    'Dark discoloration without any other symptoms',
  ],
  whenToMention: [
    'A tooth has changed color and you want a dental evaluation',
    'A tooth darkened without any known injury',
    'Your child has a tooth that has been gray for several months and you want monitoring',
    'You notice staining on multiple teeth (could be from iron supplements or medications)',
  ],
  whenToActNow: [
    'A bump, pimple, or boil appears on the gum above a darkened tooth (dental abscess)',
    'The area around the tooth becomes swollen, red, or painful',
    'Your child develops fever and facial swelling near a previously injured tooth',
    'A darkened tooth becomes very loose or your child complains of significant pain from it',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-dental-injury-chipped-tooth', 'baby-bottle-rot-cavities', 'baby-fell-off-bed'],
  sources: [
    {
      org: 'AAPD',
      citation: 'American Academy of Pediatric Dentistry. Dental Trauma Guidelines.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-dental-trauma/',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Tooth Injuries in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Dental Trauma in the Pediatric Patient.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
