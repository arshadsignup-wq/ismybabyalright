import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postnatal-depletion-syndrome',
  title: 'Postnatal Depletion - Why You Still Feel Exhausted Months After Birth',
  category: 'maternal',
  searchTerms: [
    'postnatal depletion syndrome',
    'still exhausted months after baby',
    'postpartum fatigue won\'t go away',
    'feeling depleted after baby',
    'brain fog after baby years later',
    'nutritional depletion after pregnancy',
    'postpartum nutrient deficiency',
    'why am I still tired after having a baby',
    'mother exhaustion won\'t go away',
    'postnatal depletion vs postpartum depression',
    'postnatal depletion symptoms',
    'pregnancy recovery how long',
    'body not recovered after baby',
    'postpartum vitamin deficiency',
    'matrescence physical toll',
  ],
  quickAnswer:
    'Postnatal depletion is a condition where mothers experience persistent fatigue, brain fog, and physical exhaustion months or even years after giving birth, caused by nutrient depletion during pregnancy and breastfeeding. It affects an estimated 50% or more of mothers and is distinct from postpartum depression, though the two can overlap. Key depleted nutrients include iron, zinc, B12, vitamin D, omega-3 fatty acids, and magnesium. Recovery from the physical demands of pregnancy can take years, and targeted nutritional support can help.',
  byAge: [
    {
      ageRange: 'Baby 0-6 months',
      context:
        'The first 6 months postpartum are when depletion peaks. Your body gave enormous nutritional resources to grow your baby, and breastfeeding continues to draw on those reserves. Common symptoms include profound fatigue that sleep does not fix, difficulty concentrating ("mom brain"), feeling emotionally flat, anxiety, poor memory, hair loss, and getting sick frequently. These are not just "normal new parent tired." If you lost significant blood during delivery, your iron stores may be critically low. Ask your doctor to check a comprehensive panel: ferritin, vitamin D, B12, folate, zinc, thyroid function, and a complete blood count.',
    },
    {
      ageRange: 'Baby 6-12 months',
      context:
        'Many mothers expect to feel "back to normal" by now and feel frustrated or guilty when they do not. Postnatal depletion can persist well beyond 6 months, especially if nutritional deficiencies have not been identified and treated. If you are still breastfeeding, your nutrient demands remain high. This is a good time to have bloodwork done if you have not already. Iron deficiency alone affects up to 50% of postpartum women and can cause fatigue, weakness, brain fog, and mood changes that mimic depression.',
    },
    {
      ageRange: 'Baby 12-36 months',
      context:
        'Research suggests full recovery from pregnancy can take up to 7 years, and many mothers with ongoing symptoms are told "that is just motherhood." It is not. If you are still experiencing persistent fatigue, brain fog, mood changes, frequent illness, or hair thinning a year or more after giving birth, bring this up with your doctor. Targeted supplementation based on lab results, along with adequate protein intake, sleep optimization, and stress reduction, can make a significant difference even years postpartum.',
    },
  ],
  whenNormal: [
    'You are in the first 3-4 months postpartum and experiencing fatigue alongside a newborn\'s demanding schedule - some tiredness is expected.',
    'Your energy levels are gradually improving month by month, even if slowly.',
    'You had bloodwork done and all levels are within normal range - your fatigue may be situational and improving.',
  ],
  whenToMention: [
    'You are more than 3-4 months postpartum and your fatigue is not improving or is worsening despite adequate sleep opportunities.',
    'You have persistent brain fog, difficulty concentrating, memory problems, or emotional flatness.',
    'You are losing hair in clumps, getting sick frequently, or have wounds that heal slowly.',
    'You want to have your nutrient levels checked (ferritin, vitamin D, B12, folate, thyroid, zinc).',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby - postnatal depletion can coexist with postpartum depression and both need treatment.',
    'You are so fatigued that you are falling asleep while holding or feeding your baby, which is a safety risk.',
    'You have symptoms of severe anemia: dizziness, heart palpitations, shortness of breath at rest, or fainting.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-depression-signs',
    'postpartum-anxiety-symptoms',
    'breastfeeding-grief-when-stopping',
    'attachment-parenting-burnout',
    'mom-guilt',
  ],
  sources: [
    {
      org: 'NIH',
      citation: 'NIH - Postpartum Nutrient Depletion and Maternal Health Outcomes',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31142449/',
    },
    {
      org: 'WHO',
      citation: 'WHO - Maternal Nutrition: Guidance for Improving Postpartum Recovery',
      url: 'https://www.who.int/publications/i/item/9789241549356',
    },
    {
      org: 'ACOG',
      citation: 'ACOG - Optimizing Postpartum Care (Committee Opinion No. 736)',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care',
    },
  ],
};
