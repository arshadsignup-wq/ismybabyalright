import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teething-gel-safety',
  title: 'Are Teething Gels Safe for My Baby?',
  category: 'medical',
  searchTerms: [
    'teething gel safe baby',
    'benzocaine baby dangerous',
    'lidocaine teething gel baby',
    'orajel baby safe',
    'teething gel FDA warning',
    'numbing gel baby gums',
    'teething relief gel baby',
    'baby teething gel alternative',
    'are teething gels recommended',
    'teething gel methemoglobinemia',
  ],
  quickAnswer:
    'The FDA strongly advises against using teething gels containing benzocaine (like Baby Orajel) for children under 2 due to the risk of methemoglobinemia, a rare but life-threatening condition that reduces blood oxygen levels. Lidocaine-containing products also pose overdose risks. Safe alternatives include chilled teething rings, cold washcloths, gentle gum massage, and age-appropriate pain relievers like acetaminophen if recommended by your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Teething gels should not be used at this age. If your young baby seems uncomfortable, it may or may not be related to teething (early teething before 3 months is possible but uncommon). Offer a clean, chilled teething ring or wet washcloth for gumming. Do not use frozen items, which can be too hard and damage gums.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As teething begins, parents often look for relief options. Avoid all benzocaine and lidocaine products. Safe options include: refrigerated (not frozen) teething rings, a cold wet washcloth, gentle gum massage with a clean finger, and acetaminophen for particularly fussy episodes (with pediatrician guidance).',
    },
    {
      ageRange: '6-12 months',
      context:
        'Teething pain peaks during this period as multiple teeth erupt. In addition to the safe options above, ibuprofen can now be used for teething pain. Silicone teething toys designed for this age are helpful. Avoid amber teething necklaces, which pose choking and strangulation risks with no proven benefit.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Molar eruption can cause significant discomfort. Continue using safe pain management: cold foods (chilled fruit in a mesh feeder), gum massage, teething toys, and appropriate pain relievers. Some "natural" or "homeopathic" teething products have also been found to be unsafe - the FDA has warned about homeopathic teething tablets containing belladonna.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Second molars (2-year molars) can cause discomfort. Continue to avoid numbing gels. Offer cold foods, chewing toys appropriate for the age, and pain medication as needed. By this age, teething discomfort is typically less severe as children have developed coping mechanisms.',
    },
  ],
  whenNormal: [
    'Your baby is mildly fussy during teething and responds to safe comfort measures',
    'Teething discomfort lasts a few days around each tooth eruption and then resolves',
    'Your baby chews on objects and drools more than usual during teething',
  ],
  whenToMention: [
    'Your baby seems in significant pain from teething that is not relieved by safe measures',
    'You have questions about which teething products are safe',
    'You accidentally used a benzocaine product on your baby and want guidance',
  ],
  whenToActNow: [
    'Your baby shows signs of methemoglobinemia after using a numbing product: pale, gray, or blue-colored skin, lips, or nail beds, shortness of breath, confusion, or rapid heart rate',
    'Your baby seems excessively ill with fever over 101°F, refuses to eat for extended periods, or has symptoms beyond typical teething discomfort',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-teething-fever-myth',
    'baby-fever-acetaminophen-vs-ibuprofen',
    'baby-first-dental-visit-timing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething Pain. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx',
    },
    {
      org: 'CDC',
      citation:
        'U.S. Food and Drug Administration. Safely Soothing Teething Pain and Sensory Needs in Babies and Older Children.',
      url: 'https://www.fda.gov/consumers/consumer-updates/safely-soothing-teething-pain-and-sensory-needs-babies-and-older-children',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Benzocaine and methemoglobinemia in children.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23835793/',
    },
  ],
};
