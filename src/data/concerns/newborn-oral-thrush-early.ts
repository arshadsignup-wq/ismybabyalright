import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-oral-thrush-early',
  title: 'Oral Thrush (White Patches in Mouth) in Newborns',
  category: 'medical',
  searchTerms: ['newborn oral thrush', 'baby white patches mouth', 'thrush in baby mouth', 'white tongue baby thrush', 'candida mouth baby', 'oral thrush treatment baby', 'baby thrush breastfeeding', 'white spots baby mouth won\'t wipe off', 'newborn yeast mouth infection', 'baby thrush symptoms'],
  quickAnswer:
    'Oral thrush is a common yeast (Candida) infection in the mouths of newborns, appearing as white patches on the tongue, inner cheeks, gums, and palate that cannot be easily wiped away. It is different from milk residue, which wipes off easily. Thrush is generally harmless and easily treated with antifungal medication prescribed by your pediatrician.',
  byAge: [
    { ageRange: '0-1 month', context: 'Oral thrush is common in newborns because their immune systems are still developing. The yeast Candida albicans is normally present in the body but can overgrow in babies. You may notice white, cottage cheese-like patches on the tongue, inner cheeks, gums, or roof of the mouth. Unlike milk residue, thrush patches do not wipe away easily, and if rubbed off, may leave a red, raw area underneath. Thrush may make feeding uncomfortable for some babies. Treatment typically involves an antifungal medication (nystatin) applied to the mouth. If you are breastfeeding, your nipples may also need to be treated to prevent passing the yeast back and forth.' },
    { ageRange: '1-3 months', context: 'Thrush can recur or persist during this period, especially in breastfed babies if both mother and baby are not treated simultaneously. Ensure bottles, pacifiers, and breast pump parts are thoroughly cleaned and sterilized. Probiotics may be discussed with your pediatrician. Most cases resolve within 1-2 weeks of treatment.' },
    { ageRange: '3-6 months', context: 'Thrush becomes less common as your baby\'s immune system matures. If thrush keeps recurring despite treatment, your pediatrician may investigate other contributing factors or try different antifungal medications.' },
    { ageRange: '6-12 months', context: 'Thrush is uncommon at this age. Recurrent or persistent thrush in an older infant may warrant evaluation of immune function.' },
  ],
  whenNormal: ['White patches on tongue and inner cheeks that are confirmed as thrush and respond to antifungal treatment', 'Baby continues to feed well despite mild thrush', 'The thrush clears within 1-2 weeks of prescribed treatment', 'Milk residue on the tongue that wipes away easily (this is not thrush)'],
  whenToMention: ['White patches in the mouth that do not wipe off', 'Baby seems uncomfortable or fussy during feeding', 'Thrush recurs after treatment or does not clear within 2 weeks'],
  whenToActNow: ['Baby refuses to feed and appears dehydrated due to oral pain from thrush', 'Thrush spreads to the throat or is accompanied by fever, which is unusual and may indicate a more serious infection'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Thrush and Other Candida Infections. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Oral Thrush. Patient Care and Health Information.', url: 'https://www.mayoclinic.org/diseases-conditions/oral-thrush/symptoms-causes/syc-20353533' },
  ],
  relatedConcernSlugs: ['newborn-tongue-color-white-coating', 'newborn-yeast-diaper-rash'],
};
