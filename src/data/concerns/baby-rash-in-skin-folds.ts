import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-in-skin-folds',
  title: 'Baby Rash in Skin Folds - Neck, Armpits, and Creases',
  category: 'skin',
  searchTerms: ['baby rash in skin folds','baby rash in neck folds','baby rash in creases','baby intertrigo','baby rash under chin','baby rash in armpit','baby red raw skin folds','baby neck rash smell','baby chafing skin folds','baby yeast rash skin folds','baby rash groin folds','chubby baby rash creases'],
  quickAnswer: 'Rashes in baby\'s skin folds (neck, armpits, groin, behind ears, elbow and knee creases) are extremely common because these warm, moist areas trap moisture from drool, spit-up, sweat, and milk. The medical term is intertrigo. Most fold rashes respond to keeping the area clean and dry. If the rash is bright red, has satellite spots, or has a yeasty smell, it may have developed a yeast (candida) infection and need antifungal treatment. Keeping folds dry is both the treatment and prevention.',
  byAge: [
    { ageRange: '0-3 months', context: 'Neck fold rashes are extremely common in young babies because they have short necks, multiple chin folds, and frequent spit-up and drool that pools in the creases. The rash may look red, raw, or weepy and can smell sour. Clean the folds gently during every diaper change and bath with a damp cloth, then dry thoroughly - pat dry or use a hair dryer on a cool setting. Avoid applying powder. If the rash persists despite keeping it dry, it may have become yeast-infected and need antifungal cream.' },
    { ageRange: '3-6 months', context: 'As babies get chubbier, fold rashes can develop in more areas - behind ears, under the chin, in the armpit, and in the groin creases. Drooling from teething makes neck and chin fold rashes worse. After cleaning and drying folds, a thin layer of petroleum jelly or zinc oxide can create a moisture barrier. If using a barrier cream, still clean and reapply - do not just layer on more cream over a dirty fold. Check folds at least twice daily.' },
    { ageRange: '6-12 months', context: 'Crawling babies may develop rashes in elbow creases, behind knees, and in thigh folds from sweat and friction. If your baby has eczema, fold rashes can be harder to manage because the skin barrier is already compromised. For eczema in folds, your pediatrician may prescribe a mild topical steroid. Keep the area moisturized with a thick fragrance-free cream. Avoid tight clothing that traps moisture in fold areas.' },
    { ageRange: '12-24 months', context: 'As toddlers thin out and become more mobile, fold rashes typically decrease. Persistent fold rashes at this age may indicate eczema, a fungal infection, or rarely, a condition like psoriasis. Groin fold rashes can be confused with diaper rash - if the rash is primarily in the creases rather than on the surfaces that contact the diaper, it is more likely intertrigo or yeast than typical diaper rash. Yeast fold rashes are bright red with well-defined borders and small red dots around the edges.' },
  ],
  whenNormal: ['Your baby\'s neck folds are slightly pink or red and improve with regular cleaning and drying','The rash comes and goes with drooling or warm weather','The rash is mild, not painful, and your baby does not seem bothered by it','The rash improves quickly when you keep the area clean and dry'],
  whenToMention: ['The fold rash is bright red, raw, weepy, or has a strong smell despite regular cleaning','The rash has not improved after a week of diligent cleaning and drying','You see small red dots or "satellite lesions" around the edges of the rash suggesting yeast','The rash is cracking, bleeding, or your baby seems to be in pain when you clean the area'],
  whenToActNow: ['The skin in the folds is broken, oozing pus, or has yellow crusting suggesting bacterial infection','Your baby has a fever alongside a worsening fold rash','The rash is spreading beyond the folds and covering large areas of the body'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-persistent-eczema','baby-rash-around-mouth'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Skin Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Intertrigo. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003223.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx' },
  ],
};
