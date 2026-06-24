import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-tummy-time-how-long',
  title: 'Tummy Time: How Much and How Long',
  category: 'physical',
  searchTerms: [
    'tummy time how long',
    'how much tummy time baby needs',
    'tummy time duration baby',
    'tummy time minutes per day',
    'when to start tummy time',
    'tummy time newborn',
    'tummy time guidelines',
    'tummy time schedule',
    'how often tummy time baby',
    'tummy time goal by age',
  ],
  quickAnswer:
    'Tummy time should begin from the first day home from the hospital, starting with short sessions of 1-2 minutes several times a day. The goal is to work up to a total of 60 minutes per day by 3 months of age. Tummy time builds essential neck, shoulder, arm, and core muscles needed for rolling, sitting, crawling, and walking. It also helps prevent flat head (positional plagiocephaly) from too much time on the back.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Start tummy time immediately, even for newborns. Begin with 1-2 minutes at a time, 2-3 times per day. Placing your baby on your chest while you recline counts as tummy time and provides skin-to-skin contact. Your newborn will likely only tolerate very short sessions and may fuss. Always supervise tummy time - it is an awake, supervised activity only. Place a small rolled towel under the chest if your baby needs extra support. Do tummy time on a firm, flat surface like a play mat on the floor.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Gradually increase tummy time duration and frequency. Aim for 15-30 minutes total per day by 2 months, spread across multiple short sessions. Your baby should be able to briefly lift their head and may start pushing up on forearms. Make tummy time engaging by getting down on the floor at eye level, using a baby-safe mirror, or placing colorful toys within reach. If your baby hates tummy time, try it after diaper changes or immediately after waking when they are alert. By 3 months, work toward 60 minutes total per day.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-4 months, your baby should be lifting their head well and pushing up on extended arms. Aim for at least 60 minutes of tummy time throughout the day (not all at once). Your baby may start rolling from tummy to back around 4 months. At this point, all floor play counts toward motor development, whether on the tummy, back, or side. Use toys placed slightly out of reach to encourage reaching and pre-crawling movements. Tummy time becomes more enjoyable as your baby gets stronger and can interact with their environment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby is rolling both ways and spending significant time on the floor exploring, traditional tummy time becomes less of a structured activity and more of a natural part of play. Your baby may be army crawling, crawling on hands and knees, or pulling to stand. Continue encouraging floor play in all positions. Babies who were not given adequate tummy time may have delayed motor milestones, but it is never too late to start. Increased floor time, even at this age, helps strengthen muscles for crawling and walking.',
    },
  ],
  whenNormal: [
    'Your baby fusses during tummy time, especially in the beginning - this is common and will improve.',
    'Your baby can tolerate longer tummy time sessions as weeks go by.',
    'Your baby starts lifting their head and pushing up during tummy time.',
  ],
  whenToMention: [
    'Your baby absolutely will not tolerate any tummy time despite trying multiple strategies.',
    'Your baby is not lifting their head during tummy time by 2 months.',
    'Your baby has a flat spot on their head and you want guidance on increasing tummy time.',
  ],
  whenToActNow: [
    'Your baby seems to have pain or extreme distress during tummy time that is not typical fussiness.',
    'Your baby cannot lift their head at all by 3-4 months during tummy time.',
    'Your baby falls asleep during tummy time - always move them to their back on a safe sleep surface.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-tummy-time-refuses', 'flat-head', 'not-sitting-up'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization - Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5 Years of Age.',
      url: 'https://www.who.int/publications/i/item/9789241550536',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Tummy Time. Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk/tummytime',
    },
  ],
};
