import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'allergy-neurodivergence-link-children',
  title: 'Are Allergies Linked to Neurodivergence in Children?',
  category: 'medical',
  searchTerms: [
    'allergies and autism link',
    'eczema ADHD connection baby',
    'food allergies neurodivergent child',
    'allergy and developmental delay',
    'atopic conditions autism',
    'baby allergies and behavior',
    'eczema autism spectrum link',
    'allergies and sensory processing',
    'immune system neurodevelopment baby',
    'food sensitivity behavior child',
  ],
  quickAnswer:
    'Research has found statistical associations between atopic conditions (eczema, food allergies, asthma) and certain neurodevelopmental differences such as ADHD and autism spectrum disorder. However, having allergies does not mean your child will be neurodivergent, and most children with allergies develop typically. These conditions may share some underlying immune and genetic pathways, but one does not cause the other.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'At this early stage, eczema and food sensitivities may emerge while neurodevelopmental patterns are not yet identifiable. If your baby has eczema or suspected food allergies, focus on managing these conditions with your pediatrician. There is no need to worry about neurodevelopmental implications at this age - early atopic conditions are extremely common and the vast majority of affected babies develop typically.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As food allergies are being identified through introduction of solids and developmental milestones are being tracked, some parents worry about connections between the two. Research shows the association is statistical rather than causative. Continue to monitor your child\'s developmental milestones independently of their allergy status. If you have concerns about development, discuss them with your pediatrician regardless of whether allergies are present.',
    },
    {
      ageRange: '18-36 months',
      context:
        'By this age, some neurodevelopmental differences may become more apparent while atopic conditions may be well established. If your child has both allergies and behavioral or developmental concerns, each should be evaluated on its own merits. Some behaviors parents attribute to neurodivergence - such as irritability, poor sleep, or food refusal - may actually be caused by untreated allergic conditions. Proper allergy management can sometimes improve behavioral symptoms significantly.',
    },
  ],
  whenNormal: [
    'Your baby has eczema or food allergies but is meeting developmental milestones on track.',
    'Your child with allergies is socially engaged, communicating appropriately, and playing normally for their age.',
    'You notice some fussiness or irritability related to allergic flares that resolves when symptoms are controlled.',
  ],
  whenToMention: [
    'Your child has significant allergies and you are also noticing developmental differences like speech delays, limited social engagement, or repetitive behaviors.',
    'Your child\'s behavioral symptoms such as extreme irritability or sleep disruption persist even when allergies are well managed.',
    'You have a strong family history of both atopic conditions and neurodevelopmental differences.',
  ],
  whenToActNow: [
    'Your child is having severe allergic reactions (anaphylaxis) regardless of any neurodevelopmental concerns.',
    'Your child is showing sudden developmental regression - losing skills they previously had.',
    'Your child is in significant distress that is interfering with eating, sleeping, or daily functioning.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'atopic-dermatitis-new-treatments-children',
    'baby-developmental-regression-signs',
    'hives',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Association Between Atopic Diseases and Attention-Deficit/Hyperactivity Disorder. Pediatrics, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28557760/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Allergies and Autism: What Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Immune Dysregulation and Neurodevelopmental Disorders. Journal of Allergy and Clinical Immunology, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31926184/',
    },
  ],
};
