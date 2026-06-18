import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-diaphragmatic-hernia',
  title: 'My Baby Was Born with a Diaphragmatic Hernia (CDH)',
  category: 'medical',
  searchTerms: [
    'congenital diaphragmatic hernia CDH',
    'CDH baby prognosis',
    'CDH surgery baby',
    'CDH ECMO baby',
    'diaphragmatic hernia newborn',
    'CDH lung hypoplasia',
    'CDH prenatal diagnosis',
    'left sided CDH baby',
    'Bochdalek hernia baby',
    'CDH long term outcomes',
  ],
  quickAnswer:
    'Congenital diaphragmatic hernia (CDH) is a birth defect where there is a hole in the diaphragm (the muscle separating the chest from the abdomen), allowing abdominal organs to move into the chest and compress the developing lungs. CDH occurs in about 1 in 2,500 births. The severity depends largely on how much lung development was affected. CDH requires immediate intensive care after birth and surgical repair. While CDH is serious, survival rates have improved significantly with advances in neonatal care, and many CDH survivors thrive with appropriate long-term follow-up.',
  byAge: [
    {
      ageRange: 'Prenatal (if diagnosed before birth)',
      context:
        'Many CDH cases are diagnosed on prenatal ultrasound, allowing your medical team to plan for delivery at a center with a NICU and pediatric surgery. Prenatal indicators like lung-to-head ratio (LHR) and observed/expected LHR help predict severity. Delivery planning, discussing treatment options, and connecting with CDH family support organizations during pregnancy can help prepare you. Some severe cases may be offered fetal intervention (FETO procedure) at specialized centers.',
    },
    {
      ageRange: '0-1 month (NICU stabilization)',
      context:
        'After birth, your baby is stabilized with gentle ventilation. CDH babies are not given bag-mask ventilation (which can inflate the stomach and worsen lung compression). Once stable, surgical repair of the diaphragm is performed — the abdominal organs are moved back to the abdomen and the hole is closed, sometimes with a patch. Some babies need ECMO (extracorporeal membrane oxygenation) if their lungs cannot support adequate oxygen levels. The NICU stay can be weeks to months.',
    },
    {
      ageRange: '1-12 months (post-NICU)',
      context:
        'After discharge, CDH babies need close follow-up for respiratory health, feeding and growth (many have GERD and feeding difficulties), and development. Pulmonary hypertension may persist and require ongoing medication. Hearing should be tested, as CDH babies are at increased risk for hearing loss. Many CDH babies need supplemental calories, specialized feeding techniques, or feeding tubes initially. Physical and occupational therapy support developmental progress.',
    },
    {
      ageRange: '1 year+',
      context:
        'Many CDH survivors do well long-term. The underdeveloped lung continues to grow in early childhood, and respiratory function often improves. Ongoing concerns may include exercise intolerance, reactive airway disease, scoliosis (especially with patch repairs), and the possibility of hernia recurrence. Annual follow-up at a CDH-specialized clinic is recommended to monitor for these issues. Many CDH survivors lead active, healthy lives.',
    },
  ],
  whenNormal: [
    'Your baby had CDH repair and is recovering in the NICU with improving respiratory function',
    'Your baby is home and growing, even if feeds are challenging and progress feels slow',
    'Your child is thriving and the CDH is being monitored at annual follow-ups',
  ],
  whenToMention: [
    'Your baby is having increasing difficulty breathing or seems to be working harder to breathe',
    'Your baby is not gaining weight well or is having worsening feeding difficulties',
    'You notice your child tiring easily with physical activity',
    'Your child develops vomiting or abdominal pain that could indicate hernia recurrence',
  ],
  whenToActNow: [
    'Your baby is turning blue, breathing very rapidly, or in obvious respiratory distress — call 911',
    'Your baby has sudden severe vomiting with abdominal distension — this could indicate hernia recurrence or bowel obstruction. Seek emergency care',
    'Your baby stops breathing or has an apnea episode — call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'tracheoesophageal-fistula',
    'nicu-parent-trauma',
    'vulnerable-child-syndrome-post-nicu',
  ],
  sources: [
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. Congenital Diaphragmatic Hernia.',
      url: 'https://www.chop.edu/conditions-diseases/congenital-diaphragmatic-hernia',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Diaphragmatic Hernia. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK556105/',
    },
    {
      org: 'CDH International',
      citation:
        'CDH International. About Congenital Diaphragmatic Hernia.',
      url: 'https://cdhi.org/what-is-cdh/',
    },
  ],
};
