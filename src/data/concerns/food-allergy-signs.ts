import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'food-allergy-signs',
  title: 'Baby Food Allergy Signs',
  category: 'feeding',
  searchTerms: [
    'baby food allergy symptoms',
    'baby allergic reaction to food',
    'baby hives after eating',
    'baby rash after eating',
    'baby swelling face food',
    'signs of food allergy in baby',
    'baby vomiting after eating new food',
    'baby food intolerance signs',
    'when to worry about food allergy baby',
    'baby allergic to eggs peanuts milk',
    'introducing allergens to baby',
  ],
  quickAnswer:
    'Food allergies affect about 6 to 8 percent of children under age 3, and knowing the signs helps you respond quickly and confidently. Mild reactions like a few hives around the mouth or mild skin redness are common when introducing new foods and are usually manageable at home. Severe reactions involving breathing difficulty, widespread hives, or vomiting require immediate emergency care. Early introduction of common allergens, starting around 4 to 6 months, is now recommended to help prevent allergies.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Current AAP and NIAID guidelines recommend introducing peanut-containing foods around 4 to 6 months for high-risk babies (those with severe eczema or egg allergy) and by 6 months for most others. Starting allergen introduction early actually reduces the risk of developing a food allergy. Introduce one new allergen at a time and wait 2 to 3 days before the next to help identify any reactions.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is the ideal window for introducing the top allergens: peanut, egg, cow\'s milk products (in food, not as a drink), tree nuts, wheat, soy, fish, shellfish, and sesame. Offer a small amount first and watch for reactions over the next 2 hours. Mild reactions like a small rash near the mouth are common and do not necessarily mean your baby has a true allergy. Discuss any reactions with your pediatrician.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Continue offering previously introduced allergens regularly, as consistent exposure helps maintain tolerance. If your baby has had a confirmed mild reaction to a food, your pediatrician may recommend continued cautious exposure under guidance or referral to a pediatric allergist. Reactions that worsen with repeated exposure need medical evaluation.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who have been eating allergens regularly since infancy have lower rates of food allergy. If a food allergy is confirmed, strict avoidance and an emergency action plan are important. Many children outgrow milk, egg, wheat, and soy allergies by school age, though peanut, tree nut, fish, and shellfish allergies are more likely to persist. Regular follow-up with an allergist helps track tolerance.',
    },
  ],
  whenNormal: [
    'Your baby gets a mild red rash right around the mouth that fades within an hour after eating a new food, which is often contact irritation rather than allergy',
    'Your baby has mild, brief fussiness after trying a very new flavor or texture',
    'Your baby tolerates a food on subsequent exposures after an initial mild skin reaction that your pediatrician has reviewed',
  ],
  whenToMention: [
    'Your baby develops hives (raised, itchy welts) limited to one area of the body within 2 hours of eating a new food',
    'Your baby vomits more than once within a few hours of eating a specific food',
    'Your baby develops eczema flare-ups that seem related to certain foods',
    'Your family has a strong history of food allergies and you want guidance on introduction',
  ],
  whenToActNow: [
    'Your baby has widespread hives, facial or lip swelling, or swelling of the tongue or throat after eating, as this could be anaphylaxis',
    'Your baby has difficulty breathing, wheezing, repetitive coughing, or is turning pale or blue after eating a food',
    'Your baby has sudden vomiting with hives and seems lethargic or limp after eating, which are signs of a severe allergic reaction requiring emergency care and epinephrine if prescribed',
  ],
  relatedMilestones: [
    'feeding',
    'starting-solids',
    'skin',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Food Allergies.',
      url: 'https://www.cdc.gov/healthyschools/foodallergies/index.htm',
    },
    {
      org: 'AAP',
      citation:
        'Greer FR, Sicherer SH, Burks AW. Effects of Early Nutritional Interventions on the Development of Atopic Disease in Infants and Children. Pediatrics. 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/4/e20190281/37237/The-Effects-of-Early-Nutritional-Interventions-on',
    },
  ],
};
