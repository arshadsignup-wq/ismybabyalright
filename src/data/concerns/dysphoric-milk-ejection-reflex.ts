import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dysphoric-milk-ejection-reflex',
  title: 'I Feel Dread or Sadness When My Milk Lets Down (D-MER)',
  category: 'maternal',
  searchTerms: [
    'dysphoric milk ejection reflex',
    'D-MER breastfeeding',
    'sad feeling when breastfeeding letdown',
    'dread before letdown',
    'negative emotions breastfeeding',
    'anxiety during milk letdown',
    'nausea during letdown',
    'depression while breastfeeding',
    'wave of sadness breastfeeding',
    'dysphoria milk ejection',
  ],
  quickAnswer:
    'Dysphoric Milk Ejection Reflex (D-MER) is a physiological condition — not a psychological one — where breastfeeding mothers experience a sudden, brief wave of negative emotions (dread, anxiety, sadness, irritability, or nausea) just before or during milk letdown. It is caused by an abrupt drop in dopamine that triggers the prolactin rise needed for milk release. The feelings typically last only 30 seconds to 2 minutes and resolve on their own. You are not doing anything wrong, and this is not postpartum depression.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'D-MER often becomes apparent in the early weeks of breastfeeding as your letdown reflex establishes. You may notice a sudden, intense wave of sadness, anxiety, dread, or even nausea that hits right before your milk releases and disappears within minutes. This happens with every letdown — during nursing, pumping, or even spontaneous letdowns. It is different from postpartum depression because the feelings are brief, predictable, and tied specifically to letdown.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'For many mothers, D-MER improves over the first few months as hormonal patterns stabilize. For others, it persists throughout the breastfeeding relationship. Understanding that this is a hormonal reflex — not a reflection of your feelings about your baby — can provide significant relief. Some mothers find that distraction during letdown (looking at their phone, watching TV, talking to someone) helps the moment pass.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'If D-MER has not resolved, discuss options with your healthcare provider. Some mothers find it manageable with coping strategies, while others may consider whether continuing to breastfeed is the right choice for their overall wellbeing. If D-MER significantly impacts your quality of life, stopping breastfeeding is a valid and healthy decision.',
    },
    {
      ageRange: 'During weaning',
      context:
        'D-MER symptoms typically resolve completely once breastfeeding ends. Some mothers notice the symptoms gradually fade as feeding frequency decreases during weaning. The hormonal shifts during weaning can temporarily cause mood changes for other reasons, so be gentle with yourself during this transition.',
    },
  ],
  whenNormal: [
    'You experience brief (30 seconds to 2 minutes) negative emotions that coincide exactly with milk letdown and then pass completely',
    'The feelings are the same each time — a predictable wave that is clearly tied to the physical sensation of letdown',
    'Between letdowns and feedings, you feel like yourself and do not have persistent sadness or anxiety',
    'The feelings do not include thoughts of harming yourself or your baby',
  ],
  whenToMention: [
    'The D-MER episodes are making you dread breastfeeding or consider stopping before you are ready',
    'You are not sure whether what you are experiencing is D-MER or postpartum depression',
    'The negative feelings are lasting longer than a few minutes after letdown or are present between feedings',
  ],
  whenToActNow: [
    'You are having persistent feelings of sadness, hopelessness, or anxiety that extend beyond letdown episodes — this may be postpartum depression or anxiety and warrants immediate evaluation',
    'You are having intrusive thoughts of harming yourself or your baby — contact the Postpartum Support International helpline at 1-800-944-4773 or text 988',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-rage-anger',
    'pain-during-breastfeeding',
    'breastfeeding-guilt-when-stopping',
  ],
  sources: [
    {
      org: 'D-MER.org',
      citation:
        'D-MER.org. Dysphoric Milk Ejection Reflex: Information and Support.',
      url: 'https://d-mer.org/',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Dysphoric Milk Ejection Reflex (D-MER).',
      url: 'https://my.clevelandclinic.org/health/diseases/24879-dysphoric-milk-ejection-reflex',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Dysphoric Milk Ejection Reflex: A Descriptive Study. Breastfeeding Medicine, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30855168/',
    },
  ],
};
