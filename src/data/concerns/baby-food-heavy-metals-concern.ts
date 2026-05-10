import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-food-heavy-metals-concern',
  title: 'Heavy Metals in Baby Food',
  category: 'feeding',
  searchTerms: [
    'heavy metals in baby food',
    'arsenic in baby rice cereal',
    'lead in baby food',
    'mercury in baby food',
    'cadmium in baby food',
    'toxic metals baby food brands',
    'baby food safety concerns',
    'which baby foods have heavy metals',
    'safe baby food brands heavy metals',
  ],
  quickAnswer:
    'Trace amounts of heavy metals (arsenic, lead, cadmium, and mercury) have been found in many commercial baby foods, including rice-based products, fruit juices, root vegetables, and teething biscuits. These metals occur naturally in soil and water and can accumulate in food crops. While the levels found are generally low, chronic exposure during early development is a concern. You can reduce your baby\'s exposure by offering a varied diet, limiting rice-based products, and choosing a diversity of grains and produce.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age consume only breast milk or formula. Breast milk and formula generally contain very low levels of heavy metals. If you use well water to prepare formula, have it tested for lead and arsenic, as these contaminants can be present in private water supplies. Always use cold tap water (not hot) for formula preparation, as hot water can contain higher lead levels from older pipes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If introducing first foods around 4-6 months, be aware that rice cereal, long recommended as a first food, tends to have the highest arsenic levels among baby foods. Consider starting with oatmeal, barley, or multigrain cereals instead. The FDA has set a limit of 100 parts per billion for inorganic arsenic in infant rice cereal. Single-ingredient purees made from a variety of fruits and vegetables help limit exposure to any one contaminant.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Diversify your baby\'s diet to reduce heavy metal exposure from any single food. Limit rice products (cereal, puffs, rice cakes) to small amounts and vary grains. Root vegetables (sweet potatoes, carrots) can accumulate metals from soil but remain nutritious and should not be eliminated, just varied with other vegetables. Offer a wide range of fruits, vegetables, proteins, and grains. Washing and peeling produce reduces some contaminant levels.',
    },
    {
      ageRange: '12 months+',
      context:
        'Continue offering a varied diet. Limit fruit juice to no more than 4 ounces per day (juice can concentrate heavy metals from fruit). Avoid rice milk as a beverage. Choose a variety of grains including oats, quinoa, barley, farro, and wheat. Test your home water supply if you have concerns about lead (especially in homes built before 1986). The FDA\'s Closer to Zero initiative is working to reduce heavy metal levels in baby and toddler foods, and manufacturers are increasingly testing and improving their products.',
    },
  ],
  whenNormal: [
    'You offer your baby a varied diet across different food groups and rotate grains, fruits, and vegetables',
    'You limit rice-based products and include alternative grains like oatmeal, barley, and quinoa',
    'Your baby is growing and developing normally on a mixed diet of homemade and commercial foods',
    'You use municipal water that meets EPA safety standards for formula preparation',
  ],
  whenToMention: [
    'Your baby has been eating primarily rice-based foods for an extended period and you are concerned about arsenic exposure',
    'You live in an area with known environmental contamination or your water source has not been tested',
    'You want to discuss blood lead level testing for your child based on risk factors',
  ],
  whenToActNow: [
    'Your child has been tested and has an elevated blood lead level (5 mcg/dL or higher), which requires medical follow-up and intervention',
    'Your child shows signs of acute heavy metal poisoning such as persistent vomiting, abdominal pain, lethargy, or developmental regression after known exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Reducing Toxic Chemical Exposures in Children: Food as a Focus. Policy Statement. Pediatrics. 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Metals-in-Baby-Food.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Heavy Metals in Baby Food: What Parents Need to Know.',
      url: 'https://www.niehs.nih.gov/health/topics/agents/lead',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Lead in Food, Cosmetics, and Medicines.',
      url: 'https://www.cdc.gov/lead-prevention/about/sources.html',
    },
  ],
};
