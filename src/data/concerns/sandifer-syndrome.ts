import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sandifer-syndrome',
  title: 'My Baby Arches and Twists During or After Feeding',
  category: 'medical',
  searchTerms: [
    'sandifer syndrome baby',
    'baby arching back after feeding seizure',
    'baby twisting neck during feeds',
    'baby dystonic posturing reflux',
    'baby head turning spasms',
    'baby arching and stiffening not seizure',
    'sandifer syndrome vs seizures',
    'baby neck twisting episodes',
    'baby torticollis with reflux',
    'infant spasms after eating',
  ],
  quickAnswer:
    'Sandifer syndrome is a condition where babies have episodes of abnormal head, neck, and back arching movements that are linked to gastroesophageal reflux (GERD). These episodes can look frightening and are often mistaken for seizures, but they are actually a reflex response to acid reflux pain. The condition resolves once the underlying reflux is treated, typically by age 2.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Sandifer syndrome can begin in the early months as reflux becomes apparent. You may notice your baby suddenly arching their back, twisting their head to one side, and stiffening during or shortly after feeds. Episodes typically last 1-3 minutes and can happen multiple times a day. The movements are your baby\'s involuntary response to the discomfort of acid in the esophagus.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Episodes may continue or worsen as your baby becomes more active. The key distinguishing features from seizures are that Sandifer episodes are almost always associated with feeding times, never occur during sleep, and your baby remains fully conscious throughout. Your baby may also show other reflux signs like spitting up, fussiness, or feeding refusal.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As reflux typically improves with age and dietary changes, Sandifer syndrome episodes usually decrease and eventually stop. If your toddler continues to have these episodes, your doctor may recommend further evaluation of the reflux or consider whether an alternative diagnosis is needed.',
    },
  ],
  whenNormal: [
    'Your baby occasionally arches their back when fussy or frustrated — this is a common way babies express discomfort',
    'Your baby stretches or stiffens briefly during a diaper change or when excited',
    'Mild spitting up after feeds without associated abnormal posturing',
  ],
  whenToMention: [
    'Your baby has repeated episodes of back arching, head turning, or neck twisting that seem to occur around feeding times',
    'You are unsure whether the movements you are seeing are seizures or something related to feeding',
    'Your baby is also showing signs of significant reflux such as frequent vomiting, feeding refusal, or poor weight gain',
  ],
  whenToActNow: [
    'Your baby has episodes of stiffening, jerking, or abnormal movements that occur during sleep or are not related to feeding',
    'Your baby loses consciousness, stops breathing, or changes color during an episode',
    'The episodes are increasing in frequency or your baby is not feeding or gaining weight adequately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sandifer Syndrome. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK559242/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastroesophageal Reflux in Infants. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/1/e20181061/37459',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Sandifer Syndrome: Symptoms, Causes & Treatment.',
      url: 'https://my.clevelandclinic.org/health/diseases/24513-sandifer-syndrome',
    },
  ],
};
