import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-separation-anxiety-at-daycare',
  title: 'Baby Separation Anxiety at Daycare',
  category: 'behavior',
  searchTerms: [
    'baby crying at daycare drop off',
    'separation anxiety daycare',
    'baby won\'t stop crying at daycare',
    'toddler separation anxiety preschool',
    'baby clings at daycare',
    'how long does daycare separation anxiety last',
    'baby screams when I leave daycare',
    'toddler cries every morning daycare',
    'separation anxiety getting worse daycare',
    'baby refuses to go to daycare',
  ],
  quickAnswer:
    'Separation anxiety at daycare drop-off is one of the most common and heartbreaking experiences for parents, but it is a completely normal and even healthy sign of secure attachment. It typically peaks between 10 and 18 months and can resurface during transitions. Most children stop crying within 5-10 minutes of the parent leaving and go on to have a good day. This phase is temporary, and it does not mean your child is suffering or that daycare is the wrong choice.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety naturally emerges around 6-8 months as babies develop object permanence - the understanding that you still exist even when they cannot see you. This is a cognitive milestone, not a problem. Drop-offs may involve crying, clinging, and reaching for you. A consistent, brief goodbye routine (kiss, "I love you, I will be back after nap") helps your baby learn that you always come back.',
    },
    {
      ageRange: '12-18 months',
      context:
        'This is the peak age for separation anxiety. Your child\'s attachment to you is strong, their memory is good enough to anticipate the separation, but their understanding of time is not developed enough to know you will return. Keep goodbyes short and confident. Lingering or sneaking out can make anxiety worse. A transitional object like a family photo or a small lovey can provide comfort.',
    },
    {
      ageRange: '18 months - 2.5 years',
      context:
        'Separation anxiety may ebb and flow during this period, often intensifying during developmental leaps, illness, or schedule changes. Some toddlers who seemed fine at daycare for months suddenly start crying at drop-off again. This is normal and usually resolves within 1-2 weeks. Talk about the day ahead in positive terms and always follow through on pickup timing.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'By this age, most children have an easier time with separation, especially in familiar settings with trusted caregivers. If your child is starting a new school or classroom, expect a brief adjustment period. Social connections with peers become a powerful motivator. If extreme separation anxiety persists daily beyond the first 2-3 weeks in a familiar setting, consider discussing it with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your child cries at drop-off but settles within 5-15 minutes and has a good day according to caregivers',
    'Separation anxiety is worst during developmental leaps, after illness, or after vacations and weekends',
    'Your child is between 8 and 18 months old - this is the peak age for separation anxiety',
    'Your child is happy to see you at pickup and generally seems well-adjusted and developing normally',
    'The anxiety comes and goes rather than being constant and unrelenting',
  ],
  whenToMention: [
    'Your child cries intensely for the entire day at daycare (not just drop-off) and has been doing so for more than 3-4 weeks in a familiar setting',
    'Separation anxiety is extending to all situations - not just daycare, but also with familiar family members - and seems to be getting worse rather than better',
    'Your child is having physical symptoms like daily stomachaches or vomiting related to daycare anxiety',
  ],
  whenToActNow: [
    'Your child has sudden, extreme separation anxiety that is completely new and is accompanied by other behavioral changes, regression, or signs that something may have happened',
    'Your child is showing signs of depression - loss of interest in play, changes in eating or sleeping, withdrawal from people they previously enjoyed being with',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-independence',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Infants (0-1 year).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/infants.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tips for Surviving Separation Anxiety.',
      url: 'https://www.zerotothree.org/resource/tips-for-surviving-separation-anxiety/',
    },
  ],
};
