import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'necrotizing-enterocolitis-signs',
  title: 'Necrotizing Enterocolitis (NEC) Signs in Babies',
  category: 'medical',
  searchTerms: [
    'necrotizing enterocolitis baby',
    'NEC signs premature baby',
    'NEC symptoms baby',
    'baby bloody stool NICU',
    'NEC preemie',
    'baby swollen belly blood in stool',
    'necrotizing enterocolitis prevention',
    'NEC breast milk formula',
    'premature baby intestine infection',
  ],
  quickAnswer:
    'Necrotizing enterocolitis (NEC) is a serious intestinal disease that primarily affects premature infants, occurring in about 1 in 1,000 live births but in up to 5-10% of very low birth weight babies in the NICU. It involves inflammation and potentially death of intestinal tissue. Breast milk significantly reduces the risk of NEC. Early recognition and treatment are critical — most babies with NEC recover, though severe cases may require surgery.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'NEC typically occurs in the first 2-6 weeks of life in premature babies, often after feedings have been started. Warning signs include a distended (bloated) and tender abdomen, feeding intolerance (increased residuals, vomiting), bloody stools, lethargy, temperature instability, and apnea/bradycardia episodes. In the NICU setting, abdominal X-rays showing air in the intestinal wall (pneumatosis intestinalis) confirm the diagnosis. Treatment involves stopping feeds, antibiotics, and careful monitoring; severe cases require surgery.',
    },
    {
      ageRange: '3-6 months',
      context:
        'NEC is rare in this age group but can occur in term or near-term babies, particularly those with congenital heart disease or other conditions that reduce blood flow to the intestines. Full-term babies who develop NEC tend to present earlier (first 1-2 weeks of life). If your baby was premature and recovered from NEC, this is a period of recovery, reintroduction of feeds, and monitoring for complications like intestinal strictures.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies who survived NEC may face ongoing challenges including intestinal strictures (narrowing), short bowel syndrome (if significant intestine was removed), and feeding difficulties. Some babies may need specialized nutrition or parenteral (IV) nutrition for an extended period. Growth and nutritional status should be closely monitored. Most babies adapt well over time as their remaining intestine grows and adapts.',
    },
    {
      ageRange: '12 months+',
      context:
        'Long-term outcomes for NEC survivors depend on the severity of the initial disease and whether surgery was needed. Many children recover fully with normal intestinal function. Those with short bowel syndrome may require long-term nutritional support but can gradually transition to full oral feeding as intestinal adaptation occurs. Developmental follow-up is important, as premature babies who had NEC have a higher risk of neurodevelopmental challenges.',
    },
  ],
  whenNormal: [
    'Your premature baby is tolerating breast milk feedings well with no abdominal distension or bloody stools',
    'Your baby recovered from NEC and is now feeding and growing well',
    'Your NICU baby has occasional feeding intolerance that resolves quickly — this is common in preemies and not necessarily NEC',
    'Your baby passed a small amount of blood-streaked stool once, which was evaluated and found to be benign',
  ],
  whenToMention: [
    'Your premature baby is having increasing difficulty tolerating feeds, with more residuals or spitting up',
    'Your baby\'s abdomen appears more distended or bloated than usual',
    'Your baby who had NEC has new feeding difficulties, vomiting, or abdominal distension that could indicate a stricture',
  ],
  whenToActNow: [
    'Your baby has a distended, discolored abdomen with bloody stools, lethargy, and temperature instability — NEC can progress rapidly and needs immediate treatment',
    'Your baby appears acutely ill with abdominal distension, is not responding normally, or has signs of sepsis (fever or low temperature, rapid breathing, poor color)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Necrotizing Enterocolitis. NICHD, 2023.',
      url: 'https://www.nichd.nih.gov/health/topics/nec',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
  ],
};
