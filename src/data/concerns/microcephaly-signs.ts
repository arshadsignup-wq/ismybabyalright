import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'microcephaly-signs',
  title: 'My Baby\'s Head Seems Too Small (Microcephaly)',
  category: 'medical',
  searchTerms: [
    'baby small head',
    'microcephaly baby',
    'baby head circumference small',
    'baby head not growing',
    'baby head below percentile',
    'baby brain not growing',
    'small head circumference baby',
    'microcephaly causes',
    'baby head size concerns',
    'baby head growth slow',
  ],
  quickAnswer:
    'A baby\'s head circumference is measured at every well-child visit to track brain growth. A head that is smaller than expected does not always mean there is a problem  -  genetics play a major role, and some families naturally have smaller head sizes. However, if the head circumference is significantly below normal or is falling off its growth curve, your pediatrician will want to investigate further.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Head circumference is measured at birth and compared to gestational age. Microcephaly is defined as a head circumference more than 2 standard deviations below the mean for age and sex. Primary (congenital) microcephaly is present at birth and can result from genetic conditions, prenatal infections (such as Zika, CMV, or toxoplasmosis), or prenatal exposure to alcohol or certain medications. Molding from birth can temporarily affect measurements, so repeat measurements are important.',
    },
    {
      ageRange: '1-6 months',
      context:
        'During the first year, the brain grows rapidly, and head circumference should increase at a predictable rate. If the head circumference is tracking along a low but consistent percentile, and the baby is developing normally, this may simply reflect familial (genetic) patterns  -  measuring parents\' head circumferences can be informative. However, if the head circumference is crossing percentile lines downward, this suggests the brain growth is slowing and warrants evaluation with imaging and possibly genetic testing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Secondary (acquired) microcephaly develops after birth and involves a head circumference that was initially normal but has progressively fallen below expected levels. This can be caused by oxygen deprivation, infections (such as meningitis), metabolic disorders, or genetic conditions that manifest later. Your pediatrician will track the growth curve carefully. If developmental delays are also present, a comprehensive evaluation including brain imaging (MRI), genetic testing, and developmental assessment is important.',
    },
    {
      ageRange: '12 months+',
      context:
        'Head growth continues but at a slower rate after the first year. If your child has confirmed microcephaly, the focus shifts to supporting development and addressing any associated conditions. Many children with mild microcephaly develop normally or with minimal issues, while severe cases may be associated with intellectual disability, seizures, or other neurological challenges. Early intervention services can be extremely beneficial.',
    },
  ],
  whenNormal: [
    'Your baby\'s head circumference is below average but tracking consistently along its percentile curve',
    'Both parents have smaller than average head sizes (familial microcephaly)',
    'Your baby is meeting developmental milestones on time and is otherwise healthy',
    'A single measurement was low but subsequent measurements show normal growth velocity',
  ],
  whenToMention: [
    'Your baby\'s head circumference has crossed downward across two or more percentile lines on the growth chart',
    'You are concerned that your baby\'s head looks disproportionately small compared to their body',
    'Your baby has developmental delays or unusual neurological symptoms along with a small head',
  ],
  whenToActNow: [
    'Your baby\'s head circumference suddenly stops growing or decreases, especially if accompanied by seizures, excessive irritability, feeding difficulties, or loss of previously acquired skills',
    'Your newborn\'s head circumference is more than 3 standard deviations below the mean, as this warrants urgent brain imaging and evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts About Microcephaly.',
      url: 'https://www.cdc.gov/birth-defects/about/microcephaly.html',
    },
    {
      org: 'AAP',
      citation:
        'Ashwal S, et al. Practice Parameter: Evaluation of the Child with Microcephaly. Neurology, 2009.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/Microcephaly.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Microcephaly Fact Sheet.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/microcephaly',
    },
  ],
};
