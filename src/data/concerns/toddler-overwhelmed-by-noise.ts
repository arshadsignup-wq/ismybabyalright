import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-overwhelmed-by-noise', title: 'Toddler Is Overwhelmed by Sounds', category: 'behavior',
  searchTerms: ['toddler overwhelmed by noise', 'toddler sound sensitivity', 'toddler hates loud sounds', 'toddler covers ears noise', 'toddler scared of loud sounds', 'toddler noise sensitivity', 'toddler auditory sensitivity', 'hyperacusis toddler', 'toddler meltdown from noise', 'toddler sound overload'],
  quickAnswer: 'Sound sensitivity (auditory hypersensitivity) is common in young children. Many toddlers are startled by or uncomfortable with loud sounds like vacuum cleaners, hand dryers, or fireworks. This often improves with age. If sound sensitivity is severe enough to cause significant distress, limit participation in activities, or require constant avoidance of normal environments, an occupational therapy evaluation can help.',
  byAge: [
    { ageRange: '0-12 months', context: 'Startle responses to loud sounds are normal. Some babies are more sensitive than others. Persistent distress with normal household sounds is worth noting.' },
    { ageRange: '12-24 months', context: 'Sound sensitivity often peaks during this period. Toddlers may become upset at vacuum cleaners, blenders, or public restroom hand dryers. This is very common and usually improves.' },
    { ageRange: '24-36 months', context: 'Many children become more tolerant of sounds as they develop. If sound sensitivity is not improving and limits your child\'s ability to participate in normal activities, discuss it with your pediatrician.' },
    { ageRange: '3-4 years', context: 'Persistent severe sound sensitivity may affect preschool participation. An occupational therapist can help with desensitization strategies. A hearing evaluation rules out any underlying auditory issue.' },
    { ageRange: '4-5 years', context: 'Sound sensitivity that prevents participation in school, social events, or daily activities needs professional support. Noise-reducing headphones and gradual desensitization can help.' },
  ],
  whenNormal: ['Your toddler is startled by sudden loud sounds but recovers quickly', 'Your toddler dislikes specific loud sounds like vacuum cleaners but tolerates most other sounds', 'Your toddler\'s sound sensitivity is mild and not limiting daily activities', 'Your toddler is gradually becoming more tolerant of sounds they previously disliked'],
  whenToMention: ['Your toddler covers ears frequently in environments with normal sound levels', 'Your toddler has meltdowns triggered by everyday sounds', 'Sound sensitivity prevents your child from participating in playgroups, stores, or restaurants'],
  whenToActNow: ['Your toddler is in constant distress from normal environmental sounds', 'Sound sensitivity has worsened significantly or appeared suddenly, which may indicate a hearing change'],
  relatedMilestones: ['sensory-processing', 'self-regulation', 'hearing', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-covering-ears-frequently', 'toddler-sensory-avoiding-behavior', 'toddler-sensory-processing-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Processing. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Hearing Disorders.', url: 'https://www.nidcd.nih.gov/health/hearing-loss-children' },
    { org: 'Zero to Three', citation: 'Zero to Three. Sensory Processing in Young Children.', url: 'https://www.zerotothree.org/resource/toddlers-and-challenging-behavior-why-they-do-it-and-how-to-respond/' },
  ],
};
