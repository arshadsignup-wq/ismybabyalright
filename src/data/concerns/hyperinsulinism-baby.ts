import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hyperinsulinism-baby',
  title: 'Congenital Hyperinsulinism - Persistent Low Blood Sugar in My Baby',
  category: 'medical',
  searchTerms: [
    'congenital hyperinsulinism baby',
    'baby low blood sugar keeps happening',
    'persistent hypoglycemia newborn',
    'baby seizures low blood sugar',
    'hyperinsulinism infant',
    'baby blood sugar won\'t stay up',
    'neonatal hypoglycemia persistent',
    'baby jittery low glucose',
    'baby too much insulin',
    'nesidioblastosis baby',
  ],
  quickAnswer:
    'Congenital hyperinsulinism (CHI) is the most common cause of persistent and severe low blood sugar (hypoglycemia) in newborns and infants. The pancreas produces too much insulin, causing blood sugar to drop dangerously low. Signs include jitteriness, seizures, poor feeding, lethargy, and episodes of limpness or unresponsiveness. CHI requires urgent diagnosis and treatment because prolonged low blood sugar can cause permanent brain damage. Treatment may include medications (diazoxide, octreotide) or surgery depending on the type.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Many babies have transiently low blood sugar in the first 24-48 hours of life, especially if they are large for gestational age, born to mothers with diabetes, premature, or stressed during delivery. This transient hypoglycemia usually resolves with feeding. However, if blood sugar remains persistently low despite feeding, requires IV glucose to maintain normal levels, or is very low (below 40 mg/dL), congenital hyperinsulinism should be considered. A critical sample (blood drawn during a low blood sugar episode) measuring insulin, cortisol, growth hormone, and free fatty acids helps establish the diagnosis.',
    },
    {
      ageRange: '2 days - 3 months',
      context:
        'CHI typically presents within the first few days to weeks of life. Affected babies may have seizures, episodes of limpness or unresponsiveness, excessive sleepiness, poor feeding, or jitteriness. They often require high glucose infusion rates (greater than 8 mg/kg/min) through an IV to maintain normal blood sugar. Babies may be large for gestational age at birth due to the growth-promoting effects of excess insulin in utero. Diagnosis is confirmed by demonstrating inappropriately elevated insulin levels during hypoglycemia. Genetic testing can identify the specific mutation and guide treatment.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Some milder forms of CHI may not present until the baby starts going longer between feedings or during illnesses when food intake decreases. Parents may notice the baby is unusually sleepy, irritable, or has episodes of staring or trembling. Focal forms of CHI (where only part of the pancreas is affected) can be identified with a specialized PET scan and may be cured with surgery. Diffuse forms (the entire pancreas is affected) are typically managed with medications first, and surgery is considered if medications fail.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Some children with milder forms of CHI may not be diagnosed until toddlerhood, particularly if they present with seizures or developmental delays from unrecognized hypoglycemia. In children on treatment, careful management during illness is essential because fasting or vomiting can precipitate dangerous hypoglycemia. Some children with CHI may eventually outgrow their hypoglycemia as the pancreas matures, particularly those with certain genetic mutations. Long-term monitoring of neurodevelopment is important.',
    },
  ],
  whenNormal: [
    'Mild blood sugar dips in the first 24-48 hours of life that respond to feeding and resolve by day 2-3',
    'Blood sugar levels that remain above 50 mg/dL after the first 48 hours with normal feeding',
    'A single low blood sugar reading in an otherwise well newborn that normalizes and does not recur',
    'Brief jitteriness in a newborn that resolves with feeding and does not recur',
  ],
  whenToMention: [
    'Your baby seems unusually sleepy, difficult to arouse for feeds, or has trembling or jitteriness that recurs',
    'Your baby has had more than one episode of low blood sugar that required intervention',
    'Your baby is large for gestational age and seems to have difficulty maintaining blood sugar between feeds',
  ],
  whenToActNow: [
    'Your baby has a seizure, becomes limp and unresponsive, or is impossible to wake up, as these may be signs of dangerously low blood sugar requiring emergency care',
    'Your baby in the hospital requires increasingly high amounts of IV glucose to maintain normal blood sugar, suggesting congenital hyperinsulinism that needs specialist evaluation',
    'Your child with known CHI becomes ill with vomiting or refuses to eat, which can precipitate life-threatening hypoglycemia requiring emergency management',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['type-1-diabetes-toddler-signs', 'congenital-hypothyroidism', 'congenital-adrenal-hyperplasia', 'growth-hormone-deficiency-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Thornton PS, Stanley CA, De Leon DD, et al. Recommendations from the Pediatric Endocrine Society for Evaluation and Management of Persistent Hypoglycemia in Neonates, Infants, and Children. Journal of Pediatrics. 2015;167(2):238-245.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25957977/',
    },
    {
      org: 'NIH',
      citation:
        'National Organization for Rare Disorders (NORD). Congenital Hyperinsulinism.',
      url: 'https://rarediseases.org/rare-diseases/congenital-hyperinsulinism/',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation:
        'Children\'s Hospital of Philadelphia. Congenital Hyperinsulinism Center. Diagnosis and Treatment of Congenital Hyperinsulinism.',
      url: 'https://www.chop.edu/centers-programs/congenital-hyperinsulinism-center',
    },
  ],
};
