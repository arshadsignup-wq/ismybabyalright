import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-saying-no-to-everything', title: 'Toddler Says No to Everything', category: 'behavior',
  searchTerms: ['toddler says no everything','toddler no phase','toddler refuses everything','toddler always says no','toddler oppositional no','toddler no to every question','toddler constant no','toddler defiant no','when does no phase end','toddler negative responses'],
  quickAnswer: 'The "no phase" is one of the most universal toddler behaviors, typically peaking between 18 months and 3 years. Your child is not being intentionally difficult - they are practicing their newly discovered power of refusal and asserting their identity as a separate person. "No" is one of the most powerful words they know, and they are using it to explore autonomy. This phase passes.',
  byAge: [
    { ageRange: '12-18 months', context: 'Your child is just learning to say "no" and may use it indiscriminately, sometimes even saying no to things they want. They are experimenting with the word and its effect on people. Try not to ask yes-or-no questions; instead offer choices.' },
    { ageRange: '18-30 months', context: 'Peak "no" phase. Your child may say no reflexively to every question, even "Do you want ice cream?" This is normal autonomy development. Reduce opportunities for "no" by offering choices ("Do you want apple or banana?") rather than yes/no questions ("Do you want fruit?").' },
    { ageRange: '2.5-3.5 years', context: 'The intensity of the no phase typically decreases as language develops. Your child learns other ways to express preferences and autonomy. If "no" is still the dominant response, make sure your child has enough genuine choices and control in their day.' },
    { ageRange: '3.5-5 years', context: 'By this age, your child should have a much broader range of responses beyond just "no." If constant refusal and opposition continue, consider whether it is a pattern of defiance that may benefit from professional guidance.' },
  ],
  whenNormal: ['Frequent "no" responses between ages 18 months and 3 years','Your child sometimes says no but then does the thing anyway','Your child cooperates at least some of the time','The no phase gradually improves with age'],
  whenToMention: ['Your child is oppositional to every request from every person','The no phase has not improved at all by age 3.5-4','Refusal is accompanied by significant aggression','Your child seems genuinely distressed rather than asserting autonomy'],
  whenToActNow: ['Oppositional behavior includes dangerous actions like running into traffic','Your child is aggressive toward others when told no'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Disciplining Your Child. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Disciplining-Your-Child.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddlers and the Word No.', url: 'https://www.zerotothree.org/resource/toddlers-and-the-word-no/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['defiant-toddler','toddler-power-struggles-daily','toddler-ignoring-parents-deliberately','toddler-testing-limits-constantly'],
};
