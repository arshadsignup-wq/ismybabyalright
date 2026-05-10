import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'postpartum-psychosis-warning-signs',
  title: 'Postpartum Psychosis Warning Signs',
  category: 'behavior',
  searchTerms: [
    'postpartum psychosis',
    'hearing things after baby',
    'hallucinations after birth',
    'not sleeping at all after baby',
    'feeling like reality is different after baby',
    'manic after having baby',
    'delusional thoughts postpartum',
    'postpartum psychosis signs',
  ],
  quickAnswer:
    'Postpartum psychosis is a rare but serious psychiatric emergency affecting roughly 1-2 in 1,000 births. It typically emerges within the first two weeks after delivery and involves a rapid onset of confusion, hallucinations, delusions, mania, or paranoia. This is a medical emergency — not a moral failing. With prompt treatment, full recovery is the expected outcome.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Postpartum psychosis most commonly begins within the first 48 hours to two weeks after birth. Early warning signs include insomnia (not needing or being unable to sleep at all), rapid mood swings, confusion or disorientation, bizarre or unusual behavior, paranoia, and hallucinations. The onset is often sudden and dramatic. This is a psychiatric emergency requiring immediate medical attention.',
    },
    {
      ageRange: '2-4 weeks postpartum',
      context:
        'While the most common onset window is the first two weeks, postpartum psychosis can develop up to the first month. Symptoms may fluctuate — the parent may seem lucid at times and confused at others. Any combination of hallucinations, delusions, extreme agitation, or dramatically altered behavior warrants emergency medical evaluation.',
    },
    {
      ageRange: '1-3 months postpartum',
      context:
        'Later onset is possible but less common. Risk factors include a personal or family history of bipolar disorder, previous psychotic episodes, or a previous episode of postpartum psychosis. If you or someone you know is experiencing a break from reality at any point after birth, seek emergency care immediately.',
    },
    {
      ageRange: '3-12 months postpartum',
      context:
        'For those who have been treated for postpartum psychosis, ongoing psychiatric follow-up is essential. Recovery often involves mood stabilizers or antipsychotic medication and close monitoring. Recurrence with future pregnancies can be up to 50%, so preconception planning with a psychiatrist is strongly recommended.',
    },
  ],
  whenNormal: [
    'Baby blues in the first two weeks — crying, mood swings, and feeling overwhelmed that resolve by two to three weeks postpartum',
    'Sleep deprivation causing foggy thinking — this is different from the confusion and disorientation of psychosis',
    'Occasional fleeting strange thoughts when severely sleep-deprived',
    'Anxiety about the baby that feels grounded in reality, even if excessive',
  ],
  whenToMention: [
    'A history of bipolar disorder or previous postpartum psychosis — proactive psychiatric planning before and after delivery is critical',
    'Rapidly alternating moods (extreme elation to deep despair within hours) in the first weeks postpartum',
    'Difficulty distinguishing dreams from reality or periods of confusion that seem unusual',
  ],
  whenToActNow: [
    'Hallucinations (seeing or hearing things that are not there), delusions, or a sudden break from reality — call 911 or go to the nearest emergency room immediately. This is a psychiatric emergency.',
    'The new parent is expressing beliefs about the baby that seem bizarre, paranoid, or disconnected from reality — do not leave them alone with the baby and seek emergency help immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-ocd-intrusive-thoughts',
    'postpartum-rage-anger',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Psychosis.',
      url: 'https://www.postpartum.net/learn-more/postpartum-psychosis/',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Perinatal Depression.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Mental Health and Substance Use: Maternal Mental Health.',
      url: 'https://www.who.int/teams/mental-health-and-substance-use/promotion-prevention/maternal-mental-health',
    },
  ],
};
