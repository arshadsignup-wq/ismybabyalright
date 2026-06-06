import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-worry-excessive', title: 'Toddler or Preschooler Worries Excessively', category: 'behavior',
  searchTerms: ['toddler worries too much','preschooler excessive worry','toddler anxious worrying','child worries about everything','toddler catastrophizing','toddler what if questions','preschooler constant worry','toddler fears bad things happening','toddler worry wont stop','excessive worry young child'],
  quickAnswer: 'Some worry is healthy and normal, but excessive worry that persists most days and interferes with your child\'s enjoyment of life may be a sign of generalized anxiety. Young children who worry excessively often ask repetitive "what if" questions, seek constant reassurance, anticipate worst-case scenarios, and have difficulty enjoying activities because they are worried about what might go wrong.',
  byAge: [
    { ageRange: '2-3 years', context: 'Mild worry is normal as imagination develops. Your child may ask about safety repeatedly. Excessive worry at this age looks like: unable to be reassured about anything, extreme distress about routine activities, or physical symptoms of anxiety (stomachaches, sleep problems) without medical cause.' },
    { ageRange: '3-4 years', context: 'Children develop more capacity for "what if" thinking, which can fuel worry. Some children ask the same worried questions over and over despite reassurance. If you find yourself reassuring your child about the same fears daily without any improvement, this may be more than normal worry.' },
    { ageRange: '4-5 years', context: 'Excessive worry becomes more apparent: your child may worry about robbers, natural disasters, parents dying, getting sick, or making mistakes. They may resist trying new things, have difficulty sleeping, or need to know the plan for every detail of the day.' },
    { ageRange: '5-7 years', context: 'Generalized anxiety becomes more clearly diagnosable. If your child worries about multiple topics most days, has physical tension, difficulty sleeping, and avoids activities due to worry, early intervention through therapy can be very helpful and effective.' },
  ],
  whenNormal: ['Some worry about new situations or changes','Worry that can be soothed with reassurance','Your child still engages in and enjoys activities despite some worry','Worry about specific, age-appropriate things that passes'],
  whenToMention: ['Worry is present most days and your child cannot be reassured','Multiple worry topics that shift but worry is always present','Physical symptoms like stomachaches, headaches, or sleep problems','Worry prevents your child from enjoying activities'],
  whenToActNow: ['Your child expresses hopelessness or despair','Worry is so severe your child cannot function in daily activities','Your child is having panic attacks'],
  relatedMilestones: [], showSelfReferral: true,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Anxiety Disorders. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Anxiety-Disorders.aspx' },
    { org: 'NIH', citation: 'Egger HL, Angold A. Common emotional and behavioral disorders in preschool children. J Child Psychol Psychiatry. 2006;47(3-4):313-337.', url: 'https://pubmed.ncbi.nlm.nih.gov/16492262/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Children\'s Mental Health: Anxiety and Depression.', url: 'https://www.cdc.gov/childrensmentalhealth/depression.html' },
  ],
  relatedConcernSlugs: ['toddler-anxiety-signs-early','toddler-fear-development-normal','toddler-ocd-like-behaviors','toddler-phobia-vs-normal-fear'],
};
