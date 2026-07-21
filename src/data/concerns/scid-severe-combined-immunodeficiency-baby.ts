import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'scid-severe-combined-immunodeficiency-baby',
  title: 'SCID (Severe Combined Immunodeficiency) in Babies',
  category: 'medical',
  searchTerms: [
    'SCID baby',
    'severe combined immunodeficiency baby',
    'bubble boy disease',
    'baby no immune system',
    'newborn screening SCID',
    'baby absent T cells',
    'SCID newborn screening positive',
    'baby bone marrow transplant immune',
    'baby life threatening infections immune',
    'SCID treatment baby',
  ],
  quickAnswer:
    'Severe combined immunodeficiency (SCID) is a group of rare, life-threatening genetic disorders in which a baby is born with virtually no functioning immune system. Babies with SCID lack T-cells and sometimes B-cells and NK-cells, leaving them unable to fight infections. SCID is now detected through newborn screening in all U.S. states. Without treatment, most babies with SCID do not survive past their first year. However, bone marrow (hematopoietic stem cell) transplant performed early — ideally before 3.5 months and before infections develop — is curative in over 90% of cases.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'SCID is typically identified through newborn screening, which detects low T-cell receptor excision circles (TRECs). A positive screen requires urgent follow-up with a pediatric immunologist for confirmatory testing (lymphocyte subsets, mitogen proliferation studies). Babies appear healthy at birth because they are still protected by maternal antibodies. It is critical to avoid live vaccines (especially rotavirus and BCG) and to minimize infection exposure. Early referral for bone marrow transplant evaluation is essential — transplant before 3.5 months of age and before infections occur yields the best survival rates (over 95%).',
    },
    {
      ageRange: '3-6 months',
      context:
        'If SCID was not caught on newborn screening, symptoms may begin appearing as maternal antibodies wane. Warning signs include persistent thrush that does not respond to treatment, chronic diarrhea, failure to thrive, recurrent pneumonia, and skin rashes (often from graft-versus-host disease caused by maternal T-cells). Infections with organisms that rarely cause disease in healthy babies — such as Pneumocystis jirovecii pneumonia — are a hallmark of SCID. Immediate immunology evaluation is needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with undiagnosed SCID at this age typically develop severe, recurrent, and life-threatening infections including pneumonia, meningitis, sepsis, and chronic viral infections. Growth faltering becomes pronounced. Without treatment, the prognosis is poor. Even at this stage, bone marrow transplant can be life-saving, though outcomes are better when transplant occurs before serious infections develop. Gene therapy is also emerging as a treatment option for certain SCID types (ADA-SCID, X-linked SCID).',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children who have undergone successful bone marrow transplant for SCID are typically developing well and building functional immune systems. They require close follow-up with immunology to monitor immune reconstitution, may need booster vaccinations once the immune system recovers, and some may require ongoing immunoglobulin replacement. For ADA-SCID, enzyme replacement therapy (PEG-ADA) can serve as a bridge to definitive treatment. Long-term outcomes with early treatment are excellent.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening was normal and they are growing and developing well',
    'Your baby gets typical colds and recovers within the expected timeframe',
    'Your baby had a false-positive SCID screen that was cleared by confirmatory testing — false positives can occur in premature infants',
    'Your baby who was treated for SCID is meeting milestones and immune function tests are improving',
  ],
  whenToMention: [
    'Your baby\'s newborn screening flagged for possible SCID — follow up with immunology as directed',
    'Your baby has persistent thrush, chronic diarrhea, or recurrent respiratory infections that seem more severe than expected',
    'You have a family history of SCID, infant deaths from infection, or known immunodeficiency',
  ],
  whenToActNow: [
    'Your baby has a positive newborn screen for SCID — this requires urgent immunology evaluation, even though your baby may look perfectly healthy right now',
    'Your baby has severe pneumonia, sepsis, or an infection that is not responding to treatment, especially if combined with failure to thrive or chronic diarrhea',
    'Your baby with known SCID develops any fever or signs of infection — even minor infections can be life-threatening and require immediate emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-immune-deficiency-signs',
    'primary-immunodeficiency-signs-baby',
    'how-often-babies-get-sick-normal',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Screening for Severe Combined Immunodeficiency. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/1/e20181370/37521',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Severe Combined Immunodeficiency (SCID). NIAID, 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/severe-combined-immunodeficiency-scid',
    },
    {
      org: 'IDF',
      citation:
        'Immune Deficiency Foundation. SCID - Severe Combined Immune Deficiency. IDF, 2024.',
      url: 'https://primaryimmune.org/about-primary-immunodeficiencies/specific-disease-types/severe-combined-immune-deficiency',
    },
  ],
};
