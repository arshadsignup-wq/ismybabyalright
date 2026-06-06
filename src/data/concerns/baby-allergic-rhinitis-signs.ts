import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-allergic-rhinitis-signs',
  title: 'Could My Baby Have Nasal Allergies (Allergic Rhinitis)?',
  category: 'medical',
  searchTerms: [
    'baby nasal allergies',
    'baby allergic rhinitis',
    'baby hay fever',
    'baby runny nose allergies',
    'baby sneezing allergies',
    'baby itchy nose eyes',
    'baby constant runny nose',
    'allergic rhinitis infant',
    'baby allergy sneezing clear mucus',
    'seasonal allergies baby signs',
  ],
  quickAnswer:
    'Allergic rhinitis (nasal allergies) can affect babies but is more commonly diagnosed after age 2, when there has been enough allergen exposure. Signs include persistent clear runny nose, sneezing, nasal congestion, eye rubbing or watering, and an "allergic salute" (rubbing the nose upward). Unlike colds, allergic rhinitis does not cause fever and symptoms persist for weeks rather than resolving in 7-10 days.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True allergic rhinitis is very rare in newborns because they have not had enough allergen exposure to develop sensitization. Nasal congestion in this age group is more likely from colds, dry air, irritants, or normal newborn nasal congestion. If your young baby has persistent congestion, discuss with your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Allergic rhinitis remains uncommon at this age. However, some babies with strong family history of allergies may begin to show sensitivity to indoor allergens like dust mites or pet dander. A persistent clear runny nose without fever or cold symptoms may warrant discussion with your pediatrician about potential allergies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While still uncommon, allergic rhinitis can begin to develop in the second half of the first year. Indoor allergens (dust mites, pet dander, mold) are more common triggers than outdoor allergens at this age. Look for patterns: symptoms that worsen in certain environments or seasons may suggest allergies.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Allergic rhinitis becomes more recognizable at this age. Key differences from a cold include: symptoms last more than 2 weeks, mucus stays clear and watery, no fever, and symptoms may be worse indoors or during specific seasons. Your pediatrician may recommend allergy testing if symptoms are persistent.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the age when allergic rhinitis is most commonly first diagnosed. Look for the classic signs: persistent clear nasal discharge, sneezing fits, nasal congestion, dark circles under the eyes ("allergic shiners"), nose rubbing, and mouth breathing. Treatment may include allergen avoidance, saline nasal rinse, and age-appropriate antihistamines prescribed by your doctor.',
    },
  ],
  whenNormal: [
    'Your baby has a clear runny nose only during colds that resolves within 7-10 days',
    'Occasional sneezing from environmental irritants like dust or cold air',
    'Mild nasal congestion that comes and goes without a pattern',
  ],
  whenToMention: [
    'Your baby has persistent clear nasal discharge lasting more than 2 weeks without other cold symptoms',
    'You notice your baby\'s symptoms worsen in certain environments or seasons',
    'Your baby has eczema and/or family history of allergies along with nasal symptoms',
  ],
  whenToActNow: [
    'Your baby has severe nasal congestion affecting breathing, feeding, or sleep that does not respond to saline and environmental measures',
    'Nasal symptoms are accompanied by wheezing, persistent cough, or signs of respiratory distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-environmental-allergies-testing',
    'baby-seasonal-allergies',
    'baby-sneezing-a-lot',
    'chronic-congestion',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Allergies-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Allergic Rhinitis.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/allergic-rhinitis',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Hay fever (allergic rhinitis) in children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/hay-fever/symptoms-causes/syc-20373039',
    },
  ],
};
