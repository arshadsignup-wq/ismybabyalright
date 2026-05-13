import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'food-temperature-preferences',
  title: 'Baby Refuses Warm or Cold Food',
  category: 'feeding',
  searchTerms: [
    'baby refuses warm food',
    'baby only eats cold food',
    'baby won\'t eat food from fridge',
    'toddler food temperature preference',
    'baby rejects heated food',
    'baby only eats room temperature food',
    'baby won\'t eat hot food',
    'toddler refuses cold food',
  ],
  quickAnswer:
    'Many babies and toddlers develop strong preferences for food served at a specific temperature. Some refuse anything warm, while others reject cold food. This is a normal sensory preference and not a sign of a feeding disorder. As long as your child is eating a reasonable variety of foods and growing well, temperature preferences are typically nothing to worry about.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies beginning solids may show early temperature preferences. Some babies grimace at or refuse warm purees but accept the same food at room temperature. Others reject cold foods from the refrigerator. Try offering food at different temperatures to see what your baby prefers. There is no nutritional difference between warm and cold food, so serve whatever your baby will eat. Always test food temperature before serving to ensure it is not too hot.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Temperature preferences may become more pronounced as toddlers assert their opinions about food. A toddler who previously ate warm oatmeal might suddenly refuse it unless it has cooled down. This is a normal extension of growing independence and sensory awareness. Offer food at the preferred temperature and continue exposing your child to foods at different temperatures without pressure.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Most children become more flexible about food temperature as they get older, though some maintain preferences. If your child\'s temperature sensitivity is so extreme that it severely limits what they will eat, or if it is accompanied by other strong sensory aversions to textures, sounds, or touch, mention it to your pediatrician, as it may be part of a broader sensory profile worth evaluating.',
    },
  ],
  whenNormal: [
    'Your baby has a consistent preference for food at one temperature but eats a reasonable variety of foods served that way',
    'Your baby will eat some foods warm and others cold, showing item-specific temperature preferences',
    'Your child\'s temperature preference fluctuates over time and gradually becomes more flexible',
  ],
  whenToMention: [
    'Your child\'s temperature preference is so rigid that it severely limits the foods they will eat',
    'Your child has extreme reactions (gagging, crying, distress) to any food that is not at their preferred temperature',
    'Temperature sensitivity is accompanied by other strong sensory aversions such as refusal of many textures, avoidance of messy play, or distress with certain sounds',
    'Your child\'s restricted eating is affecting their weight gain or nutritional intake',
  ],
  whenToActNow: [
    'Your child refuses all food regardless of temperature for more than 24 hours',
    'Your child is losing weight or showing signs of dehydration such as fewer wet diapers, dry lips, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. What Are Some Common Signs of Sensory Processing Issues? NICHD.',
      url: 'https://www.nichd.nih.gov/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sensory Processing Problems. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Processing-Problems.aspx',
    },
  ],
};
