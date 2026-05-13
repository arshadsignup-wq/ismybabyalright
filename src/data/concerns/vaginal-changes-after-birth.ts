import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaginal-changes-after-birth',
  title: 'Vaginal Changes After Giving Birth',
  category: 'maternal',
  searchTerms: [
    'vagina different after birth',
    'vaginal looseness after delivery',
    'vagina feels different after baby',
    'pelvic floor after birth',
    'vaginal opening larger after delivery',
    'will my vagina go back to normal after birth',
    'vaginal laxity postpartum',
    'vagina wider after giving birth',
  ],
  quickAnswer:
    'It is completely normal for your vagina to feel different after giving birth. The vaginal canal stretches significantly during delivery, and while it does recover much of its tone over time, it may not feel exactly the same as before. Pelvic floor exercises (Kegels) are the most effective way to restore muscle strength and tone. Most changes improve substantially within the first year postpartum.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Immediately after vaginal delivery, the vaginal area will feel swollen, sore, and significantly different. This is expected after the immense stretching that occurred during birth. You may notice increased vaginal width, bruising, and general tenderness. If you had stitches, the area may feel tight in some spots. Do not assess how things "look" or "feel" during this early period, as swelling distorts everything. Focus on healing with ice packs, sitz baths, and gentle care.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Swelling continues to decrease and tissues begin to recover. The vaginal canal is slowly regaining tone, though it will still feel looser than before pregnancy. This is a good time to begin gentle pelvic floor exercises (Kegels) if you feel comfortable. Start with simple squeeze-and-release exercises and gradually increase duration. If you are unsure whether you are doing them correctly, a pelvic floor physical therapist can guide you.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Most of the initial healing is complete by this point. You may begin to notice that your vagina feels closer to its pre-pregnancy state, though changes in sensation or tightness are common. Consistent pelvic floor exercises make a real difference. If you are experiencing a sensation of heaviness, pressure, or a bulge at the vaginal opening, mention it to your provider, as this could indicate pelvic organ prolapse, which is treatable.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Vaginal tone continues to improve with pelvic floor strengthening. Many women notice that sensation during intercourse is returning to normal, though some differences may persist. If you feel that your pelvic floor is weak, you leak urine, or you notice a bulge or pressure, a pelvic floor physical therapist can create a targeted exercise program. These issues are very common and highly responsive to treatment.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'By one year postpartum, most vaginal changes have stabilized. The vagina may feel slightly different than before, and that is normal. Continued pelvic floor exercises help maintain tone and function long-term. If you have persistent concerns about vaginal laxity, sensation, or prolapse symptoms, discuss them with your provider. There are both non-surgical and surgical options available for women who need additional support.',
    },
  ],
  whenNormal: [
    'Your vagina feels wider or looser than before pregnancy, especially in the first few months',
    'You notice changes in sensation during sex that gradually improve over time',
    'You experience occasional light urine leaks when coughing, sneezing, or jumping in the first few months',
    'The appearance of your vaginal opening looks slightly different than before birth',
  ],
  whenToMention: [
    'You feel a bulge or heaviness at the vaginal opening, especially at the end of the day or after standing for long periods',
    'Urinary leakage persists beyond three months postpartum or is getting worse rather than better',
    'You have significantly reduced sensation during intercourse that is not improving',
    'You experience difficulty controlling gas or stool, which may indicate pelvic floor or sphincter damage',
  ],
  whenToActNow: [
    'You can see or feel tissue protruding from the vaginal opening that does not go back in, which may indicate significant prolapse',
    'You develop new-onset inability to control bowel movements, which requires prompt evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pelvic Support Problems. ACOG FAQ, 2023.',
      url: 'https://www.acog.org/womens-health/faqs/pelvic-support-problems',
    },
    {
      org: 'NIH',
      citation:
        'Handa VL, et al. Pelvic Floor Disorders After Vaginal Birth. Obstetrics and Gynecology, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22914422/',
    },
  ],
};
