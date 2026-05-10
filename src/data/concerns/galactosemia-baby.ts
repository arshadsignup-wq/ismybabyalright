import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'galactosemia-baby',
  title: 'Galactosemia in Babies',
  category: 'medical',
  searchTerms: [
    'galactosemia baby',
    'baby can\'t digest milk sugar',
    'galactosemia newborn screening',
    'baby jaundice vomiting not gaining weight',
    'baby allergic to breast milk and formula',
    'galactosemia signs infant',
    'baby liver problems from milk',
    'classic galactosemia symptoms',
  ],
  quickAnswer:
    'Galactosemia is a rare inherited metabolic disorder where a baby cannot properly process galactose, a sugar found in breast milk and standard formulas. It affects about 1 in 30,000 to 60,000 newborns. Detected through newborn screening, galactosemia requires immediate dietary treatment — switching to a soy-based formula — to prevent serious liver damage, brain injury, and life-threatening illness.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Classic galactosemia presents within the first days to weeks of life when a baby begins feeding on breast milk or standard formula. Signs include poor feeding, vomiting, diarrhea, jaundice, lethargy, and failure to gain weight. Without treatment, galactose accumulates and causes liver failure, sepsis (often E. coli), cataracts, and brain damage. Newborn screening catches most cases before serious harm occurs. Treatment involves immediately switching to a soy-based or other galactose-free formula.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies on a galactose-restricted diet should be growing and developing well. Monitoring includes checking galactose-1-phosphate levels in the blood. Some babies may still develop cataracts early on despite treatment, so ophthalmologic evaluations are important. If your baby is on treatment and thriving, that is a very positive sign.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, parents must be vigilant about avoiding galactose-containing foods, particularly dairy products. A metabolic dietitian is essential for navigating this transition. Despite good dietary management, some children with classic galactosemia may show speech and language delays or motor difficulties, which are part of the condition and benefit from early intervention services.',
    },
    {
      ageRange: '12 months+',
      context:
        'Galactosemia requires lifelong dietary restriction of galactose. Even with excellent dietary control, some children may experience learning difficulties, speech delays, or motor challenges. Girls with classic galactosemia may develop premature ovarian insufficiency. Ongoing care with a metabolic team, developmental monitoring, and early intervention services can help optimize outcomes.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening was normal for galactosemia',
    'Your baby tolerates breast milk or standard formula without jaundice, vomiting, or lethargy',
    'Your baby is gaining weight well and meeting early milestones',
    'Your treated baby has galactose-1-phosphate levels in the acceptable range',
  ],
  whenToMention: [
    'Your baby\'s newborn screening showed an abnormal result related to galactosemia — follow up immediately for confirmatory testing',
    'Your newborn is feeding poorly with persistent vomiting, jaundice, and lethargy that began after starting milk feeds',
    'Your baby on galactosemia treatment is showing speech or motor delays',
  ],
  whenToActNow: [
    'Your newborn is severely jaundiced, not feeding, lethargic, or showing signs of liver failure (bleeding, abdominal swelling) — this is a medical emergency',
    'Your newborn screening indicates galactosemia and your baby is still receiving breast milk or regular formula — switch to soy formula and contact your medical team immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Galactosemia. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/galactosemia/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Galactosemia — Symptoms and Causes. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/diseases-conditions/galactosemia/symptoms-causes/syc-20536238',
    },
  ],
};
