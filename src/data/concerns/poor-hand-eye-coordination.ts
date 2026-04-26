import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'poor-hand-eye-coordination',
  title: 'Poor Hand-Eye Coordination',
  category: 'physical',
  searchTerms: [
    'poor hand eye coordination baby',
    'toddler clumsy hands',
    'baby can\'t reach and grab',
    'child poor coordination',
    'baby misses when reaching for toys',
    'toddler hand eye coordination delayed',
    'baby trouble coordinating hands and eyes',
    'child can\'t catch ball',
    'toddler poor fine motor coordination',
    'baby not accurate when reaching',
  ],
  quickAnswer:
    'Hand-eye coordination - the ability to use visual information to guide hand movements - develops gradually throughout infancy and toddlerhood. Babies begin by swiping at objects they see around 3 to 4 months and progressively become more accurate. It is normal for young children to be "clumsy" with their hands, and precision improves significantly with practice and brain maturation.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'Babies are just beginning to connect what they see with what their hands do. They swipe at dangling toys, sometimes making contact and sometimes missing. By 5 to 6 months, most babies can reach for and grab an object they see, though their aim is still imprecise. They may overshoot, undershoot, or grab with their whole hand rather than precisely. This early inaccuracy is completely normal and expected.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Hand-eye coordination improves noticeably during this period. Babies can reach for and grab objects more reliably, transfer items between hands, and begin to use a raking motion to pull small objects closer. They enjoy activities like banging toys together, which requires coordinating both hands with what they see. Mild inaccuracy is still normal, but your baby should generally be able to reach for and grab the objects they want.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babies become increasingly precise in their hand movements. They develop the pincer grasp, place objects into containers, and point at things they want. Stacking is still too advanced, but they enjoy knocking down towers that you build. If your baby consistently has trouble reaching for objects they can clearly see, or seems unable to coordinate their hands with their vision, mention this to your pediatrician.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers practice hand-eye coordination through stacking blocks, scribbling with crayons, feeding themselves with utensils, and placing shapes into sorters. They are still developing precision, so spills, misses, and fumbles are expected. By 18 months, most toddlers can stack 2 to 3 blocks and scribble with a crayon. If your toddler consistently struggles with all fine motor tasks that require hand-eye coordination, an occupational therapy evaluation may be helpful.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Hand-eye coordination becomes more refined. Children can stack taller towers, thread large beads, turn pages of a book one at a time, and catch a large ball rolled to them. If your child has persistent difficulty with tasks that require coordinating their hands with what they see, and this is significantly behind their peers, a developmental evaluation can determine whether targeted support would be beneficial.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months frequently misses when reaching for objects, as precision develops over several months.',
    'Your toddler makes messes when eating or drops things frequently, which is normal as fine motor control is still maturing.',
    'Your child is better at some hand-eye tasks than others, as different activities require different levels of coordination.',
    'Your child seems clumsy when trying new activities but improves with practice over days and weeks.',
  ],
  whenToMention: [
    'Your baby is over 6 months and cannot reliably reach for and grab objects they can see.',
    'Your toddler is significantly behind peers in fine motor tasks like stacking blocks, using a spoon, or scribbling.',
    'Your child seems to have trouble coordinating both hands together for tasks that require it.',
  ],
  whenToActNow: [
    'Your child has a sudden loss of hand-eye coordination or fine motor skills they previously had.',
    'Your child has persistent difficulty coordinating movements on one side of the body, which could indicate a neurological concern.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-stacking',
    'fine-motor-self-feeding',
    'fine-motor-pincer-grasp',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand and Finger Skills: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Eighteen Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
  ],
};
