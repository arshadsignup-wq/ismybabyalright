import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-after-illness',
  title: 'Baby Rash After Illness (Post-Viral Rash)',
  category: 'skin',
  searchTerms: [
    'baby rash after illness',
    'baby rash after being sick',
    'post viral rash baby',
    'baby rash after cold',
    'baby rash after fever gone',
    'infant rash after virus',
    'baby rash after infection',
    'viral exanthem baby',
    'baby rash after stomach bug',
    'toddler rash after being ill',
  ],
  quickAnswer:
    'It is very common for babies to develop a rash after recovering from a viral illness. These post-viral rashes usually appear as pink or red spots on the trunk and may spread to the arms and legs. They typically fade within a few days and do not require treatment as long as your baby is feeling better overall.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Post-viral rashes in very young infants are less common because they have fewer viral exposures. However, if a rash appears after an illness in this age group, it should be evaluated by your pediatrician to ensure it is truly a benign viral rash and not something requiring treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As maternal antibodies decrease, babies begin catching more viruses, and post-viral rashes become more common. Roseola is the classic example, where a widespread pink rash blooms just as the fever resolves and the baby starts feeling better. This rash is actually a sign of recovery and is not contagious.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a very common age for post-viral rashes. Many common childhood viruses, including enteroviruses and adenoviruses, can cause a rash 1 to 3 days after the illness resolves. These rashes are usually non-itchy and fade within 3 to 5 days. No treatment is needed if your baby is acting well.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in daycare catch many viruses and may develop post-viral rashes frequently. The rash may sometimes be confused with an allergic reaction to a medication given during the illness, such as an antibiotic. If your toddler developed a rash while taking medication, discuss with your pediatrician whether it is viral or drug-related.',
    },
  ],
  whenNormal: [
    'A pink, blotchy rash that appears after the fever breaks and the child is feeling better',
    'The rash is non-itchy and the child is eating, drinking, and playing normally',
    'The rash fades gradually over 3 to 5 days without treatment',
  ],
  whenToMention: [
    'The post-viral rash lasts longer than a week or seems to be getting worse',
    'The rash is itchy, blistering, or causing discomfort',
    'You are unsure whether the rash is viral or a reaction to medication',
  ],
  whenToActNow: [
    'Your baby seemed to be recovering but then develops a new fever along with the rash, suggesting a secondary infection',
    'The rash is non-blanching, with spots that do not fade when pressed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Roseola. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Roseola.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Viral Exanthems in Childhood. Pediatrics in Review.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26926407/',
    },
  ],
  relatedConcernSlugs: ['viral-rash-baby', 'roseola-rash', 'rash-after-antibiotics', 'baby-rash-with-fever'],
};
