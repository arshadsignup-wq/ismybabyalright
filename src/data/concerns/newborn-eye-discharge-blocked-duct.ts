import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-eye-discharge-blocked-duct',
  title: 'Blocked Tear Duct in Newborns',
  category: 'medical',
  searchTerms: ['blocked tear duct baby', 'baby eye discharge', 'newborn tear duct blocked', 'dacryostenosis baby', 'baby eye watering discharge', 'blocked nasolacrimal duct', 'baby crusty eye one side', 'tear duct massage baby', 'how to unblock tear duct baby', 'baby tear duct clogged'],
  quickAnswer: 'A blocked tear duct (dacryostenosis) is very common in newborns, affecting up to 20% of babies. It causes persistent tearing and sometimes yellowish discharge from one or both eyes. The tear duct, which drains tears from the eye into the nose, is not fully open. Most blocked tear ducts resolve on their own by 12 months. Gentle tear duct massage can help.',
  byAge: [
    { ageRange: '0-1 month', context: 'A blocked tear duct may be noticed in the first weeks when you see excessive tearing, watery eyes, or sticky yellowish discharge that accumulates on the eyelashes, especially after sleep. The eye itself (the white part) should not be red if it is simply a blocked duct. Treatment involves gentle nasolacrimal duct massage: place your clean finger at the inner corner of the eye (near the nose) and gently stroke downward toward the nose, 5-10 times, 2-3 times per day. Clean the discharge with a warm, damp cloth. No antibiotic drops are needed unless the eye becomes infected.' },
    { ageRange: '1-3 months', context: 'Continue tear duct massage as recommended. The duct may open spontaneously at any time. Keep the area clean and watch for signs of infection (increased redness, significant swelling near the inner corner of the eye, or pus-like discharge). If infection develops (dacryocystitis), antibiotics are needed.' },
    { ageRange: '3-6 months', context: 'Many blocked tear ducts resolve during this period. Continue massage. If the duct has not opened and symptoms persist, your pediatrician may discuss a referral to a pediatric ophthalmologist for potential probing, though most doctors wait until 12 months.' },
    { ageRange: '6-12 months', context: 'Over 90% of blocked tear ducts resolve by 12 months. If symptoms persist beyond 12 months, a simple probing procedure under brief anesthesia can open the duct with a success rate over 90%.' },
  ],
  whenNormal: ['Persistent tearing or watery eye with clear or slightly yellowish discharge', 'The white of the eye looks normal (not red)', 'Discharge cleans away easily and is not thick or green', 'Baby is not bothered by the symptoms'],
  whenToMention: ['Blocked tear duct symptoms persist beyond 12 months', 'Discharge is becoming thicker or more frequent', 'You need guidance on proper tear duct massage technique'],
  whenToActNow: ['Swelling, redness, and tenderness near the inner corner of the eye (dacryocystitis) requiring antibiotic treatment', 'Red, swollen eye with thick green or pus-like discharge suggesting conjunctivitis'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Blocked Tear Ducts. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Blocked-Tear-Ducts.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Blocked Tear Duct. Patient Care and Health Information.', url: 'https://www.mayoclinic.org/diseases-conditions/blocked-tear-duct/symptoms-causes/syc-20351369' },
  ],
  relatedConcernSlugs: ['newborn-watery-eyes', 'newborn-conjunctivitis-sticky-eye'],
};
