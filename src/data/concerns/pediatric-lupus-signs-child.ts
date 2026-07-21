import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pediatric-lupus-signs-child',
  title: 'Signs of Lupus (SLE) in Children',
  category: 'medical',
  searchTerms: [
    'pediatric lupus child',
    'lupus symptoms child',
    'SLE child',
    'systemic lupus erythematosus child',
    'butterfly rash child face',
    'malar rash child',
    'child joint pain fatigue rash lupus',
    'lupus kidney child',
    'lupus nephritis child',
    'childhood onset lupus',
  ],
  quickAnswer:
    'Systemic lupus erythematosus (SLE or lupus) is a chronic autoimmune disease in which the immune system attacks healthy tissue throughout the body. Childhood-onset lupus (diagnosed before age 18) accounts for about 15-20% of all lupus cases and tends to be more severe than adult-onset lupus, with kidney involvement occurring in up to 80% of pediatric cases. Common symptoms include a butterfly-shaped rash across the cheeks and nose, joint pain and swelling, extreme fatigue, fever, mouth sores, sun sensitivity, and hair loss. While lupus is a lifelong condition, modern treatments can effectively control the disease and prevent organ damage.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Neonatal lupus is a distinct condition caused by maternal autoantibodies (anti-Ro/SSA and anti-La/SSB) crossing the placenta. It is not the same as childhood SLE. Neonatal lupus can cause a temporary skin rash and, more seriously, congenital heart block (a permanent condition affecting the heart\'s electrical system). The skin rash typically resolves by 6-8 months as maternal antibodies clear. Babies born to mothers with lupus or Sjogren syndrome should be monitored for these complications.',
    },
    {
      ageRange: '6-12 months',
      context:
        'True SLE is extremely rare in infancy. If it occurs this early, it may suggest a single-gene (monogenic) form of lupus that tends to be more severe. Any infant with features suggesting lupus — persistent rash, fevers, organ dysfunction, abnormal blood counts — should be evaluated by a pediatric rheumatologist and immunologist. Complement deficiencies (C1q, C2, C4) strongly predispose to early-onset lupus and should be tested.',
    },
    {
      ageRange: '1-3 years',
      context:
        'SLE remains uncommon in very young children but can occur. Early signs may be subtle: unexplained fevers, fatigue, irritability, joint pain or swelling, a facial rash that worsens with sun exposure, or unexplained blood count abnormalities found on routine labs. Toddlers may not be able to articulate symptoms, so watch for behavior changes, reduced activity, and poor appetite. If lupus is suspected, initial testing includes ANA (antinuclear antibody), complete blood count, kidney function tests, and urinalysis.',
    },
    {
      ageRange: '3+ years',
      context:
        'The most common age of onset for childhood lupus is between 10 and 15 years, particularly in girls (9:1 female-to-male ratio after puberty). However, it can present throughout childhood. The classic butterfly (malar) rash, photosensitivity, oral ulcers, arthritis, and fatigue are common presentations. Kidney involvement (lupus nephritis) is more common and often more severe in children than in adults, making regular urinalysis and kidney function monitoring essential. Treatment typically includes hydroxychloroquine (for all patients), corticosteroids, and immunosuppressants (mycophenolate, azathioprine) tailored to disease severity.',
    },
  ],
  whenNormal: [
    'Your child has a brief facial rash from sun exposure, wind, or irritation that resolves quickly — not all facial rashes are lupus',
    'Your child has transient joint aches during or after a viral illness that resolve completely',
    'Your child\'s ANA test was positive at a low titer without any symptoms — low-positive ANA results are common in healthy children and do not mean your child has lupus',
    'Your child is fatigued during an illness but returns to normal energy levels after recovery',
  ],
  whenToMention: [
    'Your child has a persistent butterfly-shaped rash across the cheeks and nose that worsens with sun exposure',
    'Your child has unexplained joint pain and swelling combined with fatigue, fevers, or mouth sores',
    'Your child has abnormal blood counts (low white cells, low platelets, or anemia) found on routine labs without a clear cause',
    'You have a family history of lupus and your child is developing symptoms such as rash, fatigue, or joint pain',
  ],
  whenToActNow: [
    'Your child has a combination of high fever, severe fatigue, rash, and joint swelling — lupus affecting multiple organ systems requires urgent evaluation',
    'Your child has foamy or dark urine, facial or leg swelling, or elevated blood pressure, which may indicate lupus nephritis requiring immediate treatment to protect kidney function',
    'Your child with known lupus develops chest pain, shortness of breath, severe headache, confusion, or seizures — these may indicate serious organ involvement (serositis, cerebral lupus) requiring emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'baby-autoimmune-condition-signs',
    'juvenile-idiopathic-arthritis-child',
    'henoch-schonlein-purpura-baby',
    'juvenile-dermatomyositis-child',
  ],
  sources: [
    {
      org: 'ACR',
      citation:
        'American College of Rheumatology. Lupus. ACR, 2023.',
      url: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Lupus',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Systemic Lupus Erythematosus in Children. Pediatrics in Review, 2016.',
      url: 'https://publications.aap.org/pediatricsinreview/article/37/9/375/31797',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Systemic Lupus Erythematosus (Lupus). NIAMS, 2023.',
      url: 'https://www.niams.nih.gov/health-topics/lupus',
    },
  ],
};
