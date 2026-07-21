import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'iga-deficiency-baby',
  title: 'Selective IgA Deficiency in Children',
  category: 'medical',
  searchTerms: [
    'IgA deficiency baby',
    'selective IgA deficiency child',
    'low IgA baby',
    'IgA deficiency symptoms',
    'most common immunodeficiency',
    'IgA deficiency infections',
    'IgA deficiency allergy',
    'IgA deficiency autoimmune',
    'baby blood products IgA',
    'IgA deficiency treatment child',
  ],
  quickAnswer:
    'Selective IgA deficiency is the most common primary immunodeficiency, affecting about 1 in 300-700 people. IgA is the main antibody found in mucous membranes (respiratory tract, gut, saliva, tears) and is the first line of defense against infections at these surfaces. Many people with IgA deficiency are completely asymptomatic and never diagnosed. Others experience more frequent respiratory or gastrointestinal infections, increased allergies, or associated autoimmune conditions. There is no replacement therapy for IgA specifically, but most children with IgA deficiency do well with supportive care.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'IgA deficiency is rarely diagnosed this early because IgA levels are normally very low in infants — IgA does not reach adult levels until around age 5-7. Maternal antibodies and breastmilk (which contains IgA) provide protection. If your baby has other immune testing done for another reason and IgA is low, this is expected at this age and does not necessarily indicate IgA deficiency.',
    },
    {
      ageRange: '6-12 months',
      context:
        'IgA levels remain very low in normal infants, so a definitive diagnosis of selective IgA deficiency cannot be made at this age. If your baby is having frequent infections, your doctor may check immunoglobulin levels to look for broader immune problems. A low IgA alone at this age requires follow-up testing at an older age rather than immediate diagnosis.',
    },
    {
      ageRange: '1-3 years',
      context:
        'IgA levels are still rising in toddlers and do not reach adult levels until age 5-7. A tentative diagnosis of IgA deficiency can be considered if IgA is undetectable (below 7 mg/dL) with normal IgG and IgM levels in a child over 4 years old. In toddlers, a very low IgA level should be monitored over time. Some children have transient low IgA that normalizes. Toddlers with IgA deficiency may experience more ear infections, sinus infections, or gastrointestinal infections than their peers.',
    },
    {
      ageRange: '3+ years',
      context:
        'The diagnosis of selective IgA deficiency is confirmed when IgA is below 7 mg/dL in a child over age 4 with normal IgG and IgM and no other cause of immunodeficiency. About two-thirds of affected children are asymptomatic. Those with symptoms may have increased respiratory infections, gastrointestinal infections, a higher rate of allergies (asthma, eczema, food allergies), and increased risk of autoimmune conditions like celiac disease or juvenile arthritis. An important medical alert: people with complete IgA deficiency can develop anti-IgA antibodies and may have severe allergic reactions if given IgA-containing blood products.',
    },
  ],
  whenNormal: [
    'Your child has IgA deficiency but rarely gets sick and is growing and developing normally — this is the case for the majority of people with IgA deficiency',
    'Your young child has a low IgA level that is being monitored — IgA levels do not reach adult values until age 5-7',
    'Your child with IgA deficiency gets occasional respiratory or ear infections that resolve with standard treatment',
    'Your child with IgA deficiency has mild seasonal allergies that are well controlled',
  ],
  whenToMention: [
    'Your child with IgA deficiency has more frequent infections than expected (4+ ear infections per year, recurrent sinusitis, or recurrent pneumonia)',
    'Your child with IgA deficiency is developing symptoms of autoimmune disease (chronic diarrhea, joint pain, persistent rash)',
    'You want to discuss whether your child with IgA deficiency needs a medical alert bracelet or notification about blood products',
  ],
  whenToActNow: [
    'Your child with known IgA deficiency is receiving a blood transfusion or blood products and develops hives, difficulty breathing, or anaphylaxis — this could be a reaction to IgA in the blood products',
    'Your child with IgA deficiency develops signs of a more severe immunodeficiency (recurrent pneumonia, deep infections, failure to thrive), which may suggest progression to common variable immunodeficiency (CVID)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-immune-deficiency-signs',
    'primary-immunodeficiency-signs-baby',
    'transient-hypogammaglobulinemia-infancy',
    'baby-recurring-ear-infections',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Primary Immunodeficiency Diseases. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/8/403/35087',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Selective IgA Deficiency. NIAID, 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/selective-iga-deficiency',
    },
    {
      org: 'IDF',
      citation:
        'Immune Deficiency Foundation. IgA Deficiency. IDF Patient & Family Handbook, 2024.',
      url: 'https://primaryimmune.org/about-primary-immunodeficiencies/specific-disease-types/iga-deficiency',
    },
  ],
};
