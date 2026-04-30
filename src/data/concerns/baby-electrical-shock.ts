import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-electrical-shock',
  title: 'Baby Got an Electrical Shock',
  category: 'medical',
  searchTerms: ['baby electrical shock', 'toddler electrical outlet', 'baby electrocuted', 'toddler bit electrical cord', 'baby stuck finger in outlet', 'electrical injury baby', 'baby chewed on cord', 'toddler electrical burn', 'baby electric shock what to do', 'baby outlet cover safety'],
  quickAnswer: 'Any electrical injury in a baby or toddler should be evaluated in the emergency room, even if your child appears fine. Electrical current can cause internal injuries (including heart rhythm disturbances) that are not visible externally. The most common causes of electrical injury in young children are inserting objects into outlets, biting or chewing on electrical cords, and contact with frayed wires. If your child is still in contact with the electrical source, do NOT touch them - disconnect the power source first. Call 911 if your child is unresponsive, has burns, or was exposed to high voltage.',
  byAge: [
    { ageRange: '0-12 months', context: 'Once babies become mobile (crawling, pulling up), electrical outlets become a significant hazard. Use tamper-resistant outlet covers throughout your home. Babies may also mouth or chew on electrical cords. If your baby receives an electrical shock: disconnect the power source first (do not touch the child while they are in contact with electricity), check for responsiveness and breathing, call 911 if unresponsive, and take them to the ER even if they seem fine. Electrical burns at the corner of the mouth from biting a cord are a specific concern in babies and toddlers.' },
    { ageRange: '1-3 years', context: 'Toddlers are curious and may insert objects (keys, forks, paper clips) into electrical outlets. Low-voltage household current (110-120V) can cause burns, muscle contractions, and potentially dangerous heart rhythms. After an electrical shock: if there are burns, cool them with lukewarm water. Even without visible burns, take your child to the ER for evaluation including an EKG (heart rhythm test). An electrical burn on the lip or corner of the mouth from biting a cord may not show full extent of injury for several days and needs close follow-up.' },
  ],
  whenNormal: ['There is no "wait and see" for electrical injuries - all should be medically evaluated'],
  whenToMention: ['All electrical injuries require emergency evaluation, not a routine office visit'],
  whenToActNow: ['Any electrical shock in a baby or toddler - go to the ER for evaluation', 'Your child is unresponsive after an electrical shock - call 911 and begin CPR if needed', 'Visible burns from electrical contact', 'Electrical burn on the lip or mouth from biting a cord', 'Your child was exposed to high voltage (240V+ or lightning)', 'Abnormal heart rhythm, muscle pain, or confusion after electrical contact'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-burn-treatment', 'baby-first-aid-kit-essentials', 'baby-cut-bleeding-wound'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Electrical Injuries. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Electrical-Injuries.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Childproofing Your Home. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Childproofing-Your-Home.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Electrical Injuries in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
