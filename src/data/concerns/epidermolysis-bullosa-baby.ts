import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'epidermolysis-bullosa-baby',
  title: 'My Baby Has Epidermolysis Bullosa (EB)',
  category: 'medical',
  searchTerms: [
    'baby epidermolysis bullosa',
    'EB baby',
    'baby skin blisters easily',
    'butterfly children',
    'epidermolysis bullosa simplex',
    'epidermolysis bullosa treatment',
    'baby fragile skin blistering',
    'epidermolysis bullosa wound care',
    'junctional epidermolysis bullosa',
    'dystrophic epidermolysis bullosa',
  ],
  quickAnswer:
    'Epidermolysis bullosa (EB) is a group of genetic disorders that cause the skin to be extremely fragile, forming blisters and wounds with minimal friction or trauma. The severity varies widely by subtype. EB simplex (the most common and mildest form) primarily affects the hands and feet. Junctional and dystrophic EB are more severe and can affect the entire body, mouth, and internal surfaces. Wound care is the cornerstone of management. Children with EB are sometimes called "butterfly children" because their skin is as fragile as butterfly wings. Gene therapy and protein-replacement treatments are emerging areas of research and early clinical use.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'EB may be apparent at birth or within the first days of life when blisters appear from the friction of delivery, clothing, or handling. In severe forms, large areas of skin may be absent at birth (aplasia cutis). A skin biopsy and genetic testing confirm the specific type of EB. Gentle handling is crucial - lancing blisters with a sterile needle to drain fluid (without removing the blister roof) prevents them from spreading. Non-stick dressings and silicone-based bandages protect the skin. Your NICU or dermatology team will teach you wound care techniques before discharge.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Daily wound care becomes a central part of life for families of babies with EB. Bath time uses lukewarm water, and dressings are changed carefully using non-adherent materials. Pain management during dressing changes is important - your doctor may prescribe pain medication to give before wound care. Feeding may be challenging if blisters affect the mouth - soft nipples, special bottle techniques, and monitoring for adequate weight gain are important. Nutritional support may be needed for severe cases.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes more mobile (rolling, crawling), new friction areas may develop blisters. Protective clothing, padded surfaces, and careful childproofing help minimize trauma. Occupational therapy can help with adaptive strategies. For EB simplex, blistering may improve somewhat as the skin toughens with age. For more severe forms, ongoing wound care and nutritional support are essential. Iron and protein supplementation may be needed due to chronic wound healing demands.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with EB need careful monitoring for complications: scarring (in dystrophic EB) can lead to fusion of fingers and toes (pseudosyndactyly), esophageal strictures (narrowing of the swallowing tube), and contractures. Physical and occupational therapy help maintain mobility and hand function. Dental care is important as EB can affect the teeth and oral mucosa. Nutritional needs remain high due to ongoing wound healing. Social support and respite care for families are valuable.',
    },
    {
      ageRange: '3 years+',
      context:
        'Long-term management varies significantly by EB type. EB simplex patients often have a good quality of life with blistering that may improve over time. Junctional and dystrophic forms require multidisciplinary care including dermatology, gastroenterology, nutrition, orthopedics, ophthalmology, and psychosocial support. Gene therapy (such as Vyjuvek/beremagene geperpavec, the first FDA-approved gene therapy for dystrophic EB) and protein replacement therapies represent exciting advances. Clinical trials continue to expand treatment options.',
    },
  ],
  whenNormal: [
    'Your baby has EB simplex with blistering mainly limited to hands and feet that heals without scarring',
    'You have an established wound care routine that is keeping blisters under control',
    'Your baby is feeding well and gaining weight appropriately',
    'Your baby is being followed by a dermatologist experienced in EB management',
    'Your baby is meeting developmental milestones despite skin fragility',
  ],
  whenToMention: [
    'You notice blistering is worsening or affecting new areas of the body',
    'Your baby is having difficulty feeding or seems to have mouth pain during feeds',
    'You see signs of finger or toe fusion developing (webbing)',
    'You need help with wound care techniques or pain management',
    'You are interested in clinical trials or new therapies for EB',
  ],
  whenToActNow: [
    'A blister or wound appears infected: increasing redness around the wound, pus, foul smell, warmth, or your baby has a fever - wound infections can become serious quickly in EB',
    'Your baby has extensive new blistering or skin loss after a minor event',
    'Your baby is unable to feed due to oral blistering and is showing signs of dehydration (fewer wet diapers, dry mouth, sunken soft spot)',
    'Your baby has difficulty swallowing, gagging, or refuses feeds, which could indicate esophageal involvement',
    'Your baby has eye redness, pain, or discharge, as EB can affect the cornea and requires urgent ophthalmologic evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-blister-rash-fluid-filled', 'baby-skin-peeling-between-toes'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Epidermolysis Bullosa. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/6334/epidermolysis-bullosa',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Epidermolysis Bullosa. NIAMS, 2024.',
      url: 'https://www.niams.nih.gov/health-topics/epidermolysis-bullosa',
    },
    {
      org: "Children's Hospital",
      citation:
        "Cincinnati Children's Hospital. Epidermolysis Bullosa Center.",
      url: 'https://www.cincinnatichildrens.org/service/e/eb',
    },
  ],
};
