import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'neonatal-diabetes-signs',
  title: 'Neonatal Diabetes in Babies',
  category: 'medical',
  searchTerms: [
    'neonatal diabetes baby',
    'diabetes diagnosed before 6 months',
    'newborn diabetes signs',
    'baby high blood sugar',
    'neonatal diabetes KCNJ11',
    'transient neonatal diabetes',
    'permanent neonatal diabetes',
    'baby diabetes not type 1',
    'neonatal diabetes sulfonylurea',
    'neonatal diabetes 6q24',
  ],
  quickAnswer:
    'Neonatal diabetes is a rare form of diabetes diagnosed before 6 months of age. Unlike type 1 diabetes, it is caused by single-gene mutations rather than autoimmune destruction of the pancreas. There are two forms: transient neonatal diabetes (which resolves but may recur later in life) and permanent neonatal diabetes. Genetic testing is critical because some forms, particularly those caused by KCNJ11 or ABCC8 gene mutations, can be treated with sulfonylurea pills instead of insulin injections, dramatically simplifying management and improving blood sugar control. The most common genetic causes are abnormalities at 6q24 (transient form) and KCNJ11 mutations (permanent form).',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Neonatal diabetes typically presents in the first weeks of life with hyperglycemia (high blood sugar), failure to gain weight or weight loss despite adequate feeding, excessive urination (very wet diapers), dehydration, and sometimes diabetic ketoacidosis (DKA). Many affected babies had intrauterine growth restriction (low birth weight) because insulin is important for fetal growth. If your newborn has persistent blood glucose levels above 200 mg/dL, neonatal diabetes should be suspected. Initial treatment is with insulin, but genetic testing should be sent immediately because results will guide long-term treatment.',
    },
    {
      ageRange: '1-6 months',
      context:
        'After initial stabilization with insulin, genetic testing results typically guide the next steps. About 50% of neonatal diabetes cases are transient (TNDM), most commonly caused by 6q24 abnormalities, meaning the diabetes will resolve, usually within the first year of life, though it often recurs during adolescence or adulthood. About 50% are permanent (PNDM). If a KCNJ11 or ABCC8 mutation is identified, a carefully supervised transition from insulin injections to oral sulfonylurea (such as glyburide/glibenclamide) may be attempted. This transition is successful in about 90% of KCNJ11 cases and can dramatically improve quality of life.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby has transient neonatal diabetes, the diabetes may resolve during this period. Blood glucose monitoring should continue even after resolution, as relapse can occur. Babies with permanent neonatal diabetes continue on either insulin or sulfonylurea depending on their genetic type. Growth should normalize with appropriate glucose management. If your baby was diagnosed with diabetes after 6 months of age, this is more likely to be type 1 diabetes (autoimmune), but genetic testing can help distinguish the two.',
    },
    {
      ageRange: '1 year+',
      context:
        'Children with permanent neonatal diabetes require lifelong treatment (insulin or sulfonylurea depending on gene involved). Those with transient neonatal diabetes need ongoing monitoring because about 50% will develop diabetes again, typically during puberty or early adulthood. Some genetic forms of neonatal diabetes (particularly KCNJ11 and ABCC8) may also cause developmental delay, epilepsy, or other neurological features (DEND syndrome), and sulfonylurea treatment may improve neurological outcomes as well. Regular follow-up with a pediatric endocrinologist familiar with monogenic diabetes is essential.',
    },
  ],
  whenNormal: [
    'Your newborn had a single elevated blood sugar reading that normalized and subsequent readings have been consistently normal',
    'Your baby had transient hypoglycemia related to prematurity or being large/small for gestational age, which is different from neonatal diabetes',
    'Your child with transient neonatal diabetes has resolved and blood sugars have been normal off treatment, with ongoing monitoring in place',
  ],
  whenToMention: [
    'Your newborn has persistently elevated blood sugar levels or has been diagnosed with neonatal diabetes and you want to discuss genetic testing',
    'Your child was diagnosed with neonatal diabetes and you want to discuss whether sulfonylurea treatment might be an option',
    'Your child with transient neonatal diabetes is now older and you want to discuss monitoring for recurrence',
    'Your baby was diagnosed with diabetes before 6 months of age and has not yet had genetic testing',
  ],
  whenToActNow: [
    'Your newborn is excessively thirsty, urinating frequently (soaking through diapers), losing weight, or appears dehydrated',
    'Your baby has signs of diabetic ketoacidosis: rapid breathing (Kussmaul breathing), sweet or fruity breath odor, vomiting, and lethargy',
    'Your baby is becoming unresponsive, extremely lethargic, or has very high or very low blood sugar readings',
    'Your child with known neonatal diabetes is sick and unable to keep fluids or medications down, with blood sugar levels that are very high or unstable',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['type-1-diabetes-toddler-signs', 'newborn-blood-sugar-low', 'baby-dehydration-hot-weather'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Neonatal Diabetes Mellitus. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/3106/neonatal-diabetes-mellitus',
    },
    {
      org: 'NIH',
      citation:
        'De Franco E, et al. The effect of early, comprehensive genomic testing on clinical care in neonatal diabetes. Lancet, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26251392/',
    },
    {
      org: 'ADA',
      citation:
        'American Diabetes Association. Monogenic Diabetes. ADA Professional Practice Committee, 2024.',
      url: 'https://diabetes.org/about-diabetes/type-2/monogenic-diabetes-neonatal-diabetes-mellitus-maturity-onset-diabetes-young',
    },
  ],
};
