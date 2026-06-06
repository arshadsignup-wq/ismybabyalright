import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-alopecia-areata',
  title: 'Alopecia Areata in Babies',
  category: 'skin',
  searchTerms: [
    'baby alopecia areata',
    'baby autoimmune hair loss',
    'infant alopecia',
    'baby round bald patch smooth',
    'toddler alopecia areata',
    'baby hair loss no regrowth',
    'alopecia areata child',
    'baby sudden bald spot',
    'baby hair loss smooth patch',
    'alopecia areata toddler treatment',
  ],
  quickAnswer:
    'Alopecia areata is an autoimmune condition where the immune system attacks hair follicles, causing round, smooth patches of hair loss. While uncommon in babies, it can occur at any age. The condition is not painful or contagious. Many children experience spontaneous hair regrowth, though it may take months. Your pediatrician or dermatologist can confirm the diagnosis.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Alopecia areata is very rare at this age. Any hair loss in newborns is more likely due to normal shedding or positional friction. If a smooth, round bald patch is present at birth or appears very early, your pediatrician should evaluate it.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a well-defined smooth bald patch appears that is different from typical friction-related hair loss, have your pediatrician evaluate it. Alopecia areata patches are smooth without any scaling, redness, or broken hairs, which distinguishes them from fungal infections.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Alopecia areata can begin to appear at this age. The patches are typically round, smooth, and skin-colored. There may be one or a few patches. Your pediatrician may refer to a dermatologist for confirmation. In many children, the hair regrows within 6 to 12 months without treatment.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with alopecia areata may have one or multiple patches. Treatment options exist but are often not recommended in very young children because spontaneous regrowth is common. Topical steroids may be tried for persistent patches. Emotional support and reassurance are important, as the condition can be distressing for parents.',
    },
  ],
  whenNormal: [
    'There is no truly "normal" presentation of alopecia areata, but it is a benign condition that often resolves on its own in children',
  ],
  whenToMention: [
    'A smooth, round bald patch appears on your baby\'s scalp',
    'You notice eyebrow or eyelash thinning along with scalp hair loss',
    'You want to discuss whether treatment is appropriate',
  ],
  whenToActNow: [
    'Sudden, widespread hair loss all over the scalp',
    'Hair loss accompanied by skin changes, fatigue, weight loss, or other concerning symptoms that could suggest an underlying condition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Alopecia Areata: Overview.',
      url: 'https://www.aad.org/public/diseases/hair-loss/types/alopecia-areata',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Alopecia Areata.',
      url: 'https://www.niams.nih.gov/health-topics/alopecia-areata',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hair Loss in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hair-Loss.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-hair-loss-patches', 'baby-vitiligo-signs'],
};
