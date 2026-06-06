import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vomiting-repeatedly-dehydration',
  title: 'Repeated Vomiting and Dehydration Risk in Baby',
  category: 'digestive',
  searchTerms: [
    'baby vomiting repeatedly',
    'baby dehydration vomiting',
    'baby can\'t keep anything down',
    'baby vomiting dehydration signs',
    'baby vomiting how to hydrate',
    'baby vomiting won\'t stop',
    'baby frequent vomiting dehydration risk',
    'infant repeated vomiting',
    'baby oral rehydration vomiting',
    'baby vomiting when to go to ER',
  ],
  quickAnswer:
    'Repeated vomiting puts babies at risk of dehydration more quickly than older children because of their smaller fluid reserves. The key is offering small, frequent sips of fluid (breast milk, formula, or oral rehydration solution) rather than large feeds. Signs of dehydration include fewer wet diapers, dry mouth, sunken fontanelle, and lethargy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants can become dehydrated very quickly from repeated vomiting. If your baby under 3 months is vomiting repeatedly, contact your pediatrician right away. For breastfed babies, offer short, frequent nursing sessions. For formula-fed babies, try small amounts (1 to 2 ounces) every 15 to 20 minutes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'After a vomiting episode, wait 15 to 20 minutes, then offer a small amount of breast milk, formula, or Pedialyte. If the baby keeps it down, slowly increase the amount. If vomiting recurs, wait again and try smaller amounts. Track wet diapers to monitor hydration: aim for at least 4 to 6 wet diapers in 24 hours.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies who are eating solids can also be offered small sips of water or oral rehydration solution between breast milk or formula. Avoid juice, which can worsen diarrhea. Resume bland solid foods when vomiting has stopped for several hours. The BRAT diet is no longer specifically recommended; offer whatever your baby will eat.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can have sips of oral rehydration solution from a cup. Ice pops made from Pedialyte or diluted juice can be helpful. If your toddler is vomiting everything including small sips, and especially if they have had fewer than 3 wet diapers in 24 hours, seek medical care for possible IV fluids.',
    },
  ],
  whenNormal: [
    'Occasional vomiting from a stomach bug with the child able to take small sips and maintaining wet diapers',
    'Vomiting that resolves within 12 to 24 hours with the child returning to normal feeding',
  ],
  whenToMention: [
    'Vomiting has lasted more than 12 hours and you are concerned about hydration',
    'Your baby is taking some fluids but seems more tired than usual',
    'You need guidance on how much and what to offer during a vomiting illness',
  ],
  whenToActNow: [
    'No wet diaper for 6 or more hours in a baby, or 8 hours in a toddler',
    'Your baby has a sunken fontanelle, dry mouth, no tears when crying, or is lethargic',
    'Vomiting is persistent for more than 24 hours in a baby under 6 months',
    'Bloody or green (bilious) vomit at any point',
    'Your baby appears limp, very pale, or is difficult to wake',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vomiting in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Oral Rehydration Therapy.',
      url: 'https://www.cdc.gov/cholera/treatment/rehydration-therapy.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Dehydration. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Signs-of-Dehydration.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-vomiting-no-fever', 'baby-stomach-virus-duration', 'baby-vomiting-bile'],
};
