import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-plagiocephaly-helmet-therapy',
  title: 'Does My Baby Need a Helmet for Flat Head?',
  category: 'medical',
  searchTerms: [
    'baby flat head helmet',
    'plagiocephaly helmet therapy',
    'baby helmet when needed',
    'flat head syndrome baby',
    'baby head shape helmet',
    'cranial helmet baby',
    'positional plagiocephaly treatment',
    'baby flat spot head helmet',
    'helmet therapy age window',
    'does baby need helmet flat head',
  ],
  quickAnswer:
    'Helmet therapy (cranial orthosis) may be recommended for moderate to severe positional plagiocephaly that has not improved with repositioning techniques by age 4-6 months. Helmets work by gently guiding skull growth and are most effective when started between 4-6 months of age, when head growth is most rapid. Mild cases often improve on their own with repositioning and tummy time. The decision depends on severity, age, and whether conservative measures have been tried.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the prevention and repositioning window. Techniques include alternating the direction your baby faces in the crib, increasing supervised tummy time, holding your baby upright, and minimizing time in car seats and bouncers. If torticollis is contributing to a head preference, physical therapy should start early. Helmet therapy is not typically started this young.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If repositioning has not improved the flat spot by 4-6 months, your pediatrician may refer for helmet evaluation. The ideal window for starting helmet therapy is 4-6 months when head growth is fastest. A specialist will measure the degree of asymmetry to determine if a helmet is warranted. Moderate to severe asymmetry benefits most from helmeting.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Helmets can still be effective between 6-12 months but work more slowly as head growth decelerates. Treatment typically takes 2-4 months with the helmet worn 23 hours per day. The helmet is custom-made from a 3D scan of your baby\'s head. Follow-up visits every 2-3 weeks ensure proper fit as the head grows.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Helmet therapy after 12 months is generally not recommended because head growth has slowed significantly and the skull bones are becoming less malleable. After age 1, many cases of mild to moderate plagiocephaly continue to improve gradually on their own as the child grows and their head proportions change.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, the head shape typically continues to improve as hair growth further disguises asymmetry. Most positional plagiocephaly has no functional consequences and is purely cosmetic. Severe cases that did not receive treatment may have more persistent asymmetry, but this continues to improve somewhat with growth throughout childhood.',
    },
  ],
  whenNormal: [
    'Mild flat spot that is improving with repositioning and increased tummy time',
    'Your pediatrician has assessed the asymmetry as mild and recommends continuing conservative measures',
    'Your baby is in a helmet and the head shape is gradually improving with treatment',
  ],
  whenToMention: [
    'You notice a flat spot on your baby\'s head that is not improving with repositioning',
    'Your baby strongly prefers one head position despite your efforts',
    'You want to know whether helmet therapy is appropriate for your baby\'s level of asymmetry',
  ],
  whenToActNow: [
    'You notice a ridge or abnormal shape on your baby\'s skull that seems different from positional flattening (possible craniosynostosis, which requires different treatment)',
    'Your baby has progressive head shape changes with signs of increased pressure: bulging fontanelle, vomiting, irritability, or rapid head growth',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-helmet-therapy-concerns',
    'baby-torticollis-vs-head-tilt',
    'baby-congenital-muscular-torticollis-treatment',
    'craniosynostosis-surgery',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention and Management of Positional Skull Deformities in Infants. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/128/6/e1236/30521',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Helmet Therapy for Positional Plagiocephaly. JAMA Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24796399/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Plagiocephaly: Is head shaping therapy necessary?',
      url: 'https://www.mayoclinic.org/diseases-conditions/plagiocephaly/symptoms-causes/syc-20361028',
    },
  ],
};
