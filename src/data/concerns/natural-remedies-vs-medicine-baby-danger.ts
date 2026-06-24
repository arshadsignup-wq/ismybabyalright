import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'natural-remedies-vs-medicine-baby-danger',
  title: 'Natural Remedies vs Medicine for Babies - Safety Concerns',
  category: 'medical',
  searchTerms: [
    'natural remedies baby safe',
    'essential oils baby danger',
    'homeopathy baby safe',
    'herbal remedies infant',
    'teething tablets baby danger',
    'gripe water safe baby',
    'amber teething necklace safe',
    'alternative medicine baby',
    'natural medicine baby risk',
    'essential oils diffuser baby',
    'homeopathic teething tablets recall',
    'honey lemon baby cold natural remedy',
  ],
  quickAnswer:
    'Many "natural" remedies marketed for babies are unregulated, untested, and potentially dangerous. The FDA does not regulate supplements, homeopathic products, or essential oils for safety or efficacy in infants. Notable dangers include: homeopathic teething tablets (recalled after reports of seizures and deaths due to inconsistent belladonna levels), essential oils (can cause chemical burns, respiratory distress, and seizures in infants), amber teething necklaces (choking and strangulation risk), and honey before 12 months (botulism). "Natural" does not mean safe, especially for babies whose detoxification systems are immature.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants are especially vulnerable to unregulated products because their liver and kidneys are immature, making them less able to process and eliminate substances. Gripe water (a popular "natural" remedy for colic) is unregulated and some formulations have contained alcohol, sodium bicarbonate, or herbal ingredients not tested in infants. Essential oils should never be applied directly to infant skin and should be used with extreme caution (if at all) in diffusers near young babies. Eucalyptus and peppermint oils can cause respiratory distress in infants. For common newborn issues like colic, gas, and fussiness, evidence-based approaches (holding, movement, white noise, proper feeding techniques) are safer.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Teething is a common trigger for parents to seek natural remedies. The FDA has warned against homeopathic teething products after testing revealed inconsistent and sometimes dangerous levels of belladonna (a toxic substance). Amber teething necklaces have no proven analgesic effect and pose strangulation and choking hazards. Safe teething strategies include chilled (not frozen) teething rings, gum massage with a clean finger, and if needed, age-appropriate doses of acetaminophen or ibuprofen (ibuprofen only after 6 months) as recommended by your pediatrician.',
    },
    {
      ageRange: '12-36 months',
      context:
        'As toddlers get colds and minor illnesses, parents may be tempted by "natural" cough and cold remedies. Over-the-counter cough and cold medications (including "natural" versions) are not recommended for children under 2 (some guidelines say under 4-6). Honey can be given after 12 months and has some evidence for soothing coughs, but no other "natural" cough remedy has strong evidence in children. If your child is sick, focus on fluids, rest, humidified air, and saline drops. Always tell your pediatrician about any supplements, herbs, or alternative products you are giving your child.',
    },
  ],
  whenNormal: [
    'You are using evidence-based comfort measures for teething, colic, or minor illness.',
    'You have discussed any supplements or alternative products with your pediatrician before using them.',
    'You are using age-appropriate over-the-counter medications (acetaminophen, ibuprofen) at recommended doses when needed.',
  ],
  whenToMention: [
    'You are interested in natural or alternative approaches and want guidance on what is safe for your baby.',
    'You are using an herbal supplement, essential oil, or homeopathic product and want to discuss it with your pediatrician.',
    'A family member or caregiver is giving your baby a remedy you are unsure about.',
  ],
  whenToActNow: [
    'Your baby has been exposed to an essential oil directly on the skin or has ingested an herbal product and is showing signs of reaction (rash, breathing difficulty, vomiting, lethargy, seizures).',
    'Your baby has ingested a homeopathic teething product and is showing unusual symptoms - call Poison Control at 1-800-222-1222.',
    'Your baby is wearing an amber teething necklace or any jewelry that poses a choking or strangulation risk - remove it immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'melatonin-baby-toddler-safety',
    'grandparent-outdated-advice-handling',
    'infant-reflux-overmedication-ppi',
  ],
  sources: [
    {
      org: 'FDA',
      citation:
        'FDA. Safety Alert: Homeopathic Teething Products.',
      url: 'https://www.fda.gov/consumers/consumer-updates/safely-soothe-teething-pain-and-sensory-needs-babies-and-older-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amber Teething Necklaces: A Caution for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Amber-Teething-Necklaces.aspx',
    },
    {
      org: 'NIH',
      citation:
        'NIH National Center for Complementary and Integrative Health. Using Dietary Supplements Wisely.',
      url: 'https://www.nccih.nih.gov/health/using-dietary-supplements-wisely',
    },
  ],
};
