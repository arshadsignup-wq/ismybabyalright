import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-blister-rash-fluid-filled',
  title: 'Baby Blistering Rash (Fluid-Filled Blisters)',
  category: 'skin',
  searchTerms: [
    'baby blistering rash',
    'baby fluid filled blisters',
    'baby blisters on skin',
    'infant vesicular rash',
    'baby water blisters',
    'baby clear blisters skin',
    'baby rash with blisters',
    'baby pus filled bumps',
    'toddler blistering rash',
    'baby blisters not chickenpox',
  ],
  quickAnswer:
    'Fluid-filled blisters on a baby\'s skin can be caused by many things, including hand-foot-and-mouth disease, friction burns, insect bites, impetigo, chickenpox, or herpes simplex. While many causes are mild, blistering rashes in young babies or those accompanied by fever should be evaluated by a doctor to determine the cause and best treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Blistering rashes in very young infants should always be evaluated promptly. While sucking blisters on the lips and hands from vigorous feeding are common and harmless, other causes such as neonatal herpes simplex can be serious and require urgent treatment. Any clustered blisters on a newborn, especially with fever, need immediate medical attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, blistering rashes may include impetigo, viral infections, or friction blisters from crawling attempts. Hand-foot-and-mouth disease can occur at this age with small blisters on the palms, soles, and in the mouth. Burns and scalds can also cause blisters and should be treated promptly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Hand-foot-and-mouth disease is one of the most common causes of blistering rashes at this age, particularly in daycare settings. Insect bites may blister in sensitive babies. Impetigo can cause honey-colored crusted blisters. Most blistering rashes at this age are manageable but should be identified correctly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop blistering rashes from chickenpox (even if vaccinated, breakthrough cases can occur with mild symptoms), hand-foot-and-mouth disease, impetigo, or contact with irritants. Burns from hot surfaces are also common in this curious age group. If blisters are widespread or your child has a fever, see your pediatrician.',
    },
  ],
  whenNormal: [
    'A small sucking blister on a newborn\'s lip from breastfeeding',
    'A single friction blister on the foot from new shoes',
    'Small blisters on palms and soles during a mild hand-foot-and-mouth infection with a child who is eating and drinking',
  ],
  whenToMention: [
    'Multiple blisters appear without a clear cause',
    'Blisters are accompanied by mild fever and your baby is uncomfortable but not seriously ill',
    'Blisters that are crusting with a honey-colored coating, suggesting impetigo',
  ],
  whenToActNow: [
    'A newborn under 6 weeks develops clustered blisters, especially near the eyes, mouth, or genitals, as this could indicate neonatal herpes and requires emergency treatment',
    'Widespread blistering with fever, lethargy, or poor feeding in any age group',
    'Large blisters that cover a significant area or blisters with red, warm, spreading skin around them suggesting a serious skin infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blisters. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Blisters.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Impetigo. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Impetigo.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Neonatal Herpes Simplex Virus Infection.',
      url: 'https://www.cdc.gov/herpes-simplex-virus/hcp/clinical-overview/neonatal-hsv.html',
    },
  ],
  relatedConcernSlugs: ['baby-blisters-on-skin', 'hand-foot-mouth', 'impetigo-baby', 'baby-herpes-simplex-cold-sore'],
};
