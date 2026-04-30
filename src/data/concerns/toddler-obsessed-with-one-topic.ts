import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-obsessed-with-one-topic',
  title: 'Toddler Obsessed With One Topic or Object',
  category: 'behavior',
  searchTerms: ['toddler obsessed with one thing', 'toddler fixated on topic', 'toddler only talks about one thing', 'toddler intense interests', 'toddler obsessed with trains', 'toddler obsessed with dinosaurs', 'toddler focused on one toy', 'toddler restricted interests', 'toddler repetitive play', 'toddler special interest'],
  quickAnswer: 'Intense, focused interests are very common in toddlers and are usually a normal part of development. Many toddlers go through phases of being "obsessed" with trains, dinosaurs, cars, dogs, or a specific character. These intense interests help children develop expertise, vocabulary, memory skills, and a sense of mastery. They are different from the restricted, repetitive interests seen in autism, which tend to be unusual in nature (like spinning wheels or lining up objects) and interfere with social engagement. A toddler who has an intense interest but still plays imaginatively, engages socially, and can be redirected is showing typical development.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies naturally develop preferences for certain toys, sounds, or visual patterns. A baby who is captivated by a specific toy or activity is showing normal attention and interest development. At this age, "obsessive" interest is not a concern - it is how babies learn. They explore the same object repeatedly because each interaction teaches them something new. Offer a variety of toys and experiences, but do not worry if your baby has clear favorites.' },
    { ageRange: '1-3 years', context: 'Toddler "obsessions" with specific topics (vehicles, animals, characters) are extremely common and generally positive. These intense interests drive learning - a dinosaur-obsessed toddler may learn dozens of dinosaur names, develop an impressive vocabulary, and practice categorization skills. Worry less about the intensity of the interest and more about the quality of play. Can your toddler play imaginatively with their favorite topic? Do they share their interest with you (showing you dinosaurs, wanting to read dinosaur books together)? Can they be redirected to other activities? If yes, this is healthy passionate interest.' },
  ],
  whenNormal: ['Your toddler has an intense interest in a common topic (vehicles, animals, characters)', 'They use their interest for imaginative play and social sharing', 'They can be redirected to other activities even if they prefer their favorite topic', 'The interest changes or evolves over time (months)'],
  whenToMention: ['The interest is so intense that your child cannot be redirected and becomes extremely distressed when moved away from it', 'The interest is in an unusual topic or involves only one aspect of an object (like spinning wheels rather than playing with the whole car)', 'Your child plays with their interest in a very rigid, repetitive, non-imaginative way (only lining things up)', 'The intense interest is combined with other concerns about social engagement or communication'],
  whenToActNow: ['Intense fixation combined with loss of language, social skills, or eye contact', 'The obsessive behavior is accompanied by significant distress or self-harm when interrupted', 'Your child shows no interest in peers, shared play, or social interaction around their interest'],
  relatedMilestones: ['social-emotional', 'cognitive'],
  showSelfReferral: true,
  relatedConcernSlugs: ['repetitive-behaviors', 'not-playing-with-toys-correctly', 'sensory-seeking-behavior', 'toddler-not-playing-with-other-kids'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Child Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Autism Spectrum Disorder Signs.', url: 'https://www.cdc.gov/ncbddd/autism/signs.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Intense Interests in Young Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
