import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'soft-spot-concerns',
  title: 'Soft Spot (Fontanelle) Concerns',
  searchTerms: [
    'baby soft spot',
    'fontanelle sunken',
    'baby soft spot bulging',
    'soft spot pulsing is that normal',
    'when does soft spot close',
    'baby soft spot too big',
    'baby soft spot too small',
    'can I touch baby soft spot',
    'fontanelle concerns baby',
    'baby soft spot feels hard',
  ],
  quickAnswer:
    'Your baby\'s soft spots (fontanelles) are normal openings where the skull bones have not yet fused, allowing for brain growth. It is completely normal for the soft spot to pulse gently or feel slightly firm or soft depending on your baby\'s position, and it typically closes between 12 and 18 months.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns have two main soft spots: a larger one on top of the head (anterior fontanelle) and a smaller one near the back (posterior fontanelle). The back one often closes by about 2 months. The top one is usually about 1-3 cm across, though there is a wide range of normal sizes. It is perfectly safe to gently touch or wash over the soft spot.',
    },
    {
      ageRange: '2-6 months',
      context:
        'The anterior fontanelle remains open and is easy to feel. It is normal for it to pulse gently in time with your baby\'s heartbeat, to appear slightly sunken when your baby is upright, and to look slightly fuller when your baby is lying down or crying. These are all normal variations based on position and activity.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The fontanelle gradually becomes smaller as the skull bones grow toward each other. You may notice it feels firmer and less prominent than it did in the early months. The size can vary significantly between babies, and some fontanelles close earlier than others without any concern.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Most anterior fontanelles close between 12 and 18 months, though some take up to 24 months, which can still be normal. Your doctor will check the fontanelle at routine visits. Early closure or very late closure can occasionally need evaluation, but your doctor will guide you if so.',
    },
    {
      ageRange: '18 months+',
      context:
        'By 18 months, the majority of babies\' soft spots have closed or are nearly closed. If your baby\'s fontanelle is still widely open at 18 months, your doctor may want to look into it further, but this alone does not necessarily indicate a problem.',
    },
  ],
  whenNormal: [
    'The soft spot pulses gently, which is simply your baby\'s heartbeat being visible through the thin membrane',
    'The soft spot appears slightly sunken when your baby is upright and calm and well-hydrated',
    'The soft spot looks slightly fuller or more raised when your baby is crying or lying flat',
    'The soft spot feels firm but not rigid, and your baby is well and feeding normally',
    'Your baby\'s soft spot is larger or smaller than another baby\'s, as there is a wide normal range',
  ],
  whenToMention: [
    'The soft spot seems unusually large or has not started to get smaller by 12 months',
    'The soft spot appears to have closed very early, before 6 months, which may need a check to ensure skull growth is not restricted',
    'You are unsure whether the soft spot looks normal and would like reassurance at your next visit',
  ],
  whenToActNow: [
    'The soft spot is noticeably sunken and your baby has signs of dehydration such as fewer wet nappies, dry mouth, no tears when crying, or lethargy, as this needs prompt medical attention',
    'The soft spot is bulging or swollen when your baby is upright and calm (not during crying), as this can indicate increased pressure in the skull and requires urgent evaluation',
    'Your baby has a bulging fontanelle along with fever, vomiting, excessive sleepiness, or a high-pitched cry, which could indicate meningitis or another serious condition requiring emergency care',
  ],
  relatedMilestones: [
    'head-growth',
    'head-circumference',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Head. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Dehydration in Infants and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/dehydration-heat-stroke/Pages/Signs-of-Dehydration.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards: Head Circumference-for-Age.',
      url: 'https://www.who.int/tools/child-growth-standards/standards/head-circumference-for-age',
    },
  ],
};
