import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-spoon',
  title: "My Baby Won't Accept Spoon Feeding",
  category: 'feeding',
  searchTerms: [
    'baby refusing spoon',
    'baby won\'t open mouth for spoon',
    'baby turns head away from spoon',
    'baby cries when spoon comes near',
    'baby pushes spoon away',
    'baby clamps mouth shut spoon',
    'baby spoon feeding refusal',
    'baby hates being spoon fed',
    'baby won\'t eat from spoon',
    'baby fights spoon feeding',
  ],
  quickAnswer:
    'Many babies go through phases of refusing the spoon. This can be a normal developmental stage as they seek more independence, or it may signal they prefer self-feeding. Offering finger foods alongside spoon-fed options and letting baby hold their own spoon can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this young are not developmentally ready for spoon feeding. They have a strong tongue-thrust reflex that pushes solid food out of the mouth. This is not refusal but a normal protective reflex. Wait until your baby shows signs of readiness for solids, typically around 4-6 months.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When first introducing spoon feeding, it is common for babies to push food out with their tongue or seem uninterested. The tongue-thrust reflex is fading but may still be present. Start with very small amounts on the tip of a soft-tipped spoon. Let baby explore the spoon with their hands. If they consistently refuse, they may not be quite ready for solids yet.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Some babies at this age begin to prefer self-feeding over being spoon-fed. This is a healthy sign of growing independence. You can offer pre-loaded spoons for baby to bring to their own mouth, and also provide soft finger foods alongside purees. Avoid forcing the spoon into baby\'s mouth as this can create negative associations.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, many babies strongly prefer to feed themselves. If your baby refuses the spoon, try offering a variety of soft finger foods cut into appropriate sizes. You can also try thicker purees on pre-loaded spoons that baby can pick up independently. This desire for independence is a positive developmental sign.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers commonly want to do everything themselves, including feeding. Let your toddler practice with their own spoon while you offer bites from another spoon. Messy self-feeding is an important developmental skill. If your toddler refuses all food from a spoon and also refuses finger foods, talk to your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby occasionally turns head away from the spoon but accepts food at other times during the same meal',
    'Baby prefers to grab the spoon and try to feed themselves',
    'Baby refuses the spoon but happily eats finger foods',
    'Baby refuses the spoon when they are full or not hungry',
  ],
  whenToMention: [
    'Baby consistently refuses all spoon feeding for more than two weeks despite trying different foods and approaches',
    'Baby gags or vomits when the spoon touches their lips or tongue',
    'Baby is not gaining weight appropriately despite good milk intake',
  ],
  whenToActNow: [
    'Baby refuses all food by mouth including liquids and shows signs of dehydration such as no wet diapers, sunken fontanelle, or extreme lethargy',
    'Baby appears to be in pain when anything touches their mouth',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-not-interested-in-food', 'oral-aversion-baby', 'baby-led-weaning-safety'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. When, What, and How to Introduce Solid Foods. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Feeding Practices and Child Weight Status. Pediatric Research, 2022.',
      url: 'https://www.nichd.nih.gov/',
    },
  ],
};
