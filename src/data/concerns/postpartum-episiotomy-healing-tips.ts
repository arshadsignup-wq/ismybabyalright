import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-episiotomy-healing-tips',
  title: 'Episiotomy Healing: Tips and Timeline',
  category: 'maternal',
  searchTerms: [
    'episiotomy healing',
    'episiotomy recovery time',
    'how long does episiotomy take to heal',
    'episiotomy stitches care',
    'episiotomy pain relief',
    'sitz bath after episiotomy',
    'episiotomy infection signs',
    'perineal stitches aftercare',
    'episiotomy scar tissue',
    'when do episiotomy stitches dissolve',
  ],
  quickAnswer:
    'An episiotomy typically takes two to four weeks to heal, though deeper cuts may take longer. Pain and discomfort are most intense in the first few days and gradually improve. Key strategies for healing include keeping the area clean, using sitz baths, applying cold packs, and taking recommended pain relievers. Most stitches dissolve on their own within two to four weeks.',
  byAge: [
    {
      ageRange: '0-1 week postpartum',
      context:
        'The first week is usually the most uncomfortable. Use a peri bottle (squeeze bottle) to rinse the perineum with warm water after urination or bowel movements rather than wiping. Apply ice packs or chilled witch hazel pads for 10 to 20 minutes at a time to reduce swelling. Sitz baths, where you sit in a few inches of warm water for 10 to 15 minutes, can provide significant relief. Sit on a donut-shaped cushion to reduce pressure on the area. Take ibuprofen or acetaminophen as directed by your provider.',
    },
    {
      ageRange: '1-4 weeks postpartum',
      context:
        'During weeks two through four, you should notice gradual improvement in pain and swelling. Stitches typically begin to dissolve during this period. Continue sitz baths, keep the area dry between cleanings, and wear loose cotton underwear. Avoid heavy lifting, straining, and strenuous activity. If you notice increasing pain, redness, swelling, or foul-smelling discharge, contact your provider as these could indicate infection. Stool softeners help prevent straining that could stress the healing tissue.',
    },
    {
      ageRange: '4-8 weeks postpartum',
      context:
        'By four to six weeks, most episiotomies have healed externally, and your provider will typically assess the site at your postpartum checkup. Some tenderness or sensitivity may persist, which is normal. Internal tissue continues to heal and strengthen over the following weeks. Your provider can advise you on when it is safe to resume sexual intercourse, exercise, and other activities. Perineal massage with a water-based lubricant can help soften scar tissue.',
    },
    {
      ageRange: '2-6 months postpartum',
      context:
        'Complete healing, including scar tissue maturation, can take several months. If you experience ongoing pain, tightness, or discomfort during intercourse, pelvic floor physical therapy can be very effective. Scar tissue massage, taught by a pelvic floor therapist, can improve flexibility and reduce discomfort. Do not hesitate to seek help if healing is not progressing as expected. Some people benefit from topical treatments prescribed by their provider.',
    },
  ],
  whenNormal: [
    'Pain and swelling gradually decrease over the first two weeks',
    'Mild itching around the healing area, which often indicates healing',
    'Stitches dissolving on their own within two to four weeks',
    'Some tenderness that improves with sitz baths and pain medication',
  ],
  whenToMention: [
    'Pain worsens rather than improves after the first few days',
    'The incision area becomes increasingly red, swollen, or warm to the touch',
    'You notice foul-smelling discharge from the wound site',
    'You still have significant pain during daily activities after four to six weeks',
  ],
  whenToActNow: [
    'You develop a fever over 100.4 degrees Fahrenheit (38 degrees Celsius) along with wound pain or discharge',
    'The wound appears to have opened or separated, or you see pus draining from it',
    'You experience heavy rectal or vaginal bleeding that soaks more than one pad per hour',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-constipation-remedies',
    'postpartum-hemorrhoid-treatment',
    'postpartum-sex-readiness-signs',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Episiotomy. ACOG Practice Bulletin, 2016.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2016/07/prevention-and-management-of-obstetric-lacerations-at-vaginal-delivery',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service. Episiotomy and Perineal Tears. NHS, 2024.',
      url: 'https://www.nhs.uk/pregnancy/labour-and-birth/what-happens/episiotomy-and-perineal-tears/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Perineal Care. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470599/',
    },
  ],
};
