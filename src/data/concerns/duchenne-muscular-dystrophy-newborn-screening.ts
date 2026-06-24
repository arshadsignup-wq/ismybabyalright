import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'duchenne-muscular-dystrophy-newborn-screening',
  title: 'Duchenne Muscular Dystrophy: Newborn Screening and Early Detection',
  category: 'medical',
  searchTerms: [
    'duchenne muscular dystrophy baby',
    'DMD newborn screening',
    'muscular dystrophy early signs',
    'baby muscle weakness progressive',
    'duchenne screening newborn',
    'baby not walking DMD',
    'elevated CK baby',
    'muscular dystrophy screening test',
    'duchenne symptoms toddler',
    'gower sign toddler',
  ],
  quickAnswer:
    'Duchenne muscular dystrophy (DMD) is a genetic condition primarily affecting boys that causes progressive muscle weakness. It is the most common muscular dystrophy in children, affecting approximately 1 in 3,500-5,000 male births. DMD is caused by mutations in the dystrophin gene. There is growing advocacy for adding DMD to the newborn screening panel, as early diagnosis (before symptoms appear) allows for earlier treatment with corticosteroids and emerging gene therapies that can slow progression. Early signs include delayed walking and difficulty with motor milestones.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'DMD is typically not diagnosed during infancy because symptoms are subtle. However, elevated creatine kinase (CK) levels can be detected from birth through blood tests, and newborn screening for DMD is being piloted in several states and countries. Infants with DMD may show mildly delayed motor milestones but often appear within normal range. If your newborn has an elevated CK level on screening, further genetic testing will be recommended. An elevated CK alone does not confirm DMD but warrants evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Boys with DMD often walk later than peers (average 18 months, compared to 12 months typically). They may have an unusual gait, difficulty keeping up with peers, or trouble climbing stairs. Calf muscles may appear enlarged (pseudohypertrophy) due to fat and connective tissue replacing muscle. However, many boys with DMD walk within the normal range and are not diagnosed until later. If you notice your son is consistently behind on gross motor milestones or falling more than expected, discuss this with your pediatrician.',
    },
    {
      ageRange: '2-5 years',
      context:
        'This is the most common age of diagnosis, typically around 4-5 years when the gap between the child and peers becomes more noticeable. Classic signs include difficulty running, frequent falling, trouble climbing stairs, the Gower sign (using hands to "walk up" legs when rising from the floor), and waddling gait. Diagnosis involves blood CK levels (markedly elevated in DMD), followed by genetic testing. If DMD is confirmed, early treatment with corticosteroids can significantly slow muscle deterioration and prolong walking ability. Emerging gene therapy and exon-skipping treatments offer additional options for certain mutations.',
    },
  ],
  whenNormal: [
    'Your son is meeting gross motor milestones on schedule and does not have difficulty with running, climbing, or getting up from the floor.',
    'Your newborn had a normal CK level on screening or did not have elevated CK on standard blood tests.',
    'Your child was evaluated for DMD and genetic testing was negative.',
  ],
  whenToMention: [
    'Your son has delayed walking (not walking by 18 months) or seems weaker than peers.',
    'You notice your son using his hands to push up from the floor (Gower sign) or has enlarged calves.',
    'There is a family history of muscular dystrophy or your son has an incidentally discovered elevated CK level.',
  ],
  whenToActNow: [
    'Your child has rapidly progressive weakness affecting their ability to walk or stand.',
    'Genetic testing has confirmed DMD and your child has not yet been connected with a neuromuscular specialist.',
    'Your child with known DMD develops respiratory symptoms, difficulty swallowing, or cardiac symptoms.',
  ],
  relatedMilestones: [
    'walking',
    'gross-motor',
    'climbing',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['developmental-delay-early-intervention-importance', 'floppy-baby-syndrome', 'not-standing', 'not-pulling-up'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Duchenne Muscular Dystrophy. CDC.',
      url: 'https://www.cdc.gov/ncbddd/musculardystrophy/facts.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Muscular Dystrophy Fact Sheet. NINDS.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/muscular-dystrophy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Duchenne Muscular Dystrophy Care Considerations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/142/Supplement_2/S1/29173/Duchenne-Muscular-Dystrophy-Care-Considerations',
    },
  ],
};
