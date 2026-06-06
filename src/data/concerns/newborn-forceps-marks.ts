import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-forceps-marks',
  title: 'Bruising From Forceps Delivery',
  category: 'medical',
  searchTerms: [
    'forceps marks baby face',
    'baby bruised from forceps',
    'forceps delivery marks',
    'newborn face marks forceps',
    'forceps bruise baby cheek',
    'baby red marks forceps',
    'forceps delivery complications baby',
    'forceps marks how long to heal',
    'baby face bruising after birth',
    'forceps injury newborn',
  ],
  quickAnswer:
    'Red marks or bruising on a baby\'s face or head from forceps delivery are common and temporary. These marks are caused by pressure from the forceps blades during delivery and typically fade within a few days to 2 weeks. They do not cause lasting marks or scars and do not affect brain development.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'After forceps-assisted delivery, it is common to see red marks, bruising, or slight indentations on the sides of the face or head where the forceps were applied. These marks may look concerning but are superficial and temporary. They typically fade within a few days, with bruising resolving within 1-2 weeks. In rare cases, forceps delivery can cause a facial nerve palsy (temporary weakness of facial muscles on one side), which usually resolves within a few weeks. Your baby will be examined after delivery to assess for any complications.',
    },
    {
      ageRange: '1-3 months',
      context:
        'All forceps marks should be completely resolved by this time. The skin heals without scarring. If a facial nerve palsy occurred, it should be showing significant improvement or have fully resolved. If facial asymmetry persists beyond 4-6 weeks, further evaluation may be needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'There should be no remaining signs of forceps delivery on the face or head. Your baby\'s appearance should be completely normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Forceps delivery marks have no lasting cosmetic or medical effects. Your baby should have no evidence of the delivery method.',
    },
  ],
  whenNormal: [
    'Red marks or bruising on the cheeks or sides of the head where forceps were applied',
    'Marks that fade within a few days and bruising that resolves within 1-2 weeks',
    'Baby can move face symmetrically and feed without difficulty',
    'No open wounds or broken skin',
  ],
  whenToMention: [
    'Marks seem slow to fade or you notice any skin breakdown',
    'You notice facial asymmetry, especially when baby cries (possible facial nerve palsy)',
    'You want reassurance about the marks your baby has from delivery',
  ],
  whenToActNow: [
    'Signs of facial nerve palsy that does not improve within a few weeks, or difficulty with eye closure on one side',
    'Any open wound, increasing swelling, or signs of infection at the forceps application site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Assisted Vaginal Delivery. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Forceps Delivery Complications. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539764/',
    },
  ],
  relatedConcernSlugs: ['newborn-facial-nerve-palsy', 'newborn-bruising-from-delivery', 'newborn-vacuum-marks'],
};
