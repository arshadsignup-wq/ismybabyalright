import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'secondary-infections-after-illness',
  title: 'Secondary Infections After a Cold or Flu',
  category: 'medical',
  searchTerms: [
    'baby got worse after cold',
    'secondary infection baby',
    'baby ear infection after cold',
    'baby pneumonia after cold',
    'baby fever came back after cold',
    'baby sicker after seeming better',
    'toddler infection after virus',
    'bacterial infection after cold baby',
    'baby relapse after illness',
  ],
  quickAnswer:
    'A secondary infection occurs when bacteria take advantage of the inflammation and mucus caused by a viral illness like a cold or flu. The classic pattern is a child who seems to be improving and then gets worse again, often with a new or returning fever. The most common secondary infections in young children are ear infections, sinus infections, and pneumonia.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Secondary infections in very young babies can be difficult to distinguish from the original illness and can become serious quickly. If your newborn seemed to be improving from a cold and then develops a new fever, increased fussiness, poor feeding, or changes in breathing, seek medical evaluation promptly. Do not wait to see if it resolves on its own at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Ear infections are the most common secondary infection at this age. Watch for a baby who was getting better from a cold but then becomes fussier, develops a new fever, has trouble sleeping (especially lying flat), or tugs at their ears. Sinus infections are less common in this age group because the sinuses are not yet fully developed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a peak age for ear infections following colds, partly because the Eustachian tubes are short and horizontal, making fluid drainage difficult. Signs include new fever after improvement, ear pulling, irritability especially when lying down, and sometimes drainage from the ear. Secondary pneumonia may present as a worsening cough, fast breathing, or fever returning after a few days of improvement.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may develop ear infections, sinus infections, or pneumonia as secondary infections. A sinus infection should be suspected when nasal discharge and cough persist without any improvement for more than 10 days, or when there is a return of fever after initial improvement. Toddlers with secondary pneumonia may have persistent cough, fast breathing, and decreased appetite along with a new fever.',
    },
  ],
  whenNormal: [
    'Your baby\'s cold symptoms are gradually improving over 7-10 days without any worsening after initial improvement',
    'A mild residual cough or runny nose lingers for up to 2 weeks after the worst of the cold  -  this is normal recovery, not a secondary infection',
    'Your baby\'s nasal discharge turned yellow or green during the cold  -  this alone is not a sign of bacterial infection but a normal immune response',
  ],
  whenToMention: [
    'Your baby seemed to be getting better from a cold but then develops a new fever or the fever returns after being gone for at least 24 hours',
    'Nasal congestion and thick discharge persist without any improvement for more than 10-14 days',
    'Your baby develops new ear pain, persistent cough that is getting worse, or is significantly fussier than during the original illness',
    'Your baby has been pulling at their ears, having trouble sleeping, or refusing to lie flat',
  ],
  whenToActNow: [
    'Your baby develops rapid or labored breathing, wheezing, or retractions (skin pulling in around the ribs) after a cold  -  these may indicate pneumonia and need prompt evaluation',
    'A high fever (above 104\u00b0F / 40\u00b0C) develops after a period of improvement, especially with a very ill appearance, extreme lethargy, or refusal to drink',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Infection Information. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sinusitis and Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Sinusitis-and-Your-Child.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Understanding the Common Cold and Its Complications.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/common-cold',
    },
  ],
};
