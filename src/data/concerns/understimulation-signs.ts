import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'understimulation-signs',
  title: 'Signs of Understimulation in Babies',
  category: 'behavior',
  searchTerms: [
    'baby understimulated',
    'signs of understimulation',
    'baby bored symptoms',
    'understimulated infant',
    'baby not enough stimulation',
    'how to tell if baby is bored',
    'baby needs more engagement',
    'understimulation in babies',
    'baby fussy from boredom',
    'baby development lack of stimulation',
  ],
  quickAnswer:
    'Understimulation happens when babies do not receive enough interaction, sensory input, or opportunities to explore. Signs include fussiness, seeking attention, repeatedly doing the same simple action (like banging a toy), or seeming disengaged. Babies need a balance of active engagement and independent play to develop optimally.',
  byAge: [
    {
      ageRange: 'Newborn - 3 months',
      context:
        'Newborns need surprisingly little active stimulation  -  they spend most of their time sleeping, feeding, and observing. However, they do need responsive caregiving: making eye contact, talking to them during diaper changes, and holding them close. Understimulation at this age looks like prolonged periods of no interaction, lack of eye contact, or being left alone without sensory input (voice, touch, movement).',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age are becoming more alert and engaged. They need opportunities to look at faces, reach for toys, hear language, and practice new skills (tummy time, grasping). Understimulated babies may fuss, seek attention by making sounds, or seem disengaged. Rotating toys, doing tummy time, talking and singing, and providing safe floor play helps meet their developmental needs.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies are natural explorers and need variety in their environment. Understimulation may look like repetitive banging of the same toy, frequent fussiness, or seeking your attention constantly. They need opportunities to crawl, explore different textures, interact with caregivers, and experience cause-and-effect play. Too much time in containers (bouncer, swing, high chair) or screen time can contribute to understimulation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers need active exploration, language-rich interactions, and opportunities for both independent and social play. Understimulated toddlers may seem bored, whiny, or destructive (getting into things because they need something to do). Providing open-ended toys, time outdoors, books, music, and interactive play supports healthy development. Balance is key  -  they also need downtime.',
    },
  ],
  whenNormal: [
    'Your baby has periods of engagement (playing, interacting) and periods of independent exploration or rest',
    'You provide age-appropriate toys, conversation, and opportunities to practice new skills',
    'Your baby shows interest in their environment and reaches developmental milestones on time',
    'Fussiness or boredom cues resolve when you offer new activities or interactions',
    'Your baby has a variety of experiences (floor play, tummy time, books, songs, outdoor time)',
  ],
  whenToMention: [
    'Your baby seems disengaged, makes little eye contact, or does not respond to interaction',
    'Your baby is frequently fussy and nothing seems to help, or they seem unusually passive',
    'You are concerned that your baby is not getting enough interaction or stimulation due to life circumstances',
    'Your baby is missing developmental milestones or not showing interest in toys, faces, or their environment',
  ],
  whenToActNow: [
    'Your baby is not responding to voices, faces, or attempts to engage them',
    'Your baby shows signs of developmental delays across multiple areas (motor, language, social)',
    'You are struggling to provide adequate care or interaction for your baby and need support  -  please reach out to your pediatrician or a local family support service',
  ],
  relatedMilestones: [
    'cognitive-problem-solving',
    'social-emotional-engagement',
    'language-receptive',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Importance of Play in Promoting Healthy Child Development. Pediatrics. 2007;119(1):182-191.',
      url: 'https://publications.aap.org/pediatrics/article/119/1/182/70699',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Building Your Baby\'s Brain Through Everyday Interactions.',
      url: 'https://www.zerotothree.org/resource/building-your-babys-brain/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Essentials for Parenting Toddlers and Preschoolers.',
      url: 'https://www.cdc.gov/parents/essentials/index.html',
    },
  ],
};
