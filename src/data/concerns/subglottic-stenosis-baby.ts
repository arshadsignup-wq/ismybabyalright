import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'subglottic-stenosis-baby',
  title: 'Subglottic Stenosis (Narrowed Airway Below Vocal Cords)',
  category: 'medical',
  searchTerms: [
    'subglottic stenosis baby',
    'narrowed airway infant',
    'baby recurrent croup',
    'biphasic stridor baby',
    'subglottic stenosis after intubation',
    'acquired subglottic stenosis',
    'congenital subglottic stenosis',
    'baby croup keeps coming back',
    'neonatal intubation airway narrowing',
    'baby stridor both phases breathing',
  ],
  quickAnswer:
    'Subglottic stenosis is a narrowing of the airway just below the vocal cords. It can be congenital (present from birth) or acquired, most commonly following prolonged intubation in premature or critically ill newborns. Symptoms include biphasic stridor (noisy breathing on both inspiration and expiration), recurrent or severe croup episodes, and exercise intolerance. Mild cases may be monitored as the child grows and the airway widens, while moderate to severe cases may require surgical intervention such as endoscopic dilation or open airway reconstruction.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Congenital subglottic stenosis may present with stridor from birth, while acquired stenosis typically develops days to weeks after extubation in a baby who was intubated in the NICU. The stridor is often biphasic, meaning it is heard during both breathing in and breathing out, which distinguishes it from laryngomalacia. If your baby was intubated and develops new-onset stridor, breathing difficulty, or feeding issues after extubation, your medical team will likely evaluate for subglottic stenosis with endoscopy.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Mild congenital subglottic stenosis may become more apparent as your baby grows more active and breathes harder. A hallmark sign is recurrent croup, occurring more frequently than expected or being unusually severe. If your baby is diagnosed with croup more than 2-3 times in one season, or if croup requires hospitalization, your pediatrician may refer to a pediatric ENT to evaluate for underlying airway narrowing. Mild stenosis is often managed expectantly, as the airway grows and the relative narrowing improves.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Mild subglottic stenosis often improves significantly by age 3-4 as the airway grows in diameter. Recurrent croup episodes should become less frequent and less severe over time. For moderate stenosis, endoscopic procedures such as balloon dilation or laser treatment may be used to widen the airway. Severe stenosis (Grade 3 or 4) may require laryngotracheal reconstruction, a major surgery that uses a cartilage graft to expand the airway. The success rate for these procedures is high at experienced pediatric airway centers.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most children with mild to moderate subglottic stenosis outgrow their symptoms as the airway grows. Children who underwent surgical reconstruction typically do well, though long-term follow-up with an ENT specialist is important to monitor for restenosis. Some children may have a barky voice or mild exercise intolerance. After successful treatment, most children lead fully active lives without significant airway limitations.',
    },
  ],
  whenNormal: [
    'Your child had mild croup once and recovered fully without complications',
    'A baby who was intubated briefly has no stridor or breathing difficulty after extubation',
    'Your child with known mild stenosis is growing well, feeding normally, and the stridor is stable or improving',
    'Recurrent croup episodes are becoming less frequent and less severe as your child gets older',
  ],
  whenToMention: [
    'Your child has had croup 3 or more times in a year, or croup episodes are unusually severe',
    'Your baby who was intubated in the NICU has persistent noisy breathing or feeding difficulty',
    'Your child has noisy breathing that is present both when breathing in and breathing out',
  ],
  whenToActNow: [
    'Your child has severe stridor at rest with chest retractions, nasal flaring, or difficulty breathing -- seek emergency care',
    'Your child turns blue, becomes extremely agitated, or is unable to speak or cry during a breathing episode -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['laryngomalacia-floppy-airway', 'tracheomalacia-baby', 'baby-stridor-noisy-breathing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Croup and Your Young Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Croup-Treatment.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Subglottic Stenosis. StatPearls, NIH.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560468/',
    },
    {
      org: 'AAO-HNS',
      citation:
        'American Academy of Otolaryngology-Head and Neck Surgery. Pediatric Airway Disorders.',
      url: 'https://www.enthealth.org/conditions/pediatric-airway-disorders/',
    },
  ],
};
