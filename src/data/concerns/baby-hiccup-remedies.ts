import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hiccup-remedies',
  title: 'How to Help My Baby\'s Hiccups',
  category: 'physical',
  searchTerms: [
    'how to stop baby hiccups',
    'baby hiccup remedies',
    'get rid of baby hiccups',
    'newborn hiccups cure',
    'baby hiccup relief',
    'stop infant hiccups',
    'baby hiccups after feeding fix',
    'baby hiccups home remedy',
    'prevent baby hiccups',
    'baby hiccup treatment safe',
  ],
  quickAnswer:
    'Baby hiccups are usually harmless and resolve on their own within a few minutes. You can help by burping your baby more frequently during feedings, keeping them upright for 20-30 minutes after eating, and offering a pacifier to help relax the diaphragm. Never use traditional adult remedies like holding breath, startling, or pulling the tongue, as these are not safe for infants. Most babies outgrow frequent hiccups by 6-12 months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Hiccups are extremely common in newborns and young infants due to an immature diaphragm and nervous system. To reduce hiccups, try burping your baby after every 1-2 ounces of formula or when switching breasts during breastfeeding. Feed your baby in a more upright position to reduce air swallowing. If hiccups start during a feeding, pause and burp before continuing. A pacifier may help by encouraging rhythmic sucking that relaxes the diaphragm. Do not use gripe water, as the FDA has issued warnings about some brands, and there is no evidence it helps hiccups.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Hiccups tend to decrease in frequency as your baby grows. Continue using preventive strategies like frequent burping and upright positioning during and after feeds. If your baby gets hiccups between feedings, offering a pacifier or a small extra feeding may help. Avoid overfeeding, as a very full stomach pressing against the diaphragm can trigger hiccups. If your baby seems comfortable and happy despite hiccupping, no intervention is needed — the hiccups are bothering you more than your baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, hiccups become much less frequent. If your baby still hiccups often, especially after meals, consider whether reflux might be a contributing factor — hiccups combined with frequent spitting up, arching, or fussiness during feeds should be discussed with your pediatrician. As your baby starts solids, eating too quickly can cause hiccups, so offer small bites and allow time between spoonfuls. The diaphragm and nervous system are more mature now, and most healthy babies rarely experience bothersome hiccups by their first birthday.',
    },
  ],
  whenNormal: [
    'Hiccups last a few minutes to 20 minutes and resolve on their own without distressing your baby.',
    'Hiccups occur most commonly after feedings and your baby continues to eat, sleep, and behave normally.',
    'Your newborn hiccups multiple times a day but shows no other symptoms and is gaining weight well.',
  ],
  whenToMention: [
    'Hiccups are very frequent (many times daily) and seem to interfere with feeding or sleeping.',
    'Hiccups are often accompanied by spitting up, arching, or crying during feeds, which could indicate reflux.',
    'You have tried prevention strategies and hiccups continue to be frequent and prolonged.',
  ],
  whenToActNow: [
    'Hiccups are accompanied by difficulty breathing, turning blue, or gagging — seek immediate medical attention.',
    'Your baby has hiccups that last for hours and your baby is unable to feed, becoming increasingly distressed — contact your pediatrician urgently.',
    'Hiccups are accompanied by repeated projectile vomiting in a newborn, which could indicate pyloric stenosis — seek emergency evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-hiccups', 'hiccups-wont-stop', 'baby-gulping-air'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Burping, Hiccups, and Spitting Up',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Burping-Hiccups-and-Spitting-Up.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Hiccups in Babies: What to Know',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/expert-answers/newborn-hiccups/faq-20457795',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Hiccups: Causes and Treatment',
      url: 'https://medlineplus.gov/ency/article/003068.htm',
    },
  ],
};
