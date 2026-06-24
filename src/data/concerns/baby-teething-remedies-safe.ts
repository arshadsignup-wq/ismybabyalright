import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-teething-remedies-safe',
  title: 'Safe Teething Remedies for Babies',
  category: 'medical',
  searchTerms: [
    'safe teething remedies baby',
    'baby teething pain relief',
    'teething gel safe baby',
    'teething ring baby',
    'natural teething remedies',
    'baby teething what to do',
    'benzocaine teething danger',
    'amber teething necklace safe',
    'baby teething medicine',
    'frozen teething toys safe',
    'teething tablets safety',
  ],
  quickAnswer:
    'The safest teething remedies include chilled (not frozen) teething rings, gentle gum massage with a clean finger, and cold washcloths to chew on. For significant pain, infant acetaminophen or ibuprofen (6 months+) can be used as directed. The FDA warns against benzocaine gels (Orajel), homeopathic teething tablets, and amber teething necklaces due to serious safety risks including choking, strangulation, and methemoglobinemia.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before teeth emerge, babies may drool excessively and chew on hands or objects. Offer a clean, chilled (not frozen) rubber teething ring or a cold, damp washcloth for gnawing. Gently rubbing your baby\'s gums with a clean finger can provide relief. Avoid teething biscuits or food-based teethers for babies not yet eating solids. Do NOT use benzocaine gels (like Baby Orajel), which the FDA warns can cause a rare but dangerous condition called methemoglobinemia. Only use infant acetaminophen for pain if recommended by your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As teeth begin erupting, teething discomfort may increase. Chilled teething toys, cold spoons, and cold fruit in a mesh feeder can help. Infant ibuprofen can be used after 6 months (with pediatrician guidance) and may be more effective than acetaminophen for teething pain because it also reduces gum inflammation. Amber teething necklaces are NOT recommended by the AAP - they pose choking and strangulation risks with no proven pain relief benefit. Homeopathic teething tablets have been linked to adverse events and should be avoided.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Molar teething in toddlers can be more painful due to the larger tooth surface. Continue using chilled teething toys and pain relievers as needed. A chilled, wet washcloth or cold fruit can soothe sore gums. Avoid hard foods or toys that could break and pose a choking risk. Some toddlers find relief from chewing on silicone toothbrushes. If your toddler seems to have excessive pain with teething, consult your pediatrician - high fever and significant illness are NOT normal teething symptoms and may indicate another condition.',
    },
  ],
  whenNormal: [
    'Your baby is fussy and drooling more than usual but is still eating and sleeping reasonably well.',
    'Your baby wants to chew on everything and is comforted by cold teething toys.',
    'Mild gum swelling and redness are visible where a new tooth is emerging.',
  ],
  whenToMention: [
    'Teething pain seems severe enough to significantly affect eating and sleep for more than a few days.',
    'You are unsure about the correct dosage of pain medication for your baby.',
    'Your baby has a large bluish bump on the gum (eruption cyst) that concerns you.',
  ],
  whenToActNow: [
    'Your baby has a fever over 101F (38.3C) - this is NOT caused by teething and needs evaluation.',
    'Your baby has accidentally ingested benzocaine gel or homeopathic teething tablets.',
    'Your baby is choking on a teething toy or piece of a teething necklace.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-teething-order-timeline', 'baby-grinding-teeth', 'baby-refusing-solids'],
  sources: [
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Safely Soothing Teething Pain and Sensory Needs in Babies and Older Children.',
      url: 'https://www.fda.gov/consumers/consumer-updates/safely-soothing-teething-pain-and-sensory-needs-babies-and-older-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Teething Pain. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Risk of Serious and Potentially Fatal Blood Disorder Prompts FDA Action on Oral Over-the-Counter Benzocaine Products.',
      url: 'https://www.fda.gov/drugs/drug-safety-and-availability/risk-serious-and-potentially-fatal-blood-disorder-prompts-fda-action-oral-over-counter-benzocaine',
    },
  ],
};
