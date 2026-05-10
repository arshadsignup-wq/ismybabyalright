import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tooth-grinding-during-day',
  title: 'Daytime Tooth Grinding',
  category: 'medical',
  searchTerms: [
    'baby grinding teeth during day',
    'toddler grinding teeth while awake',
    'daytime bruxism baby',
    'baby grinding teeth when awake',
    'why does my baby grind teeth during day',
    'toddler clenching jaw daytime',
    'baby teeth grinding while playing',
    'awake bruxism toddler',
  ],
  quickAnswer:
    'Daytime tooth grinding (awake bruxism) is common in babies and toddlers and is usually a way of exploring new teeth, self-soothing, or expressing concentration or frustration. Unlike nighttime grinding, daytime grinding is often a conscious or semi-conscious habit. Most children outgrow it naturally. It rarely causes tooth damage in young children, and intervention is typically not needed unless it persists past age 5 or causes dental problems.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tooth grinding is not possible at this age since teeth have not yet erupted. Babies may rub their gums together, which can produce a clicking sound, but this is a normal exploratory behavior.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the first teeth begin to erupt, some babies start grinding them almost immediately. This is a natural way of exploring the new sensations in their mouth. The grinding may coincide with teething discomfort and serves as a form of self-soothing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Daytime grinding becomes more common as more teeth appear. Babies often grind when they are concentrating, exploring their mouth, or experiencing teething. The sound can be unpleasant, but the behavior is developmental and does not typically cause damage to baby teeth, which have thick enamel relative to their size.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may grind their teeth during the day when frustrated, anxious, or concentrating. As language and coping skills develop, daytime grinding often decreases. If your toddler grinds frequently and you notice wear on their teeth, mention it at the next dental visit. Stress-related grinding in older toddlers may benefit from addressing the underlying stressor.',
    },
  ],
  whenNormal: [
    'Your baby grinds their teeth occasionally while playing or exploring',
    'The grinding happens in phases and is not constant throughout the day',
    'Your child does not complain of jaw pain and eats normally',
    'Your dentist sees no significant wear or damage on the teeth',
  ],
  whenToMention: [
    'Daytime grinding is very frequent and seems compulsive rather than occasional',
    'Your child complains of jaw soreness, headaches, or ear pain',
    'You notice visible wear patterns or flattening on the biting surfaces of the teeth',
  ],
  whenToActNow: [
    'Grinding is accompanied by jaw locking, inability to open the mouth, or severe pain that interferes with eating',
    'Your child suddenly starts grinding teeth along with other new repetitive behaviors, facial asymmetry, or signs of a neurological change',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Bruxism in Children.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/bruxism-in-children/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teeth Grinding (Bruxism). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/teeth/Pages/Teeth-Grinding.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Awake bruxism in children and adolescents: a systematic review. Sleep Medicine Reviews. 2022;64:101659.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35700586/',
    },
  ],
};
