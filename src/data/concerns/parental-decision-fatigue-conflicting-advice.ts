import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'parental-decision-fatigue-conflicting-advice',
  title: 'Parental Decision Fatigue and Conflicting Advice',
  category: 'maternal',
  searchTerms: [
    'parenting decision fatigue',
    'conflicting parenting advice overwhelmed',
    'too much parenting information',
    'analysis paralysis new parent',
    'every source says something different baby',
    'overwhelmed by parenting choices',
    'googling baby symptoms too much',
    'information overload new mom',
    'parenting analysis paralysis',
    'how to stop overthinking parenting decisions',
  ],
  quickAnswer:
    'Decision fatigue, the mental exhaustion from making too many choices, is a well-documented psychological phenomenon that intensifies dramatically in new parenthood. From choosing bottles, diapers, and sleep methods to evaluating feeding approaches and childcare options, new parents face hundreds of micro-decisions daily, often with conflicting advice from pediatricians, family members, social media, and parenting books. A 2022 Ohio State University study found that mothers make an average of 1,500 additional decisions daily compared to before having children. Compounding this, the internet provides infinite and often contradictory information: breastfeeding communities say one thing, formula-feeding groups say another, and your mother-in-law says something different entirely. The result is "analysis paralysis," where parents feel unable to make any decision for fear of making the wrong one. Evidence-based strategies include: choosing 1-2 trusted sources (your pediatrician + one reputable resource), accepting "good enough" over "perfect," and recognizing that most parenting decisions fall in a range of acceptable options, not a single right answer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Decision fatigue peaks in the newborn period when sleep deprivation compounds cognitive overload. Common decision paralysis points: breast vs. bottle, which formula brand, swaddle vs. sleep sack, when to introduce a pacifier, which pediatrician to choose. Limit your information sources: pick one evidence-based website (like HealthyChildren.org) and your pediatrician as your primary guides. Unfollow social media accounts that trigger comparison or anxiety. Most decisions at this stage are reversible, so if a choice isn\'t working, you can change course.',
    },
    {
      ageRange: '3-6 months',
      context:
        'New decisions emerge: sleep training methods (cry-it-out, Ferber, gentle methods), solid food introduction timing, daycare selection, and vaccination schedule. The sleep training debate is particularly rife with conflicting advice and moral judgment online. Your pediatrician can help you choose a method that aligns with your family\'s values and your baby\'s temperament. Remember: decades of research show that no single sleep training method causes long-term harm, and no single method works for every baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Food introduction brings a wave of decisions: baby-led weaning vs. purees, which allergens to introduce first, organic vs. conventional, homemade vs. store-bought. The AAP and major allergists have clear guidelines (introduce allergens early, around 6 months, in age-appropriate forms), which can simplify decision-making. If you find yourself spending hours researching the "best" baby food brand, this may be decision fatigue speaking. Most commercially available baby foods that meet basic safety standards are adequate choices.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler-stage decisions include: discipline approach, screen time rules, when to wean from bottle/breast, toilet training timing, and preschool selection. At this point, you have a year of parenting experience, so trust your growing knowledge of your own child. No parenting expert knows your specific child better than you do. If conflicting advice from family members is a source of stress, it is okay to set boundaries: "We appreciate your input, but we\'re following our pediatrician\'s guidance on this."',
    },
  ],
  whenNormal: [
    'Feeling overwhelmed by the number of choices in the baby products aisle (this is a universal experience)',
    'Changing your mind about a parenting approach after trying it, since flexibility is a strength, not failure',
    'Disagreeing with a friend or family member about parenting choices, as there are many valid approaches',
    'Spending time researching before making a decision, though it becomes a problem only when research prevents action',
  ],
  whenToMention: [
    'Decision paralysis is preventing you from taking necessary actions (like scheduling doctor visits or starting solids)',
    'You are unable to sleep because you are replaying decisions and worrying you made the wrong choice',
    'Conflicting advice from your co-parent is creating significant relationship tension',
    'You feel paralyzed by guilt after every parenting decision',
  ],
  whenToActNow: [
    'Decision fatigue is accompanied by persistent hopelessness, inability to care for your baby, or thoughts of self-harm, which may indicate postpartum depression or anxiety',
    'You are avoiding medical care for your baby because you are overwhelmed by the decision-making involved',
    'Your inability to make decisions is putting your baby\'s safety at risk (not installing a car seat because you can\'t choose one, not baby-proofing, etc.)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'mom-guilt',
    'parental-burnout-signs',
    'social-media-comparison-parenting',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Parenting Information Online. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/default.aspx',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Decision Fatigue: Understanding the Science of Decision-Making.',
      url: 'https://www.apa.org/topics/stress/decision-fatigue',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tuning In: Parents of Young Children Speak Up About What They Think, Know, and Need.',
      url: 'https://www.zerotothree.org/resource/tuning-in-parents-of-young-children-speak-up-about-what-they-think-know-and-need/',
    },
  ],
};
