import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-body-temperature-regulation',
  title: 'My Baby Seems Too Hot or Too Cold',
  category: 'physical',
  searchTerms: [
    'baby temperature regulation',
    'baby overheating signs',
    'baby too cold signs',
    'newborn body temperature normal',
    'baby hands cold normal',
    'baby sweating a lot',
    'how to dress baby for sleep temperature',
    'baby temperature regulation development',
    'overheating SIDS risk',
    'baby cold hands warm body',
    'ideal room temperature baby',
  ],
  quickAnswer:
    'Babies are less efficient at regulating their body temperature than adults, making them more susceptible to both overheating and getting too cold. A normal baby temperature is 97.5-99.5 degrees F (36.4-37.5 degrees C). Cool hands and feet are common in young babies and do not necessarily mean your baby is cold - feel their chest or back of neck instead. Overheating is a risk factor for SIDS, so avoid over-bundling during sleep.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are particularly vulnerable to temperature changes because they have a high surface area-to-body ratio, limited fat stores, and an immature thermoregulatory system. Cool hands and feet are very common and normal in young babies - the best way to check if your baby is comfortable is to feel their chest or the back of their neck, which should be warm but not sweaty. Dress your baby in one more layer than you would wear, and keep the room between 68-72 degrees F (20-22 degrees C) for sleep.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies grow and gain body fat, their temperature regulation improves. However, they still depend on caregivers to help them maintain a comfortable temperature. Signs of overheating include sweating, damp hair, flushed cheeks, heat rash, and rapid breathing. Signs of being too cold include fussiness, cool chest or belly, and lethargy. For sleep, use a wearable blanket or sleep sack instead of loose blankets, and avoid hats indoors as babies release excess heat through their heads.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers regulate their temperature more effectively but still need help during extreme weather. Active toddlers can overheat quickly during vigorous play, especially in warm weather. Ensure adequate hydration and dress them in layers that can be removed. In cold weather, layer clothing and protect extremities with hats, mittens, and warm socks. By this age, most children are better at communicating discomfort, though they may not recognize overheating or cold until symptoms are significant.',
    },
  ],
  whenNormal: [
    'Your baby\'s hands and feet feel cool but their chest and back of neck are warm - this is very common in young babies.',
    'Your baby sweats lightly on their head during feeding or active play.',
    'Your baby\'s skin feels warm but not hot, and they are content, feeding well, and producing normal wet diapers.',
  ],
  whenToMention: [
    'Your baby\'s body temperature consistently runs above or below the normal range (97.5-99.5 degrees F) without obvious cause.',
    'Your baby sweats excessively even in a cool environment or when lightly dressed.',
    'Your baby has persistent cold, mottled, or blue-tinged extremities despite being in a warm environment.',
  ],
  whenToActNow: [
    'Your baby has a rectal temperature of 100.4 degrees F (38 degrees C) or higher (especially under 3 months - this requires immediate medical evaluation).',
    'Your baby has a temperature below 96.8 degrees F (36 degrees C) and appears lethargic, is feeding poorly, or has pale or mottled skin.',
    'Your baby shows signs of heat stroke - very hot skin, confusion or unresponsiveness, rapid breathing, or no sweating despite being very hot.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-dehydration-hot-weather',
    'baby-fever-when-to-go-to-er',
    'baby-sleeping-face-down',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Take a Child\'s Temperature and Reduce Fever. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/How-to-Take-a-Childs-Temperature.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Thermoregulation in Neonates. NeoReviews, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31261065/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Reducing the Risk of SIDS. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
  ],
};
