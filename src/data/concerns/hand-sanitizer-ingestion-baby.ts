import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hand-sanitizer-ingestion-baby',
  title: 'My Baby Licked or Swallowed Hand Sanitizer',
  category: 'medical',
  searchTerms: [
    'baby ate hand sanitizer',
    'toddler drank hand sanitizer',
    'baby licked hand sanitizer',
    'hand sanitizer poisoning baby',
    'alcohol hand sanitizer baby ingestion',
    'baby swallowed purell',
    'hand sanitizer alcohol poisoning child',
    'baby got hand sanitizer in mouth',
    'is hand sanitizer toxic to babies',
    'hand sanitizer ethanol baby',
  ],
  quickAnswer:
    'Hand sanitizers typically contain 60-95% ethanol (alcohol), making them a serious poisoning risk for babies and toddlers. Even a small amount can cause alcohol poisoning in a young child, leading to drowsiness, vomiting, low blood sugar, and in severe cases, seizures or coma. If your child has ingested hand sanitizer, call Poison Control (1-800-222-1222) immediately.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies at this age are most vulnerable to even tiny amounts of alcohol. If hand sanitizer was applied to your baby\'s hands and they put their hands in their mouth, the amount ingested from residue is typically minimal and unlikely to cause harm if hands were allowed to dry first. However, if your baby accessed a bottle or pump of sanitizer and ingested the liquid directly, this is a medical emergency due to their small body weight.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are the most common age group for hand sanitizer ingestion. They can squeeze pump bottles, are attracted to fruity-scented varieties, and can access dispensers at child height in public places. Just 2-3 squirts from a pump bottle can contain enough alcohol to intoxicate a small child. Symptoms include drowsiness, stumbling, vomiting, and confusion.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children may be attracted to scented or colored hand sanitizers. Continue to supervise use and store bottles out of reach. Teach children that hand sanitizer is not for eating or drinking. If ingestion occurs, follow the same protocol: call Poison Control immediately.',
    },
  ],
  whenNormal: [
    'A small amount of hand sanitizer was applied to your baby\'s hands, it dried completely, and then your baby put hands in mouth — the dried residue contains minimal alcohol',
    'Your child briefly tasted hand sanitizer from their hands, made a face, and did not ingest any significant amount',
  ],
  whenToMention: [
    'Your baby or toddler licked a noticeable amount of hand sanitizer from their hands or a surface and you want to confirm it is safe',
    'You are unsure how much hand sanitizer your child may have ingested',
  ],
  whenToActNow: [
    'Your child ingested liquid hand sanitizer directly from a bottle, pump, or dispenser — call Poison Control (1-800-222-1222) immediately',
    'Your child is drowsy, vomiting, confused, stumbling, or unresponsive after exposure to hand sanitizer — call 911',
    'Your child ingested a methanol-based or wood alcohol hand sanitizer (some recalled products contain methanol, which is more toxic than ethanol)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hand Sanitizer Safety.',
      url: 'https://www.cdc.gov/clean-hands/about/hand-sanitizer.html',
    },
    {
      org: 'Poison Control',
      citation:
        'National Capital Poison Center. Hand Sanitizer: Too Much of a Good Thing?',
      url: 'https://www.poison.org/articles/hand-sanitizer',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Poison Prevention: Hand Sanitizer. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Poison-Prevention.aspx',
    },
  ],
};
