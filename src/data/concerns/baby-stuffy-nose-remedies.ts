import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-stuffy-nose-remedies',
  title: 'Remedies for a Baby\'s Stuffy Nose',
  category: 'medical',
  searchTerms: [
    'baby stuffy nose remedies',
    'baby congested nose',
    'newborn stuffy nose',
    'baby nasal congestion relief',
    'saline drops baby nose',
    'nasal aspirator baby',
    'baby nose suction',
    'baby can\'t breathe through nose',
    'baby congestion home remedies',
    'baby blocked nose sleeping',
  ],
  quickAnswer:
    'Baby nasal congestion is extremely common because infants have tiny nasal passages and breathe primarily through their noses. Safe remedies include saline nasal drops, gentle nasal suction with a bulb syringe or aspirator (like NoseFrida), a cool-mist humidifier, and keeping baby upright during waking hours. Over-the-counter decongestants and cold medicines are not safe for babies under 2 years. Most nasal congestion resolves on its own within 7-10 days.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn nasal congestion is very common and often not related to illness - babies may be congested simply because their nasal passages are narrow. Use 1-2 drops of saline in each nostril and wait 30-60 seconds before gently suctioning with a bulb syringe or nasal aspirator. Do this before feeds and sleep for best effect. A cool-mist humidifier in the nursery adds moisture and helps thin secretions. Do not use menthol, eucalyptus, or Vicks products on or near young babies. If your newborn under 3 months has congestion with fever, call your pediatrician promptly.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies this age frequently catch colds, especially if they are in daycare. Saline and suction remain the primary tools. Limit suctioning to 2-3 times per day to avoid irritating the nasal lining. Elevating the head of the crib mattress slightly (by placing a towel under the mattress, not under the baby) can help drainage. Offering extra breast milk or formula keeps mucus thin. A steamy bathroom (run a hot shower and sit in the bathroom for 10-15 minutes) can provide temporary relief. Never give honey to babies under 12 months.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may resist nasal suctioning. Teaching them to blow their nose (a skill usually learned around 2-3 years) helps. Continue using saline spray or drops as needed. After 12 months, a small amount of honey in warm water can help soothe associated cough and throat irritation. Keep your toddler hydrated and use a humidifier during sleep. Over-the-counter cold medicines are still not recommended under age 2 (and many experts recommend avoiding until age 4-6). If congestion lasts more than 10-14 days or is accompanied by green discharge with fever, see your doctor.',
    },
  ],
  whenNormal: [
    'Your baby has nasal congestion during a cold that improves over 7-10 days.',
    'Your newborn sounds congested but is eating and sleeping well with no other symptoms.',
    'Congestion is worse at night and improves during the day with upright positioning.',
  ],
  whenToMention: [
    'Congestion lasts more than 10-14 days without improvement.',
    'Your baby has thick green or yellow nasal discharge with fever.',
    'Congestion seems to be causing significant feeding difficulties.',
  ],
  whenToActNow: [
    'Your baby is struggling to breathe: flaring nostrils, chest retractions, or breathing faster than 60 breaths per minute.',
    'Your baby under 3 months has congestion with a fever of 100.4F (38C) or higher.',
    'Your baby is refusing all feeds due to congestion and showing signs of dehydration.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-steam-room-humidifier-safety', 'rsv-baby', 'wheezing', 'baby-breathing-fast'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Caring for Your Child\'s Cold or Flu. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Colds.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Should You Give Kids Medicine for Coughs and Colds?',
      url: 'https://www.fda.gov/consumers/consumer-updates/should-you-give-kids-medicine-coughs-and-colds',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Common Cold in Babies. MedlinePlus.',
      url: 'https://medlineplus.gov/commoncold.html',
    },
  ],
};
