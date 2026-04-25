import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'selective-mutism',
  title: 'My Child Only Talks at Home',
  category: 'communication',
  searchTerms: [
    'child only talks at home',
    'selective mutism',
    'toddler won\'t talk at daycare',
    'child silent at preschool',
    'child talks at home but not school',
    'shy child won\'t speak',
    'child mute outside home',
    'toddler won\'t talk to strangers',
    'extreme shyness toddler',
    'child stops talking in public',
  ],
  quickAnswer:
    'Selective mutism is an anxiety disorder where a child speaks freely at home but is consistently silent in specific situations, like daycare or with unfamiliar people. It\'s not shyness or defiance  -  it\'s a freeze response driven by anxiety. Early intervention with a therapist who specializes in selective mutism is very effective, especially if started in the preschool years.',
  byAge: [
    {
      ageRange: '18 months-2 years',
      context:
        'Very young toddlers are often shy around strangers, and it\'s completely normal for them to cling to you and not talk to new people. At this age, most children are just beginning to talk, so silence outside the home isn\'t unusual. What matters is whether your child talks freely and confidently at home. True selective mutism is rare before age 3.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Many 2-year-olds are talkative at home but quiet in new settings, especially if they\'re just starting daycare or preschool. This is normal adjustment. Selective mutism becomes a concern when the silence is extreme and consistent  -  your child literally cannot speak in certain settings, even after months of attendance, and shows visible anxiety or freezing when expected to talk. It\'s not just being quiet; it\'s an inability to speak.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By preschool age, selective mutism becomes more apparent. Teachers may report that your child has never spoken a single word at school, even though they participate in other ways (nodding, pointing). At home, the same child is chatty and expressive. This stark contrast is a hallmark of selective mutism. If this pattern persists for more than a month or two, it\'s time to seek help from a child psychologist or therapist who specializes in anxiety.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Selective mutism can interfere with learning and socializing if left untreated. Children may avoid school, have trouble making friends, or develop additional anxiety. The good news is that therapy  -  especially cognitive-behavioral therapy (CBT) tailored for selective mutism  -  is highly effective. The earlier treatment starts, the better. Most children who get help before kindergarten improve significantly.',
    },
  ],
  whenNormal: [
    'Your toddler is shy with strangers but warms up and talks after a few minutes  -  this is normal temperament, not selective mutism.',
    'Your child started daycare recently and is quieter there than at home, but is beginning to open up after a few weeks.',
    'Your child talks less around new people but still answers questions, greets others, and participates verbally when comfortable.',
    'Your child is under 3 years old and hasn\'t been in many social situations yet  -  selective mutism is rare at this age.',
  ],
  whenToMention: [
    'Your child is over 3 years old and has been in daycare or preschool for several months but has never spoken there, despite being very talkative at home.',
    'Your child freezes, looks panicked, or becomes physically tense when expected to speak outside the home.',
    'Your child whispers to you in public but won\'t speak directly to teachers, caregivers, or peers, even in one-on-one settings.',
    'Your child\'s silence is affecting their ability to participate in school or social activities.',
  ],
  whenToActNow: [
    'Your child is avoiding school, having meltdowns before school, or showing signs of significant anxiety or distress related to speaking.',
    'Your child is over 4 years old and has never spoken at school or daycare, and the silence is worsening or spreading to other settings.',
    'Your child has stopped speaking in settings where they used to talk  -  this could indicate increasing anxiety and needs prompt evaluation.',
  ],
  relatedMilestones: [
    'social-emotional-interacts-with-peers',
    'social-emotional-separates-from-caregiver',
    'language-uses-words-to-communicate',
    'social-emotional-comfortable-in-group-settings',
    'language-speaks-in-sentences',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Selective Mutism',
      url: 'https://www.asha.org/public/speech/disorders/selective-mutism/',
    },
    {
      org: 'Selective Mutism Association',
      citation:
        'Selective Mutism Association  -  What Is Selective Mutism?',
      url: 'https://www.selectivemutism.org/what-is-selective-mutism/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Anxiety Disorders in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Anxiety-Disorders.aspx',
    },
  ],
};
