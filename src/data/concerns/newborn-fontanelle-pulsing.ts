import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-fontanelle-pulsing',
  title: 'Pulsing Soft Spot (Fontanelle) in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn soft spot pulsing',
    'baby fontanelle pulsing',
    'soft spot heartbeat visible',
    'newborn fontanelle throbbing',
    'baby soft spot moving',
    'fontanelle pulsing normal',
    'newborn head soft spot beating',
    'baby anterior fontanelle pulsating',
    'soft spot visibly pulsing',
    'is pulsing fontanelle normal',
  ],
  quickAnswer:
    'A pulsing or throbbing soft spot (fontanelle) on your newborn\'s head is completely normal. The pulsation you see is the heartbeat transmitted through the blood vessels beneath the thin membrane covering the fontanelle. This is a reassuring sign that your baby\'s circulatory system is functioning well. The fontanelle should be flat or slightly concave when your baby is calm and upright.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The anterior fontanelle (the larger soft spot on top of the head) and posterior fontanelle (the smaller one toward the back) are normal openings between the skull bones. The visible pulsation is your baby\'s heartbeat transmitted through blood vessels beneath the fontanelle membrane. This is completely normal and expected. A normal fontanelle is flat or slightly concave when baby is calm and upright. It may bulge slightly when baby cries or strains, which is also normal.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The posterior fontanelle typically closes by 2-3 months. The anterior fontanelle remains open and may continue to show visible pulsation, which remains normal. Continue to be aware of the fontanelle\'s appearance: it should remain soft and flat when your baby is calm.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The anterior fontanelle remains open and pulsation may still be visible. This is normal. The fontanelle will gradually become smaller as the skull bones grow together. It typically closes between 9-18 months of age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The anterior fontanelle is still open and may begin to gradually close. Pulsation may be less visible as the opening decreases in size. Complete closure typically occurs between 12-18 months. Your pediatrician checks the fontanelle at each well-child visit.',
    },
  ],
  whenNormal: [
    'Visible pulsation of the soft spot that matches your baby\'s heartbeat',
    'Fontanelle that is flat or slightly concave when baby is calm and upright',
    'Slight bulging of the fontanelle when baby cries or strains that resolves when calm',
    'Both the pulsation and the soft spot itself are present and expected',
  ],
  whenToMention: [
    'The fontanelle appears to be closing very early (before 6 months) or very late (after 18 months)',
    'You notice the fontanelle seems unusually large or small',
    'You are unsure whether the fontanelle appearance is normal',
  ],
  whenToActNow: [
    'A persistently bulging or tense fontanelle when baby is calm and upright, which could indicate increased intracranial pressure from infection (meningitis) or hydrocephalus',
    'A significantly sunken fontanelle, which can be a sign of dehydration, especially if baby is also feeding poorly or has fewer wet diapers',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Head. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fontanelles. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003310.htm',
    },
  ],
  relatedConcernSlugs: ['newborn-head-molding', 'craniosynostosis-signs', 'abnormal-head-shape'],
};
