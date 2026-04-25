import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'molluscum',
  title: 'Molluscum Contagiosum in Babies & Toddlers',
  category: 'skin',
  searchTerms: [
    'molluscum contagiosum baby',
    'baby water warts',
    'small bumps with dimple on baby skin',
    'molluscum toddler',
    'baby pearly bumps on skin',
    'flesh colored bumps on baby',
    'molluscum contagiosum treatment toddler',
    'how long does molluscum last in kids',
    'is molluscum contagious baby',
    'raised smooth bumps on toddler',
  ],
  quickAnswer:
    'Molluscum contagiosum causes small, firm, dome-shaped bumps with a tiny dimple in the center. It is caused by a common, harmless virus and is very common in young children. While it looks unusual, it is not dangerous and the bumps eventually go away on their own, though it can take several months to over a year.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Molluscum is uncommon in babies under 6 months because they still have some protection from maternal antibodies. If small bumps appear in very young infants, it is worth having your pediatrician confirm the diagnosis, as other conditions can look similar at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range can contract molluscum through skin-to-skin contact, shared towels, or from an older sibling. The bumps are small, flesh-colored or pearly white, and painless. They may appear in clusters, commonly on the trunk, arms, legs, or face. They do not require treatment but can spread to nearby skin.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is a very common age for molluscum, particularly in children who attend daycare. The bumps can persist for 6-18 months on average before the immune system clears the virus. New bumps may continue to appear even as older ones are resolving. Keeping the bumps covered with clothing or bandages can reduce spread to others and to other areas of your child\'s body.',
    },
  ],
  whenNormal: [
    'Small, painless, dome-shaped bumps with a characteristic central dimple',
    'Bumps that are flesh-colored, pearly, or slightly pink and scattered on the trunk or limbs',
    'New bumps appearing slowly over weeks while older bumps start to flatten',
    'The bumps becoming slightly red or inflamed right before they clear, which is a sign the immune system is fighting the virus',
  ],
  whenToMention: [
    'Bumps are spreading rapidly or appearing in very large numbers',
    'Molluscum bumps are in sensitive areas like the eyelids or genital region',
    'The skin around the bumps is becoming very itchy, red, or developing eczema-like changes',
    'You would like to discuss treatment options to speed clearance',
  ],
  whenToActNow: [
    'A molluscum bump becomes very red, swollen, warm, and painful, suggesting a secondary bacterial infection',
    'Your child develops a fever along with spreading redness around the bumps',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Molluscum Contagiosum. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Molluscum-Contagiosum.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Molluscum Contagiosum.',
      url: 'https://www.cdc.gov/molluscum-contagiosum/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Red Book: Report of the Committee on Infectious Diseases. Molluscum Contagiosum.',
      url: 'https://publications.aap.org/redbook',
    },
  ],
};
