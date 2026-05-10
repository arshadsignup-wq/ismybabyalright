import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'honey-before-one-botulism',
  title: 'Honey Before Age One and Botulism Risk',
  category: 'feeding',
  searchTerms: [
    'honey before age one',
    'baby botulism honey',
    'infant botulism symptoms',
    'when can baby have honey',
    'honey dangerous for baby',
    'baby ate honey accidentally',
    'botulism signs in baby',
    'raw honey infant risk',
    'honey in baby food safe',
  ],
  quickAnswer:
    'Honey should never be given to babies under 12 months of age due to the risk of infant botulism, a rare but potentially life-threatening illness. Honey can contain spores of Clostridium botulinum bacteria, which can germinate in an infant\'s immature digestive system and produce a dangerous toxin. This applies to all types of honey: raw, pasteurized, processed, and honey found in baked goods or other products. After 12 months, the gut is mature enough to safely handle honey.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Honey must be strictly avoided. Infants in this age range are at the highest risk for infant botulism because their gut microbiome is not yet developed enough to compete with C. botulinum spores. Even a very small amount of honey can be dangerous. This includes honey on pacifiers (a folk remedy that should never be used), honey in herbal remedies, and any food product containing honey.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue to strictly avoid all forms of honey. Check ingredient labels on any products given to your baby, including cereals, teething biscuits, and natural remedies. Some cough syrups and herbal preparations marketed for infants may contain honey. The immature infant gut still cannot safely handle botulism spores during this period.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Even as solids are introduced and the gut matures, honey remains off-limits until the first birthday. As your baby tries many new foods, be vigilant about checking ingredient labels, especially for baked goods, sauces, marinades, and snacks that may contain honey. If someone else prepares food for your baby, clearly communicate the no-honey rule. Homemade goods from family and friends often contain honey unknowingly.',
    },
    {
      ageRange: '12 months+',
      context:
        'After the first birthday, honey is considered safe. The gut microbiome has typically matured enough to prevent C. botulinum spores from colonizing and producing toxin. Honey can be used as a natural sweetener in moderation. It has also been shown to be effective for soothing coughs in children over age 1, often outperforming over-the-counter cough medicines in studies. Introduce honey in small amounts as with any new food.',
    },
  ],
  whenNormal: [
    'You are avoiding all honey and honey-containing products for your baby under 12 months',
    'Your toddler over 12 months eats honey without any adverse effects',
    'You are checking ingredient labels on commercial foods and confirming they do not contain honey for your infant',
    'Family and caregivers are aware of and following the no-honey-before-one rule',
  ],
  whenToMention: [
    'Your baby under 12 months accidentally ate a small amount of honey and you want guidance on monitoring',
    'You are unsure whether a specific product or food contains honey',
    'You are considering using honey as a home remedy for your baby\'s cough and your baby is under 12 months',
  ],
  whenToActNow: [
    'Your baby shows signs of infant botulism: constipation, weak cry, poor feeding, drooping eyelids, weak muscle tone (floppy baby), or difficulty breathing after any potential honey exposure',
    'Your baby is increasingly lethargic, has a weak suck, or is losing previously acquired abilities, especially if honey exposure is suspected',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why You Shouldn\'t Give Honey to Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Foods-to-Avoid-for-Babies.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Botulism: Prevention.',
      url: 'https://www.cdc.gov/botulism/prevention/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Botulism. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK493178/',
    },
  ],
};
