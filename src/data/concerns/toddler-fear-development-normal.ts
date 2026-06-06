import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-fear-development-normal', title: 'Normal Fears at Different Ages', category: 'behavior',
  searchTerms: ['toddler fears normal','normal childhood fears','toddler afraid of everything','age appropriate fears','toddler scared of things','common fears by age','toddler sudden fear','toddler new fear','when are childhood fears normal','developmental fears children'],
  quickAnswer: 'Fears are a normal part of cognitive development. As your child\'s brain matures, they become able to imagine dangers they could not comprehend before. This means new fears often appear alongside cognitive growth - it is a sign that your child\'s thinking is becoming more sophisticated. Most childhood fears are temporary and resolve on their own with gentle support.',
  byAge: [
    { ageRange: '6-12 months', context: 'Stranger anxiety and separation anxiety are the primary fears. Your baby fears unfamiliar faces and being away from you. These are adaptive fears that kept babies safe throughout human evolution. They are healthy attachment signs.' },
    { ageRange: '12-24 months', context: 'Common fears: loud noises (vacuums, blenders, thunderstorms), large animals, the bath drain, separation from caregivers. These fears emerge because your child now understands cause and effect but cannot yet distinguish real dangers from harmless things. Never force them to face fears.' },
    { ageRange: '2-4 years', context: 'Imagination develops, bringing imaginary fears: monsters, the dark, shadows, ghosts, nightmares. Your child cannot yet distinguish real from imaginary. Validate fears without reinforcing them: "I know the dark feels scary. You are safe. I am right here." Avoid telling them their fear is silly.' },
    { ageRange: '4-6 years', context: 'Fears become more realistic: dogs, thunderstorms, injuries, getting lost, bad people. Your child now understands that bad things can actually happen. Provide honest reassurance, teach safety skills, and avoid overexposure to news or scary media.' },
  ],
  whenNormal: ['New fears appearing alongside cognitive growth','Fears that are common for your child\'s age','Your child can be comforted and reassured','Fears do not prevent your child from most activities'],
  whenToMention: ['A specific fear is so intense it prevents participation in normal activities','Your child has many fears that are increasing rather than resolving','Fear persists unchanged for many months despite support','Your child is anxious most of the time, not just about specific things'],
  whenToActNow: ['Your child is paralyzed by fear and cannot function','Fears are accompanied by panic attacks or extreme physical symptoms'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fears and Phobias. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx' },
    { org: 'NIH', citation: 'Muris P et al. Fears, worries, and scary dreams in 4-to-12-year-old children. Child Psychiatry Hum Dev. 2000;31(2):97-111.', url: 'https://pubmed.ncbi.nlm.nih.gov/11089298/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Helping Your Child Manage Fears.', url: 'https://www.zerotothree.org/resource/fears/' },
  ],
  relatedConcernSlugs: ['toddler-phobia-vs-normal-fear','toddler-anxiety-signs-early','toddler-dark-room-fear','toddler-monster-under-bed-fear'],
};
