import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-thyroiditis-symptoms',
  title: 'Postpartum Thyroiditis: Symptoms and What to Watch For',
  category: 'maternal',
  searchTerms: [
    'postpartum thyroiditis symptoms',
    'thyroid problems after birth symptoms',
    'hyperthyroid postpartum symptoms',
    'hypothyroid after baby',
    'thyroid and postpartum depression',
    'thyroiditis after pregnancy',
    'racing heart postpartum thyroid',
    'weight gain after baby thyroid',
    'anxiety after baby thyroid',
    'thyroid autoimmune postpartum',
  ],
  quickAnswer:
    'Postpartum thyroiditis affects approximately 5-10% of new parents within the first year after delivery. It is an autoimmune inflammation of the thyroid gland that typically presents in two phases: a hyperthyroid phase (1-4 months postpartum) with anxiety, rapid heartbeat, and weight loss, followed by a hypothyroid phase (4-8 months) with fatigue, weight gain, and depression. Because symptoms overlap significantly with normal postpartum experiences and postpartum depression, thyroid testing is important for accurate diagnosis.',
  byAge: [
    {
      ageRange: '1-4 months postpartum',
      context:
        'The hyperthyroid (thyrotoxic) phase occurs when the inflamed thyroid releases stored hormone into the bloodstream. Symptoms include anxiety, irritability, tremors, rapid heartbeat or palpitations, heat intolerance, unexplained weight loss, insomnia, and fatigue. Many of these symptoms are easily attributed to the normal stress of new parenthood, which is why thyroiditis is often missed during this phase. If you have risk factors such as type 1 diabetes, a personal history of thyroid disease, or a family history of autoimmune conditions, screening is especially important.',
    },
    {
      ageRange: '4-8 months postpartum',
      context:
        'The hypothyroid phase follows as the thyroid becomes depleted and cannot produce adequate hormone. Symptoms include fatigue, weight gain, constipation, dry skin, hair loss, difficulty concentrating, depression, and cold intolerance. This phase is most commonly confused with postpartum depression. If you have been diagnosed with postpartum depression but are not responding well to antidepressant treatment, thyroid testing (TSH and free T4) should be performed. The hypothyroid phase may require treatment with levothyroxine.',
    },
    {
      ageRange: '8-12 months postpartum',
      context:
        'Most people with postpartum thyroiditis recover normal thyroid function within twelve to eighteen months. Your provider will monitor your thyroid levels periodically during this time. If you are on levothyroxine, your dose may be gradually reduced and eventually discontinued as your thyroid recovers. Some people experience only one phase (either hyper or hypo) rather than both. Regular monitoring ensures appropriate treatment adjustments.',
    },
    {
      ageRange: '12+ months postpartum',
      context:
        'Approximately 20-30% of people who develop postpartum thyroiditis go on to develop permanent hypothyroidism within five to ten years and will require lifelong thyroid hormone replacement. Having postpartum thyroiditis also significantly increases the risk of recurrence with subsequent pregnancies. If you have had postpartum thyroiditis, inform your providers before future pregnancies so they can monitor your thyroid function closely. Annual thyroid screening is recommended for those with a history of postpartum thyroiditis.',
    },
  ],
  whenNormal: [
    'Mild fatigue and emotional fluctuations in the first few months postpartum without other thyroid symptoms',
    'Temporary hair loss around three to four months postpartum (common even without thyroid disease)',
    'Gradual return to pre-pregnancy weight over several months',
  ],
  whenToMention: [
    'You have persistent anxiety, rapid heartbeat, or unexplained weight loss in the first months postpartum',
    'You experience extreme fatigue, depression, or weight gain that seems disproportionate to your activity level',
    'Treatment for postpartum depression is not improving your mood symptoms',
    'You have a personal or family history of thyroid or autoimmune disease',
  ],
  whenToActNow: [
    'You experience a very rapid heart rate (over 120 beats per minute at rest), severe tremors, or chest pain, which could indicate thyroid storm (very rare but a medical emergency)',
    'You have severe depression with thoughts of harming yourself or your baby - call 988 or go to the emergency room',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-thyroiditis',
    'postpartum-hair-loss',
    'postpartum-menstruation-return-irregular',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Thyroid Disease in Pregnancy. ACOG Practice Bulletin No. 223, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/04/thyroid-disease-in-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Postpartum Thyroiditis. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/pregnancy-thyroid-disease',
    },
    {
      org: 'ATA',
      citation:
        'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum. Thyroid, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28056690/',
    },
  ],
};
