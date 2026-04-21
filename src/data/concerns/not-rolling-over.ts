import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-rolling-over',
  title: 'My Baby Isn\'t Rolling Over',
  searchTerms: [
    'baby not rolling over',
    'when do babies roll over',
    'baby won\'t roll',
    'baby hasn\'t rolled at 6 months',
    'baby not rolling over at 5 months',
    'when should baby roll over',
    'baby hates tummy time won\'t roll',
    'baby only rolls one way',
    'delayed rolling',
    'baby not rolling back to tummy',
  ],
  quickAnswer:
    'Most babies roll between 4 and 6 months, but some perfectly healthy babies don\'t roll until later — or skip rolling entirely. If your baby is engaging with you, bearing some weight on their arms during tummy time, and meeting other milestones, this is likely just their own timeline.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Rolling is not expected yet. Some newborns accidentally roll from tummy to back because of head weight, but intentional rolling comes later. Focus on short tummy time sessions and let your baby build neck and arm strength at their own pace.',
    },
    {
      ageRange: '4-5 months',
      context:
        'This is when many babies start rolling, usually tummy to back first. But plenty of babies are still working on it, and that\'s completely fine. You might notice your baby rocking side to side or getting partway over — these are great signs they\'re building toward it.',
    },
    {
      ageRange: '6-7 months',
      context:
        'Most babies are rolling both ways by now, but if yours isn\'t, it\'s worth a conversation with your pediatrician at the next visit — especially if they\'re also not sitting with support or seem to have low muscle tone. Many babies who are late rollers are simply more interested in other skills.',
    },
    {
      ageRange: '8-9 months',
      context:
        'If your baby still isn\'t rolling by 8 months and also isn\'t sitting independently, it\'s a good idea to talk to your doctor sooner rather than later. Rolling alone isn\'t everything, but the combination of motor delays is worth evaluating. Many babies who get support at this stage catch up quickly.',
    },
    {
      ageRange: '10+ months',
      context:
        'Some babies genuinely skip rolling and go straight to sitting and crawling. If your baby is mobile in other ways and meeting other milestones, the skipping itself may be fine. But if there\'s a pattern of delayed motor skills, an evaluation can help figure out if there\'s anything to address.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and making progress with head control and tummy time, even if they haven\'t rolled yet.',
    'Your baby rolls one direction but not the other — a preference for one side is very common and usually resolves on its own.',
    'Your baby was premature — adjusted age is what matters for milestones, not calendar age.',
    'Your baby seems close to rolling (rocking, getting partway over) but hasn\'t fully done it yet.',
    'Your baby skipped rolling but is sitting, scooting, or crawling — some babies just move on to the next thing.',
  ],
  whenToMention: [
    'Your baby is over 6 months and hasn\'t rolled in either direction, especially if they also have difficulty with tummy time or sitting.',
    'Your baby seems stiff or very floppy when you hold them — this can affect rolling readiness.',
    'Your baby consistently favors one side of their body and seems unable (not just unwilling) to use the other side.',
    'Your baby was meeting milestones on track but seems to have stalled across several areas.',
  ],
  whenToActNow: [
    'Your baby has lost the ability to roll after previously doing it consistently — any loss of a previously acquired skill warrants prompt evaluation.',
    'Your baby seems unable to move one side of their body, or you notice a sudden change in their muscle tone or alertness.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-rolling',
    'gross-motor-sitting',
    'gross-motor-tummy-time',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker — Important Milestones: Your Baby By Six Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Movement Milestones: Birth to 1 Year',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Windows of Achievement for Six Gross Motor Milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
