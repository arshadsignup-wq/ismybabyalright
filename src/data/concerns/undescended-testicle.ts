import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'undescended-testicle',
  title: 'Baby Undescended Testicle (Cryptorchidism)',
  category: 'medical',
  searchTerms: [
    'baby undescended testicle',
    'baby testicle not dropped',
    'baby missing testicle',
    'cryptorchidism baby',
    'baby one testicle in scrotum',
    'can\'t feel baby\'s testicle',
    'retractile testicle baby',
    'undescended testicle surgery baby',
    'baby testicle goes up and down',
    'when does testicle descend',
  ],
  quickAnswer:
    'Undescended testicle (cryptorchidism) is one of the most common conditions in baby boys, occurring in about 3-5% of full-term and up to 30% of premature newborns. Many undescended testicles come down on their own within the first 3-6 months. If a testicle has not descended by 6 months, surgery (orchiopexy) is recommended before 12-18 months to protect future fertility and reduce other risks.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Your pediatrician will check for descended testicles at birth and subsequent visits. In many premature and some full-term boys, one or both testicles have not yet descended at birth. The testicles usually descend on their own during the first few months. A retractile testicle, which sometimes pulls up into the groin due to a normal reflex but can be gently guided back into the scrotum, is different from a truly undescended testicle and does not require treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most spontaneous descent happens by 3-6 months. If the testicle has not descended by 6 months of age, it is unlikely to come down on its own. Your pediatrician will likely refer you to a pediatric urologist or surgeon. Hormonal treatment is generally not recommended as studies have not shown consistent benefit.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If the testicle remains undescended, surgical correction (orchiopexy) is recommended. The AAP and most pediatric urology guidelines recommend performing surgery between 6-12 months of age. Earlier surgery appears to offer better outcomes for testicular development and future fertility. Orchiopexy is a very common, well-established procedure with excellent success rates (about 95%).',
    },
    {
      ageRange: '12-18 months',
      context:
        'Surgery should ideally be completed by 12-18 months. Delayed treatment beyond this window is associated with increased risks to fertility and a slightly higher risk of testicular cancer later in life (though the absolute risk remains low). After successful orchiopexy, the testicle is monitored at routine checkups to ensure it remains in proper position.',
    },
  ],
  whenNormal: [
    'Your newborn has one or both testicles that have not yet descended, especially if your baby was born premature',
    'A testicle that sometimes moves up into the groin but can be gently guided back down into the scrotum (retractile testicle)',
    'The testicle has descended on its own within the first 3-6 months of life',
    'After orchiopexy surgery, the testicle is in the scrotum and the surgical site is healing normally',
  ],
  whenToMention: [
    'You cannot feel your baby\'s testicle in the scrotum or it does not seem to be in the right position at any well-child visit',
    'One side of the scrotum looks consistently empty or smaller than the other',
    'Your baby\'s testicle has not descended by the 4-month checkup and you want to discuss next steps',
    'A testicle that was previously in the scrotum no longer seems to be there (acquired undescended testicle)',
  ],
  whenToActNow: [
    'Sudden pain, swelling, or redness in the scrotum or groin area, which could indicate testicular torsion (a twisted testicle cutting off blood supply), an incarcerated hernia, or infection requiring emergency evaluation',
    'Your baby has an undescended testicle combined with a bulge in the groin that becomes hard, painful, or discolored, which could indicate an inguinal hernia needing urgent attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Evaluation and Treatment of Cryptorchidism. Pediatrics, 2014.',
      url: 'https://publications.aap.org/pediatrics/article/133/3/e756/32166/Evaluation-and-Treatment-of-Cryptorchidism-AUA',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Undescended Testicles in Babies.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Undescended-Testicles.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts About Cryptorchidism.',
      url: 'https://www.cdc.gov/birth-defects/about/cryptorchidism.html',
    },
  ],
};
