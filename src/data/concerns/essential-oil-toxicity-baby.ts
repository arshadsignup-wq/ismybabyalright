import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'essential-oil-toxicity-baby',
  title: 'Essential Oil Safety and Toxicity for Babies',
  category: 'medical',
  searchTerms: [
    'essential oils safe for babies',
    'eucalyptus oil baby dangerous',
    'peppermint oil baby breathing',
    'essential oil diffuser baby nursery',
    'tea tree oil baby toxic',
    'baby ingested essential oil',
    'essential oil burn baby skin',
    'aromatherapy safe for infants',
    'essential oil poisoning baby',
    'camphor oil baby danger',
  ],
  quickAnswer:
    'Many essential oils are dangerous for babies and young children. Eucalyptus and peppermint oils can slow breathing in infants. Ingestion of even small amounts can cause seizures, liver damage, and respiratory failure. Undiluted oils on skin can cause chemical burns. Diffusing essential oils in a nursery is not recommended for babies under 6 months, and many oils should be avoided until age 2 or older.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies are extremely sensitive to essential oils. Their skin is thin and absorbs chemicals more rapidly, their airways are narrow and easily irritated, and their livers cannot metabolize these compounds efficiently. Do not diffuse essential oils in a room where a baby under 6 months sleeps. Do not apply any essential oils to a young baby\'s skin, even diluted. Eucalyptus, peppermint, and camphor can cause respiratory depression.',
    },
    {
      ageRange: '6-24 months',
      context:
        'Older babies and toddlers are at risk for accidental ingestion as they grab and mouth small bottles. Even 2-3 mL of certain essential oils can be life-threatening for a toddler. If diffusing, use in a well-ventilated room for short periods and choose only oils considered safer for this age group (lavender in very diluted form). Never apply undiluted oils to skin. Keep all bottles locked away.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Some essential oils become safer at this age when properly diluted and used topically (0.5-1% dilution). However, eucalyptus and peppermint remain unsafe for children under 6 and 10 years respectively according to safety guidelines. Ingestion remains a serious poisoning risk. Never refer to essential oils as "medicine" to children.',
    },
  ],
  whenNormal: [
    'You briefly diffused lavender oil in a well-ventilated room while your older baby was awake and they showed no symptoms',
    'A tiny amount of diluted (carrier oil) lavender touched your toddler\'s foot and there is no skin reaction',
  ],
  whenToMention: [
    'Your baby was exposed to a diffuser running essential oils and developed a cough, watery eyes, or nasal irritation',
    'You applied a product containing essential oils to your baby\'s skin and notice redness or irritation',
    'You want guidance on which products are safe to use around your baby',
  ],
  whenToActNow: [
    'Your baby or toddler ingested any amount of essential oil — call Poison Control (1-800-222-1222) immediately and go to the ER if the child shows drowsiness, breathing difficulty, vomiting, or seizures',
    'Your baby has difficulty breathing, is wheezing, or has slowed breathing after exposure to essential oils (especially eucalyptus, peppermint, or camphor)',
    'Undiluted essential oil was applied to your baby\'s skin and there is a chemical burn, blistering, or significant redness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Essential Oils and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/essential-oils-and-children.aspx',
    },
    {
      org: 'Poison Control',
      citation:
        'National Capital Poison Center. Are Essential Oils Safe?',
      url: 'https://www.poison.org/articles/are-essential-oils-safe-2017',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pediatric Exposures to Essential Oils. Clinical Toxicology, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35722804/',
    },
  ],
};
