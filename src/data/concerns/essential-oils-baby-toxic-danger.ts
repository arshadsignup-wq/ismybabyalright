import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'essential-oils-baby-toxic-danger',
  title: 'Essential Oils and Babies: Toxic Dangers',
  category: 'medical',
  searchTerms: [
    'essential oils baby danger',
    'essential oils toxic baby',
    'are essential oils safe for babies',
    'eucalyptus oil baby',
    'tea tree oil baby safe',
    'peppermint oil baby dangerous',
    'essential oil diffuser baby room',
    'lavender oil baby safe',
    'essential oils infant poisoning',
    'essential oils baby skin',
    'camphor oil baby toxic',
  ],
  quickAnswer:
    'Most essential oils are not safe for use on or around babies and young children. Essential oils are highly concentrated plant compounds that can cause chemical burns on delicate skin, respiratory distress when inhaled, and serious toxicity if ingested. Eucalyptus, peppermint, and camphor oils are particularly dangerous for infants and can cause breathing problems. Even diffusing essential oils in a baby\'s room can trigger respiratory issues. If your baby has been exposed to essential oils and shows symptoms, contact Poison Control immediately.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Essential oils should not be used on, around, or near babies under 6 months. Their skin is extremely thin and absorbs substances rapidly, increasing the risk of chemical burns and systemic toxicity. Their immature respiratory system is vulnerable to oils that contain menthol (peppermint), 1,8-cineole (eucalyptus, rosemary), or camphor, which can cause slowed breathing or respiratory arrest in young infants. Diffusing essential oils in a baby\'s sleeping area is also not recommended, as it can irritate the airways and has no proven health benefits for infants.',
    },
    {
      ageRange: '6-24 months',
      context:
        'Even in older babies and toddlers, most essential oils should be avoided. If parents choose to use certain oils considered lower-risk (like properly diluted lavender or chamomile), they should be heavily diluted (0.5-1% concentration) and never applied near the face, mouth, nose, or hands (which babies put in their mouth). Many "child-safe" essential oil products marketed online have not been evaluated for safety in infants. Ingestion of even small amounts of certain essential oils (tea tree, wintergreen, camphor) can cause seizures, liver damage, or respiratory failure in small children.',
    },
    {
      ageRange: '2-5 years',
      context:
        'While older children can tolerate some appropriately diluted essential oils, many remain dangerous. Keep all essential oil bottles locked and out of reach, as ingestion of as little as 5-10 ml can be life-threatening in a small child. Wintergreen oil is particularly dangerous because it contains methyl salicylate (essentially concentrated aspirin) and can cause fatal poisoning. Do not use essential oils as a substitute for medical treatment. If your child has been exposed to essential oils and shows any symptoms, call Poison Control at 1-800-222-1222.',
    },
  ],
  whenNormal: [
    'You choose not to use essential oils around your baby, which is the safest approach.',
    'You use a very mild, heavily diluted lavender product on an older child (over 2 years) for a calming bath with no adverse reaction.',
    'You use essential oils for yourself but keep them stored safely out of children\'s reach and do not diffuse them in shared spaces.',
  ],
  whenToMention: [
    'You have been using essential oils around your baby and want safety guidance from your pediatrician.',
    'Your baby has mild skin irritation that may be related to essential oil exposure.',
    'You want evidence-based alternatives to essential oils for common baby issues like congestion or sleep.',
  ],
  whenToActNow: [
    'Your baby or child has ingested any amount of essential oil -- call Poison Control (1-800-222-1222) immediately.',
    'Your baby is having difficulty breathing, wheezing, or has developed respiratory distress after essential oil exposure.',
    'Your baby has chemical burns, severe skin redness, or blistering from direct essential oil contact.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['crunchy-parenting-baby-safety-risks', 'endocrine-disrupting-chemicals-baby-products', 'hives'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Essential Oils and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Essential-Oils-and-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Capital Poison Center. Essential Oils: Poisoning Information. Poison.org.',
      url: 'https://www.poison.org/articles/essential-oils',
    },
    {
      org: 'AAP',
      citation:
        'Woolf A. Essential Oil Poisoning. Clinical Toxicology, 1999.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/10584586/',
    },
  ],
};
