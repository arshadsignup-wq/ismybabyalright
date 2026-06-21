import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'amber-teething-necklace-safety-risk',
  title: 'Amber Teething Necklaces: Safety Risks and Evidence',
  category: 'medical',
  searchTerms: [
    'amber teething necklace safe',
    'amber teething necklace dangers',
    'do amber teething necklaces work',
    'FDA amber teething necklace warning',
    'amber necklace choking risk baby',
    'succinic acid teething pain',
    'amber teething bracelet safety',
    'are teething necklaces dangerous',
    'baby strangled teething necklace',
    'alternative to amber teething necklace',
  ],
  quickAnswer:
    'The FDA, AAP, and CPSC all warn against amber teething necklaces and bracelets due to serious safety risks including strangulation, choking, and aspiration. In 2018, the FDA issued a formal safety communication after receiving reports of an infant death and a near-strangulation associated with teething jewelry. The claimed mechanism — that body heat releases succinic acid from Baltic amber, which is then absorbed through the skin to relieve pain — has no scientific support. A 2019 study in BMC Complementary Medicine and Therapies found that the amount of succinic acid in amber is insufficient to produce any analgesic effect, and skin absorption at body temperature is negligible. Despite these warnings, amber teething necklaces remain widely sold online. Safe, evidence-based alternatives for teething pain include: chilled (not frozen) teething rings, clean wet washcloth to chew on, gentle gum massage with a clean finger, and pediatrician-approved acetaminophen or ibuprofen (over 6 months) for significant discomfort.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'Teething commonly begins around 4-6 months, though it can start earlier. This is when parents first consider teething remedies. Amber necklaces are often given to young infants who cannot remove them, creating a constant strangulation risk. The AAP recommends against any necklace, bracelet, or anklet on infants. At this age, a chilled teething ring or clean wet washcloth is the safest option. Teething gels containing benzocaine (like Orajel) are also FDA-warned against for children under 2 due to the risk of methemoglobinemia.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As more teeth emerge, teething discomfort may increase. Babies in this age range are more mobile and may catch the necklace on crib rails, furniture, or during play — increasing strangulation risk. If your baby is wearing an amber necklace, the FDA recommends removing it immediately. Safe alternatives at this age include silicone teething toys, frozen fruit in a mesh feeder (for babies eating solids), and infant acetaminophen or ibuprofen as directed by your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who wear amber necklaces may break them, creating a choking hazard from individual beads. Even "breakaway" clasps do not eliminate the risk, as the beads themselves are small enough to be aspirated. If you have been using an amber necklace and want to stop, there is no withdrawal effect to worry about — any perceived benefit was likely coincidental timing with natural teething cycles. The most intense teething period (first molars at 13-19 months) can be managed with cold foods, chewing toys, and pain medication as needed.',
    },
    {
      ageRange: 'All ages',
      context:
        'If family members or friends gift amber teething jewelry, you can politely decline or accept and not use it. Many parents feel pressured by well-meaning relatives who "used them without any problems." The fact that a product didn\'t cause harm in one instance does not make it safe — the risks are rare but catastrophic (death or brain injury from strangulation or choking). The AAP position is clear: no teething necklaces, bracelets, or anklets of any material for any child.',
    },
  ],
  whenNormal: [
    'Your baby fussing, drooling, and chewing on things during teething — this is expected',
    'Teething pain coming and going in waves over days to weeks as teeth move through the gums',
    'Your baby being irritable but still eating, sleeping, and functioning overall during teething',
    'Choosing not to use amber necklaces — this is the medically recommended approach',
  ],
  whenToMention: [
    'Your baby has significant teething pain that interferes with feeding or sleep and you need guidance on safe pain management',
    'You are unsure about the safety of other teething products (homeopathic tablets, clove oil, etc.)',
    'Your baby has symptoms you attribute to teething but that seem severe (high fever over 101°F, diarrhea, rash)',
  ],
  whenToActNow: [
    'Your baby is choking on a bead or small piece from any teething product',
    'You find marks or indentations on your baby\'s neck from a necklace',
    'Your baby has had a teething gel containing benzocaine and develops pale or blue-grey skin, shortness of breath, or rapid heart rate — this is a sign of methemoglobinemia and requires emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'teething-order-timeline',
    'baby-teething-fever-myth',
    'teething-pain-relief-safe-methods',
  ],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. FDA Warns Against Teething Necklaces, Bracelets. Safety Communication, 2018.',
      url: 'https://www.fda.gov/consumers/consumer-updates/safely-soothing-teething-pain-and-sensory-needs-babies-and-older-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething Necklaces and Beads: A Caution for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Amber-Teething-Necklaces.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Teething in Infants: A Review. BMC Oral Health.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30854960/',
    },
  ],
};
