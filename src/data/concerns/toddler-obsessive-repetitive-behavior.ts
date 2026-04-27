import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-obsessive-repetitive-behavior',
  title: 'Toddler Obsessive or Repetitive Behaviors',
  category: 'behavior',
  searchTerms: ['toddler obsessive repetitive behavior','toddler OCD signs','toddler repetitive play','toddler lines up toys','toddler repeats same thing over and over','toddler rigid routines','toddler has to have things a certain way','toddler obsessed with order','toddler rituals','toddler stuck on one thing','toddler repetitive movements normal','when repetitive behavior is autism'],
  quickAnswer: 'Repetitive behaviors are a normal part of toddler development. Toddlers thrive on predictability and repetition because it helps them master new skills and understand their world. Lining up toys, wanting the same book read 20 times, insisting on the same routine, and repeating words or phrases are all typical toddler behaviors. These behaviors become concerning when they are so rigid that any disruption causes extreme distress, when they interfere with learning or social interaction, or when they are accompanied by other developmental red flags.',
  byAge: [
    { ageRange: '12-18 months', context: 'Repetitive actions at this age are how babies learn - dropping objects over and over, banging toys, opening and closing doors, and repeating sounds or syllables. This is cause-and-effect learning and motor skill development. Babies may also develop strong preferences for specific routines (same bedtime routine, same cup). This is normal and helps them feel secure. Allow the repetition - it serves a developmental purpose.' },
    { ageRange: '18-24 months', context: 'Toddlers become more rigid in their preferences. They may insist on the same plate, same path to the car, or same pajamas. Lining up toys, stacking objects, and sorting by color or size are normal play patterns that reflect developing cognitive skills. Repeating words (echolalia) as they build language is typical. These behaviors should not prevent your toddler from also engaging in imaginative play, social interaction, and varied activities.' },
    { ageRange: '2-3 years', context: 'Repetitive behaviors often peak around age 2-3 and then gradually decrease as flexibility and coping skills develop. Your toddler may have "rules" about how things should be done and become upset when those rules are broken. This is normal but should be manageable - you should be able to redirect your child after a brief protest. If disrupting a routine causes extended meltdowns (30+ minutes), your child cannot transition to other activities, or repetitive behaviors are increasing rather than decreasing, mention it to your pediatrician.' },
    { ageRange: '3-4 years', context: 'By age 3-4, most children become more flexible and less insistent on rigid routines. If repetitive behaviors are intensifying, expanding to new areas, or your child seems "stuck" and unable to stop even when they want to, this may indicate something beyond typical development. Repetitive behaviors that interfere with daily functioning, social interaction, or learning should be evaluated. Context matters - repetitive behavior alongside good social skills, eye contact, and communication is different from repetitive behavior alongside social withdrawal.' },
  ],
  whenNormal: ['Your toddler wants the same book read repeatedly but can also enjoy other books','Your toddler lines up toys sometimes but also plays with them in other ways','Your toddler prefers certain routines but can tolerate changes with brief upset','Repetitive behaviors decrease over time as your child develops more flexibility'],
  whenToMention: ['Repetitive behaviors are so rigid that any disruption causes extreme prolonged distress','Your child only plays in repetitive patterns and does not engage in pretend play by age 2-3','Repetitive behaviors are increasing rather than decreasing over time','The behaviors interfere with learning, social interaction, or daily activities'],
  whenToActNow: ['Repetitive self-injurious behaviors - head banging hard enough to cause injury, hitting self, biting self','Sudden onset of repetitive movements or behaviors that are new and unusual for your child','Repetitive behaviors alongside loss of previously acquired skills (regression)'],
  relatedMilestones: ['social-emotional-regulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['early-signs-of-autism-baby','baby-hand-flapping','toddler-constant-meltdowns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Repetitive Behaviors in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'NIH', citation: 'Leekam SR, et al. Describing the Sensory Abnormalities of Children and Adults with Autism. Journal of Autism and Developmental Disorders. 2007.', url: 'https://pubmed.ncbi.nlm.nih.gov/17066310/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs and Symptoms of Autism Spectrum Disorder.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
  ],
};
