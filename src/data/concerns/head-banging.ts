import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'head-banging',
  title: 'Baby or Toddler Head Banging',
  category: 'behavior',
  searchTerms: [
    'baby banging head on crib',
    'toddler banging head on floor',
    'baby hitting head on purpose',
    'why does my baby bang their head',
    'toddler head banging before sleep',
    'baby head banging autism',
    'toddler hits head when frustrated',
    'baby rocks and bangs head',
    'is head banging normal in babies',
    'toddler banging head on wall',
  ],
  quickAnswer:
    'Head banging is a surprisingly common self-soothing behavior in babies and toddlers, affecting up to 20% of healthy children. Most children who bang their heads are developing normally and will outgrow it by age 3-4. It typically happens at bedtime or during frustration and is rarely a sign of a serious problem.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Rhythmic movements like head banging often begin around 6-9 months as babies discover repetitive motion. At this age, it is almost always a self-soothing or exploratory behavior. Babies may rock on hands and knees or gently bang their head against the crib mattress, which can feel alarming but is a normal part of sensory development.',
    },
    {
      ageRange: '9-18 months',
      context:
        'This is the peak age for head banging to start. Many babies bang their heads rhythmically at bedtime to self-soothe to sleep, similar to how some babies sway or hum. It can also happen during frustration as babies lack the language to express big emotions. The behavior is more common in boys and typically occurs in predictable, rhythmic patterns.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Toddlers may head bang during tantrums or when frustrated, overwhelmed, or overtired. This is their immature way of managing intense feelings. Most toddlers will not hurt themselves seriously because they regulate the force naturally. As language and emotional regulation skills develop, head banging usually diminishes significantly.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most children outgrow head banging by age 3-4. If the behavior persists beyond age 3, becomes more intense or frequent, or is accompanied by other developmental differences, it is worth a conversation with your pediatrician to rule out sensory processing concerns or other contributing factors.',
    },
  ],
  whenNormal: [
    'Your baby rhythmically bangs their head at bedtime or naptime and seems to be self-soothing to sleep',
    'The head banging happens in short episodes (under 15 minutes) and your child seems otherwise happy and developing well',
    'Your toddler bangs their head briefly during frustration or tantrums but calms down quickly',
    'Your child is meeting other developmental milestones on time, including language, social, and motor skills',
    'The behavior started between 6-18 months and follows a rhythmic, predictable pattern',
  ],
  whenToMention: [
    'Head banging episodes last longer than 15-20 minutes or happen many times throughout the day',
    'Your child seems to be in pain during or after head banging rather than self-soothing',
    'Head banging is accompanied by limited eye contact, delayed speech, or not responding to their name',
    'The behavior is getting worse instead of better after age 2, or your child is injuring themselves',
  ],
  whenToActNow: [
    'Your child has caused a visible injury from head banging, such as bruising, swelling, or a cut that needs attention',
    'Your child suddenly starts head banging after a head injury, fall, or illness, which could indicate pain such as an ear infection or headache',
    'Head banging is accompanied by a loss of previously acquired skills at any age',
  ],
  relatedMilestones: [
    'social-emotional-self-soothing',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Head Banging and Body Rocking. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Head-Banging-and-Body-Rocking.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Repetitive Behaviors in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Repetitive-Behaviors.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Learn the Signs. Act Early: Milestone Checklists.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
