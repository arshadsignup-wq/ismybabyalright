import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-walking-on-tiptoes',
  title: 'Walking on Tiptoes After Age 2',
  category: 'physical',
  searchTerms: [
    'toddler walking on tiptoes',
    'child walking on toes after 2',
    'toe walking toddler',
    'persistent toe walking',
    'toddler won\'t put heels down',
    'child walks on balls of feet',
    'idiopathic toe walking',
    'toe walking autism',
    'when is toe walking a concern',
    'toddler tip toe walking',
    'child still toe walking at 3',
  ],
  quickAnswer:
    'Toe walking is common and usually harmless in toddlers under 2 who are still experimenting with walking. However, persistent toe walking after age 2 - especially if your child cannot or will not walk with a flat foot when asked - is worth discussing with your pediatrician. Most cases of persistent toe walking are "idiopathic" (no known cause) and resolve with time or simple interventions.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Many new walkers spend time on their toes as they are learning to walk. This is considered a normal part of early walking development. Their nervous system is still figuring out the most efficient gait pattern, and toe walking at this stage is not a concern. Most babies will gradually transition to a heel-toe walking pattern as they gain experience.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Some toddlers continue to toe walk intermittently during this period, and it is still within the range of normal. However, you should notice that your toddler is also spending time walking with flat feet. If your toddler exclusively walks on their toes and never puts their heels down, this is worth noting. Most toddlers who are intermittently toe walking at this age will outgrow it.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Persistent toe walking after age 2 is the point at which most pediatricians recommend further evaluation. Your doctor will check whether your child can physically put their heels down (testing ankle flexibility) and may assess for other developmental concerns. In many cases, the cause is idiopathic, meaning there is no underlying neurological condition. Stretching exercises, physical therapy, or special bracing may be recommended.',
    },
    {
      ageRange: '3+ years',
      context:
        'If toe walking continues past age 3, further evaluation is usually recommended. Persistent toe walking can sometimes be associated with tight Achilles tendons, sensory processing differences, or neuromuscular conditions. Your pediatrician may refer to an orthopedist or neurologist. Treatment options include serial casting, physical therapy, and in rare cases, surgical lengthening of the Achilles tendon. Early intervention typically leads to better outcomes.',
    },
  ],
  whenNormal: [
    'Your child is under 2 years old and toe walks intermittently but can and does walk with flat feet.',
    'Your child goes up on tiptoes when excited or reaching for something, but walks normally the rest of the time.',
    'Your child has been walking for less than 6 months and is still experimenting with different walking patterns.',
    'Your child toe walks occasionally but has full ankle flexibility and can squat down flat-footed.',
  ],
  whenToMention: [
    'Your child is over 2 years old and walks on their toes most or all of the time.',
    'Your child seems unable to put their heels down when walking, even when you ask them to try.',
    'You notice that your child\'s calf muscles seem tighter than expected or they have limited ankle flexibility.',
  ],
  whenToActNow: [
    'Your child suddenly begins toe walking after previously walking normally, as this can indicate a neurological issue that needs prompt evaluation.',
    'Your child is toe walking and also showing signs of developmental regression, increasing stiffness, or difficulty with balance and coordination.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toe Walking in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Toe-Walking.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
