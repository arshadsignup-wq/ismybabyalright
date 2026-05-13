import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'social-media-comparison-parenting',
  title: 'Social Media Comparison and Parenting',
  category: 'behavior',
  searchTerms: [
    'social media parenting comparison',
    'instagram parenting anxiety',
    'comparing baby on social media',
    'parenting influencer anxiety',
    'social media making me feel like bad parent',
    'other babies doing more on social media',
    'mom guilt social media',
    'curated parenting online',
    'tiktok parenting advice anxiety',
  ],
  quickAnswer:
    'Social media presents a curated, highlight-reel version of other families\' lives that can make you feel like every other baby is reaching milestones faster, eating better, and sleeping longer than yours. This comparison trap is well-documented to increase parental anxiety and decrease confidence. What you see online is not an accurate representation of the full picture of any family\'s reality, and it is certainly not a benchmark for your own child\'s development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'New parents are especially vulnerable to social media comparison during the exhausting newborn period. Seeing posts about babies sleeping through the night, perfectly organized nurseries, and mothers who seem to have it all together can make your own chaotic, sleep-deprived reality feel inadequate. Remember that people rarely post about the difficult moments, and many of those polished images were staged during the one good moment of the day.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Milestone comparison on social media tends to intensify at this age. Videos of babies rolling, sitting, or eating solids can make you anxious if your baby is not doing the same things yet. Social media algorithms also tend to show you more of what you worry about, creating an echo chamber of anxiety. Consider curating your feed to follow evidence-based sources rather than accounts that make you feel inadequate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Parents sharing videos of babies walking early, saying words, or performing impressive feats can distort your sense of what is typical. These posts represent the exceptional end of the spectrum and get shared precisely because they are noteworthy, not because they are average. Your baby doing things at the average age is perfectly healthy and completely fine.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler content on social media often showcases advanced language, impressive motor skills, or ideal eating habits that can make your picky, tantrum-throwing toddler seem behind. In reality, toddlerhood is messy, loud, and unpredictable for nearly every family. If social media is consistently making you feel worse about your parenting, taking a break or unfollowing triggering accounts is a legitimate and healthy choice.',
    },
  ],
  whenNormal: [
    'You occasionally feel a pang of comparison when scrolling social media but can put it in perspective',
    'You follow some parenting accounts for information but recognize the content is curated',
    'You sometimes take breaks from social media when you notice it affecting your mood',
    'You can appreciate other families\' posts without it diminishing your confidence in your own parenting',
  ],
  whenToMention: [
    'Social media comparison is a significant source of anxiety and you find yourself unable to stop checking',
    'You feel consistently inadequate as a parent and social media is a major contributor to those feelings',
    'You are making parenting decisions based on social media trends rather than your pediatrician\'s guidance or your family\'s needs',
    'The comparison is contributing to symptoms of depression or anxiety that are affecting your daily life',
  ],
  whenToActNow: [
    'You are experiencing persistent feelings of worthlessness, hopelessness, or inability to bond with your baby that may indicate postpartum depression or anxiety',
    'Social media content has led you to pursue unnecessary medical evaluations or interventions for your child based on unfounded comparisons',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Beyond Screen Time: A Parent\'s Guide to Media Use. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/Media/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Social Media Use and Mental Health Among Parents. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7364393/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Mental Health for Parents.',
      url: 'https://www.cdc.gov/parents/essentials/index.html',
    },
  ],
};
