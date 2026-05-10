import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sickle-cell-disease-baby',
  title: 'Sickle Cell Disease in Babies',
  category: 'medical',
  searchTerms: [
    'sickle cell disease baby',
    'sickle cell symptoms infant',
    'baby swollen hands feet',
    'dactylitis baby',
    'sickle cell newborn screening positive',
    'baby pale and fussy sickle cell',
    'sickle cell trait vs disease baby',
    'baby sickle cell pain crisis',
    'sickle cell anemia signs baby',
  ],
  quickAnswer:
    'Sickle cell disease (SCD) is an inherited blood disorder where red blood cells become rigid and sickle-shaped, blocking blood flow and causing pain and organ damage. It affects approximately 1 in 365 African American births and also occurs in Hispanic, Mediterranean, Middle Eastern, and South Asian populations. Detected through newborn screening, early treatment with penicillin prophylaxis and comprehensive care has dramatically improved outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with sickle cell disease are usually symptom-free at birth because they still have protective fetal hemoglobin. The condition is detected through the newborn screening blood test. Once diagnosed, babies are started on daily penicillin by 2 months of age to prevent life-threatening pneumococcal infections. Establishing care with a pediatric hematologist early is essential.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As fetal hemoglobin levels drop and are replaced by sickle hemoglobin, the first symptoms may appear. Dactylitis — painful swelling of the hands and feet — is often the earliest sign, along with fussiness and irritability. Babies may also develop mild jaundice or pallor from chronic anemia. Keep up with the daily penicillin and all vaccination schedules, as children with SCD are at high risk for serious infections.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a vulnerable period as fetal hemoglobin continues to decline. Babies may experience pain episodes, splenic sequestration (sudden pooling of blood in the spleen causing rapid anemia), and increased infection risk. Parents should learn to feel the spleen and recognize signs of splenic sequestration (sudden pallor, irritability, enlarged belly). Fever above 101.3°F (38.5°C) is always an emergency in a baby with SCD.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with SCD may have recurrent pain crises, delayed growth, and frequent infections despite preventive measures. Many children are started on hydroxyurea, which increases fetal hemoglobin production and significantly reduces complications. Newer treatments including L-glutamine, crizanlizumab, and gene therapy are expanding options. With comprehensive care, children with SCD can thrive.',
    },
  ],
  whenNormal: [
    'Your baby has sickle cell trait (carrier status) rather than sickle cell disease — carriers are generally healthy',
    'Your baby with SCD is on prophylactic penicillin, vaccinated, and growing well',
    'Mild jaundice in a baby with SCD that is being monitored by their hematology team',
    'Your baby with SCD is meeting developmental milestones appropriately',
  ],
  whenToMention: [
    'Your baby with SCD is having more frequent pain episodes or seems increasingly irritable',
    'Your baby with SCD appears paler than usual or has increasing jaundice',
    'Your baby\'s newborn screening shows sickle cell trait and you want to understand what this means for your family',
  ],
  whenToActNow: [
    'Your baby with SCD has a fever of 101.3°F (38.5°C) or higher — this is always an emergency requiring immediate medical evaluation and antibiotics',
    'Your baby with SCD suddenly becomes very pale, limp, or has a rapidly enlarging abdomen — this may indicate splenic sequestration, a life-threatening emergency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sickle Cell Disease (SCD): Data & Statistics. CDC, 2024.',
      url: 'https://www.cdc.gov/sickle-cell/data/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Sickle Cell Disease. NHLBI, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/sickle-cell-disease',
    },
  ],
};
