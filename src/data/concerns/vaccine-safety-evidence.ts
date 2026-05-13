import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaccine-safety-evidence',
  title: 'Vaccine Safety: What the Evidence Shows',
  category: 'medical',
  searchTerms: [
    'are vaccines safe for babies',
    'vaccine safety research',
    'vaccines cause autism',
    'vaccine ingredients safe',
    'how are vaccines tested',
    'vaccine safety monitoring',
    'do vaccines have side effects',
    'vaccine safety evidence',
    'too many antigens baby',
  ],
  quickAnswer:
    'Vaccines are among the most rigorously tested medical products in existence, undergoing years of clinical trials before approval and continuous safety monitoring afterward. Large-scale studies involving millions of children have consistently confirmed that childhood vaccines are safe and do not cause autism or other developmental disorders. The benefits of vaccination vastly outweigh the small risk of mild, temporary side effects.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The vaccines given at birth and 2 months have been studied in millions of newborns and young infants. Research shows that a baby\'s immune system, while immature, is fully capable of responding to vaccine antigens. In fact, babies encounter thousands of antigens daily from their environment. The few antigens in vaccines represent a tiny fraction of what their immune system already handles.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Multiple studies have examined the safety of giving several vaccines at the same visit and have found no increased risk of adverse events. Combination vaccines reduce the total number of injections while providing the same protection. The safety monitoring systems in place, including VAERS and the Vaccine Safety Datalink, continuously track millions of vaccine doses for any safety signals.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, your baby has likely received several rounds of vaccines. A landmark 2004 Institute of Medicine review and numerous subsequent studies have conclusively found no link between vaccines and autism. The original study claiming such a link was retracted due to fraud. Ongoing research continues to confirm the safety of the childhood vaccine schedule.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Live vaccines such as MMR and varicella, given around 12 months, have been studied extensively. A 2019 study of over 650,000 children in Denmark reaffirmed that the MMR vaccine does not increase the risk of autism, even in children with risk factors. Vaccine ingredients like aluminum salts and trace preservatives have been studied at the amounts present in vaccines and are safe.',
    },
  ],
  whenNormal: [
    'Mild, temporary side effects like soreness, low-grade fever, or fussiness after vaccination',
    'Feeling uncertain about vaccines and wanting to review the evidence with your pediatrician',
    'A small hard lump at the injection site that gradually resolves over weeks',
  ],
  whenToMention: [
    'You have specific concerns about vaccine ingredients or the number of vaccines and want to discuss the research',
    'Your child or a family member has a history of a severe allergic reaction and you want to understand which vaccines are safe',
    'You have encountered information online that worries you and want your pediatrician to help you evaluate it',
    'Your child has an immune system disorder and you want guidance on which vaccines are appropriate',
  ],
  whenToActNow: [
    'Your child develops signs of a severe allergic reaction within minutes to hours of vaccination, including difficulty breathing, swelling of the face or throat, rapid heartbeat, or widespread hives -- call 911',
    'Your child has a seizure or becomes unresponsive after receiving a vaccine',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vaccine Safety: Overview, History, and How the Safety Process Works.',
      url: 'https://www.cdc.gov/vaccinesafety/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vaccine Safety: Examine the Evidence. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Studies-Examine-the-Evidence.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Hviid, A. et al. Measles, Mumps, Rubella Vaccination and Autism: A Nationwide Cohort Study. Annals of Internal Medicine, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30831578/',
    },
  ],
};
