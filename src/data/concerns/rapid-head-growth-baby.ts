import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rapid-head-growth-baby',
  title: 'Rapid Head Growth',
  category: 'medical',
  searchTerms: [
    'rapid head growth baby',
    'baby head growing too fast',
    'head circumference increasing quickly baby',
    'baby head size jumping percentiles',
    'hydrocephalus signs baby',
    'baby head growth accelerating',
    'fast head growth infant',
    'head circumference crossing percentiles upward baby',
  ],
  quickAnswer:
    'Rapid head growth  -  when head circumference crosses upward through two or more percentile lines  -  needs medical evaluation because the skull grows in response to brain growth and fluid accumulation. While benign causes such as familial macrocephaly and benign external hydrocephalus are common, rapid head growth can also indicate hydrocephalus (excess fluid causing pressure on the brain), which requires treatment. Your pediatrician will assess the fontanelle, developmental milestones, and growth trends and may order imaging if the pattern is concerning.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Head growth is naturally fastest in the first 3 months of life (approximately 2 cm per month). A single measurement may not be reliable due to birth-related swelling or measurement variation. Your pediatrician looks at the trajectory across multiple visits. If the fontanelle is soft and flat, your baby is feeding well and developing normally, and a parent has a large head, rapid growth in this period is often benign. However, persistent crossing of percentile lines upward warrants evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Head growth typically slows to about 1 cm per month by this age. If head circumference continues to accelerate (growing faster than expected), your pediatrician may order a head ultrasound through the open fontanelle. Benign external hydrocephalus (also called benign enlargement of the subarachnoid spaces) is the most common cause of rapid head growth in otherwise healthy babies and typically resolves by 18-24 months. The ultrasound can distinguish this from hydrocephalus requiring intervention.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Head growth slows further to about 0.5 cm per month. If head growth remains accelerated, continued monitoring with imaging is important. Signs that suggest increased intracranial pressure include a bulging fontanelle, persistent vomiting, sunsetting eyes (iris pushed downward), excessive irritability, and developmental regression. These signs require urgent evaluation. If imaging shows enlarged ventricles, referral to a pediatric neurosurgeon is appropriate.',
    },
    {
      ageRange: '12 months+',
      context:
        'By the toddler years, head growth normally slows significantly (about 1 cm over 6 months). The fontanelle typically closes between 12-18 months. If head growth was being monitored for benign external hydrocephalus, it usually stabilizes by this age. If rapid head growth continues or new symptoms develop, MRI is the imaging modality of choice to evaluate brain structure and fluid spaces. Most children who had benign external hydrocephalus have completely normal outcomes.',
    },
  ],
  whenNormal: [
    'Your baby\'s head circumference jumped to a higher percentile but one or both parents have larger heads and the fontanelle is soft and flat.',
    'An ultrasound showed benign external hydrocephalus (extra fluid around the brain) and your baby is developing normally  -  this typically resolves on its own.',
    'A single head measurement was higher than expected, but subsequent measurements returned to the previous trajectory  -  measurement variation is common.',
    'Head growth was rapid in the first 2-3 months but has now stabilized on a consistent (though higher) percentile.',
  ],
  whenToMention: [
    'Your baby\'s head circumference has crossed upward through two or more percentile lines across consecutive visits.',
    'The fontanelle seems fuller or more prominent than before, even if not clearly bulging.',
    'Your baby\'s head is growing rapidly while weight and length gains are normal or slower  -  this disproportionate pattern warrants evaluation.',
  ],
  whenToActNow: [
    'Your baby has rapidly increasing head size with a tense or bulging fontanelle, persistent vomiting, sunsetting eyes, seizures, or extreme irritability  -  these suggest increased intracranial pressure and require emergency evaluation.',
    'Your baby has rapid head growth with developmental regression (losing skills previously acquired)  -  urgent neurological assessment is needed.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Head. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Hydrocephalus Fact Sheet.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hydrocephalus',
    },
  ],
};
