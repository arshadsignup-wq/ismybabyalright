import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nicu-baby-bonding-difficulty-parent',
  title: 'Bonding Difficulties After a NICU Stay',
  category: 'behavior',
  searchTerms: [
    'NICU bonding difficulty',
    'bonding with NICU baby',
    'NICU parent guilt',
    'can\'t bond with premature baby',
    'NICU PTSD parent',
    'premature baby attachment',
    'NICU discharge bonding',
    'NICU baby doesn\'t know me',
    'NICU separation anxiety parent',
    'bonding after NICU trauma',
    'skin to skin NICU baby',
  ],
  quickAnswer:
    'Difficulty bonding after a NICU stay is extremely common and does not mean anything is wrong with you or your baby. Up to 40% of NICU parents report symptoms of PTSD, and the experience of separation, medical interventions, and lack of normal parenting opportunities can all interfere with the bonding process. Research consistently shows that NICU babies can and do form secure attachments, even after prolonged separations. Bonding is not a single moment but a process that unfolds over weeks and months. Skin-to-skin contact (kangaroo care), being involved in your baby\'s care, and mental health support for parents are all evidence-based approaches.',
  byAge: [
    {
      ageRange: '0-3 months (during NICU stay)',
      context:
        'During the NICU stay, bonding may feel impossible when your baby is surrounded by monitors, tubes, and medical staff. However, there are meaningful ways to connect: kangaroo care (skin-to-skin holding) as soon as medically stable has profound benefits for both parent and baby, including stabilizing the baby\'s temperature and heart rate and reducing parental stress. Hold your baby as much as allowed, provide breast milk if possible, read or sing to your baby, and participate in diaper changes and feedings. Ask NICU staff about developmental care and cue-based caregiving.',
    },
    {
      ageRange: 'Immediately after NICU discharge',
      context:
        'Coming home from the NICU can be overwhelming rather than joyful. Parents may feel hypervigilant about their baby\'s breathing and health, anxious about caring for the baby without monitors, or disconnected from the baby they spent weeks watching through an incubator. These feelings are normal. Allow yourself time to adjust, and know that bonding after NICU discharge may take weeks or months. Some parents feel a flood of connection at home; others feel numb or detached. Both are common responses to NICU trauma. Seek support from NICU parent groups and mental health professionals experienced with NICU families.',
    },
    {
      ageRange: '3-12 months after NICU discharge',
      context:
        'As your baby grows, bonding typically strengthens through daily routines of feeding, holding, playing, and responding to your baby\'s cues. However, NICU-related PTSD or depression in parents can persist and interfere with the bonding process. Signs that you may need professional support include: intrusive memories of the NICU, avoiding things that remind you of the experience, emotional numbness toward your baby, hypervigilance or constant fear that something is wrong, and guilt about not bonding "naturally." Therapy (particularly EMDR or CPT for trauma) can be very effective for NICU-related PTSD.',
    },
  ],
  whenNormal: [
    'You feel anxious about your baby\'s health in the first weeks after NICU discharge, but the anxiety gradually decreases.',
    'Bonding feels like a gradual process rather than an instant connection.',
    'You have good days and bad days with how connected you feel to your baby.',
    'Your baby may need time to adjust to home and may initially seem to prefer NICU nurses\' handling, which is temporary.',
  ],
  whenToMention: [
    'You are struggling to feel connected to your baby weeks or months after NICU discharge.',
    'You have persistent anxiety, nightmares, or flashbacks related to the NICU experience.',
    'You feel detached from or resentful toward your baby and this is causing you distress.',
    'You want referrals for NICU parent support groups or mental health services.',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby.',
    'You feel unable to provide basic care for your baby because of emotional detachment or overwhelming anxiety.',
    'You are experiencing severe PTSD symptoms (flashbacks, dissociation, severe avoidance) that are affecting your daily functioning.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'attachment-concerns',
    'infant-mental-health-first-1001-days',
    'phone-addiction-parent-baby-bonding',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discharge Planning for NICU Parents. Pediatrics, 2008.',
      url: 'https://publications.aap.org/pediatrics/article/122/5/e1119/72584/Hospital-Discharge-of-the-High-Risk-Neonate',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Posttraumatic Stress Disorder in Parents of NICU Infants. Journal of Perinatology, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25836321/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Bonding with Your Baby in the NICU.',
      url: 'https://www.marchofdimes.org/find-support/topics/parenthood/bonding-your-baby-nicu',
    },
  ],
};
