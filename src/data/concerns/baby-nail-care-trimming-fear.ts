import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nail-care-trimming-fear',
  title: 'How to Trim My Baby\'s Nails Without Fear',
  category: 'physical',
  searchTerms: [
    'baby nail trimming tips',
    'afraid to cut baby nails',
    'baby nail care',
    'how to cut newborn nails',
    'baby nail file vs clipper',
    'baby scratching face nails',
    'baby nail trimming while sleeping',
    'cut baby nail too short',
    'baby fingernail care',
    'baby nail clippers best',
    'baby toenail trimming',
  ],
  quickAnswer:
    'Trimming a baby\'s nails can feel intimidating, but it is an important part of care to prevent scratching. Baby nails grow quickly and are surprisingly sharp. The safest approaches include using a baby nail file or emery board, baby-specific rounded-tip scissors or clippers, or gently peeling soft newborn nails. Trimming during sleep or while breastfeeding is often easiest. If you accidentally nick the skin, apply gentle pressure with a clean cloth — it will heal quickly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn nails are very thin, soft, and grow rapidly. Many parents are nervous about trimming tiny nails, but babies can scratch their faces significantly if nails are not maintained. For the first few weeks, you may be able to gently peel or bite off the soft nail tips. After that, use a baby nail file (glass nail files work well) or baby nail scissors with rounded tips. Trim nails while your baby is sleeping or nursing for the least resistance. Press the finger pad gently away from the nail before clipping to avoid nicking the skin. Do not use mittens as a long-term solution — babies need to use their hands for sensory development.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Nails become slightly thicker and easier to trim but still require care. Baby nail clippers with magnifying glasses or built-in lights can make the task easier. Aim to trim fingernails 1-2 times per week and toenails about once a week. Cut fingernails following the natural curve of the fingertip, and cut toenails straight across to prevent ingrown nails. If your baby squirms and makes trimming difficult, try having another adult hold them, distract them with a toy or video, or wait until they are deeply asleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active and resistant to nail trimming, distraction becomes increasingly important. Some parents trim one or two nails at a time rather than doing all ten at once. Electric baby nail files with gentle buffing pads are available and can feel less scary than clippers. If you accidentally cut the skin and draw blood, do not panic — clean the area, apply gentle pressure with a clean cloth, and the small nick will heal quickly. Do not apply a bandage to an infant\'s finger as it is a choking hazard if it comes off. Ingrown toenails can occasionally occur and may need your pediatrician\'s attention if they become red and swollen.',
    },
  ],
  whenNormal: [
    'Your baby\'s nails grow quickly and need trimming 1-2 times per week.',
    'Your baby squirms during nail trimming — this is normal and expected.',
    'You accidentally nick the skin slightly and it bleeds a tiny amount but stops quickly with pressure.',
  ],
  whenToMention: [
    'Your baby has an ingrown nail that is causing redness, swelling, or pain.',
    'Your baby\'s nails are unusually thick, ridged, discolored, or growing abnormally.',
    'You notice that your baby\'s nails are very thin, brittle, or peel easily, which could indicate a nutritional deficiency.',
  ],
  whenToActNow: [
    'An ingrown nail has become infected: the area is very red, swollen, warm, draining pus, or your baby has a fever — see your pediatrician.',
    'You have cut the nail significantly and bleeding does not stop after 10 minutes of sustained pressure — seek medical attention.',
    'Your baby has a nail that is partially torn or ripped and the nail bed appears significantly damaged — consult your pediatrician.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-grasp-reflex-weak', 'baby-lice-prevention-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Nail Care for Newborns',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Nail-Care.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Newborn Care: How to Trim Baby Nails',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/expert-answers/baby-nails/faq-20058"; ',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service — How to Cut Your Baby\'s Nails',
      url: 'https://www.nhs.uk/conditions/baby/caring-for-a-newborn/how-to-trim-baby-nails/',
    },
  ],
};
