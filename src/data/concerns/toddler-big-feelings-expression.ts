import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-big-feelings-expression', title: 'Toddler Has Big Feelings and Intense Emotions', category: 'behavior',
  searchTerms: ['toddler big feelings','toddler intense emotions','toddler very emotional','toddler dramatic reactions','toddler cries about everything','toddler overreacts','toddler emotionally intense','spirited toddler emotions','toddler extreme reactions','toddler highly sensitive emotional'],
  quickAnswer: 'Some children experience emotions more intensely than others. This is a temperament trait, not a behavior problem. Children described as "spirited," "intense," or "highly sensitive" feel everything more deeply - joy, frustration, sadness, excitement. While this can be exhausting for parents, emotional intensity is not something to fix. It is something to guide and channel.',
  byAge: [
    { ageRange: '12-24 months', context: 'All toddlers have big feelings relative to their size and coping skills. At this age, everything is new and overwhelming. Intense reactions to seemingly small events are normal because your toddler has no frame of reference and limited ability to cope.' },
    { ageRange: '2-3 years', context: 'Emotional intensity peaks as your child becomes more aware of the world but still lacks regulation tools. Some children are naturally more intense than others. Validate feelings while setting limits on behavior: "It is okay to be angry. It is not okay to throw things."' },
    { ageRange: '3-4 years', context: 'You may notice your child feels things more deeply than peers. This is often a temperament trait. Help them build a vocabulary for emotions and teach that all feelings are okay. Books about feelings, emotion charts, and calm-down strategies can help.' },
    { ageRange: '4-5 years', context: 'Emotionally intense children benefit from extra support in transitions, predictable routines, and advance preparation for changes. Their intensity can be a strength - they also feel joy, love, and excitement more deeply. Help them see their sensitivity as a gift, not a flaw.' },
  ],
  whenNormal: ['Your child experiences strong positive emotions too, not just negative ones','Your child can be comforted and recovers from emotional episodes','Intensity is consistent with your child\'s temperament since birth','Your child functions well between emotional episodes'],
  whenToMention: ['Emotional intensity is interfering with friendships and daily functioning','Your child seems unable to experience positive emotions','Intensity is increasing rather than gradually becoming more manageable','Your child cannot recover from emotional episodes without extreme intervention'],
  whenToActNow: ['Your child expresses desire to hurt themselves','Emotional episodes include prolonged breath-holding or loss of consciousness'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temperament. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/Pages/How-to-Understand-Your-Childs-Temperament.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Temperament: Individual Differences.', url: 'https://www.zerotothree.org/resource/temperament-individual-differences/' },
    { org: 'NIH', citation: 'Rothbart MK, Bates JE. Temperament. In: Handbook of Child Psychology. 2006.', url: 'https://pubmed.ncbi.nlm.nih.gov/28610794/' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-emotional-regulation-skills','toddler-anger-management-skills','toddler-frustration-tolerance-low'],
};
