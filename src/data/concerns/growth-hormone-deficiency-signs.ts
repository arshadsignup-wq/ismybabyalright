import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'growth-hormone-deficiency-signs',
  title: 'Growth Hormone Deficiency Signs',
  category: 'medical',
  searchTerms: [
    'growth hormone deficiency baby',
    'baby not growing tall enough',
    'growth hormone deficiency signs infant',
    'pituitary gland baby growth',
    'baby very short for age',
    'growth hormone deficiency symptoms child',
    'GHD signs baby',
    'hypopituitarism baby growth',
  ],
  quickAnswer:
    'Growth hormone deficiency (GHD) occurs when the pituitary gland does not produce enough growth hormone to support normal growth. It affects approximately 1 in 4,000-10,000 children. In babies, it may present with low blood sugar (hypoglycemia), prolonged jaundice, small genitalia in boys, or slow linear growth. In older infants and toddlers, the hallmark sign is a progressively declining growth velocity, causing the child to fall farther behind peers on the growth chart. GHD is treatable with daily growth hormone injections, and early treatment leads to better outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Growth hormone deficiency can present in newborns with hypoglycemia (low blood sugar), prolonged conjugated jaundice, micropenis (in boys), or midline facial defects that may indicate pituitary abnormalities. Birth length and weight may be normal or only slightly low. If your newborn has unexplained recurrent low blood sugar or prolonged jaundice, your pediatrician may check growth hormone and other pituitary hormone levels. A brain MRI can evaluate the pituitary gland structure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with GHD may begin to show growth deceleration during this period. While the difference from peers may still be subtle, your pediatrician tracks growth velocity  -  the rate of growth  -  which is more informative than a single measurement. Babies with GHD often have proportional short stature (body parts are proportional, just smaller overall) and may appear chubbier than expected due to growth hormone\'s role in fat metabolism.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, growth failure from GHD becomes more apparent. If your baby\'s length consistently falls further behind on the growth chart while weight remains relatively normal (or even elevated), this pattern is suggestive of GHD. Your pediatrician may check IGF-1 and IGFBP-3 blood levels as screening tests. If results are suggestive, a referral to a pediatric endocrinologist for stimulation testing will help confirm the diagnosis.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with untreated GHD are notably shorter than peers and continue to fall behind. They may look younger than their age due to a round face, prominent forehead, and immature body proportions. Once diagnosed, daily injections of recombinant growth hormone are started and typically result in significant catch-up growth, especially in the first year of treatment. Treatment usually continues through childhood until adult height is achieved.',
    },
  ],
  whenNormal: [
    'Your baby is small but growing at a consistent velocity along a lower percentile  -  this is more suggestive of familial short stature or constitutional growth delay than GHD.',
    'Both parents are short and your baby is tracking at a low but stable percentile  -  genetic short stature is the most common cause of being small.',
    'Your baby had a brief period of slower growth during an illness but then resumed normal growth velocity  -  illness can temporarily slow growth.',
    'Your toddler is short but has normal body proportions, no other symptoms, and a normal growth velocity for age.',
  ],
  whenToMention: [
    'Your baby\'s growth velocity is declining  -  they are falling progressively further behind on the growth chart rather than following a consistent curve.',
    'Your baby is significantly short (below the 3rd percentile for length) without a clear familial or other explanation.',
    'Your newborn had unexplained hypoglycemia, prolonged jaundice, or other signs of pituitary dysfunction.',
  ],
  whenToActNow: [
    'Your newborn has recurrent episodes of hypoglycemia along with poor growth  -  this could indicate multiple pituitary hormone deficiencies requiring urgent endocrine evaluation.',
    'Your baby has a known brain abnormality affecting the pituitary area and is showing signs of poor growth  -  prompt endocrine referral is needed.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Growth Hormone Treatment. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Growth-Hormone-Treatment.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Growth Hormone Deficiency.',
      url: 'https://www.nichd.nih.gov/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Growth Hormone Deficiency in Children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/growth-hormone-deficiency/symptoms-causes/syc-20372502',
    },
  ],
};
