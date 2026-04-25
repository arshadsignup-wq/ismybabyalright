import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fifth-disease-rash',
  title: 'My Baby Has Fifth Disease (Slapped Cheek)',
  category: 'skin',
  searchTerms: [
    'fifth disease baby',
    'slapped cheek rash baby',
    'parvovirus B19 baby',
    'red cheeks baby rash',
    'erythema infectiosum baby',
    'lacy rash baby arms',
    'fifth disease toddler',
    'both cheeks red baby',
    'slapped face syndrome child',
    'fifth disease contagious',
  ],
  quickAnswer:
    'Fifth disease (also called "slapped cheek") is a common, mild childhood illness caused by parvovirus B19. Its hallmark is bright red cheeks that look as though your child has been slapped, followed by a lacy, pinkish rash on the body and limbs. By the time the rash appears, your child is no longer contagious and is generally feeling well.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Fifth disease is uncommon in babies under 6 months because they may still have some protection from maternal antibodies. If a very young infant develops the characteristic bright red cheeks and lacy body rash, it is worth seeing your pediatrician to confirm the diagnosis and rule out other causes of facial redness such as eczema or an allergic reaction. Fifth disease is generally mild and self-limiting even in young infants.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range can catch fifth disease, especially if they are in daycare. The illness often begins with mild cold symptoms, low-grade fever, and fussiness for a week before the rash appears. The bright red "slapped cheek" rash on both cheeks is the classic first sign parents notice. A few days later, a lacy or net-like pink rash may appear on the arms, legs, and trunk. The rash can come and go for several weeks, often reappearing after warm baths or sun exposure.',
    },
    {
      ageRange: '1-2 years',
      context:
        'This is a common age to contract fifth disease. Toddlers may have very mild cold-like symptoms before the rash, or the rash may be the only sign of illness. The body rash can look alarming with its lace-like pattern, but it is not itchy for most children and does not require treatment. Your child is contagious before the rash appears but is no longer contagious once the rash shows up, so they can return to daycare.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers with fifth disease may have joint aches alongside the rash, though this is more common in older children and adults. The rash can fluctuate for up to 3 weeks, fading and then reappearing with heat, sun exposure, or physical activity. This waxing and waning pattern is completely normal and does not mean the infection is getting worse. No specific treatment is needed; just keep your child comfortable.',
    },
  ],
  whenNormal: [
    'Bright red rash on both cheeks (the "slapped cheek" look) in an otherwise well child',
    'A lacy, pink, net-like rash on the trunk, arms, and legs that comes and goes over days to weeks',
    'Mild cold symptoms or low-grade fever before the rash appeared',
    'The rash reappearing after a warm bath, time in the sun, or physical activity',
  ],
  whenToMention: [
    'Your child seems more unwell than expected, with persistent joint pain or swelling',
    'Your child has a known blood disorder such as sickle cell disease or spherocytosis, as parvovirus B19 can cause a temporary drop in red blood cell production',
    'You are pregnant and your child has been diagnosed with fifth disease, as parvovirus B19 can pose risks during pregnancy',
  ],
  whenToActNow: [
    'Your child appears very pale, extremely fatigued, or is having difficulty breathing, which could indicate severe anemia, especially in children with underlying blood conditions',
    'Your child has a weakened immune system due to medical treatment or illness and develops signs of fifth disease',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fifth Disease (Parvovirus B19). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Fifth-Disease.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Parvovirus B19 and Fifth Disease.',
      url: 'https://www.cdc.gov/parvovirusb19/index.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Parvovirus Infection. Symptoms & Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/parvovirus-infection/symptoms-causes/syc-20376085',
    },
  ],
};
