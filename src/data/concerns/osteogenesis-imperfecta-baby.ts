import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'osteogenesis-imperfecta-baby',
  title: 'Osteogenesis Imperfecta in Babies',
  category: 'medical',
  searchTerms: [
    'osteogenesis imperfecta baby',
    'brittle bone disease baby',
    'baby fractures easily',
    'OI baby signs',
    'baby broken bones no trauma',
    'baby blue sclera brittle bones',
    'osteogenesis imperfecta newborn',
    'baby bone fragility',
  ],
  quickAnswer:
    'Osteogenesis imperfecta (OI), also known as brittle bone disease, is a genetic disorder affecting collagen production that makes bones extremely fragile. It affects about 1 in 15,000 to 20,000 births and ranges from mild (a few fractures over a lifetime) to severe (fractures occurring before birth). With careful management, bisphosphonate therapy, and adaptive strategies, children with OI can lead active and fulfilling lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Severe forms of OI (Type II and III) are often diagnosed prenatally or at birth. Babies may be born with fractures, bowed limbs, a soft skull, and blue or gray sclera (the whites of the eyes). Type II is the most severe and can be fatal in the newborn period. Milder forms (Type I) may not be diagnosed at birth. If your baby sustains a fracture from normal handling, OI should be considered. Careful handling is essential — always support the head and body fully.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with diagnosed OI need gentle handling by all caregivers. Diaper changes, lifting, and dressing require careful technique to avoid fractures. Despite the fragility, babies need interaction and stimulation for healthy development. Bisphosphonate therapy (pamidronate IV infusions) may be started in the first months of life for moderate to severe forms to strengthen bones. Blue sclera, if present, are a helpful diagnostic feature.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Motor development is often delayed because of bone fragility and the need to be cautious about falls. Physical therapy in a supportive environment (such as water therapy) helps build strength safely. Hearing should be monitored, as OI can cause hearing loss. Dental evaluation may reveal translucent teeth (dentinogenesis imperfecta) in some types. Safe positioning and adaptive equipment support developmental progress.',
    },
    {
      ageRange: '12 months+',
      context:
        'As children with OI grow, fracture frequency often decreases somewhat. Walking may be delayed, and some children with severe forms may use wheelchairs or braces. Mild forms (Type I) may allow typical mobility with reasonable precautions. Ongoing bisphosphonate therapy, orthopedic monitoring, and physical therapy continue. With appropriate support, children with OI can attend school, have friendships, and participate in adapted activities.',
    },
  ],
  whenNormal: [
    'Your baby with mild OI (Type I) has had only a few fractures and is growing well',
    'Your baby\'s blue sclera are a cosmetic feature of Type I OI and do not affect vision',
    'Your baby is on bisphosphonate therapy and fracture frequency has decreased',
    'Your baby is meeting developmental milestones, even if motor milestones are delayed or adapted',
  ],
  whenToMention: [
    'Your baby has had an unexplained fracture from minimal or no apparent trauma',
    'Your baby has blue sclera, a family history of frequent fractures, or signs of bone fragility',
    'Your baby with OI seems to be in pain or has swelling in a limb that could indicate a new fracture',
  ],
  whenToActNow: [
    'Your baby has sustained a fracture — seek medical care for proper splinting and pain management',
    'Your baby has difficulty breathing after a rib fracture, or has a head injury with a skull fracture — these require emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Osteogenesis Imperfecta. NIAMS, 2023.',
      url: 'https://www.niams.nih.gov/health-topics/osteogenesis-imperfecta',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Osteogenesis Imperfecta — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/osteogenesis-imperfecta/symptoms-causes/syc-20351773',
    },
  ],
};
