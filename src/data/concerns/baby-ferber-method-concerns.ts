import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-ferber-method-concerns',
  title: 'Ferber Method: What to Know and Common Worries',
  category: 'sleep',
  searchTerms: ['Ferber method concerns','graduated extinction worries','Ferber method safe','Ferber method how it works','timed checks sleep training','Ferber method not working','Ferber check intervals','graduated extinction method baby','Ferber method crying how long','is Ferber method harmful'],
  quickAnswer: 'The Ferber method (graduated extinction) involves putting your baby down awake and doing brief check-ins at increasing intervals without picking them up. It is one of the most researched sleep training methods and has been shown to be safe and effective. Check-ins reassure both parent and baby, though some babies find them more stimulating than helpful.',
  byAge: [
    { ageRange: '4-6 months', context: 'This is when many families begin Ferber. The typical protocol starts with check-ins at 3, 5, and 10 minutes the first night, increasing by a few minutes each subsequent night. During checks, briefly comfort verbally and with a pat but do not pick up. Keep checks under 1-2 minutes. Some babies become more upset with check-ins; if this is your baby, graduated extinction may not be the best fit.' },
    { ageRange: '6-9 months', context: 'This is a common and effective window for the Ferber method. Your baby has the developmental capacity to self-soothe between checks. Be consistent with your intervals and avoid deviating from the plan. Most babies show significant improvement by night 3-4. Night wakings often resolve on their own once bedtime is mastered.' },
    { ageRange: '9-12 months', context: 'Ferber can still work at this age, though babies may protest more vocally. Separation anxiety may make check-ins harder. If your baby becomes more upset when you leave after a check, consider either full extinction or a more gradual presence-based method instead. The key is finding what works for your specific baby.' },
    { ageRange: '12-24 months', context: 'For toddlers, modify the Ferber approach by using verbal reassurance from outside the room or brief doorway checks. Toddlers may escalate their protest tactics (standing, throwing items). Stay calm and consistent. Some toddlers do better with the chair method or gradual retreat where you slowly reduce your presence over several nights.' },
  ],
  whenNormal: ['Crying decreases each night with the most crying on night 1','Your baby protests loudly during the intervals but settles between checks','Sleep significantly improves within 5-7 nights','Your baby is happy and well-rested during the day'],
  whenToMention: ['After 7-10 consistent nights there is no improvement','Your baby vomits from crying intensity','You cannot maintain consistency and keep changing the plan','You have concerns about whether your baby is developmentally ready'],
  whenToActNow: ['Your baby is sick during sleep training - pause and restart when well','Sleep deprivation is affecting your ability to safely care for your baby'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings. Sleep. 2006;29(10):1263-1276.', url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/' },
    { org: 'NIH', citation: 'Gradisar M et al. Behavioral interventions for infant sleep problems. Pediatrics. 2016;137(6):e20151486.', url: 'https://pubmed.ncbi.nlm.nih.gov/27221288/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx' },
  ],
  relatedConcernSlugs: ['baby-cry-it-out-safety','baby-sleep-training-methods-comparison','baby-gentle-sleep-training','baby-sleep-training-not-working'],
};
