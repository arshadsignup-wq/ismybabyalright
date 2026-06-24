import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'covid-vaccine-infant-recommendation-changes',
  title: 'COVID-19 Vaccine Recommendations for Infants: Updates',
  category: 'medical',
  searchTerms: [
    'COVID vaccine baby',
    'COVID vaccine infant',
    'baby COVID vaccination',
    'COVID-19 vaccine under 5',
    'COVID vaccine safe for babies',
    'infant COVID shot',
    'COVID booster baby',
    'updated COVID vaccine children',
    'COVID vaccine recommendation changes infant',
    'when can baby get COVID vaccine',
  ],
  quickAnswer:
    'COVID-19 vaccines have been authorized for children as young as 6 months. Recommendations are updated regularly as new variants emerge and new vaccine formulations are developed. The CDC and AAP recommend that all eligible children receive the most current COVID-19 vaccine to help protect against severe illness and hospitalization. The vaccine schedule for young children may differ from adults. Always consult your pediatrician for the most current guidance.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months are not eligible for COVID-19 vaccination. Protection for this age group comes from maternal vaccination during pregnancy (which passes antibodies to the baby) and from surrounding the infant with vaccinated caregivers. Breastfeeding may also provide some COVID antibodies. If your baby under 6 months is exposed to COVID-19, watch for symptoms including fever, difficulty breathing, poor feeding, and excessive sleepiness, and contact your pediatrician.',
    },
    {
      ageRange: '6-24 months',
      context:
        'COVID-19 vaccines are authorized for children starting at 6 months of age. The dosing schedule may involve 2-3 doses depending on the vaccine product and the child\'s vaccination history. Updated formulations targeting the most current circulating variants are released periodically. Common side effects include irritability, sleepiness, injection site tenderness, and low-grade fever. Serious side effects are extremely rare. Your pediatrician can recommend the current vaccine and schedule.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Children in this age group continue to be eligible for COVID-19 vaccination with age-appropriate doses. Booster or updated doses may be recommended based on the evolving variant landscape. Children with underlying conditions (heart disease, lung disease, immunocompromise, obesity) are at higher risk for severe COVID and should be prioritized for vaccination. Even healthy children benefit from vaccination to reduce risk of hospitalization and multisystem inflammatory syndrome in children (MIS-C).',
    },
  ],
  whenNormal: [
    'Your child receives the recommended COVID-19 vaccine and has mild side effects like fussiness, low fever, or injection site soreness that resolves within 1-2 days.',
    'Your child had COVID-19 and recovered fully -- vaccination is still recommended after recovery.',
    'You are staying up to date with your pediatrician on the latest vaccine recommendations for your child.',
  ],
  whenToMention: [
    'You are unsure whether your child is up to date on COVID-19 vaccinations.',
    'Your child has a medical condition and you want to discuss the risks and benefits of COVID-19 vaccination.',
    'Your child had COVID-19 and you want guidance on optimal timing for vaccination.',
  ],
  whenToActNow: [
    'Your child develops a severe allergic reaction (difficulty breathing, facial swelling, widespread hives) after receiving a COVID-19 vaccine -- seek emergency care.',
    'Your infant under 3 months develops fever or respiratory symptoms consistent with COVID-19.',
    'Your child develops symptoms of MIS-C: persistent fever, abdominal pain, vomiting, rash, red eyes, or swollen hands and feet several weeks after a COVID-19 infection.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['childhood-immunization-schedule-2026-changes', 'persistent-fever-baby', 'clesrovimab-new-rsv-prevention-infant'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. COVID-19 Vaccines for Children and Teens. CDC, 2024.',
      url: 'https://www.cdc.gov/covid/vaccines/children-teens.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. COVID-19 Vaccines in Children and Adolescents. Pediatrics.',
      url: 'https://www.aap.org/en/pages/2019-novel-coronavirus-covid-19-infections/covid-19-vaccine-for-children/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. COVID-19 Vaccines. WHO.',
      url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines',
    },
  ],
};
