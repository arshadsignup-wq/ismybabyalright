import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pectus-deformity-baby',
  title: 'Pectus Deformity (Chest Wall Shape) in Babies',
  category: 'physical',
  searchTerms: [
    'baby sunken chest',
    'baby chest indentation',
    'pectus excavatum baby',
    'pectus carinatum baby',
    'baby chest bone sticks out',
    'baby xiphoid process sticking out',
    'baby chest shape abnormal',
    'baby sternum dip',
    'funnel chest baby',
    'pigeon chest baby',
    'baby ribcage shape',
    'baby chest deformity',
  ],
  quickAnswer:
    'Pectus deformities are variations in the shape of the chest wall. Pectus excavatum (sunken or "funnel" chest) is a depression in the breastbone, while pectus carinatum ("pigeon" chest) is a protrusion. Both are relatively common, affecting about 1 in 300-400 children. In babies, a visible or prominent xiphoid process (the small cartilage at the bottom of the breastbone) is very common and is not a pectus deformity. Most mild pectus findings in infancy are monitored without treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Many parents notice that their baby\'s breastbone looks prominent or that there is a small bump or dip at the bottom of the sternum. In most cases, this is the xiphoid process, a normal piece of cartilage that is simply more visible in thin babies. True pectus excavatum (a noticeable funnel-shaped dip in the center of the chest) can be present from birth and is usually mild. Your pediatrician will monitor it at well-child visits.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, a mild pectus excavatum may become more or less noticeable. In most cases, it does not affect breathing, heart function, or development. Pectus carinatum (chest protrusion) is rarely noticed in infancy and more commonly becomes apparent during the growth spurt of adolescence. If you notice your baby\'s chest seems to pull inward significantly when breathing, mention this to your pediatrician.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Mild pectus excavatum in toddlers is common and typically does not require treatment. The chest wall is still very flexible and may change shape as your child grows. If the dip appears to be getting deeper or your child seems to tire easily during physical activity, further evaluation may be recommended. Treatment (bracing or surgery) is rarely considered before school age and is usually reserved for moderate to severe cases.',
    },
  ],
  whenNormal: [
    'A small bump at the bottom of the sternum (xiphoid process) that is more visible when your baby leans forward',
    'A mild, shallow dip in the center of the chest that does not affect breathing',
    'Visible ribs in a thin baby, which is normal and not a chest wall deformity',
    'The chest shape looking slightly asymmetric, which is common and usually harmless',
  ],
  whenToMention: [
    'You notice a noticeable depression or protrusion in your baby\'s chest that seems more than mild',
    'The chest wall seems to change shape when your child breathes or exerts effort',
    'You want reassurance about your baby\'s chest shape at a well-child visit',
    'A family member has pectus excavatum or carinatum',
  ],
  whenToActNow: [
    'You notice significant chest retractions (the skin pulling in between or below the ribs) with every breath, which could indicate breathing difficulty',
    'Your baby is breathing rapidly, grunting, or appears to be working hard to breathe',
    'Your child tires very easily during physical activity and has a noticeable chest deformity',
    'A sudden change in chest shape appears after an injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'curved-spine-baby', 'hernia-bulging-when-crying'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pectus Excavatum and Pectus Carinatum. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pectus Excavatum. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430918/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Birth Defects: Structural.',
      url: 'https://www.cdc.gov/birth-defects/',
    },
  ],
};
