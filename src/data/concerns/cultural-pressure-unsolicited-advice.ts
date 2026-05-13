import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'cultural-pressure-unsolicited-advice',
  title: 'Cultural Pressure and Unsolicited Advice',
  category: 'behavior',
  searchTerms: [
    'unsolicited parenting advice',
    'family giving unwanted advice about baby',
    'cultural expectations parenting',
    'grandparents disagree with parenting',
    'in-laws criticizing parenting',
    'pressure to raise baby a certain way',
    'traditional versus modern parenting conflict',
    'everyone telling me how to parent',
    'boundaries with family about baby',
  ],
  quickAnswer:
    'Unsolicited advice from family, friends, and even strangers is one of the most universal  -  and most frustrating  -  experiences of new parenthood. When advice comes with cultural or generational expectations, it can feel even more loaded. You can honor your cultural roots and family relationships while still making informed choices that feel right for your family.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period attracts the most unsolicited advice. Common pressure points include feeding method (breast versus formula), sleeping arrangements (room-sharing versus co-sleeping), how much to hold the baby, and when to take the baby out in public. Many grandparents were given advice that directly contradicts current AAP guidelines  -  such as stomach sleeping or adding cereal to bottles  -  and may push back when you follow updated recommendations. It helps to frame boundaries around safety ("Our pediatrician recommends...") rather than personal preference.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Pressure may shift to topics like introducing solids early, sleep training, or returning to work. In many cultures, there are strong traditions about when and how to introduce foods, who should care for the baby, and how involved extended family should be in daily decisions. You may feel torn between honoring traditions that are important to you and following evidence-based guidance. Remember that you can incorporate cultural practices that align with safety recommendations while setting limits on those that do not.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes more interactive, advice often focuses on developmental milestones ("Is he walking yet?"), discipline approaches, and lifestyle choices. Social media adds another layer of pressure, presenting curated versions of parenthood that can make anyone feel inadequate. Different cultural expectations about a child\'s independence, obedience, or social behavior can create tension between partners and within extended families.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler discipline is often where cultural and generational differences become most acute. Views on spanking, permissiveness, screen time, and gender roles vary widely across cultures and generations. If you are raising a child between two cultures  -  for example, with parents from different cultural backgrounds  -  deciding which traditions to maintain and which to adapt can be an ongoing negotiation. Your child benefits most from parents who feel confident and supported in their choices.',
    },
  ],
  whenNormal: [
    'You feel annoyed by unsolicited advice but can set boundaries or let comments roll off  -  this is a universal parenting experience',
    'You incorporate some family or cultural traditions while politely declining others based on current safety guidelines',
    'You and your partner are mostly aligned on how to handle family input, even if you occasionally disagree on specifics',
    'Advice-givers mean well even when their suggestions are outdated or unwelcome  -  most advice comes from a place of love and concern',
  ],
  whenToMention: [
    'Cultural or family pressure is causing significant stress, anxiety, or conflict in your household',
    'You feel unable to follow your pediatrician\'s recommendations because of family pushback on issues like safe sleep, feeding, or vaccination',
    'You are questioning your own judgment or feeling paralyzed by conflicting advice from multiple sources',
    'Pressure from family is creating a rift between you and your partner or affecting your mental health',
  ],
  whenToActNow: [
    'A family member or caregiver is engaging in practices that put your child at physical risk  -  such as ignoring safe sleep guidelines, giving honey before age one, or withholding medical care  -  and will not stop when asked',
    'The pressure has escalated to emotional abuse, controlling behavior, or threats to your custody or family stability  -  contact a family counselor or the National Domestic Violence Hotline (1-800-799-7233)',
    'You are experiencing a mental health crisis due to the stress of navigating family pressure  -  reach out to the Postpartum Support International helpline (1-800-944-4773) or call 988',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Grandparents\' Guide to Baby Safety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Grandparents-Guide-Baby-Safety.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Navigating Cultural Differences in Parenting.',
      url: 'https://www.zerotothree.org/resource/navigating-cultural-differences-in-parenting/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cultural Influences on Parenting Practices. Handbook of Parenting, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30024153/',
    },
  ],
};
