import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hearing-aid-fitting-baby',
  title: 'Hearing Aid Fitting for Babies',
  category: 'medical',
  searchTerms: [
    'hearing aid baby',
    'hearing aid fitting infant',
    'baby hearing aid age',
    'when can baby get hearing aids',
    'behind the ear hearing aid baby',
    'hearing aid for newborn',
    'baby hearing aid adjustment',
    'pediatric hearing aid',
    'hearing aid keeps falling off baby',
  ],
  quickAnswer:
    'Hearing aids can be fitted for babies as young as one month old after a confirmed diagnosis of hearing loss. Behind-the-ear (BTE) hearing aids are the standard type used for infants and young children because they are safe, adjustable, and can accommodate ear growth. Early fitting is critical  -  babies who receive hearing aids before 6 months of age and are enrolled in early intervention have significantly better language outcomes. Your audiologist will program the aids specifically for your baby\'s hearing loss and make regular adjustments as your child grows.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If hearing loss is confirmed through diagnostic ABR testing, hearing aids can be fitted within weeks of diagnosis. Ear molds are custom-made from impressions of your baby\'s ears and will need to be replaced frequently (every few weeks to months) as your baby grows rapidly. BTE hearing aids sit behind the ear with a soft mold in the ear canal. Initial fitting involves careful programming based on your baby\'s specific hearing loss pattern.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby was recently diagnosed and fitted with hearing aids, this period involves fine-tuning and regular follow-up appointments with the audiologist. You may notice your baby starting to respond more to sounds, turning toward voices, or becoming more vocal. Keeping the hearing aids on a young baby can be challenging  -  retention clips and headbands can help. Consistent daily wear is important even if it feels difficult at first.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, your baby should be wearing hearing aids consistently during all waking hours. Ear molds still need regular replacement as ears grow. Your audiologist will perform real-ear measurements and behavioral testing to verify the hearing aids are providing appropriate amplification. Babies at this stage should be enrolled in speech-language therapy and early intervention. You should notice increasing responsiveness to sounds and emerging babbling.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers often become more resistant to wearing hearing aids as they develop the ability to remove them. Consistent routines and positive reinforcement help. At this age, your child may be assessed for cochlear implant candidacy if hearing aids are not providing sufficient benefit. Hearing aids should be checked daily for proper function, and ear molds replaced every 3-6 months. Your audiologist will continue to adjust programming as more detailed hearing information becomes available through behavioral testing.',
    },
  ],
  whenNormal: [
    'Your baby\'s hearing aids whistle occasionally (feedback)  -  this is common and usually means the ear mold needs replacing due to growth.',
    'Your baby pulls at or removes the hearing aids frequently  -  this is normal exploratory behavior and persistence with replacement helps build the habit.',
    'The audiologist adjusts the hearing aid settings at each visit  -  regular reprogramming is expected as your baby grows and more hearing information is available.',
    'Your baby seems startled by new sounds after first being fitted  -  adjusting to amplified sound takes time.',
  ],
  whenToMention: [
    'Your baby does not seem to respond to sounds even while wearing hearing aids consistently  -  the programming may need adjustment.',
    'The hearing aids are causing skin irritation, redness, or sores on or behind the ears.',
    'You are having difficulty keeping the hearing aids on your baby and need strategies or equipment to help with retention.',
  ],
  whenToActNow: [
    'Your baby shows no benefit from hearing aids after several months of consistent wear and appropriate programming  -  prompt referral for cochlear implant evaluation should be discussed.',
    'Your baby develops sudden new symptoms like drainage from the ear, increased hearing loss, or pain while wearing hearing aids  -  seek prompt audiological and medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing Loss: What Parents Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Hearing Aids.',
      url: 'https://www.nidcd.nih.gov/health/hearing-aids',
    },
  ],
};
