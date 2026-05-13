import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'c-section-recovery',
  title: 'C-Section Recovery',
  category: 'maternal',
  searchTerms: [
    'c-section recovery',
    'cesarean section healing',
    'c-section incision care',
    'pain after c-section',
    'c-section scar healing',
    'how long does c-section recovery take',
    'c-section wound infection signs',
    'returning to activity after cesarean',
    'numbness around c-section scar',
  ],
  quickAnswer:
    'Recovery from a cesarean section is a major abdominal surgery recovery, and it typically takes six to eight weeks for the initial healing and several months to feel fully yourself again. It is important to be patient with your body, follow your provider\'s guidance on activity restrictions, and watch for signs of infection at the incision site.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'The first two weeks are the most physically challenging. You will likely experience incision pain that is managed with prescribed medications. Moving carefully, supporting your incision when coughing or laughing, and avoiding lifting anything heavier than your baby are important. Walking short distances is encouraged to promote healing and reduce the risk of blood clots.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Pain should gradually decrease during this period, though you may still have soreness around the incision. The external wound typically closes within the first two weeks, but the internal layers continue to heal. You should still avoid driving, heavy lifting, and strenuous activity until your provider clears you. Numbness, tingling, or itching around the scar is normal as nerves heal.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Most providers clear patients for normal activity, including exercise and driving, around the 6-week mark. You may still experience occasional twinges or pulling sensations at the incision site, which is normal. Scar tissue continues to mature and flatten over time. Gentle scar massage, once fully healed, can help improve flexibility and reduce adhesions.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this stage, most women feel significantly better and can engage in most activities. The scar may still be pink or slightly raised but will continue to fade. Some numbness around the incision area can persist for months or even permanently, as small nerves cut during surgery may not fully regenerate. Core strengthening exercises can help rebuild abdominal strength.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'The scar continues to mature, becoming flatter and lighter in color over the course of the first year. Most women have returned to their full range of activities by now. If you experience persistent pain, significant scar tissue buildup, or adhesion-related discomfort, discuss these with your provider.',
    },
  ],
  whenNormal: [
    'Moderate to significant incision pain in the first one to two weeks that gradually improves',
    'Numbness, tingling, or itching around the scar as nerves regenerate',
    'A pink or slightly raised scar that slowly fades and flattens over months',
    'Mild pulling or tightness at the incision site during movement for several weeks',
  ],
  whenToMention: [
    'Pain at the incision site is increasing rather than gradually improving after the first week',
    'You notice the scar becoming thickened, hard, or painful months after surgery',
    'You have persistent numbness that concerns you or affects your daily comfort',
    'You feel a pulling sensation or pain deep in the abdomen when you resume exercise',
  ],
  whenToActNow: [
    'The incision becomes red, swollen, warm, or is oozing pus or foul-smelling discharge, which may indicate infection',
    'You develop a fever above 100.4 F (38 C) along with increasing pain at the wound site',
    'The incision opens up or separates, even partially',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Cesarean Birth. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/cesarean-birth',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. C-Section Recovery. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/002911.htm',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Postpartum Pain Management. ACOG Practice Bulletin, 2021.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/09/postpartum-pain-management',
    },
  ],
};
