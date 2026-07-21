import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'homocystinuria-baby',
  title: 'Homocystinuria in Babies',
  category: 'medical',
  searchTerms: [
    'homocystinuria baby',
    'homocystinuria infant signs',
    'baby lens dislocation homocystinuria',
    'baby tall thin marfanoid',
    'homocystinuria newborn screening',
    'baby blood clot risk genetic',
    'cystathionine beta synthase deficiency baby',
    'baby B6 responsive homocystinuria',
    'homocysteine elevated baby',
    'baby amino acid disorder methionine',
  ],
  quickAnswer:
    'Homocystinuria is an inherited amino acid disorder, most commonly caused by deficiency of the enzyme cystathionine beta-synthase (CBS), affecting about 1 in 200,000 to 335,000 newborns worldwide. It leads to a buildup of homocysteine and methionine in the blood, which can damage the eyes (lens dislocation), skeleton (tall, thin build with long limbs), brain (intellectual disability), and blood vessels (increased clotting risk). About half of affected individuals have a B6 (pyridoxine)-responsive form, which has a milder course. With early detection and treatment through diet and medication, outcomes are significantly improved.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Homocystinuria is included in newborn screening programs in many states, detected through elevated methionine levels on dried blood spots. Affected newborns typically appear normal at birth and show no obvious symptoms in the first few months. If newborn screening is positive, confirmatory testing with plasma amino acids and total homocysteine levels is performed urgently. Early initiation of treatment (methionine-restricted diet and pyridoxine trial) can prevent many of the long-term complications.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Babies with homocystinuria generally continue to appear healthy in this period if treatment has been started. Without treatment, subtle signs may begin: poor weight gain, mild developmental delays, or fussiness. A pyridoxine (vitamin B6) responsiveness trial is typically conducted early — about 50% of patients have the B6-responsive form, which is generally milder and more responsive to treatment. B6-responsive patients may need less dietary restriction.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental delays may become apparent in untreated children, particularly in motor milestones. The characteristic skeletal features (long limbs, thin body habitus) are not yet obvious at this age. Eye lens dislocation (ectopia lentis), one of the hallmark findings, typically does not occur until after age 2-3, but regular ophthalmologic examinations should begin early. Treated babies who maintain good metabolic control generally develop normally during this period.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Without treatment, complications become more apparent: developmental delays, lens dislocation (usually detected between ages 2-10), skeletal changes including osteoporosis and a marfanoid body habitus, and a significantly elevated risk of thromboembolic events (blood clots). Children on treatment with a methionine-restricted diet, pyridoxine (if responsive), betaine, folate, and vitamin B12 can have markedly better outcomes. Regular monitoring of plasma homocysteine and methionine levels guides treatment adjustments.',
    },
  ],
  whenNormal: [
    'Your baby was detected through newborn screening, treatment has been started, and metabolic levels are well controlled',
    'Your baby is meeting developmental milestones on schedule while on treatment',
    'Your baby\'s ophthalmologic examinations show normal lens position',
    'Your baby has the B6-responsive form and homocysteine levels are well controlled with pyridoxine',
  ],
  whenToMention: [
    'Your baby\'s newborn screening showed elevated methionine and you are awaiting or have received confirmatory results',
    'Your child on treatment has developmental delays or is not meeting milestones as expected',
    'Your child has any changes in vision, such as squinting, head tilting, or sensitivity to light',
    'You have questions about dietary management or adherence to the methionine-restricted diet',
  ],
  whenToActNow: [
    'Your child develops sudden leg pain, swelling, or redness, or sudden difficulty breathing — these may indicate a blood clot and require emergency evaluation',
    'Your child has a sudden change in vision (indicating possible lens dislocation) — seek urgent ophthalmologic evaluation',
    'Your child is having seizures, severe headache, or sudden neurological changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-screening-abnormal-results', 'baby-metabolic-disorder-signs'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Homocystinuria Due to Cystathionine Beta-Synthase Deficiency. GeneReviews, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Homocystinuria. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/homocystinuria/',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics and Genomics. ACT Sheet: Elevated Methionine. ACMG, 2023.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
};
