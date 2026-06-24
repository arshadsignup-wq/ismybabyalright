import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-first-haircut-when',
  title: 'When Should My Baby Get Their First Haircut?',
  category: 'physical',
  searchTerms: [
    'baby first haircut when',
    'when to cut baby hair',
    'baby first haircut age',
    'toddler first haircut tips',
    'baby hair cutting safe',
    'does cutting baby hair make it thicker',
    'shaving baby head myth',
    'baby hair in eyes',
    'when to trim baby hair',
    'baby haircut scared crying',
  ],
  quickAnswer:
    'There is no set age for a baby\'s first haircut - it depends entirely on how much hair your baby has and whether it is causing any practical issues. Some babies need a trim as early as 8-12 months if hair is getting in their eyes, while others may not need one until age 2 or later. Cutting or shaving a baby\'s hair does not make it grow back thicker or faster - this is a myth. The timing is purely a personal and practical decision.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Most babies do not need a haircut at this age. Some babies are born with a full head of hair while others are nearly bald, and both are completely normal. Many babies lose their birth hair in the first few months (telogen effluvium) and grow new hair that may be a different color or texture. This shedding is normal and not a cause for concern. If your baby has a cradle cap, gentle brushing during bath time is appropriate, but cutting hair is not necessary for this condition.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Some babies with fast-growing hair may benefit from their first trim during this period, especially if hair is falling in their eyes or is very uneven. If you trim at home, use blunt-tipped scissors, do it when your baby is calm or sleepy (after a feed works well), and have another adult help distract and hold the baby. It is perfectly fine to just use clips or a gentle headband to keep hair out of the eyes instead of cutting. There is no developmental or health reason to cut your baby\'s hair at any particular age.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Many families choose this age range for the first professional haircut. Tips for making it less stressful: go to a salon that specializes in children\'s haircuts if possible, bring your child during a well-rested, fed time, let them sit in your lap, bring a favorite toy or screen for distraction, and keep the first cut simple and quick. If your toddler is very frightened, there is no harm in waiting or doing a simple trim at home. Some cultural and religious traditions have specific timing for first haircuts, which is a personal family decision.',
    },
  ],
  whenNormal: [
    'Your baby has very little hair and does not need a haircut at their first birthday - hair growth varies enormously.',
    'Your baby\'s birth hair fell out and grew back a different color or texture.',
    'Your toddler is nervous about their first haircut - this is extremely common.',
    'You prefer to trim your baby\'s hair at home rather than going to a salon.',
  ],
  whenToMention: [
    'Your baby has significantly uneven hair growth or bald patches that do not seem to be filling in.',
    'You notice your baby is pulling at their own hair frequently (hair pulling can sometimes indicate stress or become a habit).',
    'Your baby has a persistent scalp condition (such as severe cradle cap or fungal infection) that is not improving with home care.',
  ],
  whenToActNow: [
    'Your baby has sudden, significant hair loss in patches (alopecia) that is not normal newborn shedding.',
    'Your baby has a scalp wound, cut, or infection from a haircut attempt - clean the wound and seek medical attention if bleeding does not stop or signs of infection develop.',
    'Your baby\'s hair is severely tangled or matted to the point of causing scalp pain or skin breakdown.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-birthmark-concern',
    'baby-body-temperature-regulation',
    'baby-first-birthday-milestones-review',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hair Care for Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Hair-Care.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Hair Growth and Disorders in Children. Pediatric Dermatology, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28295731/',
    },
  ],
};
