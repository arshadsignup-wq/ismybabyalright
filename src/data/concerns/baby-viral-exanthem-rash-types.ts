import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-viral-exanthem-rash-types',
  title: 'Viral Rashes (Exanthems) in Babies: Types and Identification',
  category: 'skin',
  searchTerms: [
    'baby viral rash',
    'viral exanthem baby',
    'baby rash after virus',
    'types of viral rash baby',
    'baby rash with fever',
    'baby rash after cold',
    'widespread rash baby virus',
    'viral rash vs allergic rash baby',
    'baby pink rash all over body',
    'exanthem subitum baby',
  ],
  quickAnswer:
    'Viral exanthems (rashes caused by viruses) are extremely common in babies and young children. They often appear during or after a viral illness and typically present as widespread pink or red spots or patches. Common viral rashes include roseola (rash after fever breaks), hand-foot-and-mouth disease, fifth disease (slapped cheek rash), and nonspecific viral rashes. Most viral rashes are harmless and resolve on their own within a few days to a week without treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Viral rashes in young babies are less common due to maternal antibody protection but can occur. A widespread rash in a young infant with fever warrants medical evaluation to rule out more serious conditions. Common viral rashes at this age include nonspecific viral exanthems (diffuse pink spots that blanch with pressure). Roseola is uncommon before 6 months. If your baby under 3 months has a rash with fever, contact your pediatrician promptly, as fever in this age group always needs evaluation regardless of a rash.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is the peak age for viral rashes. Roseola (high fever for 3-5 days followed by a lacy pink rash as fever breaks) is very common between 6-24 months. Hand-foot-and-mouth disease causes blisters on the hands, feet, and mouth. Fifth disease (parvovirus B19) causes bright red "slapped cheeks" followed by a lacy body rash. Nonspecific viral exanthems can appear during any viral illness. Most of these rashes are not itchy and resolve without treatment. The rash itself usually means the illness is ending.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers continue to get frequent viral rashes, especially those in daycare. Measles rash (prevented by MMR vaccine) starts at the hairline and spreads downward with high fever, cough, and red eyes. Chickenpox (prevented by varicella vaccine) causes itchy blisters in crops. If your toddler is vaccinated, these are unlikely. To distinguish viral rashes from allergic reactions: viral rashes usually develop gradually with illness, while allergic rashes (hives) appear suddenly, are very itchy, and may have an identifiable trigger.',
    },
  ],
  whenNormal: [
    'A pink, flat rash appears during or after a mild viral illness and your baby seems to be feeling better.',
    'The rash blanches (turns white) when you press on it and is not painful.',
    'The rash resolves on its own within a few days without treatment.',
  ],
  whenToMention: [
    'You are unsure whether the rash is viral, allergic, or something else.',
    'The rash is accompanied by fever lasting more than 5 days.',
    'The rash is very itchy and causing your baby significant discomfort.',
  ],
  whenToActNow: [
    'The rash does not blanch with pressure (petechiae/purpura) - this could indicate a serious condition like meningococcemia.',
    'The rash is accompanied by high fever, stiff neck, severe headache, or your baby is very ill-appearing.',
    'Your baby has a rash with blistering, skin peeling, or involvement of the mouth and eyes (possible Stevens-Johnson syndrome).',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-roseola-high-fever-rash', 'hand-foot-mouth', 'hives', 'rash-after-antibiotics'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Common Childhood Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Common-Childhood-Rashes.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Rashes and Skin Conditions in Children.',
      url: 'https://www.cdc.gov/hand-foot-mouth/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Viral Exanthems. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001461.htm',
    },
  ],
};
