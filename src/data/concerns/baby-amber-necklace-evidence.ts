import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-amber-necklace-evidence',
  title: 'Are Amber Teething Necklaces Safe or Effective?',
  category: 'medical',
  searchTerms: [
    'amber teething necklace safe',
    'amber necklace baby evidence',
    'baltic amber teething',
    'amber necklace choking risk',
    'amber teething necklace work',
    'teething necklace danger baby',
    'amber beads baby strangulation',
    'amber necklace succinic acid',
    'natural teething remedy amber',
    'amber necklace AAP recommendation',
  ],
  quickAnswer:
    'The AAP and FDA advise against amber teething necklaces due to serious safety risks including strangulation and choking. There is no scientific evidence that amber releases succinic acid in amounts that could relieve pain, and laboratory studies have shown the claimed mechanism does not work. The risks of these necklaces - strangulation, choking on beads, and aspiration - are real and have resulted in infant deaths.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Some parents begin using amber teething necklaces even before teeth appear, hoping to prevent teething pain. This is particularly dangerous at this age as young babies have limited ability to move restrictive objects away from their airway. The FDA issued a safety warning in 2018 specifically about teething jewelry after reports of strangulation and choking. For young babies experiencing early teething symptoms, chilled (not frozen) teething rings, clean fingers for gum massage, and gentle gum rubbing are safe alternatives.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Peak teething typically begins around 6 months, which is when many parents turn to amber necklaces. However, this is also the age when babies are most at risk for choking on small objects, as they put everything in their mouths. If beads break off, they become a significant choking hazard. Safe teething alternatives include solid silicone teething rings, chilled washcloths to chew on, and if needed, age-appropriate doses of infant acetaminophen as recommended by your pediatrician.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers who wear amber necklaces face ongoing strangulation risk, particularly during sleep or unsupervised play. The Consumer Product Safety Commission has received reports of deaths related to teething jewelry in this age group. No necklace, bracelet, or anklet should be worn during sleep. By this age, many children have most of their primary teeth, and teething discomfort can be managed with cold foods (for children eating solids), teething toys, and over-the-counter pain relief as directed by your pediatrician.',
    },
  ],
  whenNormal: [
    'You are looking for safe teething remedies - this shows you are an attentive parent trying to help your baby.',
    'Your baby is fussy during teething and you want relief options - there are many safe evidence-based alternatives.',
    'You have used an amber necklace in the past without incident and are now reconsidering based on safety information.',
  ],
  whenToMention: [
    'You want guidance on safe, evidence-based teething remedies for your baby.',
    'Your baby is experiencing significant teething discomfort that is affecting sleep or feeding.',
    'You are interested in complementary approaches to teething and want to discuss safe options with your pediatrician.',
  ],
  whenToActNow: [
    'Your baby or toddler has gotten a necklace or teething jewelry caught around their neck or tangled in any way.',
    'Your baby has swallowed or choked on a bead from any type of teething jewelry.',
    'Your baby has a mark, indentation, or redness around their neck from any necklace or cord.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-acupuncture-safety-infant',
    'baby-essential-oil-diffuser-risk',
    'baby-cough-home-remedies-safe',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amber Teething Necklaces: A Caution for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Amber-Teething-Necklaces.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Teething Necklaces and Beads: A Caution for Parents. Pediatrics, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30782632/',
    },
    {
      org: 'CDC',
      citation:
        'U.S. Food and Drug Administration. FDA Warns About Safety Risks of Teething Jewelry, 2018.',
      url: 'https://www.fda.gov/consumers/consumer-updates/safely-soothing-teething-pain-and-sensory-needs-babies-and-older-children',
    },
  ],
};
