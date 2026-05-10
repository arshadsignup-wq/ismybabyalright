import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'umbilical-cord-stump-bleeding',
  title: 'Umbilical Cord Stump Bleeding',
  category: 'medical',
  searchTerms: [
    'umbilical cord bleeding',
    'belly button bleeding newborn',
    'cord stump bleeding after falling off',
    'blood from baby belly button',
    'newborn navel bleeding',
    'umbilical cord blood oozing',
    'baby belly button won\'t stop bleeding',
    'cord stump pulled off bleeding',
  ],
  quickAnswer:
    'A small amount of bleeding or oozing from the umbilical cord stump is common, especially as it separates or after it falls off. A few drops of blood on the diaper or a slight ooze that stops with gentle pressure is typically normal. However, active or persistent bleeding that soaks the diaper or does not stop with gentle pressure needs medical attention.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'In the first couple of days, the cord clamp is in place and bleeding is rare. If you notice blood at the cord clamp site, alert your nurse or pediatrician. The stump should be kept clean and dry. Ensure the diaper is folded below the stump to prevent irritation. A very small amount of oozing at the base where the cord meets the skin can occur and is generally not concerning.',
    },
    {
      ageRange: '2-7 days',
      context:
        'As the cord stump dries and begins to separate, you may notice a small amount of blood or blood-tinged discharge at the base. This is similar to a scab coming off a healing wound. A few drops of blood are normal. Keep the area clean and dry. Avoid pulling on the stump, even if it appears to be hanging on by a thread. Let it fall off naturally. If there is active bleeding that does not stop after 10 minutes of gentle pressure with a clean cloth, contact your pediatrician.',
    },
    {
      ageRange: '1-3 weeks',
      context:
        'The cord stump typically falls off between 7-21 days. When it separates, you may see a small raw area that can ooze slightly or bleed a tiny amount. This usually resolves within a couple of days. If the bleeding is more than a few drops, or if you notice a moist red lump (umbilical granuloma) that bleeds easily, contact your pediatrician. An umbilical granuloma is benign but may need treatment to stop recurring bleeding.',
    },
    {
      ageRange: '3 weeks - 2 months',
      context:
        'The navel should be fully healed by this point. Any new bleeding from the belly button area after complete healing is unusual and should be evaluated. Rarely, bleeding can indicate an umbilical granuloma, umbilical polyp, or other anatomical variant. If you notice intermittent bleeding or persistent moisture from the navel, bring it to your pediatrician\'s attention.',
    },
  ],
  whenNormal: [
    'A few drops of blood when the cord stump separates or falls off, similar to a scab lifting',
    'Slight blood-tinged oozing at the base that stops on its own or with brief gentle pressure',
    'A tiny amount of dried blood on the diaper near the stump area',
    'No accompanying redness, swelling, pus, or foul odor',
  ],
  whenToMention: [
    'Bleeding recurs multiple times even though each episode is small',
    'A moist, pink-red lump is visible at the navel that seems to bleed easily when touched',
    'The cord stump area is still oozing after the stump has been off for more than a week',
  ],
  whenToActNow: [
    'Active bleeding from the cord stump that soaks the diaper, does not stop after 10 minutes of firm gentle pressure, or restarts after stopping, as this may indicate a bleeding disorder or vascular anomaly',
    'Bleeding is accompanied by redness, swelling, foul-smelling discharge, or your baby has a fever or appears unwell, as this may indicate infection requiring urgent treatment',
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
  ],
};
