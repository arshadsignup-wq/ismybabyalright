import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-regression-potty-new-sibling', title: 'Potty Training Regression After New Sibling', category: 'behavior',
  searchTerms: ['potty regression new baby','toddler accidents after new sibling','potty trained toddler regression','toilet regression new baby','toddler wetting pants after new baby','potty training setback new sibling','toddler peeing pants after new baby','potty regression sibling','toddler pooping pants again new baby','toilet training regression cause'],
  quickAnswer: 'Potty training regression after a new sibling arrives is one of the most common forms of regression. Your toddler may have been fully trained and suddenly starts having accidents or refuses to use the toilet. This is not deliberate or manipulative - it is a stress response. Your child is coping with enormous change and their body is responding. With patience, zero shaming, and time, most children return to their baseline within a few weeks to a couple of months.',
  byAge: [
    { ageRange: '2-3 years', context: 'Recently trained toddlers are most vulnerable to regression. If your child was trained within the past few months before the baby arrived, their skills are not yet automatic. Go back to basics: frequent reminders, easy access to the potty, and zero pressure. Consider returning to pull-ups temporarily if needed, framing it positively.' },
    { ageRange: '3-4 years', context: 'Even well-trained children may regress. They may have daytime accidents, refuse the toilet, or revert to needing help they had outgrown. Do not punish or shame. Say: "It is okay. Accidents happen. Let us clean up together." Maintain your toilet routine and the regression usually resolves.' },
    { ageRange: '4-5 years', context: 'Regression at this age usually resolves faster because the skills are more established. If your child is having accidents, ensure they are not holding urine due to being too busy playing or not wanting to miss out on monitoring the baby. Provide calm reminders.' },
  ],
  whenNormal: ['Accidents increase in the weeks after a new baby arrives','Your child returns to baseline within 1-3 months','Accidents happen more when your child is tired or stressed','Your child is not distressed about the accidents beyond normal frustration'],
  whenToMention: ['Regression lasts more than 3 months with no improvement','Your child has pain during urination that could indicate infection','Regression is accompanied by other significant behavioral changes','Your child was trained for a long time and suddenly has complete regression'],
  whenToActNow: ['Your child has signs of urinary tract infection like pain, blood, or fever','Regression is sudden and not connected to any identifiable life change'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toilet Training. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Potty Training Regression.', url: 'https://www.zerotothree.org/resource/potty-training/' },
    { org: 'NIH', citation: 'Schum TR et al. Sequential acquisition of toilet-training skills. Pediatrics. 2002;109(3):e48.', url: 'https://pubmed.ncbi.nlm.nih.gov/11875176/' },
  ],
  relatedConcernSlugs: ['toddler-new-baby-adjustment-timeline','toddler-acting-like-baby-again','toddler-regression-behavior-general','potty-training-readiness'],
};
