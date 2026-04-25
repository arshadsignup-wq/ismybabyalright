import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-twitching-in-sleep',
  title: 'My Baby Twitches in Their Sleep',
  category: 'sleep',
  searchTerms: [
    'baby twitching in sleep',
    'baby jerking movements while sleeping',
    'why does my baby twitch when sleeping',
    'baby startle reflex in sleep',
    'baby twitching arms and legs in sleep',
    'is it normal for baby to twitch in sleep',
    'newborn twitching during sleep',
    'baby twitching vs seizure',
    'baby shaking while sleeping',
    'baby muscle twitches during sleep',
  ],
  quickAnswer:
    'Twitching, jerking, and sudden movements during sleep are completely normal in babies, especially newborns. These movements occur during active (REM) sleep and are actually a sign that your baby\'s nervous system is developing properly. Most babies outgrow frequent twitching by 3-6 months as their sleep cycles mature.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns spend about 50% of their sleep time in active (REM) sleep, during which you\'ll see lots of twitching, jerking, smiling, frowning, and eye movements under closed lids. This is completely normal and is how your baby\'s brain processes experiences and builds neural connections. You may also see the startle (Moro) reflex, where your baby suddenly throws their arms out. This reflex is normal until about 3-6 months and can wake your baby, which is why swaddling often helps.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby\'s nervous system matures, you\'ll notice less frequent and less dramatic twitching. The percentage of active sleep decreases and deep sleep increases, so movements become less common. The Moro reflex typically disappears by 5-6 months. Occasional twitches, especially of the hands, feet, or face, remain normal. If your baby seems to be having rhythmic jerking that doesn\'t stop when you gently touch them, or if twitching occurs while awake, mention it to your doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies still have occasional twitches during sleep, but they should be brief and irregular. Your baby may jerk awake occasionally or move their hands and feet, especially during dreams. Some babies this age grind their teeth or talk/babble in their sleep as their language skills develop. If you notice new onset of repetitive, rhythmic jerking, stiffening, or movements that seem different from typical sleep twitches, contact your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may have occasional hypnic jerks (the sensation of falling) when falling asleep, just like adults. They may also move around frequently, talk, or even sit up briefly during sleep. This is normal. However, if your toddler has repetitive movements, seems to "zone out" or stare blankly while awake, or has concerning behaviors during sleep like stiffening or rhythmic movements, these should be evaluated.',
    },
  ],
  whenNormal: [
    'Twitching occurs during sleep, is brief and irregular, and stops when your baby wakes up',
    'Your baby has jerky movements of arms, legs, face, or eyes during active sleep',
    'The Moro (startle) reflex causes sudden arm movements in babies under 6 months',
    'Twitching decreases as your baby gets older and sleep cycles mature',
    'Your baby is developing normally, eating well, and meeting milestones',
  ],
  whenToMention: [
    'Twitching movements are rhythmic, repetitive, or always involve the same body part',
    'Movements don\'t stop when you gently touch or hold the affected limb',
    'Twitching occurs while your baby is awake, especially if they seem unaware of it',
    'You notice eye movements side-to-side or staring spells while awake',
    'Your baby seems excessively tired, irritable, or is regressing in developmental skills',
  ],
  whenToActNow: [
    'Your baby has a seizure lasting more than 5 minutes or multiple seizures in a row',
    'Twitching is accompanied by difficulty breathing, blue or grey lips, or unresponsiveness',
    'Your baby has rhythmic jerking along with fever, vomiting, or signs of serious illness',
    'Your baby is limp, extremely lethargic, or very difficult to wake',
  ],
  relatedMilestones: [
    'REM-sleep-development',
    'nervous-system-maturation',
    'Moro-reflex',
    'sleep-cycle-consolidation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Sleep Patterns and Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Reflexes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep Twitches and Movements. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
  ],
};
