import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'insect-bites-baby',
  title: 'My Baby Has Insect Bites',
  category: 'skin',
  searchTerms: [
    'baby insect bites',
    'mosquito bites on baby',
    'baby bug bites swollen',
    'insect bites on infant',
    'baby ant bites',
    'how to treat baby bug bites',
    'baby allergic reaction to bug bite',
    'swollen bug bite baby',
    'baby flea bites',
    'insect bite remedy for babies',
  ],
  quickAnswer:
    'Insect bites on babies are very common and usually result in small red bumps that may be itchy or slightly swollen. Because babies have sensitive skin and immature immune systems, their reactions to bug bites can look more dramatic than an adult\'s. Most bites heal on their own within a few days with simple home care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants should be protected from insect bites as much as possible. Insect repellent containing DEET should not be used on babies under 2 months old. Instead, use physical barriers like mosquito netting over strollers and car seats, dress your baby in lightweight long sleeves and pants, and avoid being outdoors during peak mosquito hours (dawn and dusk). If your newborn does get a bite, a cool compress can help reduce swelling.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, insect bites may cause more noticeable local reactions because your baby\'s immune system is encountering these insect proteins for the first time. A single mosquito bite can swell to the size of a quarter or larger, which looks alarming but is a normal immune response called skeeter syndrome. Keep the area clean, apply a cool compress, and watch for signs of infection. Insect repellent with up to 30% DEET can be used from 2 months of age according to the AAP.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and spend more time on the floor and outdoors, they encounter more insects. Ant bites, flea bites, and spider bites become more common. Multiple bites in a line or cluster are often from fleas or bed bugs rather than mosquitoes. Keep your baby\'s nails trimmed short to prevent scratching, which can lead to secondary infection. A small amount of 1% hydrocortisone cream can be used to reduce itching.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers playing outdoors will inevitably get insect bites. Teach your child not to scratch by applying anti-itch cream or placing a bandage over the bite. Bee and wasp stings become more of a concern at this age as toddlers explore gardens and playgrounds. If your child is stung for the first time, watch closely for 30 minutes for any signs of allergic reaction. Most children tolerate stings well with just local swelling and pain.',
    },
  ],
  whenNormal: [
    'A small red bump or welt at the bite site that is mildly swollen and itchy',
    'A single mosquito bite that swells to the size of a quarter, as babies often have larger local reactions than adults',
    'Mild itching that resolves within a few days',
    'A small blister at the center of a bite, which is a normal reaction to some insect bites',
  ],
  whenToMention: [
    'Multiple bites that are becoming increasingly swollen, red, or warm over 2-3 days rather than improving',
    'Your baby consistently has very large reactions to insect bites that take more than a week to resolve',
    'Bite marks that seem to appear overnight in clusters or lines, which may suggest bed bugs or fleas in your home',
  ],
  whenToActNow: [
    'Your baby develops hives, facial swelling, difficulty breathing, vomiting, or extreme fussiness after an insect sting, which could indicate a serious allergic reaction (anaphylaxis) requiring immediate emergency care',
    'A bite area is developing expanding redness, red streaking, warmth, pus, or your baby has a fever, suggesting a skin infection that needs medical treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Insect Repellents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Insect-Repellents.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Identifying Insect Bites and Stings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Identifying-Insect-Bites-and-Stings.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Insect Bites and Stings: First Aid.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-insect-bites/basics/art-20056593',
    },
  ],
};
