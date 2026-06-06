import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'morning-sickness-severity',
  title: 'Severe vs Normal Morning Sickness',
  category: 'maternal',
  searchTerms: [
    'morning sickness severe',
    'nausea and vomiting pregnancy',
    'how bad is morning sickness',
    'morning sickness won\'t stop',
    'throwing up all day pregnant',
    'NVP pregnancy',
    'is my morning sickness normal',
    'morning sickness dehydration',
    'can\'t keep food down pregnant',
    'morning sickness vs hyperemesis',
  ],
  quickAnswer:
    'Morning sickness (nausea and vomiting of pregnancy) affects up to 80% of pregnant people and is considered a normal part of pregnancy. It typically peaks between weeks 8-12 and resolves by weeks 16-20, though severity varies widely from mild queasiness to frequent vomiting.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Morning sickness most commonly begins around week 6 and peaks between weeks 8-12. Despite its name, it can occur at any time of day. Mild to moderate nausea with occasional vomiting is normal. Eating small, frequent meals, staying hydrated, and trying ginger or vitamin B6 can help. If you are vomiting multiple times a day or unable to keep any food or fluids down, talk to your provider about whether you may have hyperemesis gravidarum.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Most morning sickness improves significantly by weeks 14-16, and the majority of people feel much better by week 20. If nausea and vomiting persist into the second trimester, let your provider know. Continued symptoms may need medical management, but they do not necessarily mean something is wrong with your pregnancy.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Some people experience a return of nausea in the third trimester due to the growing uterus pressing on the stomach. This is usually milder than first-trimester morning sickness. Eating smaller meals and avoiding lying down right after eating can help. New-onset severe nausea and vomiting in the third trimester should be evaluated to rule out other conditions.',
    },
  ],
  whenNormal: [
    'Nausea comes and goes throughout the day, especially in the morning or when hungry',
    'You can keep down most meals even if you feel queasy',
    'Symptoms begin around week 6 and start improving by weeks 12-14',
    'You are still able to stay hydrated and urinate regularly',
  ],
  whenToMention: [
    'You are vomiting more than 3-4 times per day and struggling to keep food down',
    'You are losing weight during pregnancy',
    'Nausea is significantly affecting your ability to work or care for yourself',
    'Morning sickness persists beyond 20 weeks',
  ],
  whenToActNow: [
    'You cannot keep down any fluids for 12-24 hours and show signs of dehydration (dark urine, dizziness, dry mouth, rapid heartbeat)',
    'You are vomiting blood or material that looks like coffee grounds',
    'You have lost more than 5% of your pre-pregnancy body weight due to vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Morning Sickness: Nausea and Vomiting of Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Nausea and Vomiting of Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532917/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Morning Sickness. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/morning-sickness.aspx',
    },
  ],
  relatedConcernSlugs: ['hyperemesis-gravidarum', 'pregnancy-food-aversions'],
};
