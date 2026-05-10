import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-bullied-at-daycare',
  title: 'Toddler Being Bullied at Daycare',
  category: 'behavior',
  searchTerms: [
    'toddler being bullied at daycare',
    'toddler bitten at daycare',
    'child hitting my toddler at daycare',
    'my toddler is being picked on',
    'preschool bully what to do',
    'toddler afraid of another child at daycare',
    'daycare not protecting my child from aggression',
    'toddler coming home with bite marks daycare',
  ],
  quickAnswer:
    'True bullying — intentional, repeated aggression toward a specific target — is uncommon before age 3-4 because toddlers lack the social sophistication for deliberate, targeted behavior. What looks like "bullying" in toddlers is usually impulsive aggression (biting, hitting, pushing) that is part of normal but challenging developmental behavior. However, if your child is repeatedly targeted by the same child or seems fearful of attending daycare, the situation needs to be addressed with caregivers regardless of the label.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Babies in group care at this age are not mobile enough to have peer aggression concerns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies in group care may accidentally be grabbed or rolled on by older mobile infants. Daycare staff should maintain appropriate ratios and supervise closely.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, grabbing, hair-pulling, and biting (often during teething) are common. These behaviors are not intentional aggression but rather exploration and frustration. Good daycare programs supervise closely and redirect these behaviors consistently.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddler aggression peaks between 18 months and 3 years. Biting, hitting, and pushing are common in group settings. If your child is frequently on the receiving end, work with daycare staff on a plan. This may include increased supervision, separating certain children during unstructured time, and teaching your child to say "Stop" and find an adult. If staff are dismissive of your concerns, escalate to the director.',
    },
  ],
  whenNormal: [
    'Your toddler has occasional conflicts with peers at daycare — pushing, toy-grabbing, and even biting are common at this age',
    'The daycare communicates incidents to you and has clear strategies for managing aggression',
    'Your child continues to enjoy daycare overall despite occasional conflicts',
    'The aggressive behavior is not targeted — different children are involved at different times',
  ],
  whenToMention: [
    'Your child is being repeatedly targeted by the same child and the daycare\'s interventions are not resolving the situation',
    'Your child is showing behavioral changes — reluctance to attend daycare, increased anxiety, sleep disruption, or aggression at home — that you believe are related to peer interactions at daycare',
    'Your child has recurrent bite marks, bruises, or injuries from daycare and you feel the supervision is inadequate',
  ],
  whenToActNow: [
    'Your child has a significant injury from another child that requires medical attention, such as a bite that breaks skin, a head injury, or an eye injury',
    'You suspect your child is being mistreated by a caregiver rather than (or in addition to) a peer — unexplained injuries, fearfulness of specific adults, or sudden behavioral changes require immediate investigation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-exclusion-by-peers',
    'aggressive-play-vs-normal-play',
    'daycare-separation-crying-duration',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bullying: It\'s Not OK. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Bullying-Its-Not-Ok.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Vlachou, M. et al. Peer Victimization and Subjective Health Complaints in School. Psychology in the Schools. 2011.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
