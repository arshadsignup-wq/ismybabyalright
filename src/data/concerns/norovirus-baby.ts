import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'norovirus-baby',
  title: 'My Baby Has Norovirus (Stomach Bug)',
  category: 'digestive',
  searchTerms: [
    'norovirus baby',
    'stomach bug baby',
    'stomach flu baby',
    'baby vomiting and diarrhea',
    'norovirus symptoms toddler',
    'baby gastroenteritis',
    'how long does stomach bug last baby',
    'viral gastroenteritis baby',
    'norovirus treatment baby',
    'baby throwing up and diarrhea at same time',
  ],
  quickAnswer:
    'Norovirus, commonly called the stomach bug or stomach flu, causes sudden vomiting, watery diarrhea, and sometimes fever and stomach cramps. It is extremely contagious and is the most common cause of gastroenteritis in children. The illness usually lasts one to three days, and the primary concern is preventing dehydration through frequent small sips of fluids or oral rehydration solution.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Norovirus in very young babies can be serious because they dehydrate quickly. Symptoms typically begin suddenly with forceful vomiting followed by watery diarrhea. Breastfed babies have some protection through antibodies in breast milk, but can still get infected. Continue breastfeeding frequently in small amounts. If your baby is formula fed, offer small, frequent feeds. Contact your pediatrician if your baby under six months develops vomiting and diarrhea.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range are increasingly exposed to norovirus through daycare, play groups, and touching contaminated surfaces. The illness typically starts with vomiting that lasts one to two days, followed by diarrhea that may continue for a few more days. Offer breast milk, formula, or an oral rehydration solution in small amounts every few minutes. Avoid giving plain water as the sole fluid replacement, as babies also need electrolytes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with norovirus may vomit frequently for the first 12 to 24 hours, then transition to diarrhea. They may refuse food, which is fine temporarily as long as they are drinking fluids. Start with small sips of oral rehydration solution every five minutes and gradually increase as tolerated. Once vomiting subsides, offer bland foods in small amounts. The BRAT diet (bananas, rice, applesauce, toast) is no longer specifically recommended, but these foods are easy on the stomach.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers can usually communicate that they feel nauseated or have a stomach ache, which helps with management. Norovirus at this age is unpleasant but usually resolves within one to three days. Keep your child home from daycare until at least 48 hours after symptoms resolve, as they remain contagious. Wash hands thoroughly with soap and water, as alcohol-based sanitizers are less effective against norovirus.',
    },
  ],
  whenNormal: [
    'Your child has one to three days of vomiting and diarrhea but is able to keep some fluids down and has adequate wet diapers',
    'Your child\'s appetite is poor during the illness but they are gradually improving and starting to eat again',
    'Your child has mild stomach cramps that resolve as the illness passes',
    'Your child is tired and clingy during the illness but is alert when awake and becoming more active each day',
  ],
  whenToMention: [
    'Vomiting or diarrhea persists beyond three days without improvement',
    'Your child has a fever above 102 degrees Fahrenheit (38.9 degrees Celsius) that is not responding to fever-reducing medication',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration: fewer than six wet diapers in 24 hours, no tears when crying, dry cracked lips, sunken eyes or fontanelle, or extreme drowsiness',
    'Your child cannot keep any fluids down for more than eight hours, vomit contains blood or green bile, or your child seems confused or unusually difficult to wake',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Norovirus  -  Symptoms.',
      url: 'https://www.cdc.gov/norovirus/about/symptoms.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vomiting and Diarrhea. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Norovirus infection - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/norovirus/symptoms-causes/syc-20355296',
    },
  ],
};
