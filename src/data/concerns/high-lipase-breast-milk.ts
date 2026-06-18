import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'high-lipase-breast-milk',
  title: 'My Stored Breast Milk Smells Soapy or Sour (High Lipase)',
  category: 'feeding',
  searchTerms: [
    'high lipase breast milk',
    'breast milk smells soapy',
    'stored breast milk tastes bad',
    'breast milk sour smell',
    'baby refuses thawed breast milk',
    'breast milk metallic taste',
    'scalding breast milk lipase',
    'frozen breast milk bad taste',
    'pumped milk smells funny',
    'high lipase milk fix',
  ],
  quickAnswer:
    'If your stored or thawed breast milk smells soapy, metallic, or sour — but was stored properly — you likely have high lipase activity. Lipase is a naturally occurring enzyme in breast milk that breaks down fats. In some mothers, lipase is especially active and begins breaking down fats quickly, creating an off-putting smell and taste. High lipase milk is not spoiled or harmful to your baby. However, many babies refuse it because of the taste. The solution is scalding fresh milk before storing it, which deactivates the lipase.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'High lipase is typically discovered when a parent who has been building a freezer stash of pumped milk discovers their baby refuses the thawed milk. This is devastating when you have worked hard to pump and store milk. The milk is safe — it is the taste that bothers the baby, not the quality. To prevent the taste change in future milk, scald freshly expressed milk (heat to about 180°F / 82°C — until small bubbles form at the edges, not a full boil) then cool and store immediately.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If you have a large freezer stash of high-lipase milk, there are strategies to use it: mix it with freshly expressed milk, mix it into solid foods (oatmeal, purées), or try offering it when the baby is very hungry. Some babies accept it if it is offered chilled rather than warmed. If none of these work, the milk can still be used in baths for skin benefits. Going forward, scald fresh milk before storing.',
    },
  ],
  whenNormal: [
    'Your fresh breast milk smells and tastes fine but develops a soapy or metallic smell after several hours in the fridge or after thawing — this is classic high lipase',
    'Your baby drinks freshly pumped milk but refuses thawed milk',
    'Scalding before storage fixes the taste issue',
  ],
  whenToMention: [
    'Your breast milk smells foul (rotten, not soapy) even when fresh — this is not a lipase issue and may indicate bacterial contamination',
    'Your baby is refusing all milk (fresh and stored) and is not gaining weight',
    'You are unsure whether your milk is high lipase or actually spoiled',
  ],
  whenToActNow: [
    'Your baby shows signs of illness after consuming stored milk — vomiting, diarrhea, fever — seek medical evaluation, as this may indicate contaminated (not just high lipase) milk',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'european-formula-safety',
    'paced-bottle-feeding-guide',
    'nipple-confusion-vs-flow-preference',
  ],
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. My Expressed Breastmilk Doesn\'t Smell Fresh. What Can I Do?',
      url: 'https://llli.org/breastfeeding-info/lipase/',
    },
    {
      org: 'KellyMom',
      citation:
        'KellyMom. What Affects the Taste and Smell of Breast Milk?',
      url: 'https://kellymom.com/bf/pumpingmoms/milkstorage/lipase-pumping/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk.',
      url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm',
    },
  ],
};
