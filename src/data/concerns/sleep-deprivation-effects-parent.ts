import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-deprivation-effects-parent',
  title: 'Sleep Deprivation Effects on Parents',
  category: 'behavior',
  searchTerms: [
    'sleep deprivation new parent',
    'cannot function no sleep baby',
    'sleep deprivation effects on mom',
    'how long can you survive on no sleep with a baby',
    'hallucinating from no sleep baby',
    'sleep deprivation and depression parent',
    'dangerous to drive sleep deprived parent',
    'brain fog from no sleep baby',
  ],
  quickAnswer:
    'Chronic sleep deprivation is one of the most underestimated challenges of new parenthood. It is not just tiredness — it is a biological state that affects your mood, judgment, reaction time, immune system, and mental health. Studies show that new parents lose an average of 44 days of sleep in the first year. The effects are real, cumulative, and can mimic or worsen depression and anxiety. You are not failing — you are running on empty.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'Newborns feed every 2-3 hours and have not yet developed circadian rhythms, meaning your sleep is fragmented to a degree your body has never experienced. After just a few days, you may notice impaired concentration, emotional volatility, and physical clumsiness. After weeks, the cumulative deficit can produce symptoms that overlap significantly with depression and anxiety. This is not in your head — sleep deprivation alters brain chemistry.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Some babies begin to consolidate sleep during this period, but many do not. If you are still experiencing severe sleep disruption, the cognitive and emotional effects compound. Memory lapses, difficulty making decisions, increased irritability, and reduced empathy are all documented effects of chronic sleep loss. If you have help available, accepting it is not a luxury — it is a medical necessity.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Sleep regressions, teething, and separation anxiety can all disrupt infant sleep just when parents thought things were improving. The disappointment of broken sleep after a taste of better nights can be emotionally devastating. If you are still not getting stretches of at least 4-5 hours at this stage, discuss sleep strategies with your pediatrician — both for the baby and for your own health.',
    },
    {
      ageRange: '12 months+',
      context:
        'By this stage, most parents have been chronically underslept for over a year. The effects of long-term sleep debt include increased risk of depression, anxiety, cardiovascular disease, and impaired immune function. If your toddler is still waking frequently and you are struggling, this is a legitimate health concern — for you — and it deserves attention, not dismissal.',
    },
  ],
  whenNormal: [
    'Feeling exhausted, foggy, and irritable during the newborn period — this is expected',
    'Crying from tiredness or feeling overwhelmed at the end of a long night',
    'Occasional forgetfulness or difficulty concentrating after a bad stretch of sleep',
    'Needing caffeine, naps, or help from others to get through the day',
  ],
  whenToMention: [
    'Sleep deprivation is contributing to symptoms of depression or anxiety that persist even when you do get a block of sleep',
    'You are falling asleep involuntarily during the day — while feeding, while driving, or while holding the baby',
    'You are making errors that concern you — forgetting important things, feeling unsafe driving, or having difficulty with tasks that should be routine',
  ],
  whenToActNow: [
    'You are hallucinating, experiencing confusion, or losing track of reality due to extreme sleep deprivation — seek immediate medical attention',
    'Sleep deprivation has led to thoughts of harming yourself or your baby, or you feel you cannot safely care for your child — call 988 (Suicide and Crisis Lifeline) or the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parental-burnout-signs',
    'postpartum-rage-anger',
    'parenting-anxiety-constant-worry',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep and New Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleep Deprivation and Deficiency. National Heart, Lung, and Blood Institute.',
      url: 'https://www.nhlbi.nih.gov/health/sleep-deprivation',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Why Sleep Is Important.',
      url: 'https://www.apa.org/topics/sleep/why',
    },
  ],
};
