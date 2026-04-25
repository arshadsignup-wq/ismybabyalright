import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'delayed-pretend-play',
  title: 'My Toddler Doesn\'t Pretend Play',
  category: 'behavior',
  searchTerms: [
    'toddler not pretend playing',
    'when do toddlers start pretend play',
    'toddler doesn\'t use imagination',
    'no symbolic play toddler',
    'toddler won\'t play with dolls',
    'child not doing imaginative play',
    'delayed pretend play autism',
    'toddler only lines up toys',
    'when should kids start make believe',
    'toddler not feeding doll or stuffed animal',
  ],
  quickAnswer:
    'Pretend play typically emerges between 18-24 months and becomes more elaborate through the preschool years. Some children develop imaginative play earlier and some later, depending on temperament and exposure. While a delay in pretend play can sometimes signal a developmental difference, many late-blooming imaginations catch up fully with a little encouragement.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, most babies are engaging in functional play  -  banging blocks, putting objects in containers, and exploring how things work. Very early pretend play may appear, such as holding a toy phone to their ear or pretending to drink from an empty cup. If your child is not doing this yet, it is completely age-appropriate. They are still building the cognitive foundation that pretend play requires.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is the typical window for pretend play to emerge. You might see your toddler pretending to feed a doll, stirring an empty pot, or pushing a car with engine sounds. These simple acts of make-believe show that your child can hold a mental representation  -  understanding that one thing can stand for another. If pretend play has not appeared by 24 months, it is worth monitoring alongside other social and communication milestones.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Pretend play becomes richer and more elaborate during this period. Children may create simple scenarios  -  putting a stuffed animal to bed, playing "cooking," or pretending to be a doctor. If your child is 2-3 years old and still shows no interest in any form of pretend play, particularly if combined with limited social engagement or communication differences, it is a good time to bring it up at a well-child visit.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children engage in complex pretend play with storylines, role-playing, and interactive scenarios with peers. If pretend play is still absent or very rigid at this age  -  for example, only lining up or sorting toys rather than using them imaginatively  -  a developmental evaluation can help determine if additional support would be helpful. Some children simply have a more concrete play style, but it is worth exploring.',
    },
  ],
  whenNormal: [
    'Your toddler is under 18 months and has not started pretending yet  -  this is within the normal range',
    'Your child prefers physical or construction play (climbing, building, puzzles) over dolls and kitchen sets but still shows social engagement and communication',
    'Your child does some pretend play but less than other children of the same age  -  there is a wide range of normal',
    'Your toddler pretends when you model it first but does not initiate pretend play independently yet',
  ],
  whenToMention: [
    'Your child is over 24 months with no signs of pretend play alongside delays in language or social interaction',
    'Your child rigidly lines up, sorts, or organizes toys without using them in varied or imaginative ways, and becomes upset if the arrangement is changed',
    'Your child has lost pretend play skills they previously demonstrated',
  ],
  whenToActNow: [
    'Your child has lost previously acquired pretend play skills along with regression in language or social skills at any age',
    'Absence of pretend play is accompanied by very limited eye contact, no response to name, and no interest in social interaction',
  ],
  relatedMilestones: [
    'cognitive-symbolic-thinking',
    'social-emotional-engagement',
    'language-expressive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development in Young Children. Pediatrics. 2018;142(3).',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Pretend Play: How It Supports Development.',
      url: 'https://www.zerotothree.org/resource/pretend-play/',
    },
  ],
};
