import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-ocd-like-behaviors', title: 'OCD-Like Behaviors in Toddlers: Routines, Rituals, and Rigidity', category: 'behavior',
  searchTerms: ['toddler ocd behaviors','toddler rituals normal','toddler rigid routines','toddler insists on sameness','toddler repetitive behaviors','toddler obsessive behavior','toddler compulsive behavior','toddler needs things certain way','toddler routine rigid','toddler ritualistic behavior normal'],
  quickAnswer: 'Ritualistic and rigid behavior is extremely common in toddlers ages 2-4. Insisting on the same cup, the same routine, things being in the same place, or doors being closed is part of normal development. Toddlers use rituals and sameness to feel in control of a world that feels unpredictable. True OCD in young children is rare and involves significant distress and time-consuming rituals. Most toddler rigidity is developmental and passes.',
  byAge: [
    { ageRange: '18-24 months', context: 'Rigidity and routine-dependence emerge strongly. Your toddler may insist on the same cup, the same route to daycare, or the same bedtime sequence. This is completely normal and is your child\'s way of creating predictability and security. Accommodate when possible; gently prepare for changes when not.' },
    { ageRange: '2-3 years', context: 'Peak rigidity age. Your child may melt down if a cracker breaks, insist on closing all doors, line up toys, or demand specific rituals. This is "just right" behavior and is developmentally normal. It becomes concerning only if it causes significant distress or takes up excessive time.' },
    { ageRange: '3-4 years', context: 'Rigidity should gradually decrease. Your child becomes more flexible as they develop better coping skills and a greater sense of security. If rituals are increasing, causing distress when interrupted, or consuming significant portions of the day, discuss with your pediatrician.' },
    { ageRange: '4-6 years', context: 'Most developmental rigidity has resolved. If your child still has compulsive rituals, extreme distress when rituals are disrupted, or intrusive worries that drive repetitive behavior, evaluation for OCD may be appropriate. Early intervention for childhood OCD is effective.' },
  ],
  whenNormal: ['Insistence on routines and sameness between ages 2-4','Rigidity that your child can be helped through with patience','Rituals that do not consume excessive time','Flexibility that improves gradually with age'],
  whenToMention: ['Rituals are increasing in number and complexity','Your child is very distressed when rituals are disrupted','Rituals consume significant portions of the day','Your child expresses intrusive worries that drive compulsive behavior'],
  whenToActNow: ['Rituals prevent your child from participating in normal activities','Your child is in extreme distress related to compulsive behaviors'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. OCD in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/OCD-in-Children.aspx' },
    { org: 'NIH', citation: 'Evans DW et al. Ritual, habit, and perfectionism: The prevalence and development of compulsive-like behavior in normal young children. Child Dev. 1997;68(1):58-68.', url: 'https://pubmed.ncbi.nlm.nih.gov/9084125/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Children\'s Mental Health.', url: 'https://www.cdc.gov/childrensmentalhealth/depression.html' },
  ],
  relatedConcernSlugs: ['toddler-anxiety-signs-early','toddler-worry-excessive','toddler-perfectionism-frustration','toddler-tic-motor-vocal'],
};
