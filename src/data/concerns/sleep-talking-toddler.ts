import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-talking-toddler',
  title: 'My Toddler Talks in Their Sleep',
  category: 'sleep',
  searchTerms: [
    'toddler talking in sleep',
    'child sleep talking',
    'toddler mumbling in sleep',
    'is sleep talking normal in toddlers',
    'somniloquy toddler',
    'toddler says words while sleeping',
    'why does my toddler talk in their sleep',
    'child talking during sleep every night',
    'toddler babbling in sleep',
    'sleep talking 2 year old',
  ],
  quickAnswer:
    'Sleep talking (somniloquy) is very common in young children and is almost always harmless. It occurs during partial arousals between sleep stages and often reflects your toddler\'s rapidly developing language skills. Most children talk in their sleep at some point, and it is not a sign of a sleep disorder or emotional problem.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'As babies transition to toddlerhood, their language skills are exploding. It is common for early talkers to vocalize, babble, or say recognizable words during sleep. This is a sign that the brain is actively processing and consolidating new language during sleep  -  an important part of learning. These vocalizations are usually quiet and brief.',
    },
    {
      ageRange: '18-24 months',
      context:
        'With vocabulary growing rapidly at this stage, sleep talking often becomes more recognizable. Your toddler may say familiar words, short phrases, or even seem to be having a conversation. This is a normal parasomnia (a harmless sleep behavior) and does not mean your child is not getting restful sleep. It tends to occur more during periods of excitement, overtiredness, or illness.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Sleep talking is at its most common between ages 2 and 5. Your toddler may say full sentences, laugh, or even shout during sleep. The content usually reflects daytime experiences but is not necessarily meaningful  -  sleep talking occurs during partial arousals when the brain is not fully conscious. Episodes can be more frequent after big days, schedule disruptions, or when your child is fighting an illness.',
    },
    {
      ageRange: '3+ years',
      context:
        'Sleep talking remains common in preschoolers and typically decreases as children get older. About two-thirds of children talk in their sleep at some point. If sleep talking is accompanied by sleepwalking, night terrors, or significantly fragmented sleep, it may be worth discussing with your pediatrician, though each of these individually is still usually benign.',
    },
  ],
  whenNormal: [
    'Your toddler talks briefly during sleep but does not fully wake up',
    'The sleep talking does not seem to affect how rested your child is the next day',
    'Episodes are more frequent after busy or exciting days',
    'Your child has no memory of talking in their sleep',
  ],
  whenToMention: [
    'Sleep talking is accompanied by frequent sleepwalking or night terrors',
    'Your child seems excessively tired during the day despite adequate sleep hours',
    'Sleep talking is new and started after a stressful event, alongside other behavioral changes during the day',
  ],
  whenToActNow: [
    'Sleep talking is accompanied by seizure-like movements, difficulty breathing, or prolonged confusion upon waking',
    'Your child seems distressed or in pain during the episodes and is difficult to console when fully awake',
  ],
  relatedMilestones: [
    'speech-first-words',
    'speech-two-word-phrases',
    'sleep-consolidation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Parasomnias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Sleep-Terrors.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep Talking. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/parasomnias/sleep-talking',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Sleep Talking (Somniloquy). ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/diseases/12131-sleep-talking',
    },
  ],
};
