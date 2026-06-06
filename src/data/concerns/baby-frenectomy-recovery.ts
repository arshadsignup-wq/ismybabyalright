import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-frenectomy-recovery',
  title: 'What to Expect After a Tongue-Tie or Lip-Tie Release (Frenectomy)',
  category: 'medical',
  searchTerms: [
    'frenectomy recovery baby',
    'tongue tie release healing',
    'lip tie release recovery',
    'frenectomy aftercare baby',
    'tongue tie surgery recovery baby',
    'frenectomy wound care',
    'tongue tie release feeding after',
    'frenectomy exercises baby',
    'tongue tie release pain baby',
    'frenectomy reattachment prevention',
  ],
  quickAnswer:
    'After a frenectomy (tongue-tie or lip-tie release), most babies can feed immediately. A white or yellowish patch forms at the wound site within 24 hours, which is normal healing tissue (not infection). Recovery typically takes 1-2 weeks. Wound care exercises (stretches) are often recommended to prevent reattachment. Mild fussiness for 24-48 hours is normal. Many babies show improved feeding within days, though some take weeks to fully adjust.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Frenectomy is most commonly performed in the first weeks to months of life to improve breastfeeding. After the procedure, try feeding your baby as soon as possible. The familiar sucking motion is soothing and helps the wound heal. Pain is usually mild and can be managed with acetaminophen (with pediatrician guidance). Perform the recommended stretching exercises 4-6 times daily as instructed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Recovery at this age is similar but your baby may be more resistant to the stretching exercises. Be gentle but consistent with wound care exercises as recommended by your provider. The wound will develop a white or yellow patch that looks alarming but is normal granulation tissue. Do not try to remove it. Feeding improvement may be gradual.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If frenectomy is done at this age, it may be for feeding difficulties or in preparation for speech development. Recovery is similar though older babies may be fussier. Cold teething toys can provide comfort. Continue stretches as directed. Some providers recommend bodywork (craniosacral therapy or chiropractic) alongside frenectomy, though evidence for these adjuncts is limited.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Frenectomy in toddlers may be done for speech, feeding, or dental reasons. Recovery may involve more discomfort as toddlers are more aware. Offer soft, cool foods. The wound care stretches may be challenging with an uncooperative toddler. Some providers use laser rather than scissors for older children, which may cause less post-procedure discomfort.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Frenectomy at this age is typically for speech concerns. Recovery takes 1-2 weeks. Offer soft foods and avoid crunchy or sharp foods. If speech therapy has been recommended alongside the frenectomy, it usually begins 2-4 weeks after the procedure to allow full healing.',
    },
  ],
  whenNormal: [
    'A white or yellowish patch develops at the wound site within 24 hours (normal healing tissue)',
    'Your baby is fussy for 24-48 hours after the procedure',
    'Feeding is slightly awkward for the first few days as your baby adjusts to their new tongue mobility',
    'Mild bleeding immediately after the procedure that stops quickly',
  ],
  whenToMention: [
    'Feeding has not improved within 2-3 weeks after the procedure',
    'You are concerned the wound may be reattaching despite stretching exercises',
    'Your baby seems to be in significant pain beyond the first 48 hours',
  ],
  whenToActNow: [
    'Heavy bleeding from the wound site that does not stop with gentle pressure within 10 minutes',
    'Signs of infection at the wound: increasing redness, swelling, foul smell, fever, or your baby refuses to feed entirely',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-speech-therapy-referral',
    'baby-tongue-injury-bleeding',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tongue-Tie. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Tongue-Tie.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Frenotomy for Tongue-Tie in Newborn Infants. Cochrane Database.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28612916/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Tongue-tie (ankyloglossia).',
      url: 'https://www.mayoclinic.org/diseases-conditions/tongue-tie/diagnosis-treatment/drc-20378458',
    },
  ],
};
