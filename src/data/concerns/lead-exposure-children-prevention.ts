import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lead-exposure-children-prevention',
  title: 'Lead Exposure in Children - Prevention and What to Know',
  category: 'medical',
  searchTerms: [
    'lead exposure baby',
    'lead poisoning children',
    'lead paint old house baby',
    'lead in water baby',
    'lead testing children when',
    'blood lead level baby',
    'lead poisoning symptoms baby',
    'lead safe home for baby',
    'lead in baby food',
    'preventing lead exposure infant',
    'lead screening children',
  ],
  quickAnswer:
    'There is no safe level of lead exposure for children. Even low blood lead levels can cause irreversible harm to brain development, behavior, and learning. The CDC reference value for blood lead is 3.5 micrograms per deciliter, and children under 6 are most vulnerable because their developing brains absorb lead more readily and they frequently put hands and objects in their mouths. The most common sources of lead exposure are lead-based paint in homes built before 1978, contaminated water from lead pipes, certain imported products, and some baby foods. Blood lead testing is recommended at ages 1 and 2, or earlier if risk factors are present.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before babies are mobile, lead exposure risk is lower but not zero. Lead can be transmitted through breast milk if the mother has significant lead exposure, through contaminated water used to make formula, or through lead dust on surfaces. If you live in a home built before 1978, have lead pipes, or have concerns about your water supply, request lead testing for your water and consider using a certified lead-removing water filter for formula preparation. The EPA action level for lead in water is 15 parts per billion, but any detectable amount should be addressed for infants.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is the highest-risk period for lead exposure because babies are crawling, exploring, and putting everything in their mouths. Lead paint dust and chips from deteriorating paint in older homes are the primary source. If you live in a pre-1978 home, test for lead paint and ensure any peeling or chipping paint is professionally remediated. Wet-mop floors regularly, wash baby\'s hands and toys frequently, and keep children away from renovation areas. The CDC recommends blood lead level screening at 12 months, or earlier if risk factors are identified.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers continue to be at high risk due to hand-to-mouth behavior and increasing mobility. Sources of lead beyond paint include imported pottery, cosmetics, spices, toys, and contaminated soil. A 2021 congressional report found detectable lead levels in many commercially available baby foods. A diet rich in calcium, iron, and vitamin C can reduce lead absorption. If your child\'s blood lead level is 3.5 micrograms per deciliter or higher, your pediatrician will recommend environmental investigation and follow-up testing. Levels above 45 micrograms per deciliter require chelation therapy.',
    },
  ],
  whenNormal: [
    'Your child has been tested and their blood lead level is below the CDC reference value of 3.5 micrograms per deciliter.',
    'You live in a home built after 1978 with no known lead hazards and your water has been tested.',
    'You are providing a diet rich in iron, calcium, and vitamin C, which helps reduce lead absorption.',
  ],
  whenToMention: [
    'You live in a home built before 1978 and have not tested for lead paint or have visible peeling paint.',
    'Your water has not been tested for lead, especially if you have older plumbing.',
    'Your child has risk factors for lead exposure (living near industrial areas, family member works with lead, imported cosmetics or spices used in the home).',
    'You want to schedule routine blood lead screening for your 1-2 year old.',
  ],
  whenToActNow: [
    'Your child has a blood lead level of 5 micrograms per deciliter or higher and needs a confirmed venous blood test and environmental investigation.',
    'Your child has symptoms of severe lead poisoning: vomiting, seizures, lethargy, severe abdominal pain, or behavioral changes.',
    'You discover your child has been eating paint chips, chewing on painted surfaces, or been exposed to a known lead source.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'pfas-baby-products-stroller-car-seat',
    'infant-formula-safety-contamination-concerns',
    'low-income-baby-nutrition-wic-assistance',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC. Childhood Lead Poisoning Prevention Program.',
      url: 'https://www.cdc.gov/nceh/lead/prevention/default.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics Council on Environmental Health. Prevention of Childhood Lead Toxicity. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/1/e20161493/52600/Prevention-of-Childhood-Lead-Toxicity',
    },
    {
      org: 'EPA',
      citation:
        'EPA. Protect Your Family from Lead in Your Home.',
      url: 'https://www.epa.gov/lead/protect-your-family-sources-lead',
    },
  ],
};
