import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'epstein-pearls-newborn',
  title: 'White Bumps on My Newborn\'s Gums or Mouth',
  category: 'medical',
  searchTerms: [
    'white bumps on baby gums',
    'epstein pearls newborn',
    'white cyst baby mouth',
    'baby white spots on gums not thrush',
    'newborn bumps on roof of mouth',
    'baby born with white dots gums',
    'epstein pearls vs thrush',
    'newborn gum cysts',
    'white pearl baby gum',
    'baby teeth or cyst on gums',
  ],
  quickAnswer:
    'Epstein pearls are tiny white or yellowish cysts that appear on a newborn\'s gums or the roof of the mouth. They are extremely common, affecting up to 85% of newborns, and are completely harmless. They are often mistaken for teeth, thrush, or something concerning, but they require no treatment and disappear on their own within a few weeks.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Epstein pearls are present from birth. You may notice one or several small, firm, white or yellow-white bumps along your baby\'s gum line or on the roof of the mouth (palate). They are made of harmless keratin (the same protein in skin and hair) that became trapped during your baby\'s development. They do not cause any pain or discomfort.',
    },
    {
      ageRange: '2-8 weeks',
      context:
        'Epstein pearls typically disappear on their own during this period as normal mouth activity (sucking, feeding) naturally wears them away. Do not try to pop, rub, or pick at them — this is unnecessary and could introduce infection. If you are unsure whether the white spots are Epstein pearls or oral thrush, thrush appears as thick white patches that do not easily wipe off and can cause feeding discomfort.',
    },
    {
      ageRange: '2-4 months',
      context:
        'By this age, nearly all Epstein pearls have resolved completely. If white bumps persist on the gums past 3 months, mention it to your pediatrician. It may still be harmless, but persistent cysts occasionally need evaluation to rule out other conditions such as dental lamina cysts or natal teeth.',
    },
  ],
  whenNormal: [
    'Small, firm, white or yellowish bumps on the gum ridges or roof of the mouth in a newborn',
    'Your baby is feeding normally and does not seem bothered by the bumps',
    'The bumps are small (1-3 mm), smooth, and not red or inflamed',
    'Multiple small pearls are present along the gum line — this is very common',
  ],
  whenToMention: [
    'You are not sure whether the white spots are Epstein pearls or oral thrush',
    'The bumps have not resolved by 3 months of age',
    'Your baby seems to have discomfort while feeding that you suspect may be related to the bumps',
  ],
  whenToActNow: [
    'The white spots are accompanied by thick white patches on the tongue or inner cheeks that do not wipe off easily, your baby is fussy during feeds, or you notice a rash in the diaper area — this may indicate oral thrush and needs treatment',
    'You notice a hard, tooth-like structure erupting from the gums in a newborn — natal teeth can be a choking risk and need evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Health in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Gingival Cyst of the Newborn (Epstein Pearls). StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK563131/',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Epstein Pearls: What They Are and When to See a Doctor.',
      url: 'https://my.clevelandclinic.org/health/diseases/epstein-pearls',
    },
  ],
};
