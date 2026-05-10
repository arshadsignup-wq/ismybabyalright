import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'growth-plate-injury-toddler',
  title: 'Growth Plate Injury in Toddlers',
  category: 'physical',
  searchTerms: [
    'growth plate injury toddler',
    'toddler fractured growth plate',
    'growth plate fracture baby',
    'toddler limping after fall',
    'growth plate damage child',
    'physis fracture toddler',
    'toddler broken bone growth plate',
    'growth plate injury signs child',
  ],
  quickAnswer:
    'Growth plates (physes) are areas of developing cartilage near the ends of long bones where bone growth occurs. They are weaker than surrounding bone and ligaments, making them vulnerable to injury in growing children. Growth plate injuries account for 15-30% of all childhood fractures. In toddlers, these injuries typically occur from falls or twisting injuries. Most growth plate fractures heal well with proper treatment and do not affect future growth. However, certain types of growth plate injuries need careful management to prevent growth disturbance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Growth plate injuries in very young babies are rare and would typically only occur from significant trauma. If a newborn has swelling, tenderness, or refuses to move a limb, medical evaluation is important. Birth-related fractures (such as clavicle fractures) are more common at this age but typically do not involve growth plates. Any suspected bone injury in a very young baby should be evaluated promptly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies become more active (rolling, reaching), the risk of falls increases slightly. Growth plate injuries remain uncommon at this age. If your baby has unexplained swelling at a joint, refuses to move a limb, or cries when a limb is moved, seek medical evaluation. X-rays can help identify fractures, though growth plate injuries can sometimes be subtle on imaging in young babies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies who are pulling to stand and cruising are at increased risk of falls. A fall from standing height can occasionally result in a growth plate injury, most commonly at the wrist or ankle. Signs include swelling near a joint (not in the middle of a bone), tenderness, inability or refusal to use the limb, and bruising. If the injury is near a joint, request that the doctor specifically assess the growth plate. X-rays may look normal initially in mild growth plate injuries.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers are active, adventurous, and prone to falls from climbing, running, and playground equipment. The most common growth plate injuries in toddlers involve the distal radius (wrist), distal tibia (ankle), and distal fibula. Treatment depends on the Salter-Harris classification of the fracture. Types I and II (the most common) usually heal well with casting. Types III, IV, and V may require surgical treatment and closer follow-up. After healing, your doctor may monitor the affected limb for growth disturbance.',
    },
  ],
  whenNormal: [
    'Your toddler had a fall and has mild swelling and pain that resolves within 24-48 hours without treatment  -  minor bumps and bruises are part of active toddlerhood.',
    'Your toddler had a growth plate fracture that was treated with a cast and has healed with normal follow-up X-rays showing no growth disturbance.',
    'Your child limps briefly after a minor fall but returns to normal walking within a day  -  transient limping can be from a bruise or minor strain.',
    'X-rays after treatment show the growth plate returning to its normal appearance.',
  ],
  whenToMention: [
    'Your toddler has persistent swelling near a joint (wrist, ankle, knee) after a fall, even if they are still using the limb.',
    'Your toddler is limping or refusing to bear weight for more than a day after an injury.',
    'A previously treated growth plate injury  -  ask about growth monitoring at follow-up appointments.',
  ],
  whenToActNow: [
    'Your toddler has obvious deformity of a limb after a fall, cannot move the limb, or has severe swelling near a joint  -  seek emergency evaluation for possible fracture.',
    'Your child has an open wound near a fracture site, or bone is visible  -  this is an orthopedic emergency.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Growth Plate Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Growth-Plate-Injuries.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Growth Plate Injuries.',
      url: 'https://www.niams.nih.gov/health-topics/growth-plate-injuries',
    },
  ],
};
