import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'explosive-diarrhea-in-babies',
  title: 'Explosive Diarrhea in Babies',
  category: 'digestive',
  searchTerms: [
    'baby explosive poop',
    'baby blowout diarrhea',
    'baby poop blowout every time',
    'baby forceful pooping',
    'explosive diarrhea infant',
    'baby poop shoots out',
    'diaper blowout diarrhea baby',
    'baby watery explosive stool',
  ],
  quickAnswer:
    'Explosive poops and diaper blowouts are surprisingly common in babies, especially in the first few months when stool is naturally loose and the rectal muscles are strong relative to stool consistency. A single explosive poop is usually not diarrhea at all but simply a forceful, normal bowel movement. However, frequent watery explosive stools, especially if they are a change from your baby\'s normal pattern, may indicate a stomach virus or food intolerance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breastfed newborns are particularly known for explosive, noisy bowel movements that can shoot up the back and out the sides of the diaper. This is normal and happens because breast milk stool is very liquid and babies have a strong gastrocolic reflex, meaning their bowels contract powerfully after feeding. These blowouts are messy but not medically concerning as long as your baby is feeding well and gaining weight.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Explosive stools may become less frequent as the digestive system matures and stool becomes slightly thicker. If your baby suddenly develops frequent explosive watery stools that are different from their normal pattern, especially with vomiting or fever, a viral gastroenteritis is the most likely cause. Focus on maintaining hydration with breast milk or formula and contact your pediatrician if you see signs of dehydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, stool generally becomes thicker and explosive blowouts decrease. However, certain foods, juice, or a stomach bug can cause a return of explosive watery stools. If explosive diarrhea consistently follows a particular food, it may suggest a food intolerance. Rotavirus, which is most common in this age group, can cause particularly watery, explosive diarrhea that may last up to a week.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Explosive diarrhea in toddlers is usually caused by a viral infection (norovirus, rotavirus) or a dietary trigger such as too much juice or fruit. Toddlers in daycare are especially prone to picking up stomach bugs. Most episodes resolve within 3-7 days. Excessive juice intake is a very common and easily correctable cause of chronic loose, explosive stools in toddlers.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has forceful, noisy, messy bowel movements but is otherwise happy, feeding well, and gaining weight',
    'Occasional blowouts happen, especially after a feeding, but your baby\'s overall stool pattern is consistent',
    'Your baby has a day or two of more explosive stools during a mild cold or after a dietary change, which then resolves',
  ],
  whenToMention: [
    'Explosive watery stools have been happening more than 6-8 times a day for more than 2-3 days',
    'Explosive diarrhea consistently follows the introduction of a specific food or formula change',
    'Your toddler has chronic explosive loose stools that you suspect may be related to juice or dietary factors',
    'Explosive stools are accompanied by persistent fussiness, poor feeding, or slowed weight gain',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration: fewer than 3 wet diapers in 24 hours, no tears, sunken fontanelle, extreme lethargy, or dry mouth and lips',
    'Explosive diarrhea contains blood, is accompanied by high fever (over 102F/39C), or your baby is unable to keep any fluids down for more than a few hours',
    'Your baby under 3 months has sudden explosive watery diarrhea that is a clear change from their normal pattern, which warrants prompt medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diarrhea in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Diarrhoeal Disease: Key Facts.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Rotavirus: Symptoms.',
      url: 'https://www.cdc.gov/rotavirus/about/symptoms.html',
    },
  ],
};
