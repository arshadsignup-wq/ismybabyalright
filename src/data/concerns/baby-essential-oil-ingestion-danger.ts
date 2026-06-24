import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-essential-oil-ingestion-danger',
  title: 'My Baby Ingested Essential Oil - What to Do',
  category: 'medical',
  searchTerms: [
    'baby swallowed essential oil',
    'essential oil poisoning baby',
    'toddler drank essential oil',
    'essential oil ingestion child',
    'tea tree oil poison baby',
    'essential oil toxic baby',
    'essential oil emergency child',
    'baby ate essential oil',
    'essential oil accidental ingestion toddler',
    'lavender oil ingestion baby',
  ],
  quickAnswer:
    'Essential oil ingestion by a baby or toddler is a medical emergency. Even small amounts can cause serious harm including seizures, breathing difficulties, liver damage, and chemical burns to the mouth and esophagus. If your child has ingested any essential oil, call Poison Control (1-800-222-1222) immediately. Do not induce vomiting unless directed to by medical professionals, as this can cause additional damage.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Essential oil ingestion in a young baby is especially dangerous due to their small body size and immature organ systems. Even tiny amounts can cause serious toxicity. If you suspect your baby has ingested essential oil (from a bottle, a diffuser that leaked, or oil applied to skin that they mouthed), call Poison Control or 911 immediately. Signs of essential oil poisoning in young babies include excessive drooling, vomiting, breathing difficulties, lethargy, or seizures. Keep all essential oil products completely away from babies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile and start exploring by mouthing objects, the risk of accidental ingestion increases. Essential oil bottles can attract curious babies with their colors and smells. Store all essential oils in locked cabinets, never on counters, nightstands, or low shelves. If ingestion occurs, do not try to make your baby vomit - some essential oils can cause aspiration pneumonia if vomited. Save the bottle to show emergency personnel which oil was ingested and approximately how much was in it.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are at the highest risk for accidental essential oil ingestion because they can reach, open, and taste things quickly. Essential oil bottles often have dropper tops that are not child-resistant. The most commonly ingested essential oils include tea tree, lavender, eucalyptus, and peppermint. Symptoms can develop rapidly - within minutes to hours - and may include mouth and throat burns, stomach pain, vomiting, diarrhea, coughing, choking, and in severe cases, seizures or loss of consciousness.',
    },
  ],
  whenNormal: [
    'You keep all essential oils stored in locked cabinets completely out of your child\'s reach - this is the safest approach.',
    'Your baby briefly touched a highly diluted essential oil on your skin and did not ingest it.',
  ],
  whenToMention: [
    'You want guidance on safe storage of essential oils in a home with young children.',
    'Your baby had brief skin contact with an essential oil and you want to confirm no further action is needed.',
  ],
  whenToActNow: [
    'Your baby or toddler has ingested ANY amount of essential oil - call Poison Control (1-800-222-1222) immediately, even if they seem fine.',
    'Your child is showing symptoms after essential oil exposure: vomiting, drooling excessively, coughing, difficulty breathing, lethargy, or seizures - call 911.',
    'Your child has essential oil burns in or around their mouth - rinse with water and seek emergency care.',
    'Your child is having seizures or has lost consciousness after essential oil exposure - call 911 immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-essential-oil-diffuser-risk',
    'apartment-baby-proofing-small-space',
    'baby-choking-on-food',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Capital Poison Center. Essential Oils: Poisoning Information.',
      url: 'https://www.poison.org/articles/essential-oils',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Poison Prevention for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Essential Oil Exposures in Children: A Review of Cases Reported to Poison Centers. Clinical Toxicology, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33115301/',
    },
  ],
};
