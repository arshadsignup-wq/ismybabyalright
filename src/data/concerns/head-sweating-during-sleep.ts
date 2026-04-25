import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'head-sweating-during-sleep',
  title: 'My Baby\'s Head Sweats While Sleeping',
  category: 'sleep',
  searchTerms: [
    'baby head sweating during sleep',
    'baby sweaty head while sleeping',
    'why does my baby\'s head sweat when sleeping',
    'baby head soaking wet after sleep',
    'sweaty head in babies',
    'baby pillow wet from head sweat',
    'is it normal for baby head to sweat',
    'newborn sweaty head',
    'baby back of head sweating',
    'excessive head sweating in babies',
  ],
  quickAnswer:
    'Head sweating is extremely common in babies because they have a high concentration of sweat glands on their scalp and spend more time in deep sleep than adults. Since babies sleep on their backs and can\'t regulate temperature as well as adults, their heads often get warm and sweaty. This is usually normal, especially if the room is warm or your baby is over-dressed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have immature temperature regulation systems and many active sweat glands on their head and face. Since they sleep exclusively on their backs, heat can build up against the mattress. Head sweating is very common during deep sleep cycles. Ensure your baby\'s room is 68-72°F, avoid hats indoors unless the room is cold, and dress your baby in light layers. Never use pillows, as they pose a suffocation risk and can increase sweating.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Head sweating continues to be common at this age, especially in the first few hours after falling asleep when babies enter deep sleep. Some babies are naturally warmer sleepers. If your baby\'s head is sweaty but they seem comfortable, are breathing normally, and wake up happy, it\'s likely just that they run warm. Ensure the sleep surface is breathable (firm crib mattress, no memory foam), and consider a lighter sleep sack or removing a layer.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies gain more mobility and can turn their heads easily, heat may dissipate more evenly. However, many babies this age still sweat on their head, especially if they have thick hair or sleep in one position for long periods. If head sweating is accompanied by snoring, mouth breathing, or restless sleep, mention it to your pediatrician as it could indicate sleep-disordered breathing or enlarged adenoids.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may continue to have a sweaty head during sleep, particularly if they\'re very active during the day, fighting off an illness, or during developmental leaps when brain activity is high during sleep. Most toddlers outgrow excessive head sweating by age 2-3 as their temperature regulation matures. If sweating is extreme, one-sided, or accompanied by poor growth or other symptoms, discuss it with your doctor.',
    },
  ],
  whenNormal: [
    'Your baby\'s head is sweaty but the rest of their body is dry or only slightly damp',
    'Sweating occurs mainly during the first few hours of sleep when your baby is in deep sleep',
    'Sweating improves when you cool down the room or remove a layer of clothing',
    'Your baby wakes up happy, eats well, and is meeting developmental milestones',
    'Your baby\'s skin is warm and slightly damp, not cold and clammy',
  ],
  whenToMention: [
    'Your baby\'s head is drenched in sweat every night despite a cool room and light clothing',
    'Sweating is accompanied by snoring, gasping, pauses in breathing, or very restless sleep',
    'You notice sweating occurs on only one side of the head',
    'Your baby seems excessively tired during the day, is irritable, or is having difficulty gaining weight',
    'Sweating is accompanied by other symptoms like rapid breathing, poor feeding, or developmental concerns',
  ],
  whenToActNow: [
    'Your baby has cold, clammy skin along with very rapid breathing or lethargy',
    'Your baby has a blue or grey tinge around the lips or seems to be struggling to breathe',
    'Sweating is accompanied by high fever, vomiting, or signs of serious illness',
    'Your baby is unresponsive or extremely difficult to wake',
  ],
  relatedMilestones: [
    'temperature-regulation',
    'sweat-gland-development',
    'deep-sleep-cycles',
    'back-sleeping',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep Recommendations. HealthyChildren.org, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Overheating and SIDS. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Preventing-SIDS.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies. CDC.gov.',
      url: 'https://www.cdc.gov/sids/about/safe-sleep-baby.htm',
    },
  ],
};
