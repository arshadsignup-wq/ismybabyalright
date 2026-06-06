import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-umbilical-granuloma',
  title: 'Umbilical Granuloma (Tissue Growth After Cord Falls Off)',
  category: 'medical',
  searchTerms: [
    'umbilical granuloma baby',
    'belly button tissue growth',
    'newborn belly button lump after cord',
    'baby belly button not healing',
    'umbilical granuloma treatment',
    'pink tissue belly button baby',
    'belly button granuloma silver nitrate',
    'newborn navel growth',
    'baby belly button wet tissue',
    'belly button granuloma normal',
  ],
  quickAnswer:
    'An umbilical granuloma is a small, moist, pink or red tissue growth that can form at the belly button after the umbilical cord stump falls off. It is not painful and is very common. It usually needs to be treated with silver nitrate application by your pediatrician to help it dry up and heal, which is a quick and painless in-office procedure.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'After the umbilical cord stump falls off (usually 1-3 weeks after birth), you may notice a small, moist, pinkish-red tissue growth at the belly button. This is an umbilical granuloma. It may ooze a small amount of clear or slightly yellow fluid and does not heal on its own like the rest of the cord site. It is not infected and does not cause your baby any pain. Your pediatrician can treat it by applying silver nitrate, a chemical that cauterizes the tissue, usually requiring 1-3 applications. This procedure is quick, painless, and done in the office.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If treated, the umbilical granuloma should heal within 1-2 weeks after silver nitrate application. Some granulomas require more than one treatment. If the granuloma has not been treated or is not responding to treatment, your pediatrician will assess whether further intervention is needed. Keep the area clean and dry between treatments.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Umbilical granulomas that persist despite treatment or that are very large may occasionally need to be tied off or surgically removed, though this is uncommon. If the belly button area continues to drain or has not healed, consult your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'An umbilical granuloma should be fully resolved by this age. Persistent drainage or tissue at the belly button beyond 6 months may warrant further evaluation to rule out other causes such as an umbilical polyp or urachal remnant.',
    },
  ],
  whenNormal: [
    'A small, moist, pink or red tissue growth at the belly button after the cord falls off',
    'Small amount of clear or slightly yellow drainage from the granuloma',
    'The surrounding skin is not red, swollen, or tender',
    'Baby is not in pain and the area does not smell bad',
  ],
  whenToMention: [
    'You notice a growth at the belly button after the cord stump falls off',
    'The granuloma is not improving after silver nitrate treatment',
    'The area continues to drain clear fluid for more than a few weeks',
  ],
  whenToActNow: [
    'The belly button area becomes red, swollen, warm, or tender with foul-smelling discharge, which could indicate infection',
    'Bleeding from the belly button that does not stop with gentle pressure, or fever in your newborn',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Umbilical Cord Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Umbilical-Cord-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Umbilical Granuloma. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557394/',
    },
  ],
  relatedConcernSlugs: ['umbilical-cord-stump-bleeding', 'umbilical-cord-stump-infection', 'newborn-belly-button-oozing'],
};
