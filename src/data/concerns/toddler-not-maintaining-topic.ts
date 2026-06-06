import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-maintaining-topic',
  title: 'Toddler Cannot Stay on Topic in Conversation',
  category: 'communication',
  searchTerms: [
    'toddler can\'t stay on topic',
    'toddler changes subject constantly',
    'toddler tangential speech',
    'toddler off topic talking',
    'toddler doesn\'t maintain conversation topic',
    'toddler random topic changes',
    'toddler jumping between topics',
    'toddler conversation maintenance',
    'toddler scattered speech',
    'toddler not following conversation',
  ],
  quickAnswer:
    'Staying on topic in conversation is a pragmatic language skill that develops gradually. Young toddlers naturally jump between topics as their attention shifts. By age 3 to 4, children can maintain a topic for several conversational turns. If your child frequently jumps between unrelated topics or cannot follow the thread of a conversation by age 4, a pragmatic language evaluation may be helpful.',
  byAge: [
    { ageRange: '18-24 months', context: 'Topic maintenance is very limited at this age. Toddlers may answer a question and then immediately talk about something else. This is completely normal as attention and conversational skills are just developing.' },
    { ageRange: '24-36 months', context: 'Children begin to maintain a topic for 2 to 3 turns in a conversation. They may still jump to a new topic suddenly, especially when something catches their attention. Gradual improvement is expected.' },
    { ageRange: '3-4 years', context: 'Children can maintain a topic for several turns and begin to build on what the other person says. Frequent, abrupt topic changes at this age may indicate pragmatic language difficulty or attention challenges.' },
    { ageRange: '4-5 years', context: 'Conversations become more sustained and organized. Children add relevant information and respond to what others say. Persistent difficulty maintaining topic may benefit from speech therapy focused on conversational skills.' },
    { ageRange: '5-6 years', context: 'Children should be able to have extended conversations on a single topic. Difficulty at this age may affect social relationships and classroom participation. A pragmatic language evaluation can identify areas for support.' },
  ],
  whenNormal: [
    'Your toddler is under 3 and frequently changes topics, which is age-appropriate',
    'Your toddler maintains topic when interested but jumps around when bored',
    'Your toddler can stay on topic with scaffolding and prompts from you',
    'Your preschooler stays on topic sometimes but veers off when excited about something new',
  ],
  whenToMention: [
    'Your child is over 4 and cannot maintain any conversation topic for more than one turn',
    'Your child\'s topic changes are random and not connected to what was being discussed',
    'Your child has difficulty following the topic of conversation and responding relevantly',
  ],
  whenToActNow: [
    'Your child\'s speech is disorganized and does not follow any logical pattern',
    'Topic maintenance difficulties are combined with other social communication concerns and affecting peer relationships',
  ],
  relatedMilestones: ['conversation-skills', 'social-engagement', 'attention', 'narrative-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-pragmatic-language-difficulty', 'toddler-not-initiating-conversation', 'toddler-narrative-skills-weak'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Social Communication Disorder.', url: 'https://www.asha.org/practice-portal/clinical-topics/social-communication-disorder/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Communication in Preschoolers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
