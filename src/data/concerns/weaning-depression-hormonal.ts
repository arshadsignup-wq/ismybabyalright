import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'weaning-depression-hormonal',
  title: 'Weaning Depression (Hormonal)',
  category: 'behavior',
  searchTerms: [
    'weaning depression',
    'depression after stopping breastfeeding',
    'hormonal changes after weaning',
    'mood changes when stopping nursing',
    'weaning and anxiety',
    'crying all the time after weaning',
    'feeling depressed after stopping pumping',
    'weaning hormones how long',
  ],
  quickAnswer:
    'Weaning from breastfeeding causes a real, measurable drop in prolactin and oxytocin — hormones that help regulate mood. Many parents experience sadness, irritability, anxiety, or depression during and after weaning. This is a hormonal response, not a sign of weakness or a reflection of your parenting. For most people, symptoms improve within a few weeks, but some may need additional support.',
  byAge: [
    {
      ageRange: '0-6 months postpartum (early weaning)',
      context:
        'When weaning happens in the first six months — whether due to medical reasons, supply issues, returning to work, or personal choice — the hormonal drop can be especially steep because prolactin levels are still very high. Combined with the emotional grief of ending breastfeeding earlier than planned, the mood impact can be significant. Gradual weaning (when possible) produces less dramatic hormonal shifts.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'This is a common time for weaning, whether parent-led or baby-led. The hormonal changes are real: oxytocin drops (which can reduce feelings of calm and bonding), prolactin drops (which can affect mood regulation), and estrogen returns (which can cause mood swings similar to PMS). These shifts typically stabilize within two to four weeks, but everyone\'s timeline is different.',
    },
    {
      ageRange: '12-18 months postpartum',
      context:
        'Weaning a toddler involves not just hormonal shifts but the loss of a soothing tool you have both relied on. The emotional and physical adjustment period is real. Some parents report feeling a surprising crash in mood despite being "ready" to wean. This is your body\'s chemistry adjusting, not your mind playing tricks on you.',
    },
    {
      ageRange: '18 months+ postpartum',
      context:
        'Extended breastfeeding means the hormonal changes of weaning come after a long period of your body being in a lactation-regulated state. The return to a non-lactating hormonal baseline can bring mood changes, changes in libido, and shifts in how your body feels. These adjustments are temporary, but if depressive symptoms persist beyond a month, professional support is recommended.',
    },
  ],
  whenNormal: [
    'Feeling emotional, weepy, or moody during the weaning process — this is driven by real hormonal changes',
    'Increased irritability or anxiety that begins when nursing sessions are reduced',
    'Mood changes that improve gradually over two to four weeks after weaning is complete',
    'Feeling nostalgic or sad about the end of the nursing relationship',
  ],
  whenToMention: [
    'Mood symptoms persist beyond three to four weeks after completing weaning and are not improving',
    'You are experiencing symptoms of depression — persistent sadness, loss of interest, changes in appetite or sleep, feelings of worthlessness',
    'Anxiety has become severe — constant worry, panic attacks, or inability to relax',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or ending your life — call 988 (Suicide and Crisis Lifeline) immediately',
    'Depression is so severe that you are unable to care for yourself or your child — call the Postpartum Support International helpline at 1-800-944-4773 or go to your nearest emergency room',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'breastfeeding-grief-when-stopping',
    'identity-loss-after-baby',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Weaning From Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Wean-Your-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Hormonal Changes During Lactation and Weaning. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7352925/',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Depression.',
      url: 'https://www.postpartum.net/learn-more/postpartum-depression/',
    },
  ],
};
