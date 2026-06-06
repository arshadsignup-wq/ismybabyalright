import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-social-smile-delayed',
  title: 'Baby\'s Social Smile Is Delayed',
  category: 'behavior',
  searchTerms: [
    'baby social smile delayed', 'baby not smiling at people', 'when do babies smile socially',
    'baby late social smile', 'baby not smiling at 2 months', 'baby smile milestone late',
    'social smile development', 'baby not smiling at faces', 'delayed social smile baby',
    'baby reflexive smile vs social smile',
  ],
  quickAnswer:
    'A social smile, where a baby smiles in response to seeing a face or hearing a voice, typically appears between 6 and 8 weeks of age. Some babies smile socially a bit later, especially if born premature. If your baby has not shown any social smiling by 3 months, mention it to your pediatrician, as social smiling is an important social-emotional milestone.',
  byAge: [
    { ageRange: '0-6 weeks', context: 'Babies show reflexive smiles, often during sleep. These are not true social smiles. Your baby may also smile in response to pleasant physical sensations. True social smiling in response to faces has not yet developed.' },
    { ageRange: '6-8 weeks', context: 'This is when most babies begin smiling in response to a caregiver\'s face or voice. The social smile is a major milestone that shows your baby is recognizing and responding to people. Some babies are a bit later, especially premature babies.' },
    { ageRange: '2-3 months', context: 'Social smiling should be well-established. Your baby smiles when they see familiar faces and may smile at new people too. If social smiling has not appeared by 3 months, discuss this with your pediatrician.' },
    { ageRange: '3-4 months', context: 'Babies smile frequently and begin laughing. They show clear enjoyment of social interaction. A baby who still does not smile socially at this age should be evaluated for both vision and developmental concerns.' },
    { ageRange: '4-6 months', context: 'Smiling is a robust social behavior. Babies smile at familiar people and may be more selective about smiling at strangers. Absence of social smiling by this age requires comprehensive developmental evaluation.' },
  ],
  whenNormal: [
    'Your baby is under 8 weeks and showing reflexive smiles but not yet social smiles',
    'Your baby was born premature and is smiling on an adjusted-age timeline',
    'Your baby smiles socially but less frequently than other babies you know',
    'Your baby smiles more at home than in unfamiliar settings',
  ],
  whenToMention: [
    'Your baby has not shown any social smiling by 3 months of age',
    'Your baby smiles reflexively but never in response to a face or voice',
    'Your baby had been smiling and has stopped',
  ],
  whenToActNow: [
    'Your baby is over 4 months with no social smiling and limited eye contact',
    'Your baby has lost social smiling alongside other skill regression',
  ],
  relatedMilestones: ['social-smile', 'eye-tracking', 'social-engagement', 'responds-to-name'],
  showSelfReferral: true,
  relatedConcernSlugs: ['no-social-smile', 'not-smiling', 'baby-flat-affect-no-expression'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Two Months.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2mo.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Emotional and Social Development: Birth to 3 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-Birth-to-3-Months.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Social-Emotional Development: Birth to 3 Months.', url: 'https://www.zerotothree.org/resource/social-emotional-development-birth-to-3-months/' },
  ],
};
