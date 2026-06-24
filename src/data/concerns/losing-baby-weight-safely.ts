import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'losing-baby-weight-safely',
  title: 'Losing Baby Weight Safely After Pregnancy',
  category: 'maternal',
  searchTerms: [
    'losing baby weight safely',
    'postpartum weight loss',
    'how to lose weight after baby',
    'breastfeeding weight loss',
    'postpartum diet safe',
    'when to start exercising after baby',
    'losing weight while breastfeeding',
    'postpartum body weight',
    'baby weight won\'t come off',
    'safe weight loss after pregnancy',
    'postpartum metabolism changes',
    'body after baby realistic timeline',
  ],
  quickAnswer:
    'It took nine months to gain pregnancy weight, and it is realistic to expect 9-12 months or more to return to your pre-pregnancy weight. The average woman retains 10-15 pounds at 6 months postpartum, and this is normal. A safe rate of postpartum weight loss is 1-2 pounds per week. If you are breastfeeding, you need an additional 300-500 calories per day, and restrictive dieting can reduce milk supply. Focus on nutrient-dense foods, gentle movement when cleared by your provider (usually 6 weeks postpartum for vaginal delivery, 8-12 weeks for cesarean), and realistic expectations.',
  byAge: [
    {
      ageRange: 'Baby 0-6 weeks',
      context:
        'The immediate postpartum period is for recovery, not weight loss. You will lose approximately 10-13 pounds at delivery (baby, placenta, amniotic fluid), and additional water weight over the next few weeks. Do not diet or restrict calories during this period. Focus on nourishing your body, staying hydrated (especially if breastfeeding), and getting as much rest as possible. Walking is generally safe once you feel up to it, but vigorous exercise should wait until you are cleared by your provider at 6 weeks postpartum.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months',
      context:
        'After your provider clears you for exercise, begin gradually with walking, gentle yoga, or pelvic floor exercises. If you had diastasis recti (abdominal separation), avoid crunches and planks until assessed by a pelvic floor physical therapist. Breastfeeding burns 300-500 extra calories per day, so many women lose weight gradually while nursing without restricting intake. Aim for a balanced diet rich in protein, fiber, healthy fats, and whole grains. Avoid diets that cut out entire food groups. Weight loss of 1-2 pounds per week is safe and sustainable.',
    },
    {
      ageRange: 'Baby 6-12 months and beyond',
      context:
        'Many women find postpartum weight loss stalls or plateaus, especially with ongoing breastfeeding (some women\'s bodies hold onto weight reserves while nursing). Hormonal changes, sleep deprivation, stress, and thyroid dysfunction can all affect metabolism. If you have been eating well and exercising and the scale is not moving, ask your provider to check your thyroid levels. Some women do not reach their pre-pregnancy weight until after weaning. Be compassionate with yourself: your body grew a human, and permanent body changes (wider hips, changed shoe size, softer abdomen) are normal.',
    },
  ],
  whenNormal: [
    'You are gradually losing weight over months rather than weeks, at a pace of 1-2 pounds per week or less.',
    'Your weight loss plateaus during breastfeeding, as some bodies retain fat stores for milk production.',
    'Your body shape has changed even if you return to your pre-pregnancy weight.',
  ],
  whenToMention: [
    'You are struggling with postpartum weight and it is affecting your mental health or self-esteem.',
    'You want to discuss safe exercise and nutrition plans specific to your postpartum recovery.',
    'You are losing weight rapidly without trying, which could indicate a thyroid condition.',
    'You retained more than 20 pounds at 12 months postpartum and want guidance.',
  ],
  whenToActNow: [
    'You are severely restricting calories or engaging in disordered eating behaviors (purging, extreme fasting, laxative use) to lose weight postpartum.',
    'Rapid, unintentional weight loss is accompanied by symptoms like tremor, rapid heartbeat, anxiety, or excessive sweating, which may indicate postpartum thyroiditis.',
    'Preoccupation with weight is accompanied by symptoms of postpartum depression or anxiety.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-body-recovery-timeline',
    'postpartum-abdominal-separation-check',
    'postpartum-back-pain-causes',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG. Exercise After Pregnancy.',
      url: 'https://www.acog.org/womens-health/faqs/exercise-after-pregnancy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/3/e827/31785/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Postpartum Weight Retention: A Review. Journal of Women\'s Health, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25950727/',
    },
  ],
};
