import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'undescended-testicle',
  title: 'Undescended Testicle (Cryptorchidism) in Babies',
  bodySystem: 'genitourinary',
  description: 'An undescended testicle (cryptorchidism) occurs when one or both testicles have not moved down into the scrotum by birth. It is the most common genital abnormality in baby boys, affecting approximately 3-5% of full-term and up to 30% of premature boys. Many undescended testicles descend spontaneously by 3-6 months of age. If still undescended by 6 months, surgical correction (orchidopexy) is recommended by age 12-18 months to preserve fertility and reduce cancer risk.',
  possibleCauses: [
    { cause: 'True undescended testicle (cryptorchidism — stopped along descent path)', likelihood: 'common' },
    { cause: 'Retractile testicle (descends normally but retracts up with cremasteric reflex — normal)', likelihood: 'common' },
    { cause: 'Prematurity (testicles descend in third trimester)', likelihood: 'common' },
    { cause: 'Ectopic testicle (testicle in abnormal position outside normal descent path)', likelihood: 'rare' },
    { cause: 'Absent/vanishing testicle (anorchia — blood supply lost in utero)', likelihood: 'rare' },
    { cause: 'Disorder of sex development', likelihood: 'rare' },
    { cause: 'Hormonal insufficiency during fetal development', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Testicles may not be easily palpable in newborns due to small size and active cremasteric reflex. One testicle may be lower than the other (normal). Testicles may retract during crying or when cold. Premature babies commonly have undescended testicles that descend in the first months.', whenToWorry: 'Testicle not palpable in scrotum at birth (will be noted on newborn exam). Both testicles absent (needs evaluation for disorders of sex development). Scrotal asymmetry noted by parents. Empty scrotum on one or both sides.' },
    { ageRange: '2-6 months', normalVariation: 'Many undescended testicles that were not palpable at birth will descend spontaneously by 3-6 months. Retractile testicles (move up and down) are normal and do not need treatment.', whenToWorry: 'Testicle still not palpable in scrotum by 4-6 months. Groin lump (testicle stuck in inguinal canal). Bilateral absence (both testicles not descended).' },
    { ageRange: '6-12 months', normalVariation: 'If testicle has descended by 6 months and remains in scrotum, no further concern. Retractile testicle that can be manually moved into scrotum and stays briefly is normal variant.', whenToWorry: 'Testicle not descended by 6 months (unlikely to descend spontaneously now — surgical referral needed). Testicle that was previously descended but no longer palpable (ascending testicle). Painful groin lump (incarcerated hernia often coexists with undescended testicle).' },
    { ageRange: '1-3 years', normalVariation: 'Retractile testicles are common in toddlers — testicle pops up during examination or bathing but can be gently guided into scrotum. This is a normal variant that resolves with puberty.', whenToWorry: 'Previously descended testicle now consistently absent (acquired/ascending undescended testicle — needs referral). Undescended testicle not yet surgically corrected by age 18 months. Pain or swelling in groin where undescended testicle sits.' },
  ],
  urgencyLevels: {
    emergency: [
      'Acute pain and swelling in groin where undescended testicle is located (torsion of undescended testicle)',
      'Bilateral undescended testicles in newborn with ambiguous genitalia (disorder of sex development)',
    ],
    urgent: [
      'Painful, tender groin lump in child with known undescended testicle',
      'Sudden disappearance of previously descended testicle with pain',
      'Bilateral undescended testicles with other anomalies (urgent genetic/endocrine evaluation)',
    ],
    sameDay: [
      'Newly noticed empty scrotum (parent concern about undescended testicle)',
      'Previously descended testicle no longer palpable (ascending testicle)',
      'Undescended testicle at 6 months — needs surgical referral planning',
    ],
    monitor: [
      'Known undescended testicle in infant under 6 months (may still descend spontaneously)',
      'Retractile testicle (goes up but can be brought down into scrotum — normal variant)',
      'Post-orchidopexy follow-up (checking position and growth)',
      'Premature infant with undescended testicle — monitor for descent as baby reaches term equivalent',
    ],
  },
  homeRemedies: [
    'Check for testicles during warm bath (cremasteric reflex relaxes in warmth, making testicles easier to find)',
    'A retractile testicle (one that moves up and down but CAN be in the scrotum) is NORMAL and needs no treatment',
    'Do NOT try to force the testicle down — this does not help and may cause pain',
    'Attend all scheduled follow-up appointments — timing of surgery matters for long-term outcomes',
    'After orchidopexy surgery: follow surgeon instructions, expect some swelling for a few days',
    'Keep surgical site clean and dry, give prescribed pain medication',
    'Know that surgery (orchidopexy) is recommended by 12-18 months if not descended by 6 months',
    'Undescended testicle has increased lifetime risk of testicular cancer — teach testicular self-exam when older',
    'Hormonal treatment (hCG or GnRH) is no longer routinely recommended due to low success rates',
  ],
  relatedSymptomSlugs: ['genital-swelling', 'penile-concerns', 'clicking-hips'],
  relatedIllnessSlugs: ['cryptorchidism', 'inguinal-hernia', 'retractile-testicle'],
  relatedConcernSlugs: ['baby-undescended-testicle', 'baby-empty-scrotum', 'retractile-testicle-normal'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Evaluation and Treatment of Cryptorchidism. Pediatrics. 2014;133(3).', url: 'https://publications.aap.org/pediatrics/article/133/3/e680/32117' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Undescended Testicles.', url: 'https://www.niddk.nih.gov/health-information/urologic-diseases/undescended-testicles' },
    { org: 'NHS', citation: 'NHS. Undescended testicles.', url: 'https://www.nhs.uk/conditions/undescended-testicles/' },
  ],
};
