import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-playing-with-toys',
  title: 'Baby Not Playing with Toys or Showing Interest',
  category: 'behavior',
  searchTerms: ['baby not playing with toys','baby no interest in toys','baby won\'t play with toys','baby doesn\'t play','baby not interested in anything','toddler not playing appropriately','baby only mouths toys','baby throws all toys','baby doesn\'t explore toys','baby not engaging with toys','when should baby play with toys','baby bored with toys'],
  quickAnswer: 'How babies "play" changes dramatically with age. Young babies explore toys by mouthing, banging, and dropping - this IS play at their stage. Babies do not manipulate toys purposefully until around 9-12 months. If your baby is engaging with the world - looking at faces, reaching for objects, putting things in their mouth - they are playing appropriately even if it does not look like what you expect. Concern arises when a baby shows no interest in objects OR people, does not reach for or explore anything, or seems passive about their environment.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies this age do not "play with toys" in any traditional sense. They look at high-contrast patterns, track moving objects, listen to sounds, and begin swiping at dangling toys. The most important "toy" at this age is your face. If your baby watches your face, responds to your voice, and follows moving objects with their eyes, their play development is on track. Offer high-contrast cards, a simple rattle, and plenty of face-to-face interaction.' },
    { ageRange: '3-6 months', context: 'Babies begin reaching for and grasping toys, bringing everything to their mouth, and shaking rattles. They are fascinated by cause and effect - hitting a toy that makes noise, crumpling paper, splashing water. If your baby is reaching for objects and exploring them with their hands and mouth, this is appropriate play. Offer a variety of textures and sounds. If your baby is not reaching for objects by 5 months, mention it to your pediatrician.' },
    { ageRange: '6-12 months', context: 'Play becomes more purposeful - banging toys together, dropping and picking up, putting objects in and out of containers, and starting to figure out how toys work. Simple cause-and-effect toys (push a button, something happens) become engaging. If your baby only mouths toys without exploring them in other ways by 9-10 months, this may indicate a developmental delay. Babies should also be showing interest in what other people are doing with objects.' },
    { ageRange: '12-24 months', context: 'Toddlers begin functional play - using a toy phone to "talk," pushing a toy car, feeding a doll. By 18-24 months, simple pretend play should emerge. If your toddler only lines up, spins, or stacks toys without any functional or pretend play by age 2, this is worth discussing with your pediatrician. However, a toddler who does both (sometimes lines up toys AND sometimes plays pretend) is showing normal play development. Variety of play types is more important than any single behavior.' },
  ],
  whenNormal: ['Your young baby explores toys by mouthing, banging, and dropping - this is age-appropriate play','Your baby prefers faces and people over toys - people ARE the best toys for babies','Your toddler rotates between different play styles including lining up, stacking, and pretending','Your baby seems bored with certain toys but engages with new ones - they may just need toy rotation'],
  whenToMention: ['Your baby over 6 months shows no interest in reaching for or exploring objects','Your toddler only plays with toys in one repetitive way and does not show pretend play by age 2','Your baby seems passive and does not engage with objects or people','Your child has lost interest in toys and activities they previously enjoyed'],
  whenToActNow: ['Your baby suddenly stops playing and becomes lethargic or unresponsive - could indicate illness','Your child has lost play skills they previously had (regression)','Your baby shows no interest in objects, people, or the environment - seems disconnected from the world'],
  relatedMilestones: ['fine-motor-grasp','cognitive-object-permanence'],
  showSelfReferral: true,
  relatedConcernSlugs: ['early-signs-of-autism-baby','baby-not-interested-in-people','baby-flat-affect-no-expression'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development. Pediatrics. 2018.', url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child by 12 Months.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Play: What Every Parent Should Know.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
