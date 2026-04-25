import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-limping',
  title: 'My Baby or Toddler Is Limping',
  category: 'medical',
  searchTerms: [
    'baby limping',
    'toddler limping',
    'toddler limping no injury',
    'baby favoring one leg',
    'toddler refusing to walk',
    'toddler limping after nap',
    'baby limp leg',
    'toddler limping with fever',
    'toddler hip pain',
    'toddler won\'t put weight on leg',
  ],
  quickAnswer:
    'A limp in a baby or toddler always deserves medical attention, as young children cannot reliably tell you where it hurts. The most common cause in toddlers is a minor injury such as a \'toddler\'s fracture\' (a subtle shin bone crack) or muscle strain. However, limping can also indicate infection in a joint or bone, hip problems, or other conditions that need prompt evaluation.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are not yet walking independently, but you may notice them favoring one leg during crawling, pulling to stand, or cruising. Asymmetric movement in an infant can indicate hip dysplasia, a fracture (including non-accidental injury that should be considered), infection of a bone or joint (osteomyelitis or septic arthritis), or a neurological condition. Any asymmetry in leg use, reluctance to move a leg, or swelling of a joint in an infant requires same-day pediatric evaluation.',
    },
    {
      ageRange: '1-2 years',
      context:
        'New walkers are prone to \'toddler\'s fractures,\' a subtle spiral fracture of the tibia (shinbone) that occurs from a twisting fall. The child may refuse to bear weight or limp without obvious swelling. These fractures sometimes do not show up on initial X-rays and may need repeat imaging. Transient synovitis (irritable hip), a temporary inflammation of the hip joint often following a viral illness, is another common cause. Septic arthritis (infected joint), though less common, requires urgent treatment and should be ruled out when fever is present.',
    },
    {
      ageRange: '2-3 years',
      context:
        'In addition to injuries, toddlers at this age can develop transient synovitis, growing pains (which typically occur at night and do not cause actual limping), or rarely, conditions like Legg-Calve-Perthes disease (loss of blood supply to the hip bone) or juvenile arthritis. A child who limps for more than a few days, limps with fever, or has progressive worsening of the limp should be evaluated. Your doctor may order X-rays, blood tests, and possibly an ultrasound of the hip.',
    },
  ],
  whenNormal: [
    'A brief, mild limp after a witnessed minor fall that resolves within 24-48 hours with the child returning to normal activity',
    'Occasional unsteady gait in a new walker who is still developing coordination (this is not a true limp)',
    'Mild limping in the morning that resolves quickly after getting up and moving, with no other symptoms',
  ],
  whenToMention: [
    'Your toddler has been limping for more than 2-3 days even without a known injury',
    'The limp seems to come and go over weeks or is gradually worsening',
    'Your child avoids using one leg, refuses to crawl on one side, or consistently holds one leg differently than the other',
  ],
  whenToActNow: [
    'Your child has a limp with fever, which may indicate a serious joint or bone infection (septic arthritis or osteomyelitis) requiring emergency evaluation  -  especially if a joint appears red, swollen, or warm, or the child refuses to move the limb at all',
    'Your child suddenly cannot bear any weight, is in severe pain, has significant swelling of a joint, or the limb appears deformed, as these require immediate medical assessment',
  ],
  relatedMilestones: [
    'walking',
    'cruising',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Limping in Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/bones-muscles/Pages/Limping.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Herman MJ, Martinek M. The Limping Child. Pediatrics in Review, 2015.',
      url: 'https://publications.aap.org/pediatricsinreview/article/36/5/184/34419/The-Limping-Child',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Limping Child: When to See a Doctor.',
      url: 'https://www.mayoclinic.org/symptoms/limping/basics/when-to-see-doctor/sym-20050860',
    },
  ],
};
