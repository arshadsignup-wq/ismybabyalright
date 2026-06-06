import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-anxiety-signs-early', title: 'Early Signs of Anxiety in Toddlers and Preschoolers', category: 'behavior',
  searchTerms: ['toddler anxiety signs','anxiety in toddlers','toddler anxious behavior','preschooler anxiety symptoms','early signs anxiety child','toddler worried all the time','anxious toddler','toddler anxiety red flags','does my toddler have anxiety','childhood anxiety early signs'],
  quickAnswer: 'Anxiety disorders can begin in early childhood, though distinguishing clinical anxiety from normal fears and temperamental caution can be tricky in young children. About 7% of children ages 3-17 have a diagnosed anxiety disorder. Early signs include persistent worry, avoidance of age-appropriate activities, physical complaints with no medical cause, difficulty separating, and sleep problems. Early intervention is highly effective.',
  byAge: [
    { ageRange: '12-24 months', context: 'True anxiety disorders are very difficult to diagnose at this age because intense fears and separation distress are developmentally normal. Watch for: extreme and persistent distress in any new situation, inability to be comforted, and complete avoidance of things most children this age tolerate.' },
    { ageRange: '2-3 years', context: 'Potential early signs: your child is fearful of many situations most peers handle, has frequent stomachaches or headaches with no medical cause, cannot tolerate any change in routine, asks excessive "what if" questions, or needs constant reassurance about safety.' },
    { ageRange: '3-4 years', context: 'Anxiety becomes more recognizable: persistent worry about specific things, difficulty falling asleep due to worry, avoidance of activities they used to enjoy, frequent crying or distress in anticipation of events, or physical tension like nail biting or hair twisting.' },
    { ageRange: '4-5 years', context: 'At this age, children can sometimes verbalize their worries. Signs to watch: "What if" thinking, catastrophizing ("What if the house catches fire?"), perfectionism, difficulty making decisions due to fear of wrong choices, and resistance to trying new things due to worry about failure.' },
  ],
  whenNormal: ['Some fear and worry is normal and healthy','Your child worries about specific things but can be reassured','Fears are age-appropriate and do not prevent most activities','Your child has periods of worry but also periods of happy, carefree play'],
  whenToMention: ['Worry or fear is persistent and present most days','Your child avoids age-appropriate activities due to anxiety','Physical symptoms like stomachaches or headaches have no medical explanation','Your child\'s quality of life is affected by worry'],
  whenToActNow: ['Your child is unable to attend school or care due to anxiety','Anxiety causes panic attacks with difficulty breathing or feeling of dying','Your child expresses hopelessness or desire to not exist'],
  relatedMilestones: [], showSelfReferral: true,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Anxiety Disorders in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Anxiety-Disorders.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Anxiety and Depression in Children.', url: 'https://www.cdc.gov/childrensmentalhealth/depression.html' },
    { org: 'NIH', citation: 'Bufferd SJ et al. A large-scale study of temperament and anxiety disorders in early childhood. J Am Acad Child Adolesc Psychiatry. 2014;53(1):97-107.', url: 'https://pubmed.ncbi.nlm.nih.gov/24342389/' },
  ],
  relatedConcernSlugs: ['toddler-worry-excessive','toddler-fear-development-normal','toddler-phobia-vs-normal-fear','toddler-shyness-vs-social-anxiety'],
};
