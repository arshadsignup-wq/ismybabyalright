import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-wont-go-away',
  title: "Baby Rash That Won't Go Away",
  category: 'skin',
  searchTerms: ['baby rash won\'t go away','persistent rash baby','baby rash lasting weeks','baby chronic rash','baby rash not getting better','baby rash that keeps coming back','recurring baby rash','baby rash that won\'t clear','toddler rash won\'t go away','baby red rash persistent','baby rash for months','stubborn baby rash'],
  quickAnswer: 'A rash that persists for more than 2 weeks or keeps recurring likely needs evaluation beyond "wait and see." The most common causes of persistent rashes in babies include eczema (dry, itchy, patches), fungal infections (especially in skin folds), contact dermatitis (reaction to a product), and less commonly, psoriasis or autoimmune conditions. Proper identification is important because the treatment differs significantly - using the wrong cream (like steroid cream on a fungal infection) can actually make things worse.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborn skin goes through many phases. Erythema toxicum (blotchy red patches with yellow centers), milia (tiny white bumps), and baby acne all appear and resolve in the first weeks. A rash that persists beyond 4-6 weeks or is worsening may be early eczema, seborrheic dermatitis (cradle cap spreading to the body), or a yeast infection. If the rash is in the diaper area and not responding to standard diaper rash treatment, yeast is a common culprit.' },
    { ageRange: '3-6 months', context: 'Eczema often first appears between 3-6 months, typically on the cheeks, forehead, and outer arms and legs. It appears as dry, rough, sometimes weepy patches that come and go but never fully clear. Regular moisturizing with a thick cream or ointment (not lotion) is the first-line treatment. If moisturizing alone is not controlling the rash, your pediatrician may prescribe a mild topical steroid for flares.' },
    { ageRange: '6-12 months', context: 'As babies become more mobile and start solids, new rash triggers emerge - contact with grass, food reactions, drool rash, and exposure to new products. If a rash is localized to areas that touch specific materials or products, consider contact dermatitis. If it appears after introducing a new food, a food allergy may be involved. Document what the rash looks like, where it is, and what makes it better or worse to help your pediatrician diagnose it.' },
    { ageRange: '12-36 months', context: 'Toddlers with persistent rashes most commonly have eczema, which tends to shift to the creases of elbows and behind the knees. Persistent ring-shaped rashes may be ringworm (fungal). Rashes that come and go with fever may be viral. If you have been treating a rash at home for more than 2 weeks without improvement, see your pediatrician - they may need to see the rash in person to diagnose it accurately. Photos taken at the rash\'s worst are helpful.' },
  ],
  whenNormal: ['A rash that appears with a viral illness and resolves as the illness clears','Mild eczema that is well-controlled with regular moisturizing','A drool rash that comes and goes with teething','Diaper rash that responds to barrier cream and frequent changes within a few days'],
  whenToMention: ['A rash has persisted for more than 2 weeks despite home treatment','The rash is spreading, worsening, or not responding to over-the-counter treatments','Your baby seems itchy, uncomfortable, or is scratching enough to break the skin','You have tried multiple products and nothing is helping'],
  whenToActNow: ['A rash is accompanied by high fever, lethargy, or your baby seems very unwell','The rash involves blistering, open sores, or signs of skin infection (warmth, swelling, pus, red streaks)','A rash does not blanch when pressed (petechiae or purpura) - this requires emergency evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema','diaper-rash-not-clearing','fungal-rash','hives'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Rashes and Skin Conditions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NIH', citation: 'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Atopic Dermatitis.', url: 'https://www.niams.nih.gov/health-topics/atopic-dermatitis' },
  ],
};
