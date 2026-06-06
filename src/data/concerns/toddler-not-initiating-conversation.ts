import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-initiating-conversation',
  title: 'Toddler Never Starts a Conversation',
  category: 'communication',
  searchTerms: [
    'toddler not initiating conversation',
    'toddler doesn\'t start talking',
    'toddler only responds never initiates',
    'toddler passive communicator',
    'toddler won\'t start speaking',
    'toddler never brings up topics',
    'toddler doesn\'t volunteer speech',
    'toddler only talks when asked',
    'toddler doesn\'t initiate communication',
    'toddler passive language',
  ],
  quickAnswer:
    'By age 2, most toddlers initiate communication by requesting things, pointing out objects of interest, and sharing experiences. A child who only speaks when spoken to and never initiates may have pragmatic language difficulties or may be temperamentally shy. If your toddler has the words but never uses them to start interactions, mention this to your pediatrician.',
  byAge: [
    { ageRange: '12-18 months', context: 'Babies initiate communication through pointing, vocalizing, and reaching before they have words. If your baby does not initiate any communication through gestures or sounds, this is noteworthy even before words are expected.' },
    { ageRange: '18-24 months', context: 'Toddlers should be initiating requests, showing you things, and commenting on what they see. If your toddler only speaks in response to direct questions and never volunteers language, observe whether they initiate with gestures instead.' },
    { ageRange: '24-36 months', context: 'Children should be spontaneously commenting, requesting, and sharing. A child who answers questions but never starts a conversation may have pragmatic language difficulties. Some children are also more reserved by temperament.' },
    { ageRange: '3-4 years', context: 'Most children initiate conversations regularly with parents and familiar adults. If your child rarely or never starts a conversation, assess whether this is consistent across settings or specific to certain situations like preschool.' },
    { ageRange: '4-5 years', context: 'Children should be comfortable initiating conversations with peers and adults. Persistent difficulty initiating may benefit from speech therapy focused on social communication skills.' },
  ],
  whenNormal: [
    'Your toddler initiates through gestures and sounds but not yet with words',
    'Your toddler initiates at home but is quiet and waits to be spoken to in new settings',
    'Your toddler is shy but warms up and begins initiating after becoming comfortable',
    'Your toddler is under 2 and initiation skills are still developing',
  ],
  whenToMention: [
    'Your toddler is over 2 and never initiates communication in any setting',
    'Your toddler has adequate vocabulary but only uses words when directly prompted',
    'Your toddler does not point to share interests, request, or comment spontaneously',
  ],
  whenToActNow: [
    'Your toddler shows no desire to communicate through any means including gestures, sounds, or eye contact',
    'Your toddler has lost the ability or desire to initiate communication they previously showed',
  ],
  relatedMilestones: ['social-engagement', 'joint-attention', 'gestures', 'conversation-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-pragmatic-language-difficulty', 'toddler-not-maintaining-topic', 'selective-mutism'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Social Communication Disorder.', url: 'https://www.asha.org/practice-portal/clinical-topics/social-communication-disorder/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Communication and Your 1- to 2-Year-Old. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Tuning In: How Communication Develops.', url: 'https://www.zerotothree.org/resource/tuning-in-how-communication-develops/' },
  ],
};
