import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sweating-during-sleep',
  title: 'My Baby Sweats a Lot During Sleep',
  category: 'sleep',
  searchTerms: [
    'baby sweating during sleep',
    'baby sweats a lot when sleeping',
    'why does my baby sweat so much at night',
    'baby wakes up drenched in sweat',
    'baby sweating while sleeping normal',
    'baby night sweats',
    'excessive sweating in babies',
    'baby head sweating during sleep',
    'baby soaking wet after sleeping',
    'is it normal for babies to sweat',
  ],
  quickAnswer:
    'Babies commonly sweat during sleep, especially on their heads, because they spend more time in deep sleep than adults and have developing temperature regulation systems. Most of the time, it\'s simply that the room is too warm or your baby is over-dressed. Occasional sweating is normal, but excessive or persistent sweating warrants a pediatrician check.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have immature temperature regulation systems and sweat glands that are still developing. They may sweat during deep sleep cycles or when working hard during feeding. Since newborns cannot regulate their body temperature well, ensure the room is 68-72°F and your baby is dressed in one more layer than you. Overheating is a SIDS risk factor, so avoid over-bundling or heavy blankets.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, your baby\'s sweat glands are more functional, but temperature regulation is still maturing. Babies this age often sweat on their head and neck during deep sleep, especially in the first few hours after falling asleep. This is normal. However, if your baby is drenched in sweat, is difficult to wake, or seems unwell, check for fever or illness and ensure the sleep environment isn\'t too warm.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies may sweat more during developmental leaps when their brains are very active during sleep. They may also sweat if they\'re wearing sleep sacks rated for colder temperatures than your home, or if they\'ve been crying hard before settling. Check that your baby isn\'t over-dressed, the room isn\'t too warm, and there\'s adequate airflow. If sweating is accompanied by snoring, restless sleep, or mouth breathing, mention it to your doctor as it could indicate sleep apnea.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can sweat during very active dreams or if they\'re fighting off an illness. Some toddlers run warm and naturally sweat more. Ensure their sleep environment is cool, they\'re wearing breathable fabrics like cotton, and they\'re not over-bundled. Excessive sweating along with poor weight gain, extreme fatigue, or other symptoms may rarely indicate an underlying medical condition and should be evaluated.',
    },
  ],
  whenNormal: [
    'Your baby sweats lightly on the head or neck during the first few hours of sleep',
    'Sweating resolves when you adjust room temperature or remove a layer of clothing',
    'Your baby is otherwise healthy, eating well, and meeting developmental milestones',
    'Sweating occurs occasionally, such as after a very active day or during teething',
    'Your baby\'s skin is not clammy, and they wake up happy and alert',
  ],
  whenToMention: [
    'Your baby is consistently drenched in sweat every night despite a cool room and light clothing',
    'Sweating is accompanied by snoring, gasping, or restless sleep',
    'Your baby seems excessively tired during the day or is having difficulty gaining weight',
    'You notice sweating primarily on one side of the body or during feeding',
    'Sweating is accompanied by rapid breathing, pale or bluish skin, or extreme fussiness',
  ],
  whenToActNow: [
    'Your baby is sweating and has a high fever, seems limp, or is unresponsive',
    'Your baby has cold, clammy skin along with very rapid or labored breathing',
    'Your baby has a bluish tinge to lips or skin',
    'Sweating is accompanied by vomiting, dehydration, or signs of serious illness',
  ],
  relatedMilestones: [
    'temperature-regulation',
    'deep-sleep-development',
    'sweat-gland-maturation',
    'sleep-architecture',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep and Room Temperature. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. SIDS and Other Sleep-Related Infant Deaths: Updated 2016 Recommendations. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162938/60309/SIDS-and-Other-Sleep-Related-Infant-Deaths',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies. CDC.gov.',
      url: 'https://www.cdc.gov/sids/about/safe-sleep-baby.htm',
    },
  ],
};
