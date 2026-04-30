import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dry-cracked-skin-hands',
  title: 'Baby Has Dry, Cracked Skin on Hands',
  category: 'skin',
  searchTerms: ['baby dry hands', 'baby cracked skin hands', 'toddler dry hands', 'baby peeling hands', 'baby chapped hands', 'toddler cracked knuckles', 'baby rough hands', 'baby skin peeling fingers', 'baby dry skin winter', 'toddler hands red and dry'],
  quickAnswer: 'Dry, cracked skin on a baby\'s or toddler\'s hands is very common, especially during cold, dry weather. The most frequent causes are low humidity, frequent hand washing, and mild eczema. Babies\' skin is thinner and loses moisture faster than adult skin. Regular application of a thick, fragrance-free moisturizer (like petroleum jelly or a ceramide cream) multiple times a day, especially after hand washing, is the most effective treatment. If the skin cracks, bleeds, or becomes infected, consult your pediatrician.',
  byAge: [
    { ageRange: '0-12 months', context: 'Newborn skin peeling on the hands is normal in the first few weeks of life, especially in babies born past their due date. This is not true dryness and does not need treatment beyond gentle moisturizing. Beyond the newborn period, dry hands in babies can result from eczema, low humidity, or frequent exposure to saliva (if hands are always in the mouth). Use a gentle, fragrance-free moisturizer regularly.' },
    { ageRange: '1-3 years', context: 'Toddlers frequently develop dry, cracked hands from frequent hand washing (especially at daycare), playing outdoors in cold weather, and contact with irritants like sand, paint, or soap. Eczema commonly affects the hands in this age group. Apply a thick barrier cream (petroleum jelly or a ceramide-based cream) after every hand wash and before bed. Consider using a humidifier in your child\'s room during dry months. Avoid scented soaps and hand sanitizers that worsen dryness.' },
  ],
  whenNormal: ['Mild dryness during cold, dry winter months', 'Newborn skin peeling in the first 2-3 weeks of life', 'Slightly rough skin that improves with regular moisturizing', 'Dry patches after frequent hand washing'],
  whenToMention: ['Dry skin is persistent despite regular moisturizing', 'Cracked skin that is painful or bleeding', 'Dry patches are intensely itchy and interfering with sleep', 'Skin is red and inflamed, suggesting eczema'],
  whenToActNow: ['Cracked skin shows signs of infection - increasing redness, warmth, pus, or honey-colored crusting', 'Peeling skin on the hands is accompanied by a widespread rash and fever (possible scarlet fever or Kawasaki disease)', 'Fingertips are peeling extensively with no clear cause'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema', 'dry-skin', 'baby-white-patches-on-skin', 'contact-dermatitis-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Dry Skin and Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Dry-Skin-and-Your-Baby.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pediatric Skin Care.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
