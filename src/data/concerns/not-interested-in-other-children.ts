import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-interested-in-other-children',
  title: 'My Toddler Isn\'t Interested in Other Children',
  category: 'behavior',
  searchTerms: [
    'toddler not interested in other kids',
    'toddler ignores other children',
    'toddler doesn\'t play with peers',
    'toddler prefers adults over kids',
    'child has no interest in other children',
    'toddler won\'t interact with kids at playground',
    'is it normal for toddler to not play with others',
    'toddler avoids other children',
    'toddler antisocial behavior',
    'when do toddlers start playing with other kids',
  ],
  quickAnswer:
    'It is completely normal for toddlers under age 2-3 to show limited interest in playing with other children. True cooperative play does not typically develop until age 3-4. Before that, children play alongside each other (parallel play), which is an important and healthy stage of social development, not a sign of a problem.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, babies and young toddlers are primarily focused on their caregivers and on exploring the physical world. They may notice other children with curiosity  -  staring, reaching out, or even imitating  -  but they do not have the social skills for interactive play. Interest in other children at this stage is bonus, not expected. What matters more is whether your child is socially engaged with you and other familiar adults.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers in this age range often begin to show interest in other children by watching them, imitating their actions, or playing alongside them with similar toys. This is called parallel play and it is the normal, healthy stage before interactive play develops. Your toddler may seem to "ignore" other kids even while absorbing a tremendous amount of social information just by being near them.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Two-year-olds gradually begin showing more direct interest in peers  -  offering toys, following another child, or engaging in simple back-and-forth games like chase. However, many healthy two-year-olds still strongly prefer adult company. If your child seems aware of other children but is not yet interacting, this is usually within the normal range. If they actively avoid or seem completely unaware of other children, especially alongside communication or social differences, it is worth monitoring.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children begin developing genuine friendships and engaging in cooperative play with peers. If your child at this age shows no interest in other children, avoids peer interactions, or consistently prefers solitary play despite regular opportunities for socialization, it is a good time to discuss this with your pediatrician. Some children are naturally more introverted, which is fine, but a complete lack of social interest in peers deserves exploration.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2 and plays alongside other children rather than with them  -  this is the expected developmental stage',
    'Your child watches other kids with interest even if they do not join in or interact directly',
    'Your child plays well with siblings or familiar children but is shy or hesitant around unfamiliar peers',
    'Your toddler has a naturally introverted or cautious temperament and takes time to warm up in social situations',
  ],
  whenToMention: [
    'Your child is over 3 and shows no interest in peers at all  -  not watching, following, imitating, or engaging, even in familiar settings',
    'Your child actively avoids other children by turning away, covering their ears, or becoming distressed when peers approach',
    'Lack of peer interest is combined with other differences such as limited eye contact, delayed speech, or repetitive behaviors',
  ],
  whenToActNow: [
    'Your child has lost social interest they previously showed  -  withdrawing from peers and familiar adults after a period of more typical engagement',
    'Complete disinterest in other children is combined with no social engagement with adults either  -  no eye contact, no shared enjoyment, and no response to name',
  ],
  relatedMilestones: [
    'social-emotional-engagement',
    'social-emotional-peer-interaction',
    'language-expressive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Three Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Making Friends: How Children Develop Social Skills.',
      url: 'https://www.zerotothree.org/resource/making-friends/',
    },
  ],
};
