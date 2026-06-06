import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-thyroglossal-duct-cyst',
  title: 'My Baby Has a Lump in the Middle of Their Neck (Thyroglossal Duct Cyst)',
  category: 'medical',
  searchTerms: [
    'baby neck lump midline',
    'thyroglossal duct cyst baby',
    'baby lump middle neck',
    'baby neck cyst',
    'baby lump moves when swallowing',
    'thyroglossal cyst treatment',
    'congenital neck cyst baby',
    'baby midline neck mass',
    'baby lump under chin midline',
    'thyroglossal cyst surgery baby',
  ],
  quickAnswer:
    'A thyroglossal duct cyst is the most common congenital midline neck mass in children. It appears as a painless, round lump in the middle of the neck, usually near or below the hyoid bone (the bone you can feel at the base of the tongue area). It characteristically moves upward when the child swallows or sticks out their tongue. While usually harmless, surgical removal is recommended because these cysts can become infected.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Thyroglossal duct cysts may be noticed at birth or within the first few months. The cyst forms from a remnant of the duct through which the thyroid gland descends during fetal development. It typically presents as a painless, smooth, mobile midline neck lump. Your pediatrician will likely order an ultrasound to confirm the diagnosis and check thyroid position.',
    },
    {
      ageRange: '3-12 months',
      context:
        'The cyst may become more noticeable as your baby grows. It is usually discovered incidentally or when it becomes infected and suddenly enlarges. An infected thyroglossal duct cyst becomes red, swollen, and tender and needs antibiotic treatment. After infection resolves, surgical removal is typically recommended to prevent recurrence.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If not previously noticed, a thyroglossal duct cyst may become apparent in toddlerhood. Surgery (Sistrunk procedure) is the definitive treatment and involves removing the cyst, the duct tract, and the central portion of the hyoid bone to prevent recurrence. The surgery has a very high success rate.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If surgery has been recommended, this is a common age for the procedure. It is performed under general anesthesia and typically requires a short hospital stay. Recovery takes about 1-2 weeks. Without surgery, the cyst may continue to grow or become recurrently infected.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Some thyroglossal duct cysts are not discovered until preschool age. The same treatment approach applies. Before surgery, an ultrasound confirms that normal thyroid tissue exists in the usual position, as rarely the only thyroid tissue a child has may be within the cyst.',
    },
  ],
  whenNormal: [
    'A small, stable, painless midline neck lump that has been evaluated and diagnosed as a thyroglossal duct cyst',
    'The lump moves upward when your baby swallows or sticks out their tongue',
    'Your pediatrician is monitoring the cyst and has discussed timing of surgery',
  ],
  whenToMention: [
    'You notice a new midline neck lump in your baby',
    'A previously stable cyst seems to be growing',
    'You want to discuss timing and details of surgical removal',
  ],
  whenToActNow: [
    'The cyst becomes suddenly red, swollen, warm, tender, or your baby develops fever (infected cyst)',
    'The lump is growing rapidly, is hard, or is not mobile',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-branchial-cleft-cyst',
    'baby-cervical-lymphadenopathy',
    'baby-pediatric-ent-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neck Masses in Children. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/27/7/e50/62497',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Thyroglossal duct cyst.',
      url: 'https://www.mayoclinic.org/diseases-conditions/thyroglossal-duct-cyst/symptoms-causes/syc-20378423',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Thyroglossal Duct Cyst. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532898/',
    },
  ],
};
