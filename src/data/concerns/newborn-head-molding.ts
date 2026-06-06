import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-head-molding',
  title: 'Cone-Shaped Head After Vaginal Birth (Head Molding)',
  category: 'physical',
  searchTerms: [
    'newborn cone head',
    'baby head shape after birth',
    'newborn head molding',
    'baby elongated head',
    'pointed head newborn normal',
    'cone shaped head vaginal delivery',
    'newborn head shape will it round out',
    'baby head pointy after birth',
    'newborn skull molding',
    'how long does newborn head molding last',
  ],
  quickAnswer:
    'A cone-shaped or elongated head after vaginal birth is very common and completely normal. It is called head molding and occurs because the bones of your baby\'s skull are not yet fused, allowing them to overlap and shift to fit through the birth canal. Your baby\'s head will round out naturally within a few days to weeks.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Head molding is a normal result of vaginal delivery. The skull bones of a newborn are separated by soft, flexible areas called fontanelles and sutures, which allow the head to change shape during birth. After delivery, you may notice the head appears elongated, pointed, or lopsided. This typically resolves within 24-48 hours to a few weeks as the skull bones settle into their normal position. Babies delivered by cesarean section or who were in breech position may not show molding. Head molding is not harmful and does not affect the brain.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The head should have rounded out from delivery-related molding by now. If the head shape remains asymmetric or flat, it may be due to positional preferences (positional plagiocephaly) rather than birth molding. Alternating head position during sleep and supervised tummy time can help prevent flat spots from developing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Any birth-related head molding should be fully resolved. If you notice the head shape is asymmetric or flat, this is more likely positional plagiocephaly. Your pediatrician will assess head shape at well-child visits and may recommend repositioning strategies or, in significant cases, a referral for a helmet evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The head shape should be rounding out. If there are concerns about persistent abnormal head shape, your pediatrician may want to distinguish between positional plagiocephaly and craniosynostosis (premature fusion of skull sutures), which requires different management.',
    },
  ],
  whenNormal: [
    'Cone-shaped or elongated head immediately after vaginal delivery',
    'Head shape that gradually rounds out over the first few days to weeks',
    'Slight asymmetry that improves with repositioning',
    'Soft spots (fontanelles) that are flat or slightly concave when baby is calm and upright',
  ],
  whenToMention: [
    'Head shape has not improved several weeks after birth',
    'You notice a flat spot developing on one side of the head',
    'The head shape seems to be getting more asymmetric over time',
  ],
  whenToActNow: [
    'A ridge or raised hard line running along the top or side of the skull, which could indicate craniosynostosis (premature fusion of skull sutures)',
    'A bulging or sunken fontanelle, or a head circumference that is growing too rapidly or too slowly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Newborn\'s Head. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Newborn Head Molding. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002302.htm',
    },
  ],
  relatedConcernSlugs: ['abnormal-head-shape', 'craniosynostosis-signs', 'newborn-flat-spot-prevention', 'cephalohematoma-newborn'],
};
