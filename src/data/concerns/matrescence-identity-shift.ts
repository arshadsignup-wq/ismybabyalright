import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'matrescence-identity-shift',
  title: 'I Don\'t Know Who I Am Anymore After Having a Baby',
  category: 'maternal',
  searchTerms: [
    'lost identity after baby',
    'matrescence',
    'who am I after becoming a mother',
    'lost myself after having baby',
    'identity crisis new mom',
    'miss my old life before baby',
    'motherhood identity loss',
    'feel like a different person after baby',
    'grieving old life new mom',
    'mom is my only identity',
  ],
  quickAnswer:
    'What you are feeling has a name: matrescence — the developmental transition into motherhood, comparable in scope to adolescence. It is not a disorder and it does not mean something is wrong with you. Becoming a parent reshapes your identity, priorities, relationships, and sense of self. It is completely normal to grieve your pre-baby life while also loving your child. Most mothers report feeling a clearer sense of their new identity by 12-18 months postpartum.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The early weeks are often the most disorienting. You may feel like a stranger in your own life — your body is different, your schedule is unrecognizable, your relationships have shifted, and the things that used to define you (career, hobbies, social life) may feel impossibly distant. This is not selfishness or ingratitude. It is the psychological equivalent of a caterpillar becoming a butterfly — messy, confusing, and necessary.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As the immediate survival fog lifts, many mothers begin to feel the identity loss more acutely. You may miss your job, your independence, your uninterrupted conversations, your body. You may feel guilty for missing these things while also fiercely loving your baby. Both feelings are valid and can coexist. This is a time to be compassionate with yourself and to seek connection with other parents who understand.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Many mothers begin to find a new equilibrium during this period. You start to integrate your pre-baby self with your parent self. Small returns to activities you enjoyed, adult conversations, and rediscovering your own needs alongside your baby\'s can help. If you are still feeling deeply lost or disconnected from yourself, talking to a therapist who specializes in perinatal mental health can be profoundly helpful.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most mothers report that their sense of self becomes clearer after the first year, though the person you become is not the same person you were before. This is not a loss — it is a transformation. If you continue to feel disconnected, resentful, or empty about your identity as a parent well past the first year, it is worth exploring whether underlying depression or anxiety may be contributing.',
    },
  ],
  whenNormal: [
    'You miss your pre-baby life, hobbies, career, or freedom — this is a normal part of adjusting to parenthood',
    'You love your baby but do not always enjoy the day-to-day reality of caregiving',
    'You feel like "just a mom" and want to reclaim parts of your identity',
    'You experience waves of grief alongside waves of joy about your new life',
    'You feel guilty for wanting time alone or for not being "grateful enough"',
  ],
  whenToMention: [
    'The feelings of identity loss are persistent and interfere with your ability to enjoy any part of your life',
    'You feel emotionally numb or disconnected from your baby as well as from yourself',
    'You are withdrawing from relationships, activities, and responsibilities beyond what can be explained by new-parent exhaustion',
  ],
  whenToActNow: [
    'You feel hopeless about the future or believe your family would be better off without you — call 988 (Suicide and Crisis Lifeline) or the Postpartum Support International helpline at 1-800-944-4773',
    'You are unable to care for yourself or your baby due to the depth of your emotional distress',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-rage-anger',
    'parental-burnout-signs',
    'loneliness-isolation-new-parent',
    'guilt-returning-to-work',
  ],
  sources: [
    {
      org: 'APA',
      citation:
        'American Psychological Association. The Birth of a Mother: Matrescence.',
      url: 'https://www.apa.org/topics/women-girls/postpartum-depression',
    },
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. Perinatal Mood and Anxiety Disorders.',
      url: 'https://www.postpartum.net/learn-more/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Matrescence: The Developmental Process of Becoming a Mother. Journal of Reproductive and Infant Psychology, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33615935/',
    },
  ],
};
