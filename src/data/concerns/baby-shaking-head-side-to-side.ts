import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-shaking-head-side-to-side',
  title: 'Baby Shaking Head Side to Side',
  category: 'behavior',
  searchTerms: [
    'baby shaking head side to side',
    'baby shakes head no',
    'baby head shaking back and forth',
    'why does my baby shake their head',
    'baby head shaking while sleeping',
    'baby shaking head 6 months',
    'is baby head shaking normal',
    'baby shaking head and smiling',
    'baby shaking head ear infection',
    'baby head shaking autism',
    'baby shaking head when tired',
    'baby rhythmic head shaking',
  ],
  quickAnswer:
    'Head shaking in babies is very common and is usually a normal self-soothing behavior or a sign of exploration and play. Many babies shake their head side to side when falling asleep, when excited, or when learning the concept of "no." Ear discomfort from teething or ear infections can also cause head shaking. While persistent or unusual head movements can occasionally indicate a neurological concern, in the vast majority of cases, a baby who is developing normally and shakes their head is simply exploring body movement.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Some newborns and young infants shake their head side to side as a self-soothing behavior, especially when trying to latch during breastfeeding (the rooting reflex can look like head shaking) or when settling to sleep. This is normal. If head shaking is constant, looks rhythmic and involuntary, or is accompanied by unusual eye movements, mention it to your pediatrician, as it could indicate a neurological concern in very young infants.',
    },
    {
      ageRange: '4-8 months',
      context:
        'This is the most common age for babies to discover head shaking. They find the sensation interesting and the dizzy feeling amusing. You may see your baby shake their head and then giggle. Head shaking while sitting in a high chair, during play, or when excited is usually just a fun motor experiment. Babies who are teething may shake their head because of referred discomfort from their gums to their ears. Check for other teething signs like drooling, chewing on objects, and irritability.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Around 8-12 months, some babies begin shaking their head to communicate "no" before they can say the word. This is a cognitive milestone - they are connecting a gesture to a meaning they have learned from watching adults. Head shaking when tired or falling asleep (sleep-related rhythmic movement) is also common at this age and is benign. If your baby shakes their head frequently and also pulls at their ears, has a fever, or is unusually fussy, an ear infection should be ruled out.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers shake their head to say "no" as one of their first communicative gestures. This is normal and healthy communication development. Some toddlers shake their head rhythmically when excited or during play. If head shaking is very frequent, associated with other repetitive behaviors like hand flapping or rocking, or if your toddler seems "stuck" in the behavior and cannot be redirected, discuss it with your pediatrician in the context of a broader developmental assessment.',
    },
  ],
  whenNormal: [
    'Your baby shakes their head while playing and seems amused by the sensation',
    'Head shaking occurs when falling asleep and stops once your baby is fully asleep',
    'Your baby shakes their head to communicate "no" starting around 8-12 months',
    'Head shaking is occasional and your baby is developing normally in all other areas',
    'Head shaking started around teething time and your baby also has other teething symptoms',
  ],
  whenToMention: [
    'Head shaking is very frequent and happens many times throughout the day',
    'Your baby is pulling at their ears alongside head shaking, especially with fever or fussiness',
    'Head shaking is accompanied by other repetitive movements and your baby has limited social engagement or communication',
  ],
  whenToActNow: [
    'Head shaking looks involuntary - your baby cannot seem to stop, and the movements look rhythmic and mechanical rather than playful',
    'Head shaking is accompanied by unusual eye movements, loss of balance, or your baby seems dazed or confused afterward',
    'Your baby has sudden onset of rapid head movements with a change in consciousness - this could indicate a seizure',
  ],
  relatedMilestones: [
    'social-emotional-communication',
    'gross-motor-head-control',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['head-banging', 'ear-infections', 'baby-jerky-movements'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Repetitive Behaviors. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/repetitive-behaviors-in-children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sleep-Related Rhythmic Movement Disorder. Sleep Medicine Reviews.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28169109/',
    },
  ],
};
