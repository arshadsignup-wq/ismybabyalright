import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dehydration-signs-baby',
  title: 'Is My Baby Dehydrated?',
  category: 'digestive',
  searchTerms: [
    'baby dehydration signs',
    'dehydrated baby symptoms',
    'how to tell if baby is dehydrated',
    'baby not enough wet diapers',
    'baby sunken fontanelle',
    'baby dry mouth dehydration',
    'newborn dehydration',
    'baby no tears when crying',
    'baby dehydrated how many wet diapers',
    'baby not peeing enough',
  ],
  quickAnswer:
    'Dehydration in babies happens when they lose more fluids than they take in, usually from vomiting, diarrhea, fever, or inadequate feeding. Key signs include fewer than six wet diapers in 24 hours, no tears when crying, a dry mouth, sunken fontanelle (soft spot), and unusual drowsiness. Mild dehydration can often be managed at home with extra fluids, but moderate to severe dehydration requires prompt medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns and very young babies are especially vulnerable to dehydration because of their small body size and higher fluid needs relative to their weight. A healthy newborn should have at least six wet diapers per day by the end of the first week. Fewer wet diapers, dark concentrated urine, excessive sleepiness, or poor feeding can signal dehydration. In breastfed newborns, dehydration may indicate insufficient milk intake, and urgent evaluation is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies in this age range may become dehydrated due to illness, particularly gastroenteritis causing vomiting and diarrhea. Monitor wet diaper output closely during any illness. A baby who is still producing at least six wet diapers per day, has moist lips and mouth, and is making tears when crying is likely adequately hydrated. If your baby has both vomiting and diarrhea, offer extra breastfeeding sessions or small frequent formula feeds.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids and become more active, their fluid needs increase. Dehydration can occur during illness or in hot weather if fluid intake is insufficient. At this age, you can offer small sips of water between feeds and use an oral rehydration solution during illness as recommended by your pediatrician. Watch for decreased energy, fewer wet diapers, and dry mouth as signs that more fluids are needed.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers can become dehydrated from stomach bugs, refusal to drink during illness, or excessive time in the heat. They can often tell you they are thirsty or show you they want a drink, but during illness they may refuse fluids. Offer oral rehydration solution in small frequent sips, try popsicles made from rehydration solution, and avoid sugary drinks. Keep track of wet diapers or bathroom trips to monitor hydration status.',
    },
  ],
  whenNormal: [
    'Your baby is producing at least six wet diapers per day, even if they are eating less than usual during a mild illness',
    'Your baby has moist lips and mouth, makes tears when crying, and has a normal-looking fontanelle',
    'Your baby has a single episode of vomiting or a few loose stools but is drinking well and acting normally afterward',
    'Your baby\'s urine is light yellow to clear in color',
  ],
  whenToMention: [
    'Your baby has had vomiting or diarrhea for more than 24 hours and you want guidance on fluid management',
    'You are noticing slightly fewer wet diapers than usual but your baby is still drinking some fluids',
    'Your baby\'s urine appears darker yellow than usual during an illness',
  ],
  whenToActNow: [
    'Your baby has fewer than six wet diapers in 24 hours, no tears when crying, a dry or sticky mouth, a sunken fontanelle, or is unusually drowsy or difficult to wake',
    'Your baby under three months has signs of dehydration, your baby cannot keep any fluids down for more than eight hours, or your baby\'s skin does not spring back when gently pinched (poor skin turgor)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Dehydration in Infants & Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/dehydration.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Dehydration - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/dehydration/symptoms-causes/syc-20354086',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Diarrhoeal disease  -  Treatment with oral rehydration salts.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
    },
  ],
};
