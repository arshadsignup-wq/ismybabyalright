import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-pulling-hair-others', title: 'Toddler Pulls Hair', category: 'behavior',
  searchTerms: ['toddler pulling hair','toddler grabs hair','toddler hair pulling aggressive','baby pulls hair','toddler pulls own hair','toddler yanks hair frustration','stop toddler pulling hair','toddler hair pulling phase','toddler grabs other kids hair','toddler pulls moms hair'],
  quickAnswer: 'Hair pulling is common in babies and toddlers. Young babies pull hair because they are fascinated by grasping and do not understand it hurts. Toddlers may pull hair during conflicts, out of frustration, or because it gets a strong reaction. Some children also pull their own hair as a self-soothing or stress behavior. The response depends on the age and motivation.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies grab and pull hair as part of normal motor exploration. They are practicing their grasp and do not understand they are causing pain. Calmly unwrap their fingers, say "Gentle" and guide their hand to pat instead. Keep your hair tied back if possible.' },
    { ageRange: '12-24 months', context: 'Hair pulling can become a go-to behavior during frustration or conflict because it is effective - the other person reacts strongly. Stay calm to avoid reinforcing the behavior with a big reaction. Gently remove their hand, say "No pulling hair. That hurts." and redirect.' },
    { ageRange: '2-3 years', context: 'If hair pulling continues, work on teaching alternatives. Some children pull their own hair when stressed, which is a different behavior that may need monitoring. For peer hair-pulling, stay close during play and intervene early when you see frustration building.' },
    { ageRange: '3-5 years', context: 'Hair pulling of others should be rare by this age. If your child pulls their own hair, creating bald patches or doing it frequently when stressed, this could be trichotillomania and should be discussed with your pediatrician.' },
  ],
  whenNormal: ['Babies grabbing and pulling hair as part of exploration','Occasional hair pulling during toddler conflicts','Hair pulling decreases as communication skills develop','Your child can be redirected after the behavior'],
  whenToMention: ['Your child pulls their own hair frequently, creating bald patches','Hair pulling of others continues past age 3','Hair pulling is part of a broader pattern of aggressive behavior','Your child pulls hair in a ritualistic or compulsive way'],
  whenToActNow: ['Your child is causing injury through hair pulling','Your child has noticeable hair loss from pulling their own hair'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Habits.aspx' },
    { org: 'NIH', citation: 'Franklin ME et al. Trichotillomania and its treatment: a review and recommendations. Expert Rev Neurother. 2011;11(8):1165-1174.', url: 'https://pubmed.ncbi.nlm.nih.gov/21797657/' },
  ],
  relatedConcernSlugs: ['toddler-scratching-others','toddler-pinching-behavior','toddler-hitting-when-angry','toddler-gentle-hands-teaching'],
};
