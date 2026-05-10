import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'outer-ear-infection-swimmers-ear-baby',
  title: 'Swimmer\'s Ear in Babies',
  category: 'medical',
  searchTerms: [
    'swimmer\'s ear baby',
    'otitis externa baby',
    'outer ear infection baby',
    'baby ear red and swollen',
    'baby ear hurts after bath',
    'baby ear canal infected',
    'swimmer\'s ear toddler',
    'baby ear pain pulling outer ear',
  ],
  quickAnswer:
    'Swimmer\'s ear (otitis externa) is an infection of the outer ear canal, different from the middle ear infections that are more common in babies. It is caused by moisture trapped in the ear canal creating an environment for bacterial growth. While more common in older children and adults, babies and toddlers can develop it after baths, swimming, or from excessive ear cleaning. The hallmark sign is pain when the outer ear is touched or pulled. Treatment is typically antibiotic ear drops.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Swimmer\'s ear is uncommon at this age since very young babies are not exposed to pools or prolonged water in the ears. However, if your newborn develops redness, swelling, or discharge from the ear canal, have your pediatrician evaluate  -  it could be a skin infection in the ear canal or another condition. Be gentle during baths and avoid inserting anything (including cotton swabs) into the ear canal.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies begin to enjoy bath time and some families introduce swimming, there is a small risk of water becoming trapped in the ear canal. Signs of swimmer\'s ear at this age include increased fussiness, crying when the outer ear is touched, and redness of the ear canal opening. If you notice your baby becoming upset when you touch or clean around the ear, rather than only during ear pulling, this may point to an outer ear issue rather than a middle ear infection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies who regularly swim or have frequent baths may develop swimmer\'s ear. The key distinguishing feature from a middle ear infection is pain with movement of the outer ear (pinna) or pressure on the tragus (the small flap in front of the ear canal). Your baby may resist having their ear touched, and you may notice the ear canal looking red or swollen. Antibiotic ear drops are the standard treatment  -  oral antibiotics are not typically needed for outer ear infections.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who swim or play in water frequently are at higher risk. Signs include ear pain (especially when the ear is touched), itching, drainage, and a feeling of fullness. Prevention includes drying ears gently after water exposure and avoiding cotton swabs. If your toddler has ear tubes, water precautions and the use of ear plugs during swimming may be recommended by your ENT to prevent both swimmer\'s ear and middle ear contamination.',
    },
  ],
  whenNormal: [
    'Your baby\'s ears appear slightly red after bath time but there is no pain, discharge, or swelling  -  mild redness from warm water is normal.',
    'Your baby has some water in their ear after a bath that drains on its own  -  this is normal and does not usually cause infection.',
    'Your toddler\'s ear feels itchy occasionally after swimming but resolves quickly without other symptoms.',
    'There is a small amount of earwax visible in the ear canal  -  this is protective and should not be removed aggressively.',
  ],
  whenToMention: [
    'Your baby cries or pulls away when you touch or gently tug the outer ear  -  this is the classic sign of swimmer\'s ear.',
    'You notice redness, swelling, or discharge from the ear canal opening.',
    'Your toddler has ear pain after swimming that doesn\'t resolve within a few hours.',
  ],
  whenToActNow: [
    'Your baby has severe ear pain with significant swelling that is closing off the ear canal, fever, or swelling spreading to the face or behind the ear  -  this could indicate a more serious infection requiring urgent care.',
    'Your child with ear tubes develops signs of swimmer\'s ear along with foul-smelling drainage  -  prompt evaluation is needed to determine if the middle ear is also involved.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swimmer\'s Ear (Otitis Externa). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Swimmers-Ear.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Swimmer\'s Ear (Otitis Externa).',
      url: 'https://www.cdc.gov/swimmers-ear/about/index.html',
    },
  ],
};
