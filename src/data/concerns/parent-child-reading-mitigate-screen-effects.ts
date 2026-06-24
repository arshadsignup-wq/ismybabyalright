import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'parent-child-reading-mitigate-screen-effects',
  title: 'Reading to Your Baby - Mitigating Screen Time Effects',
  category: 'behavior',
  searchTerms: [
    'reading to baby benefits',
    'reading vs screen time baby',
    'when to start reading to baby',
    'reading baby brain development',
    'books vs screens toddler',
    'read aloud baby language development',
    'Reach Out and Read',
    'baby reading milestones',
    'reading mitigate screen time effects',
    'shared reading parent child',
    'reading to newborn benefits',
  ],
  quickAnswer:
    'Reading aloud to your baby from birth is one of the most powerful activities for brain development, and research shows it can help mitigate the negative effects of screen exposure. A 2019 study found that shared reading activates brain regions for visual imagery, language processing, and narrative comprehension in ways that screen viewing does not. The AAP recommends reading aloud to children from infancy, as it promotes language development, literacy skills, and parent-child bonding. Even 15 minutes of daily reading provides measurable benefits. Books provide the interactive, back-and-forth exchange that screens cannot replicate.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'It is never too early to read to your baby. Newborns benefit from hearing the rhythm and melody of your voice, which supports language processing circuits in the brain. Choose high-contrast black-and-white books for young babies, then transition to colorful board books. Point at pictures and name them. The goal is not for your baby to understand the words but to experience the warmth of shared attention and the patterns of language. Research shows that babies who are read to from birth hear significantly more words and develop larger vocabularies by age 2.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies begin to interact with books during this period: grabbing, mouthing, turning pages, and pointing at pictures. Choose sturdy board books with simple images and textures. Interactive reading (asking "Where is the dog?" and waiting for the baby to point or vocalize) supports emerging communication skills. Studies show that interactive reading during this period is directly linked to accelerated language development. For every hour of screen time replaced by reading and interactive play, researchers see measurable improvements in language scores.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers can engage in dialogic reading, where the parent asks questions, expands on the child\'s responses, and connects the story to the child\'s experiences. This technique has been shown to accelerate vocabulary growth by 6-12 months compared to passive reading. Reading the same books repeatedly (which toddlers love) reinforces learning and memory. Research from the AAP\'s Reach Out and Read program, which provides books at pediatric well visits, shows that shared reading is associated with larger vocabularies, stronger pre-literacy skills, and improved school readiness, regardless of family income.',
    },
  ],
  whenNormal: [
    'Your baby chews on books, turns pages randomly, or loses interest after a few pages, as all of these are age-appropriate interactions with books.',
    'Your toddler wants to read the same book repeatedly, which is how they learn and process information.',
    'Your child prefers one type of book over another (vehicles, animals, textures), which reflects normal developing interests.',
  ],
  whenToMention: [
    'Your child shows no interest in books by 12-18 months and also seems uninterested in other shared activities.',
    'Your child is not babbling by 9 months or not using any words by 15-18 months, as limited language input (including lack of reading) may be a factor.',
    'You want resources for reading programs or free books for your child.',
  ],
  whenToActNow: [
    'Your child has significant language delays and limited interactive engagement, which may indicate a developmental concern beyond just reading habits.',
    'You are unable to engage your child in any interactive activity (reading, playing, singing) and they seem persistently withdrawn.',
    'Your child\'s screen use has replaced virtually all interactive human engagement and you need support reducing it.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infant-screen-time-brain-development',
    'phone-addiction-parent-baby-bonding',
    'limited-vocabulary',
    'not-babbling-at-9-months',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Reading Aloud to Children: Evidence for the Benefits. Pediatrics, 2014.',
      url: 'https://publications.aap.org/pediatrics/article/134/2/e404/33072/Literacy-Promotion-An-Essential-Component-of',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Home Reading Environment and Brain Activation in Preschool Children Listening to Stories. Pediatrics, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26260716/',
    },
    {
      org: 'Reach Out and Read',
      citation:
        'Reach Out and Read. Evidence and Impact.',
      url: 'https://reachoutandread.org/what-we-do/evidence-impact/',
    },
  ],
};
