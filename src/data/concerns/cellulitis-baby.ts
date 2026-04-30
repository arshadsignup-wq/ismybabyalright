import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cellulitis-baby',
  title: 'Cellulitis (Skin Infection) in Babies',
  category: 'medical',
  searchTerms: [
    'cellulitis baby',
    'baby skin infection spreading',
    'baby red swollen hot skin',
    'baby skin infection from cut',
    'cellulitis toddler',
    'baby infected skin area',
    'red spreading rash baby hot to touch',
    'baby skin infection antibiotics',
    'bacterial skin infection baby',
    'baby swollen red skin warm',
  ],
  quickAnswer:
    'Cellulitis is a bacterial skin infection that causes an area of skin to become red, swollen, warm, and tender. It can happen when bacteria enter through a break in the skin such as a scratch, insect bite, or eczema patch. Cellulitis requires antibiotic treatment and needs medical attention because it can spread. With prompt treatment, most cases clear up completely within 7-10 days.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Cellulitis in very young infants is taken seriously because their immune systems are still developing. It can occur around the umbilical stump, circumcision site, or any area of broken skin. Redness that is spreading, warmth to the touch, or swelling should be evaluated promptly. Young infants with cellulitis may need to be monitored more closely, and some cases may require hospital-based treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile and start exploring, minor scratches and insect bites provide entry points for bacteria. Cellulitis at this age commonly appears on the legs, arms, or face. Watch for a red area that seems to be growing larger over hours. Drawing a line around the red edge with a pen can help you track whether it is spreading.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are prone to minor injuries, bug bites, and skin picking that can lead to cellulitis. It frequently occurs on the legs, feet, or around the eyes (periorbital cellulitis). Facial cellulitis, especially around the eye, always needs prompt medical evaluation. Keeping wounds clean, applying antibiotic ointment to cuts, and managing eczema can help prevent cellulitis.',
    },
  ],
  whenNormal: [
    'A small area of redness directly around a fresh cut or scrape that is not spreading',
    'Mild redness from an insect bite that stays the same size and improves over a day or two',
    'A warm, slightly pink area right at the site of a vaccination injection',
  ],
  whenToMention: [
    'A red area of skin that seems to be slowly expanding over 1-2 days',
    'Your child has a tender, warm, swollen area of skin after an insect bite or scratch',
    'Redness and swelling persist or worsen despite keeping the area clean',
    'Your child has recurring skin infections',
  ],
  whenToActNow: [
    'Redness is spreading rapidly over hours, especially with red streaking away from the site',
    'Your child has a fever along with a red, swollen, warm area of skin',
    'There is swelling, redness, or warmth around your child\'s eye (periorbital cellulitis requires urgent evaluation)',
    'The infected area has pus, blistering, or dark discoloration',
    'Your child appears very unwell, lethargic, or is in significant pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['impetigo-baby', 'insect-bites-baby', 'eczema', 'baby-blisters-on-skin'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cellulitis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cellulitis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cellulitis.',
      url: 'https://www.cdc.gov/group-a-strep/diseases/cellulitis.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Infections. Red Book Online.',
      url: 'https://redbook.solutions.aap.org/',
    },
  ],
};
