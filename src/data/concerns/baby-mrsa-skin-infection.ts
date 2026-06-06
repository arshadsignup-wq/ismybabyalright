import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-mrsa-skin-infection',
  title: 'MRSA Skin Infection Concerns in Baby',
  category: 'skin',
  searchTerms: ['baby mrsa', 'mrsa baby skin', 'mrsa infection baby', 'baby staph mrsa', 'baby resistant staph infection', 'toddler mrsa', 'mrsa boil baby', 'baby mrsa treatment', 'community mrsa baby', 'baby recurrent staph infection mrsa'],
  quickAnswer: 'MRSA (methicillin-resistant Staphylococcus aureus) is a type of staph bacteria resistant to common antibiotics. It can cause skin infections like boils and abscesses. While the name sounds frightening, community-acquired MRSA skin infections are treatable with appropriate antibiotics. Good hygiene and wound care are key to prevention.',
  byAge: [
    { ageRange: '0-3 months', context: 'MRSA infections in newborns, while uncommon, can be serious. Young infants with any skin infection that looks like a boil, is not responding to treatment, or is worsening should be evaluated promptly. MRSA can be acquired during birth or from caregivers who carry the bacteria.' },
    { ageRange: '3-6 months', context: 'MRSA skin infections may appear as red, swollen, painful bumps that may look like spider bites or boils. They can develop quickly and may contain pus. If a skin infection is not improving with standard first-line antibiotics, your pediatrician may culture the wound and switch to antibiotics effective against MRSA.' },
    { ageRange: '6-12 months', context: 'As babies interact more with others and surfaces, MRSA exposure increases, especially in daycare settings. Good hand hygiene, keeping wounds clean and covered, and not sharing personal items help reduce risk. If your baby develops a boil or abscess, mention any known MRSA exposure to your pediatrician.' },
    { ageRange: '12-24 months', context: 'Toddlers with recurrent boils or skin abscesses should be evaluated for MRSA carriage. Decolonization protocols involving bleach baths, nasal mupirocin ointment, and meticulous hygiene can reduce recurrence. All family members may need to be treated to prevent passing the bacteria back and forth.' },
  ],
  whenNormal: ['Not all staph infections are MRSA; most skin infections respond well to standard antibiotics', 'A minor skin infection that resolves completely with prescribed antibiotics'],
  whenToMention: ['A skin infection is not improving after 48 to 72 hours on antibiotics', 'Your baby has recurrent boils or skin abscesses', 'There is a known MRSA exposure in your household, daycare, or community', 'You want to discuss MRSA prevention strategies'],
  whenToActNow: ['A skin infection in a young infant that is rapidly worsening', 'A large, painful abscess with fever, especially in a baby under 3 months', 'Red streaks spreading from an infection site, signs of the infection entering the bloodstream'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. MRSA Information for Patients.', url: 'https://www.cdc.gov/mrsa/community/index.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. MRSA Infections in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/MRSA-Infection.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Community-Associated MRSA in Children. Pediatrics.', url: 'https://pubmed.ncbi.nlm.nih.gov/16651293/' },
  ],
  relatedConcernSlugs: ['baby-skin-infection-staph', 'baby-skin-abscess-boil', 'baby-cellulitis-spreading-redness'],
};
