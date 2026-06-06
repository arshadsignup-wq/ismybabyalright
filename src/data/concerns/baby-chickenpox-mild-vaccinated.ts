import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-chickenpox-mild-vaccinated',
  title: 'Breakthrough Chickenpox in Vaccinated Child',
  category: 'skin',
  searchTerms: ['vaccinated baby chickenpox', 'breakthrough chickenpox child', 'mild chickenpox after vaccine', 'baby chickenpox vaccinated', 'chickenpox despite vaccine', 'varicella breakthrough', 'mild chickenpox baby', 'chickenpox vaccine didn\'t work', 'few chickenpox spots vaccinated', 'modified chickenpox vaccine'],
  quickAnswer: 'Breakthrough chickenpox can occur in vaccinated children but is typically very mild, with fewer than 50 lesions, lower fever, and faster recovery compared to unvaccinated cases. The spots may not develop into the classic fluid-filled blisters and may look more like red bumps or mosquito bites. This is still contagious and your child should stay home until all spots have crusted.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies under 12 months are not yet vaccinated against chickenpox. If exposed, they may have some protection from maternal antibodies (if the mother had chickenpox or was vaccinated). If a young infant develops suspected chickenpox, contact your pediatrician promptly, as antiviral medication may be recommended.' },
    { ageRange: '3-6 months', context: 'Maternal antibody protection may begin to wane. Chickenpox in young infants can occasionally be more serious. If your baby is exposed to chickenpox and develops a rash with fever, contact your pediatrician for evaluation and possible antiviral treatment.' },
    { ageRange: '6-12 months', context: 'The first dose of varicella vaccine is given at 12 months, so infants in this age range are unvaccinated and susceptible. If exposed, contact your pediatrician, who may recommend post-exposure prophylaxis within 10 days of exposure. Watch for spots appearing 10 to 21 days after exposure.' },
    { ageRange: '12-24 months', context: 'After receiving the first varicella vaccine at 12 months, breakthrough chickenpox is possible but typically mild. Your child may develop only 10 to 30 spots that may not blister. Fever is usually low-grade or absent. Keep the child home until all lesions have crusted or, for atypical spots, until no new spots appear for 24 hours.' },
  ],
  whenNormal: ['A vaccinated child develops fewer than 50 spots with low-grade or no fever and recovers quickly', 'Spots that look like red bumps or mosquito bites rather than classic chickenpox blisters'],
  whenToMention: ['You suspect chickenpox in your child and want confirmation', 'Your unvaccinated infant was exposed to chickenpox', 'The spots are spreading significantly or your child seems quite unwell'],
  whenToActNow: ['Chickenpox in a baby under 3 months or any immunocompromised child', 'High fever, lethargy, or the child appearing very ill with chickenpox', 'Spots that become very red, warm, swollen, and painful, suggesting secondary bacterial infection', 'Difficulty breathing, severe headache, or stiff neck during chickenpox'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Chickenpox (Varicella). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Chickenpox.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Chickenpox (Varicella).', url: 'https://www.cdc.gov/chickenpox/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Breakthrough Varicella. Pediatric Infectious Disease Journal.', url: 'https://pubmed.ncbi.nlm.nih.gov/18520973/' },
  ],
  relatedConcernSlugs: ['viral-rash-baby', 'baby-blister-rash-fluid-filled', 'baby-shingles-toddler'],
};
