import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-coughing-at-night',
  title: 'My Baby Coughs Mostly at Night',
  category: 'medical',
  searchTerms: [
    'baby coughing at night',
    'baby nighttime cough',
    'baby cough worse at night',
    'baby croup cough night',
    'baby cough lying down',
    'baby cough only at night',
    'toddler night cough',
    'baby barking cough at night',
    'baby cough disrupting sleep',
    'why does baby cough more at night',
  ],
  quickAnswer:
    'Nighttime coughing in babies is very common and often worse than daytime coughing because lying down allows mucus to pool in the back of the throat, and cool night air can irritate sensitive airways. The most common causes are colds with postnasal drip, croup, and asthma or reactive airways. While usually manageable at home, a barking cough with stridor (noisy breathing in) or any breathing difficulty at night needs prompt evaluation.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies who cough primarily at night may be dealing with nasal congestion and postnasal drip from a cold. Because infants are obligate nose breathers, congestion can significantly disrupt sleep and feeding. Using saline nose drops and gentle bulb suctioning before sleep can help. Reflux (GERD) can also cause nighttime coughing in young babies, as stomach acid irritates the throat when lying flat. If your baby is frequently coughing, choking, or arching during or after night feeds, discuss reflux with your pediatrician.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Croup is a classic cause of nighttime barking cough in this age group. The hallmark is a sudden onset of a seal-like barking cough, often accompanied by stridor (a harsh sound when breathing in). Croup is caused by viral inflammation of the upper airway and is typically worse at night and in cold air. Cool mist from a humidifier or brief exposure to cool night air often helps. Postnasal drip from colds remains the most common overall cause of nighttime coughing at this age.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'In addition to cold-related coughing, nighttime cough in toddlers may signal reactive airway disease or early asthma, especially if triggered by colds, exercise, or allergen exposure. Enlarged adenoids can also cause nighttime coughing along with snoring and mouth breathing. If your toddler has a recurring nighttime cough pattern, especially with wheezing, your pediatrician may trial asthma medications to see if they help.',
    },
  ],
  whenNormal: [
    'Nighttime cough during a cold that is worse for the first 2-3 nights then gradually improves',
    'Occasional coughing when lying down that resolves with position change or after clearing mucus',
    'Your baby is breathing comfortably between cough episodes and is sleeping reasonably well overall',
    'A brief croup episode that responds to cool mist or cool air and the child is comfortable between coughing bouts',
  ],
  whenToMention: [
    'Nighttime coughing persists for more than 2-3 weeks or keeps recurring with every cold',
    'Your baby has nighttime coughing along with chronic snoring, mouth breathing, or restless sleep, which may suggest enlarged adenoids',
    'You notice wheezing or a whistling sound when your baby breathes out during coughing episodes',
  ],
  whenToActNow: [
    'Your baby has stridor (a harsh noise when breathing in) that continues even when calm and at rest, severe chest retractions, drooling with inability to swallow, or blue color around the lips  -  this indicates significant airway obstruction and requires emergency care',
    'Your baby is working hard to breathe between coughing episodes, refusing feeds, or appears excessively sleepy or difficult to arouse  -  seek immediate medical attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Croup Treatment and When to Seek Emergency Care.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Croup-Treatment.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Children and Colds.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Croup: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/croup/symptoms-causes/syc-20350348',
    },
  ],
};
