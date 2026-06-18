import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'accessory-nipple-baby',
  title: 'My Baby Has an Extra Nipple (Accessory Nipple)',
  category: 'skin',
  searchTerms: [
    'accessory nipple baby',
    'extra nipple newborn',
    'supernumerary nipple baby',
    'third nipple baby',
    'polythelia baby',
    'extra nipple on belly baby',
    'accessory nipple milk line',
    'baby born with extra nipple',
    'supernumerary nipple health concern',
    'extra nipple needs treatment',
  ],
  quickAnswer:
    'Accessory (supernumerary) nipples are one of the most common minor congenital findings, occurring in about 1 in 18 people. They appear as small, flat, often pigmented bumps along the "milk line" — an embryonic line running from the armpit to the groin on each side. Most people mistake them for moles. Accessory nipples are almost always harmless and require no treatment. In rare cases, they may be associated with kidney abnormalities, so some pediatricians recommend a renal ultrasound if one is found, though this practice varies.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Accessory nipples may be noticed at birth or during early pediatric visits. They typically appear below the normal nipples, on the chest or abdomen, along the milk line. They may look like a small, slightly raised bump with a lighter colored center, or simply like a flat mole. Your pediatrician may note it in the chart. Depending on your pediatrician\'s practice, they may recommend a kidney ultrasound to screen for renal anomalies — this is a precautionary measure based on older studies showing a possible association.',
    },
    {
      ageRange: '6 months - childhood',
      context:
        'Accessory nipples typically remain small and inconspicuous during childhood. They do not cause any symptoms or health problems. No treatment is needed. If a renal ultrasound was recommended and comes back normal, no further follow-up is needed. The accessory nipple itself will remain as a permanent, benign finding.',
    },
    {
      ageRange: 'Puberty',
      context:
        'At puberty, accessory nipples may enlarge slightly or darken due to hormonal changes, similar to regular nipples. In rare cases, accessory breast tissue (not just a nipple) may be present and can enlarge at puberty. If the area becomes uncomfortable or cosmetically concerning, surgical removal is straightforward. Accessory nipples do not increase cancer risk.',
    },
  ],
  whenNormal: [
    'Your baby has a small bump along the milk line that your pediatrician has identified as an accessory nipple — this is common and benign',
    'The accessory nipple is flat, painless, and not changing',
    'A renal ultrasound (if performed) was normal',
  ],
  whenToMention: [
    'You notice a new bump on your baby\'s chest or abdomen that you are unsure about',
    'The accessory nipple area becomes red, swollen, or painful',
    'You notice swelling or a mass near the accessory nipple, especially during puberty',
    'Your family has a history of kidney problems and your baby has an accessory nipple',
  ],
  whenToActNow: [
    'The area around the accessory nipple becomes severely swollen, red, and painful — this may indicate infection in underlying accessory breast tissue (rare) and needs medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'epstein-pearls-newborn',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Supernumerary Nipples. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560737/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Newborn Findings. Pediatrics in Review, 2015.',
      url: 'https://publications.aap.org/pediatricsinreview/article/36/12/542/32596',
    },
    {
      org: 'DermNet',
      citation:
        'DermNet NZ. Accessory Nipple.',
      url: 'https://dermnetnz.org/topics/accessory-nipple',
    },
  ],
};
