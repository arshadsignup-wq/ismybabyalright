import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-no-cry-sleep-solution',
  title: 'No-Cry Sleep Solutions for My Baby',
  category: 'sleep',
  searchTerms: [
    'no cry sleep solution baby',
    'gentle sleep training methods',
    'baby sleep training without crying',
    'sleep training alternatives to CIO',
    'gentle baby sleep help',
    'no cry sleep method',
    'baby sleep without cry it out',
    'gradual sleep training baby',
    'attachment parenting sleep training',
    'baby sleep help gentle approach',
  ],
  quickAnswer:
    'No-cry or gentle sleep solutions focus on gradually helping your baby learn to fall asleep independently without extended crying. Methods include the fading (chair) method, pick-up-put-down, the Pantley pull-off, and gradual retreat. These approaches typically take longer than cry-it-out methods (2-4 weeks vs. 3-7 days) but are preferred by parents uncomfortable with hearing their baby cry. Research shows that both gentle and more structured approaches are safe and effective when age-appropriate.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Sleep training of any kind is not recommended before 4 months. During this period, focus on establishing healthy sleep foundations: consistent bedtime routines, appropriate sleep environments (dark, cool, white noise), and learning to recognize drowsy cues. You can begin introducing the crib for some sleep periods while continuing to use soothing techniques like rocking, feeding, and swaddling. The goal at this age is not independent sleep but building positive sleep associations. Respond promptly to your baby\'s cries — you cannot spoil a baby under 4 months.',
    },
    {
      ageRange: '4-8 months',
      context:
        'This is an appropriate age to begin gentle sleep approaches. The fading method involves gradually reducing your involvement at bedtime over days to weeks — for example, moving from rocking to sleep to rocking until drowsy to patting in the crib to sitting by the crib to leaving the room. The pick-up-put-down method involves placing your baby in the crib awake, picking them up if they cry, calming them, and putting them back down, repeating as needed. The Pantley pull-off (from "The No-Cry Sleep Solution") involves gently breaking the feed-to-sleep association by removing the breast or bottle before your baby is fully asleep. These methods require patience and consistency.',
    },
    {
      ageRange: '8-36 months',
      context:
        'Older babies and toddlers may have more entrenched sleep associations and can protest changes more vigorously. The gradual retreat (chair method) works well: sit beside the crib until your child falls asleep, then move the chair farther away every few nights until you are out of the room. For toddlers in beds, the "silent return" method involves calmly and consistently returning them to bed each time they get up, without engaging in conversation or play. Some fussing or protesting is normal with any method — the difference with gentle approaches is that a parent remains present to offer comfort. Consistency is the most important factor for success.',
    },
  ],
  whenNormal: [
    'Your baby fusses or protests mildly during the transition to a new sleep approach but calms with your presence and comforting.',
    'Progress with gentle methods takes 2-4 weeks — this is normal and expected, as these approaches are more gradual.',
    'Your baby has some regression during illness, travel, or developmental leaps but returns to baseline after the disruption passes.',
  ],
  whenToMention: [
    'You have tried gentle sleep approaches consistently for 3-4 weeks without any improvement.',
    'Your baby\'s sleep difficulties are affecting your mental health and daily functioning.',
    'You are unsure which approach is appropriate for your baby\'s age and temperament.',
  ],
  whenToActNow: [
    'You or your partner are so sleep deprived that you are at risk of falling asleep while holding your baby or while your baby is in an unsafe sleep position — this is a safety concern. Seek help immediately.',
    'Your baby\'s sleep issues are accompanied by breathing problems, frequent gasping, or other medical symptoms — see your pediatrician to rule out medical causes.',
    'You are experiencing thoughts of harming yourself or your baby due to exhaustion — contact the Postpartum Support International helpline (1-800-944-4773) or go to your nearest emergency room.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-pick-up-put-down-method', 'baby-needs-motion-to-sleep-swing', 'baby-only-sleeps-being-held', 'baby-nap-refusal'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Getting Your Baby to Sleep',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Behavioral Interventions for Infant Sleep Problems: A Randomized Controlled Trial',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27707587/',
    },
    {
      org: 'Sleep Foundation',
      citation:
        'National Sleep Foundation — Gentle Sleep Training Methods',
      url: 'https://www.sleepfoundation.org/baby-sleep/sleep-training',
    },
  ],
};
