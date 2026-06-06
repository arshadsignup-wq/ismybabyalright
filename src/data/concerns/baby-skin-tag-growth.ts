import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-skin-tag-growth',
  title: 'Skin Tags on Baby',
  category: 'skin',
  searchTerms: ['baby skin tag', 'skin tag on baby', 'infant skin tag', 'baby preauricular skin tag', 'baby ear skin tag', 'baby extra skin growth', 'newborn skin tag ear', 'baby accessory tragus', 'baby skin tag near ear', 'toddler skin tag'],
  quickAnswer: 'Skin tags on babies are usually harmless small flaps of skin that are present from birth. Preauricular skin tags near the ear are the most common type and are found in about 1% of newborns. While they are cosmetically insignificant and do not cause pain, your pediatrician may recommend a hearing test and evaluation to rule out associated conditions.',
  byAge: [
    { ageRange: '0-3 months', context: 'Skin tags are usually noticed at birth or during the first newborn exam. Preauricular skin tags (near the ear) are the most common. Your pediatrician will examine the tag and may recommend a hearing screening, as ear tags can occasionally be associated with hearing differences or kidney variations. Most skin tags are isolated findings with no other issues.' },
    { ageRange: '3-6 months', context: 'Skin tags present at birth will remain stable and do not grow rapidly. They are not painful and do not need urgent treatment. If removal is desired for cosmetic reasons, your pediatrician may tie off small tags in the office or refer to a specialist for larger ones.' },
    { ageRange: '6-12 months', context: 'By this age, any recommended evaluations (like hearing tests or renal ultrasound for ear tags) should be completed. The skin tag itself is harmless and removal is elective. Some parents choose to leave them alone as they may become less noticeable as the child grows.' },
    { ageRange: '12-24 months', context: 'If a new skin growth appears in toddlerhood (as opposed to being present from birth), it should be evaluated by your pediatrician to determine what it is. New growths are more likely to be warts, molluscum, or other benign conditions rather than true congenital skin tags.' },
  ],
  whenNormal: ['A small, soft skin tag present from birth near the ear or elsewhere that is not changing', 'A skin tag that has been evaluated by your pediatrician and deemed benign', 'A stable skin tag that is not red, painful, or growing rapidly'],
  whenToMention: ['You notice a skin tag at birth and want it evaluated', 'A skin tag near the ear has not been assessed for associated hearing or kidney concerns', 'You are interested in discussing removal options'],
  whenToActNow: ['A skin tag or growth becomes red, swollen, painful, or appears to be infected', 'A new rapidly growing skin growth appears at any age that was not present at birth'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preauricular Skin Tags and Pits. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2013-3537/30825/' },
    { org: 'NIH', citation: 'National Library of Medicine. Preauricular Tags and Pits. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470348/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Newborn Skin Conditions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx' },
  ],
  relatedConcernSlugs: ['birthmarks'],
};
