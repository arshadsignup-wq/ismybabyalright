import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'touched-out-feeling-overstimulated',
  title: 'Feeling Touched Out and Overstimulated',
  category: 'behavior',
  searchTerms: [
    'touched out',
    'overstimulated as a parent',
    'cannot stand being touched after baby',
    'do not want anyone touching me',
    'sensory overload parent',
    'feel like screaming when baby touches me',
    'breastfeeding makes me want to crawl out of my skin',
    'overwhelmed by physical contact parent',
  ],
  quickAnswer:
    'Feeling "touched out" — physically overwhelmed by constant contact with your baby or children — is an incredibly common experience, especially among breastfeeding parents and primary caregivers. When your body has been used for someone else\'s needs all day, the sensation of any additional touch can feel unbearable. This is a normal physiological response to sensory overload, not a sign that you are a bad or unloving parent.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'In the newborn period, you may be holding, feeding, and soothing your baby for the majority of the day and night. If you are breastfeeding, your body is literally in constant demand. The combination of physical recovery from birth, hormonal changes, sleep deprivation, and around-the-clock physical contact can make even your partner\'s touch feel like too much. This is a sensory overload response, not a lack of love.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this stage, the cumulative effect of months of constant physical contact takes its toll. Many parents describe dreading the evening "hand-off" to their partner because they know they will be touched again all night. Feeling repulsed by touch from your partner can create guilt and strain the relationship. Communication about this experience is important — it is about overstimulation, not rejection.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Babies become more grabby and clingy during this period, adding hair-pulling, face-grabbing, and constant crawling onto your lap. The feeling of never having your body to yourself can become overwhelming. Setting small boundaries — even five minutes of uninterrupted personal space — can help reset your nervous system.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers are persistent in their need for physical closeness, and they are not gentle about it. If you have been touched out for months without relief, it can evolve into resentment, avoidance, or even symptoms of anxiety or depression. Recognizing that you have a legitimate need for physical autonomy — and finding ways to meet it — is essential self-care, not selfishness.',
    },
  ],
  whenNormal: [
    'Feeling overwhelmed by touch at the end of a long day of caregiving',
    'Needing a few minutes of personal space before being physically affectionate with your partner',
    'Feeling irritated when someone reaches for you after the baby has been on you all day',
    'Wanting to shower or sit alone without anyone touching you — this is a healthy boundary',
  ],
  whenToMention: [
    'The feeling is constant and you cannot tolerate any physical contact with anyone, including your baby, for extended periods',
    'Being touched triggers intense anger, panic, or a fight-or-flight response',
    'You are avoiding your baby or partner physically in ways that concern you',
  ],
  whenToActNow: [
    'Sensory overload is triggering thoughts of harming yourself or your baby — put the baby in a safe place, step away, and call the Postpartum Support International helpline at 1-800-944-4773 or text 988',
    'You are experiencing a complete inability to tolerate any stimulation — sound, light, or touch — and are unable to function. This may indicate a perinatal mood crisis and warrants immediate evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-rage-anger',
    'parental-burnout-signs',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'APA',
      citation:
        'American Psychological Association. The Mental Load of Motherhood.',
      url: 'https://www.apa.org/topics/women-girls/motherhood-mental-load',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Anxiety.',
      url: 'https://www.postpartum.net/learn-more/postpartum-anxiety/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Care for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Self-Care-for-Parents.aspx',
    },
  ],
};
