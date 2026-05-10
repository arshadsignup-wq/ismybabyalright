import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-making-eye-contact-vision',
  title: 'Baby Not Making Eye Contact (Vision)',
  category: 'medical',
  searchTerms: [
    'baby not making eye contact vision problem',
    'baby won\'t look at me vision',
    'baby not focusing on faces',
    'newborn not looking at me',
    'baby doesn\'t look at eyes',
    'baby avoiding eye contact vision',
    'baby not tracking faces',
    'infant poor eye contact',
    'baby vision delay eye contact',
  ],
  quickAnswer:
    'Lack of eye contact in babies can have vision-related causes such as severe refractive errors, cortical visual impairment, congenital cataracts, or optic nerve abnormalities. It can also be related to developmental differences. Newborns can focus best at about 8-12 inches (the distance to a parent\'s face during feeding). By 2-3 months, babies should be making consistent eye contact and socially smiling. If your baby is not making eye contact by 3 months, a comprehensive vision evaluation is recommended.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have limited visual acuity (approximately 20/400) but can focus on high-contrast objects and faces at close range. By 6-8 weeks, babies should begin making brief eye contact and showing interest in faces. By 2-3 months, eye contact should be more consistent and the social smile typically emerges. If your baby is not showing any interest in faces or making eye contact by 3 months, a vision evaluation is important to rule out structural eye problems.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, babies should reliably make eye contact, track faces, and show social responsiveness. If eye contact remains absent or inconsistent, both vision and developmental evaluations should be pursued. Conditions that can cause poor eye contact include cortical visual impairment (a brain-based vision problem), severe farsightedness, congenital cataracts, or optic nerve hypoplasia.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Eye contact should be well-established. Babies should visually engage with caregivers, follow people across the room, and show recognition of familiar faces. Poor eye contact at this age warrants a thorough evaluation including both vision testing and developmental assessment, as it can also be an early sign of autism spectrum disorder.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers should have consistent eye contact during social interactions, respond to facial expressions, and engage in shared attention (looking where someone points). If eye contact is absent or notably reduced, both vision-related causes and developmental causes should be explored simultaneously through appropriate specialists.',
    },
  ],
  whenNormal: [
    'Your newborn under 6 weeks does not consistently make eye contact yet but does briefly fixate on your face at close range',
    'Your baby makes eye contact during feeding but looks away during overstimulation',
    'Your baby makes good eye contact but occasionally looks past you when distracted',
    'Eye contact varies throughout the day depending on your baby\'s alertness and mood',
  ],
  whenToMention: [
    'Your baby is 2-3 months old and still not making any consistent eye contact',
    'Your baby does not seem to recognize your face or respond to it with a smile by 3 months',
    'Your baby appears to look through you or past you rather than at you',
  ],
  whenToActNow: [
    'Your baby does not fixate on faces or track moving objects at all by 3 months, which may indicate significant visual impairment that needs urgent evaluation',
    'Your baby\'s pupils appear white, cloudy, or asymmetrical, or the eyes do not appear to respond to light, which could indicate congenital cataracts, retinoblastoma, or other serious eye conditions',
  ],
  relatedMilestones: [
    'eye-contact',
    'visual-tracking',
    'social-smile',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Vision Screening Recommendations.',
      url: 'https://aapos.org/glossary/vision-screening',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Visual System Assessment in Infants, Children, and Young Adults. Pediatrics. 2016;137(1):e20153596.',
      url: 'https://publications.aap.org/pediatrics/article/137/1/e20153596/52600/Visual-System-Assessment-in-Infants-Children-and',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Pediatric Eye Evaluations Preferred Practice Pattern.',
      url: 'https://www.aao.org/preferred-practice-pattern/pediatric-eye-evaluations-ppp',
    },
  ],
};
