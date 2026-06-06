import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eye-infection-treatment',
  title: 'My Baby Has an Eye Infection',
  category: 'medical',
  searchTerms: [
    'baby eye infection',
    'baby eye infection treatment',
    'baby conjunctivitis treatment',
    'baby eye red and goopy',
    'baby eye drops antibiotic',
    'newborn eye infection',
    'baby eye swollen infected',
    'pink eye treatment infant',
    'baby eye discharge infection',
    'how to treat baby eye infection',
  ],
  quickAnswer:
    'Eye infections in babies can be bacterial, viral, or caused by a blocked tear duct. Bacterial conjunctivitis causes thick yellow or green discharge and may need antibiotic eye drops. Viral conjunctivitis causes watery discharge and resolves on its own. Keep the eye clean with warm damp cotton balls, wiping from inner to outer corner. Any eye infection in a newborn under 4 weeks needs urgent medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Eye infections in newborns (neonatal conjunctivitis) can be serious and require urgent evaluation. Infections can be caused by bacteria acquired during birth (including chlamydia and gonorrhea) or later exposure. Any redness, swelling, or discharge from a newborn\'s eye should be seen by a doctor within 24 hours. Blocked tear ducts are also common at this age and can mimic infection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The most common cause of eye discharge at this age is a blocked tear duct, not infection. A blocked tear duct causes watery eyes and mild mucus but without redness or true pus. If the eye is red with thick green or yellow discharge, this is likely bacterial conjunctivitis requiring antibiotic drops. Clean the eye before applying drops for best effectiveness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Bacterial conjunctivitis often accompanies ear infections or colds in this age group. Your pediatrician may prescribe antibiotic eye drops or ointment. Apply drops by pulling down the lower eyelid gently and placing the drop in the pocket created. If using ointment, apply a thin ribbon along the inner lower lid. Wash hands thoroughly before and after treatment.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Conjunctivitis spreads easily in daycare settings. If your toddler has pink eye, they may need to stay home for 24 hours after starting antibiotic drops (check with your daycare). Wash hands frequently, use separate towels, and wash bedding. Viral conjunctivitis does not require antibiotics and typically resolves in 5-7 days.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers may rub their eyes, spreading infection from one eye to the other. Teach hand hygiene and try to discourage eye rubbing. Allergic conjunctivitis (itchy, watery eyes) becomes more common at this age and is treated differently from infectious conjunctivitis. Your pediatrician can help distinguish between the types.',
    },
  ],
  whenNormal: [
    'A minor eye discharge that is clear or slightly white, especially upon waking, which clears with gentle cleaning',
    'Watery eyes from a known blocked tear duct without redness or thick discharge',
    'Mild redness that resolves within 24 hours without treatment',
  ],
  whenToMention: [
    'Your baby has yellow or green eye discharge that persists for more than 24 hours',
    'One or both eyes are red with discharge and you want to determine if antibiotics are needed',
    'Your baby\'s blocked tear duct seems to be getting worse or keeps recurring',
  ],
  whenToActNow: [
    'A newborn under 4 weeks has any eye redness, swelling, or discharge',
    'Your baby has severe eye swelling, cannot open the eye, has a fever with eye symptoms, or has swelling extending to the skin around the eye (possible periorbital cellulitis)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-pink-eye',
    'baby-conjunctivitis-viral-vs-bacterial',
    'baby-eye-discharge-yellow-green',
    'baby-stye-on-eyelid',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pinkeye (Conjunctivitis). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Pinkeye-Conjunctivitis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Conjunctivitis (Pink Eye).',
      url: 'https://www.cdc.gov/conjunctivitis/about/index.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Pink eye (conjunctivitis) in babies.',
      url: 'https://www.mayoclinic.org/diseases-conditions/pink-eye/symptoms-causes/syc-20376355',
    },
  ],
};
