import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-herbal-supplement-risk',
  title: 'Are Herbal Supplements Safe for My Baby?',
  category: 'medical',
  searchTerms: [
    'herbal supplements for babies safe',
    'baby herbal remedies risks',
    'gripe water ingredients safety',
    'baby chamomile tea safe',
    'herbal medicine for infant colic',
    'natural remedies for baby safe',
    'baby fennel tea safety',
    'herbal drops for baby',
    'are natural supplements safe for infants',
    'baby herbal supplement danger',
    'alternative medicine baby risks',
  ],
  quickAnswer:
    'Herbal supplements are generally not recommended for infants and young children. Unlike medications, herbal products are not regulated by the FDA for safety, efficacy, or quality. They may contain undisclosed ingredients, contaminants, heavy metals, or doses inappropriate for infants. Some popular products marketed for babies (such as gripe water, chamomile tea, or herbal teething remedies) may pose risks including allergic reactions, drug interactions, and toxicity. Always consult your pediatrician before giving any herbal product to your baby.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants under 6 months should receive only breast milk, formula, or medications prescribed by their doctor. No herbal supplements, teas, or water are recommended at this age. Some parents give gripe water for colic, but many formulations contain ingredients that are unsafe for young infants, including alcohol, sodium bicarbonate, or undisclosed herbs. The FDA has issued warnings about certain gripe water brands due to contamination. Giving herbal teas to young infants can also fill them up, reducing milk intake and potentially causing nutritional deficiency or water intoxication.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Even as babies start solids, herbal supplements remain risky. Products marketed as natural are not necessarily safe — many herbs have pharmacological effects. For example, star anise tea has been linked to seizures in infants, and some herbal teething products have been found to contain dangerous levels of belladonna. If you are interested in herbal remedies, discuss each specific product with your pediatrician, who can evaluate the ingredient list and potential interactions with any medications. Your baby\'s liver and kidneys are still maturing and may not process herbal compounds safely.',
    },
    {
      ageRange: '12-36 months',
      context:
        'While toddlers are more physiologically mature, herbal supplements still carry risks. The lack of FDA regulation means potency, purity, and dosing for children are often unknown. Elderberry syrup, echinacea, and vitamin supplements with herbal additives are commonly given to toddlers but may interact with medications or cause allergic reactions. If you choose to use herbal products, look for those with third-party testing (USP or NSF certification), use only products specifically formulated for children, and always inform your pediatrician about any supplements your child is taking.',
    },
  ],
  whenNormal: [
    'You discuss any supplement interests with your pediatrician before giving them to your baby.',
    'You use only pediatrician-recommended vitamins (like vitamin D drops for breastfed babies) rather than herbal alternatives.',
    'You read ingredient labels carefully and avoid products with undisclosed or unfamiliar ingredients.',
  ],
  whenToMention: [
    'You are considering giving your baby an herbal supplement and want to discuss its safety with your pediatrician.',
    'A family member or caregiver wants to give your baby a traditional herbal remedy and you want medical guidance.',
    'Your baby is already taking an herbal product and you want to ensure it is safe.',
  ],
  whenToActNow: [
    'Your baby has ingested an herbal product and is showing signs of an allergic reaction: hives, swelling, difficulty breathing, or vomiting — seek emergency care and bring the product with you.',
    'Your baby is having unusual symptoms after taking an herbal supplement: seizures, extreme drowsiness, rapid heart rate, or difficulty breathing — call 911 or Poison Control (1-800-222-1222).',
    'You discover that an herbal product you have been giving your baby has been recalled or contains undisclosed toxic ingredients — stop use immediately and contact your pediatrician.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-homeopathy-teething-tablets-risk', 'baby-osteopathy-evidence-safety', 'baby-goat-milk-formula-safety'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Herbal Remedies: Not Always Safe for Children',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Herbal-Remedies.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — Dietary Supplements: What You Need to Know',
      url: 'https://www.fda.gov/food/dietary-supplements/information-consumers-using-dietary-supplements',
    },
    {
      org: 'NIH',
      citation:
        'National Center for Complementary and Integrative Health — Using Dietary Supplements Wisely',
      url: 'https://www.nccih.nih.gov/health/using-dietary-supplements-wisely',
    },
  ],
};
