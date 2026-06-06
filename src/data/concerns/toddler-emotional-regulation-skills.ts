import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-emotional-regulation-skills', title: 'Teaching Emotional Regulation to Toddlers', category: 'behavior',
  searchTerms: ['toddler emotional regulation','teaching toddler emotions','toddler cant control emotions','emotional regulation skills toddler','toddler overwhelmed by feelings','toddler emotional development','helping toddler manage feelings','toddler emotional outbursts','toddler emotional dysregulation','toddler calming techniques'],
  quickAnswer: 'Emotional regulation is the ability to manage and respond to emotions appropriately. Toddlers are just beginning to develop this skill, and it is not fully mature until the mid-20s. Your child is not choosing to be out of control - the brain regions responsible for regulation are literally still under construction. You are your child\'s external regulator until they develop internal skills.',
  byAge: [
    { ageRange: '12-18 months', context: 'Babies rely entirely on you to regulate their emotions. When they are upset, your calm presence and soothing voice teach their nervous system what regulation feels like. This is called co-regulation and is the foundation for all future emotional regulation.' },
    { ageRange: '18-30 months', context: 'Toddlers begin to show early regulation strategies like looking away from something upsetting or seeking comfort from a caregiver. You can start naming emotions: "You are feeling frustrated because the block fell down." This builds emotional vocabulary.' },
    { ageRange: '2.5-4 years', context: 'Children can start learning simple coping strategies: taking deep breaths, counting to three, using words to express feelings. They still need significant adult support. Create a calm-down corner with soft items, books about feelings, and sensory tools.' },
    { ageRange: '4-5 years', context: 'Children become more capable of using strategies independently but still struggle during intense emotions. They can identify feelings in themselves and others. Practice regulation skills during calm moments so they are available during stressful ones.' },
  ],
  whenNormal: ['Your toddler has big emotional reactions - this is developmentally expected','Your child needs your help to calm down','Emotional regulation improves gradually over years, not weeks','Some days are worse than others depending on tiredness and stress'],
  whenToMention: ['Your child seems stuck in emotional distress for very long periods','Emotional outbursts are becoming more frequent and intense with age rather than improving','Your child shows no interest in comfort during distress','Emotional reactions seem extreme compared to peers'],
  whenToActNow: ['Your child hurts themselves during emotional episodes','You are struggling to remain calm and need support for yourself'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Calkins SD, Hill A. Caregiver influences on emerging emotion regulation. In: Gross JJ, ed. Handbook of Emotion Regulation. Guilford Press; 2007.', url: 'https://pubmed.ncbi.nlm.nih.gov/21895361/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Self-Regulation in Young Children.', url: 'https://www.zerotothree.org/resource/developing-self-regulation/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Emotional Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Emotional-Development-2-Year-Olds.aspx' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-big-feelings-expression','toddler-self-regulation-timeline','toddler-emotional-intelligence-building'],
};
