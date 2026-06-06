import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-clicky-hips',
  title: 'Hip Clicks During Diaper Changes',
  category: 'physical',
  searchTerms: [
    'baby hip clicking',
    'newborn hip click diaper change',
    'baby hip popping sound',
    'infant hips clicking',
    'baby hip snap sound',
    'newborn hip click normal',
    'baby joint clicking hips',
    'hip click vs hip clunk baby',
    'baby legs clicking',
    'newborn hip sounds',
  ],
  quickAnswer:
    'Soft clicking sounds from your baby\'s hips during diaper changes or leg movements are very common and usually harmless. These clicks are typically caused by ligaments and tendons snapping over the joint and are different from a true hip "clunk," which may indicate hip instability. Your pediatrician checks the hips at every well-child visit.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Soft clicking or popping sounds from the hips are very common in newborns as their joints are still loose and flexible. These benign clicks are caused by ligaments and tendons moving over the joint and are not the same as the "clunk" that pediatricians look for during hip exams (Ortolani and Barlow tests). A clunk feels like a joint moving in or out of position and is a sign of hip instability that needs further evaluation. If your pediatrician finds the hips to be stable on examination, clicking sounds alone are not concerning.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Clicking may continue and remains common. Your pediatrician will continue to check the hips at routine visits. If there are risk factors for hip dysplasia (breech presentation, family history, firstborn girl), a hip ultrasound may be ordered around 6 weeks of age regardless of examination findings. Simple clicking without instability does not typically require imaging.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Hip clicking from ligaments usually decreases as your baby\'s joints stabilize. If clicking persists or you notice asymmetric leg folds, limited hip movement, or one leg appearing shorter, mention these to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Joint clicking may occur occasionally from normal joint movement and remains common in active babies. If there are concerns about hip development, X-rays replace ultrasound as the preferred imaging after about 4-6 months of age.',
    },
  ],
  whenNormal: [
    'Soft, painless clicking sounds during diaper changes or leg movements',
    'The clicks are not associated with any visible movement of the hip joint in or out of position',
    'Your pediatrician has examined the hips and found them stable',
    'Baby moves both legs freely and equally',
  ],
  whenToMention: [
    'You notice a louder, deeper "clunk" rather than a soft click',
    'One leg seems less flexible or cannot be spread as wide as the other during diaper changes',
    'The thigh skin folds appear markedly uneven',
  ],
  whenToActNow: [
    'Your baby suddenly stops moving one leg, seems to be in pain with hip movement, or one leg appears significantly shorter than the other',
    'Your pediatrician detects a hip clunk on examination and recommends urgent imaging or referral',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hip Dysplasia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Hip-Dysplasia.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Developmental Dysplasia of the Hip. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK441986/',
    },
  ],
  relatedConcernSlugs: ['hip-dysplasia', 'newborn-hip-ultrasound-needed', 'newborn-bowed-legs-normal'],
};
