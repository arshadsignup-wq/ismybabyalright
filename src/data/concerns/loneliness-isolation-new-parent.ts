import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'loneliness-isolation-new-parent',
  title: 'Loneliness and Isolation as a New Parent',
  category: 'behavior',
  searchTerms: [
    'lonely new mom',
    'isolated after having baby',
    'no friends after baby',
    'lonely as a new parent',
    'stay at home mom lonely',
    'feeling alone with newborn',
    'lost friends after having baby',
    'new parent isolation',
    'no village to help with baby',
    'motherhood loneliness',
  ],
  quickAnswer:
    'Loneliness after having a baby is remarkably common but rarely talked about. Studies show that the majority of new parents experience some degree of social isolation, especially in the first year. You are not failing at parenthood if you feel lonely  -  the modern structure of parenting, often without extended family nearby or built-in community support, makes isolation almost inevitable without deliberate effort to connect.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period can be profoundly isolating. You may be physically recovering, sleep-deprived, and confined to home with a baby who needs constant care. Friends without children may not understand your new reality, and the gap between the joyful narrative of new parenthood and the exhausting, lonely truth can feel disorienting. It is okay if your world feels very small right now. This phase is temporary, and reaching out  -  even via text or a phone call  -  counts as meaningful connection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As you begin to venture out more, you may find that your old social life does not fit your new reality. Activities that once felt easy now require planning around naps, feeds, and diaper bags. Many parents feel a strange loneliness even when surrounded by people  -  the sense that no one truly understands what your day-to-day life is like. This is a good time to seek out parent groups, library story times, or community classes where you can meet others in a similar stage of life.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this stage, some parents have found their new social footing while others feel more isolated than ever, especially if they have returned to work and feel disconnected from both the parent world and the workplace. Partners may feel isolated from each other as well, with conversations centering entirely on the baby and logistics. Making time for adult connection  -  whether with friends, your partner, or a parent community  -  is not selfish, it is essential for your well-being and your child\'s.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As your toddler becomes more social, you may find natural opportunities for connection at playgrounds, playgroups, and community activities. However, loneliness can persist or deepen for parents who are home full-time, single parents, parents who have relocated, or those whose friends are in a different life stage. If loneliness has become a constant companion rather than an occasional feeling, it is worth addressing actively  -  through support groups, therapy, community involvement, or even online parent communities.',
    },
  ],
  whenNormal: [
    'You feel socially isolated in the early months but are still able to enjoy time with your baby and function day to day',
    'You miss your pre-baby social life and feel like your identity has shifted  -  this is a normal part of the transition to parenthood',
    'You have some days that feel lonely and other days when you feel connected  -  fluctuation is normal',
    'You find it difficult to make new parent friends but are open to trying  -  building a new social network takes time and effort',
  ],
  whenToMention: [
    'Loneliness has become persistent and pervasive, affecting your mood, energy, and ability to enjoy daily life',
    'You have withdrawn from social activities and relationships and feel unable to reach out even when you want to',
    'You feel like no one would understand or care about what you are going through',
    'Loneliness is accompanied by persistent sadness, hopelessness, anxiety, or irritability that does not improve',
  ],
  whenToActNow: [
    'You are having thoughts of self-harm or feel that your family would be better off without you  -  call 988 (Suicide and Crisis Lifeline) or the Postpartum Support International helpline (1-800-944-4773) immediately',
    'You feel completely unable to care for your baby or yourself due to the weight of isolation and depression  -  reach out to your healthcare provider, a trusted person, or an emergency service right away',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Social Isolation and Loneliness in New Mothers: A Scoping Review. BMC Pregnancy and Childbirth, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34238255/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Parental Stress and Self-Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Parental-Stress-and-Self-Care.aspx',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Support Groups and Resources for New Parents.',
      url: 'https://www.postpartum.net/get-help/psi-online-support-meetings/',
    },
  ],
};
