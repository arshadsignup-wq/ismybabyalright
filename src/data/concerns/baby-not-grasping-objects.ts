import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-grasping-objects',
  title: 'Baby Not Grasping Objects',
  category: 'physical',
  searchTerms: [
    'baby not grasping objects',
    'baby won\'t grab toys',
    'baby not reaching for things',
    'baby doesn\'t pick up objects',
    'when do babies grab things',
    'baby not interested in grabbing',
    'infant not reaching for toys',
    'baby won\'t hold rattle',
    'baby not gripping anything',
    'baby hands stay open won\'t grab',
  ],
  quickAnswer:
    'Babies develop voluntary grasping gradually over the first several months. Most babies begin reaching for objects around 3 to 4 months and develop a reliable grasp by 5 to 6 months. If your baby is under 4 months and not yet grabbing things, this is completely expected and normal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have a reflexive palmar grasp that causes them to close their fingers around objects placed in their hand, but they are not yet reaching for or grasping things on purpose. By 2 to 3 months, babies begin to open their hands more and may bat at objects hanging above them. This is the very beginning of the grasping journey, and it is far too early to be concerned about not grabbing objects.',
    },
    {
      ageRange: '3-5 months',
      context:
        'This is when most babies start reaching for and grabbing objects intentionally. They may swipe at toys, rake objects toward themselves, and hold a lightweight rattle for brief moments. Their accuracy is still developing, so they will miss frequently and drop things often. By 5 months, most babies can reach for and grab an object they see. If your baby shows no interest in reaching for objects by 5 months, it is worth mentioning at your next well-child visit.',
    },
    {
      ageRange: '5-8 months',
      context:
        'Grasping skills become more refined during this period. Babies learn to transfer objects between hands, hold objects with a palmar grasp (whole hand wrapped around), and bang toys together. By 7 to 8 months, most babies eagerly grab for everything within reach. If your baby still cannot grasp and hold a toy by 6 months, discuss this with your pediatrician.',
    },
    {
      ageRange: '8-12 months',
      context:
        'By this age, babies typically have a well-developed grasp and are working on the pincer grasp (using thumb and index finger). They pick up small foods, hold bottles or cups, and explore objects by turning them over in their hands. If your baby is still struggling to grasp objects at this age, a fine motor evaluation may be helpful to identify any areas where extra support is needed.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and not yet reaching for or grabbing things, as voluntary grasping has not yet developed at this age.',
    'Your baby reaches for objects but misses often or drops them quickly, which is normal as coordination is still maturing.',
    'Your baby grabs large objects well but has trouble with smaller items that require more precise finger control.',
    'Your baby prefers to bat at or swipe at objects rather than grasp them, which is a normal early stage of reaching.',
    'Your baby seems more interested in looking at objects or mouthing them than holding them in their hands.',
  ],
  whenToMention: [
    'Your baby shows no interest in reaching for objects at all by 5 months of age.',
    'Your baby cannot hold a lightweight rattle or toy placed in their hand for even a few seconds by 6 months.',
    'Your baby reaches and grasps with one hand but consistently ignores or avoids using the other hand.',
  ],
  whenToActNow: [
    'Your baby was previously grasping objects and has lost the ability to do so, as any loss of previously acquired skills needs prompt evaluation.',
    'Your baby has no grasping ability by 6 months combined with other concerns like poor head control, lack of eye contact, or very low muscle tone.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-reaching',
    'fine-motor-transferring',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Babies 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Six Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
  ],
};
