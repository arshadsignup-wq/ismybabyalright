import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-sleep-talking-normal',
  title: 'My Toddler Talks in Their Sleep',
  category: 'sleep',
  searchTerms: [
    'toddler talking in sleep',
    'toddler sleep talking normal',
    'toddler mumbling in sleep',
    'toddler says words while sleeping',
    'toddler babbling during sleep',
    'sleep talking toddler cause',
    'is sleep talking normal toddler',
    'toddler crying and talking in sleep',
    'somniloquy toddler',
    'toddler vocalizing during sleep',
  ],
  quickAnswer:
    'Sleep talking (somniloquy) is very common in children and is almost always harmless. Studies suggest that about half of all children talk in their sleep at some point. It can range from mumbling and gibberish to clear words or even short sentences. Sleep talking typically occurs during transitions between sleep stages and is not a sign of a sleep disorder, emotional distress, or neurological problem. Your toddler will not remember talking in their sleep.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies make many sounds during sleep including grunting, cooing, whimpering, and brief cries. This is normal and related to active (REM) sleep, which makes up a large proportion of infant sleep. These vocalizations are not true sleep talking but are part of normal infant sleep physiology. You do not need to respond to every sound — many babies settle themselves back into deeper sleep within a few moments if left undisturbed.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As your toddler\'s language develops, you may start to hear recognizable words during sleep. This can coincide with language explosions — some parents notice more sleep talking when their toddler is learning many new words. Sleep talking at this age is usually brief and occurs during the first third of the night during non-REM sleep transitions. It does not disrupt sleep quality and your toddler will not remember it. There is no need to wake them or respond.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Sleep talking may become more elaborate as vocabulary grows. Your toddler might say full sentences, appear to have conversations, or even laugh during sleep. This can be amusing or unsettling for parents but is benign. Sleep talking tends to run in families and can increase during periods of stress, illness, fever, or when your child is overtired. Ensuring adequate sleep and a consistent bedtime routine can reduce the frequency. If sleep talking is accompanied by sleepwalking, night terrors, or disruptive behaviors, mention this to your pediatrician.',
    },
  ],
  whenNormal: [
    'Your toddler mumbles, says words, or even speaks short sentences during sleep and does not remember in the morning',
    'Sleep talking happens occasionally, perhaps a few times a week, and does not wake your child',
    'Sleep talking increases when your toddler is overtired, sick, or going through a developmental leap',
    'Other family members also talk in their sleep — there is a strong genetic component',
  ],
  whenToMention: [
    'Sleep talking is accompanied by frequent sleepwalking, night terrors, or other disruptive sleep behaviors',
    'Your toddler seems distressed during sleep talking episodes and is difficult to console',
    'Sleep talking is so loud or frequent that it consistently disrupts other family members\' sleep',
  ],
  whenToActNow: [
    'Your toddler has episodes that seem like seizures during sleep — rhythmic jerking, stiffening, or eyes rolling',
    'Your toddler is difficult to wake, confused, or has other neurological changes after nighttime episodes',
    'Your toddler\'s nighttime episodes began after a head injury',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'language-expressive',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-sleep-walking-safety',
    'night-terrors',
    'baby-screaming-in-sleep',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Parasomnias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Parasomnias.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleep Talking. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430924/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep Talking.',
      url: 'https://www.sleepfoundation.org/parasomnias/sleep-talking',
    },
  ],
};
