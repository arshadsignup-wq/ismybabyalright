import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'anal-fissure-baby',
  title: 'My Baby Has an Anal Fissure (Blood When Pooping)',
  category: 'digestive',
  searchTerms: [
    'baby blood in stool',
    'baby bleeding when pooping',
    'anal fissure baby',
    'blood on baby diaper after poop',
    'baby crying when pooping blood',
    'streak of blood in baby poop',
    'baby poop bright red blood',
    'toddler blood when wiping',
    'rectal bleeding baby',
    'baby stool blood streak',
  ],
  quickAnswer:
    'A small streak of bright red blood on the surface of your baby\'s stool or on the diaper is most commonly caused by an anal fissure, which is a tiny tear in the skin around the anus from passing hard stool. Anal fissures are very common in babies and toddlers and usually heal on their own with simple measures like keeping stools soft. While this is rarely serious, any blood in your baby\'s stool should be mentioned to your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In very young babies, small streaks of blood in the stool can be caused by anal fissures from straining, but can also result from swallowed maternal blood during delivery or from cracked nipples during breastfeeding. Cow\'s milk protein allergy is another possible cause of blood in the stool at this age, often accompanied by mucus and fussiness. Your pediatrician should evaluate any blood in a young infant\'s stool to rule out less common but important causes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies transition to solid foods, their stools often become firmer, which can lead to anal fissures. This is the most common cause of bright red blood on the outside of the stool or on the diaper in this age group. Ensuring adequate fluid intake, offering high-fiber foods like pureed prunes and pears, and applying a small amount of petroleum jelly to the area can help the fissure heal.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers frequently develop anal fissures, especially if they are prone to constipation. The pain from the fissure can cause a cycle where the child withholds stool to avoid discomfort, which leads to harder stools and further tearing. Breaking this cycle with stool softeners as recommended by your pediatrician, warm baths, and a high-fiber diet is key to healing.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Constipation-related anal fissures remain common during the potty training period. Children may resist using the toilet due to pain from a fissure, making potty training more challenging. Focus on resolving the constipation and healing the fissure before pushing potty training. Most fissures heal within a few weeks with appropriate stool softening and topical care.',
    },
  ],
  whenNormal: [
    'A small streak of bright red blood is visible on the surface of a hard stool or on the diaper, and your baby is otherwise healthy',
    'The bleeding is minimal and only occurs occasionally when your baby passes a hard stool',
    'A previously identified fissure is healing with at-home treatment and bleeding is decreasing',
  ],
  whenToMention: [
    'You notice blood in your baby\'s stool for the first time, even if it seems minor',
    'The fissure does not seem to be healing after two to three weeks of at-home treatment',
    'Your baby is crying or showing significant pain with every bowel movement',
  ],
  whenToActNow: [
    'There is a large amount of blood in the stool, blood mixed into the stool rather than on the surface, or dark tarry black stools',
    'Your baby has bloody stool along with fever, vomiting, abdominal distension, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blood in Infant\'s Stool. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Blood-in-Infants-Stool.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Anal fissure - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/anal-fissure/symptoms-causes/syc-20351424',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Anal Fissure.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/anal-fissure',
    },
  ],
};
