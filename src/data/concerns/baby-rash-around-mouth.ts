import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-around-mouth',
  title: 'Baby Rash Around the Mouth - Drool Rash and Other Causes',
  category: 'skin',
  searchTerms: ['baby rash around mouth','baby drool rash','baby perioral dermatitis','baby red around mouth','baby rash from drooling','baby rash around lips','baby rash around mouth food','baby rash around mouth teething','toddler rash around mouth','baby chapped lips rash','baby rash from pacifier','baby rash around mouth not food allergy'],
  quickAnswer: 'A rash around your baby\'s mouth is most commonly drool rash (contact irritant dermatitis from constant moisture). Drool rash looks like red, slightly rough, chapped skin around the mouth, chin, and cheeks. It is very common during teething when drool production increases dramatically. Other causes include food contact irritation (especially from acidic foods like tomato and citrus), pacifier friction, eczema, and occasionally hand-foot-and-mouth disease. True food allergies typically cause hives or swelling, not a flat red rash.',
  byAge: [
    { ageRange: '0-3 months', context: 'A rash around the mouth in young babies is usually from milk or spit-up irritating the skin. Breast milk and formula that sit on the skin can cause redness. Gently wipe the area after feeds and apply a thin layer of petroleum jelly to create a moisture barrier. Baby acne (small red bumps) can also cluster around the mouth and cheeks - this is hormonal and resolves on its own by 3-4 months. Avoid harsh wipes or frequent scrubbing, which worsens irritation.' },
    { ageRange: '3-6 months', context: 'Teething often begins around 4-6 months, and the increased drooling can cause persistent rash around the mouth and chin. Apply petroleum jelly or a barrier cream before meals and before sleep to protect the skin from moisture. Change drool bibs frequently - a wet bib against the skin makes things worse. If the rash is very red or bumpy, a mild hydrocortisone cream (1%) can be used for a few days. Avoid scented products on the face.' },
    { ageRange: '6-12 months', context: 'Starting solids introduces new irritants. Acidic foods (tomato, citrus, berries) and salty foods can cause immediate redness around the mouth that resolves within 30-60 minutes - this is contact irritation, NOT a food allergy. Apply barrier cream before meals to protect the skin. Food allergy rashes are hives (raised, itchy welts) that appear on the body, not just the mouth. If your baby has eczema, the mouth area is often a flare zone.' },
    { ageRange: '12-24 months', context: 'Toddlers with chronic rash around the mouth should be evaluated for perioral dermatitis (red bumpy rash in a ring around the mouth) or eczema. Excessive pacifier use can cause friction rash. Licking lips constantly (especially in dry weather) causes lick dermatitis - a red, chapped ring around the lips. Keep the area moisturized, use a non-irritating lip balm, and apply barrier cream. If the rash has blisters inside and outside the mouth with fever, it may be hand-foot-and-mouth disease.' },
  ],
  whenNormal: ['Red, slightly rough skin around the mouth that corresponds with teething and heavy drooling','Brief redness after eating acidic foods that resolves within an hour','Mild rash that improves with barrier cream and keeping the area dry','Seasonal dryness and chapping around the lips in cold or dry weather'],
  whenToMention: ['The rash persists despite barrier cream and good skin care for more than 2 weeks','The rash is spreading, worsening, or has become bumpy or crusty','Your baby has rash around the mouth plus eczema patches elsewhere that are not well controlled','You are unsure whether the rash is food allergy versus contact irritation'],
  whenToActNow: ['Blisters around the mouth in a newborn under 1 month - could indicate neonatal herpes','Rash with facial swelling, hives on the body, or difficulty breathing after eating - possible allergic reaction','Rapidly spreading honey-colored crusted rash around the mouth - could be impetigo requiring antibiotics'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-rash-in-skin-folds','baby-persistent-eczema'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Drooling and Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Drooling-and-Your-Baby.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Perioral Dermatitis. DermNet.', url: 'https://medlineplus.gov/ency/article/000839.htm' },
  ],
};
