import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-poop-has-blood',
  title: 'There Is Blood in My Baby\'s Poop',
  category: 'digestive',
  searchTerms: [
    'blood in baby poop',
    'baby bloody stool',
    'red streaks in baby diaper',
    'baby poop has blood mucus',
    'blood in diaper baby',
    'baby stool blood causes',
    'bright red blood baby poop',
    'baby rectal bleeding',
    'blood in breastfed baby poop',
    'baby bloody diaper alarming',
  ],
  quickAnswer:
    'Blood in a baby\'s stool is always concerning for parents but has many possible causes, ranging from harmless to serious. The most common cause in breastfed babies is swallowed maternal blood from cracked nipples. In formula-fed babies, cow\'s milk protein allergy is a frequent cause. Other causes include anal fissures (small tears), infections, and rarely, more serious conditions like intussusception. Any blood in your baby\'s stool should be discussed with your pediatrician, and significant amounts or accompanying symptoms warrant urgent evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The most common causes of blood in stool in young infants include: swallowed maternal blood (from cracked nipples during breastfeeding or swallowed during delivery — an Apt test can differentiate), cow\'s milk protein allergy (CMPA, causing bloody, mucousy stools in an otherwise well-appearing baby), and anal fissures (small tears from straining). In a breastfed baby with blood-streaked, mucousy stools who is otherwise well and growing, CMPA is the most likely cause. Your pediatrician may recommend an elimination diet (removing dairy from your diet) or switching to a hypoallergenic formula. Always save the diaper to show your pediatrician.',
    },
    {
      ageRange: '3-12 months',
      context:
        'In addition to the above causes, bacterial infections (Salmonella, Shigella, E. coli) can cause bloody diarrhea, often with fever. Intussusception — where one part of the intestine telescopes into another — typically causes sudden severe abdominal pain (screaming and pulling legs up), "currant jelly" stools (dark red and jelly-like), and lethargy. This is a medical emergency. As solids are introduced, food allergies may cause blood in stool. Anal fissures from hard stools (common during iron supplementation or after introducing certain solids) are also a frequent cause of small amounts of bright red blood on the outside of the stool.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler causes of blood in stool include anal fissures (the most common cause of bright red blood on the stool surface), infections (especially in daycare settings), food allergies, and rarely, polyps (juvenile polyps are usually benign and cause painless rectal bleeding). Bloody diarrhea with fever always warrants medical evaluation. Meckel\'s diverticulum can cause painless, significant rectal bleeding that may appear as dark red or maroon stool. If your toddler passes large amounts of blood or has "black, tarry" stool (suggesting upper GI bleeding), seek emergency care immediately.',
    },
  ],
  whenNormal: [
    'A breastfed newborn has a single episode of a small blood streak in the stool and you have cracked nipples — swallowed maternal blood is likely.',
    'Your baby has a visible small anal fissure and a tiny streak of bright red blood on the outside of a hard stool that resolves with stool softening measures.',
    'Your pediatrician has evaluated the blood and determined it is from a benign cause that is being monitored.',
  ],
  whenToMention: [
    'You notice blood-streaked or mucousy stools in your baby even if they seem otherwise well — this needs evaluation.',
    'Blood in stool is occurring repeatedly, not just once.',
    'Your baby has blood in stool after starting a new food, formula, or supplement.',
  ],
  whenToActNow: [
    'Your baby has large amounts of blood in their stool (more than streaks), "currant jelly" appearing stool, or dark black tarry stool — seek emergency care immediately.',
    'Bloody stool is accompanied by severe abdominal pain (inconsolable screaming, legs drawn up), vomiting (especially green/bile-stained), lethargy, or a distended belly — these could indicate intussusception or another surgical emergency.',
    'Your baby has bloody diarrhea with high fever, appears very unwell, or has signs of dehydration — seek emergency medical care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['blood-in-diaper-newborn', 'mucus-in-stool', 'baby-hypoallergenic-formula-when'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Blood in Infant Stool',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Blood-in-Stool.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Rectal Bleeding in Infants and Children',
      url: 'https://medlineplus.gov/ency/article/003130.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Intussusception: Symptoms and Causes',
      url: 'https://www.mayoclinic.org/diseases-conditions/intussusception/symptoms-causes/syc-20351452',
    },
  ],
};
