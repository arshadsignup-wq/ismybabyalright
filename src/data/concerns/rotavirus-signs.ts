import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rotavirus-signs',
  title: 'I Think My Baby Has Rotavirus',
  category: 'digestive',
  searchTerms: [
    'rotavirus baby',
    'rotavirus symptoms baby',
    'baby rotavirus vaccine still got sick',
    'rotavirus watery diarrhea',
    'rotavirus vs stomach bug',
    'how long does rotavirus last baby',
    'rotavirus dehydration baby',
    'baby severe vomiting diarrhea',
    'rotavirus treatment baby',
    'rotavirus contagious how long',
  ],
  quickAnswer:
    'Rotavirus causes severe watery diarrhea, vomiting, and fever in babies and young children. Thanks to the rotavirus vaccine, severe cases have become much less common, but vaccinated children can still get milder infections. The illness typically lasts three to eight days, and the primary danger is dehydration. Keeping your baby hydrated is the most important part of treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies in this age range may have received only one or two doses of the rotavirus vaccine series and are not yet fully protected. Rotavirus in young infants can be particularly dangerous because they dehydrate quickly. Symptoms include profuse watery diarrhea, vomiting, fever, and irritability. If your young baby has frequent watery stools and vomiting, contact your pediatrician promptly and watch closely for signs of dehydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By six months, most babies have completed their rotavirus vaccine series, which greatly reduces the risk of severe disease. However, breakthrough infections with milder symptoms can still occur. The hallmark of rotavirus is watery diarrhea that can occur ten to twenty times per day along with vomiting. Continue breastfeeding or formula feeding, and offer small, frequent amounts of an oral rehydration solution as recommended by your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with rotavirus may have a sudden onset of vomiting followed by watery diarrhea and low-grade fever. The vomiting phase usually lasts one to two days, while the diarrhea can persist for five to seven days. Most toddlers can be managed at home with careful attention to hydration. Offer oral rehydration solution, avoid sugary drinks like juice or sports drinks, and continue a normal diet as tolerated.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers tend to handle rotavirus somewhat better than younger babies because their bodies have more fluid reserves. However, the diarrhea can still be severe and disruptive. Focus on hydration, hand hygiene to prevent spread to other family members, and cleaning contaminated surfaces with bleach-based products, as rotavirus is extremely contagious and can survive on surfaces for weeks.',
    },
  ],
  whenNormal: [
    'Your vaccinated child has a mild episode of diarrhea and vomiting lasting a few days with adequate fluid intake and wet diapers',
    'Your child\'s appetite is reduced during the illness but they are still drinking fluids and gradually improving',
    'Your child\'s diarrhea is becoming less frequent each day and they are returning to their normal energy level',
  ],
  whenToMention: [
    'Your baby has watery diarrhea and vomiting lasting more than a few days without clear improvement',
    'Your baby has a fever above 102 degrees Fahrenheit (38.9 degrees Celsius) along with the diarrhea',
    'You are unsure whether your baby is getting enough fluids or how to use oral rehydration solution',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration: fewer than six wet diapers in 24 hours, no tears when crying, dry mouth, sunken fontanelle, or unusual drowsiness',
    'Your baby is vomiting everything and cannot keep any fluids down for more than eight hours, or there is blood in the stool or vomit',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Rotavirus  -  Clinical Information.',
      url: 'https://www.cdc.gov/rotavirus/clinical.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rotavirus. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/vaccine-preventable-diseases/Pages/Rotavirus.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Rotavirus - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/rotavirus/symptoms-causes/syc-20351300',
    },
  ],
};
