import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'daycare-readiness-age-signs',
  title: 'Is My Baby Ready for Daycare?',
  category: 'behavior',
  searchTerms: [
    'baby ready for daycare',
    'when to start daycare',
    'daycare age baby',
    'daycare readiness signs',
    'is my baby old enough for daycare',
    'starting daycare tips',
    'baby separation anxiety daycare',
    'daycare adjustment period baby',
    'when can baby go to daycare',
    'daycare transition tips',
  ],
  quickAnswer:
    'There is no single "right" age to start daycare. Many babies begin as early as 6-12 weeks when parental leave ends, and children of all ages can thrive in quality childcare settings. Research shows that high-quality childcare does not harm attachment to parents and can support social and cognitive development. The key factors are the quality of the childcare setting, the child-to-caregiver ratio, and the individual child\'s temperament. Separation anxiety is normal and does not mean your child is not ready.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Starting daycare at this age is common when parental leave is limited. Young infants benefit from settings with very low child-to-caregiver ratios (1:3 or 1:4), consistent caregivers, and responsive care. Look for caregivers who will hold your baby during feedings, respond promptly to crying, and follow safe sleep practices. Your baby\'s immune system is still developing, so expect frequent mild illnesses in the first year of childcare. Ensure vaccinations are up to date and the center has good hygiene practices.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies in this age range are developing attachment relationships and benefit from consistent caregivers who get to know their cues and personality. Separation anxiety typically emerges around 7-9 months, which can make drop-offs challenging. This is a sign of healthy attachment, not a sign that daycare is harmful. Short, confident goodbyes with a consistent routine help. Most babies adjust within 1-3 weeks. Communication with caregivers about your baby\'s schedule, preferences, and milestones supports continuity of care.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers starting daycare face separation anxiety plus the challenge of learning to share, follow routines, and interact with peers. This age can have a particularly dramatic adjustment period because toddlers are more aware and verbal about their preferences. Transition strategies include visiting the center together before starting, bringing a comfort item, and starting with shorter days if possible. Most toddlers adjust well within 2-4 weeks and benefit tremendously from peer interaction and structured activities.',
    },
  ],
  whenNormal: [
    'Your baby or toddler cries at drop-off but calms within 10-15 minutes and engages in activities.',
    'Your child is initially clingy during the first 1-3 weeks but gradually adjusts to the routine.',
    'Your child gets more frequent mild illnesses (colds, ear infections) in the first year of daycare.',
  ],
  whenToMention: [
    'Your child is still distressed throughout the day after 3-4 weeks of consistent daycare attendance.',
    'Your child\'s behavior at home has significantly changed (sleep regression, aggression, extreme clinginess) that persists beyond the adjustment period.',
    'You have concerns about the quality of care or the child-to-caregiver ratio at your daycare center.',
  ],
  whenToActNow: [
    'You notice signs of abuse or neglect: unexplained bruises, fearfulness of a specific caregiver, or significant behavioral regression.',
    'Your child is frequently ill with high fevers, recurrent ear infections, or respiratory infections that are not improving.',
    'Your child has a medical condition that requires special care and the daycare is unable to accommodate it safely.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['daycare-vs-nanny-decision', 'attachment-concerns', 'defiant-toddler'],
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
        'National Institute of Child Health and Human Development. Early Child Care Research Network Study. NICHD.',
      url: 'https://www.nichd.nih.gov/research/supported/seccyd',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Child Care Health and Safety. CDC.',
      url: 'https://www.cdc.gov/parents/essentials/index.html',
    },
  ],
};
