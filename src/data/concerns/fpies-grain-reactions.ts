import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fpies-grain-reactions',
  title: 'My Baby Had a Severe Vomiting Reaction to Grains (FPIES)',
  category: 'feeding',
  searchTerms: [
    'baby vomiting rice cereal FPIES',
    'baby severe reaction to oatmeal',
    'FPIES grains baby',
    'baby vomiting hours after eating rice',
    'food protein induced enterocolitis grains',
    'baby went limp after eating oats',
    'FPIES safe foods list',
    'baby pale vomiting after cereal',
    'FPIES rice oats barley',
    'delayed vomiting reaction baby food',
  ],
  quickAnswer:
    'Food Protein-Induced Enterocolitis Syndrome (FPIES) to grains causes severe, repeated vomiting typically 2-4 hours after eating the trigger food. Your baby may become pale, limp, and lethargic. Rice is the most common solid food trigger, followed by oats and barley. While the episodes are frightening, FPIES is manageable by avoiding trigger foods, and most children outgrow it by age 3-5.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'FPIES to grains most commonly appears when solid foods are first introduced. A typical scenario is giving rice cereal and seeing severe, projectile vomiting 2-4 hours later — often misdiagnosed as a stomach bug on the first occurrence. Your baby may become pale or gray, limp, and appear very unwell. If this happens with a specific grain, avoid that grain and inform your pediatrician. A second reaction to the same food confirms the diagnosis.',
    },
    {
      ageRange: '8-12 months',
      context:
        'By this age, you may have identified one or more grain triggers. Work with a pediatric allergist to develop a safe food introduction plan. Many babies with FPIES to rice also react to oats or barley, but not always — each grain should be trialed carefully, ideally under medical supervision. Fruits and vegetables are generally safe and well-tolerated.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Your allergist may recommend supervised oral food challenges in a medical setting to determine whether your child has outgrown FPIES to specific grains. Most children outgrow grain FPIES by age 3-5. Until then, careful food label reading is essential as rice and oat flour are hidden in many processed foods.',
    },
    {
      ageRange: '3-5 years',
      context:
        'The majority of children with grain FPIES have outgrown it by this age. Supervised food challenges conducted in a medical facility are the standard way to confirm tolerance. Once a food is passed in a challenge, it can be safely incorporated into the regular diet.',
    },
  ],
  whenNormal: [
    'Your baby gagged on a new food texture but recovered immediately and was fine afterward',
    'Your baby spit up a small amount after trying a new food but showed no other symptoms',
    'Your baby was fussy after eating a new food but had no vomiting, lethargy, or color changes',
  ],
  whenToMention: [
    'Your baby had severe vomiting 2-4 hours after eating a specific grain and you suspect FPIES',
    'Your baby has reacted to one grain and you need guidance on safely introducing other grains',
    'You want a referral to a pediatric allergist for FPIES evaluation and management',
  ],
  whenToActNow: [
    'Your baby is vomiting repeatedly, appears pale or gray, is limp or lethargic, or seems dehydrated after eating a food — go to the emergency room and tell them you suspect an FPIES reaction',
    'Your baby has bloody diarrhea or appears to be in shock (cool skin, rapid breathing, unresponsive) after eating',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Protein-Induced Enterocolitis Syndrome. Journal of Allergy and Clinical Immunology, 2017.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Protein-Induced-Enterocolitis-Syndrome-FPIES.aspx',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. FPIES.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/fpies/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Food Protein-Induced Enterocolitis Syndrome. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459187/',
    },
  ],
};
