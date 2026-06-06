import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-anxiety-at-night', title: 'Toddler Nighttime Anxiety', category: 'behavior',
  searchTerms: ['toddler nighttime anxiety','toddler anxious at night','child nervous at bedtime','toddler worried at night','toddler separation anxiety bedtime','toddler anxiety sleep','night anxiety toddler','bedtime anxiety child','toddler scared at night cant sleep','toddler nighttime worries'],
  quickAnswer: 'Nighttime anxiety is common in toddlers because darkness, quiet, and being alone amplify worries. During the day, your child is distracted, but at bedtime, anxious thoughts come forward. Consistent routines, validation, coping strategies, and gradual independence-building help most children. Severe or persistent anxiety may benefit from professional support.',
  byAge: [
    { ageRange: '18 months-2.5 years', context: 'Nighttime anxiety at this age is usually separation-based - your child worries about being away from you. They cannot yet articulate their fear. A transitional object, brief check-ins, and consistent presence help build security.' },
    { ageRange: '2.5-3.5 years', context: 'Imagination-based anxiety emerges. Your child may worry about monsters, shadows, or vague "scary things." Create a calming bedtime ritual, use empowerment strategies, and validate without reinforcing fears.' },
    { ageRange: '3.5-5 years', context: 'Anxieties may become more specific and realistic - fear of something bad happening to parents, storms, or being alone. Talk through concerns during the day. Teach simple coping skills like deep breathing or thinking of happy places. A worry box where your child puts written worries before bed can help externalize anxiety.' },
    { ageRange: '5+ years', context: 'If nighttime anxiety persists or intensifies, it may be part of a broader anxiety pattern. Cognitive behavioral strategies are effective for this age. If anxiety significantly impairs sleep and daily functioning, consider consulting a child psychologist.' },
  ],
  whenNormal: ['Mild nighttime anxiety in the 2-4 age range that responds to comfort','Anxiety peaks during stressful transitions and then improves','Your child can eventually fall asleep with reassurance','Anxiety does not significantly affect daytime functioning'],
  whenToMention: ['Anxiety is severe enough to prevent sleep most nights','Nighttime anxiety is part of a broader pattern of daytime anxiety','Your child has physical symptoms of anxiety like stomachaches or headaches at bedtime','You feel unable to help your child manage their anxiety'],
  whenToActNow: ['Your child has panic attacks with hyperventilation or vomiting','Anxiety content suggests exposure to traumatic experiences'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Anxiety in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Anxiety-Disorders.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Managing Anxiety in Young Children.', url: 'https://www.zerotothree.org/resource/common-toddler-fears/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Children\'s Mental Health: Anxiety.', url: 'https://www.cdc.gov/childrensmentalhealth/anxiety.html' },
  ],
  relatedConcernSlugs: ['toddler-bedtime-fears-new','separation-anxiety-bedtime','toddler-night-time-fears','toddler-anxiety-signs-early'],
};
