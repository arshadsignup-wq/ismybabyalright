import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-oral-motor-weakness',
  title: 'Toddler Has Weak Mouth Muscles for Speech',
  category: 'communication',
  searchTerms: [
    'toddler oral motor weakness',
    'toddler weak mouth muscles',
    'toddler mouth muscles speech',
    'toddler drooling and speech delay',
    'toddler difficulty chewing and talking',
    'oral motor skills speech',
    'toddler low muscle tone mouth',
    'toddler sloppy eating and unclear speech',
    'dysarthria toddler',
    'toddler oral motor delay',
  ],
  quickAnswer:
    'Oral motor weakness affects the muscles of the lips, tongue, jaw, and cheeks, which can impact both feeding and speech. Signs include excessive drooling past age 2, difficulty chewing, messy eating, and unclear speech. If you notice these signs together, a speech-language pathologist who specializes in oral motor skills can evaluate and provide targeted exercises.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Oral motor skills are developing through feeding. Difficulty with latching, excessive milk spillage, or very weak sucking may indicate oral motor concerns. However, many feeding challenges in young babies resolve with support and are not necessarily linked to later speech problems.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies begin eating solid foods and experimenting with different textures. Difficulty transitioning to solid foods, persistent gagging, or inability to move food around the mouth may suggest oral motor weakness. Babbling should also be emerging during this period.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Children are eating a variety of textures and beginning to use words. Persistent drooling, difficulty with chewy or crunchy foods, and limited consonant sounds in babbling or speech may indicate oral motor concerns that affect speech development.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Speech should be developing rapidly. If your toddler drools excessively, has difficulty with varied food textures, produces "mushy" sounding speech, or loses food from their mouth while eating, an oral motor evaluation is recommended. Oral motor exercises can strengthen the muscles used for speech.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Oral motor skills should be well-developed for both eating and speaking. Persistent weakness at this age benefits from targeted therapy. A speech-language pathologist may combine oral motor exercises with speech sound therapy for the best results.',
    },
  ],
  whenNormal: [
    'Your baby under 12 months drools during teething or while concentrating on new skills',
    'Your toddler is a messy eater but can manage a variety of food textures',
    'Your toddler occasionally drools but has clear speech and good feeding skills',
    'Your toddler prefers softer foods but can chew when needed',
  ],
  whenToMention: [
    'Your toddler is over 2 and still drools frequently throughout the day',
    'Your toddler has both feeding difficulties and unclear speech',
    'Your toddler\'s speech sounds "mushy" or weak, as if their tongue and lips are not moving precisely',
  ],
  whenToActNow: [
    'Your toddler has difficulty swallowing, chokes frequently, or has aspiration concerns',
    'Your child\'s oral motor skills appear to be getting weaker rather than stronger',
  ],
  relatedMilestones: ['oral-motor-development', 'speech-clarity', 'feeding-skills', 'consonant-sounds'],
  showSelfReferral: true,
  relatedConcernSlugs: ['drooling-while-talking', 'toddler-speech-sound-disorder', 'childhood-apraxia-of-speech-signs'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Dysarthria in Children.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/dysarthria-in-children/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Health and Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
