import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-body-odor',
  title: 'Baby or Toddler Body Odor - When Is It Normal?',
  category: 'physical',
  searchTerms: ['baby body odor','baby smells bad','toddler body odor','baby armpit smell','baby feet smell','baby smells sour','toddler stinky','baby body odor normal','baby sweaty smell','baby smells like vinegar','toddler BO','baby odor when to worry'],
  quickAnswer: 'Babies and toddlers can develop body odor from several benign causes: sour milk caught in skin folds, sweating, diaper area odor, strong-smelling foods in the diet, and certain medications or vitamins. True body odor (like adult BO from apocrine glands) should not occur before puberty. If your baby or young toddler has a persistent unusual body odor that is not explained by skin folds, diaper, or diet, it could indicate a metabolic condition, infection, or foreign body (especially in the nose or vaginal area). Unusual persistent odor warrants a doctor visit.',
  byAge: [
    { ageRange: '0-6 months', context: 'Young babies can smell sour from milk pooling in neck folds, behind ears, and in skin creases. Spit-up residue on clothing and skin also creates a sour smell. This is resolved by cleaning skin folds daily and changing clothes when soiled. A sweet or unusual smell from a newborn could indicate a metabolic disorder - maple syrup urine disease, for example, causes a distinctive sweet smell. If your newborn has an unusual smell along with poor feeding or lethargy, seek immediate evaluation.' },
    { ageRange: '6-12 months', context: 'As solids are introduced, babies may develop different body odors from their diet. Garlic, onion, and spices in food can cause temporary changes in sweat and urine smell. Strong-smelling feet can develop from shoes or socks that do not breathe. A fishy or foul smell from the diaper area could indicate a urinary tract infection. Clean skin folds regularly and ensure the diaper area is kept dry. If the smell persists after cleaning, it warrants investigation.' },
    { ageRange: '12-24 months', context: 'Toddlers are active and may sweat more, but they should not have true body odor. If your toddler has a persistent bad smell from one nostril, they very likely have something stuck in their nose (a common toddler phenomenon) - this causes a one-sided foul-smelling discharge. A persistent vaginal odor in toddler girls can also indicate a foreign body. Foul breath that is not from food may indicate a sinus infection, dental issue, or nasal foreign body.' },
    { ageRange: '2-3 years', context: 'True axillary (armpit) body odor before age 8 is unusual and could indicate premature adrenarche (early activation of adrenal glands). If your toddler has genuine adult-like body odor from the armpits, mention it to your pediatrician. They may check for signs of early puberty. Other causes of unusual odor in this age group include: fungal skin infections, certain medications, and rarely, metabolic conditions. Most odor complaints at this age have a simple, benign explanation.' },
  ],
  whenNormal: ['Sour smell from milk in skin folds or spit-up residue - resolved by cleaning','Foot odor from non-breathable shoes or socks','Temporary body odor changes after eating strong-smelling foods','Diaper area smell from a soiled or wet diaper'],
  whenToMention: ['Persistent unusual body odor that does not resolve with bathing and cleaning','Adult-like armpit body odor in a child under 8','Foul smell from one nostril (likely nasal foreign body)','Persistent foul odor from the vaginal or genital area'],
  whenToActNow: ['A newborn with a sweet, unusual smell and poor feeding or lethargy - possible metabolic emergency','Foul body odor with fever, skin changes, or your child seeming unwell','Signs of early puberty (body odor, body hair, breast development) in a child under age 7-8'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sweating-a-lot','baby-rash-in-skin-folds','baby-strong-smelling-urine'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Puberty: Precocious Puberty. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/puberty/Pages/Precocious-Puberty.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Body Odor. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003298.htm' },
    { org: 'NIH', citation: 'National Library of Medicine. Metabolic Disorders - Newborn Screening.', url: 'https://medlineplus.gov/newbornscreening.html' },
  ],
};
