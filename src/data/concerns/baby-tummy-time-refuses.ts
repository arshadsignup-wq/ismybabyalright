import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-tummy-time-refuses',
  title: 'Baby Refuses Tummy Time',
  category: 'physical',
  searchTerms: [
    'baby hates tummy time',
    'baby cries during tummy time',
    'baby refuses tummy time',
    'baby screams on stomach',
    'tummy time alternatives',
    'baby won\'t do tummy time',
    'how to make tummy time easier',
    'baby hates being on belly',
    'tummy time tips fussy baby',
    'tummy time without crying',
  ],
  quickAnswer:
    'Many babies dislike tummy time initially because it is hard work for muscles that are still developing. This is very common and does not mean something is wrong. Try alternative positions like tummy-to-chest on a parent, carrying the baby in a "football hold," shorter but more frequent sessions, and placing engaging toys at eye level. If your baby has persistent, extreme distress during tummy time that does not improve with practice, mention it to your pediatrician to rule out reflux or other discomfort.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Fussing during tummy time is very normal at this age. Your baby\'s neck muscles are weak and holding up their head is genuinely effortful. Start with very short sessions (30 seconds to 2 minutes) multiple times per day. Tummy time on your chest while you recline counts and is often better tolerated because your baby can see your face and feel your warmth. The "football hold" (carrying baby face-down along your forearm) also counts. Try tummy time after a diaper change when the baby is already on their back - simply roll them over briefly.',
    },
    {
      ageRange: '2-4 months',
      context:
        'As neck strength improves, most babies begin tolerating tummy time better. Get down on the floor at your baby\'s eye level to encourage engagement. Use a baby-safe mirror, high-contrast toys, or crinkle toys placed in front of them. A small rolled towel or nursing pillow under the chest can make the position more comfortable. Try tummy time on different surfaces (play mat, firm bed with supervision). Many babies tolerate tummy time better when it is part of a routine rather than random placement. If your baby still has extreme distress, consider whether reflux might be contributing.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 4 months, most babies who initially disliked tummy time are tolerating it much better. If your baby still hates it, try making it more interactive: play peek-a-boo, read books, or have siblings play nearby. Tummy time on your lap while you pat their back is another option. Place toys just out of reach to encourage reaching and early pre-crawling movements. Once your baby starts rolling (usually 4-5 months), they will naturally spend more time on their tummy by choice. If refusal is still extreme at this age, discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby fusses during tummy time but calms when picked up or repositioned.',
    'Tummy time tolerance is gradually increasing over days and weeks.',
    'Your baby tolerates tummy time better on your chest than on the floor.',
  ],
  whenToMention: [
    'Your baby screams inconsolably every time they are placed on their tummy with no improvement over several weeks.',
    'Your baby seems to be in pain (not just frustrated) during tummy time, especially after feeding.',
    'Your baby is not developing head control despite regular tummy time attempts by 3-4 months.',
  ],
  whenToActNow: [
    'Your baby has no head control at all by 4 months and extreme aversion to tummy time.',
    'Your baby always arches backward and cannot tolerate being on their stomach, which could indicate neurological concerns.',
    'Your baby falls asleep during tummy time - always return them to their back on a safe sleep surface immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-tummy-time-how-long', 'flat-head', 'not-sitting-up', 'baby-reflux-formula-thickened'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Tummy Time Tips. Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk/tummytime',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Important Milestones: Your Baby by Two Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html',
    },
  ],
};
