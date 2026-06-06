import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-narrative-skills-weak',
  title: 'Child Cannot Tell Simple Stories',
  category: 'communication',
  searchTerms: [
    'toddler can\'t tell stories', 'child narrative skills weak', 'toddler can\'t retell events',
    'child doesn\'t describe what happened', 'toddler can\'t explain things', 'narrative development child',
    'child story telling difficulty', 'toddler can\'t recount day', 'child poor narrative skills',
    'toddler disorganized storytelling',
  ],
  quickAnswer:
    'Narrative skills develop gradually. By age 3, most children can describe a recent event with prompting. By age 4, they can tell a simple story with a beginning, middle, and end. Weak narrative skills may affect later reading comprehension and academic success. If your child cannot describe a simple recent event by age 3.5 to 4, a speech-language evaluation may help.',
  byAge: [
    { ageRange: '18-24 months', context: 'Toddlers can describe what they see using single words or short phrases. They may label items in a picture book or say "doggy run." True narrative ability has not developed yet.' },
    { ageRange: '24-36 months', context: 'Children begin to describe recent events with prompting, like "What did you do at the park?" They may give a list of actions without sequence or connection. This is the beginning of narrative development.' },
    { ageRange: '3-4 years', context: 'Children should be able to tell a simple story with some sequence. They describe events in mostly correct order and include basic who, what, and where elements. Stories may still be disorganized, which is age-appropriate.' },
    { ageRange: '4-5 years', context: 'Narratives become more organized with a clear beginning, problem, and resolution. Children retell familiar stories and describe personal experiences with details. Persistent difficulty by this age warrants evaluation.' },
    { ageRange: '5-6 years', context: 'Children tell complex, well-organized stories. Narrative skills are closely linked to later reading comprehension and writing. If your child still struggles to tell a coherent story, speech therapy can help build these important skills.' },
  ],
  whenNormal: [
    'Your toddler is under 3 and describes events as disconnected fragments', 'Your child tells stories with prompting but cannot yet do so independently',
    'Your preschooler\'s stories are sometimes disorganized but are improving over time', 'Your child tells better stories about topics they find exciting',
  ],
  whenToMention: [
    'Your child is over 4 and cannot describe a recent event even with prompting', 'Your child answers individual questions about an event but cannot string them into a narrative',
    'Your child\'s narrative skills are noticeably behind same-age peers',
  ],
  whenToActNow: [
    'Your child has lost the ability to describe events they previously could', 'Your child is over 4 with poor narrative skills combined with significant language delays',
  ],
  relatedMilestones: ['narrative-skills', 'sentence-formation', 'vocabulary-growth', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['child-not-telling-simple-stories', 'toddler-sequencing-events-difficulty', 'toddler-sentence-length-short'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development in Preschoolers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
