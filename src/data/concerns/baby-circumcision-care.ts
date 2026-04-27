import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-circumcision-care',
  title: 'Baby Circumcision Care and Healing',
  category: 'medical',
  searchTerms: [
    'baby circumcision care',
    'circumcision healing stages',
    'baby circumcision infection signs',
    'baby circumcision bleeding',
    'how long does circumcision take to heal baby',
    'circumcision aftercare newborn',
    'baby circumcision yellow crust',
    'circumcision red and swollen',
    'penis care after circumcision',
    'when does circumcision scab fall off',
    'baby circumcision diaper care',
    'circumcision not healing baby',
  ],
  quickAnswer:
    'A newborn circumcision typically heals within 7-10 days. During healing, it is normal to see redness, slight swelling, yellow-white crusting (not pus), and small amounts of oozing. Apply petroleum jelly (Vaseline) and a gauze pad to the area with each diaper change to prevent sticking. The yellow-white coating that forms is normal healing tissue and should not be removed. True signs of infection - increasing redness that spreads, foul-smelling discharge, fever, or active bleeding - are uncommon but need prompt attention.',
  byAge: [
    {
      ageRange: 'Days 1-3',
      context:
        'In the first few days after circumcision, some swelling, redness, and slight bleeding are normal. The tip of the penis may look red, raw, or slightly bruised. A small amount of blood on the diaper (about the size of a quarter or smaller) is expected. Apply a generous layer of petroleum jelly with each diaper change to prevent the healing tissue from sticking to the diaper. If a Plastibell ring was used, it will remain in place and fall off on its own within 5-8 days - do not pull it off.',
    },
    {
      ageRange: 'Days 3-7',
      context:
        'During this period you will notice a yellow-white film forming over the healing area. This is completely normal - it is called a fibrin crust and is part of the natural healing process, similar to a scab. Do not try to clean it off or remove it. The swelling should be gradually decreasing. Continue applying petroleum jelly with each diaper change. Your baby may be slightly fussy during diaper changes as the area is sensitive, but circumcision pain is generally mild by this point.',
    },
    {
      ageRange: 'Days 7-14',
      context:
        'By the end of the second week, most of the healing should be complete. The yellow crust will gradually clear, and the skin will begin to look more like normal pink skin. Some residual swelling may persist but should be minimal. You can transition from petroleum jelly to regular diaper changes once the area looks healed and is no longer raw or sticky. If healing seems stalled or the area looks worse rather than better, contact your pediatrician.',
    },
    {
      ageRange: '2-4 weeks',
      context:
        'By 2-4 weeks, the circumcision should be fully healed. The scar line may remain slightly visible and may look like a different shade of skin, which is normal. Some parents notice that the appearance looks uneven or that there is extra skin on one side - minor cosmetic variations are common and usually become less noticeable as the baby grows. Adhesions (where the remaining foreskin sticks to the head of the penis) can sometimes occur and your pediatrician will check for these at well visits.',
    },
  ],
  whenNormal: [
    'A yellow-white crust or film on the healing area - this is normal healing tissue, not infection',
    'Mild swelling and redness of the tip of the penis that gradually improves each day',
    'A small amount of blood on the diaper (quarter-sized or smaller) in the first 1-2 days',
    'Your baby is slightly fussy during diaper changes in the first week but is otherwise feeding and behaving normally',
  ],
  whenToMention: [
    'The redness or swelling seems to be increasing rather than decreasing after the first few days',
    'There is thick white or yellow discharge that has an odor',
    'Your baby is not urinating normally (should have wet diapers within 12 hours of the procedure)',
    'The Plastibell ring has not fallen off after 10 days',
  ],
  whenToActNow: [
    'Active bleeding that does not stop with gentle pressure for 10 minutes, or bleeding that soaks the diaper',
    'Your baby has a fever (100.4F/38C or higher rectally), foul-smelling discharge, or spreading redness - these are signs of infection',
    'The entire head of the penis appears dark red, purple, or black, suggesting a circulation problem',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['diaper-rash'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Circumcision. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/decisions-to-make/Pages/Circumcision.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for a Circumcised Penis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Caring-For-Your-Sons-Penis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Circumcision. MedlinePlus.',
      url: 'https://medlineplus.gov/circumcision.html',
    },
  ],
};
