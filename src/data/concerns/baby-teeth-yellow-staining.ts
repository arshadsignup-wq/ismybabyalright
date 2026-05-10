import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-yellow-staining',
  title: 'Yellow Staining on Baby Teeth',
  category: 'medical',
  searchTerms: [
    'baby teeth turning yellow',
    'yellow stains on baby teeth',
    'toddler teeth yellow',
    'why are my baby\'s teeth yellow',
    'baby teeth discoloration yellow',
    'yellow baby teeth causes',
    'baby teeth stains',
    'newborn teeth yellow tint',
    'baby teeth not white',
  ],
  quickAnswer:
    'Yellow staining on baby teeth can have several causes, ranging from harmless plaque buildup and thin enamel to early tooth decay. Baby teeth naturally have thinner enamel than adult teeth, which can make the yellowish dentin underneath more visible. Good oral hygiene and regular dental visits can help determine whether the discoloration is cosmetic or requires treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Teeth are usually not yet present. If natal teeth have erupted and appear yellow, this may simply be due to their underdeveloped enamel. A pediatric dentist should evaluate natal teeth regardless of color.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the first teeth emerge, some may appear slightly more yellow than expected. This is often because the enamel on baby teeth is thin, allowing the naturally yellow dentin to show through. This is particularly noticeable in bright light and is usually normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With more teeth erupting, parents may notice variations in color between teeth. A slight yellowish tint is normal for some babies. However, if yellow or brown spots appear on the enamel surface, this could indicate early enamel hypoplasia or the beginning stages of tooth decay, especially if the baby frequently falls asleep with a bottle.',
    },
    {
      ageRange: '12 months+',
      context:
        'Plaque buildup from inadequate brushing is a common cause of yellow teeth in toddlers. Food and beverage staining from iron supplements or certain foods can also cause discoloration. Regular brushing with a rice-grain-sized amount of fluoride toothpaste and dental checkups every six months are important.',
    },
  ],
  whenNormal: [
    'Your baby\'s teeth have a uniform slight yellowish tint but no spots or rough patches',
    'The yellow color is present on all teeth equally and the dentist has confirmed it is normal enamel variation',
    'Yellow staining improves with better brushing habits',
    'Discoloration is caused by known staining agents like liquid iron supplements',
  ],
  whenToMention: [
    'Yellow or brown spots appear on specific areas of one or more teeth',
    'The enamel looks pitted, rough, or chalky white in spots alongside the yellow areas',
    'Staining does not improve with regular brushing and you are unsure of the cause',
  ],
  whenToActNow: [
    'Your baby\'s teeth have dark brown or black areas that could indicate active tooth decay requiring prompt dental treatment',
    'Yellow or brown staining is accompanied by crumbling enamel, visible holes, or gum swelling near the affected teeth',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Early Childhood Caries (ECC): Classifications, Consequences, and Preventive Strategies.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/early-childhood-caries-classifications-consequences-and-preventive-strategies/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Prevent Tooth Decay in Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/How-to-Prevent-Tooth-Decay-in-Your-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. The Tooth Decay Process: How to Reverse It and Avoid a Cavity.',
      url: 'https://www.nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process',
    },
  ],
};
