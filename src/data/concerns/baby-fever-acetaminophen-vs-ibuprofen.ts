import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-acetaminophen-vs-ibuprofen',
  title: 'Should I Give Acetaminophen or Ibuprofen for Fever?',
  category: 'medical',
  searchTerms: [
    'tylenol vs motrin baby fever',
    'acetaminophen vs ibuprofen baby',
    'which fever reducer for baby',
    'baby fever medicine choice',
    'when to use ibuprofen baby',
    'infant tylenol or motrin',
    'best fever reducer for baby',
    'acetaminophen baby age',
    'ibuprofen baby age',
    'baby fever medication comparison',
  ],
  quickAnswer:
    'Acetaminophen (Tylenol) can be used from birth (with doctor guidance for babies under 3 months), while ibuprofen (Motrin/Advil) is only safe after 6 months of age. Both are effective fever reducers. Acetaminophen works for about 4-6 hours and ibuprofen for 6-8 hours. Always dose by weight, not age, and use the measuring device that comes with the medicine.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Only acetaminophen is appropriate for this age group, and it should only be given after consulting your pediatrician. Any fever in a baby under 3 months needs medical evaluation before treating at home. Your doctor may recommend a specific dose based on your baby\'s exact weight. Never give ibuprofen to a baby under 6 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Acetaminophen is the only fever reducer recommended for babies under 6 months. Dose by weight using the syringe provided with the medication. You can give a dose every 4-6 hours as needed, but do not exceed 5 doses in 24 hours. Call your pediatrician if the fever is 102°F or higher or persists more than 24 hours.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Both acetaminophen and ibuprofen are now safe options. Ibuprofen tends to be slightly more effective for higher fevers and lasts longer (6-8 hours vs 4-6 hours). Ibuprofen should be given with food to minimize stomach upset. Your pediatrician can help you decide which is best based on your baby\'s specific situation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Either medication works well. Some parents find ibuprofen more effective for teething pain and higher fevers, while acetaminophen may be gentler on the stomach. Always use the weight-based dosing chart and the measuring device that comes with the medicine. Never use a household spoon for dosing.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Both medications continue to be safe and effective at this age. Make sure you are using the correct formulation (infant drops vs children\'s liquid) as concentrations differ. As your child grows, the dose increases, so recheck the weight-based dosing chart regularly. Store all medications out of reach of children.',
    },
  ],
  whenNormal: [
    'Your baby\'s fever comes down within 1-2 hours of giving the appropriate dose of either medication',
    'Your baby still has a low-grade fever after medication but is acting more comfortable and drinking well',
    'The fever returns when the medication wears off during an illness, requiring another dose at the appropriate interval',
  ],
  whenToMention: [
    'You are unsure which medication is better for your baby\'s specific situation or medical history',
    'Your baby has kidney, liver, or stomach issues that may affect medication choice',
    'You want to confirm the correct dose for your baby\'s current weight',
  ],
  whenToActNow: [
    'Your baby under 3 months has any fever, or your baby at any age has a fever of 104°F (40°C) or higher that does not respond to medication',
    'Your baby shows signs of an allergic reaction to the medication such as hives, facial swelling, or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fever-alternating-medicines',
    'baby-fever-not-responding-medicine',
    'infant-tylenol-dosing-concerns',
    'baby-ibuprofen-dosing-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Medications-Used-to-Treat-Fever.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever treatment: Quick guide to treating a fever.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fever/in-depth/fever/art-20050997',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Fever in Children. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003090.htm',
    },
  ],
};
