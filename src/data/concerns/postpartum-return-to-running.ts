import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-return-to-running',
  title: 'Returning to Running After Baby',
  category: 'maternal',
  searchTerms: [
    'running after baby',
    'postpartum running',
    'when can I run after giving birth',
    'return to running postpartum',
    'running after c section',
    'pelvic floor running postpartum',
    'couch to 5k postpartum',
    'leaking urine while running postpartum',
    'running after vaginal delivery',
    'postpartum running plan',
  ],
  quickAnswer:
    'Current guidelines recommend waiting at least twelve weeks postpartum before returning to running, and only after being cleared by your provider and ideally assessed by a pelvic floor physical therapist. Running is a high-impact activity that places significant demands on the pelvic floor, core, and joints, all of which need time to recover after pregnancy and birth. Returning too early can lead to pelvic floor dysfunction, urinary incontinence, and injury.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'Running is not recommended during this period regardless of how you delivered. Your body is still healing from pregnancy and birth, and your pelvic floor muscles are recovering from the strain of carrying a baby and delivering. Focus on rest, gentle walking, and pelvic floor exercises (Kegels and breathing). Even competitive athletes should respect this recovery window. Walking distance and pace can gradually increase as you feel comfortable.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'After your postpartum checkup, you can begin building a foundation for running through low-impact exercises. Focus on core rehabilitation, pelvic floor strengthening, and building lower body strength with exercises like squats, lunges, and bridges. A pelvic floor physical therapist can assess whether your pelvic floor is ready for the impact of running. Signs that you are not yet ready include urinary leakage, pelvic heaviness, or pain during walking or lower-impact exercise.',
    },
    {
      ageRange: '12-16 weeks postpartum',
      context:
        'The earliest recommended return to running is twelve weeks postpartum, and only if you meet readiness criteria: you can walk for 30 minutes without pain, pelvic heaviness, or leakage; you can perform single-leg balance, squats, and calf raises without difficulty; and ideally you have been assessed by a pelvic floor therapist. Start with a walk-run program (such as alternating one minute of running with several minutes of walking) and gradually increase running intervals. This is a marathon, not a sprint - patience now prevents problems later.',
    },
    {
      ageRange: '4-6 months postpartum',
      context:
        'By this point, many runners are building back mileage and confidence. Continue to progress gradually, adding no more than 10% to your weekly running volume. If breastfeeding, wear a supportive sports bra and consider feeding or pumping before runs. Relaxin levels may still be elevated, which can affect joint stability and increase injury risk. Listen to your body: if you experience leaking, pelvic pressure, or pain, scale back and consult your pelvic floor therapist. Your pre-pregnancy pace will return, but it takes time.',
    },
  ],
  whenNormal: [
    'Feeling slower and less fit than before pregnancy when you first return to running',
    'Needing to use a walk-run approach for the first several weeks',
    'Some mild muscle soreness as your body readapts to impact exercise',
  ],
  whenToMention: [
    'You are leaking urine during or after running, even small amounts',
    'You feel pelvic heaviness, pressure, or a bulging sensation during or after running',
    'You have persistent hip, pelvic, or low back pain related to running',
    'You had a significant perineal tear or cesarean delivery and want guidance on safe return',
  ],
  whenToActNow: [
    'You experience sharp, sudden pain in your pelvis, abdomen, or cesarean scar during exercise',
    'You develop heavy vaginal bleeding during or after running',
    'You feel a noticeable bulge at your vaginal opening, which could indicate pelvic organ prolapse',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-exercise-when-to-start',
    'postpartum-pelvic-floor-weakness',
    'postpartum-incontinence',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'Goom T, Donnelly G, Brockwell E. Returning to Running Postnatal: Guidelines for Medical, Health and Fitness Professionals Managing This Population. British Journal of Sports Medicine, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31575698/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Physical Activity and Exercise During Pregnancy and the Postpartum Period. ACOG Committee Opinion No. 804, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service. Returning to Sport or Exercise After Having a Baby. NHS, 2024.',
      url: 'https://www.nhs.uk/conditions/baby/support-and-services/keeping-fit-and-healthy/',
    },
  ],
};
