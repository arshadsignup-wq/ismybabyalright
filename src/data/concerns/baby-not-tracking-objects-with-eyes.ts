import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-tracking-objects-with-eyes',
  title: 'Baby Not Tracking Objects with Eyes',
  category: 'physical',
  searchTerms: [
    'baby not following objects with eyes',
    'baby not tracking toys',
    'baby eyes not following movement',
    'baby visual tracking delay',
    'baby not looking at faces',
    'baby not following finger',
    'when should baby track objects',
    'baby won\'t follow toy with eyes',
    'infant visual development',
    'baby not watching moving objects',
  ],
  quickAnswer:
    'Visual tracking - following a moving object with the eyes - is a key developmental milestone that typically emerges between 1-3 months. By 2-3 months, most babies can smoothly follow a slowly moving object from side to side. Early on, tracking may be jerky and inconsistent, which is normal. If your baby is not tracking objects at all by 3-4 months, it is worth mentioning to your pediatrician to check vision and neurological development.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns can see faces best at about 8-12 inches away, roughly the distance during feeding. Their tracking is very limited and jerky. They may briefly fixate on high-contrast patterns (black and white) but cannot smoothly follow a moving object yet. This is completely normal.',
    },
    {
      ageRange: '1-3 months',
      context:
        'By 6-8 weeks, most babies begin tracking slowly moving objects, especially faces. By 3 months, tracking becomes smoother and more reliable. Babies at this age should be able to follow a face or toy moving from side to side while they are lying on their back. If your baby is not showing any tracking by 3 months, mention it at your next well-child visit.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 4-6 months, babies should track objects smoothly in all directions - side to side, up and down. They begin reaching for things they see, showing coordination between vision and movement. If your baby still is not tracking by 4 months or has one eye that does not seem to move with the other, a vision evaluation is recommended.',
    },
  ],
  whenNormal: [
    'Jerky or inconsistent tracking in the first 6-8 weeks of life',
    'Brief moments of crossed eyes in the first 3-4 months (intermittent strabismus)',
    'Preferring to look at faces over objects in the first 2 months',
    'Not tracking small or distant objects but tracking faces up close',
  ],
  whenToMention: [
    'Your baby is not tracking faces or large objects at all by 3 months',
    'One eye seems to track while the other does not',
    'Your baby does not seem to look at or notice visual stimuli',
    'You notice your baby\'s eyes shaking or moving rapidly (nystagmus)',
  ],
  whenToActNow: [
    'Your baby has a white or cloudy appearance in one or both pupils',
    'Your baby\'s eyes are constantly crossed or misaligned after 4 months of age',
    'Your baby shows no visual awareness of surroundings and does not respond to faces at any distance',
  ],
  relatedMilestones: ['1-month', '3-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['crossed-eyes', 'amblyopia-signs', 'nystagmus-baby', 'strabismus-intermittent'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Vision Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Vision-Development.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Warning Signs of Vision Problems in Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Eye Institute. Your Baby\'s Developing Sight.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/your-babys-developing-sight',
    },
  ],
};
