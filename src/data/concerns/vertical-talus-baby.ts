import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vertical-talus-baby',
  title: 'Vertical Talus (Rocker-Bottom Foot)',
  category: 'medical',
  searchTerms: [
    'vertical talus baby',
    'rocker bottom foot newborn',
    'baby foot convex sole',
    'congenital vertical talus',
    'rigid flatfoot baby',
    'baby foot rounded bottom',
    'rocker bottom foot deformity',
    'baby foot dorsiflexed rigid',
    'vertical talus treatment casting',
    'congenital rocker bottom foot diagnosis',
  ],
  quickAnswer:
    'Congenital vertical talus is a rare rigid flatfoot deformity present at birth in which the talus bone in the foot is displaced, causing the sole to have a convex, "rocker-bottom" shape. The foot appears rounded on the bottom and the forefoot points upward and outward. It is distinguished from the much more common and benign calcaneovalgus foot by its rigidity. Treatment involves serial casting (reverse Ponseti technique) followed by a minor surgical procedure, with excellent outcomes when treated early. Vertical talus can occur in isolation or may be associated with genetic conditions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Vertical talus is typically identified at birth or during newborn examination. The affected foot has a characteristic rigid, convex sole that looks like the bottom of a rocking chair. The forefoot is dorsiflexed (pointing up) and the hindfoot is in equinus (pointing down). Unlike calcaneovalgus foot, which is flexible and can be gently moved to a normal position, a vertical talus foot is stiff and cannot be passively corrected. Your pediatrician may order X-rays to confirm the diagnosis. It is important to evaluate for associated conditions such as chromosomal abnormalities, spinal cord anomalies, or neuromuscular disorders.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Treatment typically begins in the first months of life with serial casting using a reverse Ponseti technique. The foot is progressively stretched and casted into a corrected position over several weekly cast changes. After the casting phase, a minor surgical procedure (percutaneous pin fixation and often Achilles tenotomy) is performed to hold the talus in its corrected position. Most pediatric orthopedists prefer to begin treatment early for the best outcomes. After surgery, the child wears a brace (similar to the clubfoot brace) to maintain correction.',
    },
    {
      ageRange: '1-3 years',
      context:
        'If vertical talus was treated in infancy, your child will be in the maintenance phase, wearing braces as directed and attending regular follow-up appointments with the orthopedist to ensure the correction is maintained. If the condition was missed or untreated, the rigid flatfoot becomes more apparent as the child begins walking. Untreated vertical talus causes pain and calluses on the prominent sole and makes fitting shoes very difficult. Late-presenting cases may require more extensive open surgical reconstruction.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Children who were treated early for vertical talus typically have good foot function and can participate in normal activities. Long-term follow-up continues to monitor for recurrence. In rare cases where the correction has been lost, revision surgery may be needed. Untreated vertical talus in older children causes significant functional impairment with pain, difficulty walking, and inability to wear standard shoes, requiring more complex reconstructive surgery.',
    },
  ],
  whenNormal: [
    'Your baby has flexible flat feet, which is entirely normal in infants and young children and does not indicate vertical talus',
    'Your baby was born with a foot that bends upward toward the shin but is flexible and can be gently moved to a neutral position, which is likely calcaneovalgus (benign positional deformity)',
    'Your child was treated for vertical talus, completed casting and surgery, and is developing good foot alignment during follow-up',
    'Your toddler has flat-appearing feet while standing, which is normal because the arch develops gradually and may not be evident until age 5-6',
  ],
  whenToMention: [
    'Your newborn has a rigid foot with a convex or rounded sole that cannot be passively stretched to a normal position',
    'Your baby has a foot that looks very different from the other foot in shape, with the sole appearing rounded or "rocking chair" shaped',
    'Your child who was treated for vertical talus seems to have worsening foot alignment or new difficulty with walking or shoes',
  ],
  whenToActNow: [
    'Your newborn has a rigid rocker-bottom foot deformity along with other physical findings such as unusual facial features, clenched hands, or decreased movement, which may suggest an underlying genetic condition requiring comprehensive evaluation',
    'Your child with known vertical talus develops sudden foot pain, significant swelling, or skin breakdown over the bony prominence on the sole of the foot',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['clubfoot-baby', 'flat-feet'],
  sources: [
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Vertical Talus. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/vertical-talus/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Foot Deformities. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Leg-and-Foot-Problems.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Congenital Vertical Talus. GeneReviews, NCBI Bookshelf.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1572/',
    },
  ],
};
