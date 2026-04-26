import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-jumping',
  title: 'Toddler Not Jumping',
  category: 'physical',
  searchTerms: [
    'toddler not jumping',
    'when do toddlers learn to jump',
    'toddler can\'t jump with both feet',
    '2 year old not jumping',
    'toddler won\'t jump',
    'child not jumping off ground',
    'delayed jumping toddler',
    'toddler feet don\'t leave ground',
    'when should toddler jump',
    'toddler can\'t get both feet off ground',
  ],
  quickAnswer:
    'Jumping with both feet leaving the ground is a skill that typically develops between 24 and 30 months, though some children do not master it until closer to 3 years old. It requires significant coordination, leg strength, and balance, so it is one of the later gross motor milestones to emerge. Most toddlers who are running and climbing well will develop jumping in their own time.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age are focused on learning to walk, and jumping is not yet expected. They may enjoy bouncing while being held or bouncing on a soft surface like a bed or trampoline with support. This bouncing motion helps build the leg strength and coordination that will eventually be needed for independent jumping. There is no cause for concern about jumping at this age.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Some toddlers begin attempting to jump by crouching down and pushing up, though their feet may not fully leave the ground. Others may step off a low step with one foot, which is a precursor to jumping. Many toddlers at this age are still mastering running and climbing and are not yet ready for jumping. This is all within the normal range.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the typical window for jumping to develop. Most children can jump with both feet by around 24 to 30 months, starting with small hops and progressing to jumping over objects and off low surfaces. If your child is 30 months or older and cannot get both feet off the ground at all, it is reasonable to mention this to your pediatrician, especially if they also have difficulty running or climbing.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3, most children can jump well with both feet, jump forward, and jump down from a low step. If your child still cannot jump at all by their third birthday, a gross motor evaluation can help determine whether physical therapy or other support would be beneficial. Some children simply need extra practice, while others may have mild strength or coordination differences that respond well to targeted exercises.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2 years old and not yet jumping, as this skill typically develops between 24 and 30 months.',
    'Your toddler is attempting to jump by crouching and pushing up, but their feet are not yet fully leaving the ground.',
    'Your toddler can jump on soft surfaces like a trampoline or bed but struggles on hard floors.',
    'Your toddler is walking and running well but has not figured out the coordination for jumping yet.',
    'Your toddler jumps with one foot leaving the ground but not both at the same time.',
  ],
  whenToMention: [
    'Your child is over 30 months and makes no attempt to jump or shows no interest in jumping activities.',
    'Your child seems to have difficulty with leg strength overall, including trouble climbing stairs, running, or squatting down to pick things up.',
  ],
  whenToActNow: [
    'Your child was previously able to jump and has lost the ability, or is losing other motor skills they previously had.',
    'Your child has significant difficulty with all gross motor activities including walking, running, and climbing, along with not jumping.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-climbing',
    'gross-motor-jumping',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Children Ages 2 to 3. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-to-3-Years.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
