import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'meconium-ileus',
  title: 'Meconium Ileus',
  category: 'digestive',
  searchTerms: [
    'meconium ileus',
    'meconium ileus newborn',
    'newborn bowel obstruction',
    'baby belly distended no poop',
    'cystic fibrosis meconium',
    'newborn intestinal blockage',
    'thick meconium stuck',
    'baby vomiting green no stool',
    'newborn abdominal distension',
  ],
  quickAnswer:
    'Meconium ileus is a type of neonatal bowel obstruction caused by abnormally thick, sticky meconium that blocks the ileum (last part of the small intestine). It is the earliest manifestation of cystic fibrosis (CF), occurring in about 15-20% of newborns with CF. It requires immediate medical evaluation and treatment, which may be non-surgical (contrast enema) or surgical depending on severity and complications.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'Meconium ileus typically presents within the first day of life with signs of intestinal obstruction: abdominal distension, failure to pass meconium, and bilious (green) vomiting. The abdomen may appear visibly swollen and feel doughy. Sometimes, thickened loops of intestine can be felt or seen through the thin abdominal wall. Prenatal ultrasound may have shown dilated bowel or a hyperechoic (bright) mass, raising suspicion before birth. An abdominal X-ray will show dilated loops of bowel and may show a characteristic "soap bubble" or "ground glass" appearance in the right lower abdomen.',
    },
    {
      ageRange: '1-3 days',
      context:
        'Diagnosis is typically confirmed through imaging studies. A contrast enema using water-soluble contrast (Gastrografin) can be both diagnostic and therapeutic, as the hyperosmolar contrast can help loosen and evacuate the thick meconium plug. This succeeds in approximately 50% of uncomplicated cases. If the contrast enema does not relieve the obstruction, or if there are complications such as volvulus (twisting of the bowel), atresia (absence of part of the bowel), or perforation, surgery is required. The surgical team will also test for cystic fibrosis, as it is the underlying cause in the majority of cases.',
    },
    {
      ageRange: '3-14 days',
      context:
        'After successful treatment (either by contrast enema or surgery), the baby will remain in the hospital for recovery. Feeding is gradually introduced once bowel function resumes (indicated by passing stool and tolerating feeds without vomiting). Genetic testing for cystic fibrosis (sweat chloride test and/or genetic analysis) will be performed. If CF is confirmed, the baby will be started on pancreatic enzyme replacement therapy to aid digestion and connected with a CF care team. Recovery from uncomplicated cases is generally good.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'If cystic fibrosis has been confirmed, ongoing management includes pancreatic enzyme replacement with feeds, monitoring of growth and nutrition, and connection with a specialized CF center. Babies who had surgical treatment will need follow-up to ensure the bowel is functioning normally and there are no complications such as adhesions or strictures. Even if the immediate obstruction is resolved, close developmental and nutritional monitoring is important. With modern CF treatment, outcomes have improved significantly.',
    },
  ],
  whenNormal: [
    'The meconium ileus was treated successfully and the baby is now passing stool and feeding well',
    'Genetic testing has been completed and results have been reviewed with your medical team',
    'The baby is growing well on pancreatic enzyme replacement therapy (if CF was confirmed)',
    'Follow-up imaging or examinations show the bowel is functioning normally after treatment',
  ],
  whenToMention: [
    'Your baby had meconium ileus and you notice any changes in stool patterns, feeding, or growth',
    'You have questions about cystic fibrosis diagnosis, management, or genetic counseling',
    'Your baby seems to have difficulty with feeds or is not gaining weight as expected after treatment',
  ],
  whenToActNow: [
    'Your newborn has a distended abdomen, is not passing stool, and is vomiting (especially green/bilious vomit), as these are signs of bowel obstruction requiring emergency evaluation',
    'Your baby who previously had meconium ileus develops new vomiting, abdominal distension, or stops passing stool, as this could indicate a new obstruction or complication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Meconium Ileus. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001580.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cystic Fibrosis Clinical Care Guidelines. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/146/6/e20201487/33399/Cystic-Fibrosis-Newborn-Screening',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Cystic Fibrosis. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/diseases-conditions/cystic-fibrosis/symptoms-causes/syc-20353700',
    },
  ],
};
