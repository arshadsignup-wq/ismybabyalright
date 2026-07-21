import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'transient-hypogammaglobulinemia-infancy',
  title: 'Transient Hypogammaglobulinemia of Infancy',
  category: 'medical',
  searchTerms: [
    'transient hypogammaglobulinemia infancy',
    'baby low antibodies',
    'low immunoglobulin baby',
    'baby low IgG levels',
    'maternal antibodies waning baby',
    'baby physiologic nadir antibodies',
    'baby immunoglobulin levels low',
    'baby antibody levels low normal',
    'THI baby',
    'low IgG infant outgrow',
  ],
  quickAnswer:
    'Transient hypogammaglobulinemia of infancy (THI) is a condition where a baby\'s immunoglobulin (antibody) levels — particularly IgG — drop lower than expected during the normal transition between losing maternal antibodies and producing their own. This physiologic dip normally occurs around 3-6 months of age, but in THI it is more pronounced or prolonged. Most children with THI are either asymptomatic or have mildly increased infections and outgrow the condition by age 2-4 years as their own antibody production matures. THI is generally benign and is not a true primary immunodeficiency.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'All babies experience a natural decline in IgG levels as the maternal antibodies they received in the womb are broken down and before their own antibody production ramps up. This normal "physiologic nadir" occurs around 3-6 months. In THI, antibody levels dip lower than typical. Most babies at this age are still well-protected by breastmilk antibodies if breastfeeding. THI is often discovered incidentally when immune testing is done for other reasons.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the age when THI is most commonly diagnosed, as the baby\'s own IgG production has not yet compensated for the loss of maternal antibodies. Some babies with THI experience more frequent upper respiratory infections or ear infections, but many remain asymptomatic. Your pediatrician or immunologist will monitor immunoglobulin levels over time. It is important to distinguish THI from more serious primary immunodeficiencies — in THI, the baby\'s immune system responds normally to vaccines and has normal T-cell function.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Most children with THI see their immunoglobulin levels gradually normalize during this period. Antibody levels are typically rechecked every 6-12 months. If levels are normalizing and the child is not having serious infections, no treatment is needed. Rarely, a child with THI may need prophylactic antibiotics during winter months if recurrent infections are frequent. The vast majority of children outgrow THI by age 2-4 without any long-term immune problems.',
    },
    {
      ageRange: '3+ years',
      context:
        'By this age, most children who had THI have fully normal immunoglobulin levels. If antibody levels remain significantly low beyond age 4, your immunologist will reassess for a more permanent immunodeficiency such as common variable immunodeficiency (CVID) or specific antibody deficiency. However, this progression is uncommon. Children who have normalized their immune function do not need ongoing monitoring.',
    },
  ],
  whenNormal: [
    'Your baby has low IgG levels at 3-6 months of age — this physiologic dip is expected in all infants',
    'Your baby with THI is growing well, meeting milestones, and recovering from infections normally',
    'Your child\'s immunoglobulin levels are gradually trending upward on follow-up testing',
    'Your child with THI responds normally to vaccinations when tested',
  ],
  whenToMention: [
    'Your baby has been diagnosed with low immunoglobulin levels and you want to understand what this means',
    'Your baby with THI seems to be getting more frequent infections than peers, especially ear infections, sinusitis, or bronchitis',
    'Immunoglobulin levels are not improving on follow-up testing after age 2',
  ],
  whenToActNow: [
    'Your baby with low immunoglobulin levels develops a severe infection (pneumonia requiring hospitalization, sepsis, or meningitis) — this could indicate a more serious immunodeficiency than THI',
    'Your baby with low antibody levels has chronic diarrhea, failure to thrive, or recurrent infections with unusual organisms — these suggest a more significant immune problem requiring urgent immunology evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-immune-deficiency-signs',
    'primary-immunodeficiency-signs-baby',
    'iga-deficiency-baby',
    'how-often-babies-get-sick-normal',
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
        'National Institute of Allergy and Infectious Diseases. Primary Immune Deficiency Diseases. NIAID, 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases-pidds',
    },
    {
      org: 'UpToDate',
      citation:
        'Notarangelo LD. Transient Hypogammaglobulinemia of Infancy. UpToDate, 2024.',
      url: 'https://www.uptodate.com/contents/transient-hypogammaglobulinemia-of-infancy',
    },
  ],
};
