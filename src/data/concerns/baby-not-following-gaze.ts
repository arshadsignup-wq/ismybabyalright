import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'baby-not-following-gaze', title: 'Baby Not Following Where You Look', category: 'behavior',
  searchTerms: ['baby not following gaze', 'baby doesn\'t look where I look', 'gaze following baby', 'baby not tracking gaze', 'joint attention gaze', 'baby doesn\'t follow my eyes', 'when do babies follow gaze', 'gaze sharing baby', 'baby won\'t look where I point', 'baby not checking what I look at'],
  quickAnswer: 'Gaze following, where a baby looks in the direction you are looking, typically develops between 6 and 12 months. It is a foundational joint attention skill that helps babies learn from others. If your baby does not follow your gaze or look where you point by 12 months, mention this to your pediatrician.',
  byAge: [
    { ageRange: '0-5 months', context: 'Babies are not yet expected to follow your gaze direction. They focus primarily on faces directly in front of them and objects within their visual field.' },
    { ageRange: '6-9 months', context: 'Gaze following begins to emerge. Babies may turn to look at something after you look at it, especially if you use exaggerated head turns. This skill develops gradually.' },
    { ageRange: '9-12 months', context: 'Most babies reliably follow your gaze and look where you point. They use this skill to learn about their environment and share attention with you. This is a key joint attention milestone.' },
    { ageRange: '12-18 months', context: 'Gaze following is well-established. Babies use it along with pointing and showing to create shared experiences. If your child does not follow gaze or pointing by 12 months, a developmental assessment may be recommended.' },
    { ageRange: '18-24 months', context: 'Children follow gaze automatically and use it as part of social interaction. Persistent failure to follow gaze or pointing may be associated with social communication differences and should be evaluated.' },
  ],
  whenNormal: ['Your baby is under 9 months and gaze following is still developing', 'Your baby follows your gaze sometimes but not consistently', 'Your baby follows pointing but not subtle gaze shifts', 'Your baby follows gaze in quiet settings but not in busy environments'],
  whenToMention: ['Your baby is over 12 months and does not look where you point or look', 'Your baby does not follow gaze and also does not point or show objects', 'Your baby seems uninterested in what you are looking at or attending to'],
  whenToActNow: ['Your baby shows no joint attention behaviors of any kind including gaze following, pointing, and showing by 15 months', 'Your baby had these skills and has lost them'],
  relatedMilestones: ['joint-attention', 'eye-tracking', 'social-engagement', 'pointing'],
  showSelfReferral: true, relatedConcernSlugs: ['no-joint-attention', 'not-pointing', 'baby-not-showing-objects'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development: 8 to 12 Months.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-to-12-Months.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-9mo.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Joint Attention and Social Development.', url: 'https://www.zerotothree.org/resource/tuning-in-how-communication-develops/' },
  ],
};
