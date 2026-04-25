import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-screaming-in-sleep',
  title: 'My Baby Screams in Their Sleep',
  category: 'sleep',
  searchTerms: [
    'baby screaming in sleep',
    'baby cries out in sleep but still asleep',
    'newborn screaming at night while sleeping',
    'baby suddenly screams in sleep',
    'infant screaming during sleep not awake',
    'baby shrieks in sleep',
    'why does my baby scream in their sleep',
    'baby yelling in sleep',
    'baby screams then goes back to sleep',
    'baby crying in sleep without waking up',
  ],
  quickAnswer:
    'Babies commonly cry out, scream, or shriek during sleep without fully waking. This usually happens during transitions between sleep cycles or during active REM sleep, when the brain is highly active. It sounds alarming, but in most cases your baby is not in distress and will settle back into deeper sleep within seconds to minutes.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Newborns have immature sleep cycles and spend roughly half their sleep in active REM. During REM sleep, the brain is highly active, and babies may cry out, scream briefly, flail their arms, or make sudden movements without being conscious. These episodes are typically short  -  lasting a few seconds to a minute  -  and the baby returns to quiet sleep on their own. Wait a moment before intervening, because picking up a sleeping baby can actually wake them.',
    },
    {
      ageRange: '4-8 months',
      context:
        'After the 4-month sleep maturation, babies develop more distinct sleep cycles. Brief screams during transitions between cycles are common and do not mean your baby is having a nightmare  -  true dreaming with emotional content is not believed to begin until around age 2. Teething discomfort or minor illness can make these partial arousals louder and more frequent.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Separation anxiety, learning to stand, and other developmental surges can increase partial arousals that include crying or screaming. If your baby screams, appears to still be asleep, and settles within a few minutes, this is a normal partial arousal. If your baby is fully awake and clearly upset, they may need brief reassurance before resettling.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Screaming during sleep in toddlers may be a partial arousal, a nightmare, or a night terror. Nightmares typically happen in the second half of the night, and your toddler will wake up frightened but can be comforted. Night terrors happen in the first third of the night  -  your child screams, may have eyes open, but is unresponsive and will not remember the episode. Both are common and generally outgrown.',
    },
  ],
  whenNormal: [
    'The scream is brief (under 1-2 minutes) and your baby settles back to sleep without intervention',
    'Your baby does not appear to be awake during the episode and seems relaxed afterward',
    'Episodes are occasional and your baby sleeps well overall',
    'Your baby is growing well, eating normally, and developing on track during the day',
  ],
  whenToMention: [
    'Screaming episodes happen multiple times per night and your baby seems overtired during the day',
    'The screaming is accompanied by back arching, pulling at ears, or other signs of pain that persist when your baby wakes',
    'Your baby also snores loudly or has pauses in breathing during sleep',
  ],
  whenToActNow: [
    'Your baby wakes screaming with a high fever, vomiting, a bulging soft spot, or extreme lethargy',
    'Screaming is accompanied by rhythmic jerking movements, stiffening, or eye rolling that could indicate a seizure',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'emotional-regulation',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nightmares and Night Terrors in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Night Terrors. ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/diseases/12133-sleep-terrors-night-terrors',
    },
  ],
};
