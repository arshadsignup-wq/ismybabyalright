import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'limb-deficiency-baby',
  title: 'My Baby Has a Congenital Limb Deficiency',
  category: 'medical',
  searchTerms: [
    'baby missing arm',
    'baby missing leg',
    'baby missing hand',
    'baby missing fingers',
    'congenital limb deficiency',
    'baby limb difference',
    'baby born without hand',
    'baby limb reduction defect',
    'baby prosthetic arm leg',
    'congenital amputation baby',
  ],
  quickAnswer:
    'Congenital limb deficiency means a baby is born with an absent or underdeveloped arm, hand, leg, foot, fingers, or toes. The deficiency can be transverse (similar to an amputation, where the limb ends at a certain point) or longitudinal (where a specific bone, like the radius or fibula, is missing while the rest of the limb is present). Most cases are isolated events with no known cause and are not associated with other birth defects. Children with limb differences adapt remarkably well and typically achieve excellent functional outcomes. Prosthetics, adaptive devices, and therapy are available but many children thrive without them.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A congenital limb deficiency is usually identified at birth, though some are detected on prenatal ultrasound. The initial evaluation includes a thorough examination for associated anomalies. Genetic testing may be offered, particularly if multiple limbs are affected or other birth defects are present. Referral to a pediatric orthopedic surgeon and a multidisciplinary limb deficiency clinic (if available) provides access to a team of specialists. Most parents feel overwhelmed initially - connecting with other families of children with limb differences can be profoundly supportive.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your baby will develop and reach milestones in their own way. Babies with upper limb differences typically learn to bring hands to midline and grasp objects using their residual limb or the other hand. Tummy time and motor exploration are important. For upper limb deficiencies, some families begin using a passive prosthetic (cosmetic device) around 3-6 months to help the baby get used to the weight and feel. Others prefer to wait or skip prosthetics entirely. There is no wrong choice - the decision is guided by your family\'s values and your child\'s needs.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As your baby becomes more mobile, adaptive strategies emerge naturally. Babies with lower limb deficiencies may begin using a prosthetic leg when they are ready to pull up and walk (typically 10-15 months). Babies with upper limb differences develop creative ways to crawl, grasp toys, and explore. Occupational therapy can introduce adaptive techniques for self-feeding and play. Active prosthetics (with a terminal device for grasping) may be introduced for upper limb deficiencies around 12-18 months if desired.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Toddlers with limb differences are often remarkably resourceful. Prosthetic devices are updated as the child grows. For lower limb deficiencies, the prosthetic is adjusted for walking, running, and climbing. Physical therapy supports gross motor development. Occupational therapy focuses on fine motor tasks like eating, dressing, and playing. Some children prefer to use their body as-is rather than a prosthetic - both approaches lead to excellent functional outcomes. Peer interaction at this age is usually straightforward since toddlers are naturally accepting of differences.',
    },
    {
      ageRange: '3 years+',
      context:
        'Children with limb differences participate in sports, play, school, and all childhood activities. Adaptive equipment and sports prosthetics are available for activities like swimming, cycling, and running. As children grow, they develop preferences about using prosthetics versus going without. Psychological support is available for children and families navigating social situations, though many children with limb differences report high self-esteem and body satisfaction. The limb difference community offers camps, mentorship programs, and peer support that families find invaluable.',
    },
  ],
  whenNormal: [
    'Your baby has an isolated limb difference with no associated health problems',
    'Your baby is meeting motor milestones in an adapted way appropriate for their limb difference',
    'Your child is using prosthetics or adaptive devices successfully, or is thriving without them',
    'Your child is active, engaged, and developing well socially and cognitively',
    'You are connected with a limb deficiency clinic or orthopedic team for ongoing care',
  ],
  whenToMention: [
    'You have questions about prosthetic options, timing, or what to expect',
    'You are concerned about your baby\'s motor development or milestone progression',
    'You notice skin irritation or breakdown at a prosthetic socket site',
    'You want to discuss occupational or physical therapy to support your child\'s development',
    'You are interested in connecting with other families or support organizations',
  ],
  whenToActNow: [
    'The residual limb becomes red, swollen, warm, or painful, which could indicate infection or vascular compromise',
    'Your child has a growth on or significant change in the appearance of the residual limb',
    'Your child develops new pain in the residual limb, joints, or back that limits function',
    'Your child has a fall or injury involving the residual limb with significant swelling, bruising, or inability to use the limb as usual',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['amniotic-band-syndrome-baby'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Upper and Lower Limb Reduction Defects. Birth Defects, 2024.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-limb-defects.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Limb Reduction Defects. MedlinePlus, 2024.',
      url: 'https://medlineplus.gov/ency/article/001578.htm',
    },
    {
      org: "Children's Hospital",
      citation:
        "Shriners Children's. Limb Deficiency and Limb Length Discrepancy.",
      url: 'https://www.shrinerschildrens.org/en/conditions/limb-deficiency',
    },
  ],
};
