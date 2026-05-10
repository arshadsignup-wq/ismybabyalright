import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infantile-glaucoma-signs',
  title: 'Infantile Glaucoma Signs',
  category: 'medical',
  searchTerms: [
    'infantile glaucoma baby',
    'congenital glaucoma signs',
    'baby eye pressure high',
    'baby eye looks bigger',
    'enlarged eye baby',
    'cloudy cornea baby',
    'baby sensitive to light glaucoma',
    'buphthalmos baby',
    'pediatric glaucoma symptoms',
  ],
  quickAnswer:
    'Infantile glaucoma (also called congenital glaucoma or buphthalmos) is a rare but serious condition where increased pressure inside the eye damages the optic nerve. It occurs in approximately 1 in 10,000-20,000 births. The classic signs are excessive tearing, light sensitivity (photophobia), and a cloudy or enlarged cornea. Unlike adult glaucoma, infantile glaucoma causes the eye to enlarge because the infant eye is more elastic. This is a medical urgency requiring prompt surgical treatment to preserve vision.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'About 80% of congenital glaucoma cases present within the first year of life, with many evident at birth or within the first few months. The earliest signs are often excessive tearing, light sensitivity (the baby squints or buries their face in bright light), and a hazy or cloudy cornea. One or both eyes may appear larger than normal. If you notice any of these signs, seek immediate evaluation by a pediatric ophthalmologist.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As glaucoma progresses, the eye continues to enlarge (buphthalmos), the cornea becomes increasingly cloudy, and the baby may show poor visual behavior. Increased tearing and photophobia persist. The condition may initially be misdiagnosed as a blocked tear duct because of the tearing. However, the combination of tearing with light sensitivity and a cloudy or large cornea distinguishes glaucoma from a simple blocked duct.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Treatment for infantile glaucoma is primarily surgical (goniotomy or trabeculotomy), and the success rate is highest with early intervention. If your baby has been diagnosed and treated, regular follow-up eye exams under anesthesia are needed to monitor eye pressure and visual development. Many children require lifelong monitoring.',
    },
    {
      ageRange: '12 months+',
      context:
        'Some forms of pediatric glaucoma can develop later in infancy or toddlerhood (juvenile glaucoma). Late-presenting signs may be more subtle and include gradual vision changes, eye enlargement, or corneal clouding. Children with a history of congenital glaucoma need regular, long-term follow-up. Additional surgeries or medication may be needed to control eye pressure.',
    },
  ],
  whenNormal: [
    'Your baby has mild tearing without light sensitivity or corneal clouding, which is more likely a blocked tear duct',
    'Both eyes are the same size and the corneas appear clear and bright',
    'Your baby is comfortable in normal lighting and does not excessively avoid light',
    'Eye exams at well-child visits have been normal',
  ],
  whenToMention: [
    'You notice that one eye appears slightly larger than the other',
    'Your baby seems unusually sensitive to light compared to other babies',
    'Persistent tearing is accompanied by your baby frequently squinting or closing their eyes',
  ],
  whenToActNow: [
    'Your baby has a cloudy or hazy cornea in one or both eyes, which is a hallmark sign of infantile glaucoma requiring emergency ophthalmologic evaluation',
    'One eye is noticeably larger than the other with excessive tearing and light sensitivity, which strongly suggests elevated eye pressure from glaucoma and needs urgent treatment to prevent permanent vision loss',
  ],
  relatedMilestones: [
    'visual-tracking',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Childhood Glaucoma.',
      url: 'https://aapos.org/glossary/glaucoma',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Childhood Glaucoma.',
      url: 'https://www.aao.org/eye-health/diseases/glaucoma-children',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Glaucoma in Children.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma',
    },
  ],
};
