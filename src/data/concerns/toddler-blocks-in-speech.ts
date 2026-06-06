import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-blocks-in-speech',
  title: 'Toddler Gets Stuck and No Sound Comes Out',
  category: 'communication',
  searchTerms: [
    'toddler blocks in speech',
    'toddler gets stuck talking',
    'toddler no sound comes out',
    'toddler mouth open but can\'t talk',
    'toddler speech blocks',
    'toddler stuck on words',
    'toddler freezes when talking',
    'toddler silent blocks speech',
    'toddler trying to talk nothing comes out',
    'toddler blocked speech sounds',
  ],
  quickAnswer:
    'Speech blocks, where a child opens their mouth to speak but no sound comes out, are a form of stuttering that indicates significant effort and tension in producing speech. Blocks are considered more severe than simple repetitions and suggest your child would benefit from a fluency evaluation with a speech-language pathologist. Early intervention for blocking is important.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'True speech blocks are uncommon at this very early stage of language development. Pauses and hesitations when searching for words are normal. If your toddler seems physically stuck and unable to get sound out, mention this to your pediatrician.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Blocks may appear alongside other disfluencies during this period of rapid language growth. A block looks different from normal hesitation. Your child may appear to be physically struggling, with visible tension in the jaw, lips, or neck. This warrants a fluency evaluation.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Blocks at this age are a sign of more advanced stuttering. Your child may show associated behaviors like facial tension, breath holding, or physical struggle. A speech-language pathologist experienced with fluency disorders should evaluate your child.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Persistent blocks are unlikely to resolve without therapy. Treatment approaches for young children who block include the Lidcombe Program and other family-based interventions. The goal is to reduce physical tension and promote easy, relaxed speech.',
    },
    {
      ageRange: '5-7 years',
      context:
        'Ongoing therapy is important for children who experience blocks. Without treatment, blocks can lead to increasing frustration, avoidance of speaking, and negative feelings about communication. Most children improve significantly with appropriate therapy.',
    },
  ],
  whenNormal: [
    'Your toddler pauses to think of a word but does not show physical struggle or tension',
    'Your toddler hesitates at the start of sentences but sounds come out within a normal time frame',
    'Your toddler occasionally gets stuck but it happens rarely and resolves quickly',
  ],
  whenToMention: [
    'Your toddler opens their mouth to speak and no sound comes out for a noticeable period',
    'You can see physical tension in your toddler\'s face, jaw, or neck when they are stuck',
    'Blocks are occurring multiple times per day and interfering with communication',
  ],
  whenToActNow: [
    'Your toddler is having severe blocks that last several seconds with significant physical struggle',
    'Your toddler is avoiding speaking, showing fear of talking, or becoming very distressed about blocks',
  ],
  relatedMilestones: ['fluency', 'self-confidence', 'language-development', 'social-engagement'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stuttering', 'toddler-stuttering-getting-worse', 'toddler-secondary-behaviors-stuttering'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Stuttering.',
      url: 'https://www.asha.org/public/speech/disorders/stuttering/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stuttering in Toddlers and Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Stuttering-in-Toddlers-Preschoolers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Stuttering.',
      url: 'https://www.nidcd.nih.gov/health/stuttering',
    },
  ],
};
