import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'grandparent-raising-baby-financial-strain',
  title: 'Financial Strain of Grandparents Raising Grandchildren',
  category: 'behavior',
  searchTerms: [
    'grandparent raising grandchild financial help',
    'grandparents raising grandchildren on fixed income',
    'financial assistance grandparents raising grandchildren',
    'kinship care financial support',
    'grandparents custody financial strain',
    'help paying for grandchild expenses',
    'TANF grandparents raising grandchildren',
    'grandparent caregiver resources',
    'raising grandchild on social security',
    'kinship care benefits',
  ],
  quickAnswer:
    'More than 2.4 million grandparents in the United States are primary caregivers for grandchildren, and many face significant financial strain because this role was unplanned. Financial resources are available, including Temporary Assistance for Needy Families (TANF), kinship care subsidies, Medicaid or CHIP for the child, WIC, SNAP, and tax credits. Many grandparents are unaware of the benefits they qualify for, and connecting with local Area Agencies on Aging or kinship care organizations can help identify available support.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants are expensive, and grandparents who suddenly become primary caregivers may not have budgeted for formula, diapers, clothing, and medical care. Immediate resources to explore include WIC (Women, Infants, and Children program) for formula and food assistance, Medicaid or CHIP for the baby\'s health insurance, local diaper banks, and one-time emergency assistance through community organizations. If you do not have legal custody, obtaining at least temporary guardianship will make it easier to access benefits, enroll the child in insurance, and make medical decisions.',
    },
    {
      ageRange: '6-24 months',
      context:
        'As the child grows, expenses increase and may include childcare costs if the grandparent is still working. Contact your local Area Agency on Aging or Department of Social Services to learn about kinship care subsidies, which in many states provide monthly financial support similar to foster care payments. SNAP benefits can help with food costs. Many states have kinship navigator programs specifically designed to help grandparent caregivers find and access resources. The child may also qualify for SSI if they have a disability.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Long-term financial planning becomes important. Grandparents should explore whether they qualify for the Child Tax Credit, Earned Income Tax Credit, and dependent care tax credits. Head Start and Early Head Start programs provide free early education and can reduce childcare costs. Look into state-specific kinship care programs, which vary widely. Organizations like Generations United and the AARP Grandfamilies Resource Center maintain updated databases of state-by-state resources.',
    },
  ],
  whenNormal: [
    'You are managing expenses with available resources and the child\'s basic needs (food, shelter, healthcare, diapers) are being met.',
    'You have applied for and are receiving benefits the child qualifies for.',
    'You have a support network of other grandparent caregivers or community resources.',
  ],
  whenToMention: [
    'Financial stress is affecting your physical or mental health and your ability to care for the child.',
    'You are unable to afford the child\'s medical care, prescriptions, or specialty appointments.',
    'You need help navigating the legal system to obtain guardianship or custody, which affects benefit eligibility.',
  ],
  whenToActNow: [
    'You cannot afford food, formula, or diapers for the child and need immediate assistance - contact your local 211 helpline or WIC office.',
    'The child needs urgent medical care but you lack insurance or legal authority to consent to treatment.',
    'Your own health is deteriorating because you are skipping your own medical care or medications to pay for the child\'s needs.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grandparent-raising-grandchild-legal-challenges',
    'low-income-baby-nutrition-wic-assistance',
    'grandparent-boundary-setting-baby',
  ],
  sources: [
    {
      org: 'AARP',
      citation:
        'AARP. GrandFamilies Guide to Federal and State Resources.',
      url: 'https://www.aarp.org/relationships/friends-family/grandfacts-sheets/',
    },
    {
      org: 'ACF',
      citation:
        'Administration for Children and Families. Kinship Care: Supporting Grandparents and Other Relatives Raising Children.',
      url: 'https://www.childwelfare.gov/topics/outofhome/kinship/',
    },
    {
      org: 'Generations United',
      citation:
        'Generations United. Grandfamilies: State Law and Policy Resource Center.',
      url: 'https://www.gu.org/explore-our-topics/grandfamilies/',
    },
  ],
};
