import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'when-to-worry-vs-when-its-normal',
  title: 'When to Worry and When It Is Normal',
  category: 'behavior',
  searchTerms: [
    'when to worry about baby development',
    'is this normal baby behavior',
    'when is baby behavior a red flag',
    'normal vs abnormal baby development',
    'should I be worried about my baby',
    'developmental red flags baby',
    'when to call pediatrician baby',
    'normal baby quirks',
    'strange baby behavior normal',
  ],
  quickAnswer:
    'Learning to distinguish between normal developmental variation and genuine red flags is one of the most important skills a parent can develop. Most of the behaviors that alarm new parents, such as jerky movements, unusual sounds, or uneven development, fall well within the range of normal. True warning signs tend to involve loss of skills, complete absence of expected behaviors well past the typical window, or combinations of concerns rather than isolated quirks.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn behaviors that commonly alarm parents but are usually normal include jerky or trembling movements, frequent hiccups, irregular breathing patterns during sleep, crossed eyes, and startling easily. True red flags at this age include a baby who is extremely difficult to rouse, does not respond to loud sounds at all, never makes eye contact, or is not feeding adequately. When in doubt, call your pediatrician; they expect and welcome these calls.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, normal variations that worry parents include asymmetric movement patterns that resolve, drooling without teeth, putting everything in their mouth, and inconsistent rolling. Red flags would include a baby who still feels very floppy or very stiff, has no interest in people or faces, does not smile socially, or cannot hold their head steady by four months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Many parents worry when their baby does not crawl, but not all babies crawl and it is not a required milestone. Normal variations include scooting on their bottom, army crawling, or going straight to pulling up. Red flags include not sitting with support by nine months, using only one side of the body consistently, or not babbling or making consonant sounds by nine months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Wide variation in walking and talking timelines causes the most anxiety in this period. Walking anywhere from 9 to 18 months is normal, as is having just a few words at 12 months. Red flags that warrant evaluation include not walking by 18 months, no words by 16 months, not following simple directions, loss of any previously acquired skills, or no pretend play emerging by 18 months.',
    },
  ],
  whenNormal: [
    'Your baby has occasional quirky behaviors that come and go and do not interfere with their overall development',
    'Your baby is slower in one developmental domain but on track or advanced in others',
    'Your pediatrician has reviewed your concerns and provided reassurance based on an in-person examination',
    'The behavior you are worried about is something your baby does sometimes but not constantly',
  ],
  whenToMention: [
    'You have a persistent gut feeling that something is not right, even if you cannot articulate exactly what',
    'You notice a pattern of multiple small concerns that individually seem minor but together feel significant',
    'Your baby seems behind in more than one developmental area simultaneously',
    'You want your pediatrician to formally screen your child\'s development to put your mind at ease',
  ],
  whenToActNow: [
    'Your child has lost skills they previously had, such as stopping talking, no longer waving, or losing the ability to walk',
    'Your child shows no response to their name by 12 months, no gestures like pointing or waving by 12 months, or no single words by 16 months',
    'You notice a sudden change in your child\'s behavior, alertness, or physical abilities',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. When to Call the Doctor for Your Baby. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/patientinstructions/000812.htm',
    },
  ],
};
