import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hypothermia-signs',
  title: 'Could My Baby Have Hypothermia (Low Body Temperature)?',
  category: 'medical',
  searchTerms: [
    'baby low body temperature',
    'baby hypothermia signs',
    'baby temperature too low',
    'baby cold to touch',
    'newborn hypothermia',
    'baby temperature below 97',
    'baby temperature 96 degrees',
    'cold baby emergency',
    'baby temperature dropping',
    'low temperature baby concern',
  ],
  quickAnswer:
    'A body temperature below 97°F (36.1°C) in a baby is considered low and may indicate hypothermia. Newborns are especially vulnerable because they lose heat quickly and cannot shiver effectively. Signs include cool skin, weak cry, lethargy, poor feeding, and in severe cases, mottled or blue-tinged skin. Mild hypothermia can be treated with skin-to-skin contact and warm clothing, but significant or persistent low temperature needs medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are at highest risk for hypothermia, especially premature or low birth weight babies. After birth, babies can lose heat rapidly through evaporation, radiation, and convection. Skin-to-skin contact (kangaroo care) is one of the most effective ways to warm a newborn. If your baby\'s temperature drops below 97°F despite warming efforts, seek immediate medical attention as hypothermia can be a sign of infection in newborns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'While older infants regulate temperature better than newborns, they can still develop hypothermia from cold environments, wet clothing, or inadequate coverage during cold weather. After a bath, dry your baby promptly and dress them in warm clothing. A low temperature in this age group that occurs without cold exposure may indicate an underlying illness and should be evaluated.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Hypothermia is less common at this age but can occur during cold weather exposure. Babies who are learning to crawl and move may push off blankets. Use wearable blankets (sleep sacks) to keep them warm during sleep. If your baby feels cold and their temperature reads low despite a warm environment, contact your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are more active and generate more body heat, but they can still become hypothermic during extended cold weather exposure, especially if clothing becomes wet. Dress your toddler in layers for outdoor cold weather activities and bring them inside regularly to warm up.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Hypothermia in older toddlers typically only occurs with prolonged cold exposure or water immersion. Children can lose heat faster than adults due to their smaller body mass. Watch for shivering, pale or blue-tinged skin, clumsy movements, and confusion, which are early signs of hypothermia.',
    },
  ],
  whenNormal: [
    'Your baby\'s hands and feet are cool but their torso feels warm and their temperature reads normal',
    'Your baby\'s temperature dips slightly after a bath but quickly returns to normal after dressing',
    'A brief mildly low reading that normalizes after removing from a cool environment and adding warm layers',
  ],
  whenToMention: [
    'Your baby\'s temperature occasionally reads below 97.5°F despite appropriate clothing and room temperature',
    'Your premature baby seems to have difficulty maintaining normal temperature',
    'You are unsure how many layers your baby needs for their environment',
  ],
  whenToActNow: [
    'Your baby\'s temperature is below 97°F (36.1°C) and does not improve after warming efforts such as skin-to-skin contact and warm blankets',
    'Your baby has a low temperature along with weak cry, poor feeding, lethargy, mottled or blue-tinged skin, or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-temperature-regulation-immature',
    'baby-cold-hands-and-feet',
    'cold-weather-baby-outdoor-safety',
  ],
  sources: [
    {
      org: 'WHO',
      citation:
        'World Health Organization. Thermal Protection of the Newborn: A Practical Guide.',
      url: 'https://www.who.int/publications/i/item/WHO_RHT_MSM_97.2',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hypothermia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Hypothermia.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Hypothermia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532268/',
    },
  ],
};
