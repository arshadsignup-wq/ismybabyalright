import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-glasses-needed-infant',
  title: 'My Baby Needs Glasses - What Should I Know?',
  category: 'medical',
  searchTerms: [
    'baby needs glasses',
    'glasses for infant',
    'baby prescription glasses',
    'baby glasses how',
    'infant glasses fitting',
    'baby farsighted glasses',
    'baby nearsighted glasses',
    'baby astigmatism glasses',
    'keeping glasses on baby',
    'baby glasses why so young',
  ],
  quickAnswer:
    'Babies can be prescribed glasses as young as a few months old for conditions like significant farsightedness, nearsightedness, astigmatism, or to help correct eye alignment issues. Infant glasses have flexible frames, adjustable straps, and polycarbonate lenses for safety. While it may seem early, correcting vision problems in infancy is crucial for normal brain visual development and can prevent lazy eye (amblyopia).',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Glasses are occasionally prescribed this young for significant refractive errors or after cataract surgery. Special infant frames with a headband strap keep glasses in place. Babies often adjust to wearing glasses surprisingly well because the improved vision is immediately rewarding. Trust your pediatric ophthalmologist\'s recommendation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If glasses are prescribed, expect an adjustment period of 1-2 weeks. Your baby may try to pull them off at first. Be patient and consistently replace them. Flexible frames that wrap around the ears with a secure strap are essential. Many parents notice their baby seems happier and more engaged after getting glasses, as their visual world becomes clearer.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for first glasses prescription after vision screening detects an issue. Choose impact-resistant polycarbonate lenses and flexible frames. Consider having a backup pair. Your baby will need follow-up visits to check that the prescription is correct and the eyes are developing properly with correction.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Active toddlers need durable, flexible glasses frames. Silicone frames are popular for this age. Cable temples (curved around the ear) with an elastic strap help keep glasses on during play. Your optician can help with proper fitting. Replace glasses promptly if they become bent or scratched.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can participate in choosing frames (within appropriate options). Making glasses a positive experience helps compliance. Prescriptions may change as your child grows, so regular eye exams are important. Some children eventually outgrow the need for glasses while others will need them long-term.',
    },
  ],
  whenNormal: [
    'Your baby initially resists wearing glasses but gradually accepts them within 1-2 weeks',
    'Your baby seems more visually attentive and engaged after getting glasses',
    'The prescription changes somewhat over the first year of wear as the eyes grow',
  ],
  whenToMention: [
    'Your baby absolutely refuses to wear glasses despite consistent effort',
    'You notice one eye still seems misaligned despite glasses',
    'You want to understand why glasses are needed and what the long-term outlook is',
  ],
  whenToActNow: [
    'Your baby\'s eye alignment suddenly changes or worsens despite wearing glasses',
    'You notice a new abnormality in your baby\'s eye (white pupil, sudden swelling, changes in eye appearance)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-eye-patch-therapy',
    'baby-vision-screening-importance',
    'eye-alignment-issues-infant',
    'baby-pediatric-ophthalmologist-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Glasses for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Glasses-and-Contact-Lenses.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Refractive Errors in Children.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/refractive-errors',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Farsightedness in Children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/farsightedness/symptoms-causes/syc-20372461',
    },
  ],
};
