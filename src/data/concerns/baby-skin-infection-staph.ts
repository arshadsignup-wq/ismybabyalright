import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-skin-infection-staph',
  title: 'Staph Skin Infection in Baby or Toddler',
  category: 'skin',
  searchTerms: ['staph infection baby', 'MRSA baby', 'baby skin infection', 'baby boil abscess', 'baby infected cut', 'toddler staph infection', 'baby pus-filled bump', 'baby skin infection spreading', 'baby infected bug bite', 'toddler staph skin'],
  quickAnswer: 'Staphylococcus (staph) is a common bacteria that lives on the skin and can cause infections when it enters through a break in the skin (cut, scratch, bug bite, or eczema patch). In babies, staph infections often appear as red, swollen, warm areas that may develop pus, boils, or honey-colored crusting (impetigo). Most minor staph infections respond well to treatment. However, staph infections can spread quickly in young children and some strains (MRSA) are resistant to common antibiotics, so prompt medical evaluation is important.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies are more vulnerable to staph infections because their immune systems are still developing and their skin barrier is thinner. Staph can enter through the umbilical stump, diaper area, or any small skin break. Impetigo (honey-colored crusty patches), boils, and infected eczema patches are common presentations. Any skin infection in a baby under 3 months needs prompt medical attention, as young infants can become seriously ill quickly from bacterial infections.' },
    { ageRange: '1-3 years', context: 'Toddlers frequently get minor cuts, scrapes, and bug bites that can become infected with staph bacteria. Signs of staph infection include increasing redness around a wound, warmth, swelling, pus, and pain. Impetigo (contagious patches with honey-colored crusting) spreads easily in daycare settings. Keep infected areas covered, wash hands frequently, and do not share towels or personal items. Most staph skin infections are treated with topical or oral antibiotics prescribed by your pediatrician.' },
  ],
  whenNormal: ['Mild redness around a healing cut or scrape that improves over a few days', 'A small pimple-like bump that resolves on its own', 'Minor skin irritation in the diaper area from moisture'],
  whenToMention: ['A cut, scrape, or bug bite that is becoming more red, swollen, or painful instead of healing', 'A pus-filled bump or boil that is growing', 'Honey-colored crusting on the skin (possible impetigo)', 'A skin infection that has not improved after starting prescribed antibiotics for 48 hours'],
  whenToActNow: ['A skin infection in a baby under 3 months old', 'Rapidly spreading redness or red streaks extending from an infected area', 'Fever along with a skin infection', 'A large, painful abscess that needs drainage', 'Your child appears ill, lethargic, or is refusing to eat along with a skin infection'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['impetigo-baby', 'eczema', 'cellulitis-baby', 'insect-bites-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Staph Infections. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Staph-Infections.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Staphylococcus aureus.', url: 'https://www.cdc.gov/staph-aureus/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. MRSA Infections. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/MRSA-Infection.aspx' },
  ],
};
