import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hair-tourniquet',
  title: 'Hair Tourniquet on Baby\'s Finger, Toe, or Penis',
  category: 'medical',
  searchTerms: ['baby hair tourniquet', 'baby hair wrapped around finger', 'baby hair around toe', 'baby thread tourniquet', 'baby swollen toe hair', 'baby hair tourniquet treatment', 'baby string around finger', 'hair tourniquet syndrome', 'baby hair on toe cutting', 'baby toe hair strand'],
  quickAnswer: 'A hair tourniquet occurs when a strand of hair or thread wraps tightly around a baby\'s finger, toe, or (in boys) penis, acting like a tourniquet that cuts off blood flow. It is more common than many parents realize and can cause serious tissue damage if not promptly removed. The affected digit becomes swollen, red, and painful, and the baby will cry inconsolably. The hair may be nearly invisible because swelling can hide it. This is a medical emergency if the digit is turning blue or white. Check all digits carefully whenever your baby is crying inconsolably with no apparent cause.',
  byAge: [
    { ageRange: '0-12 months', context: 'Hair tourniquets are most common in babies under 6 months, coinciding with postpartum hair shedding (telogen effluvium), when mothers naturally lose more hair than usual. Loose hairs can wrap around tiny digits inside socks, mittens, or footie pajamas. Always check inside socks and sleepers for loose hairs before dressing your baby. If your baby is crying inconsolably: check all fingers, toes, and the genitals carefully for any wrapped hair or thread. The hair may be embedded in a deep groove of swollen skin and hard to see. If you find a hair tourniquet, try to gently unwrap it or carefully cut it with small scissors. If you cannot remove it, go to the emergency room immediately.' },
    { ageRange: '1-3 years', context: 'Hair tourniquets are less common in toddlers but can still occur. A toddler may be able to point to or indicate the painful digit. Look carefully for a fine hair or thread at the base of any swollen, red digit. If the hair has been there for a while, it may have cut into the skin and be difficult to see. If you cannot remove it easily, seek medical care promptly. Some parents use hair removal cream (depilatory cream) to dissolve the hair, but this should be done carefully and is not appropriate for genital tourniquets - seek professional help for those.' },
  ],
  whenNormal: ['A loose hair found on a finger or toe that has not caused swelling (simply remove it)'],
  whenToMention: ['You removed a hair tourniquet and want to confirm the circulation has returned to normal', 'The digit was swollen for more than a brief period and you want it checked'],
  whenToActNow: ['A finger, toe, or penis is swollen, red, and you can see or suspect a wrapped hair', 'The affected digit is turning blue, white, or purple (circulation is compromised - emergency)', 'You cannot remove the hair yourself', 'The baby is crying inconsolably and you cannot identify the cause - check all digits and genitals', 'The hair has cut into the skin and you cannot access it'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swollen-finger-toe', 'baby-crying-inconsolably', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hair Tourniquet Syndrome. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Hair Tourniquet Syndrome. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK482238/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. When to Call the Doctor. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/default.aspx' },
  ],
};
