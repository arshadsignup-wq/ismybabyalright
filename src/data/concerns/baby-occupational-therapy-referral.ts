import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-occupational-therapy-referral',
  title: 'When Does My Baby Need Occupational Therapy?',
  category: 'medical',
  searchTerms: [
    'baby occupational therapy',
    'baby OT referral',
    'when does baby need occupational therapy',
    'pediatric occupational therapy infant',
    'baby fine motor delay',
    'baby feeding therapy OT',
    'baby sensory processing OT',
    'infant occupational therapy what to expect',
    'baby not using hands well',
    'occupational therapy baby development',
  ],
  quickAnswer:
    'Pediatric occupational therapy helps babies develop fine motor skills (hand use, grasping, reaching), feeding skills, sensory processing, and daily living activities. OT may be recommended if your baby has difficulty with feeding, limited hand use, sensory sensitivities, or delays in fine motor milestones. OT focuses on helping your baby participate in the everyday "occupations" of childhood: eating, playing, and exploring.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'OT for very young babies typically focuses on feeding difficulties (latching, sucking coordination, bottle feeding), sensory regulation (calming techniques for fussy babies), and early hand development. Premature babies and those with medical conditions often benefit from early OT to support feeding and development.',
    },
    {
      ageRange: '3-6 months',
      context:
        'OT may be recommended if your baby has difficulty grasping and bringing objects to their mouth, seems to avoid or overreact to touch, or has ongoing feeding challenges. The therapist works on hand-eye coordination, reaching, grasping, and comfortable sensory experiences through play.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Fine motor milestones like transferring objects between hands, using a pincer grasp, and self-feeding become important. OT can help if your baby is not developing these skills on the expected timeline. Feeding therapy within OT addresses difficulties with transitioning to solids, textured foods, and self-feeding.',
    },
    {
      ageRange: '12-24 months',
      context:
        'OT at this age may focus on using utensils, stacking blocks, manipulating toys, and early self-care skills. Sensory processing concerns (extreme pickiness about textures, avoiding messy play, or seeking intense sensory input) are also addressed in OT. The therapist uses play-based activities tailored to your toddler\'s needs.',
    },
    {
      ageRange: '2-3 years',
      context:
        'OT for older toddlers may address drawing, cutting with scissors, dressing, feeding independence, and sensory processing. If your child has been diagnosed with autism spectrum disorder or a sensory processing disorder, OT is a key part of their treatment plan.',
    },
  ],
  whenNormal: [
    'Your baby is developing fine motor skills within the normal range',
    'Your baby is making progress with OT exercises at home',
    'Minor preferences or sensitivities that do not significantly impact daily activities',
  ],
  whenToMention: [
    'Your baby does not seem interested in reaching for or grasping objects by 5-6 months',
    'Your baby has significant feeding difficulties beyond normal pickiness',
    'Your baby seems extremely sensitive to or avoidant of certain textures, sounds, or sensory experiences',
  ],
  whenToActNow: [
    'Your baby suddenly stops using their hands or loses fine motor skills they previously had',
    'Feeding difficulties are severe enough that your baby is losing weight or not gaining appropriately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-physical-therapy-referral',
    'baby-speech-therapy-referral',
    'baby-developmental-pediatrician-referral',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Occupational Therapy for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Occupational-Therapy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Occupational Therapy in Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29058631/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. If You Are Concerned About Your Child\'s Development.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
  ],
};
