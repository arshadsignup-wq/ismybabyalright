import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'diaper-crystals',
  title: 'Diaper Crystals (Urate Crystals) in Babies',
  bodySystem: 'genitourinary',
  description: 'Pink, orange, or brick-red staining in a baby\'s diaper is most commonly caused by urate crystals — a normal byproduct of uric acid concentration in newborn urine. These are sometimes called "brick dust" and are very common in the first week of life before breastfeeding is fully established. While usually harmless, persistent urate crystals beyond the first week may indicate the baby is not getting enough milk and becoming dehydrated.',
  possibleCauses: [
    { cause: 'Normal urate crystal excretion in newborns (first 3-5 days)', likelihood: 'common' },
    { cause: 'Concentrated urine from early breastfeeding establishment period', likelihood: 'common' },
    { cause: 'Mild dehydration or inadequate milk intake', likelihood: 'common' },
    { cause: 'Significant dehydration from feeding difficulties', likelihood: 'uncommon' },
    { cause: 'Blood in urine (if truly red rather than orange/pink)', likelihood: 'uncommon' },
    { cause: 'Super-absorbent diaper gel beads (mistaken for crystals)', likelihood: 'common' },
    { cause: 'Vaginal discharge with blood in newborn girls (pseudomenses)', likelihood: 'common' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Urate crystals (pink/orange/brick-red staining) are very common in the first 3-5 days of life, especially in breastfed babies before milk fully comes in (day 3-5). They are most common on days 2-3. They should resolve once feeding is well-established and baby is producing 6+ wet diapers/day.', whenToWorry: 'Urate crystals persisting beyond day 5-7 (suggests inadequate milk intake). Crystals with poor feeding, excessive weight loss, or fewer than expected wet diapers. True red blood (not orange/pink). Baby appearing jaundiced, lethargic, or not waking to feed. Urate crystals returning after initially resolving.' },
    { ageRange: '2-6 months', normalVariation: 'Urate crystals are NOT expected at this age if feeding is well-established. Baby should be having 6+ pale wet diapers daily.', whenToWorry: 'Any urate crystal appearance at this age suggests dehydration or inadequate fluid intake. Pink/orange staining that is not from food. Reduced number of wet diapers. Signs of dehydration with concentrated urine.' },
    { ageRange: '6-12 months', normalVariation: 'Not expected at this age with adequate hydration.', whenToWorry: 'Orange/pink staining in diaper (dehydration during illness). Reduced wet diapers with dark or concentrated urine. Any blood in urine (distinguish from food dyes after starting solids).' },
    { ageRange: '1-3 years', normalVariation: 'Not expected at this age. Any orange/pink staining is likely from food.', whenToWorry: 'True concentrated orange urine with reduced output (dehydration). Persistent crystal-like deposits in urine (kidney stone risk if older child). Blood in urine vs food coloring (beets).' },
  ],
  urgencyLevels: {
    emergency: [
      'Urate crystals with newborn who is lethargic, will not wake to feed, or has lost more than 10% birth weight',
      'Suspected blood (not crystals) with fever in young infant',
      'Signs of severe dehydration: sunken fontanelle, no tears, dry mouth, unresponsive',
    ],
    urgent: [
      'Urate crystals persisting beyond day 5-7 with poor feeding or excessive weight loss',
      'Urate crystals with fewer than 3 wet diapers per day after day 4',
      'Crystals with jaundice deepening or spreading',
      'Reappearance of urate crystals after previously resolving (feeding deterioration)',
    ],
    sameDay: [
      'Urate crystals on day 4-5 with uncertain feeding adequacy',
      'Parent unsure if diaper staining is crystals or blood',
      'Urate crystals with baby not back to birth weight by day 10-14',
    ],
    monitor: [
      'Urate crystals on days 1-3 with baby feeding well and gaining weight normally',
      'Single episode of urate crystals with subsequent clear/pale diapers',
      'Known gel beads from diaper (not urate crystals)',
      'Mild urate crystals resolving as breast milk comes in (day 3-5)',
    ],
  },
  homeRemedies: [
    'Feed more frequently: offer breast or bottle every 2-3 hours (at least 8-12 feeds per 24 hours for newborns)',
    'Ensure effective latch and milk transfer if breastfeeding — seek lactation support if needed',
    'Track wet and dirty diapers: aim for at least 1 wet per day of life (day 1=1, day 2=2...) then 6+ by day 5',
    'Weigh baby regularly in first week — excessive weight loss (>7-10%) needs evaluation',
    'Know the difference: urate crystals are ORANGE/PINK/BRICK colored; blood is RED',
    'Super-absorbent gel beads from diaper can look like crystals — they are clear/white and swell with water',
    'If breastfeeding: hand express after feeds if baby seems unsatisfied, consider supplementing if advised by healthcare provider',
    'Urate crystals on day 1-2 alone are usually not concerning — monitor feeding and subsequent diapers',
    'Contact your midwife, health visitor, or pediatrician if crystals persist beyond day 4-5',
  ],
  relatedSymptomSlugs: ['dark-urine', 'blood-in-urine', 'strong-smelling-urine'],
  relatedIllnessSlugs: ['dehydration', 'breastfeeding-difficulties', 'newborn-jaundice'],
  relatedConcernSlugs: ['newborn-orange-diaper', 'baby-not-enough-wet-diapers', 'breastfeeding-adequate-intake'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics. 2012;129(3).', url: 'https://publications.aap.org/pediatrics/article/129/3/e827/31785' },
    { org: 'NHS', citation: 'NHS. Breastfeeding: is my baby getting enough milk?', url: 'https://www.nhs.uk/conditions/baby/breastfeeding-and-bottle-feeding/breastfeeding/your-babys-weight/' },
    { org: 'NIH', citation: 'National Library of Medicine. Uric Acid Crystals and Breastfeeding Adequacy.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6567786/' },
  ],
};
