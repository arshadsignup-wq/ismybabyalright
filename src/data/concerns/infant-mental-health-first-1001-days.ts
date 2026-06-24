import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-mental-health-first-1001-days',
  title: 'Infant Mental Health - The First 1001 Days',
  category: 'behavior',
  searchTerms: [
    'infant mental health',
    'first 1000 days brain development',
    'baby emotional development',
    'baby mental health first three years',
    'attachment and brain development baby',
    'early childhood emotional wellbeing',
    'adverse childhood experiences babies',
    'baby stress toxic stress',
    'serve and return interaction baby',
    'infant emotional regulation',
    'early brain architecture',
  ],
  quickAnswer:
    'The first 1,001 days, from conception through age 2, represent the most rapid period of brain development in a person\'s life, with the brain forming over 1 million neural connections per second. During this window, the quality of a baby\'s relationships and experiences literally shapes the architecture of the developing brain. Responsive caregiving, where parents consistently notice and respond to a baby\'s cues, builds secure attachment and provides the foundation for emotional regulation, resilience, and mental health throughout life. This does not require perfection; research shows that being "good enough" (responsive about 50% of the time) supports healthy development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'During the "fourth trimester," babies are adapting to life outside the womb and are entirely dependent on caregivers for regulation. They cannot self-soothe and need consistent, responsive care. "Serve and return" interactions, where the baby coos or cries (the "serve") and the caregiver responds with eye contact, touch, or words (the "return"), begin building neural pathways for communication and emotional regulation. You cannot spoil a baby at this age. Holding, comforting, feeding on demand, and responding to cries are exactly what healthy brain development requires.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies develop stronger attachment patterns during this period, showing preference for familiar caregivers, stranger anxiety (around 6-8 months), and beginning to use social referencing (looking to you for cues about whether something is safe). These are healthy signs of secure attachment, not problems to fix. Continuing responsive care, narrating your daily activities, playing face-to-face games (peekaboo), and allowing your baby to explore while providing a safe base all support emotional development. Prolonged, unmanaged stress (not occasional frustration or crying) is what poses risks to developing brains.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers begin testing boundaries, experiencing big emotions they cannot yet regulate, and developing a sense of self. Tantrums are a normal expression of a brain that can feel powerful emotions but lacks the neural circuitry to manage them (the prefrontal cortex is not fully developed until the mid-20s). Co-regulation, where you stay calm and help your toddler through their emotions rather than punishing the emotions, builds the neural pathways for future self-regulation. Naming emotions ("You are frustrated because the block fell down") supports emotional literacy.',
    },
  ],
  whenNormal: [
    'Your baby shows a range of emotions and can be comforted by familiar caregivers.',
    'Your baby seeks you out for comfort and shows some distress when separated from you (after 6 months).',
    'Your toddler has tantrums and big emotions but can eventually be calmed with your help.',
    'You have moments of frustration or disconnection as a parent, but overall you respond to your baby\'s needs most of the time.',
  ],
  whenToMention: [
    'Your baby seems persistently withdrawn, does not make eye contact, or does not respond to your attempts at interaction.',
    'Your baby rarely cries, shows emotion, or seeks comfort, as this can indicate shutdown rather than an "easy" temperament.',
    'You are experiencing postpartum depression, anxiety, or trauma that is making it difficult to connect with your baby.',
    'Your family has experienced significant stress (domestic violence, housing instability, substance use) and you want support for your baby\'s emotional wellbeing.',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby.',
    'Your baby has experienced abuse, neglect, or a traumatic event and is showing signs of distress such as regression, persistent crying, or sleep and feeding disruption.',
    'You feel unable to care for or connect with your baby and need immediate support.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'attachment-concerns',
    'infant-screen-time-brain-development',
    'phone-addiction-parent-baby-bonding',
    'nicu-baby-bonding-difficulty-parent',
  ],
  sources: [
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Infant-Early Childhood Mental Health.',
      url: 'https://www.zerotothree.org/espanol/infant-and-early-childhood-mental-health/',
    },
    {
      org: 'Harvard',
      citation:
        'Center on the Developing Child, Harvard University. Serve and Return: Key Concepts.',
      url: 'https://developingchild.harvard.edu/science/key-concepts/serve-and-return/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Mediators and Adverse Effects of Child Poverty in the United States. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/137/4/e20160340/81564/Poverty-and-Child-Health-in-the-United-States',
    },
  ],
};
