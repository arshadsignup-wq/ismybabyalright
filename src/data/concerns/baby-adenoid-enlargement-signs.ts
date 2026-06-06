import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-adenoid-enlargement-signs',
  title: 'Does My Baby Have Enlarged Adenoids?',
  category: 'medical',
  searchTerms: [
    'baby enlarged adenoids',
    'adenoid hypertrophy baby',
    'baby adenoid problems',
    'baby mouth breathing adenoids',
    'baby snoring adenoids',
    'baby nasal obstruction adenoids',
    'adenoid signs baby',
    'baby adenoids affecting sleep',
    'baby chronic congestion adenoids',
    'adenoid removal baby when',
  ],
  quickAnswer:
    'Adenoids are immune tissue located behind the nose that can become enlarged, especially from frequent infections. Signs include persistent mouth breathing, loud snoring, nasal voice quality, chronic nasal congestion, and restless sleep. Enlarged adenoids can contribute to recurrent ear infections and sleep apnea. Adenoids typically grow during early childhood and begin to shrink by age 5-7. If they cause significant problems, surgical removal (adenoidectomy) may be recommended.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Adenoid enlargement is uncommon in very young babies. If your newborn has persistent nasal obstruction, other causes (such as choanal atresia or other structural issues) should be evaluated. Normal newborn nasal congestion is common and does not usually indicate adenoid problems.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Adenoids begin to grow as the immune system develops. Significant enlargement at this age is unusual. If your baby has persistent nasal breathing difficulty, chronic mouth breathing, or significant snoring, discuss with your pediatrician. These symptoms at this age are more commonly from other causes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Adenoid growth increases as babies are exposed to more infections. If your baby snores frequently, breathes through the mouth habitually, or has chronic nasal congestion that does not improve with cold treatments, enlarged adenoids may be contributing. Your pediatrician may refer to an ENT for evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is a common age for adenoid-related issues to become apparent. Signs include chronic mouth breathing, loud snoring, pauses in breathing during sleep (sleep apnea), recurrent ear infections, and nasal voice quality. Enlarged adenoids can block the eustachian tubes, contributing to ear fluid and infections.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Adenoids are typically at their largest between ages 2-6. If your child has significant sleep disruption from snoring and mouth breathing, recurrent ear infections, or has had ear tubes that are not resolving ear problems, an adenoidectomy may be recommended. The surgery is very common and recovery takes about 1-2 weeks.',
    },
  ],
  whenNormal: [
    'Your baby snores mildly during a cold but breathes normally when well',
    'Occasional mouth breathing when congested that resolves when the illness clears',
    'Your baby\'s adenoids are mildly enlarged on examination but not causing symptoms',
  ],
  whenToMention: [
    'Your baby is a habitual mouth breather, even when not sick',
    'Your baby snores loudly most nights',
    'Your baby has recurrent ear infections along with chronic congestion',
  ],
  whenToActNow: [
    'Your baby has pauses in breathing during sleep (observed apnea), gasping or choking during sleep, or seems to struggle to breathe through their nose constantly',
    'Your baby has such severe nasal obstruction that feeding is significantly impaired or they are failing to gain weight',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-tonsillitis-signs',
    'baby-mouth-breathing',
    'sleep-apnea-signs',
    'baby-pediatric-ent-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Adenoid Problems. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Adenoids-and-Adenoidectomy.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Enlarged adenoids.',
      url: 'https://www.mayoclinic.org/diseases-conditions/enlarged-adenoids/symptoms-causes/syc-20351844',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Adenoid Hypertrophy. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK536984/',
    },
  ],
};
