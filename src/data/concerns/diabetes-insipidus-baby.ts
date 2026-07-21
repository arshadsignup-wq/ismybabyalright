import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diabetes-insipidus-baby',
  title: 'Diabetes Insipidus in My Baby - Excessive Urination and Thirst',
  category: 'medical',
  searchTerms: [
    'diabetes insipidus baby',
    'baby peeing too much',
    'baby excessive urination',
    'baby extremely thirsty',
    'baby dilute urine',
    'baby dehydrated despite drinking',
    'central diabetes insipidus infant',
    'nephrogenic diabetes insipidus baby',
    'baby failure to thrive thirsty',
    'baby urine very clear always',
  ],
  quickAnswer:
    'Diabetes insipidus (DI) is a rare condition where the body cannot properly concentrate urine, leading to excessive dilute urination and extreme thirst. It is not related to blood sugar or type 1/type 2 diabetes. In babies, signs include unusually heavy wet diapers, irritability, poor weight gain, and preference for water over milk. DI can be central (the brain does not make enough antidiuretic hormone) or nephrogenic (the kidneys do not respond to the hormone). Both forms require medical evaluation and treatment to prevent dangerous dehydration.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Diabetes insipidus in newborns can be difficult to recognize because babies normally have frequent wet diapers. Warning signs include excessive urine output (more than 8-10 very wet diapers per day), persistent irritability that improves only with water or very dilute feeds, poor weight gain despite adequate intake, and unexplained fevers from dehydration. Congenital nephrogenic DI (inherited, X-linked) typically presents in male infants in the first weeks of life with severe dehydration, vomiting, and failure to thrive. This requires urgent pediatric nephrology or endocrinology evaluation.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies grow, DI may become more apparent as the child shows a strong preference for water over milk or formula and has persistently very wet, clear-urine diapers. Weight gain may plateau or decline. Some infants develop constipation because the body is trying to conserve water. Central DI at this age may be caused by brain malformations, tumors, or may be idiopathic. Diagnosis involves a water deprivation test (done in the hospital), serum and urine osmolality, and possibly a brain MRI.',
    },
    {
      ageRange: '1-3 years',
      context:
        'In toddlers, DI becomes easier to recognize because the child may drink excessively (multiple liters per day), produce very large volumes of very dilute urine, and wake frequently at night to drink. Unlike type 1 diabetes, blood sugar is normal. Some children prefer plain water over juice or milk. Acquired central DI in this age group may be caused by Langerhans cell histiocytosis, craniopharyngioma, or other brain tumors. A brain MRI is typically part of the workup for new-onset central DI.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with DI may have very obvious polydipsia (excessive drinking) and polyuria (excessive urination). They may become anxious if water is not available. Bedwetting is common. If your child drinks significantly more than peers and produces large volumes of very clear urine, mention this to your pediatrician. Central DI is treated with desmopressin (DDAVP), a synthetic form of antidiuretic hormone. Nephrogenic DI is treated with a low-salt diet, thiazide diuretics, and ensuring adequate fluid access.',
    },
  ],
  whenNormal: [
    'Your baby has more wet diapers than usual during hot weather or when drinking more fluids',
    'Urine is occasionally very light or clear after a period of high fluid intake',
    'Your baby is gaining weight well and meeting developmental milestones normally',
    'Brief episodes of increased thirst during illness or teething that resolve',
  ],
  whenToMention: [
    'Your baby consistently produces unusually large volumes of very dilute (almost colorless) urine',
    'Your baby seems excessively thirsty and prefers water over breast milk or formula',
    'Your baby is not gaining weight well despite adequate feeding and has persistent irritability',
  ],
  whenToActNow: [
    'Your baby shows signs of significant dehydration (sunken fontanelle, dry mouth, no tears, decreased urine output, lethargy) despite drinking large amounts of fluid, as this requires emergency evaluation',
    'Your baby has high fever, vomiting, and severe irritability along with excessive urination, which could indicate dangerous dehydration from undiagnosed DI',
    'Your child develops new excessive thirst and urination along with headaches, vision changes, or vomiting, which may indicate a brain tumor causing central DI',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['type-1-diabetes-toddler-signs', 'congenital-hypothyroidism', 'growth-hormone-deficiency-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Di Iorgi N, Napoli F, Allegri AEM, et al. Diabetes Insipidus - Diagnosis and Management. Hormone Research in Paediatrics. 2012;77(2):69-84.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22433947/',
    },
    {
      org: 'Endocrine Society',
      citation:
        'Christ-Crain M, Bichet DG, Fenske WK, et al. Diabetes Insipidus. Nature Reviews Disease Primers. 2019;5(1):54.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31395885/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Diabetes Insipidus.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/diabetes-insipidus',
    },
  ],
};
