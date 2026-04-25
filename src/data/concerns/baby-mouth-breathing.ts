import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-mouth-breathing',
  title: 'My Baby Breathes Through Their Mouth',
  category: 'medical',
  searchTerms: [
    'baby mouth breathing',
    'baby breathing through mouth',
    'baby sleeps with mouth open',
    'baby can\'t breathe through nose',
    'baby mouth open all the time',
    'baby nasal congestion mouth breathing',
    'toddler mouth breather',
    'baby snoring mouth open',
    'baby mouth breathing causes',
    'baby enlarged adenoids',
  ],
  quickAnswer:
    'Young babies are preferential nose breathers and typically only breathe through their mouths when crying. If your baby is consistently mouth breathing, it is usually due to nasal congestion from a cold or allergies. However, chronic mouth breathing in an infant or toddler, especially during sleep, can sometimes indicate enlarged adenoids, nasal obstruction, or other issues that warrant evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are obligate nose breathers for the first few months, meaning they strongly prefer to breathe through their nose. Nasal congestion from dried mucus, a cold, or narrow nasal passages can cause noisy breathing and may lead to mouth breathing. This can interfere with feeding since babies need to breathe through their nose while nursing or bottle-feeding. Saline drops and gentle suctioning can help. Persistent mouth breathing in a newborn, especially with feeding difficulty, should be evaluated to rule out choanal atresia (a blockage of the nasal passages) or other anatomical issues.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies grow, they develop the ability to switch between nose and mouth breathing more easily. Temporary mouth breathing during a cold is normal and expected. If your baby is chronically mouth breathing even when not sick, observe whether it occurs primarily during sleep (suggesting enlarged adenoids or tonsils) or all day. Persistent nasal congestion with clear drainage may indicate environmental allergies, though true allergies are uncommon before 12 months.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Chronic mouth breathing in toddlers is most commonly caused by enlarged adenoids, allergic rhinitis, or chronic congestion. Signs of adenoid enlargement include habitual mouth breathing, snoring, restless sleep, and sometimes a nasal quality to the voice. Adenoid tissue grows through early childhood and is largest around age 3-7. If your toddler snores regularly, sleeps with their mouth open, and seems to have pauses in breathing during sleep, your pediatrician may refer you to an ENT specialist for evaluation.',
    },
  ],
  whenNormal: [
    'Temporary mouth breathing during a cold or when the nose is stuffy, which resolves as congestion clears',
    'Mouth breathing during crying, which is a normal response',
    'Brief mouth opening during deep sleep that is not habitual',
    'Your baby switches between nose and mouth breathing naturally and feeds without difficulty',
  ],
  whenToMention: [
    'Your baby or toddler seems to breathe through their mouth most of the time, even when not sick',
    'Your child consistently snores, sleeps with their mouth open, or has restless sleep with frequent position changes',
    'You notice your child frequently has a dry mouth, cracked lips, or bad breath from chronic mouth breathing',
  ],
  whenToActNow: [
    'Your newborn cannot breathe through their nose at all and struggles to feed, as this could indicate a structural nasal obstruction requiring urgent ENT evaluation',
    'Your child has mouth breathing with observed pauses in breathing during sleep (sleep apnea), gasping or choking awake, excessive daytime sleepiness, or behavioral issues from poor sleep quality',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Snoring, Mouth Breathing, and Sleep Apnea in Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Snoring-in-Children.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Marcus CL, et al. Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30067/Diagnosis-and-Management-of-Childhood-Obstructive',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Nasal Congestion in Infants.',
      url: 'https://www.mayoclinic.org/symptoms/nasal-congestion/basics/causes/sym-20050644',
    },
  ],
};
