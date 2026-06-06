import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-head-sweating-sleep', title: 'Baby\'s Head Sweats During Sleep', category: 'sleep',
  searchTerms: ['baby head sweating sleep','baby sweaty head night','baby head wet sleep','baby sweating while sleeping','sweaty baby head pillow','baby head perspiration sleep','why baby head sweats at night','baby scalp sweating sleep','newborn head sweating sleep','baby soaking wet head sleep'],
  quickAnswer: 'Head sweating during sleep is very common in babies and toddlers. Babies regulate body temperature primarily through their head, which has a high density of sweat glands. This is usually normal, especially if the room is warm or baby is over-dressed. Rarely, excessive sweating can be associated with underlying conditions.',
  byAge: [
    { ageRange: '0-6 months', context: 'Head sweating is extremely common. Babies have immature temperature regulation and sweat primarily through their head. Ensure room is 68-72°F, dress baby in one layer more than you would wear, and use a breathable sleep sack. If baby\'s torso feels warm but not hot, they are likely fine.' },
    { ageRange: '6-12 months', context: 'Continue to monitor room temperature and dressing. Head sweating during active sleep phases is normal. If sweating is excessive even in a cool room with light clothing, mention it at the next well-visit.' },
    { ageRange: '12-24 months', context: 'Toddlers may sweat during deep sleep phases. This is typically normal. Ensure appropriate pajamas and room temperature. Some children are naturally warmer sleepers than others.' },
    { ageRange: '2-3 years', context: 'Some degree of sweating during sleep continues to be normal. If your child sweats profusely even in cool conditions and has other symptoms like poor weight gain or fatigue, discuss with your pediatrician.' },
  ],
  whenNormal: ['Baby sweats primarily from head during deep sleep','Sweating improves when you lower room temperature or reduce clothing layers','Baby is otherwise healthy, feeding well, and gaining weight','Sweating does not wake baby and they seem comfortable'],
  whenToMention: ['Excessive sweating occurs even in a cool room with light clothing','Sweating is accompanied by poor feeding, slow weight gain, or labored breathing','Baby sweats profusely during feeds as well as sleep'],
  whenToActNow: ['Sweating with difficulty breathing, blue lips, or rapid heart rate could indicate a cardiac issue','Baby is lethargic, has a fever, or shows signs of dehydration'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Overheating and SIDS. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Sweating in Infants. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003218.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Dress Your Baby for Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-sweating-during-sleep','baby-sleep-environment-optimal'],
};
