import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-first-aid-kit-essentials',
  title: 'Essential First Aid Kit for Baby and Toddler',
  category: 'medical',
  searchTerms: ['baby first aid kit', 'toddler first aid kit', 'baby medicine cabinet', 'baby first aid essentials', 'toddler first aid supplies', 'baby emergency kit', 'what to have for baby emergencies', 'baby medicine list', 'toddler first aid checklist', 'baby medicine cabinet essentials'],
  quickAnswer: 'Every family with a baby or toddler should have a well-stocked first aid kit. Essential items include: a digital rectal thermometer (most accurate for babies), infant acetaminophen (Tylenol), infant ibuprofen (for 6 months+), saline nasal drops, a nasal aspirator/NoseFrida, antibiotic ointment (bacitracin), petroleum jelly, hydrocortisone cream (1%), adhesive bandages, gauze and medical tape, a dosing syringe (not a kitchen spoon), Poison Control number (1-800-222-1222), and your pediatrician\'s after-hours number. Keep medications locked away from children and check expiration dates regularly.',
  byAge: [
    { ageRange: '0-12 months', context: 'Your baby first aid kit should include: rectal thermometer with petroleum jelly for lubrication, infant acetaminophen (for babies 2 months+, weight-based dosing), saline nasal drops and a bulb syringe or NoseFrida, antibiotic ointment for minor cuts, diaper rash cream (zinc oxide), gas relief drops (simethicone), oral rehydration solution (Pedialyte, for use under pediatrician guidance), nail clippers or file, and a copy of your pediatrician\'s number and Poison Control (1-800-222-1222). Do NOT include: ibuprofen (not until 6 months), honey (not until 12 months), or aspirin (never for children).' },
    { ageRange: '1-3 years', context: 'In addition to the infant kit items, add: children\'s ibuprofen (Motrin/Advil), children\'s antihistamine (diphenhydramine for allergic reactions, with pediatrician-approved dosing), tweezers (for splinters and ticks), an instant cold pack, elastic bandage (for sprains), sunscreen (SPF 30+ mineral), insect repellent with DEET (for children over 2 months), oral rehydration solution (Pedialyte), a flashlight (for checking throat, ears, and ticks), and a basic first aid guide. For travel, create a portable version of your kit. Store all medications in a locked cabinet out of reach of children.' },
  ],
  whenNormal: ['Having a well-stocked first aid kit and rarely needing to use it'],
  whenToMention: ['You want guidance on age-appropriate medication dosing for your child', 'You are unsure which over-the-counter products are safe for your child\'s age', 'You want to review your first aid kit contents with your pediatrician'],
  whenToActNow: ['Any emergency - call 911', 'Any potential poisoning - call Poison Control at 1-800-222-1222', 'Choking - perform age-appropriate choking first aid (back blows for infants, abdominal thrusts for children over 1)', 'Severe allergic reaction - use epinephrine auto-injector if prescribed and call 911', 'Severe bleeding, burns, head injuries, or breathing difficulties - call 911'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-ibuprofen-dosing-safety', 'baby-burn-treatment', 'baby-cut-bleeding-wound', 'baby-choking-on-liquids'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. First Aid Kit. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/First-Aid-Kit-for-the-Car.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Medicine Cabinet Essentials. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Medications-in-Your-Home.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Poison Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx' },
  ],
};
