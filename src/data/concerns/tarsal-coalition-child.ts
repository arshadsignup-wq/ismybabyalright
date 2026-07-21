import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tarsal-coalition-child',
  title: 'Tarsal Coalition (Fused Foot Bones)',
  category: 'medical',
  searchTerms: [
    'tarsal coalition child',
    'fused foot bones child',
    'child stiff flat foot pain',
    'child foot ankle stiffness',
    'tarsal coalition teenager foot pain',
    'calcaneonavicular coalition',
    'talocalcaneal coalition',
    'child flat foot limited motion pain',
    'rigid flatfoot child ankle',
    'peroneal spastic flatfoot',
  ],
  quickAnswer:
    'Tarsal coalition is a condition in which two or more bones in the back of the foot are abnormally connected by a bridge of bone, cartilage, or fibrous tissue. It is usually congenital but typically does not cause symptoms until ages 8-16 when the cartilaginous or fibrous bridge ossifies (hardens into bone) and restricts foot motion. Common signs include a stiff flatfoot, foot or ankle pain that worsens with activity, and limited side-to-side motion of the hindfoot. Treatment depends on symptoms and ranges from observation and orthotics to surgical resection of the coalition.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tarsal coalition is present from birth but is almost never symptomatic or detectable at this age. Newborn foot exams focus on identifying structural deformities such as clubfoot or vertical talus. Tarsal coalition typically does not affect early foot development or interfere with motor milestones.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Tarsal coalition remains clinically silent during infancy. All babies have flat feet at this age, and the coalition does not cause any symptoms or visible abnormality. Normal motor development (pulling to stand, cruising, first steps) is expected. The condition is only discovered at this age if foot imaging is obtained incidentally for another reason.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Tarsal coalition very rarely presents in toddlers. Most toddlers have flat-appearing feet normally, and the coalition bridge is still cartilaginous (soft), allowing some motion. If your toddler has a very rigid flatfoot, significant foot pain, or difficulty walking, evaluation is warranted, but other conditions are more likely at this age. In rare cases, a tarsal coalition may be found on imaging obtained for other foot concerns.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Occasional early presentations of tarsal coalition can occur in this age range, though most children remain asymptomatic until later childhood or adolescence. If your child has recurrent foot or ankle pain, stiffness, easy fatigue with walking, or a rigid flatfoot on one or both sides, mention it to your pediatrician. Calcaneonavicular coalition (the most common type) typically presents earlier (ages 8-12) than talocalcaneal coalition (ages 12-16), but early symptoms are possible. X-rays, including an oblique view of the foot, can identify calcaneonavicular coalitions, while CT or MRI may be needed for other types.',
    },
  ],
  whenNormal: [
    'Your baby or toddler has flexible flat feet, which is a normal finding in young children that does not suggest tarsal coalition',
    'Your child\'s foot arch develops gradually and appears more prominent by age 5-6, following the normal developmental timeline',
    'Your child has occasional foot aches after a very active day that resolve with rest and do not limit activity',
    'Tarsal coalition was found incidentally on imaging and your child has no foot pain, stiffness, or functional limitations',
  ],
  whenToMention: [
    'Your child has recurrent foot or ankle pain that limits their activity, especially if they have a noticeably stiff or rigid flatfoot',
    'Your child\'s foot has very limited side-to-side motion compared to the other foot, or they frequently roll or sprain their ankle',
    'Your child or teenager has painful flatfoot that is not improving with standard supportive shoes or inserts',
  ],
  whenToActNow: [
    'Your child has sudden onset of severe foot pain, inability to bear weight, and visible foot or ankle swelling, which needs prompt evaluation to rule out fracture, infection, or other acute conditions',
    'Your child with known tarsal coalition develops persistent pain unresponsive to rest, anti-inflammatories, and orthotics, which may indicate the need for surgical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['flat-feet', 'baby-flat-feet-normal'],
  sources: [
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Tarsal Coalition. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/tarsal-coalition/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Flat Feet and Fallen Arches. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Flat-Feet-Fallen-Arches.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Tarsal Coalition. StatPearls, NCBI Bookshelf, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538272/',
    },
  ],
};
