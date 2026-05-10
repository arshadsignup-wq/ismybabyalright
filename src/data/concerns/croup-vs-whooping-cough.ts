import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'croup-vs-whooping-cough',
  title: 'Croup vs Whooping Cough',
  category: 'medical',
  searchTerms: [
    'croup vs whooping cough',
    'baby barky cough',
    'croup symptoms baby',
    'whooping cough baby signs',
    'pertussis vs croup',
    'baby cough sounds like seal',
    'barky cough toddler',
    'whooping cough infant symptoms',
    'croup or pertussis baby',
  ],
  quickAnswer:
    'Croup and whooping cough (pertussis) are both respiratory infections that cause distinctive coughs in children, but they are different illnesses. Croup causes a characteristic barky "seal-like" cough with stridor and usually lasts 3-5 days. Whooping cough causes prolonged coughing fits followed by a "whoop" sound when gasping for air and can last weeks to months. Croup is usually mild and managed at home, while pertussis can be dangerous in young babies and requires antibiotics.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Croup is uncommon in babies under 6 months. However, whooping cough is most dangerous in this age group. Young infants with pertussis may not make the classic "whoop" sound -- instead, they may have coughing spells followed by apnea (pauses in breathing), turning blue, or vomiting. Pertussis in unvaccinated or under-vaccinated young infants can be life-threatening. If your young baby has a persistent cough with any breathing pauses, seek immediate medical care.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Croup becomes more possible at this age. It typically starts with cold symptoms, then develops a barky cough and possibly stridor (noisy breathing) that worsens at night. Cool mist and sitting in a steamy bathroom can help mild croup. Whooping cough at this age starts with 1-2 weeks of cold-like symptoms, then progresses to severe coughing fits that can cause choking, vomiting, or exhaustion. Your baby should be up to date on DTaP vaccination.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Croup is most common between 6 months and 3 years. The barky cough, hoarse voice, and stridor are usually worst on the second or third night, then improve. Croup rarely lasts more than a week. Whooping cough, by contrast, can cause coughing fits for 6-10 weeks (the "hundred-day cough"). The cough is typically worse at night and can be triggered by feeding, crying, or activity. Between coughing spells, the child may seem relatively normal.',
    },
    {
      ageRange: '12 months+',
      context:
        'Croup remains common in toddlers and typically causes a distinctive seal-like bark, hoarseness, and worsening symptoms at night. Most cases resolve in 3-5 days. Severe croup with persistent stridor at rest may require oral dexamethasone or nebulized epinephrine in the emergency department. Whooping cough in vaccinated toddlers tends to be milder but can still cause prolonged coughing fits. A nasal swab PCR test can confirm pertussis.',
    },
  ],
  whenNormal: [
    'Toddler has a barky cough that is worse at night but improves during the day with no breathing difficulty',
    'Croup symptoms improve with cool air or steam and child can drink fluids comfortably',
    'Cough from a cold is getting better after 7-10 days',
    'Child has a brief coughing spell during a cold but recovers quickly and breathes normally between episodes',
  ],
  whenToMention: [
    'Barky cough lasts more than 5 days or recurs frequently',
    'Child has persistent coughing fits lasting more than 2 weeks, especially with vomiting or a "whoop" sound',
    'Your baby or toddler has been exposed to someone with confirmed pertussis',
  ],
  whenToActNow: [
    'Baby has stridor (noisy breathing) at rest that does not improve with cool air or steam',
    'Baby turns blue, stops breathing, or becomes extremely lethargic during a coughing spell -- call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Croup Treatment and Symptoms. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Croup-Treatment.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Pertussis (Whooping Cough): Signs and Symptoms. CDC.',
      url: 'https://www.cdc.gov/pertussis/about/signs-symptoms.html',
    },
  ],
};
