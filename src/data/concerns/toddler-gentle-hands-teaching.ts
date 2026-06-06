import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-gentle-hands-teaching', title: 'Teaching Toddlers Gentle Hands and Gentle Touch', category: 'behavior',
  searchTerms: ['teaching gentle hands toddler','toddler gentle touch','toddler too rough','toddler rough with animals','toddler rough with baby','teaching toddler to be gentle','toddler doesnt know own strength','toddler too rough with friends','gentle hands toddler','toddler rough play hurting others'],
  quickAnswer: 'Teaching "gentle hands" is one of the most important and most repeated lessons of the toddler years. Young children genuinely do not understand their own strength or that their actions cause pain. Gentle touch must be actively taught and demonstrated hundreds of times. It is a skill that develops gradually through patient, consistent modeling and practice - not through punishment.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies explore by grabbing, squeezing, and pulling. They have no concept of gentle vs. rough. Guide their hands in gentle stroking motions on your face, pets, and other babies while saying "Gentle, gentle." This plants the earliest seeds of understanding.' },
    { ageRange: '12-24 months', context: 'Your toddler is learning but will forget constantly. They may pet the cat gently one moment and grab its tail the next. This is not malice - it is immature impulse control. Each time, calmly take their hand and demonstrate: "Like this. Soft. Gentle." Supervise all interactions with babies and animals.' },
    { ageRange: '2-3 years', context: 'Your child understands the concept of gentle but cannot always execute it, especially when excited or emotional. Practice gentle touch during calm moments. Use stuffed animals to role-play. Praise gentle behavior enthusiastically: "Look how gently you petted the dog! That was so kind."' },
    { ageRange: '3-5 years', context: 'Most children can consistently be gentle by this age, though they may forget during excitement or roughhousing. If your child is still frequently too rough despite consistent teaching, consider whether they have difficulty with sensory processing or body awareness that might benefit from occupational therapy evaluation.' },
  ],
  whenNormal: ['Your toddler alternates between gentle and rough - they are learning','Your child is gentle when reminded','Roughness is not targeted or malicious','Your child shows concern when they accidentally hurt someone'],
  whenToMention: ['Your child is consistently rough despite years of patient teaching','Your child does not seem to understand the concept of gentle even at age 3-4','Roughness seems intentional and your child shows no concern about hurting others','Your child has significant difficulty with body awareness and motor control'],
  whenToActNow: ['Your child is causing injury to other children or animals','Rough behavior is paired with other concerning aggressive patterns'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-hitting-when-angry','toddler-aggressive-toward-baby','toddler-scratching-others','toddler-biting-when-frustrated'],
};
