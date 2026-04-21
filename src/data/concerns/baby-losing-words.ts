import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-losing-words',
  title: 'My Baby Is Losing Words or Skills',
  searchTerms: [
    'baby losing words',
    'toddler stopped talking',
    'baby regression',
    'toddler lost words',
    'baby stopped saying words they used to say',
    'speech regression toddler',
    'baby losing skills',
    'developmental regression',
    'toddler regression language',
    'baby used to talk now stopped',
  ],
  quickAnswer:
    'If your child was consistently using words and has truly stopped, this is something to act on promptly. Regression — the genuine loss of skills a child previously had — is different from a normal plateau or a toddler being too busy to talk, and it always warrants a conversation with your pediatrician sooner rather than later.',
  byAge: [
    {
      ageRange: '12-15 months',
      context:
        'It\'s common for babies this age to say a word a few times and then seem to "drop" it. In many cases, this isn\'t true regression — your baby may have been experimenting with the word and moved on, or they may be working hard on a motor skill and temporarily putting language on the back burner. True regression would mean your baby was using several words consistently and meaningfully and has stopped using all of them. If you\'re unsure which category your baby falls into, your pediatrician can help sort it out.',
    },
    {
      ageRange: '16-18 months',
      context:
        'If your toddler had a vocabulary of several words and has stopped using them — not just using them less, but truly stopped — please reach out to your pediatrician. At this age, language should be growing, not shrinking. It may be something simple (like a prolonged ear infection affecting hearing), or it may be something that benefits from early evaluation. Either way, getting answers early is always better.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is the age range where regression is most commonly noticed by parents. If your toddler is losing words, losing social engagement (less eye contact, less interest in people), or losing gestures they previously used, contact your pediatrician promptly. A comprehensive developmental evaluation, including a hearing test, is the right next step. You know your child best, and if something feels different, trust that instinct.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Loss of language or social skills at this age should always be evaluated. This is true even if the loss seems gradual. Talk to your pediatrician about a referral for a developmental evaluation and, if applicable, an audiology assessment. Early intervention services are available and effective, and there\'s no downside to getting evaluated — only peace of mind or a head start on support.',
    },
  ],
  whenNormal: [
    'Your baby said a word a few times and then seemed to forget it — this is common and usually represents experimentation rather than regression, especially if they\'re picking up other new skills.',
    'Your toddler is talking less during a period of intense motor development (learning to walk, for example) — some children temporarily focus their energy on one area at a time and bounce back.',
    'Your child is using different words than before but the total number is stable or growing — swapping words is normal, losing them is different.',
    'Your toddler is going through a normal developmental phase of asserting independence and may be choosing not to perform on demand — "won\'t" is different from "can\'t."',
  ],
  whenToMention: [
    'Your child seems to have a smaller vocabulary than they did a month or two ago, and you\'re not sure if it\'s true loss or normal fluctuation — your pediatrician can help distinguish the two.',
    'Your child is talking less and also seems less socially engaged — fewer smiles at people, less eye contact, less interest in interactive games.',
  ],
  whenToActNow: [
    'Your child has clearly and consistently lost words they were previously using meaningfully — for example, they used to say "mama," "ball," and "dog" and no longer say any of them. Call your pediatrician this week.',
    'Your child has lost language and social skills — they\'re not just talking less but also making less eye contact, pointing less, and seeming less connected to people. Request a developmental evaluation promptly.',
    'Your child has lost motor skills they previously had (could walk and now can\'t, could sit and now falls) — loss of motor skills can indicate a neurological issue and should be evaluated urgently.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'social-emotional-joint-attention',
    'social-emotional-eye-contact',
    'social-emotional-responds-to-name',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC — If You\'re Concerned: Act Early — Loss of skills at any age should be discussed with a healthcare provider',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Identification, Evaluation, and Management of Children With Autism Spectrum Disorder (Clinical Report 2020)',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Understanding Regression in Autism Spectrum Disorder',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx',
    },
  ],
};
