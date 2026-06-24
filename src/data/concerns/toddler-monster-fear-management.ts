import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-monster-fear-management',
  title: 'My Toddler Is Afraid of Monsters',
  category: 'behavior',
  searchTerms: [
    'toddler afraid of monsters',
    'toddler scared of monsters at night',
    'toddler monster fear bedtime',
    'toddler imaginary fears',
    'toddler won\'t sleep scared of monsters',
    'toddler fear of dark monsters',
    'how to help toddler with monster fear',
    'toddler nighttime fears monsters',
    'monster spray for toddler',
    'toddler scared something in room',
  ],
  quickAnswer:
    'Fear of monsters is an entirely normal developmental milestone that typically emerges around age 2-3 as your toddler\'s imagination develops faster than their ability to distinguish fantasy from reality. This fear actually reflects important cognitive growth — your child now has the mental capacity to imagine things that are not physically present. While the fear is not rational, it is very real to your child and should be taken seriously without reinforcing it.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Early imaginative fears may begin to appear as toddlers develop the cognitive ability to think about things they cannot see. At this age, fears are more often related to loud noises, unfamiliar people, or being separated from parents rather than specific monsters. If your toddler seems scared at bedtime, it may be more about separation anxiety or fear of the dark than monsters specifically. A consistent bedtime routine, nightlight, and comfort object can help.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the classic age for monster fears. Your toddler\'s imagination is blossoming, but they cannot yet fully understand that imaginary things are not real. Shadows, noises, and images from books or screens can fuel these fears. Take the fear seriously without dismissing it ("I understand you feel scared") but avoid elaborate monster-hunting rituals that can accidentally confirm monsters are real. Simple reassurance, checking under the bed together once, and emphasizing that your home is safe are effective approaches.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Monster fears may persist or even intensify as imagination grows. Some children develop very specific fears based on things they have seen in media. This is a good time to carefully monitor screen content and limit exposure to anything scary. Creative solutions like "monster spray" (a spray bottle with water and lavender) can empower your child, though some experts caution this can reinforce the idea that monsters are real. Reading books about friendly monsters can help reframe the concept. Most children outgrow these fears as they develop better understanding of real versus pretend.',
    },
  ],
  whenNormal: [
    'Your toddler\'s monster fear emerged around age 2-3 alongside an active imagination',
    'Your toddler is reassured by your presence, a nightlight, or a comfort object and can eventually fall asleep',
    'The fear comes and goes and does not dominate your child\'s entire day',
    'Your toddler can be distracted from the fear and engages in normal play during the day',
  ],
  whenToMention: [
    'Your toddler\'s fear is so intense that it significantly disrupts sleep every night for weeks',
    'Your toddler shows pervasive anxiety throughout the day, not just at bedtime',
    'Your toddler\'s fears are expanding to many different situations and limiting their ability to participate in normal activities',
  ],
  whenToActNow: [
    'Your toddler describes seeing or hearing things in detail in a way that seems like more than imagination, especially if accompanied by other unusual behaviors',
    'Your toddler\'s fear is so severe that they are not sleeping at all and their health or functioning is affected',
    'Your toddler\'s fears began suddenly after a traumatic event or significant change in their life',
  ],
  relatedMilestones: [
    'cognitive-imagination',
    'cognitive-fantasy-reality-distinction',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-nightlight-fear-dark',
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
      org: 'Zero to Three',
      citation:
        'Zero to Three. Helping Your Toddler with Fears.',
      url: 'https://www.zerotothree.org/resource/helping-your-toddler-with-fears/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Anxiety and Depression in Children.',
      url: 'https://www.cdc.gov/childrensmentalhealth/depression.html',
    },
  ],
};
