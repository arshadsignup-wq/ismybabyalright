import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tinnitus-in-toddlers',
  title: 'Tinnitus in Toddlers',
  category: 'medical',
  searchTerms: [
    'tinnitus toddler',
    'ringing in ears baby',
    'toddler says ears ringing',
    'toddler hears buzzing',
    'child complaining of noise in ear',
    'tinnitus in children',
    'baby ear ringing after loud noise',
    'toddler hearing strange sounds',
  ],
  quickAnswer:
    'Tinnitus  -  the perception of ringing, buzzing, or other sounds in the ears without an external source  -  can occur in young children, though it is difficult to identify in babies and toddlers who cannot describe their experience. In children, tinnitus is most often associated with hearing loss, ear infections, earwax buildup, or exposure to loud noise. It is estimated that 6-36% of children with hearing loss also experience tinnitus. If your toddler covers their ears frequently, seems distressed by sounds others cannot hear, or mentions hearing noises, a hearing evaluation is the important first step.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tinnitus cannot be identified in babies this young since they cannot communicate the experience. If your baby seems unusually distressed, covers or rubs their ears frequently, or has difficulty settling, these are nonspecific signs that could have many causes. If hearing loss is present, tinnitus may accompany it, but the primary focus at this age is on hearing testing and intervention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As with younger babies, tinnitus is not diagnosable at this age through observation alone. Ensure your baby\'s hearing has been evaluated if there are any concerns. Protect your baby from loud noise exposure (concerts, power tools, fireworks), as noise-induced damage can cause both hearing loss and tinnitus even in very young children.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age may respond to internal ear sensations by rubbing or hitting their ears, but this behavior more commonly relates to ear infections, teething, or self-soothing. If your baby has confirmed hearing loss, be aware that tinnitus may be present as well and can affect comfort and sleep. Maintaining consistent sound environments and using white noise at safe levels may be soothing.',
    },
    {
      ageRange: '12 months+',
      context:
        'As toddlers begin to develop language, some may be able to express ear-related discomfort. A toddler who says they hear "beeping," "buzzing," or "noise" when it is quiet may be describing tinnitus. This should prompt a hearing evaluation. Common treatable causes in toddlers include earwax impaction, middle ear fluid, and ear infections. If no physical cause is found and hearing is normal, the tinnitus may still be present but is often transient. Avoid exposing your toddler to loud environments, and consult an audiologist if symptoms persist.',
    },
  ],
  whenNormal: [
    'Your toddler occasionally mentions hearing a sound but is not distressed and the episodes are brief and infrequent.',
    'Your child covers their ears in genuinely loud environments  -  this is normal sound sensitivity, not tinnitus.',
    'Your toddler rubs their ears during teething or when tired  -  this is unlikely to be tinnitus-related.',
    'Brief buzzing or ringing after exposure to a loud sound (like a dog barking nearby) that resolves quickly.',
  ],
  whenToMention: [
    'Your toddler repeatedly says they hear sounds when it is quiet and seems bothered by it.',
    'Your child with known hearing loss seems more irritable or has trouble sleeping, which could indicate tinnitus.',
    'Your toddler frequently covers their ears in the absence of obvious loud sounds.',
  ],
  whenToActNow: [
    'Your toddler describes hearing constant noise in their ears along with ear pain, drainage, or sudden hearing change  -  this combination needs prompt medical evaluation.',
    'Your child has persistent tinnitus-like complaints after a known loud noise exposure event  -  this could indicate noise-induced hearing damage requiring urgent audiological assessment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Noise-Induced Hearing Loss in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Noise-Induced-Hearing-Loss.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Tinnitus.',
      url: 'https://www.nidcd.nih.gov/health/tinnitus',
    },
  ],
};
