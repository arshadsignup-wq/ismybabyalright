import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'juvenile-dermatomyositis-child',
  title: 'Juvenile Dermatomyositis (JDM) in Children',
  category: 'medical',
  searchTerms: [
    'juvenile dermatomyositis child',
    'JDM child',
    'child muscle weakness rash',
    'heliotrope rash child eyelids',
    'Gottron papules knuckles child',
    'child trouble climbing stairs weakness',
    'child proximal muscle weakness',
    'child purple eyelid rash',
    'autoimmune muscle disease child',
    'child difficulty getting up from floor',
  ],
  quickAnswer:
    'Juvenile dermatomyositis (JDM) is a rare autoimmune disease that causes inflammation of the muscles and skin in children. The two hallmark signs are proximal muscle weakness (difficulty climbing stairs, getting up from the floor, raising arms overhead) and characteristic skin rashes — a heliotrope (purplish-red) rash on the upper eyelids and Gottron papules (red, scaly bumps over the knuckles, elbows, and knees). JDM affects about 3 in 1 million children per year, most commonly between ages 5 and 10. With prompt treatment (usually high-dose corticosteroids and methotrexate), most children achieve remission, though treatment often takes 1-2 years or more.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'JDM is extremely rare in infancy. Muscle weakness in a baby this young is more likely due to other causes such as congenital myopathy, spinal muscular atrophy, or hypotonia from other conditions. If your baby seems unusually floppy or weak, your pediatrician should evaluate for neuromuscular conditions. A characteristic skin rash alongside weakness would be very unusual at this age but should prompt urgent specialist referral.',
    },
    {
      ageRange: '6-12 months',
      context:
        'JDM remains very uncommon before age 2. Any combination of progressive muscle weakness and skin rash in an infant should be evaluated urgently. In infants, weakness may manifest as difficulty holding up the head, delayed motor milestones, poor feeding, or a weak cry. If your baby has both skin changes (especially purple or red discoloration around the eyes) and muscle weakness, seek prompt medical attention.',
    },
    {
      ageRange: '1-3 years',
      context:
        'While JDM more commonly presents after age 5, it can occur in toddlers. Early signs may include a change in activity level — a previously active toddler who stops wanting to be picked up, avoids climbing, has trouble getting up from sitting, or develops a new waddling gait. The skin rash may precede weakness: look for purplish-red discoloration on the eyelids (heliotrope rash) and red, rough patches over the knuckles (Gottron papules). Children may also develop a widespread red rash on sun-exposed areas of the chest, shoulders, and back.',
    },
    {
      ageRange: '3+ years',
      context:
        'This is the most common age range for JDM onset (peak 5-10 years). Children typically develop gradual proximal muscle weakness — difficulty running, climbing stairs, getting up from the floor (positive Gower sign — using hands to "walk up" the legs to stand), combing hair, or reaching overhead. The characteristic rashes may appear before, with, or after weakness. Additional features can include calcinosis (calcium deposits under the skin), nail fold capillary changes, fatigue, and low-grade fevers. Early diagnosis and treatment significantly improve outcomes and reduce the risk of calcinosis and long-term muscle damage.',
    },
  ],
  whenNormal: [
    'Your child has a brief period of muscle soreness after unusually vigorous physical activity that resolves in 1-2 days',
    'Your child occasionally seems tired or weak during a viral illness but returns to full strength after recovery',
    'Your child has a red rash on the cheeks or body that is clearly related to sunburn, eczema, or an allergic reaction',
    'Your child has normal strength and can run, climb, and get up from the floor without difficulty',
  ],
  whenToMention: [
    'Your child has progressive difficulty with activities requiring proximal strength — climbing stairs, getting up from the floor, raising arms overhead',
    'Your child has a persistent purple or red rash on the eyelids or red, scaly bumps over the knuckles that does not respond to typical eczema treatments',
    'Your child complains of widespread muscle pain or weakness lasting more than 2 weeks without an obvious cause',
  ],
  whenToActNow: [
    'Your child has rapidly worsening muscle weakness combined with skin rash, especially if they are having difficulty swallowing, a weak voice, or trouble breathing — severe JDM can affect swallowing and respiratory muscles',
    'Your child with known JDM develops difficulty swallowing, choking on food, or a nasal quality to their voice, which may indicate progression requiring urgent treatment adjustment',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'baby-autoimmune-condition-signs',
    'floppy-baby-syndrome',
    'juvenile-idiopathic-arthritis-child',
    'pediatric-lupus-signs-child',
  ],
  sources: [
    {
      org: 'ACR',
      citation:
        'American College of Rheumatology. Juvenile Dermatomyositis. ACR, 2023.',
      url: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Juvenile-Dermatomyositis',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Myositis. NIAMS, 2023.',
      url: 'https://www.niams.nih.gov/health-topics/myositis',
    },
    {
      org: 'AAP',
      citation:
        'Feldman BM, Rider LG, Reed AM, Pachman LM. Juvenile Dermatomyositis and Other Idiopathic Inflammatory Myopathies of Childhood. Lancet, 2008.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18572080/',
    },
  ],
};
