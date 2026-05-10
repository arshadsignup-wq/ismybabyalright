import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'cephalohematoma-newborn',
  title: 'Cephalohematoma',
  category: 'medical',
  searchTerms: [
    'cephalohematoma',
    'cephalohematoma newborn',
    'bump on baby head after birth',
    'hard lump on newborn head',
    'baby head bump delivery',
    'blood collection baby skull',
    'cephalohematoma vs caput',
    'newborn head swelling one side',
    'raised bump on baby head bone',
  ],
  quickAnswer:
    'Cephalohematoma is a collection of blood between a skull bone and its periosteum (the membrane covering the bone), caused by pressure during delivery. It appears as a firm, raised bump on one side of the baby\'s head that does not cross suture lines. It is generally harmless and resolves on its own over weeks to months. It does not affect the brain, but the breakdown of blood can contribute to jaundice.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'A cephalohematoma may not be immediately obvious at birth because the bleeding accumulates slowly. It typically becomes noticeable within the first few hours to days. It presents as a firm, well-defined, raised area on one side of the head, most commonly over the parietal bone. Unlike caput succedaneum, a cephalohematoma does not cross suture lines and feels firmer. It occurs in about 1-2% of births and is more common after prolonged labor, assisted delivery (forceps or vacuum), or in larger babies. No treatment is needed in most cases.',
    },
    {
      ageRange: '2-7 days',
      context:
        'The cephalohematoma may appear to grow slightly during the first few days as blood continues to accumulate, then stabilize. The bump may feel firm in the center and softer at the edges. As the blood begins to be reabsorbed, the edges may harden first, creating a crater-like feel with a soft center, which can be alarming but is normal. Doctors will monitor bilirubin levels because the breakdown of the collected blood can cause or worsen jaundice. Phototherapy may be needed if jaundice levels become elevated.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'The cephalohematoma will gradually become firmer as the blood is reabsorbed and the area begins to calcify at the edges. This can make the bump feel like it has a hard rim, which is a normal part of resolution. Do not attempt to massage or press on the bump, as this will not speed healing and could cause harm. The bump should not be growing at this point. If it is getting larger, or if the skin over it becomes red or warm, contact your pediatrician.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Most cephalohematomas resolve completely within 2-3 months. Some may take longer, particularly larger ones. As the calcified rim remodels, the head shape returns to normal. In rare cases, a small calcified bump may persist for longer but will eventually smooth out as the skull grows. A cephalohematoma does not affect brain development or cause lasting harm. If the bump persists beyond 3 months without improvement, or if you notice any changes in your baby\'s head shape or development, mention it at a well-child visit.',
    },
  ],
  whenNormal: [
    'A firm, well-defined bump on one side of the head that appeared within the first day or two after birth',
    'The bump has a hardening rim with a softer center as it begins to resolve',
    'The bump is gradually getting smaller over weeks',
    'Your baby is feeding well, alert, and developing normally despite the cephalohematoma',
  ],
  whenToMention: [
    'You want to confirm that a bump on your baby\'s head is a cephalohematoma and not something else',
    'The bump has not started to decrease in size after 4-6 weeks',
    'Your baby is developing jaundice (yellow skin or eyes) that may be related to the cephalohematoma',
  ],
  whenToActNow: [
    'The bump is rapidly growing, the baby is becoming pale, or the fontanelle is bulging, as these could indicate a more serious type of bleeding (subgaleal hemorrhage) that requires emergency medical attention',
    'The skin over the bump becomes red, warm, or drains fluid, or the baby develops a fever, as these could indicate an infected cephalohematoma requiring urgent treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Injuries. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews/article/8/9/e369/54996/Neonatal-Birth-Injuries',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Cephalohematoma. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001587.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Birth Injury Overview. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/diseases-conditions/birth-injury/symptoms-causes/syc-20370669',
    },
  ],
};
