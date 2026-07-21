import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'adrenoleukodystrophy-baby',
  title: 'Adrenoleukodystrophy (ALD) in Babies',
  category: 'medical',
  searchTerms: [
    'adrenoleukodystrophy baby',
    'ALD baby boy',
    'X-linked adrenoleukodystrophy infant',
    'baby adrenal insufficiency ALD',
    'cerebral ALD boy early signs',
    'Lorenzo oil ALD',
    'newborn screening ALD',
    'ALD stem cell transplant baby',
    'baby very long chain fatty acids elevated',
    'ALD brain demyelination boy',
  ],
  quickAnswer:
    'X-linked adrenoleukodystrophy (X-ALD) is a genetic disorder affecting about 1 in 17,000 newborns, caused by mutations in the ABCD1 gene on the X chromosome. It primarily affects boys and impairs the breakdown of very long-chain fatty acids (VLCFAs), which accumulate and damage the myelin sheath in the brain and the adrenal glands. The most severe form, cerebral ALD, typically affects boys between ages 4-10 with rapid neurological decline. Newborn screening now enables early detection, and hematopoietic stem cell transplant or gene therapy performed before significant brain involvement can be life-saving.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'ALD is increasingly detected through newborn screening, which measures elevated C26:0-lysophosphatidylcholine (C26:0-LPC) in dried blood spots. Boys identified through newborn screening typically appear completely healthy. Confirmatory testing includes plasma VLCFA levels and ABCD1 genetic testing. If confirmed, boys are placed on a monitoring schedule with regular MRI scans and adrenal function testing. Early identification is crucial because intervention before brain disease appears yields the best outcomes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Boys with ALD detected by newborn screening continue to develop normally during infancy. There are typically no neurological symptoms at this age. However, adrenal insufficiency (Addison disease) can occasionally present in infancy with vomiting, poor feeding, skin darkening, salt craving, or adrenal crisis during illness. Baseline adrenal function (cortisol and ACTH levels) should be checked. If adrenal insufficiency is present, cortisol replacement therapy is started.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with ALD remain neurologically normal. Adrenal function should be monitored at least annually, as adrenal insufficiency can develop at any age and often precedes neurological symptoms. MRI surveillance (typically every 6-12 months) watches for the earliest signs of cerebral demyelination. If early MRI changes appear, referral for hematopoietic stem cell transplant or gene therapy (elivaldogene autotemcel/Skysona) is urgent, as these treatments work best before symptoms appear.',
    },
    {
      ageRange: '3+ years',
      context:
        'The highest-risk period for cerebral ALD onset is between ages 4-10. Early signs include behavioral changes, school difficulties, vision problems, or difficulty with coordination. MRI monitoring remains essential. If MRI shows early cerebral involvement (Loes score 0.5-9), stem cell transplant or gene therapy should be considered urgently. Lorenzo\'s Oil (a mixture of oleic and erucic acids) may lower VLCFA levels but has not been proven to prevent cerebral disease. Ongoing adrenal monitoring and cortisol replacement if needed are lifelong requirements.',
    },
  ],
  whenNormal: [
    'Your boy was identified through newborn screening, is developing normally, and MRIs show no brain changes',
    'Your boy\'s adrenal function is normal or is well managed with cortisol replacement',
    'Your boy is on regular MRI surveillance and all scans have been stable',
    'Your boy received a stem cell transplant or gene therapy early and neurological function is preserved',
  ],
  whenToMention: [
    'Your son\'s newborn screening was positive for ALD and you are awaiting or have received confirmatory results',
    'Your boy with ALD has increasing fatigue, skin darkening, salt craving, or vomiting that may indicate adrenal insufficiency',
    'Your boy with ALD has any behavioral changes, difficulty in school, or changes in coordination or vision',
  ],
  whenToActNow: [
    'Your boy with known ALD has vomiting, extreme weakness, confusion, or collapse — this may indicate adrenal crisis, which is life-threatening and requires emergency cortisol injection and immediate medical care',
    'Your boy has rapid behavioral or neurological changes (vision loss, difficulty walking, personality change) — urgent MRI and neurology evaluation are needed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-screening-abnormal-results', 'baby-developmental-regression-signs'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. X-Linked Adrenoleukodystrophy. GeneReviews, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1315/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. X-Linked Adrenoleukodystrophy. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/x-linked-adrenoleukodystrophy/',
    },
    {
      org: 'ALD Alliance',
      citation:
        'ALD Alliance. Understanding ALD: Information for Families. ALD Alliance, 2024.',
      url: 'https://aldalliance.org/',
    },
  ],
};
