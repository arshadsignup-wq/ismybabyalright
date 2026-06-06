import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'baby-not-referencing-parent', title: 'Baby Not Checking Back with Parent', category: 'behavior',
  searchTerms: ['baby not referencing parent', 'baby doesn\'t check back', 'social referencing baby', 'baby doesn\'t look to parent', 'baby not looking for reassurance', 'baby doesn\'t check parent reaction', 'social referencing development', 'baby not looking back at parent', 'baby exploring without checking', 'when do babies reference parents'],
  quickAnswer: 'Social referencing, where a baby looks to a parent\'s face for guidance or emotional cues, typically develops between 8 and 12 months. Babies use your facial expressions to decide whether a new situation is safe or scary. If your baby does not look to you for emotional cues by 12 to 14 months, this is worth discussing with your pediatrician.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies prefer familiar faces but do not yet look to parents for emotional guidance about situations. They are focused on building face recognition and social smiling.' },
    { ageRange: '6-9 months', context: 'Social referencing begins to develop. Babies may look at a parent when encountering something new or uncertain. This behavior signals that your baby understands you have information about the situation.' },
    { ageRange: '9-12 months', context: 'Social referencing becomes more consistent. Your baby looks at your face when a stranger approaches, an unfamiliar toy appears, or something unexpected happens. They use your expression to guide their response.' },
    { ageRange: '12-18 months', context: 'Social referencing is well-established. Toddlers frequently check your reaction before approaching new things. A child who explores without ever checking back with a parent may have differences in social communication.' },
    { ageRange: '18-24 months', context: 'Children continue to reference parents in new situations. They are developing their own emotional understanding but still rely on your cues. Complete absence of social referencing should be evaluated.' },
  ],
  whenNormal: ['Your baby is under 9 months and not yet looking to you for emotional cues', 'Your baby references you in some situations but not all', 'Your baby references you more with strangers than with familiar people or places', 'Your baby is confident and explores independently but occasionally checks back'],
  whenToMention: ['Your baby is over 14 months and never looks to you for guidance or reassurance in new situations', 'Your baby seems unaware of your emotional state or facial expressions', 'Absent social referencing is combined with limited eye contact and joint attention'],
  whenToActNow: ['Your baby shows no awareness of or interest in your emotional state by 15 months', 'Your baby had social referencing skills and has stopped using them'],
  relatedMilestones: ['social-engagement', 'joint-attention', 'eye-contact', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['baby-not-following-gaze', 'no-joint-attention', 'baby-not-interested-in-people'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development: 8 to 12 Months.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-to-12-Months.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby By One Year.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-1yr.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Social-Emotional Development.', url: 'https://www.zerotothree.org/resource/social-emotional-development-birth-to-3-months/' },
  ],
};
