import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'comparison-anxiety-social-media',
  title: 'Social Media Comparison Anxiety',
  category: 'behavior',
  searchTerms: [
    'comparing myself to other moms on social media',
    'Instagram parenting anxiety',
    'other parents seem so much better',
    'social media making me feel like a bad parent',
    'comparison trap parenting',
    'perfect parents on social media',
    'mom shaming online',
    'feeling inadequate as a parent social media',
  ],
  quickAnswer:
    'Social media presents a curated, filtered, and fundamentally distorted picture of parenthood. The parents you see online are showing their best moments, not the 2 a.m. meltdowns, the messy houses, or the moments they feel like they are failing. Comparing your full, unfiltered reality to someone else\'s highlight reel will always make you feel inadequate. If social media is making you feel worse about your parenting, you are not the problem — the platform is.',
  byAge: [
    {
      ageRange: 'Pregnancy',
      context:
        'During pregnancy, social media comparison often begins with bump size, nursery perfection, baby showers, and birth plan ideals. You may feel pressure to document a "beautiful" pregnancy while dealing with nausea, anxiety, or complications behind the scenes. Remember that every pregnancy is different, and what you see online is a tiny, curated slice of someone else\'s experience.',
    },
    {
      ageRange: '0-3 months postpartum',
      context:
        'The newborn period is when social media comparison can be most damaging. You are exhausted, possibly struggling with feeding, and your house may be chaos — and then you see parents online who seem to have it all together. The truth is, those posts took effort to stage, and no one is posting the crying, the pain, or the doubt. Limiting screen time during vulnerable moments (2 a.m. feeds) can protect your mental health.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As babies start reaching milestones, comparison shifts to your child. Is everyone else\'s baby sleeping through the night? Rolling over? Eating solids already? Every baby develops on their own timeline, and what parents post online is selective. If you notice that scrolling consistently makes you feel anxious or inadequate, consider unfollowing accounts that trigger comparison.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Comparison can intensify as decisions multiply — organic versus conventional food, screen time, discipline approaches, childcare choices. Social media parenting culture can make every decision feel morally weighted. The reality is that good parenting comes in many forms, and children need "good enough" parents, not perfect ones. Curating your feed intentionally and setting time limits can help.',
    },
  ],
  whenNormal: [
    'Occasionally feeling envious of another parent\'s life or setup — this is human nature',
    'Questioning your choices briefly after seeing a different approach online',
    'Feeling motivated by some parenting content and finding useful tips',
    'Recognizing that social media is not real life, even if it still stings sometimes',
  ],
  whenToMention: [
    'Social media is consistently making you feel like a terrible parent and you cannot stop checking it',
    'You are changing your parenting decisions based on what you see online, against your own instincts or your pediatrician\'s advice',
    'Comparison has become a constant internal monologue — you cannot enjoy moments with your baby without measuring them against what others are posting',
  ],
  whenToActNow: [
    'Feelings of inadequacy from comparison have led to thoughts of self-harm or that your family would be better off without you — call 988 (Suicide and Crisis Lifeline) immediately',
    'You are unable to care for your baby because you are spiraling into a comparison-driven depression — call the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parenting-anxiety-constant-worry',
    'identity-loss-after-baby',
    'guilt-returning-to-work',
  ],
  sources: [
    {
      org: 'APA',
      citation:
        'American Psychological Association. Social Media Use and Mental Health.',
      url: 'https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Media and Family Mental Health. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/Media/Pages/Social-Media-and-Your-Family.aspx',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Anxiety.',
      url: 'https://www.postpartum.net/learn-more/postpartum-anxiety/',
    },
  ],
};
