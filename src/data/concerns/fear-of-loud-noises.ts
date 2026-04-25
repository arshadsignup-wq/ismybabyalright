import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'fear-of-loud-noises',
  title: 'My Baby Is Scared of Loud Noises',
  category: 'behavior',
  searchTerms: [
    'baby scared of loud noises',
    'baby cries at loud sounds',
    'toddler afraid of vacuum',
    'baby startles at every sound',
    'toddler noise sensitivity',
    'baby screams when dog barks',
    'toddler afraid of hand dryer',
    'baby covers ears',
    'is it normal for baby to be afraid of loud noises',
    'noise anxiety baby',
  ],
  quickAnswer:
    'Fear of loud noises is one of the most common and developmentally normal fears in babies and toddlers. The startle reflex to sudden loud sounds is actually present from birth and is a healthy protective instinct. Most children gradually become more comfortable with everyday loud noises as they grow, especially when they feel safe and can anticipate the sound.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborns and young babies have a startle reflex (Moro reflex) that causes them to fling their arms out and often cry when they hear sudden loud noises. This is a healthy, built-in protective response and is present in all typical newborns. The Moro reflex usually fades by 3-6 months, but babies may still cry or fuss in response to loud, unexpected sounds. Comforting your baby calmly after a startle helps them feel safe.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies develop better hearing discrimination and memory, they may begin to anticipate loud sounds they have heard before and react with distress before the sound even occurs  -  for example, becoming anxious when they see the vacuum cleaner being taken out. This shows sophisticated cognitive development. Your baby is learning that certain objects make loud noises, but they cannot yet understand that the noise will not hurt them.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the peak window for noise fears. Toddlers may be terrified of vacuum cleaners, blenders, fireworks, hand dryers in public restrooms, lawn mowers, thunder, or barking dogs. These fears are very common and are driven by the normal surge in fearfulness that accompanies growing awareness of the world. Do not force exposure  -  let your child observe from a distance and gradually move closer as their comfort allows.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Most noise fears begin to diminish as children develop better understanding of cause and effect and can be given explanations that make sense to them. Letting your child push the button on the vacuum or blender can give them a sense of control. If noise sensitivity is extreme  -  covering ears at normal conversational volume, becoming distressed by everyday background sounds, or significantly limiting activities  -  discuss it with your pediatrician to explore whether sensory processing differences might be involved.',
    },
  ],
  whenNormal: [
    'Your baby or toddler startles or cries at sudden loud noises like thunder, fireworks, vacuum cleaners, or barking dogs',
    'Your child is afraid of specific loud sounds but is otherwise happy, engaged, and developing well',
    'Noise fear is gradually improving as your child gets older and gains more experience with the sounds',
    'Your child can be comforted and calmed relatively quickly after being startled by a loud noise',
  ],
  whenToMention: [
    'Your child is extremely sensitive to everyday sounds at normal volumes  -  covering ears during conversation, at the grocery store, or in normal social settings',
    'Noise sensitivity is so severe that it prevents your family from doing regular activities like going to restaurants, attending events, or using household appliances',
    'Your child also shows other sensory sensitivities such as difficulty with clothing textures, food textures, bright lights, or being touched in certain ways',
  ],
  whenToActNow: [
    'Your newborn does not startle or react to any loud sounds, which could indicate a hearing concern that should be evaluated promptly',
    'Extreme noise sensitivity appears suddenly alongside other behavioral changes, regression in skills, or signs of distress, which could indicate pain (such as an ear infection) or a neurological concern',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'cognitive-cause-and-effect',
    'social-emotional-self-soothing',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing Assessment in Infants and Children. Pediatrics. 2003;111(2):436-440.',
      url: 'https://publications.aap.org/pediatrics/article/111/2/436/28559',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Coping With Fears and Phobias.',
      url: 'https://www.zerotothree.org/resource/coping-with-fears/',
    },
  ],
};
