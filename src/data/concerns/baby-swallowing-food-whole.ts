import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swallowing-food-whole',
  title: 'My Baby Is Swallowing Food Without Chewing',
  category: 'feeding',
  searchTerms: [
    'baby swallowing food whole',
    'baby not chewing food',
    'baby gulping food without chewing',
    'baby doesn\'t chew',
    'toddler swallowing food whole',
    'baby food in diaper undigested',
    'baby not munching food',
    'when do babies learn to chew',
    'baby just swallows food',
    'baby inhaling food without chewing',
  ],
  quickAnswer:
    'Babies learn to chew gradually, and it is normal for younger babies to swallow soft foods without much chewing. True chewing with a rotary jaw motion develops around 12 to 18 months. Before that, babies use an up-and-down munching pattern. Seeing pieces of food in the diaper is also normal since babies cannot fully break down all foods.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This age group is not eating solids. Chewing is not expected.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When starting purees, babies are primarily learning to swallow. They use a suckling motion similar to breastfeeding. There is no chewing at this stage, and that is completely normal.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies begin developing an up-and-down munching pattern. They may not appear to chew much before swallowing, but this is their early version of chewing. Offer soft foods that dissolve easily to reduce choking risk while they develop this skill. Meltable puffs and very soft foods are good practice.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Munching becomes more evident and babies start moving food side to side in their mouth. If your baby seems to gulp food without any munching, try modeling chewing motions yourself. Offer foods that require some chewing but are still soft enough to gum safely, like steamed vegetables or soft fruits.',
    },
    {
      ageRange: '12-24 months',
      context:
        'True rotary chewing develops during this period. Toddlers should be showing improved chewing skills by 18 months. If your toddler still swallows everything whole without attempting to chew, especially harder textures, discuss this with your pediatrician as it may indicate an oral motor delay.',
    },
  ],
  whenNormal: [
    'Baby under 12 months swallows soft foods with minimal chewing',
    'You see recognizable food pieces in baby\'s diaper',
    'Baby uses an up-and-down munching motion even if it does not look like adult chewing',
    'Baby chews some foods but swallows others whole',
  ],
  whenToMention: [
    'Baby is over 12 months and makes no attempt to chew any foods',
    'Baby frequently chokes on foods that should be manageable for their age',
    'Baby seems to have difficulty moving food around in their mouth',
  ],
  whenToActNow: [
    'Baby is choking frequently because they swallow large pieces without chewing',
    'Baby has had a true choking emergency requiring intervention',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-on-food', 'baby-stuffing-mouth-full', 'baby-gagging-on-textures'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chewing Development in Infants. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Development of Chewing in Young Children. Archives of Oral Biology, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Complementary Feeding: Family Foods for Breastfed Children. 2000.',
      url: 'https://www.who.int/publications/i/item/WHO-NHD-00.1',
    },
  ],
};
