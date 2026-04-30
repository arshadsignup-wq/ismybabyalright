import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lead-exposure-baby',
  title: 'Lead Exposure Concerns in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby lead exposure', 'toddler lead poisoning', 'lead paint baby', 'baby lead test', 'lead in water baby', 'toddler elevated lead level', 'baby ate paint chips', 'lead screening baby', 'lead poisoning symptoms baby', 'baby lead blood test'],
  quickAnswer: 'Lead is a toxic metal that can cause serious developmental problems in children, even at low levels. There is no safe level of lead in a child\'s blood. Children under 3 are most vulnerable because they put everything in their mouths and their developing brains are especially sensitive to lead\'s effects. The most common sources are lead paint in homes built before 1978, contaminated soil, lead in water from old pipes, and imported toys or pottery. The AAP recommends lead screening blood tests at ages 1 and 2 years. Lead exposure is preventable.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies can be exposed to lead through contaminated dust in older homes (which they ingest through normal hand-to-mouth behavior), formula mixed with lead-contaminated water, breast milk (if the mother has lead exposure), and imported or antique items. If you live in a home built before 1978, ensure paint is intact (not chipping or peeling), wet-mop regularly to reduce dust, and have your water tested. Your pediatrician may recommend a lead screening test before age 1 if your home has risk factors.' },
    { ageRange: '1-3 years', context: 'Toddlers are at the highest risk for lead exposure because they explore by putting things in their mouths, spend time on the floor where lead dust settles, and may eat paint chips from windowsills or walls. The AAP recommends a blood lead test at ages 1 and 2. Most children with elevated lead levels have no obvious symptoms - testing is the only way to know. At higher levels, lead can cause developmental delays, learning difficulties, irritability, loss of appetite, weight loss, and abdominal pain. If your child has an elevated lead level, your pediatrician will guide treatment and recommend steps to reduce exposure.' },
  ],
  whenNormal: ['A blood lead level below 3.5 mcg/dL (current CDC reference value) at screening', 'No known lead exposure risk factors and a normal screening test'],
  whenToMention: ['You live in a home built before 1978 and want your child tested', 'You notice chipping or peeling paint in your home', 'Your child has been mouthing non-food items that may contain lead', 'You want to discuss lead screening timing for your child'],
  whenToActNow: ['Your child ate paint chips from an older home', 'A blood lead level at or above 3.5 mcg/dL (follow your pediatrician\'s guidance for follow-up)', 'Your child is showing possible symptoms of lead poisoning: developmental regression, severe irritability, abdominal pain, vomiting, constipation, or loss of appetite', 'A blood lead level above 45 mcg/dL is a medical emergency requiring immediate chelation therapy'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swallowed-something-dangerous', 'developmental-delay', 'picky-eating'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lead Exposure. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Lead-Poisoning.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Childhood Lead Poisoning Prevention.', url: 'https://www.cdc.gov/lead-prevention/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Prevention of Childhood Lead Toxicity. Pediatrics.', url: 'https://publications.aap.org/pediatrics/' },
  ],
};
