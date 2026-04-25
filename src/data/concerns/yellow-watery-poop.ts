import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'yellow-watery-poop',
  title: 'Baby Yellow Watery Poop',
  category: 'digestive',
  searchTerms: [
    'baby yellow watery poop',
    'baby runny yellow stool',
    'breastfed baby watery poop',
    'baby liquid yellow poop',
    'yellow watery diarrhea baby',
    'baby poop is just water',
    'newborn yellow watery stool',
    'baby poop like water yellow',
    'baby bright yellow runny poop',
    'baby explosive yellow poop',
  ],
  quickAnswer:
    'Yellow, watery, seedy stools are completely normal for breastfed babies and are not diarrhea. Breast milk stools are naturally loose, runny, and can look almost like mustard with small seed-like particles. True diarrhea in a baby means a sudden increase in frequency and wateriness compared to their usual pattern, and is often accompanied by illness symptoms.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'After the first few days of meconium, breastfed newborns typically have yellow, loose, seedy stools that can be quite watery. This is the gold standard of healthy breastfed baby poop. Having 6-12 of these stools per day in the early weeks is a reassuring sign of adequate milk intake. Formula-fed babies tend to have slightly firmer, tan or yellow stools.',
    },
    {
      ageRange: '6 weeks - 6 months',
      context:
        'Breastfed babies continue to have loose, yellow stools, though frequency may decrease. Occasional explosive or particularly watery stools are normal, especially if your baby has been feeding more during a growth spurt. If stools become truly watery (like water with little substance) and much more frequent than usual, it may indicate illness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, stools generally become more formed and less watery. If your baby still has very watery yellow stools after starting solids, it could be a reaction to a new food or a mild stomach bug. True diarrhea at this age is notable for its sudden increase in frequency and wateriness compared to your baby\'s established pattern.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Yellow watery stools in toddlers are more likely to represent true diarrhea, especially if they are a change from the child\'s usual pattern. Viral gastroenteritis is the most common cause. Excessive juice intake can also cause chronic loose yellow stools. If your toddler is well otherwise, reducing juice and maintaining hydration usually resolves it.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has loose, yellow, seedy stools that look like mustard, which is the normal pattern for breastfed babies',
    'Your baby has an occasional particularly watery stool but is feeding well and not showing signs of illness',
    'Your baby has yellow, slightly runnier stools during a growth spurt when they are feeding more frequently',
    'Your formula-fed baby has soft, yellow stools that are slightly loose but consistent with their normal pattern',
  ],
  whenToMention: [
    'Your baby has noticeably more watery stools than usual for several days',
    'Yellow watery stools are accompanied by increased fussiness, gas, or spitting up',
    'Your toddler has persistently loose yellow stools that you suspect may be related to diet',
  ],
  whenToActNow: [
    'Your baby has very watery stools with signs of dehydration: fewer than 6 wet diapers in 24 hours, no tears when crying, dry mouth, sunken fontanelle, or lethargy',
    'Watery stools contain blood or are accompanied by high fever, especially in a baby under 3 months',
    'Your baby has profuse watery diarrhea and is vomiting and unable to keep any fluids down',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diarrhea in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
