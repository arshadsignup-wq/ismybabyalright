import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-after-surgery',
  title: 'My Baby Has a Fever After Surgery',
  category: 'medical',
  searchTerms: [
    'baby fever after surgery',
    'post surgery fever baby',
    'baby temperature after operation',
    'post operative fever infant',
    'fever after anesthesia baby',
    'baby fever after procedure',
    'surgical fever baby normal',
    'when to worry about fever after surgery baby',
    'baby fever day after surgery',
    'postoperative infection signs baby',
  ],
  quickAnswer:
    'A low-grade fever in the first 24-48 hours after surgery is common and usually caused by the body\'s normal inflammatory response to the procedure, not infection. However, a fever that develops 3 or more days after surgery, a high fever above 101.5°F (38.6°C), or a fever accompanied by redness, swelling, or drainage at the incision site may indicate infection and should be reported to your surgeon.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any fever in a very young baby after surgery should be reported to the surgical team promptly. Because young infants have immature immune systems, distinguishing between a benign post-surgical inflammatory response and true infection is critical. Follow your surgeon\'s specific discharge instructions regarding temperature monitoring.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A mild temperature elevation within 24 hours of surgery is common. Monitor the temperature every 4-6 hours as directed by your surgical team. Watch the incision site for signs of infection: increasing redness, warmth, swelling, or any discharge. Ensure your baby is feeding adequately and producing wet diapers.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Post-surgical fever in this age group follows the same pattern: mild fever in the first 24-48 hours is usually benign, while fever developing after 48-72 hours is more concerning for infection. Keep the surgical site clean and dry as instructed. If your baby is pulling at or touching the incision and developing fever, this needs evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may be more active after surgery, making it harder to keep them from touching or bumping the surgical site. A post-operative fever combined with wound site changes warrants a call to your surgeon. Also watch for urinary tract infection if a catheter was used, which can cause fever.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can sometimes communicate that something hurts or feels different at the surgical site. Trust their cues alongside temperature monitoring. A fever that develops after initially improving, especially 3-5 days after surgery, may indicate a wound infection or abscess and should be evaluated promptly.',
    },
  ],
  whenNormal: [
    'A low-grade fever (under 101°F) within the first 24-48 hours after surgery that resolves on its own',
    'Your baby\'s temperature returns to normal after a dose of approved fever-reducing medication',
    'The surgical incision looks clean without increasing redness, swelling, or discharge',
    'Your baby is feeding and producing wet diapers normally after the initial recovery period',
  ],
  whenToMention: [
    'A low-grade fever persists beyond 48 hours after surgery',
    'The incision site appears slightly red or your baby seems more fussy than expected',
    'You are unsure whether a temperature reading is concerning in the post-surgical context',
  ],
  whenToActNow: [
    'Fever above 101.5°F (38.6°C) develops 3 or more days after surgery, or the incision site shows signs of infection including increasing redness, warmth, swelling, pus, or foul-smelling drainage',
    'Your baby has a high fever after surgery along with vomiting, lethargy, difficulty breathing, or the incision opens or separates',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-post-surgery-recovery',
    'baby-surgery-anesthesia-safety',
    'baby-fever-how-to-take-temperature',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. After Surgery: Caring for Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/After-Surgery.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Surgical wound care.',
      url: 'https://www.mayoclinic.org/tests-procedures/surgery/about/pac-20395283',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Postoperative Fever Evaluation. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK549844/',
    },
  ],
};
