import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'black-poop',
  title: 'Baby Black Poop',
  category: 'digestive',
  searchTerms: [
    'baby black poop',
    'baby dark black stool',
    'black poop newborn',
    'baby tarry stool',
    'baby dark stool',
    'baby poop is black',
    'infant black bowel movement',
    'baby very dark poop',
    'black stool baby iron',
    'baby meconium',
    'baby poop looks like tar',
  ],
  quickAnswer:
    'Black poop in a newborn\'s first few days (meconium) is completely normal and expected. Black or very dark green stools can also be caused by iron supplements or iron-fortified formula. However, black tarry stools outside of the newborn period that are not explained by iron can indicate digested blood from higher in the digestive tract and should be evaluated by a doctor promptly.',
  byAge: [
    {
      ageRange: '0-5 days',
      context:
        'Meconium is the first stool your baby passes, and it is normally dark greenish-black, thick, sticky, and tar-like. This is made up of material your baby ingested in the womb, including amniotic fluid, mucus, and bile. Meconium should transition to lighter green and then yellow stools within the first 3-5 days. This transition is a sign that feeding is going well.',
    },
    {
      ageRange: '1 week - 6 months',
      context:
        'After the meconium period, truly black stools are not normal unless your baby is taking iron supplements, which commonly turn stools dark green to black. If your baby has black tarry stools and is not on iron, this could indicate upper gastrointestinal bleeding (where blood is digested as it passes through the intestines) and needs medical evaluation right away.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Iron-fortified cereals and iron supplements started around this age are the most common cause of dark or black stools in this age range. Some foods like blueberries, blackberries, and foods with dark food coloring can also darken stools. If iron intake explains the color, there is no concern. Unexplained black tarry stools always warrant a call to your doctor.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Black stools in toddlers are most commonly caused by foods (blueberries, blackberries, dark chocolate, black licorice, grape juice) or iron-containing vitamins. Bismuth-containing products like Pepto-Bismol (not recommended for children but sometimes given inadvertently) can also cause black stools. Unexplained black tarry stools need medical evaluation.',
    },
  ],
  whenNormal: [
    'Your newborn is passing dark black-green meconium in the first 2-3 days of life',
    'Your baby is taking iron drops or iron-fortified formula and stools are dark green to black',
    'Your baby ate blueberries, blackberries, or foods with dark coloring and has a dark stool',
    'The dark stool is temporary and your baby is otherwise well with no symptoms',
  ],
  whenToMention: [
    'You are unsure whether your baby\'s dark stools are from iron supplements or another cause',
    'Meconium-like stools persist beyond the first 5 days of life without transitioning to yellow or green',
    'Your baby has very dark stools along with increased fussiness or decreased feeding',
  ],
  whenToActNow: [
    'Your baby has black, tarry, sticky stools (like tar or coffee grounds) that are not explained by iron supplements or meconium, as this can indicate bleeding in the upper digestive tract',
    'Black stools are accompanied by vomiting (especially vomit that looks like coffee grounds), lethargy, or pallor',
    'Your baby appears unwell with black stools, including signs of pain, poor feeding, or unusual drowsiness',
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
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Symptoms and Causes of GI Bleeding.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding/symptoms-causes',
    },
  ],
};
