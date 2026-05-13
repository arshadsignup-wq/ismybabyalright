import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-body-image',
  title: 'Postpartum Body Image',
  category: 'maternal',
  searchTerms: [
    'postpartum body image',
    'not feeling like myself after baby',
    'hating my body after birth',
    'body changes after pregnancy',
    'postpartum body confidence',
    'stretch marks after baby',
    'body not bouncing back after baby',
    'feeling unattractive after birth',
  ],
  quickAnswer:
    'Adjusting to your postpartum body is a deeply personal experience, and it is completely normal to have complicated feelings about the changes your body has gone through. Your body grew and sustained a human life, and it takes time for it to recover. Research shows that most physical changes continue to improve over the course of the first year and beyond, and practicing self-compassion during this time is just as important as physical recovery.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'In the immediate postpartum period, your body is still visibly recovering from pregnancy and birth. You may still look pregnant, as the uterus takes about six weeks to return to its pre-pregnancy size. Swelling from IV fluids and the delivery process can add to the feeling that your body is unfamiliar. This is not the time to focus on appearance. Focus on rest, healing, and bonding with your baby.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'As initial recovery progresses, you may become more aware of changes such as a softer abdomen, wider hips, stretch marks, or larger breasts. Social media and cultural pressure to "bounce back" quickly can make this period emotionally challenging. Remember that what you see online rarely reflects reality. Every postpartum body is different, and there is no timeline you should be measured against.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Once cleared for exercise, some women find that gentle movement helps them feel better both physically and emotionally. However, exercise after birth should be about rebuilding strength and well-being, not punishing your body into a pre-pregnancy shape. If negative thoughts about your body are persistent, intrusive, or affecting your mood or eating, talk to your provider about it.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Many women report that this is when they start to feel more at home in their postpartum bodies, though the timeline is different for everyone. Some changes, like stretch marks and wider hips, may be permanent, and finding peace with them is a process. Surrounding yourself with supportive people and limiting exposure to unrealistic imagery can be helpful.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Your body continues to change and recover throughout the first year and beyond. Some women feel fully comfortable in their bodies by this point, while others are still adjusting, and both are normal. If body image concerns are causing significant distress, affecting your eating habits, or contributing to depression or anxiety, professional support from a therapist who specializes in postpartum issues can be very beneficial.',
    },
  ],
  whenNormal: [
    'Feeling surprised, uncertain, or emotional about the changes in your body after birth',
    'Taking time to feel comfortable in your postpartum body, which is a gradual process',
    'Noticing permanent changes like stretch marks or shifts in body shape',
    'Having good days and hard days when it comes to how you feel about your body',
  ],
  whenToMention: [
    'Negative thoughts about your body are persistent and significantly affecting your mood or daily life',
    'You find yourself restricting food, over-exercising, or engaging in other unhealthy behaviors to change your body',
    'Body image distress is affecting your relationship with your partner or your bond with your baby',
    'You feel unable to leave the house or participate in activities because of how you feel about your appearance',
  ],
  whenToActNow: [
    'You are severely restricting food intake or purging, which requires immediate support',
    'Body image distress is accompanied by thoughts of self-harm or feelings of worthlessness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Postpartum Depression. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/postpartum-depression',
    },
    {
      org: 'NIH',
      citation:
        'Silveira ML, et al. Body image dissatisfaction and depression in postpartum women. Journal of Women\'s Health, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26125602/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Exercise After Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/exercise-after-pregnancy',
    },
  ],
};
