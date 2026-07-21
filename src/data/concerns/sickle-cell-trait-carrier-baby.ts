import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sickle-cell-trait-carrier-baby',
  title: 'Sickle Cell Trait (Carrier Status) in Babies',
  category: 'medical',
  searchTerms: [
    'sickle cell trait baby',
    'sickle cell carrier baby',
    'newborn screening sickle cell trait',
    'baby sickle cell trait vs disease',
    'sickle cell trait genetic counseling',
    'sickle cell carrier healthy',
    'baby hemoglobin AS',
    'sickle cell trait exercise',
    'sickle cell trait complications',
    'sickle cell trait pregnancy counseling',
  ],
  quickAnswer:
    'Sickle cell trait (SCT) means your baby carries one copy of the sickle hemoglobin gene and one normal hemoglobin gene (hemoglobin AS). This is a carrier state, not a disease. Approximately 1 in 13 African American babies are born with sickle cell trait, and it is also common in people of Mediterranean, Middle Eastern, Indian, and Hispanic descent. The vast majority of people with sickle cell trait live completely normal, healthy lives without any symptoms. SCT is detected through newborn screening. The main significance is genetic — if both parents carry sickle cell trait, each pregnancy has a 25% chance of the baby having sickle cell disease.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Sickle cell trait is identified through newborn screening. Receiving this result can be alarming for parents, but it is important to understand that sickle cell trait is NOT sickle cell disease. Your baby with SCT has enough normal hemoglobin to function normally. No treatment, dietary changes, or activity restrictions are needed. Your pediatrician should discuss the result with you and may recommend genetic counseling, especially so the other parent can be tested to determine the chances of future children having sickle cell disease.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Your baby with sickle cell trait should grow, develop, and behave just like any other baby. No special medical monitoring is needed specifically for SCT. All routine well-child visits, vaccinations, and developmental milestones proceed normally. If the other parent has not been tested for hemoglobin disorders, this is a good time to arrange testing and genetic counseling for family planning purposes.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with sickle cell trait participate in all normal childhood activities without restriction. There are no dietary limitations, no activity restrictions, and no medications needed. Very rarely, under extreme conditions (severe dehydration, extreme high altitude, extreme heat, or extremely intense exercise), individuals with SCT may experience complications such as exertional rhabdomyolysis or, very rarely, splenic infarction at very high altitude. These are exceedingly uncommon in young children during normal activities.',
    },
    {
      ageRange: '3+ years',
      context:
        'As your child grows, they can participate in all sports and physical activities. The only practical considerations are general healthy habits that benefit everyone: staying well-hydrated during exercise and in hot weather, allowing adequate rest during intense physical activity, and being aware that extreme altitude (above 10,000 feet) may occasionally cause splenic pain. As your child matures, they should understand their carrier status for future family planning. Sickle cell trait does not reduce life expectancy and does not progress to sickle cell disease.',
    },
  ],
  whenNormal: [
    'Your baby has sickle cell trait and is growing, feeding, and developing normally — this is the expected outcome for the vast majority of people with SCT',
    'Your child with SCT is active, playing, and reaching all developmental milestones on time',
    'Your child with SCT is participating in sports and physical activities without any problems',
    'Your child with SCT has normal blood counts and no anemia — SCT does not typically cause anemia',
  ],
  whenToMention: [
    'You received a newborn screening result showing sickle cell trait and want to understand what it means for your baby and family',
    'You want to discuss genetic counseling and testing of the other parent for hemoglobin disorders',
    'Your child with SCT has blood in the urine (hematuria), which can rarely be associated with SCT due to a benign condition called renal papillary necrosis',
  ],
  whenToActNow: [
    'Your child with SCT has sudden severe pain in the left side of the abdomen at high altitude — splenic infarction, while very rare with trait, requires emergency evaluation',
    'Your child with SCT collapses during extreme physical exertion with muscle pain and dark urine — exertional rhabdomyolysis, though rare, requires emergency treatment with IV fluids',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sickle-cell-disease-baby',
    'pallor-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sickle Cell Trait. CDC, 2024.',
      url: 'https://www.cdc.gov/sickle-cell/about/sickle-cell-trait.html',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Sickle Cell Trait. NHLBI, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/sickle-cell-disease/sickle-cell-trait',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Health Supervision for Children With Sickle Cell Disease. Pediatrics, 2002.',
      url: 'https://publications.aap.org/pediatrics/article/109/3/526/63395',
    },
  ],
};
