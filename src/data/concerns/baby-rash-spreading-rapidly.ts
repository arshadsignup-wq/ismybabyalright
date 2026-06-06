import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-spreading-rapidly',
  title: 'Baby Rash Spreading Rapidly',
  category: 'skin',
  searchTerms: [
    'baby rash spreading fast',
    'baby rash spreading all over',
    'infant rash getting worse',
    'baby rash spreading rapidly',
    'baby rash expanding',
    'baby rash suddenly everywhere',
    'baby rash growing bigger',
    'baby whole body rash spreading',
    'toddler rash spreading quickly',
    'baby rash getting bigger overnight',
  ],
  quickAnswer:
    'A rash that spreads rapidly can understandably be alarming, but many fast-spreading rashes in babies are harmless viral rashes or hives. The most important thing is to check whether the rash blanches (fades when pressed) and whether your baby seems well overall. Non-blanching rashes or rashes with significant illness require immediate evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Erythema toxicum can spread rapidly over a newborn\'s body within hours and looks alarming, but it is completely harmless and resolves on its own. However, in young infants, any rapidly spreading rash accompanied by fever, poor feeding, or lethargy should be evaluated promptly because infections in this age group can progress quickly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Viral exanthems (rashes associated with viral infections) commonly spread quickly over the trunk and limbs. Hives can also appear suddenly and spread across the body within minutes to hours. If your baby has rapidly spreading hives but is breathing normally and not swollen, antihistamine treatment as directed by your pediatrician may help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for viral rashes that can spread rapidly after a fever, such as roseola. Drug rashes from new medications like antibiotics may also spread quickly. Contact your pediatrician if a rash develops during or after a course of antibiotics to determine whether the medication should be stopped.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are exposed to many viruses that can cause widespread rashes, and hives from allergic reactions can spread rapidly. Scarlet fever causes a sandpaper-like rash that spreads quickly from the trunk outward. Any rapidly spreading rash with high fever, sore throat, or your child appearing unwell should be evaluated the same day.',
    },
  ],
  whenNormal: [
    'A rash that spreads after a fever breaks and the child seems well, suggesting a viral exanthem',
    'Hives that come and go over hours, with individual welts lasting less than 24 hours and no breathing issues',
    'Erythema toxicum in a newborn that spreads over the first few days of life',
  ],
  whenToMention: [
    'A rash is spreading over hours to days and you are unsure of the cause',
    'The rash develops after starting a new medication',
    'Your baby has a spreading rash with mild fever but is otherwise eating and acting normally',
  ],
  whenToActNow: [
    'The rash is non-blanching (does not fade when pressed), which could indicate meningococcal disease or another serious condition',
    'A rapidly spreading rash is accompanied by difficulty breathing, facial swelling, drooling, or signs of anaphylaxis',
    'Your baby under 3 months has a spreading rash with fever, poor feeding, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hives (Urticaria). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hives.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Approach to Pediatric Exanthems. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26926407/',
    },
  ],
  relatedConcernSlugs: ['viral-rash-baby', 'hives', 'petechiae-baby', 'rash-after-antibiotics'],
};
