import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfed-vs-formula-poop-differences',
  title: 'Breastfed vs Formula-Fed Poop Differences',
  category: 'digestive',
  searchTerms: [
    'breastfed vs formula poop differences',
    'breastfed baby poop vs formula poop',
    'difference between breastfed and formula fed poop',
    'formula fed baby poop color and texture',
    'breastfed baby poop yellow seedy',
    'formula poop brown thick',
    'is my baby poop normal breastfed',
    'how often should formula fed baby poop',
    'breastfed poop vs formula poop smell',
    'switching from breast milk to formula poop changes',
  ],
  quickAnswer:
    'Breastfed and formula-fed babies produce noticeably different stools, and both patterns are normal. Breastfed stools are typically yellow to mustard-colored, loose or seedy in texture, and have a mild, slightly sweet smell. Formula-fed stools tend to be tan to dark brown, thicker and more paste-like, and have a stronger odor. Breastfed newborns may poop after every feeding (8-12 times daily) while formula-fed babies average 1-4 times daily. After 6 weeks, breastfed babies may go several days between stools — this is normal as long as stools remain soft. According to the AAP, the wide variation in color, frequency, and consistency between feeding methods is expected and rarely indicates a problem.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Both breastfed and formula-fed babies pass black meconium in the first 1-2 days, then transition to green-brown stools. By day 4-5, breastfed stools become yellow, loose, and seedy. Formula-fed stools become tan or brown and more formed. Breastfed newborns often stool with every feeding (8-12 times/day), while formula-fed babies may have 1-4 stools daily. Frequent stooling in breastfed babies is driven by the gastrocolic reflex and is a positive sign of adequate milk intake.',
    },
    {
      ageRange: '6 weeks to 4 months',
      context:
        'Around 6 weeks, many breastfed babies shift from frequent stools to going several days — even up to 7-10 days — between bowel movements. This is normal as long as the stool is still soft when it comes. Formula-fed babies typically maintain a more consistent 1-2 stools per day. If your breastfed baby suddenly poops less often, this is a well-recognized pattern called "stool-spacing" and does not indicate constipation.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Combination-fed babies (breast milk + formula) produce stools that blend characteristics of both — color and texture fall somewhere in between. If you are transitioning from breast milk to formula, expect stools to become firmer, darker, and more odorous over several days. This transition period may include some green stools, which are normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solid foods, stool differences between breastfed and formula-fed babies become less distinct. Both types will see changes in color and texture based on foods eaten. Stools generally become more formed, darker, and stronger-smelling regardless of milk source. Some babies experience temporary constipation when starting solids.',
    },
  ],
  whenNormal: [
    'Yellow, seedy, loose stools in a breastfed baby',
    'Tan or brown, thicker, paste-like stools in a formula-fed baby',
    'Breastfed baby pooping after every feed in the first 6 weeks',
    'Breastfed baby going several days without a stool after 6 weeks, as long as stool is soft',
    'Mild color and consistency changes when switching between breast milk and formula',
  ],
  whenToMention: [
    'Breastfed baby producing consistently hard, pellet-like stools',
    'Formula-fed baby going more than 3-4 days without a stool and appearing uncomfortable',
    'Persistent green, frothy stools in a breastfed baby that may indicate foremilk-hindmilk imbalance',
    'Significant increase or decrease in stool frequency that concerns you',
  ],
  whenToActNow: [
    'White, chalky, or pale grey stool in any baby — may indicate biliary atresia and needs same-day evaluation',
    'Black, tarry stool after the meconium period (not from iron supplements) suggesting possible GI bleeding',
    'Blood or mucus in stools accompanied by fever, vomiting, or refusal to feed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-stool-color-guide',
    'poop-changes-formula-switch',
    'newborn-infrequent-stools-breastfed',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        "American Academy of Pediatrics. Baby's First Bowel Movements. HealthyChildren.org.",
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Baby poop: What\'s normal? Mayo Clinic Patient Care & Health Information.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/expert-answers/baby-poop/faq-20057971',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Baby Poop: What\'s Normal and What\'s Not. Health Library.',
      url: 'https://my.clevelandclinic.org/health/symptoms/22465-baby-poop',
    },
  ],
};
