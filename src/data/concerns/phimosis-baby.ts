import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'phimosis-baby',
  title: 'My Baby\'s Foreskin Won\'t Retract (Phimosis)',
  category: 'medical',
  searchTerms: [
    'baby foreskin won\'t retract',
    'baby phimosis',
    'toddler tight foreskin',
    'baby foreskin stuck',
    'baby foreskin care',
    'should you pull back baby foreskin',
    'foreskin not retracting toddler',
    'normal foreskin baby',
    'baby foreskin ballooning',
    'baby foreskin red swollen',
  ],
  quickAnswer:
    'It is completely normal for an infant\'s and young child\'s foreskin to be non-retractable. At birth, the foreskin is naturally fused to the head of the penis. It gradually separates on its own over years  -  in most boys, full retraction is possible by age 5-10. Parents should never forcefully retract the foreskin, as this can cause pain, scarring, and adhesions.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'In newborns, the foreskin is naturally adherent to the glans (head of the penis) by a membrane, and this is completely normal. The foreskin should not be retracted during diaper changes or bathing. Simply clean the outside of the penis with water. Forced retraction by anyone, including healthcare providers, should be avoided as it can cause microtears, bleeding, pain, and scarring that can lead to true pathological phimosis later.',
    },
    {
      ageRange: '1-3 years',
      context:
        'The foreskin naturally begins to separate from the glans through a gradual process. You may notice the foreskin \'ballooning\' during urination as the space between the foreskin and glans develops. This is normal and not a sign of obstruction. Some boys may begin to be able to partially retract the foreskin, while in others it remains fully non-retractable. Both are normal. Continue to clean only the outside, and never force retraction.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Many boys can partially retract their foreskin by this age, though full retraction may not yet be possible. The process is gradual and varies widely among children. If your child has no symptoms (no pain with urination, no recurrent infections, no significant ballooning causing discomfort), observation is appropriate. Only about 10% of boys have a fully retractable foreskin by age 3, but this increases to about 50% by age 5.',
    },
    {
      ageRange: '5 years+',
      context:
        'By age 10, most boys can fully retract their foreskin. If the foreskin remains tight and is causing symptoms such as pain, recurrent infections (balanitis), difficulty urinating, or significant ballooning, your pediatrician may recommend treatment. First-line treatment is typically a topical steroid cream applied to the tight area for 4-8 weeks combined with gentle stretching. This is effective in about 80-90% of cases. Circumcision is rarely needed and is considered only if conservative treatments fail.',
    },
  ],
  whenNormal: [
    'The foreskin of an infant or young child cannot be retracted  -  this is the normal state at birth',
    'The foreskin balloons slightly during urination in a toddler but the urine stream is normal',
    'Gradual, partial separation of the foreskin from the glans over the first several years',
    'White, pearl-like lumps (smegma) are visible under the foreskin as it begins to separate  -  these are normal',
  ],
  whenToMention: [
    'The foreskin appears very tight and the urine stream is thin, deflected, or your child seems to strain to urinate',
    'Your child has had more than one episode of redness, swelling, or discharge from the foreskin (recurrent balanitis)',
    'Your child is over 5-6 years old and the foreskin shows no signs of loosening',
  ],
  whenToActNow: [
    'The foreskin has been forcefully retracted and is now stuck behind the head of the penis (paraphimosis), causing swelling and pain  -  this is a medical emergency requiring immediate treatment to prevent blood flow compromise',
    'There is significant swelling, redness, and pus draining from under the foreskin, especially with fever, indicating an infection that needs prompt treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Care of the Uncircumcised Penis.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Care-of-the-Uncircumcised-Penis.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Circumcision Policy Statement. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/e585/30235/Circumcision-Policy-Statement',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Phimosis: Overview.',
      url: 'https://www.mayoclinic.org/diseases-conditions/phimosis/symptoms-causes/syc-20376422',
    },
  ],
};
