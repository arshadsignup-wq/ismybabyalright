import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'allergen-introduction-timing',
  title: 'When to Introduce Allergens to Baby',
  category: 'feeding',
  searchTerms: ['when to introduce allergens baby','peanut introduction baby','egg introduction baby','allergen introduction timing','LEAP study baby peanuts','early allergen introduction','baby first peanut butter','when to give baby eggs','allergy prevention baby','introducing common allergens baby','baby food allergy prevention','top 9 allergens baby'],
  quickAnswer: 'Current guidelines recommend introducing common allergens (peanut, egg, cow\'s milk products, tree nuts, wheat, soy, fish, shellfish, sesame) starting around 4-6 months when your baby is developmentally ready for solids. The landmark LEAP study showed that early introduction of peanuts (by 4-6 months) reduced peanut allergy risk by 80% in high-risk infants. Do not delay allergens - the old advice to wait until 1-3 years has been reversed because early exposure actually prevents allergies.',
  byAge: [
    { ageRange: '4-6 months', context: 'This is the ideal window to begin allergen introduction, starting when your baby shows signs of readiness for solids (sitting with support, good head control, interest in food). For high-risk babies (those with severe eczema or existing egg allergy), the AAP recommends introducing peanut products as early as 4-6 months after discussion with your pediatrician. Start with well-cooked egg, thin peanut butter mixed into puree (never whole peanuts), and yogurt. Introduce one new allergen every 3-5 days to monitor for reactions.' },
    { ageRange: '6-9 months', context: 'Continue introducing allergens you haven\'t tried yet. Common approaches include mixing peanut powder or thin peanut butter into oatmeal, offering well-cooked scrambled egg, and introducing yogurt and soft cheeses. Tree nuts can be given as nut butters thinned into purees. Fish can be offered as soft, deboned flakes. The key is early and regular exposure - research shows that once introduced, allergens should be offered regularly (2-3 times per week) to maintain tolerance.' },
    { ageRange: '9-12 months', context: 'By now, your baby should have been exposed to most common allergens. If you have not started allergen introduction, begin now. The protective window for early introduction is most effective before 12 months. Your baby can now eat more varied textures, making it easier to incorporate allergens into regular meals - pieces of well-cooked egg, peanut butter on toast strips, fish in pasta.' },
    { ageRange: '12+ months', context: 'Continue offering allergens regularly as part of your toddler\'s diet. Whole cow\'s milk can be introduced at 12 months. If your child has been eating allergens without reactions, continue including them in the diet. If you avoided allergens due to fear and your child is now over 12 months, introduce them the same way you would at 6 months - start small, watch for reactions, and introduce one at a time.' },
  ],
  whenNormal: ['Your baby tolerates new allergens without any reaction - most babies do','Your baby has mild mouth redness or a small rash around the mouth from acidic or irritating foods (tomato, citrus) that resolves quickly - this is contact irritation, not allergy','Your baby gags on new textures including allergen-containing foods - gagging is not an allergic reaction'],
  whenToMention: ['Your baby has eczema and you want guidance on when and how to introduce peanuts and other allergens','A first-degree family member (parent or sibling) has a diagnosed food allergy','Your baby developed hives, vomiting, or a rash after trying a new food and you are unsure whether to reintroduce it'],
  whenToActNow: ['Your baby develops hives, facial swelling, vomiting, or difficulty breathing within minutes to 2 hours of eating a new food - this is a potential allergic reaction and needs medical evaluation','Your baby has severe eczema and you have not yet introduced allergens - discuss with your pediatrician before starting, as skin prick testing may be recommended first','Your baby has had a confirmed allergic reaction and you need an epinephrine auto-injector prescription'],
  relatedMilestones: ['feeding-solids-introduction'],
  showSelfReferral: false,
  relatedConcernSlugs: ['food-allergy-signs','baby-allergic-reaction-to-food','baby-skin-rash-after-new-food'],
  sources: [
    { org: 'AAP', citation: 'Togias A, et al. Addendum guidelines for the prevention of peanut allergy. NIAID-Sponsored Expert Panel. 2017.', url: 'https://pubmed.ncbi.nlm.nih.gov/28065278/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Food Allergy Reactions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx' },
    { org: 'NIH', citation: 'Du Toit G, et al. Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy (LEAP Study). NEJM. 2015.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1414850' },
  ],
};
