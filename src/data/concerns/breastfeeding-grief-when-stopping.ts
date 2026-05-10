import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-grief-when-stopping',
  title: 'Grief When Stopping Breastfeeding',
  category: 'behavior',
  searchTerms: [
    'sad about stopping breastfeeding',
    'grief weaning baby',
    'mourning breastfeeding',
    'crying about stopping nursing',
    'guilt stopping breastfeeding',
    'emotional about weaning',
    'breastfeeding relationship ending',
    'devastated cannot breastfeed',
  ],
  quickAnswer:
    'Feeling profound grief, sadness, or guilt when breastfeeding ends — whether by choice or necessity — is a deeply normal and valid experience. Breastfeeding is not just nutrition; it is a physical and emotional bond, a source of oxytocin, and often a core part of early parental identity. The loss of this relationship deserves acknowledgment and compassion, regardless of the circumstances.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'If breastfeeding ends in the first weeks due to pain, supply issues, medical complications, or NICU admission, the grief can be especially intense because it feels premature. You may feel guilt, failure, or anger — at yourself, your body, or the circumstances. These feelings are valid. How your baby is fed matters far less than the love and responsiveness you bring to the feeding relationship.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Stopping around the return to work is common, and many parents are surprised by how emotional the transition feels. The loss is both hormonal (dropping prolactin and oxytocin) and emotional (losing a unique intimate connection with your baby). Pumping complications, supply drops, or baby\'s own preferences can all play a role. Whatever your reason, it is enough.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Weaning at this stage may be parent-led or baby-led. Either way, grief is common. If your baby self-weaned before you were ready, the rejection can sting. If you chose to stop, you may second-guess yourself. The hormonal shifts during weaning can also trigger or worsen mood symptoms, compounding the emotional experience.',
    },
    {
      ageRange: '12 months+',
      context:
        'Extended breastfeeding that ends at this stage or beyond often represents a deeply meaningful relationship. The grief can surprise parents who expected to feel "ready." Some also face judgment from others for nursing "too long," which adds complexity. Your breastfeeding journey, however long, was valuable — and so is the next chapter of your relationship with your child.',
    },
  ],
  whenNormal: [
    'Feeling sad, nostalgic, or tearful in the days and weeks after weaning — this involves real hormonal changes',
    'Missing the closeness and ritual of nursing',
    'Guilt about stopping, regardless of your reason — societal pressure around breastfeeding is intense',
    'Feeling unexpectedly emotional even if you were ready to wean',
  ],
  whenToMention: [
    'Sadness after weaning persists for more than two to three weeks and is interfering with your daily life or enjoyment of your baby',
    'You are experiencing symptoms of depression (hopelessness, loss of interest, changes in appetite or sleep) that began around the time of weaning',
    'Guilt about stopping has become all-consuming and is affecting your self-worth as a parent',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself — call 988 (Suicide and Crisis Lifeline) immediately',
    'You feel unable to care for your baby because of the depth of your grief or depression — call the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'weaning-depression-hormonal',
    'identity-loss-after-baby',
    'guilt-returning-to-work',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Wean Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Wean-Your-Baby.aspx',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Depression.',
      url: 'https://www.postpartum.net/learn-more/postpartum-depression/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Breastfeeding and Maternal Mental Health. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7352925/',
    },
  ],
};
