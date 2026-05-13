import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hepatitis-b-vaccine-newborn',
  title: 'Hepatitis B Vaccine at Birth',
  category: 'medical',
  searchTerms: [
    'hepatitis b vaccine newborn',
    'why hep b at birth',
    'hep b vaccine baby',
    'is hep b vaccine necessary for newborn',
    'hepatitis b shot at birth',
    'delaying hep b vaccine',
    'newborn hep b side effects',
    'hepatitis b vaccine safety baby',
  ],
  quickAnswer:
    'The hepatitis B vaccine is given within 24 hours of birth because the virus can cause chronic, lifelong liver infection in up to 90% of infected infants. Babies can be exposed through undetected maternal infection or household contacts, and the virus can survive outside the body for days. Early vaccination provides a critical safety net, starting protection from the very first day of life.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The first dose is given at birth, ideally within 24 hours. This is particularly important because hepatitis B screening during pregnancy, while standard, can occasionally miss infections acquired late in pregnancy. If an infant contracts hepatitis B at birth, there is a 90% chance it will become a chronic, lifelong infection that can lead to liver cancer or liver failure. The birth dose begins building protection immediately.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The second dose of the hepatitis B vaccine is typically given at 1 month of age, and the third dose is given at 6 months. Completing the full three-dose series provides long-lasting immunity in over 95% of infants. If any doses were missed or delayed, your pediatrician can help you get back on schedule without needing to restart the series.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, most babies have completed the full hepatitis B vaccine series. Studies show that the immunity provided by completing the series in infancy is highly durable, with protection lasting decades. If your baby\'s series is not yet complete by this age, it is important to finish the remaining doses as soon as possible.',
    },
  ],
  whenNormal: [
    'Mild soreness, redness, or a small lump at the injection site on the thigh',
    'A low-grade fever or slight fussiness for a day after the injection',
    'Your newborn sleeps a bit more than usual on the day of the vaccine',
    'The injection site looks slightly swollen but improves within a few days',
  ],
  whenToMention: [
    'You have questions about why the hepatitis B vaccine is recommended at birth rather than later',
    'Your baby was premature or had a low birth weight and you want to know if the timing changes',
    'You are concerned about giving a vaccine so soon after birth and want to discuss the evidence with your provider',
  ],
  whenToActNow: [
    'Your newborn develops signs of a severe allergic reaction such as difficulty breathing, widespread hives, or swelling of the face within hours of the vaccine -- seek emergency care immediately',
    'Your baby becomes unusually limp, unresponsive, or has persistent high-pitched crying that you cannot soothe after vaccination',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hepatitis B. In: Red Book: 2021-2024 Report of the Committee on Infectious Diseases.',
      url: 'https://publications.aap.org/redbook',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hepatitis B Vaccination of Infants, Children, and Adolescents.',
      url: 'https://www.cdc.gov/hepatitis/hbv/vaccchildren.htm',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Hepatitis B Vaccines: WHO Position Paper. Weekly Epidemiological Record, 2017.',
      url: 'https://www.who.int/publications/i/item/WER9227',
    },
  ],
};
