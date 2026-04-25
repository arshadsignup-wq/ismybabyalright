import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rocking-back-and-forth',
  title: 'My Baby Rocks Back and Forth',
  category: 'behavior',
  searchTerms: [
    'baby rocking back and forth',
    'baby rocking on hands and knees',
    'toddler rocking back and forth',
    'baby rocking side to side',
    'is rocking back and forth autism',
    'baby rocking in crib',
    'toddler rocking while sitting',
    'baby body rocking',
    'why does my baby rock',
    'baby rocking repetitively',
  ],
  quickAnswer:
    'Rocking back and forth is a very common self-soothing behavior in babies and toddlers. Most babies rock on their hands and knees before crawling, and many children rock while sitting or standing as a way to calm themselves, especially when tired or overstimulated. In isolation, rocking is not a sign of autism or developmental concerns.',
  byAge: [
    {
      ageRange: '6-10 months',
      context:
        'Babies often begin rocking on their hands and knees around 6-8 months as they build strength for crawling. This is a developmental milestone, not a concern. You might also notice your baby rocking side to side while sitting or rocking their whole body in the crib. This rhythmic movement is soothing and helps them regulate their sensory system.',
    },
    {
      ageRange: '10-18 months',
      context:
        'Rocking may continue as a self-soothing behavior, especially at bedtime or when your baby is tired, upset, or overstimulated. Some babies rock in their cribs so vigorously that the crib moves across the floor  -  this is normal and harmless. Others rock while sitting or standing, often while listening to music or concentrating. As long as your baby is engaging socially and meeting other milestones, rocking is just a comforting habit.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Many toddlers continue to rock as a form of self-regulation. You might notice rocking when your child is anxious, excited, or trying to calm down before sleep. Some children rock while watching TV or listening to music. This is typically a phase that fades as other coping strategies develop. If rocking is your child\'s only repetitive behavior and they are otherwise socially engaged and developing on track, it is not a cause for concern.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most children outgrow frequent body rocking by preschool age. If rocking persists, increases, or is accompanied by other repetitive behaviors (hand flapping, spinning, lining up toys) and social-communication delays, it may be worth an evaluation. However, occasional rocking during stress or excitement can remain a normal self-soothing strategy.',
    },
  ],
  whenNormal: [
    'Your baby rocks on hands and knees as part of learning to crawl',
    'Rocking happens at predictable times  -  bedtime, when tired, or when self-soothing',
    'Your baby stops rocking when engaged or distracted and responds to social interaction',
    'Your child is meeting other developmental milestones in communication, play, and motor skills',
    'Rocking seems to serve a calming or organizing purpose and your child appears content',
  ],
  whenToMention: [
    'Rocking is so vigorous or frequent that your child injures themselves (head banging into the crib, etc.)',
    'Your child rocks for long periods and seems difficult to engage or "tuned out" during rocking',
    'Rocking is accompanied by delays in language, social skills, or eye contact',
    'You notice multiple repetitive behaviors (rocking, spinning, hand flapping) and are concerned about autism',
  ],
  whenToActNow: [
    'Your child is injuring themselves through rocking (hitting their head hard enough to cause bruising or bleeding)',
    'Rocking is part of a sudden change in behavior or loss of previously acquired skills',
    'Your child rocks excessively and does not respond to their name, make eye contact, or engage in social play',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'social-emotional-regulation',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Repetitive Behaviors in Infants and Toddlers.',
      url: 'https://www.zerotothree.org/resource/repetitive-behaviors/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Milestones and Signs of Autism.',
      url: 'https://www.cdc.gov/ncbddd/autism/signs.html',
    },
  ],
};
