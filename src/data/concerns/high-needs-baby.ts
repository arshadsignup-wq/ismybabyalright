import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'high-needs-baby',
  title: 'My Baby Is Extremely Fussy (High-Needs Baby)',
  category: 'behavior',
  searchTerms: [
    'high needs baby',
    'extremely fussy baby',
    'baby that never stops crying',
    'baby needs to be held constantly',
    'difficult baby temperament',
    'baby only happy when held',
    'why is my baby so fussy all the time',
    'spirited baby',
    'baby cries all day',
    'intense baby demanding constant attention',
  ],
  quickAnswer:
    'Some babies are simply born with more intense temperaments  -  they cry more, need more holding, sleep less, and react more strongly to stimulation. This is a normal variation in temperament, not something you caused and not a reflection of your parenting. High-needs babies are often very alert, smart, and engaged with the world, and their intensity frequently becomes a strength as they grow.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The first three months can be incredibly intense with a high-needs baby. Excessive crying peaks around 6-8 weeks in all babies, but high-needs babies often cry more and for longer. It is important to rule out medical causes like reflux, milk protein allergy, or colic with your pediatrician. If your baby is growing well and your doctor finds no medical cause, you are likely dealing with a normal but intense temperament. It is okay to put your baby down safely and take a break when you are overwhelmed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many parents notice improvement around 3-4 months as the "fourth trimester" ends. High-needs babies may still require more holding, movement, and attention than average, but they are often rewarded with a deeply engaged, alert baby who is intensely interested in the world. These babies may resist the stroller or swing and prefer to be worn or held. This is a preference, not a problem. Following your baby\'s lead on what soothes them is the most effective approach.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As high-needs babies develop mobility and can explore the world more independently, many parents see a shift. Some babies become more content once they can sit, crawl, and interact with objects. However, high-needs babies often continue to have trouble with sleep, may resist transitions, and may become frustrated easily when they cannot do what they want. Separation anxiety and stranger anxiety may be especially intense in these babies.',
    },
    {
      ageRange: '12 months+',
      context:
        'High-needs toddlers are often intense, persistent, and deeply feeling. These traits, while exhausting for parents, typically develop into positive qualities: determination, passion, empathy, and leadership. The key challenges are usually around sleep, transitions, and emotional intensity. If your child\'s intensity is not gradually becoming more manageable with age, or if you are struggling with burnout, your pediatrician can help connect you with support.',
    },
  ],
  whenNormal: [
    'Your baby cries more than average but is growing well, eating well, and has been evaluated by a pediatrician who found no medical cause',
    'Your baby is very alert and engaged with the world  -  they just want to be stimulated and held more than other babies',
    'Your baby has always been this way from birth  -  consistent temperament from the start is usually just personality',
    'The intensity gradually becomes more manageable as your baby grows and gains new skills',
  ],
  whenToMention: [
    'Your baby\'s fussiness is accompanied by poor weight gain, frequent vomiting, bloody stools, or signs of pain such as arching and screaming during or after feeds',
    'You are feeling overwhelmed, depressed, or resentful toward your baby  -  these are normal feelings that deserve support, not judgment',
    'Your baby\'s fussiness has suddenly increased significantly after a period of being more settled',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby  -  call the Postpartum Support International helpline (1-800-944-4773) or go to your nearest emergency room immediately',
    'Your baby is inconsolable, has a fever, is lethargic, or is refusing to eat  -  sudden changes in a fussy baby can indicate illness',
  ],
  relatedMilestones: [
    'social-emotional-self-soothing',
    'social-emotional-regulation',
    'social-emotional-attachment',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coping With a Colicky Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Coping-with-Colic.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Understanding Your Child\'s Temperament. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/Pages/Paloma-Understanding-Temperament.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Temperament: What It Is and Why It Matters.',
      url: 'https://www.zerotothree.org/resource/temperament/',
    },
  ],
};
