import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-epipen-when-to-use',
  title: 'When Should I Use the EpiPen on My Baby?',
  category: 'medical',
  searchTerms: [
    'when to use epipen baby',
    'epipen jr baby',
    'epinephrine auto injector baby',
    'how to give epipen infant',
    'epipen instructions baby',
    'when to give epinephrine baby',
    'baby allergic reaction epipen',
    'epipen too early or too late baby',
    'afraid to use epipen baby',
    'epipen side effects baby',
  ],
  quickAnswer:
    'Use the EpiPen (epinephrine auto-injector) immediately if your baby shows signs of anaphylaxis: involvement of two or more body systems (such as hives PLUS vomiting, or swelling PLUS difficulty breathing). When in doubt, USE IT. Epinephrine is safe and life-saving - the risk of not giving it during anaphylaxis is far greater than the risk of giving it unnecessarily. After using it, always call 911.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'EpiPen Jr (0.15 mg) is prescribed for infants weighing at least 7.5 kg (about 16.5 lbs), though allergists may prescribe it for smaller babies in specific situations. Inject into the outer mid-thigh, through clothing if needed. Hold firmly for 10 seconds. Even for very young babies, epinephrine is the only effective treatment for anaphylaxis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has a known severe allergy and you witness signs of anaphylaxis, do not hesitate. Many parents fear using the EpiPen, but delayed treatment is far more dangerous than giving epinephrine. Practice regularly with the trainer device so the action becomes automatic in an emergency.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby eats more foods, the chance of encountering an allergen increases. Always carry the EpiPen when outside the home. Store at room temperature (not in the car in extreme heat or cold). Check the expiration date monthly. After injecting, call 911 and keep your baby still and calm while waiting for help.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Ensure all caregivers know where the EpiPen is kept and how to use it. A common mistake is waiting too long to administer epinephrine. If your toddler has been exposed to a known allergen and develops ANY symptoms, give antihistamine for mild symptoms (hives only) but use the EpiPen immediately if symptoms involve breathing, swelling of tongue or throat, vomiting, or lethargy.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Your child should always have two EpiPens available. About 10-20% of anaphylactic reactions require a second dose. If symptoms return or worsen after the first dose, administer the second EpiPen and inform the 911 dispatcher. Begin teaching your child about their allergy in age-appropriate terms.',
    },
  ],
  whenNormal: [
    'Your baby has mild hives in one area only, without other symptoms - antihistamine may suffice',
    'Your baby touched but did not eat a known allergen and has no symptoms',
    'You used the EpiPen and your baby had temporary increased heart rate and tremor, which are expected effects of epinephrine',
  ],
  whenToMention: [
    'You want to review when to use the EpiPen versus when to use antihistamine alone',
    'Your EpiPen is approaching its expiration date and needs replacement',
    'You want hands-on training with the EpiPen trainer device',
  ],
  whenToActNow: [
    'USE THE EPIPEN NOW if your baby has: hives PLUS vomiting, facial/tongue swelling, difficulty breathing, wheezing, persistent coughing, or becomes limp/unresponsive after allergen exposure. Call 911 immediately after.',
    'If you have already used the EpiPen and symptoms are not improving within 5-10 minutes, use the second EpiPen and ensure emergency services are en route',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-anaphylaxis-emergency-plan',
    'baby-allergic-reaction-medicine',
    'baby-food-allergy-outgrowing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Epinephrine for Anaphylaxis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Epinephrine-Auto-Injectors.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy: Anaphylaxis.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/anaphylaxis',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Anaphylaxis: First aid.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-anaphylaxis/basics/art-20056608',
    },
  ],
};
