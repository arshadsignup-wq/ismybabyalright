import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'conflicting-parenting-advice',
  title: 'Dealing with Conflicting Expert Advice',
  category: 'behavior',
  searchTerms: [
    'conflicting parenting advice',
    'different doctors different advice baby',
    'contradictory baby advice',
    'too much parenting advice',
    'which parenting expert to trust',
    'overwhelmed by baby advice',
    'information overload new parent',
    'conflicting baby sleep advice',
    'everyone says something different baby',
  ],
  quickAnswer:
    'Receiving conflicting advice about your baby from different doctors, books, family members, and online sources is one of the most frustrating aspects of modern parenting. The truth is that many areas of child-rearing have genuine room for different approaches, and what works varies by family. Learning to evaluate advice critically, identify your trusted sources, and feel confident in your choices is an important parenting skill.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period is when conflicting advice hits hardest. You may hear opposing views on feeding schedules versus on-demand feeding, swaddling safety, pacifier use, and sleep arrangements. This is overwhelming when you are already exhausted and unsure of yourself. Focus on advice from your pediatrician and evidence-based sources, and give yourself permission to ignore the rest. There is rarely one right answer for every family.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Conflicting advice about sleep training, introducing solids, and returning to work tends to peak during this period. Some experts recommend starting solids at four months, others insist on six months. Some advocate for sleep training, others strongly oppose it. Look at the evidence behind each recommendation and consider your family\'s specific circumstances. Your pediatrician can help you sort through what applies to your baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solids and becomes more mobile, you may encounter conflicting views on baby-led weaning versus purees, screen time, and how to handle nighttime waking. By this stage, you have more parenting experience and can better trust your own observations of what works for your child. If advice does not resonate with your family\'s values or your baby\'s temperament, it is okay to set it aside.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Discipline approaches, toddler nutrition, and weaning timelines generate strong and opposing opinions. Grandparents may advocate for approaches that differ from current guidelines. It is helpful to have a short list of trusted, evidence-based resources you can turn to and to remember that different approaches can lead to equally good outcomes.',
    },
  ],
  whenNormal: [
    'You receive different opinions from different sources but can weigh them and make decisions confidently',
    'You sometimes change your approach after learning new information, which is a sign of thoughtful parenting',
    'You feel momentarily confused by contradictory advice but can consult a trusted provider for clarity',
    'You have learned to identify which sources are evidence-based and which are opinion-based',
  ],
  whenToMention: [
    'Conflicting advice is causing you significant anxiety and you feel paralyzed about making decisions for your baby',
    'You and your partner strongly disagree about a parenting approach because of conflicting advice and it is creating relationship tension',
    'You received contradictory medical advice from two different healthcare providers and need help reconciling it',
    'The volume of conflicting information is contributing to feelings of inadequacy or failure as a parent',
  ],
  whenToActNow: [
    'You received medical advice that contradicts your baby\'s current treatment plan and you are unsure which to follow for a time-sensitive health issue',
    'Conflicting advice has led you to delay or avoid an important medical intervention such as a recommended evaluation or treatment for your baby',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Finding Reliable Health Information Online. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/tips-tools/find-pediatrician/Pages/finding-reliable-health-information-online.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Evaluating Health Information. MedlinePlus.',
      url: 'https://medlineplus.gov/evaluatinghealthinformation.html',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/index.html',
    },
  ],
};
