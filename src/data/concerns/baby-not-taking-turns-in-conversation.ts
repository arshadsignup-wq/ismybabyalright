import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-taking-turns-in-conversation',
  title: 'Baby Not Taking Turns in Vocalization',
  category: 'communication',
  searchTerms: [
    'baby not cooing back',
    'baby not taking turns talking',
    'baby not responding when talked to',
    'baby not vocalizing back and forth',
    'baby conversation turn taking',
    'baby not engaging in vocal play',
    'baby not babbling back',
    'baby one sided conversation',
    'baby not responding to voice',
    'baby vocal reciprocity',
  ],
  quickAnswer:
    'Conversational turn-taking is one of the earliest social communication skills and begins around 2-4 months. When you talk to your baby and pause, they should start "responding" with coos, squeals, or sounds - creating a back-and-forth "conversation" even before real words develop. This back-and-forth pattern is a building block for language development. If your baby is not engaging in vocal turn-taking by 5-6 months, mention it to your pediatrician.',
  byAge: [
    { ageRange: '0-2 months', context: 'Very young babies mostly communicate through crying and physiological sounds. They may quiet and look at you when you speak, which is an early form of engagement. True vocal turn-taking has not yet developed. You can encourage it by talking to your baby during feeds and diaper changes, pausing to give them "space" to respond.' },
    { ageRange: '2-4 months', context: 'This is when vocal turn-taking typically emerges. Your baby may coo, gurgle, or make vowel sounds when you pause in speech. They are learning the rhythm of conversation. Encourage this by having "conversations" - say something, then wait expectantly for your baby to respond, then respond to their sounds enthusiastically.' },
    { ageRange: '4-9 months', context: 'By this age, vocal turn-taking should be well established. Your baby should be babbling (adding consonants), laughing, squealing, and engaging in extended back-and-forth vocal exchanges. They may "talk" to toys, mirrors, and other people. If your baby is generally quiet and does not engage in vocal back-and-forth by 6 months, a hearing screen and developmental check are recommended.' },
  ],
  whenNormal: [
    'Not yet engaging in turn-taking before 2-3 months of age',
    'Some days having more vocal conversations than others',
    'Being quieter in noisy environments or around unfamiliar people',
    'Taking longer to warm up to vocal play with someone other than primary caregivers',
  ],
  whenToMention: [
    'Your baby does not coo or vocalize at all by 3-4 months',
    'Your baby does not seem to respond to your voice with sounds by 5-6 months',
    'Your baby makes sounds but never in response to yours - only on their own',
    'You feel like your baby is not engaging with you vocally despite your efforts',
  ],
  whenToActNow: [
    'Your baby does not startle to loud sounds or turn toward your voice (possible hearing issue)',
    'Your baby has stopped vocalizing after previously cooing and babbling (regression)',
    'Your baby shows no interest in people\'s voices and does not look toward speakers by 4 months',
  ],
  relatedMilestones: ['1-month', '3-months', '6-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-cooing', 'baby-not-babbling', 'baby-quiet-not-vocalizing', 'hearing-loss-signs-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Communication Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Communication-Development.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Birth to One Year.', url: 'https://www.asha.org/public/speech/development/01/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Communication Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};
