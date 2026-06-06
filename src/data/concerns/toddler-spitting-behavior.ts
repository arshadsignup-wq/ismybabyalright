import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-spitting-behavior', title: 'Toddler Spitting at People', category: 'behavior',
  searchTerms: ['toddler spitting','toddler spits at people','toddler spitting food','toddler spitting phase','toddler spits when angry','stop toddler spitting','toddler spitting at parents','toddler spitting behavior','why toddler spitting','toddler spits on purpose'],
  quickAnswer: 'Spitting is an unpleasant but common toddler behavior. Young toddlers discover spitting as a fun new skill and experiment with it. Older toddlers may spit when angry because it gets a strong reaction. The key is to stay calm (difficult, we know), avoid overreacting (which reinforces the behavior), set a clear limit, and redirect. For most children, spitting is a brief phase that passes.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers often discover spitting accidentally and then repeat it because it is a new and interesting sensation. They may spit food, water, or saliva. This is exploratory, not aggressive. A calm "We do not spit" is sufficient. Avoid a big reaction, which makes it more interesting.' },
    { ageRange: '2-3 years', context: 'Spitting may become a go-to expression of anger or frustration. Some children spit because it provokes a strong reaction from adults and peers. Stay calm, make brief eye contact, and say firmly: "Spitting is not okay. If you are angry, you can use your words." Then redirect.' },
    { ageRange: '3-4 years', context: 'If spitting persists, use natural consequences: if your child spits during a meal, the meal is over. If they spit at a friend, the playdate ends. Be consistent. "When you spit, we need to leave because spitting is not safe for others."' },
    { ageRange: '4-5 years', context: 'Spitting should be rare by this age. If your child is still spitting frequently, look at what function the behavior serves. Is it getting attention? Is it expressing anger they cannot otherwise communicate? Address the underlying need.' },
  ],
  whenNormal: ['Brief spitting phase in young toddlers exploring a new ability','Spitting that stops when you do not give it a big reaction','Spitting during moments of anger that decreases with consistent limits','Your child does not spit at peers in social settings'],
  whenToMention: ['Spitting is very frequent and directed at others','Spitting continues despite consistent intervention over weeks','Spitting is part of a pattern of disruptive behaviors','Your child spits in social settings causing relationship problems'],
  whenToActNow: ['Spitting is accompanied by other escalating aggressive behaviors','Your child is being excluded from care settings due to spitting'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Challenging Behaviors: Understanding and Responding.', url: 'https://www.zerotothree.org/resource/challenging-behaviors/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-hitting-when-angry','toddler-testing-limits-constantly','toddler-throwing-objects-at-people','toddler-anger-management-skills'],
};
