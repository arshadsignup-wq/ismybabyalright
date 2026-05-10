import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'down-syndrome-baby-development',
  title: 'Down Syndrome Baby Development',
  category: 'medical',
  searchTerms: [
    'down syndrome baby development',
    'trisomy 21 baby milestones',
    'down syndrome infant signs',
    'baby low muscle tone flat face',
    'down syndrome developmental milestones',
    'baby with down syndrome early intervention',
    'down syndrome baby growth',
    'when do down syndrome babies sit up walk talk',
  ],
  quickAnswer:
    'Down syndrome (trisomy 21) is the most common chromosomal condition, affecting about 1 in 700 babies. Children with Down syndrome typically reach all developmental milestones — sitting, walking, talking — but on their own timeline, which is often later than typical peers. With early intervention, supportive therapies, and appropriate medical care, children with Down syndrome lead fulfilling, active lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Down syndrome is usually diagnosed at birth or prenatally. Newborns may have characteristic features including low muscle tone (hypotonia), a flat facial profile, upward-slanting eyes, a single palmar crease, and small ears. Medical evaluation for associated conditions — especially congenital heart defects (present in about 50% of babies with Down syndrome), hearing problems, and thyroid issues — begins immediately. Early intervention referrals should be made soon after diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with Down syndrome typically develop strong social skills — smiling, cooing, and engaging with caregivers. Low muscle tone may make head control and rolling over take longer. Physical therapy helps strengthen muscles and support motor development. Feeding may require extra support due to low tone. Most babies with Down syndrome are joyful and responsive to interaction.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental progress continues at an individual pace. Many babies with Down syndrome sit independently between 6-11 months (compared to 5-9 months typically). Babbling and gesture-based communication develop, and some babies begin using sign language. Occupational therapy helps with fine motor skills. Regular medical monitoring for hearing, vision, and thyroid function continues.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with Down syndrome typically walk between 15 and 36 months. Speech-language therapy supports communication development — many toddlers benefit from sign language or picture communication as a bridge to spoken words. Cognitive development varies widely; many children with Down syndrome participate successfully in inclusive educational settings. Ongoing early intervention makes a significant positive difference in long-term outcomes.',
    },
  ],
  whenNormal: [
    'Your baby with Down syndrome is progressing through milestones at their own pace with support from early intervention',
    'Your baby is social, responsive, and engaged even if motor milestones come later than typical',
    'Your baby has low muscle tone but is slowly gaining strength and motor skills',
    'Your baby is feeding well, gaining weight, and generally healthy between medical visits',
  ],
  whenToMention: [
    'Your baby with Down syndrome seems to be losing skills they previously had (regression is not typical of Down syndrome and should be evaluated)',
    'Your baby is having difficulty feeding, is not gaining weight, or seems excessively sleepy',
    'You have concerns about your baby\'s hearing or vision that have not yet been evaluated',
  ],
  whenToActNow: [
    'Your baby shows signs of breathing difficulty, blue or gray color, or poor feeding that could indicate a heart problem',
    'Your baby has sudden neck pain, weakness, or changes in walking/coordination — children with Down syndrome are at risk for atlantoaxial instability',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Down Syndrome. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/birthdefects/downsyndrome.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Health Supervision for Children and Adolescents With Down Syndrome. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/149/5/e2022057010/186853/Health-Supervision-for-Children-and-Adolescents',
    },
  ],
};
