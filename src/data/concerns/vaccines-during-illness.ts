import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaccines-during-illness',
  title: 'Can My Baby Get Vaccinated While Sick?',
  category: 'medical',
  searchTerms: [
    'can baby get vaccine with cold',
    'vaccinate sick baby',
    'baby has fever vaccine appointment',
    'shots while baby has runny nose',
    'delay vaccine for cold',
    'can sick baby get immunized',
    'mild illness vaccination baby',
    'vaccine while on antibiotics baby',
    'toddler sick vaccine appointment',
  ],
  quickAnswer:
    'In most cases, babies and toddlers with mild illnesses such as a cold, low-grade fever, ear infection, or mild diarrhea can safely receive their scheduled vaccines. Delaying vaccination for minor illness leaves your child unprotected longer without any medical benefit. However, children with moderate to severe illness and high fever should generally wait until they have improved before receiving vaccines.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants with mild symptoms like a runny nose or slight fussiness can still receive their 2-month vaccines. Research shows that vaccines work just as well and are just as safe when given during a mild illness. If your baby has a fever above 101°F (38.3°C) or seems significantly unwell, your pediatrician may recommend rescheduling to a time when symptoms have improved.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies in this age range frequently have mild viral infections, especially if they have older siblings. Waiting for a completely symptom-free window to vaccinate could mean significant delays. The AAP and CDC both recommend vaccinating through mild illness. Your pediatrician will examine your baby before administering vaccines and will advise you if postponing is warranted.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and socially active, colds become more frequent. A runny nose, mild cough, or low-grade fever should not delay vaccination. If your baby is currently on antibiotics for an ear infection or other bacterial illness but is improving, vaccines can generally still be given. The immune system is fully capable of responding to vaccines while fighting off a mild infection.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers catch frequent colds, so waiting for a perfectly healthy day to vaccinate can lead to significant delays. Mild illness does not reduce vaccine effectiveness or increase side effects. If your toddler has a moderate or severe illness with high fever or appears very unwell, your pediatrician may recommend waiting a few days until symptoms improve, then proceeding with the vaccines.',
    },
  ],
  whenNormal: [
    'Your pediatrician recommends proceeding with vaccines despite your baby having a runny nose or mild cough',
    'Your baby receives vaccines while taking antibiotics for a mild infection and is improving',
    'Your baby has slightly looser stools or mild fussiness and still receives scheduled vaccines',
    'Mild vaccine side effects like low-grade fever occur on top of existing cold symptoms and resolve within a day or two',
  ],
  whenToMention: [
    'Your baby has a fever above 101°F (38.3°C) on the day of the vaccine appointment',
    'Your baby seems significantly more unwell than a typical cold -- very lethargic, not feeding, or unusually irritable',
    'Your child is currently taking immunosuppressive medication or has a known immune deficiency',
    'You are unsure whether your baby is well enough to be vaccinated and want guidance',
  ],
  whenToActNow: [
    'Your baby has a high fever above 104°F (40°C), difficulty breathing, or signs of dehydration regardless of whether vaccines are due -- seek medical attention for the illness itself',
    'Your baby develops an unexpected severe reaction after being vaccinated while mildly ill, such as persistent inconsolable crying, high fever, or signs of allergic reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vaccine Recommendations and Guidelines: Conditions Commonly Misperceived as Contraindications to Vaccination.',
      url: 'https://www.cdc.gov/vaccines/hcp/acip-recs/general-recs/contraindications.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Child\'s Vaccines on Schedule. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Getting-Your-Childs-Vaccines-on-Schedule.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Effects of Intercurrent Illness on the Immune Response to Vaccination. Vaccine, 2010.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20620168/',
    },
  ],
};
