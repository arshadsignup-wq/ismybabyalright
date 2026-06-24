import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'chickenpox-clusters-children-2025',
  title: 'Chickenpox Outbreaks and Clusters in Children',
  category: 'medical',
  searchTerms: [
    'chickenpox outbreak children',
    'chickenpox clusters 2025',
    'varicella outbreak school',
    'chickenpox in vaccinated children',
    'breakthrough chickenpox',
    'chickenpox vaccine effectiveness',
    'chickenpox symptoms children',
    'chickenpox spreading daycare',
    'is chickenpox dangerous for babies',
    'chickenpox rash baby',
  ],
  quickAnswer:
    'Chickenpox (varicella) outbreaks continue to occur, particularly in communities with lower vaccination rates. While the varicella vaccine has reduced cases by over 90%, breakthrough infections can occur in vaccinated children, typically with milder symptoms. Chickenpox is most dangerous for infants under 12 months (who are too young for the vaccine), pregnant women, and immunocompromised individuals. Two doses of varicella vaccine remain the best protection.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies under 12 months cannot receive the varicella vaccine and are among the most vulnerable to severe chickenpox. Newborns whose mothers had chickenpox or were vaccinated before pregnancy may have some passive immunity from maternal antibodies, which wanes over the first few months. If your unvaccinated infant is exposed to chickenpox, contact your pediatrician immediately, as varicella-zoster immune globulin (VZIG) may be recommended within 96 hours of exposure to prevent or reduce severity.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The first dose of varicella vaccine is recommended at 12-15 months of age. After the first dose, the vaccine is about 80-85% effective at preventing all chickenpox and over 95% effective at preventing severe cases. If your vaccinated child is exposed, they may still develop a mild breakthrough case with fewer lesions, less fever, and faster recovery. Unvaccinated children in this age group are at significant risk during outbreaks.',
    },
    {
      ageRange: '2-5 years',
      context:
        'The second dose of varicella vaccine is typically given at 4-6 years of age. Between doses, children have good but not complete protection. Outbreaks in daycare and preschool settings can occur, especially when vaccination coverage drops below herd immunity thresholds. If your child develops chickenpox, keep them home until all lesions have crusted over (usually 5-7 days). Complications to watch for include bacterial skin infection, pneumonia, and encephalitis, though these are uncommon in healthy children.',
    },
  ],
  whenNormal: [
    'Your vaccinated child was exposed to chickenpox and develops no symptoms or a mild case with few spots.',
    'Your child has typical chickenpox with itchy blisters, low-grade fever, and tiredness that improves over 5-7 days.',
    'Your child had chickenpox, all lesions have crusted, and they are feeling better.',
  ],
  whenToMention: [
    'Your unvaccinated baby under 12 months has been exposed to chickenpox.',
    'Your child has more than 500 lesions, high fever lasting more than 4 days, or lesions that appear infected (red, swollen, warm).',
    'You are pregnant and have been exposed to chickenpox and are unsure of your immunity status.',
  ],
  whenToActNow: [
    'Your child has chickenpox and develops difficulty breathing, persistent vomiting, stiff neck, or severe lethargy.',
    'A newborn under 1 month develops chickenpox, as neonatal varicella can be life-threatening.',
    'Your child with chickenpox has spreading redness around lesions with streaking, warmth, and fever, suggesting bacterial superinfection.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['childhood-immunization-schedule-2026-changes', 'hives', 'hand-foot-mouth'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Chickenpox (Varicella). CDC, 2024.',
      url: 'https://www.cdc.gov/chickenpox/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Varicella-Zoster Infections. Red Book, 2024.',
      url: 'https://redbook.solutions.aap.org/chapter.aspx?sectionid=189640209',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Varicella and Herpes Zoster Vaccines: WHO Position Paper. WHO, 2014.',
      url: 'https://www.who.int/publications/i/item/who-wer-8925',
    },
  ],
};
