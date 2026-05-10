import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'daycare-readiness-signs',
  title: 'Daycare Readiness Signs',
  category: 'behavior',
  searchTerms: [
    'is my baby ready for daycare',
    'when to start daycare for baby',
    'daycare readiness checklist',
    'signs baby ready for childcare',
    'best age to start daycare',
    'toddler not ready for daycare',
    'daycare too early for baby',
    'preparing baby for daycare',
  ],
  quickAnswer:
    'There is no single "right" age to start daycare — it depends on your family\'s needs, your child\'s temperament, and the quality of the childcare setting. Research shows that high-quality childcare can benefit children\'s social and cognitive development at any age. Babies as young as 6 weeks can thrive in nurturing childcare environments with low child-to-caregiver ratios. The most important factors are the quality of care, your child\'s adjustment, and your family\'s comfort level.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many parents start daycare between 6-12 weeks due to parental leave constraints. Very young babies need low ratios (ideally 1 caregiver to 3-4 infants), consistent caregivers, and responsive care. Look for programs that follow safe sleep practices, allow on-demand feeding, and communicate frequently with parents. It is normal to feel anxious about this transition.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age are increasingly social and may enjoy the stimulation of a group environment. They are developing routines around feeding and sleeping that daycare providers should accommodate. A good center will follow your baby\'s schedule rather than imposing a rigid one.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety peaks around 8-10 months, which can make the daycare transition harder. If starting daycare during this window, plan for a gradual transition: short visits, staying briefly with your child, and building familiarity with caregivers. The anxiety is temporary and does not indicate your child is not ready.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers benefit greatly from the social interaction, structured activities, and peer exposure that quality daycare provides. Even children who resist the transition initially typically adjust within 2-4 weeks. Signs of good adjustment include being happy at pickup, talking about friends or activities, and maintaining good sleep and eating habits.',
    },
  ],
  whenNormal: [
    'Your baby or toddler cries at drop-off but settles within 10-15 minutes and is happy during the day',
    'Your child\'s behavior changes slightly in the first few weeks — more tired, clingy, or fussy — as they adjust to the new routine',
    'Your child gets sick more frequently after starting daycare — this is normal immune system building',
    'You feel anxious or guilty about starting daycare — these are extremely common parental feelings',
  ],
  whenToMention: [
    'Your child is consistently distressed throughout the entire day at daycare after more than 3-4 weeks of consistent attendance',
    'You notice significant behavioral changes at home — regression, sleep disruption, or loss of appetite — that persist beyond the adjustment period',
    'You have concerns about the quality of care at the daycare center',
  ],
  whenToActNow: [
    'Your child has unexplained injuries, shows fear of a specific caregiver, or displays sudden behavioral changes that suggest potential mistreatment',
    'The daycare environment has obvious safety violations — inadequate supervision, unsafe sleeping arrangements, or unsanitary conditions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'daycare-separation-crying-duration',
    'daycare-illness-frequency-normal',
    'toddler-social-anxiety-playgroups',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing a Child Care Center. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Why-Quality-Matters-in-Early-Child-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'NICHD Study of Early Child Care and Youth Development. National Institute of Child Health and Human Development.',
      url: 'https://www.nichd.nih.gov/research/supported/seccyd',
    },
  ],
};
