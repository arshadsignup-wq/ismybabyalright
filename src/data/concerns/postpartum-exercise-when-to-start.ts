import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-exercise-when-to-start',
  title: 'Exercise After Birth: When to Start Safely',
  category: 'maternal',
  searchTerms: [
    'when can I exercise after giving birth',
    'postpartum exercise timeline',
    'exercise after c section',
    'postpartum workout safe',
    'when to start running after baby',
    'exercise after vaginal delivery',
    'postpartum fitness',
    'ab exercises after pregnancy',
    'pelvic floor exercises postpartum',
    'how soon can I exercise after birth',
  ],
  quickAnswer:
    'Most people can begin gentle movement like walking and pelvic floor exercises within days of an uncomplicated vaginal delivery. After a cesarean delivery, recovery typically takes longer and you should wait for provider clearance before anything beyond gentle walking. ACOG recommends that postpartum individuals can gradually resume exercise when they feel ready, rather than waiting for a specific milestone, though a postpartum checkup is important to assess readiness for higher-intensity activity.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'In the earliest days after delivery, focus on rest, recovery, and gentle movement. Short walks around the house and pelvic floor contractions (Kegels) are appropriate for most people after vaginal delivery. After a cesarean section, limit activity to gentle walking and avoid lifting anything heavier than your baby. Listen to your body: if an activity causes pain, bleeding, or heavy fatigue, scale back. This is not the time for structured exercise.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Gradually increase walking distance and duration as your energy allows. You can begin gentle core rehabilitation exercises, focusing on deep core activation and breathing rather than traditional crunches or planks. Avoid high-impact activities, heavy lifting, and exercises that increase abdominal pressure until cleared by your provider. If you had a cesarean, your incision needs time to heal internally. Your six-week postpartum visit is an opportunity to discuss your exercise goals and get personalized guidance.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'After your postpartum checkup (usually around six weeks), most providers clear patients for a gradual return to exercise. Start at a lower intensity than your pre-pregnancy fitness level and build up slowly. Swimming can resume once postpartum bleeding has stopped and any wounds have healed. If you had diastasis recti (abdominal separation), work with a pelvic floor physical therapist before returning to traditional ab exercises. Pay attention to signs of pelvic floor dysfunction such as leaking urine during exercise.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this time, most people can gradually return to their pre-pregnancy exercise routines, including moderate-intensity cardio and strength training. However, the postpartum body has undergone significant changes, and it is important to progress gradually. Ligaments remain more lax due to relaxin for several months postpartum, increasing injury risk. If you are breastfeeding, moderate exercise does not affect milk supply or composition. Stay well hydrated and feed or pump before exercising for comfort.',
    },
  ],
  whenNormal: [
    'You feel ready for gentle walking within days of an uncomplicated vaginal delivery',
    'You experience some muscle weakness and lower endurance compared to your pre-pregnancy fitness',
    'Mild discomfort with certain movements that improves as you gradually increase activity',
  ],
  whenToMention: [
    'You experience increased vaginal bleeding when you start exercising',
    'You leak urine during exercise, even after several weeks of pelvic floor exercises',
    'You notice a bulge or doming along your midline abdomen during core work, suggesting diastasis recti',
    'You feel pressure or heaviness in your pelvis during or after exercise',
  ],
  whenToActNow: [
    'You experience sudden heavy bleeding (soaking more than one pad per hour) during or after exercise',
    'You develop severe abdominal pain, especially after cesarean delivery, which could indicate wound complications',
    'You feel chest pain, severe shortness of breath, or dizziness during exercise',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-return-to-running',
    'postpartum-weight-loss-breastfeeding',
    'postpartum-pelvic-floor-weakness',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Physical Activity and Exercise During Pregnancy and the Postpartum Period. ACOG Committee Opinion No. 804, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period',
    },
    {
      org: 'NIH',
      citation:
        'Mottola MF, et al. 2019 Canadian Guideline for Physical Activity Throughout Pregnancy. British Journal of Sports Medicine, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30337460/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
  ],
};
