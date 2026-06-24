import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fighting-bedtime-every-night',
  title: 'My Baby Fights Bedtime Every Night',
  category: 'sleep',
  searchTerms: [
    'baby fights bedtime',
    'baby screams at bedtime',
    'baby won\'t go to sleep',
    'toddler refuses bedtime',
    'bedtime battle baby',
    'baby cries hysterically at bedtime',
    'baby overtired won\'t sleep',
    'toddler fighting sleep every night',
    'bedtime routine not working',
    'baby resists sleep',
  ],
  quickAnswer:
    'Fighting bedtime is extremely common and is rarely a sign of a sleep disorder. The most common cause is an incorrect bedtime - either too early (not enough sleep pressure built up) or too late (overtired baby whose cortisol has kicked in). Other common causes include developmental milestones, separation anxiety, an overstimulating bedtime routine, or environmental factors. A consistent, calm bedtime routine timed to your baby\'s natural sleep window is the most effective solution.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Very young babies often have a "witching hour" in the evenings where they are extremely fussy and seem impossible to put to sleep. This is developmentally normal and usually peaks around 6-8 weeks. At this age, bedtime battles are less about resistance and more about an immature circadian rhythm. Help your baby distinguish day from night: keep daytime bright and active, evenings dim and calm. Bedtime typically falls late (8-10 PM) in the first few months and gradually moves earlier as the circadian rhythm develops.',
    },
    {
      ageRange: '4-12 months',
      context:
        'This is when true bedtime resistance often begins, frequently related to sleep associations. If your baby needs to be rocked, nursed, or held to fall asleep, they may protest the transition to the crib. Watch for your baby\'s sleepy cues (eye rubbing, yawning, fussiness) and aim to start the bedtime routine 30 minutes before the ideal sleep time. An ideal bedtime for this age is usually between 6:30-7:30 PM. If your baby is fighting sleep, consider adjusting the last wake window - too short and they are not tired enough, too long and they are overtired.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers fight bedtime for new reasons: desire for autonomy, FOMO (fear of missing out), and the ability to stall with requests for water, stories, or bathroom trips. Set clear, consistent limits while keeping the bedtime routine warm and connected. Offering limited choices within the routine ("Do you want the blue pajamas or the red ones?") gives toddlers a sense of control. Keep the routine to about 20-30 minutes. If your toddler is transitioning from two naps to one, the timing of bedtime may need temporary adjustment.',
    },
  ],
  whenNormal: [
    'Your baby or toddler has some fussing or mild protest at bedtime but settles within 10-20 minutes.',
    'Bedtime resistance worsens during developmental milestones, illness, or schedule disruptions and then improves.',
    'Your toddler tries to delay bedtime with requests and stalling but eventually falls asleep at a reasonable hour.',
  ],
  whenToMention: [
    'Your baby or toddler fights bedtime intensely for more than 30-45 minutes every night despite a consistent routine.',
    'You have tried adjusting timing and routine and nothing seems to help.',
    'Your child is getting significantly less sleep than recommended for their age and it is affecting their daytime behavior.',
  ],
  whenToActNow: [
    'Your baby or toddler seems to be in pain at bedtime - pulling at ears, arching back, or screaming as if in distress.',
    'Your child is snoring, gasping, or having breathing difficulties when they do fall asleep.',
    'You are so exhausted from bedtime battles that you are concerned about your own safety or your child\'s safety.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'overtired-baby-signs',
    'baby-catnapping-only-20-minutes',
    'baby-chair-method-sleep-training',
    'baby-only-sleeps-being-held',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Behavioral Treatment of Bedtime Problems and Night Wakings in Infants and Young Children. Sleep, 2006.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17040003/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
  ],
};
