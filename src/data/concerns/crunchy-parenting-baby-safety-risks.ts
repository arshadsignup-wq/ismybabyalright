import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'crunchy-parenting-baby-safety-risks',
  title: 'Crunchy Parenting Practices and Baby Safety Risks',
  category: 'medical',
  searchTerms: [
    'crunchy parenting risks',
    'natural parenting dangerous',
    'refusing vaccines natural',
    'anti-vaccine parenting',
    'essential oils instead of medicine baby',
    'raw milk for baby',
    'homeopathy for baby',
    'no sunscreen baby natural',
    'amber teething necklace safety',
    'chiropractic adjustment baby safe',
    'crunchy mom safety concerns',
  ],
  quickAnswer:
    'While many "crunchy" or natural parenting practices are safe or even beneficial (like breastfeeding and babywearing), some practices promoted in online communities can pose serious risks to babies. These include refusing vaccinations, using essential oils on infants, amber teething necklaces (choking and strangulation hazard), raw milk (bacterial contamination risk), and replacing evidence-based medical treatment with unproven alternatives. It is important to evaluate each practice individually against the medical evidence.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Certain practices popular in natural parenting communities are particularly dangerous for young infants. These include refusing the vitamin K shot at birth (risk of life-threatening bleeding), declining the hepatitis B vaccine, applying essential oils to infant skin (toxic and can cause chemical burns or respiratory distress), and using homeopathic teething tablets (some have been linked to adverse events). Water intoxication from giving young infants water is another risk. Always discuss "natural" alternatives with your pediatrician before using them.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile, additional risks include amber teething necklaces (choking and strangulation hazard -- the AAP recommends against them), giving raw honey before 12 months (botulism risk), using raw milk in place of formula or breast milk (serious bacterial infection risk from Salmonella, E. coli, and Listeria), and delaying or refusing the recommended vaccine schedule. Infant chiropractic adjustments also lack evidence of benefit and carry rare but serious risks for babies.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in "crunchy" households may face risks from delayed or refused vaccinations (increasing susceptibility to measles, pertussis, and other preventable diseases), use of herbal remedies that can interact with medications or have toxic effects in small children, and avoidance of sunscreen (increasing skin cancer risk). Some parents in these communities may also delay appropriate medical treatment for conditions that require timely intervention. Evidence-based practices and natural lifestyle choices are not mutually exclusive.',
    },
  ],
  whenNormal: [
    'You prefer natural products for cleaning and personal care while still following evidence-based medical guidance for your baby.',
    'You breastfeed, babywear, use cloth diapers, and make homemade baby food while keeping your child up to date on vaccinations.',
    'You prefer to minimize unnecessary medications but seek appropriate medical care when your baby is ill.',
  ],
  whenToMention: [
    'You are considering declining or delaying recommended vaccines and want to discuss the risks and benefits.',
    'You want to use herbal remedies or essential oils on your baby and want safety guidance.',
    'You are receiving conflicting advice from your online community and your pediatrician.',
  ],
  whenToActNow: [
    'Your baby has ingested an essential oil, herbal supplement, or raw milk and is showing symptoms of poisoning, allergic reaction, or infection.',
    'Your unvaccinated child has been exposed to a vaccine-preventable disease like measles or whooping cough.',
    'You have delayed medical treatment for your baby based on online advice and your baby\'s condition is worsening.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['essential-oils-baby-toxic-danger', 'childhood-immunization-schedule-2026-changes', 'breastfeeding-misinformation-social-media'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething Necklaces and Beads: A Caution for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Amber-Teething-Necklaces.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Raw Milk Questions and Answers. CDC.',
      url: 'https://www.cdc.gov/food-safety/foods/raw-milk.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vitamin K and the Newborn Infant. Pediatrics, 2003.',
      url: 'https://publications.aap.org/pediatrics/article/112/1/191/28063/Controversies-Concerning-Vitamin-K-and-the-Newborn',
    },
  ],
};
