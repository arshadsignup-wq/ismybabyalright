import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'croup-baby',
  title: 'My Baby Has Croup',
  category: 'medical',
  searchTerms: [
    'baby croup',
    'barking cough baby',
    'croup treatment baby',
    'baby sounds like seal',
    'stridor baby',
    'croup how long does it last',
    'croup home remedies',
    'baby croup emergency',
    'croup vs RSV',
    'croup worse at night',
  ],
  quickAnswer:
    'Croup is a viral infection that causes a distinctive barking cough and sometimes noisy breathing, especially at night. Most cases are mild and can be managed at home with cool mist and comfort. However, if your baby is struggling to breathe, making high-pitched sounds when inhaling, or can\'t settle, seek immediate medical care.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Croup is less common in babies under 6 months, so any barking cough or noisy breathing in a young infant warrants a same-day medical evaluation. Young babies have smaller airways and can develop breathing difficulty more quickly. Your doctor may prescribe steroids or monitor your baby closely.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Croup typically starts with cold symptoms and then develops into a distinctive seal-like barking cough, often worse at night or with crying. Your baby may have stridor (a high-pitched noise when breathing in). Cool mist from a humidifier or steam from a hot shower (with you holding your baby safely outside the shower) can help. Contact your pediatrician for guidance, as babies this age may need steroids.',
    },
    {
      ageRange: '1-2 years',
      context:
        'This is a common age for croup. Most cases improve in 3-5 days. Your toddler\'s cough may sound worse than it is, especially at night. Keep them calm, use a cool mist humidifier, and offer fluids. Crying can make breathing harder, so comfort is key. If your child is working hard to breathe or has stridor at rest, seek medical care.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Croup is still common in this age group. Your child might say their throat hurts or that it\'s hard to breathe. Watch for signs of respiratory distress: flaring nostrils, visible ribs or belly moving excessively with breathing, or pale/blue lips. Most cases are mild, but don\'t hesitate to call your pediatrician if you\'re worried.',
    },
    {
      ageRange: '3 years+',
      context:
        'Croup becomes less common as children get older. If your older child has barking cough and stridor, it\'s still likely croup, but your pediatrician may want to rule out other causes. Treatment is the same: comfort, cool mist, and monitoring for breathing difficulty.',
    },
  ],
  whenNormal: [
    'Your child has a barking cough but is breathing comfortably when calm',
    'The cough is worse at night but your child can sleep with a humidifier',
    'Your child is drinking fluids, making wet diapers, and has some energy during the day',
    'The barking cough improves after a few minutes of cool mist or going outside in cool air',
    'Your child had a mild cold for a day or two before the barking cough started',
  ],
  whenToMention: [
    'Your child has a barking cough and you want guidance on home care',
    'Your child seems more tired than usual or is eating less than normal',
    'The croup symptoms haven\'t improved after 3-4 days',
    'Your child has a fever lasting more than 3 days',
  ],
  whenToActNow: [
    'Your child is struggling to breathe, with visible chest pulling in or flaring nostrils',
    'Your child makes a high-pitched noise (stridor) even when calm and at rest',
    'Your child\'s lips or skin turn blue or pale',
    'Your child is drooling, can\'t swallow, or refuses all fluids',
    'Your baby is under 3 months with any barking cough or noisy breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Croup and Your Young Child. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Croup.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Colds: Protect Yourself and Others. CDC, 2023.',
      url: 'https://www.cdc.gov/common-cold/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breathing Problems. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Breathing-Problems.aspx',
    },
  ],
};
