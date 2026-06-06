import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lacy-rash-pattern',
  title: 'Lace-Like Rash Pattern on Baby',
  category: 'skin',
  searchTerms: [
    'baby lacy rash',
    'baby lace like rash',
    'baby reticular rash',
    'baby net like rash pattern',
    'baby fifth disease rash',
    'baby slapped cheek rash',
    'baby mottled skin rash',
    'baby rash looks like lace',
    'parvovirus rash baby',
    'baby rash lace pattern arms legs',
  ],
  quickAnswer:
    'A lace-like or net-patterned rash is most commonly associated with fifth disease (parvovirus B19), which causes a characteristic "slapped cheek" appearance followed by a lacy rash on the trunk and limbs. This rash can come and go for weeks but is harmless in healthy children. Cutis marmorata, a temporary mottled pattern from cold, is another benign cause.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns commonly show cutis marmorata, a temporary mottled or lace-like pattern on the skin when cold. This is normal and resolves when the baby warms up. True fifth disease is very rare at this age. If persistent mottling occurs without cold exposure, mention it to your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Cutis marmorata remains common and is harmless. Fifth disease is uncommon but possible at this age. If your baby develops bright red "slapped cheeks" followed by a lacy rash on the body, it is likely fifth disease. By the time the rash appears, the child is no longer contagious. Contact your pediatrician if your baby seems unwell.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Fifth disease becomes more common as babies are exposed to other children. The classic lacy rash on the arms and legs may fade and reappear for 1 to 3 weeks, especially after baths, sun exposure, or activity. No treatment is needed for healthy babies. The rash itself is a sign the immune system has already cleared the infection.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in daycare are frequently exposed to parvovirus B19. The lacy rash may be quite prominent and can worry parents, but it is a self-resolving condition. However, fifth disease can be dangerous for pregnant women and people with certain blood disorders, so inform any pregnant contacts if your child is diagnosed.',
    },
  ],
  whenNormal: [
    'A mottled, lace-like skin pattern that appears when the baby is cold and resolves when warmed',
    'A lacy rash on the trunk and limbs following a "slapped cheek" appearance in an otherwise well child',
    'A lacy rash that comes and goes over days to weeks after fifth disease, especially with warmth',
  ],
  whenToMention: [
    'A lacy rash that appeared without the classic slapped-cheek phase and you are unsure of the cause',
    'The rash is persistent and not fitting the typical fifth disease pattern',
    'Your baby seems unwell with the rash or has joint swelling',
  ],
  whenToActNow: [
    'A baby with a known blood disorder such as sickle cell disease develops signs of fifth disease, as parvovirus can cause severe anemia in these children',
    'Persistent mottling of the skin that does not resolve with warming and is associated with poor feeding, lethargy, or other signs of illness, which could indicate a circulatory problem',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fifth Disease (Parvovirus B19). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Fifth-Disease.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Parvovirus B19 and Fifth Disease.',
      url: 'https://www.cdc.gov/parvovirusb19/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cutis Marmorata. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470554/',
    },
  ],
  relatedConcernSlugs: ['fifth-disease-rash', 'viral-rash-baby', 'baby-rash-after-illness'],
};
