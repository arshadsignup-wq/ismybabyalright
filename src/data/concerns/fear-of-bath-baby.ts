import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'fear-of-bath-baby',
  title: 'My Baby Is Afraid of the Bath',
  category: 'behavior',
  searchTerms: [
    'baby scared of bath',
    'baby screams during bath time',
    'baby suddenly afraid of bath',
    'toddler won\'t take a bath',
    'baby cries in bath',
    'baby used to like baths now screams',
    'how to help baby afraid of water',
    'bath time fear baby',
    'toddler bath phobia',
    'baby hates bath suddenly',
  ],
  quickAnswer:
    'Bath fear is very common in babies and toddlers, and it often appears suddenly even in babies who previously loved water. The most common age for bath fears to develop is 8-24 months, coinciding with a normal increase in general anxiety and awareness of the environment. With patience and gradual reintroduction, most children overcome bath fears within a few weeks.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Very young babies who cry during baths are usually reacting to the sensation of being wet, cold, or unsupported rather than experiencing fear. Ensuring the room is warm, using a supportive baby bath seat, keeping a warm washcloth on their chest, and making the water comfortably warm (around 100 degrees Fahrenheit) can help. Some babies simply take time to adjust to the bathing experience.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Bath fear often first appears in this window as babies develop stronger awareness of their environment and greater sensitivity to unexpected sensations. A slip in the tub, water in their eyes, or even the sound of the drain can trigger a sudden fear. If your baby was fine with baths and suddenly becomes terrified, think about whether something startling may have happened. Go slowly  -  try sponge baths, bathing with a parent, or playing with water outside the tub to rebuild comfort.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the peak age for bath fears, which often overlap with the normal developmental surge in fears and anxieties. Your toddler has enough cognitive ability to anticipate things they do not like but lacks the reasoning to talk themselves through the fear. Forcing baths typically makes the fear worse. Let your child control the pace: start with shallow water, offer bath toys, let them sit in an empty tub first, or try a shower together. Most toddlers come around within 2-6 weeks.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, children can begin to verbalize what scares them about the bath  -  the drain, slipping, water on their face, or the noise. This makes it easier to address specific fears. If bath fear persists beyond a few months or is severe enough to prevent any bathing, mention it to your pediatrician. Rarely, persistent intense bath avoidance can be part of a broader pattern of sensory sensitivities worth exploring.',
    },
  ],
  whenNormal: [
    'Your baby suddenly developed bath fear between 6-24 months even though they previously enjoyed baths',
    'Your child tolerates being cleaned with a washcloth or sponge bath even if they dislike the tub',
    'Bath fear is improving gradually with patient, gentle reintroduction over days to weeks',
    'Your child has other developmentally normal fears at this age, such as fear of loud noises or strangers',
  ],
  whenToMention: [
    'Bath fear has lasted more than 2-3 months despite gentle, consistent attempts at reintroduction and is making hygiene difficult',
    'Your child has extreme sensory sensitivities beyond bath fear  -  distress with clothing textures, certain sounds, food textures, or being touched',
    'Bath fear is accompanied by fears in many other situations that seem excessive for your child\'s age and are restricting daily activities',
  ],
  whenToActNow: [
    'Your child has a sudden, severe fear of being undressed or touched in the bath area, especially if this represents a change from previous behavior, which should be discussed with your pediatrician promptly',
    'Bath fear is accompanied by regression in other developmental areas or a significant behavior change',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'cognitive-object-permanence',
    'social-emotional-self-soothing',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bathing Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Coping With Fears and Phobias.',
      url: 'https://www.zerotothree.org/resource/coping-with-fears/',
    },
  ],
};
