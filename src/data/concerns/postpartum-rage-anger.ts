import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'postpartum-rage-anger',
  title: 'Postpartum Rage and Anger',
  category: 'behavior',
  searchTerms: [
    'postpartum rage',
    'anger after having baby',
    'why am I so angry after baby',
    'mom rage',
    'postpartum irritability',
    'snapping at partner after baby',
    'rage while breastfeeding',
    'anger outbursts new mom',
  ],
  quickAnswer:
    'Intense anger or rage after having a baby is more common than most parents realize and is a recognized symptom of postpartum mood disorders. You are not a bad parent for feeling this way. Hormonal shifts, sleep deprivation, and the relentless demands of newborn care can push anyone past their breaking point. Help is available and effective.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The immediate postpartum period combines dramatic hormonal drops, physical recovery, and severe sleep disruption. Many parents experience sudden, intense flashes of anger — at their partner, at the crying baby, or even at themselves. This rage can be shocking if you have never felt anything like it before. It is a physiological response, not a character flaw.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'If the initial hormonal volatility has passed but you are still experiencing rage, this may be a sign of postpartum depression or anxiety manifesting as anger. Chronic sleep deprivation compounds the problem. Many parents describe feeling "touched out," resentful, or explosive during this period, especially if they are the primary caregiver without adequate support.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Persistent rage at this stage often points to unaddressed postpartum mood changes, burnout, or relationship strain. The cumulative toll of months of caregiving without sufficient rest or support can feel unbearable. Therapy, medication, and practical support are all effective — and you deserve all three if you need them.',
    },
    {
      ageRange: '12 months+',
      context:
        'Postpartum mood disorders can persist well beyond the first year if untreated. If you are still dealing with episodes of rage, it is absolutely not too late to seek help. Toddlerhood brings new triggers — defiance, tantrums, constant demands — that can intensify anger rooted in earlier postpartum struggles.',
    },
  ],
  whenNormal: [
    'Occasional frustration when the baby has been crying for a long time and you are exhausted',
    'Feeling irritable after a night of broken sleep — this is a human response to sleep deprivation',
    'Brief moments of anger that pass quickly and do not lead to harmful actions',
    'Feeling annoyed at unsolicited parenting advice from others',
  ],
  whenToMention: [
    'Anger feels disproportionate to the situation and you cannot calm yourself down',
    'You find yourself yelling, slamming things, or having urges to throw objects',
    'The rage is directed at your baby or small children and it scares you',
  ],
  whenToActNow: [
    'You have hurt or are afraid you might hurt your baby or child — put the baby in a safe place (crib), step away, and call the Postpartum Support International helpline at 1-800-944-4773 or text 988',
    'You are having thoughts of harming yourself — call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parental-burnout-signs',
    'touched-out-feeling-overstimulated',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Anger: A Normal but Overlooked Emotion.',
      url: 'https://www.postpartum.net/learn-more/postpartum-depression/',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Postpartum Depression: What New Parents Should Know.',
      url: 'https://www.apa.org/topics/women-girls/postpartum-depression',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Perinatal Depression.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
  ],
};
