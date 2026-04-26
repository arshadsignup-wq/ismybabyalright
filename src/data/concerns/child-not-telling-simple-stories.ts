import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'child-not-telling-simple-stories',
  title: 'Child Not Telling Simple Stories',
  category: 'communication',
  searchTerms: [
    'child not telling stories',
    'toddler can\'t retell a story',
    'child can\'t narrate what happened',
    'child doesn\'t tell me about their day',
    '3 year old can\'t tell a story',
    'child not narrating experiences',
    'child can\'t describe what happened',
    'toddler not recounting events',
    'when should kids tell stories',
    'child can\'t explain what they did',
  ],
  quickAnswer:
    'The ability to tell simple stories - recounting what happened at the park, or retelling a favorite book - typically develops between ages 3 and 4. Before that, children often need prompting questions to share information. If your 3-year-old can\'t yet narrate a sequence of events, that\'s still within the normal range. By age 4, most children can tell a simple story with a beginning, middle, and end, even if it\'s not perfectly organized.',
  byAge: [
    {
      ageRange: '2-2.5 years',
      context:
        'At this age, children can typically label what they see and answer simple "what" questions, but they can\'t yet tell stories or recount events. If you ask "what did you do at the park?" you\'ll likely get one or two words at best. This is completely normal. You can help build narrative skills by narrating your own day and talking through events together.',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'Around 2.5 to 3, children begin to recount simple recent events, often with a lot of prompting ("And then what happened?"). They may describe things out of order or focus on one detail. This is early narrative development and it\'s messy - that\'s expected. If your child is using sentences and can answer questions about events, they\'re building the foundation for storytelling.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Between 3 and 4, children should be able to tell simple stories about their day, retell familiar stories from books, and describe a sequence of 2-3 events in order. Their stories won\'t be detailed or well-organized, but they should be able to communicate what happened. If your child is 4 and can\'t recount even a simple event ("We went to the store. I got a cookie."), a speech evaluation can help.',
    },
    {
      ageRange: '4+ years',
      context:
        'By age 4-5, children should tell stories that have a basic structure - what happened, where, and to whom. They should be able to retell a favorite story or movie plot in a basic way. If your child is 4+ and struggles to organize and share even simple narratives, a speech-language pathologist can work on narrative skills. These skills are important for school readiness and social connections.',
    },
  ],
  whenNormal: [
    'Your 2-3-year-old needs lots of prompting questions to tell you about their day - independent storytelling hasn\'t developed yet.',
    'Your 3-year-old tells stories that are out of order or hard to follow - disorganized narratives are normal at this age.',
    'Your child can retell favorite stories from books but can\'t yet narrate their own experiences as well - book retelling is easier because the structure is provided.',
    'Your child is more of a "doer" than a "teller" and prefers to act out stories rather than verbally narrate them.',
    'Your child tells stories to stuffed animals or during pretend play but won\'t perform for adults on demand.',
  ],
  whenToMention: [
    'Your child is over 4 and can\'t recount a simple event with 2-3 related statements, even with prompting.',
    'Your child has difficulty answering "what happened" questions about recent events that they experienced.',
    'Your child speaks in sentences but can\'t organize ideas into a sequence - they jump from topic to topic without connection.',
  ],
  whenToActNow: [
    'Your child is over 4, can\'t narrate simple events, and also has limited vocabulary, short sentences, and difficulty being understood - these combined concerns suggest a comprehensive language delay that needs evaluation.',
  ],
  relatedMilestones: [
    'language-sentence-use',
    'language-vocabulary-growth',
    'social-emotional-communicates-needs',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 3 to 4 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development-3-to-4-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Four Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
