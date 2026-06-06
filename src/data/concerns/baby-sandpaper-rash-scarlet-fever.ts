import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sandpaper-rash-scarlet-fever',
  title: 'Sandpaper Rash and Scarlet Fever in Baby',
  category: 'skin',
  searchTerms: [
    'baby sandpaper rash',
    'baby scarlet fever',
    'scarlet fever baby',
    'baby rash feels like sandpaper',
    'toddler scarlet fever rash',
    'strep rash baby',
    'scarlet fever toddler',
    'baby rough rash with fever',
    'baby sandpaper skin with sore throat',
    'scarlatina baby',
  ],
  quickAnswer:
    'A rash that feels like sandpaper, especially with fever and sore throat, may be scarlet fever (scarlatina). Scarlet fever is caused by group A streptococcus bacteria and is treatable with antibiotics. While the name sounds scary, it is essentially a strep throat infection with a rash and responds well to treatment. It is most common in children over 2 years old but can occasionally occur in younger children.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Scarlet fever is extremely rare in babies under 3 months because they still have some protective antibodies from their mother. If a newborn develops a widespread sandpaper-like rash with fever, other causes should be considered and the baby should be evaluated urgently.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Scarlet fever remains uncommon in this age group. However, if your baby develops a diffuse, rough-textured rash with fever, it is important to have them evaluated. Other conditions, such as viral rashes or drug reactions, are more likely at this age but should still be assessed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While still less common than in older children, scarlet fever can occur at this age. The rash typically starts on the trunk and spreads to the arms and legs, feeling rough like sandpaper. The skin creases (armpits, elbows, groin) may appear darker red. A strawberry tongue (red and bumpy) is another classic sign.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in group care settings are at higher risk for strep infections. Scarlet fever causes a sandpaper rash that blanches when pressed, along with fever, sore throat, and sometimes vomiting. After treatment with antibiotics, the skin may peel as it heals, particularly on the fingertips. Your child is no longer contagious after 24 hours on antibiotics.',
    },
  ],
  whenNormal: [
    'There is no truly "normal" version of scarlet fever, as it always requires antibiotic treatment to prevent complications',
  ],
  whenToMention: [
    'Your child develops a rash that feels like sandpaper, even without fever or sore throat',
    'Your child has been exposed to someone diagnosed with scarlet fever or strep throat',
    'Skin peeling occurs on the hands and feet after a recent illness',
  ],
  whenToActNow: [
    'Your child has a sandpaper rash with high fever and sore throat and should be seen the same day for a strep test and antibiotics',
    'Your child was diagnosed with scarlet fever but symptoms are worsening despite 48 hours on antibiotics',
    'Your child develops joint swelling, dark urine, or chest pain after a strep infection, which could indicate a post-strep complication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Scarlet Fever. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Scarlet-Fever.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Scarlet Fever: All You Need to Know.',
      url: 'https://www.cdc.gov/group-a-strep/diseases/scarlet-fever.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Scarlet Fever. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK507889/',
    },
  ],
  relatedConcernSlugs: ['baby-bumpy-skin-texture-rough', 'baby-rash-with-fever'],
};
