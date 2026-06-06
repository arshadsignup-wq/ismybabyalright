import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-tactile-defensiveness', title: 'Toddler Is Very Sensitive to Touch', category: 'behavior',
  searchTerms: ['toddler tactile defensiveness', 'toddler touch sensitivity', 'toddler hates being touched', 'toddler can\'t stand clothing tags', 'toddler sensitive to textures', 'tactile sensitivity child', 'toddler won\'t touch messy things', 'toddler hates certain fabrics', 'toddler touch avoidance', 'toddler defensive to touch'],
  quickAnswer: 'Tactile defensiveness means a child is overly sensitive to touch sensations that others find normal. Signs include distress with clothing tags, certain fabrics, messy play, light touch, hair brushing, or nail cutting. Mild touch preferences are common, but severe tactile defensiveness that limits daily activities benefits from occupational therapy.',
  byAge: [
    { ageRange: '0-12 months', context: 'Some babies are fussier with certain fabrics, dislike having their face wiped, or resist being held in certain ways. Mild preferences are normal but persistent distress may indicate early tactile sensitivity.' },
    { ageRange: '12-24 months', context: 'Touch sensitivity often becomes more apparent. Toddlers may refuse to touch finger paint, sand, or wet textures. They may be bothered by clothing seams or tags. Some of this is normal caution.' },
    { ageRange: '24-36 months', context: 'If tactile defensiveness limits eating (refusing certain textures), dressing (only certain clothes), or play (refusing messy activities), an OT evaluation can help.' },
    { ageRange: '3-4 years', context: 'Preschool activities require engagement with many textures. Tactile defensiveness can affect participation in art, outdoor play, and self-care. OT provides desensitization strategies.' },
    { ageRange: '4-5 years', context: 'With appropriate OT support, many children become more tolerant. Strategies include heavy work activities, sensory brushing protocols, and gradual exposure to avoided textures.' },
  ],
  whenNormal: ['Your toddler dislikes some textures but can tolerate them', 'Your toddler prefers certain clothes but wears what is needed', 'Your toddler avoids finger paint but participates in other messy activities', 'Touch sensitivities are mild and not limiting'],
  whenToMention: ['Your toddler is extremely distressed by routine touch like hair brushing, nail cutting, or face washing', 'Your toddler can only wear specific clothing due to texture sensitivity', 'Tactile defensiveness severely limits diet, play, or self-care'],
  whenToActNow: ['Your toddler is in significant distress from routine daily touch experiences', 'Tactile defensiveness is worsening and expanding to more situations'],
  relatedMilestones: ['sensory-processing', 'self-regulation', 'self-care', 'feeding-skills'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sensory-avoiding-behavior', 'toddler-sensory-processing-concerns', 'toddler-toe-walking-sensory'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Integration. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing.', url: 'https://www.nichd.nih.gov/health/topics/autism' },
    { org: 'Zero to Three', citation: 'Zero to Three. Sensory Development.', url: 'https://www.zerotothree.org/resource/toddlers-and-challenging-behavior-why-they-do-it-and-how-to-respond/' },
  ],
};
