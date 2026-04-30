import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cleft-lip-palate-baby',
  title: 'Baby Born with Cleft Lip or Palate',
  category: 'physical',
  searchTerms: [
    'cleft lip baby',
    'cleft palate baby',
    'baby born with split lip',
    'cleft lip and palate feeding',
    'cleft palate surgery age',
    'cleft lip repair baby',
    'baby cleft palate breastfeeding',
    'cleft palate speech',
    'baby lip gap birth defect',
    'cleft lip palate causes',
  ],
  quickAnswer:
    'Cleft lip and cleft palate are among the most common birth differences, occurring in about 1 in 1,600 births. A cleft lip is an opening in the upper lip, while a cleft palate is an opening in the roof of the mouth. They can occur alone or together. With modern surgical repair and a supportive care team, most children with clefts go on to eat, speak, and develop normally. Surgical repair is typically done in the first year of life.',
  byAge: [
    {
      ageRange: 'Newborn',
      context:
        'A cleft lip is visible at birth and is usually detected during delivery or on prenatal ultrasound. A cleft palate may not be immediately visible and is sometimes discovered when feeding difficulties arise. The immediate priority is establishing feeding, as babies with cleft palate often cannot create the suction needed for breastfeeding or standard bottle feeding. Specialized bottles (like the Pigeon or Dr. Brown\'s Specialty Feeding System) can help. A cleft team referral is typically made within the first days of life.',
    },
    {
      ageRange: '0-6 months',
      context:
        'Cleft lip repair surgery is usually performed between 3-6 months of age. Before surgery, the focus is on weight gain and feeding support. Some babies may use a nasoalveolar molding (NAM) device to help shape the lip and nose before surgery. Breastfeeding may be possible with a cleft lip alone, but cleft palate usually requires specialized feeding techniques. Ear infections are more common in babies with cleft palate, so hearing will be monitored.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Cleft palate repair surgery is typically done between 9-14 months of age, before speech begins developing. After palate repair, feeding transitions to normal bottles and cups. Speech therapy evaluation usually begins around 12-18 months. Most children develop normal or near-normal speech with appropriate support. Additional surgeries may be needed as the child grows, but the major repairs happen in the first year.',
    },
  ],
  whenNormal: [
    'Difficulty with feeding in the early weeks before specialized bottles are provided',
    'Milk coming out of the nose during feeding before palate repair',
    'A wide or obvious gap in the lip or palate at birth',
    'Needing specialized feeding equipment like squeezable bottles',
    'A visible scar after cleft lip repair that fades over time',
  ],
  whenToMention: [
    'Your baby is not gaining weight despite using specialized feeding techniques',
    'Your baby has frequent ear infections or fluid buildup in the ears',
    'You have questions about surgical timing, feeding strategies, or speech development',
    'You want a referral to a cleft palate team if one has not been arranged',
  ],
  whenToActNow: [
    'Your baby is choking frequently during feeds or turning blue',
    'Your baby has a fever or signs of infection after surgery',
    'Your baby has significant breathing difficulty',
    'Your baby is not producing wet diapers or shows signs of dehydration from feeding difficulty',
  ],
  relatedMilestones: ['1-month', '3-months', '6-months', '12-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['aspiration-during-feeding', 'slow-weight-gain-breastfed-baby', 'speech-delay'],
  sources: [
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Facts about Cleft Lip and Cleft Palate.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-cleft-lip-and-cleft-palate.html',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Cleft Lip and Palate. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Cleft-Lip-and-Palate.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institute of Dental and Craniofacial Research. Cleft Lip and Cleft Palate.',
      url: 'https://www.nidcr.nih.gov/health-info/cleft-lip-palate',
    },
  ],
};
