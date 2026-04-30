import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bee-wasp-sting',
  title: 'Bee or Wasp Sting on Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby bee sting', 'toddler wasp sting', 'baby stung by bee', 'toddler bee sting treatment', 'baby allergic to bee sting', 'toddler bee sting swelling', 'baby insect sting', 'toddler wasp sting swelling', 'bee sting baby first aid', 'baby hornet sting'],
  quickAnswer: 'Most bee and wasp stings cause temporary pain, redness, and swelling at the sting site that resolves within a few hours to a day. For a normal sting reaction: remove the stinger if visible (scrape it off with a credit card - do not squeeze with tweezers), wash the area, apply a cold compress, and give age-appropriate acetaminophen or ibuprofen for pain. A large local reaction (significant swelling around the sting site) is uncomfortable but not dangerous. However, watch closely for signs of a severe allergic reaction (anaphylaxis): difficulty breathing, facial swelling, widespread hives, vomiting, or dizziness, which requires calling 911 immediately.',
  byAge: [
    { ageRange: '0-12 months', context: 'A first bee or wasp sting is unlikely to cause a severe allergic reaction, since allergic reactions typically develop after a prior exposure that sensitized the immune system. However, the pain from a sting can be very distressing for a baby. Remove the stinger if present (scrape sideways with a flat edge), clean the area, and apply a cool compress. You can give infant acetaminophen for pain relief. Watch for: increasing swelling beyond the immediate sting area, difficulty breathing, excessive fussiness, or widespread hives. Call your pediatrician for guidance, especially for stings on the face, mouth, or throat.' },
    { ageRange: '1-3 years', context: 'Toddlers are more likely to encounter bees and wasps during outdoor play. A normal sting reaction includes pain, redness, and mild swelling at the site. A large local reaction (swelling that extends significantly from the sting site, such as an arm sting causing the whole forearm to swell) is uncomfortable but not life-threatening. An antihistamine (like diphenhydramine/Benadryl, if age-appropriate) can help with itching and swelling. If your child has been stung before and had a large reaction, discuss with your pediatrician whether you need an epinephrine auto-injector. Multiple stings (5+) can be dangerous due to venom load regardless of allergy status.' },
  ],
  whenNormal: ['Pain, redness, and mild swelling at the sting site that improves within hours', 'A small white or red bump at the sting site', 'Itching at the sting site for 1-2 days'],
  whenToMention: ['A large local reaction (significant swelling extending from the sting site)', 'Your child has been stung multiple times in one incident', 'The sting site is not improving after a few days or seems infected', 'You want to discuss whether your child needs an epinephrine auto-injector after a previous sting reaction'],
  whenToActNow: ['Difficulty breathing, wheezing, or throat tightness after a sting (call 911 - possible anaphylaxis)', 'Widespread hives or rash beyond the sting site', 'Swelling of the face, lips, or tongue', 'Vomiting, dizziness, or loss of consciousness after a sting', 'A sting inside the mouth or throat (swelling could obstruct breathing)', 'Your child has a known insect venom allergy and was stung - use epinephrine auto-injector and call 911'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['insect-bites-baby', 'hives-baby', 'baby-tick-bite', 'baby-allergic-reaction-medicine'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Insect Stings. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Insect-Stings.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Anaphylaxis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Anaphylaxis.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Hymenoptera Stings in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
