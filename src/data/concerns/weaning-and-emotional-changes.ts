import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weaning-and-emotional-changes',
  title: 'Emotional Changes During Weaning',
  category: 'feeding',
  searchTerms: [
    'emotional changes during weaning',
    'sadness after stopping breastfeeding',
    'depression from weaning',
    'mood swings weaning',
    'hormonal changes weaning',
    'crying about weaning',
    'weaning depression',
    'feeling sad about weaning',
    'post weaning anxiety',
  ],
  quickAnswer:
    'Emotional changes during and after weaning are extremely common and are driven by real hormonal shifts, not just sentimentality. When breastfeeding decreases, levels of oxytocin and prolactin drop, which can affect mood, sleep, and anxiety levels. These feelings are valid, temporary for most people, and are not a sign that you made the wrong decision. Gradual weaning helps minimize the hormonal impact.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If weaning happens in the early months, often due to latch difficulties, low supply, or medical reasons, the emotional impact can be compounded by grief over the breastfeeding experience you expected. Hormonal shifts from suddenly stopping breastfeeding can be more intense than with gradual weaning. Be gentle with yourself and know that however you feed your baby, you are a good parent.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Weaning at this stage may coincide with returning to work, adding practical stress to the emotional adjustment. The drop in prolactin and oxytocin can cause mood dips, irritability, or anxiety. If you are weaning gradually, these symptoms tend to be milder. Maintaining physical closeness with your baby through skin-to-skin contact, cuddling, and babywearing can help compensate for the lost breastfeeding connection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this time, breastfeeding has often become a deeply ingrained part of your daily routine and identity as a parent. Weaning can feel like the end of an era. Mixed emotions, feeling relieved to have your body back while simultaneously missing the closeness, are completely normal. Many parents find it helpful to create new bonding rituals to replace nursing, such as a special bedtime routine.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Weaning a toddler can be emotionally complex because your child may express their feelings about it verbally or through behavior changes like clinginess or tantrums. Your own feelings may include guilt, sadness, and liberation all at once. Hormonal changes still occur at this stage, though they may be less dramatic if you have been nursing infrequently. Take the weaning process at whatever pace feels right for both of you.',
    },
  ],
  whenNormal: [
    'You feel tearful, nostalgic, or unexpectedly sad for a few days to a couple of weeks during or after weaning',
    'You experience mild irritability or mood swings that resolve as your hormones stabilize',
    'You feel a sense of loss even if you chose to wean and are ready for this change',
    'You have occasional moments of wanting to resume breastfeeding, even though you know you are done',
  ],
  whenToMention: [
    'Sadness, anxiety, or mood changes persist for more than two to three weeks after weaning and are not improving',
    'You are having difficulty functioning, sleeping, or caring for your baby due to your emotional state',
    'You have a history of depression or anxiety and feel it may be worsening during the weaning process',
    'You feel intense anger or rage that seems disproportionate and unlike your usual self',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby',
    'You are experiencing panic attacks, intrusive thoughts, or feel unable to cope with daily activities',
    'You have symptoms of severe depression such as persistent hopelessness, inability to eat or sleep, or withdrawal from everyone',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Postpartum Depression and Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Postpartum-Depression-and-Breastfeeding.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. The Effect of Breastfeeding on Postpartum Mental Health. NCBI.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7589083/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Maternal Mental Health.',
      url: 'https://www.who.int/teams/mental-health-and-substance-use/promotion-prevention/maternal-mental-health',
    },
  ],
};
