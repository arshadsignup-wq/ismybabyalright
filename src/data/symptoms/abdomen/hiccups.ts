import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'hiccups',
  title: 'Hiccups in Babies',
  bodySystem: 'abdomen',
  description: 'Hiccups are involuntary contractions (spasms) of the diaphragm followed by sudden closure of the vocal cords, producing the characteristic "hic" sound. Hiccups are extremely common in newborns and young infants — many babies hiccup multiple times a day, and hiccups are even observed in utero. They are almost always harmless and self-limiting, typically lasting a few minutes to 20 minutes. Hiccups do not cause babies pain or distress (though parents are often more bothered than the baby). They become less frequent as babies grow and their nervous system matures.',
  possibleCauses: [
    { cause: 'Normal diaphragmatic irritation from feeding (full stomach)', likelihood: 'common' },
    { cause: 'Swallowed air during feeding', likelihood: 'common' },
    { cause: 'Immature nervous system (normal in newborns)', likelihood: 'common' },
    { cause: 'Sudden temperature changes', likelihood: 'common' },
    { cause: 'Overfeeding or eating too quickly', likelihood: 'uncommon' },
    { cause: 'Gastroesophageal reflux irritating the diaphragm', likelihood: 'uncommon' },
    { cause: 'Persistent/intractable hiccups from CNS or metabolic causes', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Newborns hiccup very frequently — several times a day is completely normal. Hiccups during and after feeds are expected. Many newborns hiccup in their sleep without waking.', whenToWorry: 'Hiccups lasting more than 48 hours continuously (extremely rare in infants). Hiccups interfering with feeding or breathing (baby turns blue or chokes during hiccups). Hiccups associated with significant reflux causing distress and weight loss.' },
    { ageRange: '3-6 months', normalVariation: 'Hiccups become less frequent but still occur regularly after feeds. Baby is not distressed by hiccups.', whenToWorry: 'Hiccups that consistently cause vomiting. Hiccups that are increasing in frequency rather than decreasing with age.' },
    { ageRange: '6-12 months', normalVariation: 'Hiccups continue to decrease in frequency. Occasional bouts after meals or excitement are normal.', whenToWorry: 'Persistent hiccups (lasting hours) are unusual at this age and may warrant evaluation.' },
    { ageRange: '1-3 years', normalVariation: 'Occasional hiccups are normal, similar to adults. Triggered by eating fast, carbonated drinks (for older toddlers), or excitement.', whenToWorry: 'Intractable hiccups lasting more than 48 hours (very rare in children — may indicate underlying neurological or GI cause).' },
  ],
  urgencyLevels: {
    emergency: [
      'Hiccups causing significant breathing difficulty or cyanosis (extremely rare)',
      'Hiccups in context of altered consciousness or seizure-like activity',
    ],
    urgent: [
      'Persistent hiccups lasting more than 48 hours continuously',
      'Hiccups preventing all feeding with signs of dehydration',
    ],
    sameDay: [
      'Frequent hiccup episodes associated with significant reflux symptoms needing treatment',
      'Hiccups lasting many hours causing parental concern',
    ],
    monitor: [
      'Normal newborn hiccups lasting minutes to 20 minutes — no treatment needed',
      'Hiccups after feeds that resolve on their own',
      'Occasional hiccup bouts in a well, thriving baby',
    ],
  },
  homeRemedies: [
    'Most hiccups resolve on their own within 5-20 minutes — waiting is appropriate',
    'Burp baby mid-feed and after feeding to reduce air in stomach',
    'Feed smaller amounts more frequently if hiccups consistently follow large feeds',
    'Allow baby to suck on pacifier — non-nutritive sucking may help relax the diaphragm',
    'Ensure proper latch (breast) or nipple flow rate (bottle) to reduce air swallowing',
    'Gently rubbing baby\'s back or changing position may help',
    'Feeding baby in a more upright position can reduce post-feed hiccups',
    'Do NOT try adult hiccup cures on babies (startling, breath-holding, sugar under tongue for babies under 12 months)',
    'Do NOT restrict feeding because of hiccups — baby can safely nurse or bottle-feed during hiccups',
    'If hiccups start during a feed, pause and burp before continuing',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['spit-up', 'gas-bloating', 'vomiting'],
  relatedIllnessSlugs: ['reflux', 'gerd'],
  relatedConcernSlugs: ['newborn-hiccups', 'baby-hiccups-after-feeding', 'baby-hiccups-a-lot'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hiccups. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/default.aspx' },
    { org: 'NIH', citation: 'Whitehead K, et al. Event-related potentials following contraction of respiratory muscles in pre-term and full-term infants. Clinical Neurophysiology. 2019;130(12):2216-2221.', url: 'https://pubmed.ncbi.nlm.nih.gov/31706789/' },
    { org: 'AAP', citation: 'Kahrilas PJ, Shi G. Why do newborns hiccup? Journal of Pediatrics. 1997.', url: 'https://pubmed.ncbi.nlm.nih.gov/9003845/' },
  ],
};
