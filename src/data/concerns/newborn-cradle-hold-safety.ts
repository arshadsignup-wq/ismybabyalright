import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-cradle-hold-safety',
  title: 'Safe Holding Positions for Newborns',
  category: 'physical',
  searchTerms: ['how to hold newborn', 'cradle hold baby', 'safe way to hold baby', 'newborn holding positions', 'baby hold correctly', 'football hold newborn', 'shoulder hold baby', 'picking up newborn safely', 'new parent holding baby', 'first time holding baby'],
  quickAnswer: 'There are several safe ways to hold your newborn, all of which involve supporting the head and neck. The cradle hold, football hold, and shoulder hold are all safe and comfortable for baby. Always support the head, keep baby close to your body, and avoid any position that could restrict breathing. You will not hurt your baby by holding them.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns have no head control and need their head and neck supported at all times. The cradle hold (baby lies in the crook of your arm with head near your elbow) is the most classic position. The football hold (baby tucked along your forearm like a football) is great for feeding and gives good head support. The shoulder hold (baby upright against your chest with chin resting on your shoulder) is excellent for burping. When picking up your newborn, slide one hand under the head and neck and the other under the bottom. New parents often worry about hurting their baby, but as long as you support the head, you are doing great.' },
    { ageRange: '1-3 months', context: 'As your baby gains some head control, holding becomes easier. You may feel more comfortable trying different positions. Face-out holding is not recommended until baby has good head control (around 4 months). Continue supporting the head during transfers and position changes.' },
    { ageRange: '3-6 months', context: 'With improving head and neck control, you can hold your baby in more varied positions. Many babies enjoy facing outward by 4-5 months. Hip hold (baby sitting on your hip) becomes practical as head control improves.' },
    { ageRange: '6-12 months', context: 'Your baby has strong head and trunk control. Multiple holding positions are comfortable. Baby may prefer to be held facing outward to see the world.' },
  ],
  whenNormal: ['Baby is comfortable and settled when properly held with head supported', 'Baby molds into your arms and relaxes', 'Head is well-supported in the crook of your arm or against your body', 'Baby\'s face is visible and airway is clear in all holding positions'],
  whenToMention: ['You feel unsure about how to safely hold your newborn', 'Baby seems uncomfortable in all holding positions', 'You have physical limitations that make holding difficult'],
  whenToActNow: ['Baby\'s face becomes pressed against fabric or your body in a way that could restrict breathing', 'Baby turns blue or stops breathing in any position'],
  relatedMilestones: ['head control'],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Caring for Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Handling and Care. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/002367.htm' },
  ],
  relatedConcernSlugs: ['newborn-neck-support-importance', 'newborn-head-lag-concerns'],
};
