import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'daycare-nap-struggles',
  title: 'Daycare Nap Struggles',
  category: 'sleep',
  searchTerms: [
    'daycare nap struggles',
    'baby won\'t nap at daycare',
    'toddler not sleeping at daycare',
    'daycare nap schedule different from home',
    'baby overtired from daycare',
    'daycare nap transition',
    'baby short naps at daycare',
    'how to help baby nap at daycare',
    'daycare sleep environment',
    'baby refuses to sleep at daycare',
  ],
  quickAnswer:
    'It is very common for babies and toddlers to nap differently at daycare than at home. The stimulating environment, different sleep setup, and group schedule can all affect naps. Most children gradually adapt within 2-4 weeks, and an earlier bedtime at home can help compensate for shorter daycare naps.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants starting daycare may initially struggle with naps due to the new environment. Share your baby\'s sleep cues and preferred soothing methods with caregivers. Providing your baby\'s own sleep sack and a white noise machine (if allowed) can help. Expect shorter naps at first and compensate with an earlier bedtime.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are often transitioning from three naps to two, and the daycare schedule may not match your home routine exactly. Communicate with providers about your baby\'s wake windows. It is okay if the daycare schedule is slightly different from home - babies are remarkably adaptable and can learn to follow different routines in different settings.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Many daycares move to a single nap around 12-15 months, which may be earlier than your child is ready at home. Your toddler may be exhausted on daycare days - an earlier bedtime on those days is helpful. On weekends, follow your child\'s lead on whether they need one or two naps.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Some daycares require a rest or nap time even for children who have dropped naps at home. If your child naps at daycare but not at home, it is fine to let them have quiet time instead on weekends. If daycare naps push bedtime very late, talk with caregivers about shortening or shifting the nap.',
    },
  ],
  whenNormal: [
    'Your baby naps for shorter stretches at daycare than at home',
    'It takes 2-4 weeks for your child to adjust to daycare nap routines',
    'Your child is more tired on daycare days and needs an earlier bedtime',
    'Nap schedules at home and daycare are slightly different',
    'Your toddler transitions to one nap at daycare before doing so at home',
  ],
  whenToMention: [
    'Your child is consistently getting very little sleep at daycare and is chronically overtired, affecting mood and development',
    'Your baby has been at daycare for over a month and shows no improvement in napping despite working with caregivers',
    'Severe behavioral changes or regression at home that you believe are linked to poor daycare sleep',
  ],
  whenToActNow: [
    'Your child is so overtired that they are having safety incidents or are not able to eat properly',
    'You suspect the daycare sleep environment is unsafe (loose bedding, prone sleeping for young infants, etc.)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is Your Baby a Good Sleeper? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. What to Look for in Child Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Why-Quality-Matters-in-Early-Child-Care.aspx',
    },
  ],
};
