import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'metatarsus-adductus',
  title: 'My Baby\'s Feet Turn Inward (Metatarsus Adductus)',
  category: 'physical',
  searchTerms: [
    'metatarsus adductus baby',
    'baby feet turning inward',
    'curved feet newborn',
    'baby foot shaped like kidney bean',
    'intoeing baby feet',
    'metatarsus adductus vs clubfoot',
    'baby feet bent inward',
    'do baby feet straighten out',
    'pigeon toed baby',
    'newborn foot deformity',
  ],
  quickAnswer:
    'Metatarsus adductus is the most common foot deformity in newborns, affecting about 1 in 1,000 babies. The front half of the foot turns inward, giving it a curved or kidney-bean shape when viewed from below. It is thought to result from the position of the baby in the uterus. The good news is that 85-90% of cases resolve on their own without treatment by age 1. Flexible cases (where you can gently straighten the foot) have an excellent prognosis. Rigid cases may benefit from stretching, casting, or special shoes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Metatarsus adductus is often noticed at birth or during the first pediatric visits. Your doctor will assess whether the condition is flexible (the foot can be gently straightened past midline) or rigid (it cannot). Flexible metatarsus adductus almost always resolves without treatment. Your pediatrician may show you gentle stretching exercises to do during diaper changes. It is important to distinguish this from clubfoot (talipes equinovarus), which is a more complex condition affecting the entire foot and ankle.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If the foot is still notably curved by 3-4 months and is not showing improvement, or if it is rigid, your pediatrician may refer you to a pediatric orthopedist. Treatment options for persistent cases include serial casting (similar to Ponseti casting used for clubfoot but shorter in duration) or reverse-last shoes. These interventions are very effective when started early.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most flexible cases have resolved or significantly improved by this age. If treatment was started, it is usually completed by now. As your baby begins to stand and cruise, any residual intoeing often becomes less noticeable. Your orthopedist will monitor to ensure the foot is developing normally.',
    },
    {
      ageRange: '12 months+',
      context:
        'By the time your child is walking, most metatarsus adductus has resolved. Persistent cases are uncommon but may benefit from continued orthotics. Untreated rigid metatarsus adductus can occasionally lead to difficulty with shoe fitting or mild gait differences, but even these typically do not cause pain or functional limitations.',
    },
  ],
  whenNormal: [
    'Your newborn\'s foot curves inward but you can gently straighten it — this is the flexible type and very likely to resolve',
    'Your baby\'s feet are becoming less curved over the first few months',
    'One or both feet turn slightly inward but your baby is bearing weight and moving normally',
  ],
  whenToMention: [
    'Your baby\'s foot is rigid and cannot be gently straightened past midline',
    'The inward curving has not improved by 3-4 months',
    'Both feet are affected and the curving is severe',
    'You notice other abnormalities with the foot or ankle beyond the inward turning of the forefoot',
  ],
  whenToActNow: [
    'Your baby\'s foot appears severely deformed, turned completely inward and downward — this may be clubfoot rather than metatarsus adductus and needs prompt orthopedic evaluation',
    'Your baby shows signs of pain or distress when you touch or move their foot',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'syndactyly-webbed-fingers-toes',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Orthopedic Problems in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Common-Orthopedic-Conditions.aspx',
    },
    {
      org: 'OrthoInfo (AAOS)',
      citation:
        'American Academy of Orthopaedic Surgeons. Metatarsus Adductus. OrthoInfo.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/metatarsus-adductus/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Metatarsus Adductus. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542295/',
    },
  ],
};
