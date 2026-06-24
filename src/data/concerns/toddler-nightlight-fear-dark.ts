import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-nightlight-fear-dark',
  title: 'My Toddler Is Afraid of the Dark',
  category: 'behavior',
  searchTerms: [
    'toddler afraid of dark',
    'toddler scared of dark',
    'toddler nightlight',
    'toddler won\'t sleep in dark',
    'toddler fear of dark bedtime',
    'toddler needs light to sleep',
    'best nightlight for toddler',
    'toddler suddenly scared of dark',
    'is nightlight okay for toddler',
    'toddler dark room anxiety',
  ],
  quickAnswer:
    'Fear of the dark typically develops around age 2-3 as your toddler\'s imagination grows. It is a completely normal and developmentally appropriate fear. Using a dim nightlight is perfectly fine and will not disrupt your toddler\'s sleep — in fact, it can help them feel safe enough to fall asleep independently. Most children gradually outgrow this fear, though it can persist into the school-age years for some.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'True fear of the dark is uncommon at this age because the cognitive ability to imagine threats in the dark has not yet fully developed. If your toddler resists sleeping in a dark room, it is more likely related to separation anxiety or difficulty with the sleep transition. A dim nightlight is fine to use and may help your toddler feel more comfortable. Choose a warm-toned (red or amber) nightlight rather than blue or white, as warm colors are less disruptive to melatonin production.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is when fear of the dark typically emerges as imagination develops. Your toddler may start associating darkness with scary things — monsters, shadows, or things they have seen in books or on screens. Validate their feelings without dismissing them ("I understand the dark can feel scary"). Let your toddler help choose a nightlight, which gives them a sense of control. Avoid showing them there is "nothing to be afraid of" by searching the room extensively, as this can inadvertently confirm that there was something worth finding.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Fear of the dark may persist or intensify as imagination continues to grow. Strategies that help include reading books about characters who overcome fear of the dark, using a "brave" stuffed animal or blanket as a protector, and practicing gradual exposure (dim the nightlight slowly over time as comfort increases). Avoid using the dark as punishment or teasing your child about their fear, as this can worsen anxiety. If the fear is severely limiting your child\'s functioning or spreading to other areas, consider speaking with your pediatrician about referral to a child psychologist.',
    },
  ],
  whenNormal: [
    'Your toddler asks for a nightlight or the door left open and sleeps well with this accommodation',
    'Fear of the dark developed around age 2-3 alongside an active imagination',
    'Your toddler can be reassured and eventually falls asleep, even if it takes a few extra minutes',
    'The fear is specific to bedtime and does not affect your toddler\'s daytime functioning',
  ],
  whenToMention: [
    'Your toddler\'s fear of the dark is so intense that they cannot fall asleep even with a nightlight and your presence',
    'The fear is spreading to other situations — your toddler is becoming anxious about many different things',
    'Your toddler\'s sleep is severely disrupted for weeks, affecting their daytime behavior and mood',
  ],
  whenToActNow: [
    'Your toddler is so distressed that they are injuring themselves or having panic-like symptoms (hyperventilating, vomiting from fear)',
    'The fear developed suddenly after a traumatic event and is accompanied by other signs of trauma',
    'Your toddler\'s fear and anxiety are so pervasive that they are unable to function normally during the day',
  ],
  relatedMilestones: [
    'cognitive-imagination',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-monster-fear-management',
    'night-terrors',
    'fear-of-bath-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. The Effect of Light on Sleep and Circadian Rhythm. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6751071/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Nightlights and Children\'s Sleep.',
      url: 'https://www.sleepfoundation.org/bedroom-environment/nightlights-and-childrens-sleep',
    },
  ],
};
