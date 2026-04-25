import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-grinding-teeth-sleep',
  title: 'My Baby Grinds Teeth While Sleeping',
  category: 'sleep',
  searchTerms: [
    'baby grinding teeth in sleep',
    'baby teeth grinding while sleeping',
    'why does my baby grind their teeth',
    'bruxism in babies',
    'baby clenching jaw at night',
    'is it normal for baby to grind teeth',
    'toddler grinding teeth in sleep',
    'baby grinding teeth at night',
    'baby teeth grinding sound',
    'how to stop baby from grinding teeth',
  ],
  quickAnswer:
    'Teeth grinding (bruxism) is surprisingly common in babies and toddlers, affecting up to 30% of children. It often begins when babies first get teeth and may continue through early childhood. While the sound can be unsettling, occasional grinding is usually harmless and most children outgrow it by age 6. It may be related to teething discomfort, jaw development, or simply exploring their new teeth.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Grinding often starts when babies first get teeth, around 6-10 months. Your baby is exploring their new teeth and learning how their jaw works. The grinding may be a way of soothing sore gums or simply discovering the sensation of teeth touching. It usually happens during sleep but can also occur while awake. As long as your baby isn\'t causing damage to their teeth or seeming distressed, this is developmentally normal.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers this age often grind their teeth during sleep as their jaw and bite continue to develop. Some grinding is related to teething molars, which emerge around 13-19 months and can be quite uncomfortable. Stress, changes in routine, or illness can temporarily increase grinding. If your toddler grinds their teeth frequently and you notice wear on the teeth, jaw pain, or headaches, mention it to your pediatrician or dentist.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Teeth grinding remains common in toddlers and may be associated with sleep-disordered breathing, misaligned bite, or stress. If your toddler snores, breathes through their mouth, or has restless sleep, these could be contributing factors worth discussing with your doctor. Most toddlers who grind their teeth will stop on their own by early childhood as their adult teeth come in and their jaw fully develops.',
    },
  ],
  whenNormal: [
    'Your baby or toddler grinds their teeth occasionally during sleep',
    'Grinding started around the time new teeth were coming in',
    'Your child\'s teeth don\'t show significant wear or damage',
    'Your child doesn\'t complain of jaw pain or headaches (if old enough to communicate)',
    'Grinding happens during sleep transitions or periods of teething, illness, or routine changes',
  ],
  whenToMention: [
    'Grinding is happening every night and is very loud or prolonged',
    'You notice wear on your child\'s teeth, chipped teeth, or changes in their bite',
    'Your child complains of jaw pain, headaches, or tooth sensitivity',
    'Grinding is accompanied by snoring, mouth breathing, or restless sleep',
    'You\'re concerned about the intensity or frequency of grinding',
  ],
  whenToActNow: [
    'Your child has broken or severely damaged teeth from grinding',
    'Grinding is accompanied by severe pain, swelling, or inability to open the jaw',
    'Your child has difficulty breathing during sleep, turns blue, or has pauses in breathing',
  ],
  relatedMilestones: [
    'teething',
    'jaw-development',
    'teeth-eruption',
    'sleep-architecture',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teeth Grinding (Bruxism). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/dental/Pages/Teeth-Grinding-Bruxism.aspx',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Bruxism in Children. AAPD Reference Manual, 2020.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/bruxism-in-children/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Teeth Grinding in Children. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/teeth-grinding-bruxism',
    },
  ],
};
