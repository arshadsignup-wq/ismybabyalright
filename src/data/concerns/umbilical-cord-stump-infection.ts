import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'umbilical-cord-stump-infection',
  title: 'Umbilical Cord Stump Infection',
  category: 'medical',
  searchTerms: [
    'umbilical cord infection',
    'belly button infection newborn',
    'omphalitis signs',
    'red swollen belly button baby',
    'umbilical cord stump smells bad',
    'pus from belly button newborn',
    'infected cord stump',
    'newborn navel infection symptoms',
    'umbilical cord red around base',
  ],
  quickAnswer:
    'An umbilical cord stump infection (omphalitis) is a serious but uncommon condition in newborns. Signs include redness spreading around the base of the stump, foul-smelling discharge, swelling, and warmth. While minor oozing or a small amount of clear or slightly bloody discharge is normal during healing, any significant redness, pus, or odor warrants prompt medical evaluation.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'In the first two days, the cord stump is freshly clamped and still moist. The area should be kept clean and dry. Hospitals apply a plastic clamp and the cord begins to dry out. There is generally no cause for concern unless you notice redness spreading beyond the base of the cord, which would be unusual this early. The cord should not be submerged in water during bathing. Fold the diaper below the stump to keep it dry.',
    },
    {
      ageRange: '2-7 days',
      context:
        'The cord stump is actively drying and may change color from yellowish-green to brown or black. A small amount of clear or slightly blood-tinged discharge at the base is normal. However, this is the period when omphalitis is most likely to develop if bacteria colonize the area. Watch for redness that extends more than 1 cm from the base, purulent (yellow or green) drainage, a foul smell, or the baby seeming unwell (fever, lethargy, poor feeding). Omphalitis can progress rapidly and requires urgent antibiotic treatment.',
    },
    {
      ageRange: '1-3 weeks',
      context:
        'The cord stump usually falls off between 7-21 days after birth. After it separates, a small raw area may remain that can ooze slightly for a few days. This is normal healing. If the area becomes red, swollen, or develops a discharge after the stump falls off, this could indicate infection or an umbilical granuloma (a small, moist red lump). An umbilical granuloma is usually benign and treated with silver nitrate application, but infection should be ruled out.',
    },
    {
      ageRange: '3 weeks - 2 months',
      context:
        'By this point, the belly button should be fully healed. If the cord stump has not yet fallen off after 3-4 weeks, mention it to your pediatrician, as delayed separation can occasionally indicate an immune system issue (leukocyte adhesion deficiency). Any new redness, swelling, or drainage from the navel area after the initial healing period should be evaluated, as it could indicate a urachal anomaly or other anatomical issue.',
    },
  ],
  whenNormal: [
    'A small amount of clear or slightly blood-tinged discharge at the base of the cord stump as it dries',
    'The cord stump appears dry, dark brown or black, and is gradually separating',
    'A tiny raw spot remains for a few days after the cord falls off with minimal oozing',
    'The area around the cord base has no spreading redness, swelling, or foul smell',
  ],
  whenToMention: [
    'You see a small amount of yellowish discharge but no spreading redness or foul odor',
    'The cord stump has not fallen off after 3 weeks',
    'A small, moist, pink-red lump remains after the cord falls off (possible umbilical granuloma)',
  ],
  whenToActNow: [
    'There is spreading redness around the base of the cord, purulent discharge, a foul smell, or the skin feels warm, as omphalitis can become life-threatening if untreated',
    'Your baby has a fever, is lethargic, is feeding poorly, or seems unwell in addition to changes around the cord stump, as this may indicate the infection is spreading (sepsis)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Umbilical Cord Care. American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Umbilical-Cord-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Umbilical Cord Care in Newborns. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001926.htm',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Cord Care: Recommendations for Clean Birth and Postnatal Cord Care.',
      url: 'https://www.who.int/publications/i/item/WHO-RHR-98.4',
    },
  ],
};
