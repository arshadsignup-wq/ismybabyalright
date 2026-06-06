import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-tantrum-vs-meltdown', title: 'Tantrum vs Sensory Meltdown: What Is the Difference?', category: 'behavior',
  searchTerms: ['tantrum vs meltdown','sensory meltdown toddler','difference tantrum meltdown','toddler sensory overload','meltdown not tantrum','sensory processing tantrum','toddler overwhelmed meltdown','autism meltdown vs tantrum','toddler shutdown sensory','tantrum or sensory issue'],
  quickAnswer: 'A tantrum is a goal-driven emotional outburst - your child wants something and is expressing frustration when they cannot have it. A sensory meltdown is an involuntary response to sensory overload where your child has lost the ability to regulate. The key difference: tantrums typically stop when the child gets what they want or realizes the tantrum is not working; meltdowns continue regardless because the child genuinely cannot stop.',
  byAge: [
    { ageRange: '12-24 months', context: 'At this age, most outbursts are tantrums driven by frustration and limited communication. True sensory meltdowns can occur but are harder to distinguish because all emotional regulation is still very immature. Watch for triggers: tantrums follow a denied request; meltdowns follow overwhelming environments.' },
    { ageRange: '2-3 years', context: 'The distinction becomes clearer. Tantrums often involve checking to see if you are watching, escalating and de-escalating, and stopping when needs are met. Meltdowns involve a glazed or panicked look, covering ears or eyes, and an inability to respond to reasoning or comfort.' },
    { ageRange: '3-4 years', context: 'By this age, you can start to see clear patterns. If outbursts consistently happen in loud, bright, or crowded environments and your child seems genuinely distressed rather than demanding, sensory processing differences may be involved. A tantrum usually has a clear want; a meltdown has a clear overwhelm.' },
    { ageRange: '4-5 years', context: 'Children with typical sensory processing have fewer meltdowns as they develop coping strategies. If meltdowns remain frequent and intense, particularly in specific sensory environments, discuss sensory processing evaluation with your pediatrician or occupational therapist.' },
  ],
  whenNormal: ['Occasional outbursts in overwhelming environments like busy stores or parties','Your child recovers after being removed from the stimulating environment','Tantrums decrease as your child develops communication skills','Your child can handle most everyday environments without distress'],
  whenToMention: ['Your child consistently melts down in specific sensory environments','Outbursts seem involuntary and your child cannot be reasoned with during them','Your child covers ears, eyes, or retreats from sensory input regularly','Recovery from meltdowns takes much longer than typical tantrums'],
  whenToActNow: ['Your child becomes a danger to themselves or others during meltdowns','Meltdowns are so frequent they prevent normal daily activities'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddler Tantrums.', url: 'https://www.zerotothree.org/resource/toddler-tantrums/' },
    { org: 'NIH', citation: 'Ben-Sasson A et al. Sensory Over-Responsivity in Elementary School. J Abnorm Child Psychol. 2009;37(5):705-716.', url: 'https://pubmed.ncbi.nlm.nih.gov/19153827/' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-tantrum-duration-normal','toddler-emotional-regulation-skills','sensory-processing-concerns'],
};
