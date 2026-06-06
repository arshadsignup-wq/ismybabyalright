import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-drinking-bath-water',
  title: 'My Baby Keeps Drinking Bath Water',
  category: 'feeding',
  searchTerms: ['baby drinking bath water', 'baby swallowing bath water', 'bath water safe baby', 'baby drinks bath water danger', 'toddler drinking bath water', 'baby mouth bath water', 'is bath water harmful', 'baby ingesting bath water', 'bath water bacteria baby', 'baby sips bath water'],
  quickAnswer: 'Small amounts of bath water that baby accidentally swallows are generally not dangerous. Bath water may contain mild soap residue and some bacteria from baby\'s skin, but a few sips are unlikely to cause illness. Avoid bubble baths for young babies and keep bath water clean. If baby consistently tries to drink bath water, redirect with bath toys.',
  byAge: [
    { ageRange: '0-3 months', context: 'Young babies do not typically drink bath water intentionally. If baby swallows a small amount during bathing, it is not concerning. Use lukewarm water and minimal bath products.' },
    { ageRange: '4-6 months', context: 'Babies begin splashing and may get water in their mouth. This is normal and a small amount is harmless. Keep bath products gentle and fragrance-free.' },
    { ageRange: '6-9 months', context: 'Babies become more playful in the bath and may intentionally put their mouth to the water. Redirect with splash toys. Avoid adding soap until the end of the bath to minimize what baby ingests.' },
    { ageRange: '9-12 months', context: 'Bath water drinking becomes more intentional as baby explores. Offer a cup of clean water to drink instead. Keep the bath water as clean as possible and change it if it gets very soapy or dirty.' },
    { ageRange: '12-24 months', context: 'Toddlers may drink bath water deliberately. Give them a cup of fresh water at bath time to satisfy their thirst. Teach them that bath water is not for drinking. Small amounts remain generally harmless.' },
  ],
  whenNormal: ['Baby accidentally gets small amounts of bath water in their mouth during bathing', 'Baby splashes and some water gets in their mouth', 'Baby tries to drink bath water occasionally'],
  whenToMention: ['Baby drinks large amounts of bath water at every bath despite redirection', 'Bath products used are strong or not intended for babies', 'Baby seems to have an unusual fixation on drinking bath water'],
  whenToActNow: ['Baby swallows bath water containing a cleaning product or non-baby-safe soap', 'Baby develops vomiting or diarrhea after drinking bath water'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-non-food-pica', 'baby-eating-dirt-sand', 'baby-water-when-to-introduce'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Bath Safety. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Water Safety for Children. 2023.', url: 'https://www.cdc.gov/drowning/prevention/index.html' },
  ],
};
