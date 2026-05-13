import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaccine-schedule-explained',
  title: 'Why Vaccines Are Given at Specific Ages',
  category: 'medical',
  searchTerms: [
    'why so many vaccines at once',
    'vaccine schedule baby',
    'why vaccines so early',
    'baby immunization timeline',
    'too many vaccines at once',
    'why vaccinate at 2 months',
    'childhood vaccine schedule explained',
    'recommended vaccine schedule infant',
  ],
  quickAnswer:
    'The childhood vaccine schedule is carefully designed so that babies receive protection at the earliest age their immune system can respond effectively, and before they are most vulnerable to serious diseases. Each vaccine is timed based on decades of research into when maternal antibodies wane and when disease risk is highest. The schedule is continuously reviewed and updated by experts at the CDC and AAP to ensure the safest, most effective timing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns receive their first hepatitis B vaccine at birth because the virus can cause severe liver damage in infants, and early vaccination provides critical protection. At 2 months, babies receive several vaccines because maternal antibodies begin to decline and their own immune system is mature enough to respond. This is also the age when vulnerability to diseases like whooping cough and bacterial meningitis increases significantly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies receive their second and third doses of several vaccines during this period. Multiple doses are needed because a single dose does not create full immunity in young infants. Each additional dose strengthens the immune response, building more robust and longer-lasting protection. Spacing between doses is determined by how long the immune system needs to develop a strong memory response.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, babies have received the primary series of many core vaccines. The flu vaccine is recommended starting at 6 months because younger babies cannot receive it, yet influenza can be very dangerous for infants. Some vaccines like the third dose of hepatitis B are completed during this window to ensure full protection before the child becomes more mobile and exposed to more environments.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Several new vaccines are introduced around the first birthday, including MMR, varicella, and hepatitis A. These live vaccines work best when maternal antibodies have fully waned, which typically happens around 12 months. Booster doses of earlier vaccines are also given to reinforce the immune response and ensure long-lasting protection through the toddler years and beyond.',
    },
  ],
  whenNormal: [
    'Your baby receives multiple vaccines at a single well-child visit, which is safe and well-studied',
    'Mild fussiness, low-grade fever, or soreness at the injection site for 1-2 days after vaccination',
    'Your baby seems slightly sleepier than usual for a day after receiving vaccines',
    'A small, firm lump at the injection site that resolves over a few weeks',
  ],
  whenToMention: [
    'You have questions about the recommended schedule and want to understand the reasoning behind specific timing',
    'Your baby was premature and you are unsure whether the same schedule applies',
    'You are concerned about the number of vaccines given at a single visit and want to discuss options with your pediatrician',
  ],
  whenToActNow: [
    'Your baby develops a high fever above 104°F (40°C), inconsolable crying lasting more than 3 hours, or signs of a severe allergic reaction such as facial swelling, difficulty breathing, or widespread hives within hours of vaccination',
    'Your baby becomes limp, unresponsive, or has a seizure after receiving vaccines',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Recommended Child and Adolescent Immunization Schedule for Ages 18 Years or Younger.',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Immunization Schedules. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Recommended-Immunization-Schedules.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Vaccines and Immunization: What Is Vaccination?',
      url: 'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination',
    },
  ],
};
