import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-poop-white-concerning',
  title: 'My Baby\'s Poop Is White or Very Pale',
  category: 'digestive',
  searchTerms: [
    'baby white poop',
    'baby pale stool',
    'baby chalky poop',
    'baby clay colored stool',
    'baby poop no color',
    'baby acholic stool',
    'white poop baby biliary atresia',
    'baby stool color chart pale',
    'baby light colored poop concerning',
    'baby poop white gray',
  ],
  quickAnswer:
    'White, pale, chalky, or clay-colored stool in a baby is a medical red flag that requires urgent evaluation. Normal stool gets its brown or yellow-green color from bile, which is produced by the liver and stored in the gallbladder. White or very pale stool (acholic stool) may indicate that bile is not reaching the intestines, which can be caused by biliary atresia, a serious liver condition that requires surgery within the first 60 days of life for the best outcomes. Contact your pediatrician immediately if you notice consistently pale or white stool.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'This is the most critical period for identifying acholic (bile-absent) stool, because biliary atresia — the most serious cause of white stool in infants — requires surgery (Kasai procedure) ideally before 45-60 days of life for optimal outcomes. In biliary atresia, the bile ducts between the liver and intestine are blocked or absent, preventing bile from reaching the intestines. Without bile, stool becomes pale yellow, white, clay-colored, or chalky. Other signs include prolonged jaundice (yellowing of skin and eyes beyond 2 weeks), dark urine (that stains the diaper), and a firm or enlarged liver. Some countries use stool color cards to help parents identify abnormal stool color early.',
    },
    {
      ageRange: '2-6 months',
      context:
        'If biliary atresia was not identified in the newborn period, ongoing pale or white stools with persistent jaundice should still prompt urgent evaluation. Other causes of pale stool in this age group include hepatitis (viral or neonatal), choledochal cyst (a structural abnormality of the bile duct), Alagille syndrome (a genetic condition affecting bile ducts), and rarely, tumors affecting the biliary system. Liver function tests, an abdominal ultrasound, and possibly a HIDA scan can help identify the cause. A single pale stool that returns to normal color may be less concerning but should still be mentioned to your pediatrician.',
    },
    {
      ageRange: '6-36 months',
      context:
        'Consistently white or very pale stool at any age requires investigation. While causes like biliary atresia are usually identified earlier, other liver or biliary conditions can present later. Certain medications (like antacids containing aluminum hydroxide) can also cause pale stools temporarily. After starting solids, some foods (like milk-heavy diets) can lighten stool color, but true white or clay-colored stool is never normal. If your child has a single episode of lighter-than-usual stool but it returns to normal brown or green, monitor closely. Persistently pale stool, especially with dark urine or jaundice, is always urgent.',
    },
  ],
  whenNormal: [
    'Your baby\'s stool is various shades of yellow, green, or brown — these are all normal colors.',
    'A single lighter-colored stool occurs but subsequent stools are normal in color.',
    'Your baby\'s stool is pale yellow (like mustard) if breastfed — this is normal and different from white or chalky.',
  ],
  whenToMention: [
    'You notice a single episode of very light or pale stool and want your pediatrician to be aware.',
    'You are unsure whether your baby\'s stool color is normal or abnormally pale.',
    'Your baby has persistent jaundice beyond 2 weeks of age (direct/conjugated bilirubin should be checked).',
  ],
  whenToActNow: [
    'Your baby has consistently white, chalky, clay-colored, or very pale stools — contact your pediatrician immediately or seek same-day evaluation. This could indicate biliary atresia or another serious liver condition.',
    'White or pale stool is accompanied by jaundice (yellow skin and eyes), dark urine, and/or an enlarged belly — seek urgent medical evaluation.',
    'Your newborn has pale stools and prolonged jaundice — this is a time-sensitive condition. Surgery for biliary atresia has significantly better outcomes when performed before 60 days of life.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-poop-has-blood', 'mucus-in-stool', 'foul-smelling-poop'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Biliary Atresia',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Biliary-Atresia.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases — Biliary Atresia',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Newborn Jaundice and Kernicterus',
      url: 'https://www.cdc.gov/ncbddd/jaundice/facts.html',
    },
  ],
};
