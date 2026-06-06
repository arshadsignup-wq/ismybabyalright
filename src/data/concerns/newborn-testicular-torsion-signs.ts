import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-testicular-torsion-signs',
  title: 'Testicular Torsion in Newborns',
  category: 'medical',
  searchTerms: ['newborn testicular torsion', 'baby twisted testicle', 'neonatal testicular torsion', 'baby scrotum hard dark', 'newborn testicle swelling', 'baby testicle discolored', 'testicular torsion signs baby', 'newborn scrotal emergency', 'baby one testicle hard', 'neonatal torsion treatment'],
  quickAnswer:
    'Testicular torsion (twisting of the testicle) in a newborn is rare but is a surgical emergency. It may present as a hard, swollen, discolored (dark or blue) scrotum. Neonatal testicular torsion is different from torsion in older children and often occurs before or during birth. Any hard, discolored, or swollen testicle in a newborn should be evaluated urgently.',
  byAge: [
    { ageRange: '0-1 month', context: 'Neonatal testicular torsion can occur prenatally (before birth) or perinatally (around the time of birth). It may be noticed at birth or in the first days of life. Signs include a hard, non-tender (because the tissue may already be damaged), discolored scrotum on one side. The affected side may appear dark, blue, or red. Unlike torsion in older children, neonatal torsion is often extravaginal (the entire cord and testicle twist together). The prognosis for saving the affected testicle in prenatal torsion is poor because the damage usually occurred before birth. However, emergency evaluation is still needed to protect the opposite testicle and rule out other conditions.' },
    { ageRange: '1-3 months', context: 'Testicular torsion can occur at any age. Any sudden onset of scrotal swelling, hardness, or discoloration requires emergency evaluation. A normal scrotal examination at well-child visits helps establish baseline.' },
    { ageRange: '3-6 months', context: 'Continue to be aware of scrotal appearance during diaper changes. Sudden changes should be evaluated promptly.' },
    { ageRange: '6-12 months', context: 'Testicular torsion is possible at any age. Sudden scrotal pain, swelling, or color change requires emergency evaluation within hours for the best chance of saving the testicle.' },
  ],
  whenNormal: ['A soft, non-tender scrotum with both testicles palpable', 'Mild scrotal swelling from a hydrocele that transilluminates (glows with light) and is soft', 'Normal scrotal skin color'],
  whenToMention: ['You notice asymmetric scrotal size or the scrotum looks different on one side', 'A hydrocele that does not seem to be decreasing over time', 'You cannot feel one testicle in the scrotum (possible undescended testicle)'],
  whenToActNow: ['A hard, swollen, discolored (dark, blue, or red) scrotum requires immediate emergency evaluation', 'Sudden onset of scrotal swelling or apparent pain in an infant of any age is a surgical emergency until proven otherwise'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Testicular Torsion. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Testicular Torsion. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538149/' },
  ],
  relatedConcernSlugs: ['undescended-testicle', 'hydrocele-baby', 'newborn-swollen-genitals'],
};
