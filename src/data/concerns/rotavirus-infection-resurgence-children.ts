import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rotavirus-infection-resurgence-children',
  title: 'Rotavirus Resurgence in Children: What Parents Need to Know',
  category: 'medical',
  searchTerms: [
    'rotavirus resurgence children',
    'rotavirus coming back',
    'rotavirus outbreak',
    'rotavirus vaccine decline',
    'rotavirus cases increasing',
    'rotavirus unvaccinated children',
    'rotavirus diarrhea return',
    'rotavirus season',
    'rotavirus hospitalization increase',
    'rotavirus epidemic children',
  ],
  quickAnswer:
    'Rotavirus, once the leading cause of severe diarrhea in young children, was dramatically reduced after the introduction of vaccines in 2006. However, declining vaccination rates in some communities have led to localized resurgences. Rotavirus causes severe watery diarrhea, vomiting, fever, and abdominal pain, and can rapidly lead to dangerous dehydration in infants and toddlers. The oral rotavirus vaccine, given at 2, 4, and sometimes 6 months, remains the most effective prevention.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The rotavirus vaccine series begins at 2 months of age, with the first dose needing to be given before 15 weeks of age. This is a strict deadline because giving the vaccine later increases the risk of intussusception, a rare but serious bowel complication. The vaccine is given orally (by mouth), not by injection. Before the series is complete, your baby remains vulnerable to infection. If your baby develops severe watery diarrhea, watch closely for dehydration: fewer wet diapers, dry mouth, crying without tears, and sunken fontanelle.',
    },
    {
      ageRange: '6-24 months',
      context:
        'Even after completing the vaccine series, some children can still get rotavirus, but the illness is typically much milder and rarely requires hospitalization. Unvaccinated children in this age group are at the highest risk for severe disease and dehydration. Rotavirus is extremely contagious and spreads through the fecal-oral route. It can survive on surfaces for extended periods and is resistant to many common hand sanitizers. Handwashing with soap and water is more effective than alcohol-based sanitizers against rotavirus.',
    },
    {
      ageRange: '2-5 years',
      context:
        'By this age, most children have either been vaccinated or have acquired natural immunity from exposure. However, in communities with low vaccination rates, outbreaks can affect even older children. Childcare settings are common sites for rotavirus transmission. If your child develops severe watery diarrhea lasting more than a day or two, oral rehydration solutions (like Pedialyte) are the first-line treatment. The illness typically lasts 3-8 days, and the biggest danger is dehydration rather than the infection itself.',
    },
  ],
  whenNormal: [
    'Your child has mild diarrhea for a day or two but is drinking well and making regular wet diapers',
    'A mild stomach bug that resolves within a few days with supportive care',
    'Your vaccinated child gets a mild case of rotavirus that does not require medical intervention',
  ],
  whenToMention: [
    'Your child has watery diarrhea lasting more than 3 days',
    'Your child is drinking less than half their normal fluid intake',
    'Your child has a fever over 102 degrees Fahrenheit (39 degrees Celsius) with diarrhea',
    'You are unsure whether your child has completed the rotavirus vaccine series',
  ],
  whenToActNow: [
    'Your baby or child shows signs of severe dehydration: no wet diapers for 8+ hours, no tears when crying, sunken eyes or fontanelle, extreme lethargy',
    'Your child has bloody diarrhea or severe abdominal pain with vomiting',
    'Your infant under 3 months has any diarrhea with fever',
    'Your child is unable to keep any fluids down for more than a few hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'rotavirus-signs',
    'oral-rehydration-baby',
    'persistent-fever-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Rotavirus Vaccination. CDC, 2024.',
      url: 'https://www.cdc.gov/rotavirus/vaccination.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rotavirus. Red Book Online, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Rotavirus.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Rotavirus Vaccines: WHO Position Paper. WHO, 2021.',
      url: 'https://www.who.int/publications/i/item/WHO-WER9628',
    },
  ],
};
