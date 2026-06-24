import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-bleeding-how-long',
  title: 'Postpartum Bleeding (Lochia) - How Long Is Normal?',
  category: 'maternal',
  searchTerms: [
    'postpartum bleeding how long',
    'lochia postpartum',
    'bleeding after delivery normal',
    'how long do you bleed after giving birth',
    'postpartum bleeding getting worse',
    'postpartum hemorrhage signs',
    'heavy bleeding after delivery',
    'blood clots after giving birth',
    'postpartum bleeding color change',
    'bleeding after c-section how long',
    'when to worry about postpartum bleeding',
  ],
  quickAnswer:
    'Postpartum bleeding (lochia) is a normal part of recovery after both vaginal and cesarean deliveries. It typically lasts 4-6 weeks and follows a predictable pattern: bright red and heavy for the first 3-4 days, transitioning to pinkish-brown by days 4-10, then yellowish-white by 10-14 days, and gradually tapering off by 4-6 weeks. Soaking through one pad per hour for two or more consecutive hours is not normal and requires immediate medical evaluation. Passing clots larger than a golf ball, a sudden return to heavy bright red bleeding after it had lightened, or developing a fever with foul-smelling discharge are warning signs.',
  byAge: [
    {
      ageRange: 'Days 1-3 postpartum',
      context:
        'In the first few days after delivery, bleeding is heaviest and bright red. This is called lochia rubra. You may pass small blood clots (up to the size of a plum), which is normal in the first 24 hours. Bleeding is typically heavier when you stand up after lying down (blood pools while resting), during breastfeeding (oxytocin causes uterine contractions), and with physical activity. The uterus is contracting and shrinking to pre-pregnancy size, which is the source of both the bleeding and the cramping (afterpains). Using maternity pads rather than tampons reduces infection risk. If you soak through more than one pad per hour consistently, contact your provider.',
    },
    {
      ageRange: 'Days 4-14 postpartum',
      context:
        'Bleeding should gradually decrease and transition from red to pinkish-brown (lochia serosa). If bleeding suddenly increases or returns to bright red after having lightened, this may indicate that you are doing too much physically. Rest and hydrate. However, a sudden large increase in bleeding, especially with large clots, can indicate a retained piece of placenta or a uterine infection and requires evaluation. Signs of uterine infection include foul-smelling discharge, fever over 100.4 degrees F, and lower abdominal tenderness.',
    },
    {
      ageRange: 'Weeks 3-6 postpartum',
      context:
        'Bleeding should be light and yellowish-white (lochia alba) by this point. Spotting and occasional light bleeding can occur for up to 6 weeks or even 8 weeks. A brief episode of heavier bleeding around weeks 3-4 can sometimes occur as the site where the placenta was attached heals and the scab sheds. If bleeding stops completely and then restarts with heavy, bright red flow after week 3, contact your provider. Your first period may return as early as 6 weeks postpartum (if not breastfeeding) and can be heavier than normal.',
    },
  ],
  whenNormal: [
    'Bleeding follows the expected pattern: red to pink to yellow to clear, gradually decreasing over 4-6 weeks.',
    'Small clots (up to plum-sized) in the first 24 hours, smaller clots occasionally in the first week.',
    'Bleeding temporarily increases with breastfeeding or physical activity but returns to previous level with rest.',
  ],
  whenToMention: [
    'Bleeding increases after having previously decreased, even if it is not emergent.',
    'Lochia has a persistent foul smell, which may indicate infection.',
    'You are still bleeding beyond 6 weeks postpartum.',
    'You have questions about distinguishing between lochia and your first postpartum period.',
  ],
  whenToActNow: [
    'You are soaking through one or more pads per hour for 2 or more consecutive hours - this may indicate postpartum hemorrhage.',
    'You pass clots larger than a golf ball or have a sudden gush of blood.',
    'You have heavy bleeding with dizziness, fainting, rapid heartbeat, or feel like you might pass out.',
    'You have foul-smelling discharge with fever over 100.4 degrees F, which may indicate endometritis.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-body-recovery-timeline',
    'postpartum-c-section-recovery-timeline',
    'postpartum-birth-control-options',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG. Postpartum Hemorrhage. Practice Bulletin No. 183, 2017.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage',
    },
    {
      org: 'WHO',
      citation:
        'WHO. WHO Recommendations on Postnatal Care of the Mother and Newborn, 2013.',
      url: 'https://www.who.int/publications/i/item/9789241506649',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Postpartum Hemorrhage: Prevention and Treatment. American Family Physician, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28409600/',
    },
  ],
};
