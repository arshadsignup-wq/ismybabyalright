import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vitamin-d-drops-taste',
  title: 'My Baby Refuses Vitamin D Drops',
  category: 'feeding',
  searchTerms: [
    'baby refusing vitamin D drops',
    'baby spits out vitamin D',
    'baby hates vitamin D drops',
    'vitamin D drops taste bad baby',
    'how to give baby vitamin D drops',
    'baby won\'t take vitamin D supplement',
    'vitamin D drops alternative baby',
    'tricks for vitamin D drops baby',
    'baby fights vitamin D',
    'best vitamin D drops for baby taste',
  ],
  quickAnswer:
    'The AAP recommends 400 IU of vitamin D daily for all breastfed and partially breastfed babies starting from the first few days of life. If your baby refuses the drops, try putting them on your nipple before nursing, mixing into a small amount of expressed milk, or trying a different brand as flavors vary. Most formulas contain vitamin D, so formula-fed babies may not need additional supplementation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Start vitamin D drops within the first few days of life for breastfed babies. Place the drop on your nipple or on a pacifier. A single drop is very small and most babies tolerate it well. If baby fusses, try giving it at the start of a feeding when they are calm and hungry.',
    },
    {
      ageRange: '4-6 months',
      context: 'Continue daily vitamin D drops. If baby has been refusing, try a different brand as taste varies. Some brands have a neutral oil taste while others have added flavors. You can place the drop on a finger and let baby suck it off.',
    },
    {
      ageRange: '6-9 months',
      context: 'Once baby starts solids, you can mix the vitamin D drop into a small spoonful of food. Make sure baby eats the entire spoonful. Do not mix into a full bottle as baby may not finish it.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue vitamin D supplementation unless baby is drinking at least 32 ounces of formula per day. Mixing drops into a small amount of food remains an effective strategy.',
    },
    {
      ageRange: '12-24 months',
      context: 'The recommended vitamin D intake increases to 600 IU daily at 12 months. Vitamin D-fortified milk provides 100 IU per 8 ounces. If your toddler drinks 16-20 ounces of milk and eats some vitamin D-containing foods, they may still need supplementation. Discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby makes a face at the drops but still swallows them',
    'Baby accepts the drops when given on a nipple or in a small amount of food',
    'Baby prefers one brand of drops over another',
  ],
  whenToMention: [
    'Baby consistently refuses all vitamin D drops and you cannot find a way to give them',
    'You are unsure if your baby needs vitamin D supplementation based on their formula intake',
    'Baby has risk factors for vitamin D deficiency such as darker skin or limited sun exposure',
  ],
  whenToActNow: [
    'Baby shows signs of vitamin D deficiency such as soft skull bones, bowed legs, or poor growth',
    'Baby has had a seizure which can very rarely be related to severe vitamin D deficiency',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-multivitamin-need', 'baby-iron-supplement-taste', 'baby-calcium-intake-dairy-free'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Vitamin D for Babies, Children, and Adolescents. Pediatrics, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Vitamin-D-On-the-Double.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Vitamin D Fact Sheet for Health Professionals. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/',
    },
  ],
};
