import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cortical-visual-impairment-baby',
  title: 'Cortical Visual Impairment (CVI) in Babies',
  category: 'medical',
  searchTerms: [
    'cortical visual impairment baby',
    'CVI baby',
    'brain based vision loss baby',
    'baby not looking at objects',
    'baby variable vision',
    'baby sees sometimes not others',
    'cortical blindness infant',
    'baby prefers one color',
    'neurological vision impairment baby',
    'baby not tracking visually',
  ],
  quickAnswer:
    'Cortical visual impairment (CVI) is the most common cause of visual impairment in children in developed countries. Unlike eye-based vision problems, CVI is caused by damage or differences in the brain\'s visual processing areas, often related to prematurity, hypoxic-ischemic encephalopathy (birth asphyxia), or other neurological conditions. A hallmark of CVI is variable visual ability -- your baby may seem to see well sometimes and poorly other times. With appropriate early intervention and visual stimulation strategies, many children with CVI show significant improvement in functional vision over time.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'CVI may be suspected if your baby does not fixate on faces, does not track objects, or seems to look past or through you. However, early detection can be challenging because typical newborn visual skills are limited. Babies at high risk for CVI include those with a history of prematurity, hypoxic-ischemic encephalopathy, periventricular leukomalacia, hydrocephalus, or seizures. An ophthalmological exam may show normal or near-normal eye structures, which is the key clue that the visual problem is brain-based.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies should be tracking faces and objects, reaching for toys, and making eye contact. If your baby has CVI, you may notice they prefer looking at bright, single-colored objects (especially red and yellow), look at objects in their peripheral vision rather than straight ahead, or are overwhelmed in visually busy environments. Light-gazing, where your baby stares at lights, is common in CVI. An evaluation by a pediatric ophthalmologist and a teacher of the visually impaired can help establish a CVI diagnosis and range score.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Early intervention is critical for children with CVI. A vision teacher experienced in CVI can design strategies to improve your baby\'s functional vision. These include presenting objects against a plain black background, using preferred colors, reducing visual clutter in the environment, allowing extra time for visual processing, and using movement to attract visual attention. Many children with CVI show improvement with consistent intervention, and functional vision can continue to develop throughout childhood.',
    },
    {
      ageRange: '12 months+',
      context:
        'As your child grows, improvements in CVI may include better visual attention, ability to recognize familiar objects and people, and more consistent visual responses. Your child\'s educational team should include a teacher of the visually impaired and possibly an orientation and mobility specialist. CVI is assessed on a range from Phase 1 (minimal visual response) to Phase 3 (near-typical visual function with some characteristic differences). Many children progress along this range with intervention, though the rate and extent of improvement vary.',
    },
  ],
  whenNormal: [
    'Your baby tracks faces and objects smoothly and consistently by 2-3 months of age',
    'Your baby makes eye contact and smiles at familiar faces',
    'Your baby reaches for toys they can see by 4-5 months',
    'Eye exams have been normal with no structural eye problems',
  ],
  whenToMention: [
    'Your baby does not consistently track objects or make eye contact by 3-4 months of age',
    'Your baby seems to see better on some days than others, or in some environments but not others',
    'Your baby stares at lights frequently or seems to look at objects from the side rather than straight on',
    'Your baby was premature or had a neurological event and is not meeting visual milestones',
  ],
  whenToActNow: [
    'Your newborn has no visual response to bright lights or faces and you have not yet had an eye exam -- seek evaluation promptly to determine the cause',
    'Your baby who was previously tracking and making eye contact suddenly loses these abilities, which could indicate a new neurological event requiring urgent evaluation',
  ],
  relatedMilestones: [
    'visual-tracking',
    'eye-contact',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['congenital-cataracts-baby', 'retinoblastoma-signs-baby', 'blocked-tear-duct'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Warning Signs of Vision Problems in Infants and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx',
    },
    {
      org: 'AFB',
      citation:
        'American Foundation for the Blind. Cortical Visual Impairment.',
      url: 'https://www.afb.org/blindness-and-low-vision/eye-conditions/cortical-visual-impairment-cvi',
    },
    {
      org: 'Perkins School for the Blind',
      citation:
        'Perkins School for the Blind. What Is CVI? CVI Now.',
      url: 'https://www.perkins.org/cvi-now/',
    },
  ],
};
