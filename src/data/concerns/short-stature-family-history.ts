import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'short-stature-family-history',
  title: 'Short Stature with Family History',
  category: 'physical',
  searchTerms: [
    'short baby family history',
    'baby short both parents short',
    'familial short stature baby',
    'genetic short stature child',
    'baby small parents short',
    'hereditary short stature baby',
    'baby below 5th percentile parents short',
    'short parents short baby normal',
  ],
  quickAnswer:
    'Familial short stature (FSS) is the most common cause of short stature in children. If both parents are shorter than average, it is expected that their child will also be smaller. These children typically grow at a normal rate  -  their growth velocity is appropriate for age  -  but along a lower percentile that reflects their genetic potential. They enter puberty at a normal age and reach an adult height consistent with their parents\' heights. No treatment is needed. The key distinction from pathological causes is that growth velocity is normal and the child is healthy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Birth length is influenced by the uterine environment and may not fully reflect genetic potential. Babies born to shorter parents may be born at a normal or slightly smaller size. During the first few months, as your baby transitions from the growth pattern set in the womb to their genetic trajectory, a shift to lower percentiles is normal and expected. This "channeling" period is different from pathological growth failure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your baby may settle into a lower growth percentile during this time. The important observation is that they continue to grow at a consistent rate along their new curve. A baby at the 10th percentile who grows at a normal velocity along the 10th percentile is following their genetic program. Your pediatrician can calculate the mid-parental height (target adult height based on parents\' heights) to see if the growth pattern is consistent with family genetics.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By now, your baby should be tracking consistently on their growth curve. If both weight and length are at lower percentiles but proportional, and your baby is meeting developmental milestones and eating well, familial short stature is the most likely explanation. No laboratory testing is typically needed if the growth velocity is normal and the family history explains the pattern.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with familial short stature are shorter than most peers but are otherwise completely healthy and active. They grow at a normal rate (appropriate number of centimeters per year for age), have normal body proportions, and enter developmental stages at typical ages. If you notice growth velocity slowing (not just being short, but growing slower than expected), this may warrant further evaluation even with a family history of short stature, as other conditions can coexist.',
    },
  ],
  whenNormal: [
    'Your baby is below the 5th percentile for length but both parents are short and the baby is growing at a normal velocity along their curve  -  this is classic familial short stature.',
    'Your child\'s predicted adult height (based on mid-parental height calculation) is consistent with their current growth trajectory.',
    'Your baby is proportionally small (weight and length both at lower percentiles) with no other health concerns.',
    'Your toddler is the shortest in their playgroup but is active, healthy, and meeting all milestones  -  genetics explain the size.',
  ],
  whenToMention: [
    'Your baby\'s growth velocity is slowing (not just short, but growing slower than expected for age), even with a family history of short stature.',
    'Your baby is much shorter than predicted by the mid-parental height calculation  -  this may suggest a cause beyond genetics.',
    'You have concerns about your child being teased for their height or want to discuss whether evaluation by a specialist would be reassuring.',
  ],
  whenToActNow: [
    'Your baby has short stature combined with body disproportion (limbs very short relative to trunk, or abnormal facial features)  -  this may indicate a skeletal dysplasia rather than familial short stature.',
    'Your child has short stature with significant developmental delays, chronic symptoms (fatigue, diarrhea, vomiting), or failure to gain weight  -  underlying medical conditions should be ruled out regardless of family height.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Predicting a Child\'s Adult Height. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Predicting-a-Childs-Adult-Height.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Short Stature in Children. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK535315/',
    },
  ],
};
