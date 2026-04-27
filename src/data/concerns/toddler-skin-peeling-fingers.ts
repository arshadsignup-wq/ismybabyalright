import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-skin-peeling-fingers',
  title: 'Toddler Skin Peeling on Fingers and Hands',
  category: 'skin',
  searchTerms: ['toddler skin peeling fingers','baby peeling skin fingers','toddler fingertips peeling','child hands peeling','toddler skin peeling hands','peeling fingers toddler no rash','toddler peeling skin after illness','hand foot mouth peeling','toddler fingertip skin peeling off','baby peeling hands and feet','toddler skin shedding fingers','post viral peeling toddler'],
  quickAnswer: 'Peeling skin on a toddler\'s fingers and hands is most commonly caused by post-viral desquamation (skin shedding after hand-foot-and-mouth disease or another viral illness), excessive hand washing or sanitizer use, dry skin from low humidity, or mild eczema. After hand-foot-and-mouth disease, dramatic peeling of the fingertips and sometimes toenails loosening is common 1-4 weeks after the illness and is completely harmless. Most causes of finger peeling are benign and resolve with moisturizing.',
  byAge: [
    { ageRange: '0-6 months', context: 'Newborns often have peeling skin in the first few weeks - this is normal shedding of the outer skin layer that was protected by vernix in the womb. Post-due babies tend to have more peeling. This is harmless and does not need treatment, though a gentle fragrance-free moisturizer can be applied. Peeling on the palms and soles can also occur with certain infections - if your young baby has peeling with fever or seems unwell, contact your pediatrician.' },
    { ageRange: '6-12 months', context: 'If your baby recently had hand-foot-and-mouth disease, you may notice dramatic peeling of the fingers, palms, and sometimes toes starting 1-4 weeks after the illness. Some babies also lose fingernails or toenails after the illness (called onychomadesis) - this looks alarming but the nails grow back normally. Dry skin from winter air, frequent bathing, or harsh soaps can also cause mild peeling on baby hands. Use fragrance-free moisturizer after baths.' },
    { ageRange: '12-24 months', context: 'Post-viral peeling is the most common cause at this age, especially in daycare children who frequently get hand-foot-and-mouth disease. Excessive hand washing or sanitizer use (common in daycare) can dry out finger skin and cause peeling. Mild hand eczema presents as dry, rough, peeling patches on the hands. Thumb or finger sucking can cause localized peeling on the sucked finger. Apply a thick moisturizer (like CeraVe or Aquaphor) several times daily and at bedtime.' },
    { ageRange: '2-3 years', context: 'If your toddler has peeling fingertips without a recent illness, consider: dry air (especially in winter), contact with irritants (sand, clay, certain art supplies), hand washing with harsh soap, or mild eczema. Kawasaki disease can cause peeling of the fingertips and toes, but this occurs alongside high fever lasting 5+ days, red eyes, rash, red cracked lips, and swollen lymph nodes - isolated peeling without these symptoms is not Kawasaki disease. If peeling persists for weeks without improvement, mention it at your next visit.' },
  ],
  whenNormal: ['Peeling started 1-4 weeks after hand-foot-and-mouth disease or another viral illness','Mild peeling from dry skin that improves with regular moisturizing','Peeling around the fingertips from thumb or finger sucking','Seasonal peeling during dry winter months'],
  whenToMention: ['Peeling is persistent, worsening, or not responding to moisturizer','Your child also has cracked, painful, or bleeding skin on the hands','Nail changes (nails loosening, pitting, or discoloring) alongside skin peeling','Peeling is accompanied by pain or prevents normal hand use'],
  whenToActNow: ['Peeling fingertips in a child who had 5+ days of high fever plus red eyes, rash, and cracked red lips - could be Kawasaki disease','Widespread peeling with fever and your child looking very unwell','Sudden blistering and peeling that looks like a burn - possible staphylococcal scalded skin syndrome'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-persistent-eczema','baby-blisters-on-skin'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand-Foot-and-Mouth Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Skin Peeling Syndrome. Genetic and Rare Diseases Information Center.', url: 'https://medlineplus.gov/ency/article/003236.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
  ],
};
