import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-teething-order-timeline',
  title: 'Baby Teething Order and Timeline',
  category: 'physical',
  searchTerms: [
    'baby teething order',
    'baby teeth chart',
    'when do baby teeth come in',
    'teething timeline',
    'baby first tooth age',
    'order of baby teeth',
    'late teething baby',
    'baby teeth eruption schedule',
    'when do molars come in',
    'teething order chart baby',
    'baby no teeth 12 months',
  ],
  quickAnswer:
    'Baby teeth typically begin appearing around 6 months, though the range is 4-12 months. The usual order is: lower central incisors first, then upper central incisors, followed by lateral incisors, first molars, canines, and second molars. Most children have all 20 primary teeth by age 3. Late teething (no teeth by 12-13 months) is usually normal and often runs in families, but should be mentioned to your pediatrician.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'The first teeth to appear are usually the lower central incisors (bottom front teeth), typically around 6 months, though some babies get their first tooth as early as 4 months or as late as 12+ months. Signs of teething include increased drooling, chewing on objects, mild irritability, and swollen gums. Some babies get teeth with virtually no symptoms. The upper central incisors (top front teeth) usually follow within a month or two. Teething does not cause high fever (over 101F), diarrhea, or rash, despite common beliefs.',
    },
    {
      ageRange: '8-14 months',
      context:
        'The lateral incisors (teeth on either side of the front teeth) typically come in between 9-13 months, starting with the top pair. By 12 months, most babies have 4-8 teeth, though some perfectly healthy babies may still have none. If your baby has no teeth by 13 months, mention it to your pediatrician, though delayed teething is rarely a concern and often runs in families. Begin gentle tooth brushing with a tiny smear of fluoride toothpaste as soon as the first tooth appears.',
    },
    {
      ageRange: '14-36 months',
      context:
        'The first molars (large back teeth) appear around 13-19 months, and these can cause more discomfort than front teeth due to their larger size. Canines (pointed teeth) come in around 16-23 months. The second molars (very back teeth) are the last to arrive, typically between 23-33 months. Molar teething may cause more drooling and chewing, and your toddler may be crankier than usual. By age 3, most children have all 20 primary teeth. These teeth will serve your child until permanent teeth begin replacing them around age 6.',
    },
  ],
  whenNormal: [
    'Your baby gets their first tooth anytime between 4-13 months.',
    'Teeth come in a slightly different order than the "typical" chart - variations are common and normal.',
    'Your baby is fussy and drooling more around the time teeth are erupting.',
  ],
  whenToMention: [
    'Your baby has no teeth by 13 months.',
    'Teeth are coming in with unusual discoloration, spots, or abnormal shape.',
    'Your baby seems to be in significant pain with teething that interferes with eating and sleeping.',
  ],
  whenToActNow: [
    'Your baby has teeth present at birth (natal teeth) that are very loose and pose a choking risk.',
    'Your baby has high fever (over 101F) that you are attributing to teething - teething does not cause high fever.',
    'There is a large, dark blister on the gum (eruption cyst) that seems infected or is very painful.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-teething-remedies-safe', 'baby-grinding-teeth', 'baby-refusing-solids'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby\'s First Tooth: 7 Facts Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'ADA',
      citation:
        'American Dental Association - Eruption Charts.',
      url: 'https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/eruption-charts',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Teething. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002045.htm',
    },
  ],
};
