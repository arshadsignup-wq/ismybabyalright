import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cut-bleeding-wound',
  title: 'Baby Has a Cut or Bleeding Wound',
  category: 'medical',
  searchTerms: ['baby cut', 'toddler bleeding', 'baby wound care', 'toddler cut first aid', 'baby laceration', 'baby bleeding won\'t stop', 'toddler needs stitches', 'baby cut on face', 'toddler deep cut', 'baby scrape wound'],
  quickAnswer: 'Minor cuts and scrapes are a normal part of childhood. For most small cuts: apply gentle pressure with a clean cloth for 5-10 minutes to stop the bleeding, clean the wound with lukewarm water, apply antibiotic ointment, and cover with a bandage. Most minor cuts heal well without stitches. A cut may need stitches (or skin glue) if it is deeper than 1/4 inch, will not stop bleeding after 10 minutes of pressure, is gaping open, is on the face, or was caused by a dirty or rusty object. If stitches are needed, they work best when placed within 6-8 hours of the injury.',
  byAge: [
    { ageRange: '0-12 months', context: 'Baby skin is delicate and can be cut by sharp nails (their own or a sibling\'s), toys, or household items. For minor cuts: clean gently with lukewarm water, apply a small amount of antibiotic ointment (like bacitracin), and cover with a bandage if the baby will not pull it off. Watch for signs of infection over the next few days: increasing redness, swelling, warmth, pus, or red streaks. Any cut on a baby under 3 months or any deep cut on a baby should be seen by a doctor promptly.' },
    { ageRange: '1-3 years', context: 'Toddlers get cuts from falls, sharp furniture edges, kitchen items, and outdoor play. Most cuts can be managed at home with basic first aid. For cuts that are bleeding: apply firm, direct pressure with a clean cloth for 10 minutes without peeking. Once bleeding stops, clean with water (not hydrogen peroxide, which damages healing tissue), apply antibiotic ointment, and bandage. Change the bandage daily. A cut may need medical attention if it is deep, gaping, on the face (where scarring matters), was caused by an animal bite, or if your child\'s tetanus vaccination is not up to date.' },
  ],
  whenNormal: ['A small superficial cut or scrape that stops bleeding within 5-10 minutes', 'Mild redness around a healing cut for the first 1-2 days', 'A scab forming and healing naturally over 1-2 weeks'],
  whenToMention: ['A cut that needed home first aid and you want to confirm it is healing properly', 'You are unsure if a cut needs stitches', 'Your child has not had their tetanus vaccination and gets a cut from a dirty or rusty object', 'A cut is not healing well after a week'],
  whenToActNow: ['Bleeding that does not stop after 10-15 minutes of firm, direct pressure', 'A deep cut that is gaping open (likely needs stitches or skin glue)', 'A cut on the face that may need repair for cosmetic reasons', 'Signs of wound infection: increasing redness, swelling, warmth, pus, red streaks, or fever', 'A cut from an animal or human bite', 'A puncture wound from a nail or sharp object'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-bruise-that-wont-go-away', 'baby-fell-down-stairs', 'baby-first-aid-kit-essentials', 'baby-animal-bite'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cuts, Scrapes, and Stitches. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Cuts-Scrapes-and-Stitches.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Wound Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Wound Management in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
