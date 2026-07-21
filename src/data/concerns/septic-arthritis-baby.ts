import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'septic-arthritis-baby',
  title: 'Septic Arthritis (Joint Infection) in Children',
  category: 'medical',
  searchTerms: [
    'septic arthritis baby',
    'joint infection child',
    'baby won\'t move leg fever',
    'child hot swollen joint',
    'baby hip infection fever',
    'child knee swollen red fever',
    'septic hip baby emergency',
    'child joint infection drainage',
    'baby pseudoparalysis fever joint',
    'child refusing to walk fever swollen joint',
  ],
  quickAnswer:
    'Septic arthritis is a bacterial infection inside a joint, most commonly the hip or knee in children. It presents with fever, extreme pain with any movement of the joint, swelling and warmth over the joint, and refusal to move the affected limb. Septic arthritis is a medical emergency because bacteria can rapidly destroy joint cartilage within hours to days. Treatment requires urgent surgical drainage (or needle aspiration) of the infected joint combined with IV antibiotics. With prompt treatment, most children recover fully.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neonatal septic arthritis is a serious condition that can be difficult to diagnose because newborns cannot verbalize pain. Signs include irritability, poor feeding, decreased movement of the affected limb (pseudoparalysis), swelling around a joint (the hip is most commonly affected), and fever, though neonates may not always mount a fever. The infection often spreads from the bloodstream. Common organisms include Group B Streptococcus, Staphylococcus aureus, and gram-negative bacteria. Any newborn with unexplained irritability, limb swelling, or refusal to move an extremity needs urgent evaluation.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with septic arthritis typically present with fever, extreme irritability when the joint is moved (especially during diaper changes for hip infections), swelling, and refusal to move the limb. The hip is the most commonly affected joint in this age group and can be difficult to assess because hip swelling is deep and may not be visible. An infant who cries inconsolably when you try to move their leg, holds the hip in a flexed and externally rotated position, or refuses to bear weight on a leg should be evaluated emergently. Ultrasound can detect fluid in the hip joint, and joint aspiration confirms the diagnosis.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with septic arthritis often present with a limp or sudden refusal to walk, fever, and a hot, swollen, painful joint. The knee and hip are the most commonly affected joints. Staphylococcus aureus remains the leading cause, but Kingella kingae is an increasingly recognized pathogen in children under 5 years old. Kocher criteria (fever, elevated ESR, elevated white blood cell count, and refusal to bear weight) help distinguish septic arthritis from the more benign transient synovitis. Surgical drainage or aspiration of the infected joint, combined with IV antibiotics, is the standard treatment.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children can usually point to the painful joint and describe their symptoms. Presentation includes fever, a joint that is swollen, red, hot, and exquisitely painful to touch or move, and refusal to use the limb. Staphylococcus aureus (including MRSA in some regions) is the most common cause. Blood tests, joint aspiration, and imaging (ultrasound or MRI) guide the diagnosis. Treatment involves urgent joint drainage and at least 3-4 weeks of antibiotics. When treated promptly, long-term outcomes are excellent, though follow-up is important to monitor for growth plate damage.',
    },
  ],
  whenNormal: [
    'Your child has mild joint aches or stiffness during a viral illness that resolves within a few days (reactive arthritis associated with viruses is common and benign)',
    'Your child was diagnosed with transient synovitis of the hip (a self-limited inflammatory condition without fever or high inflammatory markers)',
    'Your child has joint clicking or popping without pain, swelling, or fever, which is usually from normal ligament movement',
    'Your child bumped a knee or ankle and has mild bruising and tenderness but no fever, warmth, or significant swelling of the joint',
  ],
  whenToMention: [
    'Your child has a persistently swollen or warm joint without a clear injury, even without fever',
    'Your child limps or refuses to bear weight for more than a day after a viral illness',
    'Your child has recurring joint pain or swelling in the same or multiple joints, which could indicate other conditions such as juvenile idiopathic arthritis',
  ],
  whenToActNow: [
    'Your child has a hot, swollen, painful joint with fever and refuses to move the limb, which is a medical emergency requiring immediate evaluation for septic arthritis, as delays in treatment can lead to permanent joint damage',
    'Your infant or baby is febrile, extremely irritable, and holds one limb still or screams when you try to move it, especially during diaper changes, which may indicate septic arthritis of the hip and requires emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-limping', 'osteomyelitis-bone-infection-baby', 'toddler-joint-swelling'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Septic Arthritis (Bacterial Joint Infection). Red Book: Report of the Committee on Infectious Diseases, 2021.',
      url: 'https://publications.aap.org/redbook',
    },
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Septic Arthritis. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/septic-arthritis/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Septic Arthritis. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/000430.htm',
    },
  ],
};
