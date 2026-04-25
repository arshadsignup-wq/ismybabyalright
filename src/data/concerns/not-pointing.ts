import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-pointing',
  title: 'My Baby Isn\'t Pointing',
  category: 'communication',
  searchTerms: [
    'baby not pointing',
    'when do babies point',
    'baby doesn\'t point at things',
    'baby not pointing at 12 months',
    'toddler not pointing',
    'baby not pointing at 14 months',
    'is pointing a milestone',
    'why is pointing important baby',
    'baby won\'t point at things',
    'baby not pointing 18 months',
  ],
  quickAnswer:
    'Pointing typically develops between 12 and 14 months and is considered one of the most important social communication milestones. It shows your baby wants to share their world with you. If your baby isn\'t pointing by 18 months, a developmental evaluation is recommended  -  but there are lots of other ways babies start communicating that are worth noticing too.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Pointing isn\'t expected yet. Your baby is working on the building blocks  -  reaching for things, looking where you look, and starting to follow your gaze. You might see your baby extend their hand or open and close their fist toward objects they want. This is the precursor to pointing, and it\'s right on schedule.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Some babies start pointing around 12 months, but many haven\'t figured it out yet. What you\'re watching for is whether your baby is sharing attention with you in other ways: looking back and forth between you and something interesting, holding up objects to show you, or making sounds while looking at something they want you to see. These are all signs that social communication is developing.',
    },
    {
      ageRange: '13-15 months',
      context:
        'Most babies are pointing by this age, either to request things ("I want that") or to share interest ("Look at that dog!"). Both types of pointing matter, but pointing to share interest (called "protodeclarative pointing") is especially important for development. If your baby isn\'t pointing yet but is showing you things and making eye contact, keep watching  -  it may emerge soon.',
    },
    {
      ageRange: '16-18 months',
      context:
        'If your child isn\'t pointing by 16 months, it\'s a good idea to talk to your pediatrician. Absence of pointing by 18 months is one of the key indicators that a developmental evaluation is warranted. This doesn\'t mean there\'s definitely a problem, but it means the question is worth answering with professional help.',
    },
    {
      ageRange: '18+ months',
      context:
        'If your toddler still isn\'t pointing, please talk to your pediatrician about a developmental evaluation. Pointing is connected to joint attention  -  the ability to share focus with another person  -  which is a foundational social skill. Early support can make a meaningful difference, and many children thrive with timely intervention.',
    },
  ],
  whenNormal: [
    'Your baby is under 14 months and shares attention with you in other ways  -  looking back and forth, holding up toys, or reaching toward interesting things.',
    'Your baby points with their whole hand rather than an index finger  -  open-hand pointing is a normal early form.',
    'Your baby points to request things but not yet to share interest  -  requesting typically comes first.',
    'Your baby is very physically active and focused on motor milestones  -  sometimes communication skills emerge in a burst after a motor leap.',
  ],
  whenToMention: [
    'Your baby is 14-18 months and doesn\'t point in any form (whole hand or index finger) and doesn\'t show you objects by holding them up.',
    'Your baby doesn\'t seem to follow your point  -  when you point at something across the room, they look at your hand instead of where you\'re pointing.',
    'Your baby points to request things but never points just to share something interesting with you (for example, pointing at a bird or airplane).',
    'Your baby isn\'t pointing and also has limited eye contact or doesn\'t respond to their name consistently.',
  ],
  whenToActNow: [
    'Your baby is over 18 months with no pointing, limited eye contact, and few or no words  -  this combination warrants prompt developmental evaluation.',
    'Your baby was pointing and has stopped, along with any other loss of social or communication skills  -  regression always needs evaluation.',
  ],
  relatedMilestones: [
    'social-emotional-joint-attention',
    'social-emotional-pointing',
    'language-first-words',
    'social-emotional-showing-objects',
    'social-emotional-eye-contact',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Identifying Infants and Young Children With Developmental Disorders in the Medical Home: An Algorithm for Developmental Surveillance and Screening',
      url: 'https://publications.aap.org/pediatrics/article/118/1/405/69565',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Joint Attention and Social Communication in Autism Spectrum Disorder',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/default.aspx',
    },
  ],
};
