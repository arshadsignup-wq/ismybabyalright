import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bronchiolitis-baby',
  title: 'My Baby Has Bronchiolitis',
  category: 'medical',
  searchTerms: [
    'baby bronchiolitis',
    'bronchiolitis symptoms baby',
    'bronchiolitis treatment',
    'baby wheezing',
    'bronchiolitis vs RSV',
    'how long does bronchiolitis last',
    'bronchiolitis home care',
    'bronchiolitis emergency',
    'baby breathing fast',
    'bronchiolitis recovery',
  ],
  quickAnswer:
    'Bronchiolitis is inflammation of the small airways in the lungs, usually caused by RSV or other viruses. It\'s common in babies under 1 year and typically peaks around days 3-5 before improving. Most babies recover at home with supportive care, but watch for signs of breathing difficulty like fast breathing, chest retractions, or trouble feeding.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are most vulnerable to severe bronchiolitis. What starts as a runny nose can quickly progress to fast, difficult breathing and wheezing. Babies this age have tiny airways that swell easily. Contact your pediatrician at the first sign of cold symptoms, and seek immediate care if your baby is breathing fast, grunting, or feeding poorly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Bronchiolitis usually starts with a few days of cold symptoms before breathing becomes more labored. You may hear wheezing or rattling in your baby\'s chest. The worst symptoms typically occur on days 3-5. Your baby may need smaller, more frequent feeds due to breathing difficulty. Most improve at home with rest, hydration, and close monitoring.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While still concerning, babies this age generally handle bronchiolitis better than younger infants. Expect 7-10 days of illness, with the cough often lasting 2-3 weeks. Use a cool mist humidifier, keep your baby upright, and offer frequent fluids. Call your doctor if breathing becomes labored, feeding drops significantly, or wet diapers decrease.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Bronchiolitis is less common after 1 year but can still occur. Your toddler may have significant coughing and wheezing but typically maintains better oxygen levels than younger babies. The illness may be labeled as a "wheezy bronchitis" or viral wheeze. Home care includes rest, fluids, and monitoring breathing effort.',
    },
    {
      ageRange: '2 years+',
      context:
        'By age 2, most children have larger airways and are less likely to develop bronchiolitis. If wheezing occurs with viral illnesses, your pediatrician may consider other diagnoses like reactive airway disease or asthma. Treatment may include breathing treatments or inhalers, different from typical bronchiolitis management.',
    },
  ],
  whenNormal: [
    'Your baby has been diagnosed with bronchiolitis and is being monitored at home by your pediatrician',
    'Your baby is breathing comfortably when calm, even if you hear congestion or mild wheezing',
    'Your baby is taking smaller feeds more frequently but is staying hydrated with regular wet diapers',
    'The illness is gradually improving after peaking around days 3-5',
    'Your baby has some energy and can smile or interact, even if more tired than usual',
  ],
  whenToMention: [
    'Your baby\'s symptoms haven\'t improved by day 7-10',
    'Your baby is eating less than half of normal feeds for more than 24 hours',
    'The cough is still severe after 2 weeks',
    'Your baby has a fever that comes back after being gone for a day or more',
    'You\'re worried about your baby\'s breathing but unsure if it warrants emergency care',
  ],
  whenToActNow: [
    'Your baby is breathing very fast (over 60 breaths per minute for infants, over 50 for older babies when calm)',
    'Your baby\'s chest is pulling in sharply with each breath or nostrils are flaring',
    'Your baby\'s lips, tongue, or skin turn blue or very pale',
    'Your baby has pauses in breathing or very irregular breathing',
    'Your baby refuses to eat or drink for several hours and is having fewer wet diapers',
    'Your baby is extremely lethargic, difficult to wake, or unresponsive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bronchiolitis. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Bronchiolitis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Bronchiolitis. CDC, 2023.',
      url: 'https://www.cdc.gov/rsv/high-risk/infants-young-children.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breathing Problems. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Breathing-Problems.aspx',
    },
  ],
};
