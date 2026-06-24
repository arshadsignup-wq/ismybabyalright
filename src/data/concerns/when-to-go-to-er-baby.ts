import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'when-to-go-to-er-baby',
  title: 'When Should I Take My Baby to the Emergency Room?',
  category: 'medical',
  searchTerms: [
    'when to take baby to ER',
    'baby emergency room when',
    'baby emergency signs',
    'should I take baby to hospital',
    'baby ER visit necessary',
    'when to call 911 baby',
    'baby emergency symptoms',
    'infant emergency warning signs',
    'when is baby emergency urgent',
    'baby urgent care vs ER',
    'newborn emergency symptoms',
  ],
  quickAnswer:
    'Trust your instincts — if your baby seems seriously ill and you are worried, seeking emergency care is always the right decision. Specific reasons to go to the ER include: fever of 100.4 F or higher in a baby under 3 months, difficulty breathing, blue or gray skin color, inconsolable crying for hours, seizures, signs of dehydration, significant head injury, or lethargy where your baby is difficult to wake. It is always better to be seen and reassured than to wait too long.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns and young infants are the most vulnerable, and the threshold for emergency care should be very low. Go to the ER for: any fever of 100.4 F (38 C) or higher (this is a true emergency in this age group and requires blood work and possible admission), difficulty breathing (fast breathing, grunting, nasal flaring, rib retractions), blue or gray skin color, vomiting green/bile-colored fluid, blood in stool, seizures, extreme lethargy or difficulty waking, fewer than 3 wet diapers in 24 hours, or a bulging fontanelle. If something feels wrong, go.',
    },
    {
      ageRange: '3-12 months',
      context:
        'While babies this age can handle illness better than newborns, ER visits are warranted for: fever over 104 F, fever lasting more than 3 days, signs of dehydration (fewer than 4 wet diapers in 24 hours, dry mouth, no tears, sunken fontanelle), difficulty breathing, persistent vomiting (cannot keep down any fluids for 8+ hours), blood in stool or vomit, seizures, significant head trauma, ingestion of a toxic substance or medication, and any severe allergic reaction. For less urgent concerns, call your pediatrician\'s after-hours line first — they can advise whether ER evaluation is needed.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are more mobile and at higher risk for injuries. Go to the ER for: suspected broken bones, deep cuts that may need stitches, head injuries with loss of consciousness or vomiting, poisoning or ingestion of medications (call Poison Control first at 1-800-222-1222), severe allergic reactions (anaphylaxis), breathing difficulties, high fever with stiff neck or rash that does not blanch with pressure (petechiae), seizures, severe burns, or any injury from a significant fall. When in doubt, call your pediatrician\'s nurse line for guidance.',
    },
  ],
  whenNormal: [
    'Your baby has a mild cold with runny nose, mild cough, and low-grade fever — this can usually be managed at home with guidance from your pediatrician',
    'Your baby had a minor bump or bruise from a short fall onto a soft surface and is acting normally afterward',
    'Your baby has a rash without fever or other concerning symptoms — this can usually wait for a regular appointment',
  ],
  whenToMention: [
    'Your baby has symptoms that concern you but do not seem to be emergencies — call your pediatrician\'s office or after-hours line',
    'Your baby has been sick for several days and is not improving',
    'You are unsure whether your baby\'s symptoms warrant an ER visit — calling your pediatrician first is always appropriate',
  ],
  whenToActNow: [
    'Your baby is under 3 months with a fever of 100.4 F (38 C) or higher — go to the ER immediately',
    'Your baby has difficulty breathing: fast breathing, grunting, nasal flaring, chest retractions, or blue/gray skin — call 911',
    'Your baby has had a seizure, is unconscious, is extremely lethargic and difficult to wake, or has been exposed to a toxin — call 911 or go to the ER immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'persistent-fever-baby',
    'febrile-seizure',
    'baby-breathing-fast',
    'cyanosis-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When to Call the Pediatrician. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/general/Pages/When-to-Call-the-Pediatrician.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emergency Room or Not: When to Call 911. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/When-to-Call-Emergency-Medical-Services-EMS.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Health and Emergency Warning Signs.',
      url: 'https://www.cdc.gov/parents/infants/index.html',
    },
  ],
};
