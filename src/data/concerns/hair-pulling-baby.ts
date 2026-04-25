import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hair-pulling-baby',
  title: 'My Baby Pulls Their Own Hair',
  category: 'behavior',
  searchTerms: [
    'baby pulling own hair',
    'toddler pulling hair out',
    'baby pulling hair when tired',
    'baby trichotillomania',
    'why does my baby pull their hair',
    'baby pulling hair while nursing',
    'toddler twirling and pulling hair',
    'baby pulling hair until bald spot',
    'is hair pulling normal in babies',
    'how to stop baby from pulling hair',
  ],
  quickAnswer:
    'Hair pulling in babies and toddlers is usually a self-soothing behavior, similar to thumb-sucking or using a pacifier. Most children pull their hair when tired, nursing, or falling asleep, and it is rarely a sign of a problem. The behavior typically peaks between ages 1-2 and fades as children develop other coping strategies.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies often discover their hair around this age and may pull or twirl it as a form of sensory exploration or self-soothing. Hair pulling commonly happens during feeding (especially breastfeeding), when falling asleep, or when your baby is tired or overstimulated. Most babies are gentle, but some pull hard enough to remove strands or create small bald patches.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Hair pulling often intensifies during this period as your toddler relies on it more deliberately for comfort. You might notice consistent patterns  -  pulling only at bedtime, only when holding a lovey, or only on one side of the head. The behavior is almost always self-soothing rather than self-harming. Creating noticeable bald spots is not uncommon and the hair will regrow once the behavior stops.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Many children continue to pull or twirl their hair as a comfort habit, especially during transitions, stress, or when tired. As language and emotional regulation improve, the behavior often decreases. If your child is pulling hair very frequently, creating multiple bald spots, or seems to be doing it in response to anxiety, gently redirecting to another soothing behavior (like a soft blanket or stuffed animal) can help.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most children naturally outgrow hair pulling by preschool age. If the behavior persists past age 3-4, becomes more intense, or your child seems unable to stop even when they want to, it may be worth discussing with your pediatrician. True trichotillomania (compulsive hair pulling disorder) is rare before school age but can develop in older children.',
    },
  ],
  whenNormal: [
    'Your baby pulls or twirls their hair in specific contexts  -  when tired, nursing, or self-soothing',
    'The behavior is gentle or moderate; your child is not pulling so hard that they cry out in pain',
    'Your child has one or two small bald patches but seems unbothered by them',
    'Hair pulling is part of a bedtime or feeding routine and appears to be comforting',
    'The behavior comes and goes in phases rather than being constant all day',
  ],
  whenToMention: [
    'Your child has multiple or large bald patches from pulling, or the hair loss is significant',
    'Hair pulling seems to be triggered by anxiety, frustration, or stress rather than just sleepiness or comfort',
    'The behavior is persisting or intensifying past age 3-4',
    'Your child seems distressed by the behavior but cannot stop, or the pulling appears compulsive',
  ],
  whenToActNow: [
    'Your child is pulling hair so hard that they are hurting themselves (crying, bleeding, or creating sores on the scalp)',
    'Hair pulling is accompanied by other self-harming behaviors like head banging, biting, or scratching',
    'You notice a sudden and dramatic increase in hair pulling that coincides with other behavioral changes or developmental regression',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Soothing Behaviors in Young Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Child.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Helping Young Children Manage Big Feelings.',
      url: 'https://www.zerotothree.org/resource/helping-young-children-manage-big-feelings/',
    },
    {
      org: 'AACAP',
      citation:
        'American Academy of Child and Adolescent Psychiatry. Hair Pulling Disorder (Trichotillomania). Facts for Families.',
      url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Hair-Pulling-Disorder-Trichotillomania-095.aspx',
    },
  ],
};
