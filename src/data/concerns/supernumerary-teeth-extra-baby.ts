import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'supernumerary-teeth-extra-baby',
  title: 'Supernumerary Teeth (Extra Teeth in Babies and Toddlers)',
  category: 'medical',
  searchTerms: [
    'supernumerary teeth baby',
    'extra teeth baby',
    'baby born with teeth extra',
    'mesiodens baby',
    'extra tooth toddler',
    'natal teeth extra',
    'baby has too many teeth',
    'supernumerary tooth child',
    'double teeth baby',
    'extra front tooth child',
  ],
  quickAnswer:
    'Supernumerary teeth are extra teeth beyond the normal set (20 baby teeth or 32 permanent teeth). They occur in approximately 1-3% of children and are more common in boys. The most common type is a mesiodens, an extra tooth that appears between or behind the two upper front teeth. Supernumerary teeth may not cause any problems, but they can sometimes prevent normal teeth from erupting, cause crowding, or lead to cyst formation. Diagnosis is typically made by dental X-ray, and treatment depends on whether the extra tooth is causing or is likely to cause complications.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Rarely, a baby may be born with one or more natal teeth (teeth present at birth). While natal teeth are most commonly normal baby teeth that erupted early, they can occasionally be supernumerary (extra) teeth. If your newborn has a natal tooth, your pediatrician or a pediatric dentist should evaluate it to determine whether it is a regular baby tooth or an extra one. Natal supernumerary teeth that are very loose or could pose a choking risk may need to be removed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As baby teeth begin erupting (typically starting around 6 months), supernumerary teeth may appear as unexpected or out-of-sequence teeth. You might notice what looks like a small extra tooth between the upper front teeth or an oddly positioned tooth. Most supernumerary teeth in the primary (baby) dentition do not cause significant problems and may be discovered incidentally. Your baby\'s first dental visit by age 1 is a good opportunity to have any unusual tooth development evaluated.',
    },
    {
      ageRange: '1-3 years',
      context:
        'During this period, all 20 baby teeth typically erupt. If you notice what appears to be an extra tooth, a dental X-ray can confirm whether it is supernumerary. In the baby teeth stage, supernumerary teeth are often monitored rather than immediately removed, unless they are causing crowding, interfering with normal tooth eruption, or causing discomfort. Your pediatric dentist will track the development of the permanent teeth underneath and plan accordingly.',
    },
    {
      ageRange: '3+ years',
      context:
        'Supernumerary teeth more commonly affect the permanent teeth, with mesiodens being the most frequent. These may be discovered on routine dental X-rays before the permanent front teeth erupt. If an extra tooth is blocking a permanent tooth from erupting, is causing spacing or alignment problems, or is associated with a cyst, extraction under local or general anesthesia is typically recommended. Early removal generally leads to spontaneous eruption and alignment of the blocked permanent tooth. If discovered and managed early, the long-term dental outcome is usually excellent.',
    },
  ],
  whenNormal: [
    'Your child\'s teeth are coming in at the expected times and in the usual positions',
    'A dental X-ray shows a supernumerary tooth that is not affecting the position or eruption of other teeth',
    'Your pediatric dentist has identified a small extra tooth and recommends monitoring',
    'Your child has the expected number of teeth for their age with no crowding or displacement',
  ],
  whenToMention: [
    'You notice what appears to be an extra tooth in an unusual position in your child\'s mouth',
    'A permanent front tooth has not erupted when the other side has been in for several months',
    'Your child has significant crowding or a tooth that appears to be erupting in an abnormal position',
  ],
  whenToActNow: [
    'A natal tooth in a newborn is very loose and could pose a choking or aspiration risk',
    'Your child has significant pain, swelling, or signs of infection around an extra tooth or in the area where a tooth is being blocked from erupting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-childhood-caries-prevention', 'baby-teeth-discolored-gray'],
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Management of the Developing Dentition and Occlusion in Pediatric Dentistry. Reference Manual.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-developing-dentition/',
    },
    {
      org: 'AAO',
      citation:
        'American Association of Orthodontists. Supernumerary Teeth.',
      url: 'https://www.aaoinfo.org/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Supernumerary Teeth. StatPearls, NIH.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557611/',
    },
  ],
};
