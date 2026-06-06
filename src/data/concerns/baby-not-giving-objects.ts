import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-giving-objects',
  title: 'Baby Not Handing Objects to Others',
  category: 'behavior',
  searchTerms: [
    'baby not giving objects', 'baby won\'t hand things over', 'baby not sharing toys',
    'baby doesn\'t give when asked', 'baby not handing objects', 'when do babies give objects',
    'baby won\'t give to parents', 'giving milestone baby', 'baby not releasing objects to others',
    'toddler won\'t hand things over',
  ],
  quickAnswer:
    'Giving objects to others, either when asked or spontaneously, typically develops between 10 and 14 months. This skill reflects both social communication and the ability to release a grasped object intentionally. If your child does not give objects by 15 to 16 months, mention it at your next well-child visit.',
  byAge: [
    { ageRange: '6-9 months', context: 'Babies at this age grasp objects but have difficulty voluntarily releasing them. They may drop objects accidentally but cannot yet hand them to you intentionally. This is a motor and cognitive skill that takes time to develop.' },
    { ageRange: '9-12 months', context: 'Babies begin to practice giving and may release objects into your hand, especially during games like "give it to me." They enjoy the back-and-forth of give-and-take games as early turn-taking practice.' },
    { ageRange: '12-15 months', context: 'Most babies can give objects when asked and may spontaneously bring things to share with you. This is an important social milestone that shows your baby wants to interact and share experiences.' },
    { ageRange: '15-18 months', context: 'Giving objects should be established. If your child never hands objects to you, especially alongside absent showing and pointing, a developmental screening is recommended.' },
    { ageRange: '18-24 months', context: 'Children give objects as part of social interaction and may begin offering things to peers. Complete absence of giving and sharing behaviors at this age warrants evaluation.' },
  ],
  whenNormal: [
    'Your baby is under 12 months and has difficulty releasing objects from their grip', 'Your baby gives objects during games but not spontaneously',
    'Your baby hands you things sometimes but refuses other times, which is a sign of developing autonomy', 'Your baby gives to familiar people but not strangers',
  ],
  whenToMention: [
    'Your baby is over 15 months and has never given an object to another person', 'Your baby does not respond to requests to give or show objects',
    'Absent giving is combined with limited pointing, showing, and social engagement',
  ],
  whenToActNow: [
    'Your baby shows no social sharing behaviors including giving, showing, or pointing by 15 months',
    'Your baby had these skills and has lost them',
  ],
  relatedMilestones: ['joint-attention', 'social-engagement', 'fine-motor', 'turn-taking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-showing-objects', 'no-joint-attention', 'not-pointing'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child By One Year.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-1yr.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development: 8 to 12 Months.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-to-12-Months.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Social Development Milestones.', url: 'https://www.zerotothree.org/resource/social-emotional-development-birth-to-3-months/' },
  ],
};
