import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-chalazion-eyelid-bump',
  title: 'My Baby Has a Bump on Their Eyelid (Chalazion)',
  category: 'medical',
  searchTerms: [
    'baby chalazion',
    'baby eyelid bump painless',
    'chalazion baby treatment',
    'baby eyelid lump hard',
    'chalazion vs stye baby',
    'baby meibomian gland cyst',
    'baby eyelid cyst',
    'baby chalazion won\'t go away',
    'baby eyelid bump months',
    'chalazion baby warm compress',
  ],
  quickAnswer:
    'A chalazion is a painless, firm bump on the eyelid caused by a blocked oil gland (meibomian gland). Unlike a stye, it is not an active infection and is not tender. Chalazions often develop from a stye that did not fully resolve. Most chalazions resolve on their own over weeks to months with consistent warm compresses. If a chalazion persists for more than 2-3 months or affects vision, your pediatrician may refer to a pediatric ophthalmologist.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Chalazions are rare in very young babies. Any eyelid bump in a newborn should be evaluated to distinguish it from other conditions. If a painless eyelid bump is identified as a chalazion, warm compresses and gentle eyelid massage are the first-line treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a chalazion develops, apply a warm damp cloth to the eyelid for 5-10 minutes, 3-4 times daily, followed by gentle massage toward the eyelid margin. This helps the blocked gland open. Most chalazions take 2-8 weeks to resolve but can take longer. Patience and consistent treatment are key.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue warm compresses and gentle massage. If the chalazion is not bothersome and not blocking your baby\'s vision, watchful waiting is appropriate. Chalazions occasionally resolve and then recur, which can be frustrating but is not dangerous. Daily eyelid hygiene with diluted baby shampoo can help prevent recurrence.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most chalazions resolve with conservative treatment. If a chalazion has persisted for 3 months or more, is large enough to press on the eye and potentially affect vision, or is cosmetically concerning, your pediatrician may refer to a pediatric ophthalmologist who can discuss steroid injection or minor surgical drainage.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Persistent or recurrent chalazions in an older toddler may benefit from more proactive treatment. Surgical drainage is a brief procedure usually done under sedation in young children. Recurrent chalazions may indicate chronic blepharitis that needs ongoing eyelid hygiene management.',
    },
  ],
  whenNormal: [
    'A small, painless bump on the eyelid that gradually shrinks with warm compresses over several weeks',
    'The bump does not cause redness of the eye, fever, or pain',
    'Your baby\'s vision and eye movement are unaffected',
  ],
  whenToMention: [
    'The chalazion has not improved after 2 months of consistent warm compress treatment',
    'Your baby gets recurrent chalazions on the same or different eyelids',
    'You are concerned the bump may be affecting your baby\'s vision',
  ],
  whenToActNow: [
    'A previously painless bump becomes red, swollen, and painful, suggesting secondary infection',
    'The eyelid swelling spreads to the surrounding skin, your baby has fever, or the bump is large enough to obscure your baby\'s vision',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-stye-on-eyelid',
    'baby-eye-infection-treatment',
    'baby-pediatric-ophthalmologist-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chalazion. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Chalazion.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Chalazion and hordeolum (stye).',
      url: 'https://www.mayoclinic.org/diseases-conditions/sty/symptoms-causes/syc-20378017',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Chalazion Information.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases',
    },
  ],
};
