import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-reflux-medication-concerns',
  title: 'Reflux Medication Worries for Baby',
  category: 'digestive',
  searchTerms: [
    'baby reflux medication',
    'baby reflux medicine safe',
    'baby reflux omeprazole',
    'baby reflux ranitidine',
    'baby acid reflux treatment medicine',
    'should baby take reflux medicine',
    'baby reflux PPI concerns',
    'baby reflux medication side effects',
    'baby reflux medicine how long',
    'infant reflux antacid',
  ],
  quickAnswer:
    'Reflux medications like proton pump inhibitors (PPIs) are sometimes necessary for babies with severe GERD, but they are overprescribed for normal infant reflux. Most spitting up does not need medication. When truly needed, medications like omeprazole are safe for short-term use under medical supervision. Discuss the risks and benefits with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Reflux medications are rarely needed at this age because most spitting up is normal physiological reflux. If your baby has true GERD with poor weight gain, feeding refusal, or signs of esophagitis, your pediatrician may recommend a trial of acid-suppressing medication. The goal is to treat real discomfort, not normal spit-up.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If reflux is significantly affecting your baby\'s feeding, weight gain, or quality of life, medication may be appropriate. PPIs like omeprazole are the most commonly used. A 2 to 4 week trial is typical to see if symptoms improve. If there is no improvement, the diagnosis should be reconsidered.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As reflux naturally improves, many babies can be weaned off medication. Your pediatrician may suggest a trial off medication around 6 to 9 months to see if symptoms return. Most babies no longer need reflux medication by their first birthday.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler still needs reflux medication, a pediatric gastroenterologist evaluation may be appropriate to investigate for other causes like eosinophilic esophagitis or cow\'s milk allergy. Long-term PPI use in children is generally safe but should be at the lowest effective dose.',
    },
  ],
  whenNormal: [
    'Your baby spits up but is happy, growing well, and does not need medication',
    'Mild reflux that is managed effectively with positioning and feeding changes alone',
  ],
  whenToMention: [
    'You have concerns about starting or continuing reflux medication for your baby',
    'You want to discuss whether your baby truly needs medication or whether conservative measures are sufficient',
    'Your baby is on reflux medication and you want to discuss weaning off',
  ],
  whenToActNow: [
    'Your baby is having side effects from reflux medication such as persistent diarrhea, rash, or irritability',
    'Symptoms worsen significantly despite medication, suggesting another diagnosis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastroesophageal Reflux Management. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-1061/37422/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Acid Reflux (GER & GERD) in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Spitting Up in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Spitting-Up-Reflux.aspx',
    },
  ],
  relatedConcernSlugs: ['reflux', 'baby-acid-reflux-silent', 'baby-reflux-vs-gerd-difference'],
};
