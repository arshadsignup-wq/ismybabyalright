import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-acne',
  title: 'Baby Acne (Neonatal Acne)',
  category: 'skin',
  searchTerms: [
    'baby acne',
    'newborn acne',
    'baby pimples on face',
    'red bumps on newborn face',
    'baby acne treatment',
    'neonatal acne',
    'when does baby acne go away',
    'baby face bumps',
    'baby acne vs eczema',
    'baby acne on cheeks',
    'white bumps on baby nose',
  ],
  quickAnswer:
    'Baby acne is a very common, harmless condition that appears as small red or white bumps on your newborn\'s face, usually around 2-4 weeks of age. It is caused by maternal hormones still circulating in your baby\'s system and clears up on its own within a few weeks to months without any treatment.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'In the first days of life, you may notice tiny white bumps on your baby\'s nose, chin, or cheeks. These are called milia and are caused by trapped skin cells in tiny pockets on the skin surface. They are not true acne, are completely harmless, and disappear on their own without any treatment.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'This is the peak age for baby acne to appear. Small red or white bumps, often with a slightly rough texture, develop on the cheeks, nose, forehead, and sometimes the chin. It is triggered by maternal hormones that crossed the placenta. The bumps may look worse when your baby is warm, fussy, or after contact with rough fabrics or spit-up.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'Baby acne usually begins clearing during this period as maternal hormones leave your baby\'s system. No special creams, soaps, or treatments are needed. Simply wash your baby\'s face with warm water and gently pat dry. Avoid lotions, oils, or scrubbing, which can irritate the skin.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most baby acne has completely resolved by this age. If acne-like bumps persist or appear for the first time after 3 months of age, this is considered infantile acne, which is less common and worth discussing with your pediatrician as it may occasionally need treatment.',
    },
  ],
  whenNormal: [
    'Small red or white bumps limited to the face that appear around 2-4 weeks of age',
    'Tiny white dots (milia) on the nose and cheeks in the first few days of life',
    'Bumps that look worse when your baby is warm or crying but improve when cool',
    'The acne does not seem to bother, itch, or cause your baby any discomfort',
    'Gradual clearing over several weeks without any treatment',
  ],
  whenToMention: [
    'The bumps persist beyond 3-4 months of age or seem to be getting worse',
    'The rash spreads beyond the face to the body, arms, or legs',
    'The skin around the bumps is very red, rough, or dry, which may suggest eczema rather than acne',
  ],
  whenToActNow: [
    'The bumps develop into larger pustules with yellow or green pus, suggesting a possible infection',
    'Your baby develops widespread blistering or skin peeling along with fever or irritability',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Acne. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Skin Rashes in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Rashes-and-Skin-Conditions.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Acne. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001457.htm',
    },
  ],
};
