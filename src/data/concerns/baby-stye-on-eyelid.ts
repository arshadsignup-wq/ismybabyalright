import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stye-on-eyelid',
  title: 'My Baby Has a Stye on Their Eyelid',
  category: 'medical',
  searchTerms: [
    'baby stye eyelid',
    'baby stye treatment',
    'stye on baby eye',
    'baby bump on eyelid',
    'baby eyelid red bump',
    'hordeolum baby',
    'baby stye home treatment',
    'baby stye warm compress',
    'baby stye how long',
    'baby stye won\'t go away',
  ],
  quickAnswer:
    'A stye (hordeolum) is a small, painful red bump on the eyelid caused by a bacterial infection of an oil gland or hair follicle. Styes are common in children and usually resolve within 1-2 weeks. Treatment involves applying a warm compress for 5-10 minutes, 3-4 times a day, to help the stye drain naturally. Do not squeeze or pop a stye. If it does not improve within 2 weeks or gets larger, see your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Styes are uncommon in very young babies. An eyelid bump in a newborn may be something else (such as a blocked meibomian gland or dacryocystocele) and should be evaluated by your pediatrician. If your young baby has eyelid swelling with redness, seek medical evaluation to ensure it is not a more serious infection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby develops a small red bump on the eyelid that looks like a pimple, it is likely a stye. Apply a warm, damp washcloth to the closed eyelid for 5-10 minutes, 3-4 times daily. The warmth helps the blocked gland open and drain. Wash your hands before and after treatment. The stye should begin to improve within a few days.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Styes become more common as babies explore and may rub their eyes with hands that have been touching surfaces. The best treatment remains warm compresses. If your baby resists the compress, try applying it while they are feeding or sleeping. Keep the area clean but do not try to squeeze or pop the stye.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who frequently rub their eyes may be more prone to styes. Encourage hand washing and discourage eye rubbing. If styes recur frequently, your pediatrician may recommend daily eyelid hygiene with baby shampoo diluted in warm water, applied to the eyelids with a cotton ball.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If a stye does not resolve after 2 weeks and hardens into a painless bump, it may have become a chalazion, which takes longer to resolve and may need different treatment. Frequent styes in an older toddler may indicate a tendency toward blepharitis (eyelid inflammation) that benefits from ongoing eyelid hygiene.',
    },
  ],
  whenNormal: [
    'A small red bump on the eyelid that is mildly tender and begins to improve with warm compresses within a few days',
    'The stye comes to a head and drains on its own within 1-2 weeks',
    'The white part of the eye and vision are unaffected',
  ],
  whenToMention: [
    'The stye has not improved after 2 weeks of warm compress treatment',
    'Your baby gets frequent styes',
    'The stye has become a painless hard bump that is not resolving (possible chalazion)',
  ],
  whenToActNow: [
    'The eyelid swelling is severe and spreading to the surrounding face, or your baby has fever with eyelid swelling',
    'Your baby cannot open the eye, the white of the eye is very red, or you notice changes in your baby\'s vision or eye movement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-chalazion-eyelid-bump',
    'baby-eye-infection-treatment',
    'baby-swollen-eye',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stye (Hordeolum). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Stye.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Sty (hordeolum): Diagnosis and treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/sty/diagnosis-treatment/drc-20378022',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Stye.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/stye',
    },
  ],
};
