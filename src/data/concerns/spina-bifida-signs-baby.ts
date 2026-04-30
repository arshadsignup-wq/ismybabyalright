import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'spina-bifida-signs-baby',
  title: 'Signs of Spina Bifida in Baby',
  category: 'physical',
  searchTerms: [
    'spina bifida signs baby',
    'baby dimple on spine',
    'baby hairy patch on back',
    'spina bifida occulta baby',
    'baby spinal dimple deep',
    'baby sacral tuft of hair',
    'spina bifida symptoms infant',
    'baby birthmark on lower back',
    'tethered cord baby signs',
    'baby spine defect',
  ],
  quickAnswer:
    'Spina bifida is a birth defect where the spine does not close completely during development. It ranges from very mild (spina bifida occulta, which often causes no symptoms) to more serious forms that are usually detected before or at birth. Signs that might suggest mild spina bifida include a deep dimple, tuft of hair, birthmark, or fatty lump on the lower back over the spine. Many of these skin findings are completely harmless, but your pediatrician can determine if further evaluation is needed.',
  byAge: [
    {
      ageRange: 'Newborn',
      context:
        'More obvious forms of spina bifida (meningocele and myelomeningocele) are typically detected on prenatal ultrasound or are visible at birth as an opening or sac on the back. These require immediate surgical management. Spina bifida occulta (the mildest form) may show subtle skin signs: a deep sacral dimple, a tuft of hair on the lower back, a small fatty lump, or a red birthmark over the spine. Your pediatrician will examine the lower back during newborn exams.',
    },
    {
      ageRange: '0-12 months',
      context:
        'Most sacral dimples are simple, shallow dimples near the tailbone that are completely harmless and need no further testing. Your pediatrician may recommend an ultrasound of the lower spine if the dimple is deep, located higher on the back (above the gluteal crease), or accompanied by other skin markings. The ultrasound checks for tethered spinal cord, which can be present even with mild spina bifida.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Signs of a tethered cord (which can be associated with spina bifida occulta) may become apparent as your child grows. These include asymmetric foot size, one foot turning in or out, difficulty with potty training, recurring urinary tract infections, or new-onset leg weakness. If your child was identified as having a sacral dimple or other spinal skin finding, your pediatrician will monitor motor development and bladder function.',
    },
  ],
  whenNormal: [
    'A shallow sacral dimple near the tailbone (very common, affecting 2-4% of babies)',
    'A dimple that is visible and has a clear bottom',
    'A dimple located within the gluteal crease (buttock fold)',
    'No other skin markings or neurological symptoms',
  ],
  whenToMention: [
    'A dimple on the lower back that seems deep or you cannot see the bottom of',
    'A tuft of hair, birthmark, or fatty lump on the lower spine',
    'The dimple is located above the gluteal crease (higher on the back)',
    'You notice any asymmetry in your baby\'s leg movement or foot position',
  ],
  whenToActNow: [
    'You notice a visible bulge, opening, or sac on your baby\'s back at birth',
    'Your child has new onset of leg weakness, foot dragging, or bladder control issues',
    'Your child develops back pain with progressive leg weakness or numbness',
  ],
  relatedMilestones: ['1-month', '6-months', '12-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['sacral-dimple', 'not-walking', 'hip-dysplasia', 'uti-signs-baby'],
  sources: [
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Facts about Spina Bifida.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-spina-bifida.html',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Spina Bifida. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Spina-Bifida.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institute of Neurological Disorders and Stroke. Spina Bifida.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/spina-bifida',
    },
  ],
};
