import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'projectile-vomiting-baby',
  title: 'My Baby Is Projectile Vomiting',
  category: 'digestive',
  searchTerms: [
    'baby projectile vomiting',
    'baby throwing up forcefully',
    'newborn projectile vomit',
    'baby vomiting after every feeding',
    'pyloric stenosis symptoms',
    'baby vomit shooting out',
    'baby projectile spit up vs vomiting',
    'forceful vomiting newborn',
    'baby vomiting entire bottle',
    'when is baby vomiting serious',
  ],
  quickAnswer:
    'Occasional spit-up is normal in babies, but true projectile vomiting, where the stomach contents shoot out forcefully and travel a foot or more, is different and needs medical attention. In babies under two months, persistent projectile vomiting after feedings can be a sign of pyloric stenosis, a treatable condition where the muscle at the stomach outlet thickens and blocks food from passing through. In older babies, projectile vomiting is more commonly caused by a stomach virus.',
  byAge: [
    {
      ageRange: '0-8 weeks',
      context:
        'Projectile vomiting in the first two months of life is a hallmark symptom of pyloric stenosis, which affects about two to three out of every 1,000 babies and is more common in firstborn males. The vomiting typically starts around two to three weeks of age and gets progressively worse. The baby vomits forcefully after every feeding, seems hungry immediately afterward, and may show signs of dehydration and poor weight gain. This condition requires medical evaluation and is treated with a straightforward surgical procedure. Contact your pediatrician promptly if your newborn is projectile vomiting after feeds.',
    },
    {
      ageRange: '2-6 months',
      context:
        'After the typical window for pyloric stenosis, projectile vomiting episodes are more likely caused by a stomach virus, overfeeding, or a reaction to something in the diet. A single episode of forceful vomiting is not usually cause for alarm, but repeated episodes deserve medical attention. If your baby is formula-fed, vomiting could occasionally indicate an intolerance or allergy to the formula protein. Continue to offer small, frequent feeds and monitor for dehydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Projectile vomiting at this age is most commonly caused by viral gastroenteritis such as rotavirus or norovirus. The vomiting phase typically lasts one to two days, followed by diarrhea. Food poisoning, though less common in babies, is another possibility if your baby has started solids. Focus on preventing dehydration by offering breast milk, formula, or oral rehydration solution in small, frequent amounts after each vomiting episode.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers who projectile vomit usually have a stomach bug. The vomiting can be dramatic and frightening, but most viral causes resolve within 24 to 48 hours. After a vomiting episode, wait 30 to 60 minutes, then offer small sips of clear fluid or oral rehydration solution. Gradually increase the amount as your child tolerates it. If vomiting is accompanied by high fever, severe headache, neck stiffness, or confusion, seek immediate medical care as these could indicate a more serious condition.',
    },
  ],
  whenNormal: [
    'Your baby has a single episode of forceful vomiting but is otherwise happy, feeding well, and having normal wet diapers',
    'Your older baby or toddler has projectile vomiting during a known stomach virus that resolves within a day or two',
    'Your baby spits up frequently but the spit-up dribbles out rather than shooting forcefully, and your baby is gaining weight normally',
  ],
  whenToMention: [
    'Your baby has more than two episodes of forceful vomiting in a day, even if they seem otherwise well between episodes',
    'Projectile vomiting is happening during or after introducing a new food or formula, suggesting a possible allergy or intolerance',
    'Your older baby or toddler has projectile vomiting lasting more than 24 hours',
  ],
  whenToActNow: [
    'Your newborn under two months is projectile vomiting after most or all feedings, especially if they seem hungry immediately afterward and are not gaining weight  -  this could be pyloric stenosis and requires urgent evaluation',
    'Your baby has projectile vomiting with blood or green bile in the vomit, a swollen or rigid abdomen, signs of dehydration, high fever, or is unusually lethargic or inconsolable',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pyloric Stenosis in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis-and-Pyloromyotomy.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Pyloric stenosis - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/pyloric-stenosis/symptoms-causes/syc-20351416',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service. Pyloric stenosis.',
      url: 'https://www.nhs.uk/conditions/pyloric-stenosis/',
    },
  ],
};
