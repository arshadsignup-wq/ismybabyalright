import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'working-mom-pumping-at-work-struggle',
  title: 'Struggling with Pumping at Work',
  category: 'maternal',
  searchTerms: [
    'pumping at work struggle',
    'breastfeeding working mom',
    'pumping at work tips',
    'pumping schedule at work',
    'pumping output dropping at work',
    'pumping rights at work',
    'pumping room at work law',
    'how to keep up milk supply while working',
    'pumping at work overwhelmed',
    'breast pump work stress supply',
    'PUMP Act breastfeeding law',
  ],
  quickAnswer:
    'Pumping at work is genuinely one of the hardest aspects of being a breastfeeding working parent. Between finding time and space, managing output anxiety, cleaning parts, and storing milk — all while doing your actual job — the mental and physical load is immense. Federal law (the PUMP Act) requires most employers to provide reasonable break time and a private space (not a bathroom) for pumping. If pumping at work is not sustainable for you, transitioning to formula supplementation is a completely valid choice that does not diminish your commitment as a parent.',
  byAge: [
    {
      ageRange: '0-3 months postpartum (returning to work)',
      context:
        'Returning to work while still establishing your milk supply can be especially challenging. If possible, start pumping 1-2 weeks before returning to build a small freezer stash (even 1-2 days\' worth is enough to start). When back at work, aim to pump every 2-3 hours, roughly matching your baby\'s feeding schedule. Output may be lower than expected due to stress and an unfamiliar environment — this is normal and does not mean your supply is failing. Looking at photos or videos of your baby while pumping can help with letdown. A hands-free pumping bra is essential for multitasking.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this point, pumping at work may feel more routine, or the fatigue may be setting in. Many parents notice a gradual decrease in pumping output around 3-4 months, which can cause significant anxiety. This is often related to supply regulation (your body producing what your baby needs rather than excess) and is not necessarily a supply problem. If output drops, try power pumping once a day (pump 20 min, rest 10, pump 10, rest 10, pump 10), ensure pump flanges fit correctly (incorrect sizing is a very common cause of decreased output), and check that pump parts are not worn.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'As your baby starts solids around 6 months, the pressure to pump large volumes decreases somewhat. Some parents find this a natural time to reduce pumping sessions at work. If you are struggling with the logistics, know that you do not have to pump for a full year to have successfully breastfed. Any amount of breast milk your baby receives has benefits. Many families transition to a combination of breast milk and formula, or nurse when together and offer formula when apart. Your well-being matters — a happy, healthy parent is more important to your baby than exclusive breast milk.',
    },
  ],
  whenNormal: [
    'You feel overwhelmed, stressed, or resentful about pumping at work — these feelings are valid and shared by many parents',
    'Your pumping output varies from session to session and day to day',
    'You produce less from the pump than your baby takes from the breast — pumps are less efficient than babies',
    'You feel torn between wanting to continue pumping and wanting to stop — ambivalence is normal',
  ],
  whenToMention: [
    'You are developing symptoms of mastitis (painful, red breast area with fever) from missed or delayed pump sessions',
    'You are so stressed about pumping output that it is affecting your mental health',
    'Your employer is not providing adequate time or space for pumping, despite legal requirements',
  ],
  whenToActNow: [
    'You have symptoms of mastitis that are worsening: high fever, red streaking on the breast, or flu-like symptoms — contact your healthcare provider promptly as you may need antibiotics',
    'You are experiencing severe anxiety or depression related to pumping and work stress — reach out for mental health support',
    'You feel you cannot continue pumping and need support in making a transition plan — a lactation consultant can help',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'pumping-output-concerns',
    'guilt-returning-to-work',
    'working-mom-daycare-guilt-anxiety',
    'formula-feeding-guilt',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Working Mother. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Working-Together-Breastfeeding-and-Solid-Foods.aspx',
    },
    {
      org: 'US DOL',
      citation:
        'U.S. Department of Labor. PUMP Act: Break Time for Nursing Mothers.',
      url: 'https://www.dol.gov/agencies/whd/pump-at-work',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Breastfeeding and Returning to Work. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK235590/',
    },
  ],
};
