import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'single-parent-childcare-affordability',
  title: 'Childcare Affordability for Single Parents',
  category: 'maternal',
  searchTerms: [
    'childcare affordability single parent',
    'affordable childcare single mom',
    'childcare assistance single parent',
    'single parent daycare cost',
    'help paying for childcare',
    'childcare subsidies single parent',
    'Head Start single parent',
    'CCDF childcare help',
    'affordable childcare options',
    'single parent work childcare balance',
  ],
  quickAnswer:
    'Childcare in the US costs an average of $10,000-$15,000+ per year per child, consuming a disproportionate share of single-parent household income. Federal and state assistance programs exist but are significantly underfunded, serving only about 1 in 6 eligible families. Programs to explore include the Child Care and Development Fund (CCDF) subsidy, Head Start/Early Head Start, state pre-K programs, employer childcare benefits, and the Child and Dependent Care Tax Credit. Navigating these programs can be complex, but your local Child Care Resource and Referral (CCR&R) agency can help.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Infant care is the most expensive type of childcare, often costing 20-50% more than toddler care due to lower caregiver-to-child ratios. Options for single parents include childcare subsidies through CCDF (income-eligible), family childcare homes (often more affordable than centers), in-home care cooperatives, and some employer-sponsored childcare benefits. Early Head Start serves pregnant women and children up to 3, offering free comprehensive services for income-eligible families. Some states also have paid family leave programs that can provide income during the initial months.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddler care remains expensive but some lower-cost options emerge during this period. Many churches and community organizations offer part-time toddler programs at reduced rates. Head Start programs serve children from 3 years (and Early Head Start from birth), providing free full-day or part-day programming for families at or below the federal poverty line. Some states have expanded eligibility. Cooperative childcare models, where parents share caregiving responsibilities, can significantly reduce costs if your schedule allows flexibility.',
    },
    {
      ageRange: '3-5 years',
      context:
        'State-funded pre-K programs are available in many states for 3 and 4 year olds, though availability and eligibility vary widely. These programs are typically free or very low cost and provide quality early education. If your state does not offer universal pre-K, Head Start remains a valuable option. The transition to less expensive school-age care is approaching, though before and after school care will still be needed. Apply for childcare subsidy programs early, as waiting lists can be months long.',
    },
  ],
  whenNormal: [
    'Struggling with childcare costs on a single income',
    'Feeling stressed about balancing work and childcare logistics',
    'Using a combination of formal childcare and help from family or friends',
  ],
  whenToMention: [
    'Financial stress from childcare costs is affecting your mental health or your ability to provide basic needs',
    'You need help navigating childcare assistance programs and do not know where to start',
    'You are considering leaving the workforce because childcare costs more than you earn',
  ],
  whenToActNow: [
    'You are unable to afford food, housing, or other basic needs for your family - call 211 for immediate assistance with local resources',
    'You are in an unsafe childcare situation because you cannot afford alternatives',
    'You are in crisis and need emergency childcare - many communities have crisis nurseries',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'single-parent-baby-overwhelm-isolation',
    'rural-area-pediatric-specialist-access',
    'postpartum-relationship-strain-tips',
  ],
  sources: [
    {
      org: 'HHS',
      citation:
        'US Department of Health and Human Services. Child Care and Development Fund (CCDF). Administration for Children and Families, 2024.',
      url: 'https://www.acf.hhs.gov/occ/ccdf-reauthorization',
    },
    {
      org: 'HHS',
      citation:
        'US Department of Health and Human Services. Head Start Programs. Administration for Children and Families, 2024.',
      url: 'https://www.acf.hhs.gov/ohs',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Quality Early Education and Child Care. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/child-care/Pages/default.aspx',
    },
  ],
};
