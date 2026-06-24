import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-c-section-recovery-timeline',
  title: 'C-Section Recovery Timeline and What to Expect',
  category: 'maternal',
  searchTerms: [
    'c-section recovery timeline',
    'cesarean section recovery',
    'c-section incision healing',
    'how long to recover from c-section',
    'c-section scar care',
    'pain after c-section how long',
    'c-section recovery week by week',
    'driving after c-section',
    'exercise after c-section when',
    'c-section complications signs',
    'c-section recovery tips',
  ],
  quickAnswer:
    'Cesarean section is major abdominal surgery, and full recovery typically takes 6-8 weeks for basic healing and up to 6-12 months for complete internal recovery. The incision passes through seven layers of tissue. While many women are walking within 24 hours and caring for their baby within days, it is important to respect your body\'s healing process. Common experiences include incision soreness for several weeks, fatigue, difficulty with certain movements (standing up from lying down, lifting anything heavier than the baby), and numbness around the incision. With approximately 32% of U.S. births being cesarean, understanding the recovery process is essential.',
  byAge: [
    {
      ageRange: 'Baby 0-2 weeks',
      context:
        'The first two weeks are the most challenging. Pain management is important: take pain medication as prescribed rather than waiting for pain to become severe. You may need help getting in and out of bed (rolling onto your side and using your arms to push up protects the incision). Avoid lifting anything heavier than your baby, and avoid stairs when possible. Walk as soon as you are able (gentle walking promotes healing and reduces blood clot risk) but avoid bending, twisting, or straining. The incision will have steri-strips or surgical glue; follow your surgeon\'s wound care instructions. Gas pain and constipation are common; stool softeners, gentle movement, and avoiding gas-producing foods help.',
    },
    {
      ageRange: 'Baby 2-6 weeks',
      context:
        'Pain gradually decreases, though soreness and occasional sharp twinges around the incision are normal. Most women can reduce pain medication by week 2-3. Continue to avoid heavy lifting, vigorous exercise, driving (typically restricted until you can brake sharply without pain, usually 2-3 weeks), and sexual intercourse until cleared at your 6-week visit. The incision may feel numb, itchy, or tingly as nerves begin to regenerate; this is normal and can persist for months. Keep the incision clean and dry. Watch for signs of infection: increasing redness, warmth, swelling, opening of the incision, pus, fever, or foul odor.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months and beyond',
      context:
        'At 6 weeks, your provider will assess your incision and clear you for exercise and sexual activity. However, internal healing continues for months. Begin with gentle exercise (walking, pelvic floor exercises) and gradually increase. Avoid high-impact exercise and heavy lifting until 12 weeks or longer. Scar tissue massage (once the incision is fully closed) can help with adhesions, mobility, and the pulling sensation many women feel. Numbness around the scar may persist for months to years and sometimes permanently. Some women develop scar adhesions that cause pain with certain movements; pelvic floor physical therapy can help. Emotional processing of the birth experience, especially if the cesarean was unplanned or emergency, is also an important part of recovery.',
    },
  ],
  whenNormal: [
    'You have gradually decreasing incision pain and are able to do a bit more each day.',
    'Numbness, tingling, or itching around the incision site as nerves regenerate.',
    'Mild pulling or tightness sensations around the scar during certain movements.',
    'Fatigue that is gradually improving.',
  ],
  whenToMention: [
    'Your incision pain is not improving or is worsening after the first week.',
    'You have persistent numbness, pain, or pulling at the scar site beyond 6 months.',
    'You are struggling emotionally with your birth experience and want support.',
    'You want guidance on when to start specific exercises or activities safely.',
  ],
  whenToActNow: [
    'Your incision is opening, leaking pus, or has increasing redness and warmth, which may indicate infection.',
    'You have a fever over 100.4 degrees F with any wound changes or abdominal pain.',
    'You have sudden severe abdominal pain, heavy bleeding, or leg pain and swelling, which could indicate a blood clot or internal complication.',
    'You have difficulty breathing or chest pain, which could indicate a pulmonary embolism (blood clot in the lungs) and requires emergency care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-body-recovery-timeline',
    'postpartum-bleeding-how-long',
    'postpartum-abdominal-separation-check',
    'postpartum-back-pain-causes',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG. Cesarean Birth (C-Section) FAQ.',
      url: 'https://www.acog.org/womens-health/faqs/cesarean-birth',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Recovery After Cesarean Delivery. Obstetrics & Gynecology, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31568081/',
    },
    {
      org: 'WHO',
      citation:
        'WHO. WHO Statement on Caesarean Section Rates, 2015.',
      url: 'https://www.who.int/publications/i/item/WHO-RHR-15.02',
    },
  ],
};
