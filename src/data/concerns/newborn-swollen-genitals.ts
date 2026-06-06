import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-swollen-genitals',
  title: 'Swollen Genitals in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn swollen genitals',
    'baby swollen labia',
    'newborn swollen scrotum',
    'baby puffy genitals',
    'newborn genital swelling normal',
    'baby swollen privates',
    'newborn girl swollen vulva',
    'newborn boy swollen testicles',
    'baby genital edema',
    'swollen genitalia newborn hormones',
  ],
  quickAnswer:
    'Swollen genitals in newborns are very common and normal for both boys and girls. The swelling is caused by maternal hormones that crossed the placenta and by fluid retention during delivery. The swelling is temporary and typically resolves within the first few days to weeks of life without any treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Genital swelling is extremely common in newborns. In girls, the labia may appear puffy or swollen, and there may be a white mucous discharge or even a small amount of blood-tinged discharge (mini period). In boys, the scrotum may appear large and swollen, sometimes due to a hydrocele (fluid around the testicle), which is also common and usually harmless. The swelling is caused by maternal estrogen that crossed the placenta and the effects of the birth process. It resolves gradually over the first few weeks.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The hormone-related genital swelling should be resolving or fully resolved by this age. In boys, a hydrocele may persist for several months but typically resolves by 12 months. The scrotum should appear less swollen over time. If swelling increases or the scrotum appears discolored or tender, seek medical evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most hormone-related genital swelling has resolved. A hydrocele in boys may still be present but should be gradually decreasing. Your pediatrician will monitor it at well-child visits. New or increasing genital swelling at this age should be evaluated.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If a hydrocele persists or is getting larger, your pediatrician may consider referral to a pediatric urologist for evaluation. Most hydroceles resolve by 12 months. Any new, sudden, or painful scrotal swelling requires urgent evaluation to rule out testicular torsion or inguinal hernia.',
    },
  ],
  whenNormal: [
    'Puffy or swollen labia in newborn girls that gradually decreases',
    'Swollen scrotum in newborn boys, often related to a harmless hydrocele',
    'White mucous vaginal discharge in newborn girls',
    'Swelling that gradually decreases over the first few weeks of life',
  ],
  whenToMention: [
    'Genital swelling persists beyond the first few weeks or appears to be increasing',
    'A hydrocele in boys does not seem to be decreasing by 6 months',
    'You notice an asymmetric bulge in the groin area that comes and goes',
  ],
  whenToActNow: [
    'Sudden onset of scrotal swelling, redness, or tenderness in a boy, which could indicate testicular torsion or incarcerated hernia requiring emergency care',
    'Any genital swelling accompanied by fever, discoloration, or significant pain in your baby',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Physical Appearance and Growth in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-First-Days.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Newborn Physical Examination. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002302.htm',
    },
  ],
  relatedConcernSlugs: ['hydrocele-baby', 'newborn-vaginal-bleeding-mini-period', 'newborn-inguinal-hernia-signs'],
};
