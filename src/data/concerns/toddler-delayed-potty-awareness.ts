import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-delayed-potty-awareness',
  title: 'Toddler Not Showing Potty Training Readiness',
  category: 'behavior',
  searchTerms: ['toddler not ready for potty training', 'toddler no interest in potty', 'toddler not potty trained', 'late potty training', 'toddler doesn\'t know when wet', 'toddler not potty aware', 'toddler refuses potty', 'toddler potty training delay', '3 year old not potty trained', 'toddler no potty readiness signs'],
  quickAnswer: 'Every child develops potty training readiness at their own pace. While some children show interest as early as 18 months, many are not truly ready until 2.5-3.5 years, and this wide range is completely normal. Readiness signs include staying dry for 2+ hours, showing awareness of being wet or dirty, being able to follow simple instructions, showing interest in the toilet, and being able to pull pants up and down. Pushing potty training before a child is ready often leads to resistance, stress, and a longer process overall. Boys tend to train later than girls on average.',
  byAge: [
    { ageRange: '0-12 months', context: 'Potty training is not expected or recommended for babies under 1 year. Babies have no voluntary control over their bladder or bowels at this age. Some families practice "elimination communication" (observing and responding to baby\'s elimination cues), but this is about parent timing rather than the baby being trained. There is no benefit to starting potty training before a child shows readiness signs.' },
    { ageRange: '1-3 years', context: 'Most children develop potty training readiness between 18 months and 3 years, with the average age of completion being 2.5-3 years for daytime training. Nighttime dryness often comes later (ages 3-5 or even later). Readiness signs to watch for: staying dry for 2+ hours, awareness of wet or dirty diapers, ability to pull pants up and down, ability to sit and stay seated for a few minutes, ability to follow simple instructions, and interest in the toilet or wearing underwear. If your child is not showing any readiness signs by age 3, mention it to your pediatrician. Developmental delays, strong-willed temperament, or fear of the toilet can all delay readiness.' },
  ],
  whenNormal: ['Your toddler shows no interest in the potty at 18-24 months', 'Your child shows some readiness signs but is inconsistent', 'Your child was interested and then lost interest (common - try again in a few weeks)', 'Your child is 2.5-3 years old and not fully trained but showing some readiness'],
  whenToMention: ['Your child is over 3 years old and shows no readiness signs at all', 'Your child was trained and has significant regression lasting weeks', 'Potty training attempts consistently result in severe distress or resistance', 'Your child seems to have no awareness of being wet or soiled by age 3'],
  whenToActNow: ['Your child over age 3 has no bowel or bladder awareness combined with other developmental delays', 'Potty training regression combined with pain, blood, or signs of a urinary tract infection', 'Your child is actively withholding stool to the point of severe constipation or soiling'],
  relatedMilestones: ['self-care'],
  showSelfReferral: false,
  relatedConcernSlugs: ['constipation', 'bedwetting-enuresis-toddler', 'toddler-taking-off-clothes-diaper', 'toddler-regression-after-move'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toilet Training. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toilet Training Readiness. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Is-Your-Child-Ready.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Toilet Training Guidelines.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
