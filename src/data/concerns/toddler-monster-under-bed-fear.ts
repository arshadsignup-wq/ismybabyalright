import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-monster-under-bed-fear',
  title: 'Toddler Afraid of Monsters Under the Bed',
  category: 'sleep',
  searchTerms: ['toddler afraid of monsters', 'child scared of monsters bedtime', 'monster under bed fear', 'toddler imaginary fears', 'monster spray for kids', 'toddler scared of something in room', 'child sees monsters at night', 'how to help child with monster fear', 'toddler bedroom fears creatures', 'toddler imagination fears bedtime'],
  quickAnswer: 'Fear of monsters is a hallmark of ages 2-5 when imagination is flourishing. Your child is not being manipulative - their brain genuinely cannot fully distinguish between real and imaginary, especially in the dark. Take their fear seriously while gently helping them build coping skills. Most children outgrow this phase as their understanding of real vs. pretend matures.',
  byAge: [
    { ageRange: '2-3 years', context: 'Monster fears typically first appear around age 2-3 as imagination develops. Your child cannot yet fully distinguish between real and pretend, especially when tired and in a dark room. Validate their feelings ("I can see you feel scared") and then provide reassurance ("Monsters are pretend. You are safe in your room"). Avoid elaborate monster hunts, as this can inadvertently confirm that monsters might be real.' },
    { ageRange: '3-4 years', context: 'Monster fears often peak at this age. Your child may describe specific creatures or point to shadows. Empowerment strategies work well: "monster spray" (a decorated water bottle), a "guard" stuffed animal, a nightlight, or a flashlight they can control. Some families create a "no monsters allowed" sign for the door. Keep bedtime media completely non-scary and avoid monster themes in play close to bedtime.' },
    { ageRange: '4-5 years', context: 'As your child begins to understand that monsters are pretend, the fear typically starts to fade. You can gently help this process by reading books where characters overcome fears. Avoid dismissing or shaming the fear. Some children benefit from drawing their monster and then making it silly or friendly, transforming the fear into something they control.' },
    { ageRange: '5+ years', context: 'Most children have outgrown intense monster fears by this age, though occasional nervousness is normal. If monster fears are intensifying or your child seems to genuinely believe threatening things are in their room, discuss this with your pediatrician to rule out nighttime hallucinations (hypnagogic hallucinations, which are actually normal but can be frightening) or anxiety disorders.' },
  ],
  whenNormal: ['Your child between 2-5 fears monsters or scary creatures at bedtime - this is extremely common', 'The fear is manageable with comfort strategies like a nightlight and reassurance', 'Fear is worst at bedtime and in the dark but does not significantly affect daytime behavior', 'The fear gradually decreases as your child matures'],
  whenToMention: ['Monster fears are severe enough to prevent sleep for extended periods despite comfort strategies', 'Your child seems to genuinely see or hear things that are not there while awake and alert', 'The fear is part of a broader pattern of anxiety that is limiting daily activities'],
  whenToActNow: ['Your child describes seeing specific, detailed hallucinations while fully awake', 'Fear is accompanied by extreme behavioral changes, regression, or signs of trauma'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Coping with Fears in Early Childhood.', url: 'https://www.zerotothree.org/resource/common-toddler-fears/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting: Preschoolers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
  ],
  relatedConcernSlugs: ['toddler-night-time-fears', 'toddler-dark-room-fear', 'toddler-nightmare-frequency', 'toddler-bedtime-fears-new'],
};
