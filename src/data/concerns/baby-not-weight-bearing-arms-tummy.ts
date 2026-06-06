import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-weight-bearing-arms-tummy',
  title: 'My Baby Won\'t Push Up on Arms During Tummy Time',
  category: 'physical',
  searchTerms: [
    'baby not pushing up tummy time',
    'baby won\'t bear weight on arms',
    'baby can\'t push up on tummy',
    'baby arms weak tummy time',
    'baby face down won\'t lift',
    'baby not propping on arms',
    'tummy time no arm push up',
    'baby flat on tummy won\'t push',
    'baby arm strength tummy time',
    'baby not lifting chest tummy time',
  ],
  quickAnswer:
    'Pushing up on arms during tummy time is an important milestone that typically develops between 2-4 months. This skill builds upper body strength needed for rolling, sitting, and crawling. If your baby is not pushing up by 4 months, mention it to your pediatrician. Many babies just need more tummy time practice.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'At this age, your baby may only briefly lift their head during tummy time, and that is normal. Pushing up on arms comes later. Short periods of tummy time several times a day help build the strength needed for this milestone. Even a few minutes at a time counts.',
    },
    {
      ageRange: '2-4 months',
      context:
        'Most babies begin pushing up on their forearms (mini push-up position) around 2-3 months and progress to pushing up on straight arms by 4 months. If your baby is not pushing up on forearms by 3 months, increase tummy time and try placing a rolled towel under their chest for support. If there is no progress by 4 months, mention it to your doctor.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 4-6 months, your baby should be able to push up on extended arms and look around during tummy time. If your baby still cannot push up on their forearms, this warrants evaluation. Low muscle tone, upper body weakness, or other factors may be contributing and can often be addressed with physical therapy.',
    },
    {
      ageRange: '6-9 months',
      context:
        'If your baby is not bearing weight through their arms by this age, a physical therapy evaluation is important. Weight bearing through arms is essential for crawling and protective reflexes when falling. Early intervention can significantly help build this strength.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and is starting to lift their head during tummy time.',
    'Your baby pushes up briefly but tires quickly.',
    'Your baby was premature and is on track for their adjusted age.',
    'Your baby dislikes tummy time but can push up when motivated by a toy.',
  ],
  whenToMention: [
    'Your baby is over 4 months and cannot push up on forearms during tummy time.',
    'Your baby\'s arms seem floppy or weak.',
    'Your baby shows no interest in weight bearing through their arms.',
  ],
  whenToActNow: [
    'Your baby was pushing up and has lost this ability.',
    'Your baby seems to have increasing weakness or floppiness.',
  ],
  relatedMilestones: [
    'gross-motor-tummy-time',
    'gross-motor-rolling',
    'gross-motor-crawling',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-pushing-up-on-tummy', 'low-muscle-tone', 'baby-head-control-delayed'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Back to Sleep, Tummy to Play',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 4 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'NIH',
      citation: 'Kuo YL, et al. Relationship Between Tummy Time and Achievement of Motor Milestones. J Pediatr. 2008',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
