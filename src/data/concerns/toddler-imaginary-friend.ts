import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-imaginary-friend', title: 'Toddler Has an Imaginary Friend', category: 'behavior',
  searchTerms: ['toddler imaginary friend','child imaginary friend normal','preschooler imaginary friend','toddler pretend friend','toddler invisible friend','imaginary friend concerning','child talks to imaginary friend','when are imaginary friends normal','toddler makes up friend','imaginary friend age appropriate'],
  quickAnswer: 'Imaginary friends are a normal and healthy part of childhood development. Research shows that up to 65% of children have an imaginary friend at some point, most commonly between ages 2.5 and 7. Children with imaginary friends often have advanced language skills, greater creativity, better social understanding, and stronger emotional processing. An imaginary friend is a sign of a healthy imagination, not a problem.',
  byAge: [
    { ageRange: '12-24 months', context: 'True imaginary friends are rare at this age, but early pretend play is emerging. Your toddler may talk to stuffed animals or treat dolls as real. This is the beginning of symbolic play and is a positive developmental sign.' },
    { ageRange: '2-3 years', context: 'Imaginary friends often first appear during this period. They may be invisible people, talking animals, or characters with names and personalities. Your child may insist on setting a place at the table or buckling the imaginary friend into the car. Play along - this supports their imaginative development.' },
    { ageRange: '3-5 years', context: 'Peak imaginary friend age. The friend may have elaborate backstories, opinions, and adventures. Children often use imaginary friends to process emotions, practice social skills, and work through fears. They know the friend is not real but enjoy the pretend. This is creative and healthy.' },
    { ageRange: '5-7 years', context: 'Imaginary friends typically fade as children develop more complex real-world social relationships. Some children maintain imaginary friends longer, which is still normal. If your child relies exclusively on an imaginary friend and avoids real social connections, discuss with your pediatrician.' },
  ],
  whenNormal: ['Imaginary friends between ages 2-7 are very common','Your child knows the friend is pretend when asked directly','Your child has real friendships alongside the imaginary one','The imaginary friend helps your child process feelings and practice social skills'],
  whenToMention: ['Your child insists the imaginary friend is completely real and becomes very distressed when questioned','The imaginary friend tells your child to do harmful things','Your child has no real friends and relies exclusively on the imaginary one','The imaginary friend causes significant disruption to daily life'],
  whenToActNow: ['Your child reports the imaginary friend is scary and they cannot make it go away','Your child is hurting others and blaming the imaginary friend consistently'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Imaginary Friends. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Imaginary-Friends.aspx' },
    { org: 'NIH', citation: 'Taylor M et al. The characteristics and correlates of fantasy in school-age children. Dev Psychol. 2004;40(6):1173-1187.', url: 'https://pubmed.ncbi.nlm.nih.gov/15535766/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Pretend Play: How It Supports Development.', url: 'https://www.zerotothree.org/resource/pretend-play/' },
  ],
  relatedConcernSlugs: ['toddler-lying-age-appropriate','toddler-empathy-development-timeline','toddler-fear-development-normal','toddler-emotional-intelligence-building'],
};
