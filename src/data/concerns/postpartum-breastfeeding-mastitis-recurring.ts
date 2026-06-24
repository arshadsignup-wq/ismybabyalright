import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-breastfeeding-mastitis-recurring',
  title: 'Recurring Mastitis During Breastfeeding',
  category: 'maternal',
  searchTerms: [
    'recurring mastitis breastfeeding',
    'mastitis keeps coming back',
    'breast infection breastfeeding',
    'mastitis treatment antibiotics',
    'mastitis symptoms breastfeeding',
    'breast abscess breastfeeding',
    'plugged duct vs mastitis',
    'mastitis without fever',
    'chronic mastitis breastfeeding',
    'mastitis prevention tips',
    'inflammatory mastitis',
  ],
  quickAnswer:
    'Mastitis, an inflammation of the breast that can become infected, affects approximately 10-20% of breastfeeding women, and recurrence is common (about 30% of women who get mastitis will get it again). Recent evidence has shifted understanding of mastitis: the 2022 Academy of Breastfeeding Medicine (ABM) protocol now emphasizes that aggressive pumping, deep massage, and some traditional advice may actually worsen mastitis by increasing inflammation. Current recommended management focuses on gentle breast drainage, anti-inflammatory treatment (ibuprofen), and antibiotics only when bacterial infection is confirmed. Recurring mastitis may be caused by underlying issues including poor latch, tongue tie, or mammary dysbiosis.',
  byAge: [
    {
      ageRange: 'Baby 0-6 weeks',
      context:
        'Mastitis is most common in the first 6 weeks of breastfeeding when milk supply is being established and latch may not be optimized. Symptoms include breast pain, warmth, redness, and flu-like symptoms (fever, chills, body aches). Updated guidance recommends: continue breastfeeding (milk from the affected breast is safe for baby), use ibuprofen for pain and inflammation, apply cold compresses after feeding, and avoid deep massage or aggressive pumping, which can worsen tissue inflammation. If symptoms do not improve within 24-48 hours or worsen, antibiotics may be needed. A lactation consultant can evaluate the latch, as a poor latch is a leading cause of recurrent mastitis.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months',
      context:
        'Recurring mastitis during this period often has an identifiable cause: persistent poor latch, baby\'s tongue tie, nipple damage providing an entry point for bacteria, tight bras or clothing, skipped feedings, or oversupply. The newer understanding of mastitis includes "mammary dysbiosis" (imbalance of breast bacteria) as a cause of recurrent episodes. Probiotics containing Ligilactobacillus salivarius have shown some promise in reducing mastitis recurrence. If you are experiencing your third or more episode, request evaluation for underlying causes rather than just treating each episode with antibiotics, as repeated antibiotic courses can themselves worsen the bacterial balance.',
    },
    {
      ageRange: 'Baby 6-12 months and beyond',
      context:
        'Mastitis later in the breastfeeding journey may be triggered by changes in feeding patterns: the baby sleeping longer stretches, starting solids and nursing less, or beginning to wean. Gradual changes in feeding frequency are less likely to cause mastitis than sudden changes. If you are weaning, do so gradually over weeks. Breast abscess (a collection of pus) is a complication of untreated or inadequately treated mastitis and may require drainage. Inflammatory breast cancer can mimic mastitis, so any breast inflammation that does not respond to treatment within a week should be evaluated with imaging.',
    },
  ],
  whenNormal: [
    'You had one episode of mastitis that resolved with conservative treatment (rest, ibuprofen, continued breastfeeding) within a few days.',
    'You occasionally have engorgement or mild plugged ducts that resolve with gentle nursing and do not progress to infection.',
    'You recovered from mastitis with a short course of antibiotics and have not had a recurrence.',
  ],
  whenToMention: [
    'You have had two or more episodes of mastitis and want to identify and address the underlying cause.',
    'You have persistent breast pain, redness, or a lump that is not resolving with standard treatment.',
    'You want a lactation consultation to evaluate your baby\'s latch and rule out tongue tie.',
    'You are considering whether probiotics or other preventive measures might help.',
  ],
  whenToActNow: [
    'You have a high fever (over 101 degrees F), severe breast pain, and worsening redness that is not improving after 24-48 hours of conservative care - you may need antibiotics.',
    'You have a fluctuant (soft, compressible) breast lump with fever, which may indicate an abscess requiring drainage.',
    'You have breast inflammation that is not responding to antibiotics and treatment, which warrants imaging to rule out inflammatory breast cancer.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nipple-confusion-bottle-breast',
    'refusing-breast',
    'postpartum-body-recovery-timeline',
  ],
  sources: [
    {
      org: 'ABM',
      citation:
        'Academy of Breastfeeding Medicine. Clinical Protocol #36: The Mastitis Spectrum, Revised 2022.',
      url: 'https://www.bfmed.org/protocols',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Mastitis: Causes and Management, 2000.',
      url: 'https://www.who.int/publications/i/item/WHO-FCH-CAH-00.13',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Lactational Mastitis: Review. BMC Family Practice, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32571260/',
    },
  ],
};
