import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-stork-bite-salmon-patch',
  title: 'Stork Bites and Angel Kisses (Salmon Patches)',
  category: 'skin',
  searchTerms: [
    'stork bite baby',
    'angel kiss birthmark',
    'salmon patch newborn',
    'red mark on baby forehead',
    'red mark back of baby neck',
    'nevus simplex baby',
    'baby pink birthmark eyelid',
    'newborn red patch face',
    'baby pink mark between eyes',
    'stork bite getting redder',
  ],
  quickAnswer:
    'Stork bites (on the back of the neck) and angel kisses (on the forehead, eyelids, or between the eyes) are flat pink or red birthmarks caused by stretched blood vessels under the skin. They are the most common type of birthmark, appearing in up to 80% of newborns, and are completely harmless. Most on the face fade by age 1-2, while those on the neck may persist but are typically hidden by hair.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Salmon patches (nevus simplex) are present at birth and are among the most common newborn skin findings. They appear as flat pink or red patches, most often on the back of the neck (stork bite), forehead, eyelids, nose, or upper lip (angel kisses). They may become more noticeable when your baby cries, strains, or is warm. They are not raised, do not grow, and do not cause any discomfort.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The marks may appear more prominent at times, especially when baby is flushed from crying or warmth. This is normal and does not mean they are getting worse. Salmon patches on the face often begin to fade during this period. No treatment is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Facial salmon patches typically continue to fade gradually. The marks on the eyelids and between the eyes usually fade faster than those on the forehead. Stork bites on the back of the neck tend to persist longer but are generally covered by hair as it grows in.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most facial salmon patches have faded significantly or disappeared entirely by the first birthday. Marks on the back of the neck may remain indefinitely in about 50% of children but are cosmetically inconspicuous. If a mark is growing, raised, or changing in appearance, it may not be a salmon patch and should be evaluated.',
    },
  ],
  whenNormal: [
    'Flat pink or red patch on the back of the neck, forehead, eyelids, or between the eyes present from birth',
    'The mark becomes more visible when baby cries, is warm, or strains',
    'The patch is flat and not raised or bumpy',
    'Gradual fading of facial marks over the first year',
  ],
  whenToMention: [
    'A birthmark appears to be growing, thickening, or changing color',
    'You are unsure whether a mark is a salmon patch or a different type of birthmark',
    'A facial salmon patch has not faded by age 2',
  ],
  whenToActNow: [
    'A birthmark is rapidly growing, raised, or bleeding, which may suggest a hemangioma or other vascular lesion requiring evaluation',
    'Large or unusual birthmarks near the eyes, nose, or mouth that could affect vision, breathing, or feeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birthmarks and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Birthmarks. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/diseases-conditions/birthmarks/symptoms-causes/syc-20370013',
    },
  ],
  relatedConcernSlugs: ['hemangioma-growing', 'newborn-skin-peeling-normal'],
};
