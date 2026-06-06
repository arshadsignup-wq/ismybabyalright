import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-dark-room-fear',
  title: 'Toddler Afraid of the Dark',
  category: 'sleep',
  searchTerms: ['toddler afraid of the dark', 'child scared of dark room', 'toddler needs light to sleep', 'toddler fear of darkness', 'night light for toddler', 'toddler won\'t sleep in dark', 'child dark room anxiety', 'toddler suddenly scared of dark', 'is being afraid of dark normal toddler', 'toddler darkness fear bedtime'],
  quickAnswer: 'Fear of the dark is one of the most common childhood fears, typically developing between ages 2 and 4 when imagination blossoms. It is a normal part of cognitive development - your child\'s brain is now advanced enough to imagine things they cannot see. A dim nightlight, reassurance, and gentle exposure help most children work through this fear gradually.',
  byAge: [
    { ageRange: '18 months-2 years', context: 'True fear of the dark is uncommon at this age since the imagination has not fully developed yet. If your toddler resists a dark room, it may be more about separation or general bedtime resistance. A very dim nightlight (amber or red tones are less sleep-disrupting than blue or white) is a simple solution that does not interfere with melatonin production.' },
    { ageRange: '2-3 years', context: 'This is when dark fears typically emerge as your child\'s imagination becomes more active. They can now imagine things that might be lurking in the shadows. Validate their fear without reinforcing it: "I understand the dark can feel scary. You are safe in your room." Provide a nightlight and avoid dismissing their feelings or saying things like "don\'t be silly." Read books about the dark together during the day.' },
    { ageRange: '3-4 years', context: 'Dark fears may intensify as imagination continues to develop. Your child might describe specific scary things they see or imagine. "Monster spray" (water in a spray bottle), a flashlight by the bed, or a special "brave stuffed animal" can give your child a sense of control. Avoid scary media, especially close to bedtime. Gradual exposure during the day (playing in dim rooms, flashlight games) can help build comfort.' },
    { ageRange: '4-5 years', context: 'Most children begin to outgrow intense dark fears around age 4-5 as they develop better understanding of reality vs. imagination. If the fear persists, continue accommodating with a nightlight and comfort strategies. Praise brave behavior without pressuring. The fear typically resolves naturally, though some sensitivity to darkness can persist into school age.' },
  ],
  whenNormal: ['Your child develops a fear of the dark between ages 2-4 - this is one of the most common childhood fears', 'A nightlight resolves most of the anxiety and your child can sleep', 'The fear comes and goes, often worsening after scary experiences or during stressful times', 'Your child is afraid of the dark at night but comfortable in dim rooms during the day'],
  whenToMention: ['The dark fear is so intense that your child cannot fall asleep even with a nightlight and significant comfort', 'Fear of the dark is expanding to other situations and limiting daily activities', 'The fear is worsening rather than improving over several months'],
  whenToActNow: ['Your child has panic attacks related to darkness with physical symptoms', 'Dark fear is part of a broader pattern of extreme anxiety affecting functioning'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fears and Phobias. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development: Preschoolers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Helping Your Child Manage Fears.', url: 'https://www.zerotothree.org/resource/common-toddler-fears/' },
  ],
  relatedConcernSlugs: ['toddler-afraid-of-dark', 'toddler-night-time-fears', 'toddler-monster-under-bed-fear', 'toddler-door-closing-fear'],
};
