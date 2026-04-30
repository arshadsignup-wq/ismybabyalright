import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-conjunctivitis-viral-vs-bacterial',
  title: 'Pink Eye (Conjunctivitis) - Viral vs. Bacterial',
  category: 'medical',
  searchTerms: ['baby pink eye', 'baby conjunctivitis', 'toddler pink eye', 'baby eye infection', 'baby red eye discharge', 'toddler conjunctivitis treatment', 'viral vs bacterial pink eye baby', 'baby eye drops pink eye', 'baby pink eye contagious', 'toddler eye infection'],
  quickAnswer: 'Pink eye (conjunctivitis) is very common in babies and toddlers. The three main types are: viral (most common - watery discharge, often accompanies a cold, resolves on its own), bacterial (thick yellow/green discharge, may mat the eye shut overnight, usually needs antibiotic eye drops), and allergic (itchy, watery, both eyes, seasonal). The key difference: viral conjunctivitis has watery, clear discharge while bacterial has thick, colored discharge. Both viral and bacterial are highly contagious and spread easily in daycare settings. Good hand washing is the best prevention.',
  byAge: [
    { ageRange: '0-12 months', context: 'Eye discharge in newborns (first 28 days) is treated more seriously because it could be caused by bacteria acquired during birth, including chlamydia or gonorrhea. Any eye discharge in a newborn under 2 weeks should be seen by a doctor promptly. In older babies, pink eye often accompanies a cold (viral) or may be bacterial. A blocked tear duct (dacryostenosis) can mimic pink eye with watery discharge but the eye is typically not red. If your baby has sticky, goopy eyes without redness, it may be a blocked tear duct rather than pink eye.' },
    { ageRange: '1-3 years', context: 'Pink eye is extremely common in toddlers, especially those in daycare. Viral pink eye typically starts in one eye and may spread to the other, with watery or slightly mucousy discharge. It often accompanies a cold and resolves within 5-7 days without treatment. Bacterial pink eye causes thick yellow or green discharge, may glue the eyelids shut overnight, and usually requires antibiotic eye drops prescribed by your pediatrician. Allergic conjunctivitis causes itching, is in both eyes, and is associated with other allergy symptoms. Clean discharge with a warm, wet cloth and wash hands frequently to prevent spread.' },
  ],
  whenNormal: ['Mild watery discharge from one eye during a cold (viral conjunctivitis) that resolves within a week', 'Slight morning eye crustiness that cleans easily with a warm cloth', 'Watery, tearing eyes in windy or cold weather'],
  whenToMention: ['Thick yellow or green discharge from the eye (likely bacterial - may need antibiotic drops)', 'Pink eye that is not improving after 5-7 days', 'Recurrent eye discharge that keeps coming back', 'You are unsure whether your child needs antibiotic drops'],
  whenToActNow: ['Eye discharge in a newborn under 2 weeks old', 'Significant eye swelling with redness and fever (possible periorbital or orbital cellulitis - emergency)', 'Your child cannot open the eye due to swelling (not just crusted shut from discharge)', 'Vision changes or sensitivity to light', 'Eye redness following an eye injury'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eye-discharge-yellow-green', 'blocked-tear-duct', 'baby-swollen-eye', 'baby-seasonal-allergies'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pink Eye (Conjunctivitis). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Pinkeye-Conjunctivitis.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Conjunctivitis (Pink Eye).', url: 'https://www.cdc.gov/conjunctivitis/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eye Infections. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx' },
  ],
};
