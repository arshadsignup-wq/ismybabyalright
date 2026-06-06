import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-thyroid-issues',
  title: 'Thyroid Problems in Pregnancy',
  category: 'maternal',
  searchTerms: ['thyroid pregnancy', 'hypothyroidism pregnancy', 'hyperthyroidism pregnant', 'thyroid medication pregnancy', 'TSH levels pregnancy', 'Hashimoto\'s pregnancy', 'Graves disease pregnancy', 'thyroid test pregnant', 'levothyroxine pregnancy', 'thyroid affects baby'],
  quickAnswer: 'Thyroid disorders are the second most common endocrine condition in pregnancy. Both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid) can affect pregnancy outcomes if untreated. Proper monitoring and treatment ensure healthy outcomes for both parent and baby. If you have a known thyroid condition, medication adjustments are often needed during pregnancy.',
  byAge: [
    { ageRange: 'First trimester', context: 'Thyroid hormone is critical for fetal brain development, especially in the first trimester before the baby\'s thyroid develops. If you take thyroid medication, your dose often needs to increase by 25-50% early in pregnancy. Your provider will monitor TSH levels closely. hCG (pregnancy hormone) naturally stimulates the thyroid, so mild hyperthyroid symptoms may be normal.' },
    { ageRange: 'Second trimester', context: 'Thyroid levels may stabilize as hCG levels decrease. Your provider will continue monitoring with blood tests every 4-6 weeks. Symptoms of hypothyroidism (fatigue, weight gain, constipation) can overlap with normal pregnancy symptoms, making monitoring important.' },
    { ageRange: 'Third trimester', context: 'Thyroid medication may need further adjustment in the third trimester. Uncontrolled hypothyroidism increases risks of preeclampsia, placental abruption, and preterm birth. Uncontrolled hyperthyroidism can cause fetal growth restriction and heart problems. Proper treatment significantly reduces these risks.' },
    { ageRange: 'Postpartum', context: 'Thyroid medication doses often need to be reduced back to pre-pregnancy levels after delivery. Postpartum thyroiditis (new thyroid inflammation after birth) occurs in about 5-10% of new parents and can mimic postpartum depression. Thyroid screening is recommended if postpartum mood symptoms do not respond to treatment.' },
  ],
  whenNormal: ['Mild thyroid fluctuations detected on routine blood work that respond to medication adjustment', 'Pregnancy symptoms that overlap with thyroid symptoms (fatigue, heat intolerance)'],
  whenToMention: ['You have a known thyroid condition and are pregnant or planning pregnancy', 'You are experiencing extreme fatigue, weight changes, or heart palpitations beyond normal pregnancy', 'You have a family history of thyroid disease'],
  whenToActNow: ['Severe palpitations, tremor, or rapid heart rate suggesting thyroid storm (rare but dangerous)', 'Symptoms of severe hypothyroidism: extreme fatigue, confusion, hypothermia'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Thyroid Disease in Pregnancy. ACOG Practice Bulletin No. 223, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/04/thyroid-disease-in-pregnancy' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Thyroid Disease & Pregnancy. NIDDK, 2023.', url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/pregnancy-thyroid-disease' },
    { org: 'March of Dimes', citation: 'March of Dimes. Thyroid Conditions During Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/thyroid-conditions-during-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['postpartum-thyroiditis', 'pregnancy-fatigue-extreme'],
};
