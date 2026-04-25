import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-choking-on-food',
  title: 'My Baby Keeps Choking on Food',
  category: 'feeding',
  searchTerms: [
    'baby choking on food',
    'baby keeps choking while eating',
    'baby gagging vs choking',
    'how to stop baby from choking',
    'baby chokes on every meal',
    'baby coughs during eating',
    'baby turning red while eating',
    'choking hazards for babies',
    'baby choking on purees',
    'safe foods to prevent choking',
  ],
  quickAnswer:
    'First, it\'s important to distinguish between gagging and choking. Gagging is a normal protective reflex that helps babies learn to eat, while true choking is silent and requires immediate intervention. Most "choking" episodes parents describe are actually gagging, which is common and expected as babies explore new textures. However, if your baby frequently struggles with swallowing or shows signs of true choking, it\'s worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'At this early stage, babies are just learning to move food from the front to the back of their mouth. Gagging is extremely common and is actually a safety mechanism to prevent choking. The gag reflex is located far forward on the tongue in young babies, so they gag easily. This is normal and protective. Stick to very smooth purees and wait until your baby shows all readiness signs before introducing solids.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As babies start exploring different textures, gagging becomes very frequent. This is the peak age for gag reflex activation as they learn what textures they can handle. The gag reflex gradually moves back in the mouth during this period. Continue offering age-appropriate textures, but never leave your baby unattended while eating. Learn the difference between gagging (noisy, productive coughing) and choking (silent, inability to cry or cough).',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, most babies have better oral motor control and gag less frequently. However, they are also exploring more challenging textures and may be eager to eat foods they cannot yet handle safely. Ensure foods are cut appropriately: grapes quartered lengthwise, hot dogs avoided entirely, meats ground or shredded. If your baby is still gagging frequently on smooth foods, mention it to your pediatrician.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers are often overconfident eaters who take bites that are too large or try to talk and eat simultaneously. Continue to supervise all meals, avoid high-risk foods (popcorn, whole nuts, hard candy, chunks of hard raw vegetables), and model safe eating behaviors like sitting down, taking small bites, and chewing thoroughly.',
    },
    {
      ageRange: '18 months+',
      context:
        'If your toddler continues to choke or gag frequently on age-appropriate foods, especially if they are coughing during or after meals or seem to have difficulty swallowing liquids, a feeding evaluation by a speech therapist or occupational therapist may be helpful to assess for oral motor delays or swallowing difficulties.',
    },
  ],
  whenNormal: [
    'Your baby gags occasionally when trying new textures, then recovers and continues eating',
    'Your baby coughs productively during a meal and clears the food themselves',
    'Your baby makes gagging faces and spits out food that is too challenging, showing good protective reflexes',
    'Your baby gags more frequently when tired or when eating too quickly',
    'Gagging decreases as your baby gets older and more experienced with eating',
  ],
  whenToMention: [
    'Your baby gags on every food, including very smooth purees, and has made no progress over several weeks',
    'Your baby frequently vomits after gagging episodes',
    'Your baby seems fearful of eating or refuses most foods after repeated gagging',
    'You notice your baby coughing or choking specifically when drinking liquids',
    'Your baby has had more than one true choking episode requiring back blows or the Heimlich maneuver',
  ],
  whenToActNow: [
    'Your baby cannot cry, cough, or make any sound while eating (true choking emergency - call 911 and perform infant CPR/choking protocol)',
    'Your baby turns blue, loses consciousness, or cannot breathe during a meal',
    'Your baby is coughing up blood after a choking or gagging episode',
  ],
  relatedMilestones: [
    'feeding',
    'starting-solids',
    'oral-motor',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention for Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
    {
      org: 'Red Cross',
      citation:
        'American Red Cross. Infant and Child Choking: How to Help.',
      url: 'https://www.redcross.org/take-a-class/cpr/performing-cpr/child-baby-cpr',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Textures and Developmental Feeding Milestones. Pediatrics 2022.',
      url: 'https://publications.aap.org/pediatrics',
    },
  ],
};
