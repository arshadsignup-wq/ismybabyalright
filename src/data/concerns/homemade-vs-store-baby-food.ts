import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'homemade-vs-store-baby-food',
  title: 'Homemade vs Store-Bought Baby Food',
  category: 'feeding',
  searchTerms: [
    'homemade baby food vs store bought',
    'is homemade baby food better',
    'making baby food at home',
    'store bought baby food safe',
    'baby food jar vs homemade',
    'commercial baby food nutrition',
    'benefits of homemade baby food',
    'baby food pouches healthy',
  ],
  quickAnswer:
    'Both homemade and store-bought baby foods can be nutritious and safe options. Homemade baby food gives you full control over ingredients and freshness, while commercial baby food is convenient, shelf-stable, and regulated for safety. The best approach is often a combination of both. Recent concerns about heavy metals in commercial baby food have led to increased scrutiny and regulatory changes, but homemade foods made from the same ingredients can contain similar levels of naturally occurring contaminants.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age should receive only breast milk or formula. Neither homemade nor commercial solid foods are appropriate. Planning ahead by researching recipes and food preparation techniques can help you feel prepared for when solids are introduced.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If starting solids around 4-6 months, both homemade purees and commercial first foods are appropriate options. For homemade foods, start with single-ingredient purees (sweet potato, avocado, banana, peas) made without salt or sugar and blended to a very smooth consistency. For store-bought options, choose single-ingredient Stage 1 foods with no added sugar, salt, or preservatives. Introduce one new food every 3-5 days to monitor for allergies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is when food variety expands significantly. Homemade food allows for greater texture progression and flavor variety. You can batch-cook and freeze purees in ice cube trays for convenience. Store-bought foods are useful for travel and busy days. Be cautious with pouches: while convenient, they can delay oral motor development if overused because the sucking motion is different from spoon-feeding. Try to offer spoon-fed purees and finger foods alongside pouches. Both homemade and commercial foods should be stored properly to prevent bacterial growth.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers should increasingly eat modified versions of family meals rather than purees or packaged baby foods. Homemade meals allow you to control sodium, sugar, and ingredient quality. Store-bought toddler meals and snacks often contain higher sodium and added sugars than their baby food counterparts, so read labels carefully. Transition away from pouches toward self-feeding with utensils and finger foods. Encouraging family meals teaches healthy eating habits and social skills.',
    },
  ],
  whenNormal: [
    'You use a combination of homemade and store-bought baby food based on convenience and preference',
    'Your baby accepts a variety of foods from both homemade and commercial sources',
    'You prepare homemade baby food in batches and store it safely in the freezer',
    'Your baby is growing well and enjoying a variety of textures and flavors regardless of the food source',
  ],
  whenToMention: [
    'You are concerned about heavy metals or contaminants in the baby food you are using (homemade or store-bought)',
    'Your baby refuses commercial baby food or homemade food exclusively and their diet is very limited',
    'You are unsure about safe food preparation, storage, or reheating practices for homemade baby food',
  ],
  whenToActNow: [
    'Your baby shows signs of food poisoning after eating homemade or store-bought food, including persistent vomiting, bloody diarrhea, high fever, or dehydration',
    'Your baby has a severe allergic reaction after trying a new food, including hives, facial swelling, wheezing, or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Making Your Own Baby Food. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Making-Your-Own-Baby-Food.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 6 to 24 Months Old.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Solid Foods: How to Get Your Baby Started.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20046200',
    },
  ],
};
