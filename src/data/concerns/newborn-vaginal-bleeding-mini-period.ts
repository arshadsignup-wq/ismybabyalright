import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-vaginal-bleeding-mini-period',
  title: 'Mini Period in Newborn Girls (Vaginal Bleeding)',
  category: 'medical',
  searchTerms: [
    'newborn vaginal bleeding',
    'baby girl mini period',
    'newborn girl blood in diaper',
    'baby girl vaginal discharge',
    'newborn pseudomenses',
    'baby girl pink discharge',
    'newborn girl spotting',
    'baby girl bleeding diaper',
    'withdrawal bleeding newborn',
    'newborn girl bloody discharge normal',
  ],
  quickAnswer:
    'A small amount of vaginal bleeding or blood-tinged discharge in a newborn girl is normal and commonly called a "mini period" or pseudomenses. It is caused by withdrawal from the mother\'s estrogen hormones after birth. It typically occurs in the first week of life and resolves within a few days without any treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Pseudomenses, or mini periods, occur in up to 25% of newborn girls, usually in the first week of life. You may notice a small amount of blood or blood-tinged mucus on the diaper. You may also see a white or slightly yellow mucous vaginal discharge, which is also hormone-related and normal. This happens because the baby was exposed to the mother\'s high estrogen levels in the womb, and when those hormones are withdrawn after birth, a small amount of uterine lining sheds. No treatment or investigation is needed.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The vaginal bleeding and discharge should have resolved within the first 1-2 weeks. A small amount of white mucous discharge may persist slightly longer and is still hormone-related. Any new vaginal bleeding after the first two weeks of life is not a mini period and should be evaluated by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'There should be no vaginal bleeding at this age. Any vaginal bleeding in an infant beyond the newborn period requires prompt medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Vaginal bleeding at this age is not normal and requires medical evaluation to determine the cause.',
    },
  ],
  whenNormal: [
    'Small amount of blood or pink-tinged discharge on the diaper in the first 1-2 weeks of life',
    'White or slightly yellow mucous vaginal discharge in the first few weeks',
    'The bleeding is light and resolves within a few days',
    'Baby is otherwise well, feeding normally, and has no other symptoms',
  ],
  whenToMention: [
    'The vaginal bleeding is heavier than expected or lasts longer than a few days',
    'You notice vaginal discharge that has an unusual odor or color',
    'You are unsure whether the blood is vaginal or from another source',
  ],
  whenToActNow: [
    'Vaginal bleeding that occurs after the first two weeks of life or recurs after having resolved',
    'Heavy bleeding that soaks the diaper, or bleeding accompanied by fever, irritability, or other signs of illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Baby and Young Child: Birth to Age 5. 7th Edition.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-First-Days.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Vaginal Bleeding. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001911.htm',
    },
  ],
  relatedConcernSlugs: ['newborn-swollen-genitals', 'newborn-breast-tissue-swelling', 'blood-in-diaper-newborn'],
};
