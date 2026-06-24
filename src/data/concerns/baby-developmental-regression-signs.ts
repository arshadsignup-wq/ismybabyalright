import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-developmental-regression-signs',
  title: 'My Baby Lost Skills They Previously Had',
  category: 'physical',
  searchTerms: [
    'baby developmental regression',
    'baby lost skills',
    'toddler stopped talking',
    'baby stopped rolling over',
    'child losing milestones',
    'regression in baby development',
    'baby stopped babbling',
    'developmental regression signs',
    'toddler regression autism',
    'baby used to do something now stopped',
    'skill regression baby when to worry',
  ],
  quickAnswer:
    'Temporary regression in skills can be normal during periods of rapid growth, illness, stress, or when a baby is intensely focused on developing a new skill. However, true developmental regression - the sustained loss of previously acquired skills such as words, social engagement, or motor abilities - is always a reason to seek prompt medical evaluation. This is especially concerning if multiple skill areas are affected simultaneously.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'At this age, what may appear as regression is often normal variation in emerging skills. A baby who was rolling may temporarily stop when working on sitting, or may seem less vocal during a gross motor development spurt. Brief pauses in skill progression are common and usually not concerning. However, true loss of previously established reflexes (such as loss of sucking reflex) or a baby who becomes increasingly floppy or unresponsive should be evaluated immediately.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Temporary skill fluctuation is common - a baby may stop babbling as much while concentrating on learning to walk, or may seem less socially engaged during an illness. These brief, explainable pauses usually resolve within days to weeks. True regression red flags include: loss of babbling or early words, loss of social skills like waving or pointing, loss of eye contact, or loss of motor skills that were well-established. Regression in the 12-18 month range affecting language and social skills warrants prompt evaluation for autism spectrum disorder.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Some regression is common with major life changes (new sibling, moving, starting daycare) or during illness. A toddler who was potty trained may have accidents, or one who was sleeping well may have sleep disruption. These situational regressions usually resolve once the stressor passes. However, loss of words (especially if a child had 10+ words and loses most of them), loss of social engagement, loss of pretend play skills, or loss of motor abilities are significant warning signs that require immediate medical evaluation.',
    },
  ],
  whenNormal: [
    'Your baby temporarily does less of one skill while intensely practicing a new one (for example, less babbling while learning to crawl).',
    'Your toddler regresses briefly during illness, travel, or a major life change and bounces back within a few weeks.',
    'Your child\'s skill seems to plateau for a week or two before progressing again.',
  ],
  whenToMention: [
    'Your child has lost a few words or seems less communicative than they were a month ago.',
    'Your child seems less socially engaged - less eye contact, less interest in interaction, or fewer gestures.',
    'A skill that was well-established (like crawling or pulling up) has not been seen for several weeks.',
  ],
  whenToActNow: [
    'Your child has lost multiple skills across different domains (language, social, motor) simultaneously.',
    'Your child has lost words and is also showing decreased social engagement and increased repetitive behaviors.',
    'Your child is experiencing sudden motor regression - becoming weaker, losing balance, or developing new movement difficulties.',
    'Your child has had a seizure followed by loss of skills (possible Landau-Kleffner syndrome or epileptic encephalopathy).',
  ],
  relatedMilestones: [
    'social-emotional-engagement',
    'communication-babbling',
    'gross-motor-development',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'regression-in-speech',
    'not-babbling-at-9-months',
    'baby-epilepsy-signs-early',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: Ages and Stages. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. If You\'re Concerned About Your Child\'s Development.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Developmental Regression in Autism Spectrum Disorder. Neuroscience & Biobehavioral Reviews, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30529245/',
    },
  ],
};
