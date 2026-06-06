import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bath-before-bed-necessary',
  title: 'Is a Bath Before Bed Really Necessary?',
  category: 'sleep',
  searchTerms: ['baby bath before bed','bath part of bedtime routine','does baby need bath every night','bath before bed sleep','bath necessary bedtime','skip bath bedtime routine','bath helps baby sleep','baby bath time bedtime','nightly bath baby needed','bedtime bath benefits'],
  quickAnswer: 'A nightly bath is not medically necessary and some babies with sensitive skin do better with less frequent bathing. However, a warm bath can be a powerful sleep cue because the subsequent body temperature drop triggers melatonin production. If you include a bath, keep it calm and warm rather than stimulating.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns only need baths 2-3 times per week. Daily baths can dry out delicate skin. A brief warm sponge bath or washcloth wipe-down works as a sleep cue without over-bathing. The temperature drop after the bath helps trigger sleepiness.' },
    { ageRange: '3-12 months', context: 'Every other night or every third night is sufficient. On non-bath nights, substitute a warm washcloth or skip the step. The routine works well without a bath as long as other elements stay consistent. If bath time excites your baby, move it earlier in the evening.' },
    { ageRange: '12-24 months', context: 'Active toddlers may need more frequent baths, but nightly is not required. Keep bath time short (5-10 minutes) and calm. Some families find baths too stimulating and switch to a face and hand wash instead.' },
    { ageRange: '2-3 years', context: 'Baths can become a fun routine element your child looks forward to. If it helps the transition to bedtime, keep it. If it becomes a battle or stalling tactic, consider moving it earlier or reducing frequency.' },
  ],
  whenNormal: ['You skip the bath some nights and your baby still sleeps well','Your baby has eczema or dry skin and you bathe less frequently','Your baby finds baths stimulating so you moved bath time earlier','You use a warm washcloth as an alternative'],
  whenToMention: ['Your baby has persistent skin issues worsened by frequent bathing','Your baby becomes extremely distressed during baths disrupting the routine','You are unsure about bathing frequency for your baby\'s skin type'],
  whenToActNow: ['Your baby has signs of a skin infection needing treatment','Your baby has a severe rash or skin reaction after bathing'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bathing Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Shower or Bath Before Bed. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/sleep-hygiene/shower-before-bed' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Skin Care for Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-bedtime-routine-length','baby-sleep-environment-optimal'],
};
