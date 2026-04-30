import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-responding-to-facial-expressions',
  title: 'Baby Not Responding to Facial Expressions',
  category: 'communication',
  searchTerms: [
    'baby not responding to facial expressions',
    'baby not mirroring expressions',
    'baby not reacting to smiles',
    'baby not reading emotions',
    'baby blank face when talked to',
    'baby not responding to happy face',
    'baby not engaging with faces',
    'baby social referencing delay',
    'baby not looking at faces',
    'baby not reacting to peek a boo face',
  ],
  quickAnswer:
    'Responding to facial expressions is an important social communication milestone. By 2-3 months, most babies smile back when smiled at. By 6-9 months, they start reading emotions and responding differently to happy, sad, or angry faces. By 12 months, babies use "social referencing" - looking at a parent\'s face to gauge whether something is safe. Not responding to facial expressions can be a normal variation, especially in younger babies, but persistent lack of social engagement warrants discussion with your pediatrician.',
  byAge: [
    { ageRange: '0-2 months', context: 'Very young babies are still developing the ability to focus on faces. They may stare at your face during feeding but not yet smile back or mirror your expressions. The social smile typically emerges between 6-12 weeks. Not smiling back before 6 weeks is completely normal.' },
    { ageRange: '2-6 months', context: 'By 2-3 months, most babies smile in response to your smile. By 4-6 months, they may laugh, coo, and show different facial expressions in response to your tone and expression. If your baby consistently does not respond to your face or seems to look through you rather than at you by 4 months, mention this to your pediatrician.' },
    { ageRange: '6-18 months', context: 'By this age, babies should be reading facial expressions and responding to them - looking concerned when you look upset, laughing when you make a funny face, and checking your reaction when something new happens (social referencing). Limited response to facial cues at this age, especially combined with other social communication differences, may be evaluated as part of autism screening.' },
  ],
  whenNormal: [
    'Not smiling back before 6-8 weeks of age',
    'Occasional moments of not engaging with faces when tired, overstimulated, or distracted',
    'Looking away from faces intermittently to self-regulate (this is healthy)',
    'Responding more to some caregivers than others',
  ],
  whenToMention: [
    'Your baby does not smile back at you by 3 months',
    'Your baby does not seem interested in faces by 4-6 months',
    'Your baby does not show different reactions to happy vs. upset expressions by 9-12 months',
    'Your baby does not look at your face for reassurance in new situations by 12 months',
  ],
  whenToActNow: [
    'Your baby has lost the ability to respond to faces after previously engaging socially (regression)',
    'Your baby shows no social engagement at all - no eye contact, no smiling, no response to voices or faces',
    'Lack of facial expression response is accompanied by other developmental concerns like loss of babbling or motor skills',
  ],
  relatedMilestones: ['1-month', '3-months', '6-months', '12-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-smiling', 'not-making-eye-contact', 'no-social-smile', 'early-signs-of-autism-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-Birth-to-3-Months.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'National Institute of Child Health and Human Development. Social Development.', url: 'https://www.nichd.nih.gov/' },
  ],
};
