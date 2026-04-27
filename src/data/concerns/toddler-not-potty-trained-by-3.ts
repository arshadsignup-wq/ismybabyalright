import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-potty-trained-by-3',
  title: 'Toddler Not Potty Trained by Age 3',
  category: 'behavior',
  searchTerms: ['toddler not potty trained by 3','3 year old not potty trained','late potty training','child refuses to use potty','when should toddler be potty trained','toddler won\'t potty train','potty training late normal','3 year old still in diapers','is it normal not potty trained at 3','potty training age range','delayed potty training causes','preschool potty training requirement'],
  quickAnswer: 'While many children are potty trained between ages 2 and 3, it is completely normal for some children to not be fully trained until age 3.5 or even 4. The AAP states there is no "right" age for potty training - readiness varies widely. Girls tend to train earlier than boys. Pressuring a child who is not ready often backfires, leading to resistance and regression. Signs of readiness include staying dry for 2+ hours, awareness of wet or dirty diapers, interest in the toilet, and ability to follow simple directions.',
  byAge: [
    { ageRange: '18-24 months', context: 'Some children show early readiness signs at this age but most are not developmentally ready for full potty training. Introducing the potty as a concept, reading potty books, and letting your child sit on the potty (with no pressure) can build familiarity. Do not push training at this age - the average age of completion is 27-32 months for girls and 29-35 months for boys.' },
    { ageRange: '2-2.5 years', context: 'Many families begin potty training in this window. If your child resists after a few days of consistent effort, take a break and try again in a few weeks or months. Power struggles over the potty are counterproductive and can delay training. Signs your child is ready include telling you when they need a diaper change, hiding to poop, and showing interest in older children or adults using the toilet.' },
    { ageRange: '2.5-3 years', context: 'This is the most common age range for successful potty training. If your child is not showing interest despite readiness signs, try making it fun (stickers, special underwear they choose) and celebrate small successes. Daytime training typically comes before nighttime dryness. If there is preschool pressure to be potty trained, know that most programs work with families and many children are still training at this age.' },
    { ageRange: '3-4 years', context: 'About 15-20% of children are not fully daytime potty trained by age 3, and this is within the normal range. If your child is 3.5+ and showing no interest or ability, mention it to your pediatrician. Causes of delayed training can include constipation (the most common medical cause), sensory sensitivities, developmental delays, anxiety, or simply a strong-willed temperament. Addressing underlying constipation often dramatically improves potty training success.' },
    { ageRange: '4+ years', context: 'If a child over 4 is not potty trained for stool (encopresis) or is still wetting during the day, a medical evaluation is recommended to rule out structural issues, chronic constipation, or other factors. Nighttime wetting (enuresis) is separate and remains common through age 5-7. A child who was trained but regresses may be responding to stress, a new sibling, a move, or a medical issue like a UTI.' },
  ],
  whenNormal: ['Your child is between 2 and 3.5 years old and not yet fully potty trained but is showing some readiness signs','Your child has mastered daytime training but still wears a diaper at night - nighttime dryness often lags by months or years','Your child was doing well with potty training but had a brief regression during illness, travel, or a big life change','Your child is potty trained for pee but still has occasional poop accidents'],
  whenToMention: ['Your child is over 3.5 and shows no interest or awareness of needing to use the potty','Your child seems to be withholding stool, straining, or having very hard bowel movements','Your child was fully trained but has regressed for more than 2-3 weeks without an obvious cause','Your child has frequent urinary accidents alongside urgency, pain with urination, or new bedwetting'],
  whenToActNow: ['Your child has sudden loss of bladder or bowel control along with neurological symptoms like leg weakness or gait changes','Your child is in severe pain during bowel movements or there is blood in the stool'],
  relatedMilestones: ['self-care-toileting','social-emotional-independence'],
  showSelfReferral: false,
  relatedConcernSlugs: ['potty-training-refusal','potty-training-regression','toddler-afraid-of-potty'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toilet Training. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toilet Training Readiness Signs. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Signs-of-Readiness.aspx' },
    { org: 'NIH', citation: 'Schum TR, et al. Sequential Acquisition of Toilet-Training Skills. Pediatrics. 2002;109(3):e48.', url: 'https://pubmed.ncbi.nlm.nih.gov/11875176/' },
  ],
};
