import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'milia-newborn-white-spots',
  title: 'Milia - White Spots on Newborn Skin',
  category: 'skin',
  searchTerms: [
    'milia newborn',
    'white spots on baby face',
    'tiny white bumps baby nose',
    'white dots newborn skin',
    'milia baby treatment',
    'baby white pimples face',
    'newborn skin white bumps',
    'milia vs baby acne',
    'white pearls on baby gums Epstein pearls',
    'milia how long to go away',
  ],
  quickAnswer:
    'Milia are tiny, white or yellowish bumps (1-2mm) that appear on the face of up to 40-50% of newborns, most commonly on the nose, cheeks, chin, and forehead. They are caused by tiny keratin cysts trapped beneath the skin surface and are completely harmless. Milia resolve on their own within a few weeks to months without any treatment. Similar bumps on the gums or palate are called Epstein pearls and are equally benign. No squeezing, scrubbing, or topical products should be applied.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Milia are most commonly noticed in the first few days to weeks of life. They appear as tiny, firm, pearl-like white bumps, usually clustered on the nose but also found on the cheeks, chin, forehead, and around the eyes. They are different from baby acne, which appears as red bumps and pustules. Milia are present at birth or develop shortly after. No treatment is needed. Do not squeeze, pick, or scrub the bumps, as this can damage delicate newborn skin and cause infection. Simply wash your baby\'s face gently with warm water.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Most milia resolve spontaneously within the first 2-3 months of life as the skin matures and the trapped keratin is naturally shed. If milia persist beyond this timeframe, they are still not concerning but can be mentioned at a well-visit. Milia can sometimes be confused with neonatal acne (which has red inflamed bumps around it) or miliaria (heat rash, which causes red bumps in areas of sweating). None of these common newborn skin conditions require treatment in most cases.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Milia that persist beyond 3 months are uncommon but not abnormal. In rare cases, widespread or persistent milia may be associated with genetic skin conditions, but this is exceptionally rare and would typically present with other symptoms. If your baby develops new white bumps after the newborn period, these may be milia but could also be other skin conditions such as molluscum contagiosum (which appear later in infancy) or sebaceous hyperplasia. Mention persistent or new bumps to your pediatrician for evaluation.',
    },
  ],
  whenNormal: [
    'Your newborn has small, white, firm bumps on the nose, cheeks, or chin that are not red or inflamed.',
    'The bumps are gradually resolving on their own over weeks to months.',
    'Your baby has white bumps on the gums or roof of the mouth (Epstein pearls), which are also harmless and common.',
  ],
  whenToMention: [
    'Milia persist beyond 3 months of age and you want reassurance.',
    'The bumps appear red, inflamed, oozing, or seem to be bothering your baby.',
    'New white bumps develop after the newborn period that look different from typical milia.',
  ],
  whenToActNow: [
    'White bumps are accompanied by widespread rash, blistering, or skin peeling that could indicate a more serious skin condition.',
    'Bumps appear infected: red, warm, swollen, or producing pus.',
    'Your baby has a fever along with any new skin changes.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'breast-buds-newborn',
    'strawberry-hemangioma',
    'rash-after-antibiotics',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Milia: StatPearls Clinical Reference.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560481/',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Milia in Newborns and Infants.',
      url: 'https://www.aad.org/public/diseases/a-z/milia-overview',
    },
  ],
};
