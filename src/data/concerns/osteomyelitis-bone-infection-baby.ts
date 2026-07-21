import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'osteomyelitis-bone-infection-baby',
  title: 'Bone Infection (Osteomyelitis) in Children',
  category: 'medical',
  searchTerms: [
    'osteomyelitis baby',
    'bone infection child',
    'child bone infection symptoms',
    'baby refusing to move arm leg',
    'child bone pain fever',
    'staph aureus bone infection child',
    'pediatric osteomyelitis treatment',
    'child limping with fever',
    'swelling over bone child fever',
    'baby bone infection IV antibiotics',
  ],
  quickAnswer:
    'Osteomyelitis is a bacterial infection of the bone, most commonly caused by Staphylococcus aureus. In children, it typically affects the long bones (femur, tibia, humerus) and presents with localized bone pain, swelling, warmth, fever, and refusal to use the affected limb. Diagnosis involves blood tests, X-rays, and MRI (the most sensitive imaging test). Treatment requires prolonged intravenous antibiotics, typically for several weeks, and sometimes surgical drainage. Early treatment leads to excellent outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neonatal osteomyelitis can be subtle and difficult to diagnose. Affected newborns may show irritability, poor feeding, decreased movement of the affected limb (pseudoparalysis), swelling near a joint, or low-grade fever. Newborns are at increased risk if they had a NICU stay, IV lines, or bloodstream infections. Group B Streptococcus, Staphylococcus aureus, and gram-negative organisms are common causes in this age group. Because neonatal bones have a rich blood supply connecting to growth plates and joints, osteomyelitis in newborns frequently involves the adjacent joint as well.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with osteomyelitis typically present with irritability, fever, swelling or tenderness over the affected bone, and refusal to move the affected limb. A baby who suddenly stops using one arm or leg (pseudoparalysis) without a clear injury should be evaluated promptly. Staphylococcus aureus is the most common causative organism. Blood cultures, inflammatory markers (CRP, ESR, white blood cell count), and MRI are the key diagnostic tools. X-ray changes may not be visible for 10-14 days after infection onset.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with osteomyelitis may present with a limp, refusal to walk or bear weight, localized pain over a bone, fever, and sometimes redness or swelling. The most commonly affected bones are the femur and tibia. Children in this age group may not be able to articulate where the pain is, so a careful physical exam is important. MRI is the gold-standard imaging study. Treatment typically involves initial IV antibiotics (often nafcillin or cefazolin) with a transition to oral antibiotics for a total course of 4-6 weeks, guided by clinical improvement and declining inflammatory markers.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children can usually point to where it hurts, which helps localize the infection. Signs include refusal to bear weight, limping, bone tenderness, fever, and malaise. If an abscess has formed in the bone, surgical drainage may be necessary in addition to antibiotics. Kingella kingae is an increasingly recognized cause of bone and joint infections in children under age 5. With appropriate antibiotic treatment, most children recover fully without long-term bone damage, though follow-up imaging may be recommended to ensure the growth plate was not affected.',
    },
  ],
  whenNormal: [
    'Your child bumped a leg or arm and has mild tenderness and swelling at the injury site without fever, which is consistent with a soft tissue bruise',
    'Your child has growing pains at night in both legs without fever, swelling, or daytime limping',
    'Your child had osteomyelitis that was treated and inflammatory markers have normalized with no residual symptoms',
    'Your child has transient limb soreness after vigorous activity that resolves within a day and has no fever',
  ],
  whenToMention: [
    'Your child has persistent bone pain in one location lasting more than a few days, especially if accompanied by low-grade fever',
    'Your child is limping or refusing to use one arm or leg without a clear injury, even if they do not have a fever',
    'You notice localized swelling, warmth, or redness over a bone in your child',
  ],
  whenToActNow: [
    'Your child has bone pain or limb swelling combined with high fever (over 101.3 F / 38.5 C), refusal to bear weight, or refusal to move the limb, which requires emergency evaluation to rule out bone or joint infection',
    'Your newborn or young infant suddenly stops moving one arm or leg, is irritable, and has a fever, which could indicate neonatal osteomyelitis or septic arthritis requiring urgent hospital evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-limping', 'baby-not-using-one-arm'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Osteomyelitis. Red Book: Report of the Committee on Infectious Diseases, 2021.',
      url: 'https://publications.aap.org/redbook',
    },
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Osteomyelitis. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/osteomyelitis/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Osteomyelitis. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/000437.htm',
    },
  ],
};
