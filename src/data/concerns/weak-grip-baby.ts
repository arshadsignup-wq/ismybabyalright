import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'weak-grip-baby',
  title: 'My Baby Has a Weak Grip',
  category: 'physical',
  searchTerms: [
    'baby weak grip',
    'baby can\'t hold things',
    'baby drops everything',
    'baby won\'t grasp toys',
    'infant grip strength',
    'baby not grasping',
    'baby can\'t hold rattle',
    'baby weak hands',
    'newborn palmar grasp weak',
    'baby doesn\'t grab objects',
  ],
  quickAnswer:
    'Grip strength develops gradually over the first year. Newborns have a reflexive grasp that fades around 3-4 months, and voluntary grasping then takes over. Dropping objects frequently is completely normal for young babies who are still developing hand control. If your baby shows no interest in grasping at all by 4-5 months or cannot hold objects briefly by 6 months, talk to your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have an automatic palmar grasp reflex: if you place your finger in their palm, they will clench it. This reflex begins to fade around 2-3 months as voluntary grasping starts to develop. It is normal for babies at this age to have their hands fisted much of the time. By the end of this period, your baby should be starting to open their hands more, bat at dangling objects, and briefly hold a lightweight rattle placed in their hand.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Voluntary grasping is developing. Your baby should be reaching for objects and trying to grab them, though their aim will be imprecise and they will drop things frequently. They may use a "raking" grasp, scooping objects toward themselves with their whole hand. If your baby shows no interest in reaching for objects, keeps their hands tightly fisted most of the time, or cannot hold a lightweight toy at all, mention it to your pediatrician.',
    },
    {
      ageRange: '5-8 months',
      context:
        'Grip strength improves significantly during this period. Babies learn to transfer objects from hand to hand (around 6 months), hold two objects at once, and use a palmar grasp to pick up larger items. They may still have difficulty with small objects. If your baby cannot hold a toy for even a few seconds, does not transfer objects between hands by 7 months, or has noticeably different grip strength between the two hands, ask your pediatrician about evaluation.',
    },
    {
      ageRange: '8-12 months',
      context:
        'The pincer grasp (using thumb and forefinger to pick up small objects) typically develops between 8-10 months. By 12 months, most babies can pick up small foods like cereal pieces and hold a cup with two hands. If your baby is still unable to grasp objects firmly, cannot pick up small items, or frequently drops things that most babies their age can hold, a fine motor evaluation may be helpful.',
    },
  ],
  whenNormal: [
    'Your baby drops objects frequently but is actively trying to grasp and hold things.',
    'Your baby has a stronger grip with one hand than the other but uses both hands.',
    'Your newborn\'s palmar grasp reflex is present but seems lighter than you expected, as grasp strength varies among newborns.',
    'Your baby holds large objects well but struggles with smaller items that require more precise grip.',
  ],
  whenToMention: [
    'Your baby shows no interest in reaching for or grasping objects by 4-5 months.',
    'Your baby\'s hands are frequently tightly fisted past 4 months of age and they have difficulty opening them.',
    'Your baby has a noticeably weaker grip on one side compared to the other, or uses one hand significantly more.',
  ],
  whenToActNow: [
    'Your baby was grasping objects and has lost the ability to hold things, as any loss of skills requires prompt evaluation.',
    'Your baby has no grasp whatsoever by 6 months and cannot hold a rattle when placed in their hand, combined with other developmental concerns.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-transferring',
    'fine-motor-pincer-grasp',
    'fine-motor-midline-play',
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
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Six Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Infant Development: Milestones from 4 to 6 Months.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/infant-development/art-20048178',
    },
  ],
};
