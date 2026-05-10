import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tooth-eruption-cyst-baby',
  title: 'Tooth Eruption Cyst',
  category: 'medical',
  searchTerms: [
    'eruption cyst baby',
    'blue bump on baby gum',
    'purple bubble on baby gum',
    'eruption hematoma baby',
    'blister on baby gum before tooth',
    'baby gum cyst teething',
    'blue swelling on baby gums',
    'fluid filled bump baby gum',
  ],
  quickAnswer:
    'An eruption cyst is a fluid-filled, dome-shaped swelling that appears on the gum over a tooth that is about to erupt. It looks like a bluish-purple or translucent bump. Eruption cysts are benign and almost always resolve on their own when the tooth breaks through the gum. They are relatively common and do not require treatment in most cases.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Eruption cysts are rare at this age since most teeth have not begun to erupt. Bluish bumps on a newborn\'s gums are more likely Bohn\'s nodules, Epstein pearls, or gingival cysts, all of which are harmless and resolve on their own.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the first teeth begin moving toward the surface, an eruption cyst may develop. It appears as a rounded, bluish or clear swelling on the gum ridge directly over where the tooth is erupting. The cyst is filled with fluid (or blood, making it appear darker). It is painless in most cases and resolves once the tooth erupts through it.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the most common age for eruption cysts since multiple teeth are actively erupting. The cyst may appear suddenly and can look alarming, but it is harmless. The tooth typically erupts through the cyst within 1-2 weeks. Parents should avoid popping or lancing the cyst at home as this could introduce infection.',
    },
    {
      ageRange: '12 months+',
      context:
        'Eruption cysts can occur with any erupting tooth, including molars and canines. Molar eruption cysts may appear larger due to the tooth\'s size. If a cyst persists for several weeks without the tooth erupting, or if it appears infected, a pediatric dentist can perform a simple incision to expose the tooth.',
    },
  ],
  whenNormal: [
    'A bluish, fluid-filled bump appears on the gum where you expect a tooth to come in',
    'The cyst is painless and your baby does not seem bothered by it',
    'The bump resolves on its own within 1-2 weeks as the tooth erupts',
    'Your baby continues to eat and feed normally despite the visible cyst',
  ],
  whenToMention: [
    'The cyst has been present for more than 2-3 weeks without a tooth erupting through it',
    'The cyst appears to be growing significantly larger',
    'Your baby seems to have pain or discomfort from the cyst area',
  ],
  whenToActNow: [
    'The area around the cyst becomes very red, warm, swollen, or is draining pus, which could indicate an infection',
    'Your baby develops a fever along with gum swelling, or the bump is accompanied by significant facial swelling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Management of the Developing Dentition and Occlusion in Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-the-developing-dentition/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Tooth: 7 Facts Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Eruption cysts: A series of two cases. Journal of the Indian Society of Pedodontics and Preventive Dentistry.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26838075/',
    },
  ],
};
